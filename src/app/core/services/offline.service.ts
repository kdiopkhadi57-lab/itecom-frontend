import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course.model';

/** Cours téléchargé : ce qu'il faut pour le suivre sans connexion. */
export interface OfflineCourse {
  courseId: number;
  title: string;
  lessonCount: number;
  sizeBytes: number;
  downloadedAt: string;
  /** Vidéo téléchargée pour chaque leçon (version légère de préférence). */
  videos: Record<number, string>;
  files: string[];
}

interface QueuedRequest { url: string; body: unknown; at: number; }

const API_CACHE = 'itecom-api';
const MEDIA_CACHE = 'itecom-offline';
const INDEX_KEY = '/__offline__/courses.json';
/** Préfixe conservé par AuthService.clearSession (une session expirée n'efface pas le travail hors ligne). */
const QUEUE_KEY = 'itecom-offline-queue';

/**
 * Hors connexion : téléchargement des cours (données, vidéos légères, documents) dans le navigateur,
 * état de la connexion, et progression enregistrée hors ligne puis envoyée au retour du réseau.
 */
@Injectable({ providedIn: 'root' })
export class OfflineService {
  readonly online$ = new BehaviorSubject<boolean>(navigator.onLine);
  readonly courses$ = new BehaviorSubject<OfflineCourse[]>([]);
  /** Téléchargements en cours : identifiant du cours → pourcentage. */
  readonly downloading$ = new BehaviorSubject<Record<number, number>>({});
  readonly supported = typeof caches !== 'undefined' && 'serviceWorker' in navigator;

  constructor(private http: HttpClient, zone: NgZone) {
    window.addEventListener('online', () => zone.run(() => { this.online$.next(true); this.flushQueue(); }));
    window.addEventListener('offline', () => zone.run(() => this.online$.next(false)));
    this.loadIndex();
    if (navigator.onLine) setTimeout(() => this.flushQueue(), 3000);
  }

  get online(): boolean { return this.online$.value; }

  isDownloaded(courseId: number): boolean {
    return this.courses$.value.some(c => c.courseId === courseId);
  }

  /** Vidéo à lire pour une leçon d'un cours téléchargé (celle qui est stockée sur l'appareil). */
  downloadedVideo(courseId: number, lessonId: number): string | null {
    return this.courses$.value.find(c => c.courseId === courseId)?.videos[lessonId] ?? null;
  }

  // ── Téléchargement ─────────────────────────────────────────────────────────

  /** Télécharge un cours pour le suivre sans connexion. Renvoie le cours enregistré. */
  async download(course: Course): Promise<OfflineCourse> {
    if (!this.supported) throw new Error('Votre navigateur ne permet pas le hors connexion. Utilisez Chrome, Edge ou Firefox récent.');
    if (!this.online) throw new Error('Connectez-vous à internet pour télécharger le cours.');
    const id = course.id;
    this.setProgress(id, 0);
    try {
      // Les données du cours et la progression, telles que le lecteur les demande
      const apiUrls = [`/api/courses/public/${id}`, `/api/progress/course/${id}`];
      const apiCache = await caches.open(API_CACHE);
      let fullCourse: Course = course;
      for (const url of apiUrls) {
        const res = await fetch(url, { headers: this.authHeaders() });
        if (!res.ok) {
          if (url.includes('/courses/')) throw new Error('Cours introuvable sur le serveur.');
          continue;
        }
        if (url.includes('/courses/')) fullCourse = await res.clone().json();
        await apiCache.put(url, res);
      }

      // Vidéos (légères de préférence) et documents
      const videos: Record<number, string> = {};
      const files: string[] = [];
      for (const lesson of fullCourse.lessons ?? []) {
        const video = this.localUrl(lesson.videoLightUrl) ?? this.localUrl(lesson.videoUrl);
        if (video) { videos[lesson.id] = video; files.push(video); }
        const doc = this.localUrl(lesson.pdfUrl);
        if (doc) files.push(doc);
      }
      const unique = [...new Set(files)];
      await this.checkSpace(unique);
      await navigator.storage?.persist?.().catch(() => false);

      const media = await caches.open(MEDIA_CACHE);
      let sizeBytes = 0;
      for (let i = 0; i < unique.length; i++) {
        const url = unique[i];
        const existing = await media.match(url);
        if (existing) {
          sizeBytes += Number(existing.headers.get('Content-Length') || 0);
        } else {
          sizeBytes += await this.fetchInto(media, url, fraction =>
            this.setProgress(id, Math.round(((i + fraction) / unique.length) * 100)));
        }
        this.setProgress(id, Math.round(((i + 1) / unique.length) * 100));
      }

      const entry: OfflineCourse = {
        courseId: id, title: fullCourse.title, lessonCount: fullCourse.lessons?.length ?? 0,
        sizeBytes, downloadedAt: new Date().toISOString(), videos, files: unique
      };
      await this.saveIndex([...this.courses$.value.filter(c => c.courseId !== id), entry]);
      return entry;
    } finally {
      this.setProgress(id, null);
    }
  }

  /** Retire un cours de l'appareil (les fichiers partagés avec un autre cours téléchargé sont gardés). */
  async remove(courseId: number) {
    if (!this.supported) return;
    const others = this.courses$.value.filter(c => c.courseId !== courseId);
    const keep = new Set(others.flatMap(c => c.files));
    const entry = this.courses$.value.find(c => c.courseId === courseId);
    const media = await caches.open(MEDIA_CACHE);
    for (const f of entry?.files ?? []) if (!keep.has(f)) await media.delete(f);
    await this.saveIndex(others);
  }

  /** Déconnexion volontaire : on efface les cours téléchargés et la progression non envoyée. */
  async clearUserData() {
    try { localStorage.removeItem(QUEUE_KEY); } catch { }
    if (this.supported) {
      navigator.serviceWorker.controller?.postMessage('clear-user-data');
      await Promise.all([caches.delete(API_CACHE), caches.delete(MEDIA_CACHE)]).catch(() => {});
    }
    this.courses$.next([]);
  }

  // ── Progression faite hors connexion ───────────────────────────────────────

  /** Garde une action (leçon terminée, temps passé…) pour l'envoyer quand la connexion revient. */
  enqueue(url: string, body: unknown) {
    const queue = this.readQueue();
    queue.push({ url, body, at: Date.now() });
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(queue.slice(-500))); } catch { }
  }

  get pendingCount(): number { return this.readQueue().length; }

  private flushing = false;

  async flushQueue() {
    if (this.flushing || !this.online) return;
    this.flushing = true;
    try {
      let queue = this.readQueue();
      while (queue.length && this.online) {
        const item = queue[0];
        try {
          await new Promise<void>((resolve, reject) =>
            this.http.post(item.url, item.body).subscribe({ next: () => resolve(), error: e => reject(e) }));
        } catch (e: any) {
          // Réseau absent ou session expirée : on réessaiera ; autre erreur : l'action est abandonnée
          if (e?.status === 0 || e?.status === 401 || e?.status === 503) break;
        }
        queue = this.readQueue().slice(1);
        try { localStorage.setItem(QUEUE_KEY, JSON.stringify(queue)); } catch { }
      }
    } finally {
      this.flushing = false;
    }
  }

  private readQueue(): QueuedRequest[] {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); } catch { return []; }
  }

  // ── Outils ─────────────────────────────────────────────────────────────────

  /** Seuls les fichiers de la plateforme (/uploads) sont téléchargés ; un lien externe (YouTube…) ne l'est pas. */
  private localUrl(url: string | null | undefined): string | null {
    return url && url.startsWith('/uploads/') ? url.split('?')[0] : null;
  }

  private authHeaders(): Record<string, string> {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  /** Télécharge un fichier dans le cache en suivant l'avancement ; renvoie sa taille. */
  private async fetchInto(cache: Cache, url: string, onProgress: (fraction: number) => void): Promise<number> {
    const res = await fetch(url);
    if (!res.ok || !res.body) throw new Error(`Fichier indisponible : ${url.substring(url.lastIndexOf('/') + 1)}`);
    const total = Number(res.headers.get('Content-Length') || 0);
    const [toCache, toCount] = res.body.tee();
    const headers = new Headers({ 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' });
    if (total) headers.set('Content-Length', String(total));
    const stored = cache.put(url, new Response(toCache, { status: 200, headers }));
    const reader = toCount.getReader();
    let received = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      received += value.length;
      if (total) onProgress(Math.min(1, received / total));
    }
    await stored;
    return received;
  }

  /** Vérifie la place disponible sur l'appareil avant de télécharger. */
  private async checkSpace(urls: string[]) {
    const estimate = await navigator.storage?.estimate?.().catch(() => null);
    if (!estimate?.quota) return;
    let needed = 0;
    for (const url of urls) {
      const head = await fetch(url, { method: 'HEAD' }).catch(() => null);
      needed += Number(head?.headers.get('Content-Length') || 0);
    }
    const free = estimate.quota - (estimate.usage ?? 0);
    if (needed > free) {
      throw new Error(`Espace insuffisant sur l'appareil : ${this.mb(needed)} nécessaires, ${this.mb(free)} disponibles.`);
    }
  }

  private mb(bytes: number) { return `${Math.max(1, Math.round(bytes / 1048576))} Mo`; }

  private setProgress(courseId: number, value: number | null) {
    const next = { ...this.downloading$.value };
    if (value === null) delete next[courseId]; else next[courseId] = value;
    this.downloading$.next(next);
  }

  private async loadIndex() {
    if (!this.supported) return;
    try {
      const res = await (await caches.open(MEDIA_CACHE)).match(INDEX_KEY);
      this.courses$.next(res ? await res.json() : []);
    } catch {
      this.courses$.next([]);
    }
  }

  private async saveIndex(list: OfflineCourse[]) {
    const media = await caches.open(MEDIA_CACHE);
    await media.put(INDEX_KEY, new Response(JSON.stringify(list), { headers: { 'Content-Type': 'application/json' } }));
    this.courses$.next(list);
  }
}

/** Taille lisible : 12,4 Mo. */
export function formatSize(bytes: number): string {
  if (bytes < 1048576) return `${Math.max(1, Math.round(bytes / 1024))} Ko`;
  return `${(bytes / 1048576).toFixed(1).replace('.', ',')} Mo`;
}


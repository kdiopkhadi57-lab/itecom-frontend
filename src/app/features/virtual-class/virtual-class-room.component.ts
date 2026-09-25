import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

declare const JitsiMeetExternalAPI: any;

interface VirtualClass {
  id: number;
  title: string;
  description: string;
  scheduledAt: string;
  durationMinutes: number;
  roomName: string;
  recordingUrl: string | null;
  status: string;
  teacherName: string | null;
  courseTitle: string | null;
}

interface JitsiTokenResponse {
  token: string;
  domain: string;
  roomName: string;
}

@Component({
  selector: 'app-virtual-class-room',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="d-flex align-items-center gap-3 mb-3">
        <a routerLink="/virtual-class" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-arrow-left"></i>
        </a>
        <div>
          <h2 class="fw-bold mb-0">{{ vc?.title || 'Classe virtuelle' }}</h2>
          <p class="text-muted mb-0 small">{{ vc?.description }}</p>
        </div>
      </div>

      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <div *ngIf="!loading && vc">
        <div *ngIf="isTeacher && joinNotifications.length > 0" class="alert alert-success d-flex flex-column gap-1 py-2">
          <div *ngFor="let n of joinNotifications"><i class="bi bi-person-check-fill me-2"></i><strong>{{ n }}</strong> a rejoint la session.</div>
        </div>

        <div *ngIf="isTeacher" class="card border-0 shadow-sm mb-3">
          <div class="card-body d-flex align-items-center gap-3 py-3">
            <span class="fw-semibold"><i class="bi bi-record-circle me-2 text-danger"></i>Enregistrement de la session</span>
            <button class="btn btn-sm btn-danger" *ngIf="!recording" (click)="startRecording()">
              <i class="bi bi-record-circle me-1"></i>Démarrer l'enregistrement
            </button>
            <button class="btn btn-sm btn-outline-danger" *ngIf="recording" (click)="stopRecording()">
              <i class="bi bi-stop-circle me-1"></i>Arrêter et enregistrer
            </button>
            <span *ngIf="recording" class="badge bg-danger">
              <i class="bi bi-record-circle-fill me-1"></i>Enregistrement en cours...
            </span>
            <span *ngIf="uploading" class="text-muted small">
              <span class="spinner-border spinner-border-sm me-1"></span>Envoi de l'enregistrement...
            </span>
            <button class="btn btn-sm btn-outline-secondary" (click)="endSession()" [disabled]="ending">
              <span *ngIf="ending" class="spinner-border spinner-border-sm me-1"></span>
              <i *ngIf="!ending" class="bi bi-box-arrow-right me-1"></i>
              {{ ending ? "Sauvegarde de l'enregistrement..." : 'Terminer la session' }}
            </button>
          </div>
        </div>

        <div *ngIf="isTeacher" class="card border-0 shadow-sm mb-3">
          <div class="card-body py-3">
            <h6 class="fw-bold mb-2">
              <i class="bi bi-people-fill me-2 text-primary"></i>Participants connectés
              <span class="badge bg-primary ms-1">{{ connectedParticipants.length }}</span>
            </h6>
            <div *ngIf="connectedParticipants.length === 0" class="text-muted small">
              Aucun étudiant connecté pour le moment.
            </div>
            <div class="d-flex flex-wrap gap-2">
              <span class="badge bg-light text-dark border d-flex align-items-center gap-1 py-2 px-3" *ngFor="let p of connectedParticipants">
                <i class="bi bi-person-circle text-success"></i>{{ p.name }}
              </span>
            </div>
          </div>
        </div>

        <div *ngIf="uploadSuccess" class="alert alert-success">
          <i class="bi bi-check-circle me-2"></i>Enregistrement sauvegardé dans la plateforme. Il sera disponible dans l'onglet "Passées".
        </div>
        <div *ngIf="uploadError" class="alert alert-danger">
          <i class="bi bi-exclamation-circle me-2"></i>{{ uploadError }}
        </div>

        <div *ngIf="!joined" class="alert alert-info d-flex flex-wrap align-items-center gap-2">
          <i class="bi bi-info-circle me-2"></i>
          <span class="flex-grow-1">
            Si une fenêtre <strong>"Rejoindre la réunion" / "Join Meeting"</strong> s'affiche dans la vidéo ci-dessous
            (avec les réglages caméra/micro), cliquez dessus pour entrer dans la session.
          </span>
          <button *ngIf="showReload" class="btn btn-sm btn-outline-primary" (click)="reloadConference()">
            <i class="bi bi-arrow-clockwise me-1"></i>Recharger la visioconférence
          </button>
        </div>

        <div #jitsiContainer style="width:100%; height:75vh; border-radius:12px; overflow:hidden" class="shadow-sm"></div>

        <details class="mt-3">
          <summary class="text-muted small">Diagnostic technique (en cas de problème de connexion)</summary>
          <div class="bg-dark text-light p-2 mt-1 rounded small" style="font-family:monospace; max-height:200px; overflow:auto">
            <div *ngFor="let line of debugLog">{{ line }}</div>
          </div>
        </details>
      </div>
    </div>
  `
})
export class VirtualClassRoomComponent implements OnInit, OnDestroy {
  @ViewChild('jitsiContainer', { static: false }) jitsiContainer!: ElementRef<HTMLDivElement>;

  vc: VirtualClass | null = null;
  loading = true;
  recording = false;
  uploading = false;
  uploadSuccess = false;
  uploadError = '';
  knockingParticipants: { id: string; name: string }[] = [];
  connectedParticipants: { id: string; name: string }[] = [];
  joinNotifications: string[] = [];
  debugLog: string[] = [];
  joined = false;
  showReload = false;
  ending = false;

  private joinTimeoutHandle: any;

  private jitsiApi: any;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private displayStream: MediaStream | null = null;
  private micStream: MediaStream | null = null;
  private recordingAudioCtx: AudioContext | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public authService: AuthService
  ) {}

  get isTeacher(): boolean {
    return this.authService.isTeacher || this.authService.isAdmin;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<VirtualClass>(`/api/virtual-classes/${id}`).subscribe({
      next: (data) => {
        this.vc = data;
        this.loading = false;
        setTimeout(() => this.initJitsi(), 0);
      },
      error: () => { this.loading = false; }
    });
  }

  /**
   * Si l'enseignant ferme l'onglet/le navigateur pendant un enregistrement,
   * la page est déchargée immédiatement : onstop() ne se déclenche jamais
   * et l'enregistrement est perdu sans avertissement. On bloque donc la
   * fermeture tant que l'enregistrement est en cours ou en cours d'envoi.
   */
  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event: BeforeUnloadEvent) {
    if (this.recording || this.uploading) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  ngOnDestroy() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.displayStream?.getTracks().forEach(t => t.stop());
    clearTimeout(this.joinTimeoutHandle);
    this.jitsiApi?.dispose();
  }

  reloadConference() {
    this.log('Rechargement manuel de la visioconférence...');
    this.showReload = false;
    this.joined = false;
    clearTimeout(this.joinTimeoutHandle);
    try { this.jitsiApi?.dispose(); } catch { /* ignore */ }
    this.jitsiApi = null;
    this.connectedParticipants = [];
    this.knockingParticipants = [];
    setTimeout(() => this.initJitsi(), 100);
  }

  private loadJitsiScript(domain: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof JitsiMeetExternalAPI !== 'undefined') {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://${domain}/external_api.js`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Impossible de charger Jitsi Meet'));
      document.body.appendChild(script);
    });
  }

  private async initJitsi() {
    if (!this.vc) return;
    try {
      this.log('Demande du jeton sécurisé Jitsi...');
      const jitsi = await firstValueFrom(
        this.http.get<JitsiTokenResponse>(`/api/virtual-classes/${this.vc.id}/jitsi-token`)
      );
      this.log('Jeton obtenu. Chargement de Jitsi...');
      await this.loadJitsiScript(jitsi.domain);
      this.log('Script chargé. Création de la salle "' + jitsi.roomName + '"...');
      const user = this.authService.currentUser;
      this.jitsiApi = new JitsiMeetExternalAPI(jitsi.domain, {
        roomName: jitsi.roomName,
        jwt: jitsi.token,
        parentNode: this.jitsiContainer.nativeElement,
        width: '100%',
        height: '100%',
        userInfo: {
          displayName: user ? `${user.firstName} ${user.lastName}` : 'Utilisateur'
        },
        configOverwrite: {
          prejoinPageEnabled: false,
          prejoinConfig: { enabled: false },
          requireDisplayName: false,
          lobby: { enabled: false },
          hideLobbyButton: true,
          enableLobbyChat: false,
          disableDeepLinking: true
        }
      });

      // Si l'embed reste bloqué sur l'écran de pré-connexion de meet.jit.si
      // (videoConferenceJoined jamais déclenché), on propose un bouton pour
      // recharger l'iframe, qui résout parfois le blocage.
      this.showReload = false;
      clearTimeout(this.joinTimeoutHandle);
      this.joinTimeoutHandle = setTimeout(() => {
        if (!this.joined) {
          this.log('Toujours pas connecté après 8s, affichage du bouton de rechargement.');
          this.showReload = true;
        }
      }, 8000);

      this.jitsiApi.addListener('videoConferenceJoined', (event: any) => {
        this.joined = true;
        this.showReload = false;
        clearTimeout(this.joinTimeoutHandle);
        this.log('videoConferenceJoined : ' + (event?.displayName || '') + ' (id=' + event?.id + ')');
        // Récupère les participants déjà présents dans le salon au moment
        // où le professeur ouvre la page (ex: étudiants connectés avant lui).
        const existing = this.jitsiApi.getParticipantsInfo?.() || [];
        this.log('Participants déjà présents : ' + existing.length);
        for (const p of existing) {
          this.addParticipant(p.participantId, p.displayName);
        }
      });

      this.jitsiApi.addListener('videoConferenceLeft', () => {
        this.log('videoConferenceLeft');
      });

      this.jitsiApi.addListener('participantRoleChanged', (event: any) => {
        this.log('participantRoleChanged : id=' + event?.id + ' role=' + event?.role);
      });

      // Liste des participants connectés, affichée côté professeur.
      this.jitsiApi.addListener('participantJoined', (event: any) => {
        this.log('participantJoined : ' + (event?.displayName || event?.id));
        this.addParticipant(event?.id, event?.displayName);
        this.knockingParticipants = this.knockingParticipants.filter(p => p.id !== event?.id);
        if (this.isTeacher && event?.displayName) {
          this.notifyJoin(event.displayName);
        }
      });
      this.jitsiApi.addListener('participantLeft', (event: any) => {
        this.log('participantLeft : ' + event?.id);
        this.connectedParticipants = this.connectedParticipants.filter(p => p.id !== event?.id);
      });

      this.jitsiApi.addListener('readyToClose', () => {
        this.log('readyToClose (la session a été quittée côté Jitsi)');
      });
    } catch (e: any) {
      const detail = e?.error?.message || e?.message || 'Erreur inconnue';
      this.log('ERREUR : ' + detail);
      this.uploadError = `Impossible de charger la visioconférence : ${detail}`;
    }
  }

  private log(message: string) {
    const time = new Date().toLocaleTimeString();
    this.debugLog.push(`[${time}] ${message}`);
  }

  private addParticipant(id: string, name: string) {
    if (id && !this.connectedParticipants.some(p => p.id === id)) {
      this.connectedParticipants.push({ id, name: name || 'Participant' });
    }
  }

  private notifyJoin(name: string) {
    this.joinNotifications.push(name);
    setTimeout(() => {
      this.joinNotifications = this.joinNotifications.filter(n => n !== name);
    }, 5000);
  }

  async startRecording() {
    this.uploadError = '';
    this.uploadSuccess = false;
    try {
      // 1. Capturer l'écran (+ audio système si l'utilisateur l'autorise)
      this.displayStream = await (navigator.mediaDevices as any).getDisplayMedia({
        // Qualité réduite : la vidéo est stockée en base64 dans MySQL (64 Mo max par requête)
        video: { width: 1280, height: 720, frameRate: 15 },
        audio: true
      });

      // 2. Capturer le microphone de l'appareil connecté
      try {
        this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      } catch {
        this.micStream = null;
      }

      // 3. Mixer audio système + micro via AudioContext
      this.recordingAudioCtx = new AudioContext();
      const dest = this.recordingAudioCtx.createMediaStreamDestination();

      const display = this.displayStream!;
      const audioCtx = this.recordingAudioCtx!;

      if (display.getAudioTracks().length > 0) {
        const sysSource = audioCtx.createMediaStreamSource(
          new MediaStream(display.getAudioTracks())
        );
        sysSource.connect(dest);
      }
      if (this.micStream && this.micStream.getAudioTracks().length > 0) {
        const micSource = audioCtx.createMediaStreamSource(this.micStream);
        micSource.connect(dest);
      }

      // 4. Stream final : vidéo écran + audio mixé
      const combined = new MediaStream([
        ...display.getVideoTracks(),
        ...dest.stream.getAudioTracks()
      ]);

      // 5. Lancer l'enregistrement
      this.recordedChunks = [];
      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
        ? 'video/webm;codecs=vp9,opus'
        : 'video/webm';
      // ~280 kbit/s au total, soit environ 20 minutes d'enregistrement possibles
      this.mediaRecorder = new MediaRecorder(combined, {
        mimeType,
        videoBitsPerSecond: 250_000,
        audioBitsPerSecond: 32_000
      });
      this.mediaRecorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) this.recordedChunks.push(e.data);
      };
      this.mediaRecorder.onstop = () => this.uploadRecording(this.stopCallback);
      display.getVideoTracks()[0].onended = () => this.stopRecording();
      this.mediaRecorder.start();
      this.recording = true;
    } catch (e) {
      this.uploadError = "Impossible de démarrer l'enregistrement (autorisation refusée).";
    }
  }

  /** Appelé une fois l'enregistrement arrêté ET envoyé (ou s'il n'y avait rien à envoyer). */
  private stopCallback: (() => void) | null = null;

  stopRecording(onStopped?: () => void) {
    this.stopCallback = onStopped || null;
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      // mediaRecorder.stop() est asynchrone : onstop (qui déclenche l'upload)
      // ne se déclenche qu'après ce stop(). On attend donc onstop avant
      // d'appeler le callback (ex: navigation après "Terminer la session").
      this.mediaRecorder.stop();
    } else {
      this.uploadRecording(this.stopCallback);
    }
    this.displayStream?.getTracks().forEach(t => t.stop());
    this.micStream?.getTracks().forEach(t => t.stop());
    this.micStream = null;
    this.recordingAudioCtx?.close();
    this.recordingAudioCtx = null;
    this.recording = false;
  }

  private uploadRecording(onDone?: (() => void) | null) {
    if (!this.vc || this.recordedChunks.length === 0) {
      onDone?.();
      return;
    }
    const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
    const filename = `session-${this.vc.id}.webm`;

    // Le base64 ajoute ~33 % : au-delà de ~45 Mo de vidéo, MySQL refuse la requête
    if (blob.size > 45 * 1024 * 1024) {
      const sizeMb = Math.round(blob.size / (1024 * 1024));
      this.uploadError = `Enregistrement trop volumineux (${sizeMb} Mo, maximum 45 Mo, soit environ 20 minutes). `
        + 'Faites des enregistrements plus courts.';
      onDone?.();
      return;
    }

    this.uploading = true;
    this.extractThumbnailFromBlob(blob).then(thumbnailBase64 => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        this.http.post(`/api/teacher/virtual-classes/${this.vc!.id}/recording`, {
          videoBase64: base64,
          mimeType: 'video/webm',
          filename,
          thumbnailBase64
        }).subscribe({
          next: () => {
            this.uploading = false;
            this.uploadSuccess = true;
            if (this.vc) this.vc.status = 'COMPLETED';
            onDone?.();
          },
          error: () => {
            this.uploading = false;
            this.uploadError = "Erreur lors de l'envoi de l'enregistrement vers la plateforme.";
            onDone?.();
          }
        });
      };
      reader.readAsDataURL(blob);
    });
  }

  private extractThumbnailFromBlob(blob: Blob): Promise<string> {
    return new Promise(resolve => {
      const video = document.createElement('video');
      const url = URL.createObjectURL(blob);
      video.src = url;
      video.muted = true;
      video.currentTime = 1;
      video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 320;
        canvas.height = 180;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, 320, 180);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
          resolve(dataUrl.split(',')[1]);
        } else {
          resolve('');
        }
        URL.revokeObjectURL(url);
      };
      video.onerror = () => { URL.revokeObjectURL(url); resolve(''); };
    });
  }

  endSession() {
    if (!this.vc) return;
    const finish = () => {
      this.ending = false;
      if (this.isTeacher && this.vc!.status !== 'COMPLETED') {
        this.http.put(`/api/teacher/virtual-classes/${this.vc!.id}/status`, {}, { params: { status: 'COMPLETED' } }).subscribe({
          next: () => this.router.navigate(['/virtual-class']),
          error: () => this.router.navigate(['/virtual-class'])
        });
      } else {
        this.router.navigate(['/virtual-class']);
      }
    };

    if (this.recording) {
      // On attend que l'enregistrement soit arrêté ET envoyé au serveur
      // avant de quitter la page, sinon le cours enregistré est perdu.
      this.ending = true;
      this.stopRecording(finish);
    } else {
      finish();
    }
  }
}

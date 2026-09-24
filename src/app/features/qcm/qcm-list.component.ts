import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Qcm { id: number; title: string; description: string; status: string; questionCount: number; createdAt: string; }

@Component({
  selector: 'app-qcm-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 class="fw-bold mb-0">Mes devoirs</h1>
          <p class="text-muted mb-0">Créez et gérez vos questionnaires à choix multiples</p>
        </div>
        <a routerLink="/teacher/qcms/create" class="btn fw-semibold px-4"
           style="background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:12px">
          <i class="bi bi-plus-circle me-2"></i>Créer un devoir
        </a>
      </div>

      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <div *ngIf="!loading && qcms.length === 0" class="text-center py-5">
        <div style="font-size:4rem">📝</div>
        <h5 class="mt-3 fw-bold">Aucun devoir créé</h5>
        <p class="text-muted">Commencez par créer votre premier questionnaire.</p>
        <a routerLink="/teacher/qcms/create" class="btn btn-primary px-4 mt-2">Créer un devoir</a>
      </div>

      <div class="row g-3" *ngIf="!loading && qcms.length > 0">
        <div class="col-12 col-md-6 col-xl-4" *ngFor="let q of qcms">
          <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">
            <div style="height:5px"
                 [style.background]="q.status === 'PUBLISHED' ? 'linear-gradient(90deg,#10b981,#059669)' : 'linear-gradient(90deg,#6366f1,#4f46e5)'">
            </div>
            <div class="card-body p-4">
              <div class="d-flex align-items-start justify-content-between mb-2">
                <h6 class="fw-bold mb-0 flex-grow-1 me-2">{{ q.title }}</h6>
                <span class="badge rounded-pill flex-shrink-0"
                      [style.background]="q.status === 'PUBLISHED' ? '#d1fae5' : '#e0e7ff'"
                      [style.color]="q.status === 'PUBLISHED' ? '#065f46' : '#3730a3'">
                  {{ q.status === 'PUBLISHED' ? '✅ Publié' : '✏️ Brouillon' }}
                </span>
              </div>
              <p class="text-muted small mb-3" *ngIf="q.description">{{ q.description }}</p>
              <div class="d-flex gap-3 text-muted small mb-4">
                <span><i class="bi bi-question-circle me-1"></i>{{ q.questionCount }} question(s)</span>
                <span><i class="bi bi-calendar3 me-1"></i>{{ q.createdAt | date:'dd/MM/yyyy' }}</span>
              </div>
              <div class="d-flex gap-2 flex-wrap">
                <a [routerLink]="['/teacher/qcms', q.id, 'edit']" class="btn btn-sm btn-outline-secondary">
                  <i class="bi bi-pencil me-1"></i>Modifier
                </a>
                <a [routerLink]="['/teacher/qcms', q.id, 'resultats']" class="btn btn-sm btn-outline-info">
                  <i class="bi bi-bar-chart me-1"></i>Résultats
                </a>
                <button *ngIf="q.status === 'DRAFT'" class="btn btn-sm btn-success"
                        (click)="publish(q)">
                  <i class="bi bi-send me-1"></i>Publier
                </button>
                <button *ngIf="q.status === 'PUBLISHED'" class="btn btn-sm btn-outline-warning"
                        (click)="unpublish(q)">
                  <i class="bi bi-pause-circle me-1"></i>Dépublier
                </button>
                <button class="btn btn-sm btn-outline-danger" (click)="delete(q)">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class QcmListComponent implements OnInit {
  qcms: Qcm[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    this.http.get<Qcm[]>('/api/teacher/qcms').subscribe({
      next: (d) => { this.qcms = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  publish(q: Qcm) {
    this.http.post(`/api/teacher/qcms/${q.id}/publish`, {}).subscribe(() => q.status = 'PUBLISHED');
  }

  unpublish(q: Qcm) {
    this.http.post(`/api/teacher/qcms/${q.id}/unpublish`, {}).subscribe(() => q.status = 'DRAFT');
  }

  delete(q: Qcm) {
    if (!confirm(`Supprimer "${q.title}" ?`)) return;
    this.http.delete(`/api/teacher/qcms/${q.id}`).subscribe(() => this.qcms = this.qcms.filter(x => x.id !== q.id));
  }
}

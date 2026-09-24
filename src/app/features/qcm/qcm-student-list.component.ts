import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface QcmItem { id: number; title: string; description: string; professorName: string; questionCount: number; alreadyTaken: boolean; }

@Component({
  selector: 'app-qcm-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="mb-4">
        <h1 class="fw-bold mb-0">Devoirs disponibles</h1>
        <p class="text-muted">Passez les questionnaires publiés par vos professeurs</p>
      </div>

      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <div *ngIf="!loading && qcms.length === 0" class="text-center py-5">
        <div style="font-size:4rem">📭</div>
        <h5 class="mt-3 fw-bold">Aucun devoir disponible</h5>
        <p class="text-muted">Vos professeurs n'ont pas encore publié de devoirs.</p>
      </div>

      <div class="row g-3" *ngIf="!loading && qcms.length > 0">
        <div class="col-12 col-md-6 col-xl-4" *ngFor="let q of qcms">
          <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">
            <div style="height:5px"
                 [style.background]="q.alreadyTaken ? 'linear-gradient(90deg,#10b981,#059669)' : 'linear-gradient(90deg,#6366f1,#4f46e5)'">
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <div class="d-flex align-items-start justify-content-between mb-2">
                <h6 class="fw-bold mb-0 flex-grow-1 me-2">{{ q.title }}</h6>
                <span *ngIf="q.alreadyTaken" class="badge rounded-pill flex-shrink-0"
                      style="background:#d1fae5;color:#065f46">✅ Déjà passé</span>
                <span *ngIf="!q.alreadyTaken" class="badge rounded-pill flex-shrink-0"
                      style="background:#ede9fe;color:#5b21b6">Nouveau</span>
              </div>
              <p class="text-muted small mb-3 flex-grow-1">{{ q.description || 'Aucune description.' }}</p>
              <div class="d-flex gap-3 text-muted small mb-4">
                <span><i class="bi bi-person me-1"></i>{{ q.professorName }}</span>
                <span><i class="bi bi-question-circle me-1"></i>{{ q.questionCount }} question(s)</span>
              </div>
              <a *ngIf="!q.alreadyTaken" [routerLink]="['/qcm', q.id, 'passer']"
                 class="btn w-100 fw-semibold"
                 style="background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:10px">
                <i class="bi bi-play-fill me-2"></i>Commencer
              </a>
              <a *ngIf="q.alreadyTaken" [routerLink]="['/qcm', q.id, 'passer']"
                 class="btn w-100 btn-outline-success fw-semibold" style="border-radius:10px">
                <i class="bi bi-eye me-2"></i>Voir ma correction
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class QcmStudentListComponent implements OnInit {
  qcms: QcmItem[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<QcmItem[]>('/api/qcm').subscribe({
      next: (d) => { this.qcms = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}

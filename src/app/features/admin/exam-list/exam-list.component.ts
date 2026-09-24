import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ExamService } from '../../../core/services/exam.service';
import { AuthService } from '../../../core/services/auth.service';
import { Exam } from '../../../core/models/exam.model';

interface Qcm { id: number; title: string; description: string; status: string; questionCount: number; createdAt: string; }

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">

      <!-- En-tête -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="fw-bold mb-0">Examens en ligne</h1>
          <p class="text-muted mb-0">Gérez vos examens et devoirs</p>
        </div>
        <div class="d-flex gap-2">
          <!-- <a *ngIf="tab === 'exams'" routerLink="/teacher/exams/create"
             class="btn fw-semibold" style="background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:12px">
            <i class="bi bi-plus-circle me-2"></i>Créer un examen
          </a> -->
          <a *ngIf="tab === 'qcm'" routerLink="/teacher/qcms/create"
             class="btn fw-semibold" style="background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:12px">
            <i class="bi bi-plus-circle me-2"></i>Créer un devoir
          </a>
        </div>
      </div>

      <!-- Onglets -->
      <div class="d-flex gap-2 mb-4">
       <!-- <button class="btn px-4 fw-semibold"
                [style.background]="tab === 'exams' ? '#6366f1' : '#f3f4f6'"
                [style.color]="tab === 'exams' ? 'white' : '#374151'"
                style="border-radius:12px;border:none"
                (click)="tab = 'exams'">
          <i class="bi bi-clipboard-text me-2"></i>
          Examens
          <span class="badge ms-1 rounded-pill"
                [style.background]="tab === 'exams' ? 'rgba(255,255,255,.3)' : '#6366f1'"
                style="color:white">{{ exams.length }}</span>
        </button>-->
        <button class="btn px-4 fw-semibold"
                [style.background]="tab === 'qcm' ? '#6366f1' : '#f3f4f6'"
                [style.color]="tab === 'qcm' ? 'white' : '#374151'"
                style="border-radius:12px;border:none"
                (click)="tab = 'qcm'; loadQcms()">
          <i class="bi bi-list-check me-2"></i>Devoirs ou Examens
          <span class="badge ms-1 rounded-pill"
                [style.background]="tab === 'qcm' ? 'rgba(255,255,255,.3)' : '#6366f1'"
                style="color:white">{{ qcms.length }}</span>
        </button>
      </div>

      <!-- ═══════════════════════ ONGLET EXAMENS ════════════════════════════ -->
      <ng-container *ngIf="tab === 'exams'">
        <div *ngIf="loadingExams" class="text-center py-5">
          <div class="spinner-border text-primary"></div>
        </div>
        <div *ngIf="!loadingExams && exams.length === 0" class="text-center py-5">
          <div style="font-size:4rem">📋</div>
          <!--  <h5 class="mt-3 fw-bold">Aucun examen créé</h5>
          <p class="text-muted">Commencez par créer votre premier examen.</p>
         <a routerLink="/teacher/exams/create" class="btn btn-primary mt-2">Créer un examen</a> -->
        </div>
        <div class="row g-3" *ngIf="!loadingExams && exams.length > 0">
          <div class="col-md-6 col-lg-4" *ngFor="let exam of exams">
            <div class="card h-100 border-0 shadow-sm" style="border-radius:16px;overflow:hidden">
              <div style="height:5px;background:linear-gradient(90deg,#6366f1,#4f46e5)"></div>
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h6 class="card-title fw-bold mb-0 flex-grow-1 me-2">{{ exam.title }}</h6>
                  <span class="badge rounded-pill" [ngClass]="getStatusClass(exam.status)">
                    {{ getStatusLabel(exam.status) }}
                  </span>
                </div>
                <p class="text-muted small mb-3">{{ exam.description || 'Aucune description' }}</p>
                <div class="d-flex gap-3 text-muted small mb-3">
                  <span><i class="bi bi-question-circle me-1"></i>{{ exam.questionCount }} questions</span>
                  <span><i class="bi bi-people me-1"></i>{{ exam.studentCount }} étudiants</span>
                </div>
                <p class="text-muted small"><i class="bi bi-calendar me-1"></i>{{ exam.createdAt | date:'dd/MM/yyyy' }}</p>
              </div>
              <div class="card-footer bg-transparent border-0 pb-3 px-4">
                <div class="d-flex gap-2 flex-wrap">
                  <a [routerLink]="['/teacher/exams', exam.id]" class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-eye me-1"></i>Détails
                  </a>
                  <button *ngIf="exam.status === 'DRAFT'" (click)="publishExam(exam)" class="btn btn-sm btn-success">
                    <i class="bi bi-send me-1"></i>Publier
                  </button>
                  <button *ngIf="exam.status === 'PUBLISHED'" (click)="closeExam(exam)" class="btn btn-sm btn-warning">
                    <i class="bi bi-x-circle me-1"></i>Clôturer
                  </button>
                  <button (click)="downloadReport(exam)" class="btn btn-sm btn-outline-success"
                          [disabled]="exam.status === 'DRAFT'">
                    <i class="bi bi-download me-1"></i>Rapport
                  </button>
                  <button *ngIf="exam.status === 'DRAFT'" (click)="deleteExam(exam)" class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>

      <!-- ═══════════════════════ ONGLET QCMs ═══════════════════════════════ -->
      <ng-container *ngIf="tab === 'qcm'">
        <div *ngIf="loadingQcm" class="text-center py-5">
          <div class="spinner-border text-primary"></div>
        </div>
        <div *ngIf="!loadingQcm && qcms.length === 0" class="text-center py-5">
          <div style="font-size:4rem">📝</div>
          <h5 class="mt-3 fw-bold">Aucun devoir créé</h5>
          <p class="text-muted">Créez un devoir manuellement ou importez un fichier Word.</p>
          <div class="d-flex gap-2 justify-content-center mt-2">
            <a routerLink="/teacher/qcms/create" class="btn btn-primary">
              <i class="bi bi-plus-circle me-2"></i>Créer un devoir
            </a>
          </div>
        </div>
        <div class="row g-3" *ngIf="!loadingQcm && qcms.length > 0">
          <div class="col-12 col-md-6 col-xl-4" *ngFor="let q of qcms">
            <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">
              <div style="height:5px"
                   [style.background]="q.status === 'PUBLISHED' ? 'linear-gradient(90deg,#10b981,#059669)' : 'linear-gradient(90deg,#6366f1,#4f46e5)'">
              </div>
              <div class="card-body p-4">
                <div class="d-flex align-items-start justify-content-between mb-2">
                  <h6 class="fw-bold mb-0 flex-grow-1 me-2">{{ q.title }}</h6>
                  <span class="badge rounded-pill"
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
                  <button *ngIf="q.status === 'DRAFT'" class="btn btn-sm btn-success" (click)="publishQcm(q)">
                    <i class="bi bi-send me-1"></i>Publier
                  </button>
                  <button *ngIf="q.status === 'PUBLISHED'" class="btn btn-sm btn-outline-warning" (click)="unpublishQcm(q)">
                    <i class="bi bi-pause-circle me-1"></i>Dépublier
                  </button>
                  <button class="btn btn-sm btn-outline-danger" (click)="deleteQcm(q)">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ng-container>

    </div>
  `
})
export class ExamListComponent implements OnInit {
  tab: 'exams' | 'qcm' = 'exams';

  exams: Exam[] = [];
  loadingExams = true;

  qcms: Qcm[] = [];
  loadingQcm = false;
  qcmsLoaded = false;

  constructor(
    private examService: ExamService,
    public authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const obs = this.authService.isAdmin ? this.examService.getAllExams() : this.examService.getMyExams();
    obs.subscribe({
      next: r => { this.exams = r.data || []; this.loadingExams = false; },
      error: () => this.loadingExams = false
    });
  }

  loadQcms() {
    if (this.qcmsLoaded) return;
    this.loadingQcm = true;
    this.http.get<Qcm[]>('/api/teacher/qcms').subscribe({
      next: d => { this.qcms = d; this.loadingQcm = false; this.qcmsLoaded = true; },
      error: () => this.loadingQcm = false
    });
  }

  // ── Actions examens ──────────────────────────────────────────────────────
  publishExam(exam: Exam) {
    if (!confirm(`Publier "${exam.title}" ?`)) return;
    this.examService.publishExam(exam.id).subscribe({ next: r => { const i = this.exams.findIndex(e => e.id === exam.id); if (i >= 0) this.exams[i] = r.data; } });
  }
  closeExam(exam: Exam) {
    if (!confirm(`Clôturer "${exam.title}" ?`)) return;
    this.examService.closeExam(exam.id).subscribe({ next: r => { const i = this.exams.findIndex(e => e.id === exam.id); if (i >= 0) this.exams[i] = r.data; } });
  }
  deleteExam(exam: Exam) {
    if (!confirm(`Supprimer "${exam.title}" ?`)) return;
    this.examService.deleteExam(exam.id).subscribe({ next: () => this.exams = this.exams.filter(e => e.id !== exam.id) });
  }
  downloadReport(exam: Exam) {
    const obs = this.authService.isAdmin ? this.examService.downloadAdminReport(exam.id) : this.examService.downloadReport(exam.id);
    obs.subscribe(blob => { const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `rapport-${exam.id}.xlsx`; a.click(); URL.revokeObjectURL(url); });
  }

  // ── Actions QCMs ─────────────────────────────────────────────────────────
  publishQcm(q: Qcm) {
    this.http.post(`/api/teacher/qcms/${q.id}/publish`, {}).subscribe(() => q.status = 'PUBLISHED');
  }
  unpublishQcm(q: Qcm) {
    this.http.post(`/api/teacher/qcms/${q.id}/unpublish`, {}).subscribe(() => q.status = 'DRAFT');
  }
  deleteQcm(q: Qcm) {
    if (!confirm(`Supprimer "${q.title}" ?`)) return;
    this.http.delete(`/api/teacher/qcms/${q.id}`).subscribe(() => this.qcms = this.qcms.filter(x => x.id !== q.id));
  }

  getStatusClass(s: string) { return { DRAFT: 'bg-secondary', PUBLISHED: 'bg-success', CLOSED: 'bg-dark' }[s] || 'bg-secondary'; }
  getStatusLabel(s: string) { return { DRAFT: 'Brouillon', PUBLISHED: 'Publié', CLOSED: 'Clôturé' }[s] || s; }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ReponseDetail { questionText: string; points: number; choiceSelected: string; isCorrect: boolean; correctChoice: string; questionType?: string; textAnswer?: string; }
interface PassageResult  { passageId?: number; studentName: string; studentEmail: string; studentLevel?: string; score?: number; maxScore?: number; manualScore?: number; manualCorrectionNote?: string; ocrScore?: number; ocrCorrectionNote?: string; percentage?: string; submittedAt?: string; status: string; paperCorrectionUrl?: string; paperCorrectionFilename?: string; documentAnswer?: string; correctionText?: string; reponses: ReponseDetail[]; _editing?: boolean; }

@Component({
  selector: 'app-qcm-resultats',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="d-flex align-items-center justify-content-between gap-3 mb-4 flex-wrap">
        <div class="d-flex align-items-center gap-3">
          <a routerLink="/teacher/qcms" class="btn btn-outline-secondary btn-sm"><i class="bi bi-arrow-left"></i></a>
          <div>
            <h1 class="fw-bold mb-0">Résultats du devoir</h1>
            <p class="text-muted mb-0">{{ results.length }} étudiant(s) dans la liste du devoir</p>
          </div>
        </div>
        <button (click)="downloadReport()" class="btn btn-success btn-sm" [disabled]="downloading">
          <span *ngIf="downloading" class="spinner-border spinner-border-sm me-1"></span>
          <i *ngIf="!downloading" class="bi bi-file-earmark-excel me-1"></i>
          Télécharger les notes (Excel)
        </button>
      </div>

      <div *ngIf="loading" class="text-center py-5"><div class="spinner-border text-primary"></div></div>

      <div *ngIf="!loading && results.length === 0" class="text-center py-5">
        <div style="font-size:4rem">📭</div>
        <h5 class="mt-3 fw-bold">Aucune soumission</h5>
        <p class="text-muted">Les étudiants n'ont pas encore passé ce devoir.</p>
      </div>

      <div *ngFor="let r of results; let i = index" class="card border-0 shadow-sm mb-3" style="border-radius:16px;overflow:hidden">
        <!-- En-tête étudiant -->
        <div class="d-flex align-items-center justify-content-between p-4"
             style="cursor:pointer;background:#fafafa"
             (click)="r._open = !r._open">
          <div class="d-flex align-items-center gap-3">
            <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;color:white;font-weight:700">
              {{ r.studentName.charAt(0) }}
            </div>
            <div>
              <div class="fw-bold">{{ r.studentName }}</div>
              <div class="text-muted small">{{ r.studentEmail }}<span *ngIf="r.studentLevel"> · Niveau {{ r.studentLevel }}</span></div>
            </div>
          </div>
          <div class="d-flex align-items-center gap-3">
            <div class="text-end">
              <div class="fw-bold fs-5"
                   [style.color]="getColor(r.score, r.maxScore)">
                {{ r.score ?? '—' }} / {{ r.maxScore ?? '—' }}
              </div>
              <div class="small" [style.color]="getColor(r.score, r.maxScore)">
                {{ r.percentage }} · {{ getMention(r.score, r.maxScore) }}
              </div>
            </div>
            <div style="width:52px;height:52px;position:relative">
              <svg viewBox="0 0 36 36" style="transform:rotate(-90deg)">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" stroke-width="3"/>
                <circle cx="18" cy="18" r="15" fill="none"
                        [attr.stroke]="getColor(r.score, r.maxScore)"
                        stroke-width="3" stroke-linecap="round"
                        [attr.stroke-dasharray]="getPct(r.score,r.maxScore) + ' 100'"
                        stroke-dashoffset="0"/>
              </svg>
              <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700">
                {{ r.percentage || '—' }}
              </div>
            </div>
            <i class="bi" [class.bi-chevron-down]="!r._open" [class.bi-chevron-up]="r._open" style="color:#9ca3af"></i>
          </div>
        </div>

        <!-- Détail des réponses -->
        <div *ngIf="r._open" style="border-top:1px solid #f0f0f0">
          <div class="p-4 border-bottom d-flex align-items-end gap-2 flex-wrap">
            <div>
              <div class="small text-muted mb-1">Statut</div>
              <span class="badge" [style.background]="r.status === 'SOUMIS' ? '#d1fae5' : '#e5e7eb'"
                    [style.color]="r.status === 'SOUMIS' ? '#065f46' : '#374151'">{{ r.status }}</span>
            </div>
            <a *ngIf="r.paperCorrectionUrl" class="btn btn-sm btn-outline-primary"
               [href]="r.paperCorrectionUrl" target="_blank" rel="noopener">
              <i class="bi bi-file-earmark-image me-1"></i>Voir la copie papier
            </a>
            <div *ngIf="r.status === 'SOUMIS' && r.passageId && r.maxScore" class="ms-auto">
              <div *ngIf="!r._editing" class="d-flex align-items-center gap-3">
                <div class="small">
                  <span class="text-muted">Note corrigée :</span>
                  <strong>{{ r.manualScore ?? r.score ?? '—' }} / {{ r.maxScore }}</strong>
                  <span *ngIf="r.manualCorrectionNote" class="text-muted ms-2">{{ r.manualCorrectionNote }}</span>
                </div>
                <button class="btn btn-sm btn-outline-primary" (click)="startEditing(r)">
                  <i class="bi bi-pencil me-1"></i>Modifier
                </button>
              </div>
              <div *ngIf="r._editing" class="d-flex align-items-end gap-2 flex-wrap">
                <div><label class="small text-muted">Note</label><input #scoreInput type="number" class="form-control form-control-sm" min="0" [max]="r.maxScore" [value]="r.manualScore ?? r.score ?? 0" style="width:110px"></div>
                <div><label class="small text-muted">Observation</label><input #noteInput type="text" class="form-control form-control-sm" [value]="r.manualCorrectionNote || ''" style="width:220px"></div>
                <button class="btn btn-sm btn-primary" (click)="saveGrade(r, scoreInput.value, noteInput.value)"><i class="bi bi-check2 me-1"></i>Enregistrer</button>
                <button class="btn btn-sm btn-outline-secondary" (click)="r._editing = false">Annuler</button>
              </div>
            </div>
          </div>
          <div *ngIf="r.ocrScore != null || r.ocrCorrectionNote" class="p-3 border-bottom" style="background:#eff6ff">
            <div class="fw-semibold small"><i class="bi bi-robot me-1"></i>Correction OCR / IA</div>
            <div class="small mt-1">Note automatique : <strong>{{ r.ocrScore ?? '—' }} / {{ r.maxScore ?? '—' }}</strong></div>
            <div *ngIf="r.ocrCorrectionNote" class="small text-muted mt-1" style="white-space:pre-wrap">{{ r.ocrCorrectionNote }}</div>
          </div>
          <div *ngIf="r.documentAnswer" class="p-4 border-bottom">
            <h6 class="fw-bold">Réponse rédigée de l’étudiant</h6>
            <pre class="p-3 mb-0" style="white-space:pre-wrap;background:#f8f9fa;border-radius:8px">{{ r.documentAnswer }}</pre>
          </div>
          <div *ngIf="r.correctionText" class="p-4 border-bottom">
            <h6 class="fw-bold">Correction déposée par le professeur</h6>
            <pre class="p-3 mb-0" style="white-space:pre-wrap;background:#fff8e1;border-radius:8px">{{ r.correctionText }}</pre>
          </div>
          <div *ngFor="let rep of r.reponses; let qi = index"
               class="d-flex align-items-start gap-3 p-3"
               [style.background]="qi % 2 === 0 ? '#ffffff' : '#fafafa'">
            <div style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;flex-shrink:0"
                 [style.background]="rep.isCorrect ? '#d1fae5' : '#fee2e2'"
                 [style.color]="rep.isCorrect ? '#065f46' : '#991b1b'">
              {{ rep.isCorrect ? '✓' : '✗' }}
            </div>
            <div class="flex-grow-1">
              <div class="fw-semibold small mb-1">{{ rep.questionText }}
                <span class="text-muted">({{ rep.points }} pt{{ rep.points > 1 ? 's' : '' }})</span>
              </div>
              <div class="small">
                <span class="me-3">
                  Réponse : <strong [style.color]="rep.isCorrect ? '#10b981' : '#ef4444'">{{ rep.choiceSelected }}</strong>
                </span>
                <span *ngIf="!rep.isCorrect && !rep.textAnswer" style="color:#6b7280">
                  ✓ Attendu : <strong style="color:#10b981">{{ rep.correctChoice }}</strong>
                </span>
              </div>
              <pre *ngIf="rep.textAnswer" class="p-3 mt-2 mb-0 small"
                   style="white-space:pre-wrap;background:#f8f9fa;border:1px solid #e5e7eb;border-radius:8px;max-height:360px;overflow:auto">{{ rep.textAnswer }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class QcmResultatsComponent implements OnInit {
  results: (PassageResult & { _open?: boolean })[] = [];
  loading = true;
  downloading = false;
  qcmId!: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.qcmId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<PassageResult[]>(`/api/teacher/qcms/${this.qcmId}/resultats`).subscribe({
      next: (d) => { this.results = d; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  getPct(score?: number, max?: number) { return score != null && max != null && max > 0 ? Math.round((score / max) * 100) : 0; }
  getColor(score?: number, max?: number) {
    const p = this.getPct(score, max);
    return p >= 80 ? '#10b981' : p >= 60 ? '#3b82f6' : p >= 50 ? '#f59e0b' : '#ef4444';
  }
  getMention(score?: number, max?: number) {
    const p = this.getPct(score, max);
    return p >= 80 ? 'Excellent' : p >= 60 ? 'Bien' : p >= 50 ? 'Passable' : 'Insuffisant';
  }

  saveGrade(result: PassageResult & { _open?: boolean }, rawScore: string, note: string) {
    if (!result.passageId) return;
    this.http.patch<PassageResult>(`/api/teacher/qcms/${this.qcmId}/passages/${result.passageId}/note`, {
      score: Number(rawScore), note
    }).subscribe({
      next: updated => { Object.assign(result, updated); result._editing = false; },
      error: () => alert('Impossible d’enregistrer la note.')
    });
  }

  startEditing(result: PassageResult & { _open?: boolean }) {
    this.results.forEach(item => item._editing = false);
    result._editing = true;
  }

  downloadReport() {
    this.downloading = true;
    this.http.get(`/api/teacher/qcms/${this.qcmId}/report`, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resultats-qcm-${this.qcmId}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.downloading = false;
      },
      error: () => { this.downloading = false; }
    });
  }
}

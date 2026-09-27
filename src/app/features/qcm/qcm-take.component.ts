import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UiChromeService } from '../../core/services/ui-chrome.service';

interface Choice   { id: number; choiceText: string; orderIndex: number; }
interface Question {
  id: number;
  questionText: string;
  points: number;
  orderIndex: number;
  questionType: 'QCM' | 'PRACTICAL' | 'CASE' | 'LONG_TEXT';
  caseScenario?: string;
  expectedAnswer?: string;
  valueLabels: string[];
  choices: Choice[];
}
interface QcmTake  {
  id: number;
  title: string;
  description: string;
  subjectFileUrl: string | null;
  subjectText: string | null;
  passageId: number;
  estimatedDurationMinutes?: number;
  paperCorrectionRequired?: boolean;
  paperCorrectionUrl?: string | null;
  paperCorrectionFilename?: string | null;
  startedAt?: string | null;
  questions: Question[];
}
interface QcmAcces {
  id: number;
  title: string;
  description: string;
  estimatedDurationMinutes: number;
  questionCount: number;
  passwordRequired: boolean;
  studentName: string;
  studentLevel?: string | null;
}
interface Resultat { qcmTitle: string; score: number; maxScore: number; percentage: string; mention: string;
  detail: { questionText: string; points: number; choiceSelected: string; isCorrect: boolean; correctChoice: string; }[]; }

type PageStatus = 'loading' | 'welcome' | 'active' | 'result' | 'terminated' | 'blocked';

@Component({
  selector: 'app-qcm-take',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="fade-in-up"
         [style.height]="isFullscreenMode ? '100vh' : null"
         [style.display]="isFullscreenMode ? 'flex' : null"
         [style.flex-direction]="isFullscreenMode ? 'column' : null"
         [style.overflow]="isFullscreenMode ? 'hidden' : null"
         [style.max-width]="isFullscreenMode ? null : '760px'"
         [style.margin]="isFullscreenMode ? null : '0 auto'">

      <!-- Loading -->
      <div *ngIf="status === 'loading'" class="text-center py-5">
        <div class="spinner-border text-primary" style="width:3rem;height:3rem;"></div>
        <p class="mt-3 text-muted">Chargement du devoir...</p>
      </div>

      <!-- Session interrompue : blocage total de l'interface -->
      <div *ngIf="status === 'terminated'"
           class="d-flex align-items-center justify-content-center p-4"
           style="position:fixed;inset:0;background:rgba(20,20,30,.96);z-index:3000;pointer-events:all">
        <div class="card border-0 shadow text-center p-5" style="max-width:500px">
          <div style="font-size:3.5rem">🛑</div>
          <h3 class="mt-3 text-danger fw-bold">Session interrompue</h3>
          <p class="text-muted mt-2">{{ terminationReason }}</p>
          <p class="text-muted mt-2">Vos réponses ont été automatiquement soumises dans leur état actuel.</p>
          <p class="text-muted small mt-2">Votre compte est temporairement bloqué et votre résultat ne sera visible qu'une fois le temps estimé du devoir écoulé.</p>
        </div>
      </div>

      <!-- Résultat bloqué suite à une exclusion (temps estimé pas encore écoulé) -->
      <div *ngIf="status === 'blocked'" class="text-center py-5">
        <div style="font-size:3.5rem">🔒</div>
        <h3 class="mt-3 text-danger fw-bold">Résultat non disponible</h3>
        <p class="text-muted mt-2" style="max-width:480px;margin:0 auto">{{ blockedMessage }}</p>
        <a routerLink="/qcm" class="btn btn-outline-secondary mt-3" style="border-radius:12px">← Retour aux devoirs</a>
      </div>

      <!-- Verrouillage plein écran -->
      <div *ngIf="status === 'active' && fullscreenWarning"
           class="d-flex flex-column align-items-center justify-content-center text-center p-4"
           style="position:fixed;inset:0;background:rgba(20,20,30,.92);z-index:2000;color:#fff">
        <div style="font-size:3rem">⛶</div>
        <h4 class="mt-3 fw-bold">Mode plein écran requis</h4>
        <p class="mb-2" style="max-width:480px;color:#e5e7eb">
          Le devoir doit être passé en plein écran. Vous avez quitté ce mode :
          <strong>Tentative {{ fullscreenExitCount }}/2</strong>
        </p>
        <p class="mb-4" style="max-width:480px;color:#e5e7eb">
          Vous avez <strong>{{ fullscreenRemainingTime }} secondes</strong> pour revenir en plein écran,
          sinon vos réponses seront automatiquement soumises.
        </p>
        <button class="btn btn-lg" style="background:#6366f1;color:#fff;border-radius:12px" (click)="resumeFullscreen()">
          ⛶ Revenir en plein écran
        </button>
      </div>

      <!-- Surveillance du devoir -->
      <div *ngIf="status === 'active'" class="proctor-widget">
        <div class="proctor-video-wrap">
          <video #proctorVideo class="proctor-video" autoplay muted playsinline></video>
          <span class="proctor-rec"><span class="proctor-rec-dot"></span>REC</span>
        </div>
        <div class="proctor-info">
          <div class="small fw-semibold text-white"><i class="bi bi-eye-fill me-1"></i>Surveillance active</div>
          <div class="small text-light">Nous vérifions votre environnement pendant le devoir.</div>
          <div class="proctor-mic mt-1">
            <i class="bi bi-mic-fill text-white"></i>
            <div class="proctor-mic-bar"><div class="proctor-mic-fill" [style.width.%]="micLevel"></div></div>
          </div>
          <div class="small text-light mt-2">
            <i class="bi bi-clock-history me-1"></i>Temps restant : <strong>{{ timeRemainingLabel }}</strong>
          </div>
        </div>
      </div>

      <div *ngIf="status === 'active' && cameraError" class="alert alert-danger small d-flex align-items-center gap-2"
           style="position:fixed;bottom:1rem;left:1rem;right:220px;max-width:480px;z-index:2100">
        <i class="bi bi-camera-video-off"></i>{{ cameraError }}
      </div>

      <!-- RÉSULTAT après soumission -->
      <div *ngIf="status === 'result' && resultat">
        <div class="text-center mb-4">
          <div style="font-size:4rem">{{ resultat.mention === 'Excellent' ? '🏆' : resultat.mention === 'Bien' ? '👍' : resultat.mention === 'Passable' ? '😊' : '😔' }}</div>
          <h2 class="fw-bold mt-2">{{ resultat.mention }}</h2>
          <p class="text-muted">{{ resultat.qcmTitle }}</p>
          <div class="d-inline-flex align-items-center gap-4 p-4 rounded-4 mb-3"
               style="background:linear-gradient(135deg,#f8f9ff,#ede9fe)">
            <div class="text-center">
              <div class="fw-bold" style="font-size:2.5rem;color:#6366f1">{{ resultat.score }}</div>
              <div class="text-muted small">Points obtenus</div>
            </div>
            <div style="font-size:2rem;color:#9ca3af">/</div>
            <div class="text-center">
              <div class="fw-bold" style="font-size:2.5rem;color:#374151">{{ resultat.maxScore }}</div>
              <div class="text-muted small">Points max</div>
            </div>
            <div style="width:2px;height:60px;background:#e5e7eb"></div>
            <div class="text-center">
              <div class="fw-bold" style="font-size:2.5rem" [style.color]="pctColor">{{ resultat.percentage }}</div>
              <div class="text-muted small">Score</div>
            </div>
          </div>
        </div>

        <!-- Correction détaillée -->
        <div class="card border-0 shadow-sm mb-4" style="border-radius:16px">
          <div class="card-body p-0">
            <div class="p-4 border-bottom">
              <h5 class="fw-bold mb-0">📋 Correction détaillée</h5>
            </div>
            <div *ngFor="let d of resultat.detail; let i = index"
                 class="d-flex align-items-start gap-3 p-4"
                 [style.background]="i % 2 === 0 ? '#fff' : '#fafafa'">
              <div style="width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700;flex-shrink:0"
                   [style.background]="d.isCorrect ? '#d1fae5' : '#fee2e2'"
                   [style.color]="d.isCorrect ? '#065f46' : '#991b1b'">
                {{ d.isCorrect ? '✓' : '✗' }}
              </div>
              <div class="flex-grow-1">
                <div class="fw-semibold mb-1">{{ d.questionText }}
                  <span class="text-muted small">({{ d.points }} pt{{ d.points > 1 ? 's' : '' }})</span>
                </div>
                <div class="small">
                  Votre réponse :
                  <strong [style.color]="d.isCorrect ? '#10b981' : '#ef4444'">{{ d.choiceSelected }}</strong>
                </div>
                <div *ngIf="!d.isCorrect" class="small mt-1" style="color:#6b7280">
                  Bonne réponse : <strong style="color:#10b981">{{ d.correctChoice }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a routerLink="/qcm" class="btn btn-outline-primary w-100" style="border-radius:12px">
          ← Retour aux devoirs
        </a>
      </div>

      <!-- BIENVENUE : règles avant de démarrer -->
      <div *ngIf="status === 'welcome' && acces">
        <div class="card border-0 shadow p-5 text-center" style="border-radius:16px">
          <div style="font-size:3rem">📝</div>
          <h3 class="mt-3 fw-bold">{{ acces.title }}</h3>
          <p class="text-muted mb-4" *ngIf="acces.description">{{ acces.description }}</p>
          <div class="alert alert-light border text-start mb-3">
            <div><i class="bi bi-person me-1"></i><strong>Étudiant :</strong> {{ acces.studentName }}</div>
            <div *ngIf="acces.studentLevel"><i class="bi bi-mortarboard me-1"></i><strong>Niveau :</strong> {{ acces.studentLevel }}</div>
            <div><i class="bi bi-question-circle me-1"></i>
              <strong>{{ acces.questionCount }}</strong> question(s) à répondre.</div>
          </div>
          <div class="alert alert-primary small text-start mb-3">
            <i class="bi bi-clock-history me-1"></i>
            Durée maximale : <strong>{{ acces.estimatedDurationMinutes ?? 30 }} minute(s)</strong>.
            Le compte à rebours démarre dès le lancement du devoir.
          </div>
          <div class="alert alert-danger small text-start mb-3">
            <i class="bi bi-shield-exclamation me-1"></i>
            <strong>⚠️ Règle du mode plein écran :</strong> vous ne pouvez quitter le plein écran qu'une seule fois.
            À la <strong>2ème sortie, vos réponses seront automatiquement soumises</strong> dans leur état actuel.
          </div>
          <div class="alert alert-info small text-start mb-4">
            <i class="bi bi-shield-lock me-1"></i>
            Le devoir démarre en plein écran. Le copier/coller et le clic droit sont désactivés pendant l'épreuve.
          </div>
          <div *ngIf="acces.passwordRequired" class="text-start mb-4 mx-auto" style="max-width:360px">
            <label class="form-label fw-semibold" for="qcmPassword">
              <i class="bi bi-key me-1"></i>Mot de passe du devoir
            </label>
            <input id="qcmPassword" type="password" class="form-control form-control-lg" autocomplete="off"
                   [(ngModel)]="password" [class.is-invalid]="!!startError"
                   (keydown.enter)="startQcm()" placeholder="Mot de passe communiqué par votre professeur">
            <div class="invalid-feedback">{{ startError }}</div>
          </div>
          <div *ngIf="startError && !acces.passwordRequired" class="alert alert-danger small">{{ startError }}</div>
          <button class="btn btn-lg fw-semibold" style="background:#6366f1;color:#fff;border-radius:12px" (click)="startQcm()"
                  [disabled]="starting || (acces.passwordRequired && !password.trim())">
            <span *ngIf="starting" class="spinner-border spinner-border-sm me-2"></span>
            ▶ Commencer le devoir
          </button>
        </div>
      </div>

      <!-- QCM EN COURS : zone scrollable dédiée (le reste de la page est verrouillé) -->
      <div *ngIf="status === 'active' && qcm" style="flex:1 1 auto;min-height:0;overflow-y:auto">
        <div style="max-width:760px;margin:0 auto;padding:24px 16px">
          <div *ngIf="qcm.subjectFileUrl" class="d-flex justify-content-end mb-3">
            <a [href]="qcm.subjectFileUrl" target="_blank" rel="noopener"
               class="btn btn-outline-primary btn-sm">
              <i class="bi bi-file-earmark-text me-1"></i>Ouvrir le sujet
            </a>
          </div>
          <div class="text-center mb-4">
            <h2 class="fw-bold">{{ qcm.title }}</h2>
            <p class="text-muted" *ngIf="qcm.description">{{ qcm.description }}</p>
            <div class="d-flex justify-content-center gap-3 text-muted small">
              <span><i class="bi bi-question-circle me-1"></i>{{ qcm.questions.length ? qcm.questions.length + ' question(s)' : 'Sujet documentaire' }}</span>
              <span><i class="bi bi-circle-fill me-1" style="font-size:.4rem;color:#10b981"></i>
                {{ qcm.questions.length ? (answered + '/' + qcm.questions.length + ' répondu(s)') : (documentAnswer.trim() ? 'Réponse saisie' : 'Réponse à saisir') }}</span>
            </div>
          </div>

          <!-- Barre de progression -->
          <div *ngIf="qcm.questions.length" class="progress mb-4" style="height:6px;border-radius:4px">
            <div class="progress-bar" style="background:#6366f1"
                 [style.width.%]="(answered / qcm.questions.length) * 100"></div>
          </div>

          <div *ngIf="(qcm.subjectText && !subjectShownInCase) || qcm.subjectFileUrl" class="card border-0 shadow-sm mb-4" style="border-radius:16px">
            <div class="card-body p-4">
              <div *ngIf="qcm.subjectText && !subjectShownInCase" class="subject-text mb-4">
                <div class="case-section-title mb-2"><i class="bi bi-file-earmark-text me-1"></i>Sujet du devoir / cas pratique</div>
                <div class="case-section case-text" style="max-height:520px;overflow:auto">
                  <ng-container *ngFor="let block of caseBlocks(qcm.subjectText)">
                    <table *ngIf="block.table" class="table table-sm table-bordered case-table mb-3">
                      <tbody>
                        <tr *ngFor="let row of block.table; let ri = index" [class.table-light]="ri === 0">
                          <td *ngFor="let cell of row" [class.fw-semibold]="ri === 0">{{ cell }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p *ngIf="!block.table" class="mb-2" [class.case-heading]="block.heading">{{ block.text }}</p>
                  </ng-container>
                </div>
              </div>
              <div *ngIf="qcm.subjectFileUrl" class="ratio ratio-4x3 mb-4">
                <iframe [src]="safeSubjectUrl" title="Sujet du devoir"
                        style="border:1px solid #dee2e6;border-radius:8px"></iframe>
              </div>
              <div *ngIf="!qcm.subjectFileUrl && !qcm.subjectText" class="alert alert-warning">Le fichier sujet n’est pas disponible.</div>
              <div *ngIf="qcm.questions.length === 0">
                <label class="form-label fw-semibold">Votre réponse au devoir</label>
                <textarea class="form-control" rows="12" [(ngModel)]="documentAnswer"
                          placeholder="Rédigez votre résolution et vos calculs ici..."></textarea>
              </div>
            </div>
          </div>

          <!-- Questions -->
          <div *ngFor="let q of qcm.questions; let qi = index"
               class="card border-0 shadow-sm mb-3" style="border-radius:16px;overflow:hidden">
            <div style="height:4px" [style.background]="answers[q.id] ? '#10b981' : '#e5e7eb'"></div>
            <div class="card-body p-4">
              <div class="d-flex gap-2 mb-3">
                <span class="badge rounded-pill" style="background:#ede9fe;color:#6d28d9">Q{{ qi + 1 }}</span>
                <span class="text-muted small" style="margin-top:2px">{{ q.points }} pt{{ q.points > 1 ? 's' : '' }}</span>
              </div>
              <p *ngIf="!isCaseQuestion(q)" class="fw-semibold mb-3">{{ q.questionText }}</p>

              <div *ngIf="isCaseQuestion(q)" class="case-block mb-3">
                <div class="case-banner">
                  <i class="bi bi-briefcase-fill"></i>
                  <div>
                    <div class="fw-bold">Cas pratique</div>
                    <div class="small opacity-75">Lisez attentivement les données, puis rédigez votre réponse dans la zone prévue en dessous.</div>
                  </div>
                </div>

                <div *ngIf="q.caseScenario && q.caseScenario.trim() !== q.questionText.trim()" class="case-section">
                  <div class="case-section-title"><i class="bi bi-clipboard-data me-1"></i>Données du cas</div>
                  <div class="case-text">{{ q.caseScenario }}</div>
                </div>

                <div class="case-section case-section-statement">
                  <div class="case-section-title"><i class="bi bi-list-check me-1"></i>Énoncé / travail à faire</div>
                  <div class="case-text">
                    <ng-container *ngFor="let block of caseBlocks(q.questionText)">
                      <table *ngIf="block.table" class="table table-sm table-bordered case-table mb-3">
                        <tbody>
                          <tr *ngFor="let row of block.table; let ri = index" [class.table-light]="ri === 0">
                            <td *ngFor="let cell of row" [class.fw-semibold]="ri === 0">{{ cell }}</td>
                          </tr>
                        </tbody>
                      </table>
                      <p *ngIf="!block.table" class="mb-2" [class.case-heading]="block.heading">{{ block.text }}</p>
                    </ng-container>
                  </div>
                </div>

                <div class="case-answer">
                  <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                    <label class="fw-semibold mb-0" [for]="'case-answer-' + q.id">
                      <i class="bi bi-pencil-square me-1"></i>Votre réponse
                    </label>
                    <span class="small text-muted">{{ wordCount(textAnswers[q.id]) }} mot(s)</span>
                  </div>
                  <textarea class="form-control case-textarea" [id]="'case-answer-' + q.id" rows="14"
                            [(ngModel)]="textAnswers[q.id]" spellcheck="true"
                            placeholder="Rédigez ici votre résolution : raisonnement, calculs, tableaux (une ligne par ligne du tableau, colonnes séparées par | ), conclusion..."></textarea>
                  <div class="small text-muted mt-1">
                    <i class="bi bi-info-circle me-1"></i>
                    Si vous rédigez votre réponse ici, la copie papier devient facultative{{ qcm.paperCorrectionRequired ? ' (sauf si le professeur l’exige)' : '' }}.
                  </div>
                </div>

                <div class="case-paper">
                  <div class="fw-semibold mb-1"><i class="bi bi-upload me-2"></i>Copie papier{{ qcm.paperCorrectionRequired ? '' : ' (facultatif)' }}</div>
                  <div class="small text-muted mb-2">Si vous avez traité tout ou partie du cas sur papier, joignez une photo ou un PDF avant de soumettre.</div>
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <input type="file" class="form-control form-control-sm" accept="image/*,.pdf" style="max-width:420px"
                           (change)="onPaperCorrectionSelected($event)" [disabled]="paperCorrectionUploading">
                    <span *ngIf="paperCorrectionUploading" class="spinner-border spinner-border-sm text-primary"></span>
                  </div>
                  <div *ngIf="paperCorrectionUrl" class="small text-success mt-2">
                    <i class="bi bi-check-circle me-1"></i>Fichier joint : {{ paperCorrectionFilename }}
                  </div>
                  <div *ngIf="paperCorrectionError" class="small text-danger mt-2">{{ paperCorrectionError }}</div>
                </div>
              </div>

              <div *ngIf="q.questionType === 'LONG_TEXT'" class="mb-3">
                <textarea class="form-control" rows="6" [(ngModel)]="textAnswers[q.id]"
                          [placeholder]="'Développez votre réponse argumentée ici...'" ></textarea>
              </div>

              <div *ngIf="q.questionType === 'PRACTICAL' && !isCaseQuestion(q)" class="mb-3">
                <div class="alert alert-info small">Saisissez chaque valeur calculée. Les réponses seront comparées à la correction enregistrée par le professeur.</div>
                <div class="row g-2 mb-3">
                  <div class="col-sm-6">
                    <label class="form-label small fw-semibold">Nombre de lignes</label>
                    <input type="number" class="form-control" min="1" max="30"
                           [ngModel]="tableRows[q.id] || 1"
                           (ngModelChange)="setTableDimensions(q.id, $event, tableCols[q.id] || 1)">
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label small fw-semibold">Nombre de colonnes</label>
                    <input type="number" class="form-control" min="1" max="20"
                           [ngModel]="tableCols[q.id] || 1"
                           (ngModelChange)="setTableDimensions(q.id, tableRows[q.id] || 1, $event)">
                  </div>
                </div>
                <div class="table-responsive mb-3">
                  <table class="table table-bordered align-middle mb-0">
                    <tbody>
                      <tr *ngFor="let row of tableRange(tableRows[q.id] || 1); let ri = index">
                        <td *ngFor="let col of tableRange(tableCols[q.id] || 1); let ci = index">
                          <input type="text" class="form-control form-control-sm"
                                 [placeholder]="tableCellLabel(q, ri, ci)"
                                 [ngModel]="getPracticalAnswer(q.id, tableCellKey(q, ri, ci))"
                                 (ngModelChange)="setPracticalAnswer(q.id, tableCellKey(q, ri, ci), $event)">
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <ng-container *ngIf="q.questionType === 'QCM'">
              <div *ngFor="let c of q.choices; let ci = index"
                   class="d-flex align-items-center gap-3 p-3 mb-2 rounded-3"
                   [style.background]="answers[q.id] === c.id ? '#ede9fe' : '#f9fafb'"
                   [style.border]="answers[q.id] === c.id ? '2px solid #6366f1' : '2px solid transparent'"
                   (click)="select(q.id, c.id)"
                   style="cursor:pointer;transition:all .15s">
                <div style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.85rem;font-weight:700;flex-shrink:0"
                     [style.background]="answers[q.id] === c.id ? '#6366f1' : '#e5e7eb'"
                     [style.color]="answers[q.id] === c.id ? 'white' : '#6b7280'">
                  {{ labels[ci] }}
                </div>
                <span [style.color]="answers[q.id] === c.id ? '#4338ca' : '#374151'"
                      [style.font-weight]="answers[q.id] === c.id ? '600' : '400'">
                  {{ c.choiceText }}
                </span>
              </div>
              </ng-container>
            </div>
          </div>

          <!-- Soumettre -->
          <div class="card border-0 shadow-sm mt-4" style="border-radius:16px;background:#f8f9ff">
            <div class="card-body p-4">
              <div *ngIf="qcm.paperCorrectionRequired && !hasCaseQuestion" class="mb-4 p-3 rounded-3"
                   style="background:#fff8e1;border:1px solid #f5d06f">
                <div class="fw-semibold mb-1"><i class="bi bi-file-earmark-image me-2"></i>Correction papier</div>
                <div class="small text-muted mb-2">Joignez la photo ou le scan de votre correction avant de soumettre le devoir.</div>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <input type="file" class="form-control form-control-sm" accept="image/*,.pdf" style="max-width:420px"
                         (change)="onPaperCorrectionSelected($event)" [disabled]="paperCorrectionUploading">
                  <span *ngIf="paperCorrectionUploading" class="spinner-border spinner-border-sm text-primary"></span>
                </div>
                <div *ngIf="paperCorrectionUrl" class="small text-success mt-2">
                  <i class="bi bi-check-circle me-1"></i>Copie jointe : {{ paperCorrectionFilename }}
                </div>
                <div *ngIf="paperCorrectionError" class="small text-danger mt-2">{{ paperCorrectionError }}</div>
              </div>
              <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
              <div class="text-muted small">
                <strong *ngIf="qcm.questions.length">{{ answered }}/{{ qcm.questions.length }}</strong>
                <strong *ngIf="!qcm.questions.length">{{ documentAnswer.trim() ? 'Réponse saisie' : 'Réponse vide' }}</strong>
                <span *ngIf="qcm.questions.length && answered < qcm.questions.length" style="color:#f59e0b">
                  · {{ qcm.questions.length - answered }} sans réponse
                </span>
              </div>
              <button class="btn fw-semibold px-5 py-2"
                      (click)="submit()"
                      [disabled]="submitting || paperCorrectionUploading || (requiresPaperCorrection && !paperCorrectionUrl)"
                      style="background:linear-gradient(135deg,#10b981,#059669);color:white;border-radius:12px">
                <span *ngIf="submitting" class="spinner-border spinner-border-sm me-2"></span>
                {{ submitting ? 'Soumission...' : 'Soumettre mes réponses' }}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .case-block { display: flex; flex-direction: column; gap: 14px; }
    .case-banner {
      display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px;
      background: linear-gradient(135deg, #6366f1, #4f46e5); color: #fff;
    }
    .case-banner > i { font-size: 1.5rem; }
    .case-section { padding: 16px 18px; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0; }
    .case-section-statement { background: #eef2ff; border-color: #c7d2fe; }
    .case-section-title {
      font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
      color: #4338ca; margin-bottom: 10px;
    }
    .case-text { font-size: .98rem; line-height: 1.7; color: #1f2937; white-space: pre-wrap; word-break: break-word; }
    .case-text p:last-child { margin-bottom: 0 !important; }
    .case-heading { font-weight: 700; color: #312e81; margin-top: 6px; }
    .case-table { background: #fff; font-size: .9rem; white-space: normal; }
    .case-table td { padding: 6px 10px; }
    .case-answer { padding: 16px 18px; border-radius: 12px; background: #fff; border: 2px solid #10b981; }
    .case-textarea { min-height: 280px; font-size: .98rem; line-height: 1.6; resize: vertical; border-radius: 10px; }
    .case-paper { padding: 14px 16px; border-radius: 12px; background: #fff8e1; border: 1px solid #f5d06f; }

    .proctor-widget {
      position: fixed;
      right: 12px;
      bottom: 12px;
      width: 150px;
      background: #1e1e1e;
      border-radius: 8px;
      box-shadow: 0 3px 12px rgba(0, 0, 0, .3);
      overflow: hidden;
      z-index: 2050;
    }
    .proctor-video-wrap { position: relative; background: #000; }
    .proctor-video {
      display: block;
      width: 150px;
      height: 84px;
      object-fit: cover;
      background: #000;
    }
    .proctor-rec {
      position: absolute;
      top: 4px;
      right: 4px;
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 1px 4px;
      border-radius: 3px;
      background: rgba(0, 0, 0, .55);
      color: #fff;
      font-size: .58rem;
    }
    .proctor-rec-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ff4d4f;
      animation: proctor-blink 1.2s infinite;
    }
    @keyframes proctor-blink { 0%, 100% { opacity: 1; } 50% { opacity: .2; } }
    .proctor-info { padding: 5px 7px; }
    .proctor-info .small { font-size: .65rem; line-height: 1.2; }
    .proctor-mic { display: flex; align-items: center; gap: 4px; }
    .proctor-mic-bar { flex: 1; height: 4px; background: #3a3a3a; border-radius: 2px; overflow: hidden; }
    .proctor-mic-fill { height: 100%; background: #27c93f; transition: width .08s linear; }
    @media (max-width: 576px) {
      .proctor-widget { right: 8px; bottom: 8px; width: 112px; }
      .proctor-video { width: 112px; height: 63px; }
      .proctor-info { padding: 4px 5px; }
      .proctor-info .small { font-size: .56rem; }
    }
  `]
})
export class QcmTakeComponent implements OnInit, OnDestroy {
  status: PageStatus = 'loading';
  qcm: QcmTake | null = null;
  acces: QcmAcces | null = null;
  password = '';
  starting = false;
  startError = '';
  resultat: Resultat | null = null;
  answers: Record<number, number> = {};
  practicalAnswers: Record<number, Record<string, string>> = {};
  textAnswers: Record<number, string> = {};
  documentAnswer = '';
  paperCorrectionUrl = '';
  paperCorrectionFilename = '';
  paperCorrectionUploading = false;
  paperCorrectionError = '';
  safeSubjectUrl: SafeResourceUrl | null = null;
  tableRows: Record<number, number> = {};
  tableCols: Record<number, number> = {};
  labels = ['A', 'B', 'C', 'D', 'E'];
  submitting = false;
  qcmId!: number;

  fullscreenWarning = false;
  fullscreenExitCount = 0;
  fullscreenRemainingTime = 0;
  terminationReason = '';
  blockedMessage = '';
  cameraError = '';
  micLevel = 0;
  voiceWarningActive = false;
  voiceWarningRemaining = 0;
  timeRemainingLabel = '00:00';

  private readonly FULLSCREEN_GRACE_PERIOD_MS = 30000;
  private readonly VOICE_THRESHOLD = 55;
  private readonly VOICE_WARNING_MS = 60000;
  private readonly TIME_TICK_MS = 1000;
  private fullscreenCountdownInterval: ReturnType<typeof setInterval> | null = null;
  private countdownInterval: ReturnType<typeof setInterval> | null = null;
  private mediaStream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private micRafId: number | null = null;
  private videoElement: HTMLVideoElement | null = null;
  private qcmDeadlineMs = 0;

  @ViewChild('proctorVideo') set proctorVideo(ref: ElementRef<HTMLVideoElement> | undefined) {
    this.videoElement = ref?.nativeElement || null;
    this.attachStreamToVideo();
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private uiChrome: UiChromeService,
    private sanitizer: DomSanitizer
  ) {}

  get isFullscreenMode() {
    return this.status === 'active' || this.status === 'terminated';
  }

  ngOnInit() {
    this.qcmId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<Resultat>(`/api/qcm/${this.qcmId}/mon-resultat`).subscribe({
      next: (r) => { this.resultat = r; this.status = 'result'; },
      error: (err) => {
        if (err.status === 423) {
          // Exclu pour violations anti-triche : résultat verrouillé jusqu'à la fin du temps estimé
          this.blockedMessage = err.error?.message || 'Votre résultat n\'est pas encore disponible.';
          this.status = 'blocked';
          return;
        }
        // Pas encore passé → afficher les règles ; les questions sont chargées au démarrage (mot de passe vérifié)
        this.http.get<QcmAcces>(`/api/qcm/${this.qcmId}/acces`).subscribe({
          next: (a) => { this.acces = a; this.status = 'welcome'; },
          error: () => { this.router.navigate(['/qcm']); }
        });
      }
    });
  }

  ngOnDestroy() {
    this.unlock();
  }

  select(questionId: number, choiceId: number) {
    this.answers[questionId] = choiceId;
  }

  setPracticalAnswer(questionId: number, label: string, value: string) {
    this.practicalAnswers[questionId] = {
      ...(this.practicalAnswers[questionId] || {}), [label]: value
    };
  }

  getPracticalAnswer(questionId: number, label: string): string {
    return this.practicalAnswers[questionId]?.[label] || '';
  }

  setTableDimensions(questionId: number, rows: number, cols: number) {
    this.tableRows[questionId] = Math.min(30, Math.max(1, Number(rows) || 1));
    this.tableCols[questionId] = Math.min(20, Math.max(1, Number(cols) || 1));
  }

  tableRange(size: number): number[] {
    return Array.from({ length: Math.max(1, size) }, (_, index) => index + 1);
  }

  tableCellKey(question: Question, row: number, col: number): string {
    const index = row * (this.tableCols[question.id] || 1) + col;
    return question.valueLabels[index] || `r${row + 1}c${col + 1}`;
  }

  tableCellLabel(question: Question, row: number, col: number): string {
    return this.tableCellKey(question, row, col);
  }

  isCaseQuestion(question: Question): boolean {
    const type = question.questionType?.toUpperCase();
    return type === 'CASE' || (type === 'PRACTICAL' && !!question.caseScenario?.trim());
  }

  get hasCaseQuestion(): boolean {
    return !!this.qcm?.questions.some(question => this.isCaseQuestion(question));
  }

  get requiresPaperCorrection(): boolean {
    if (!this.qcm) return false;
    if (this.qcm.paperCorrectionRequired === true) return true;
    // La copie papier n'est requise que si un cas pratique n'a pas de réponse saisie
    return this.qcm.questions.some(q => this.isCaseQuestion(q) && !this.textAnswers[q.id]?.trim());
  }

  /** Le sujet documentaire est déjà affiché dans la question « cas pratique » : inutile de le répéter. */
  get subjectShownInCase(): boolean {
    const subject = this.qcm?.subjectText?.trim();
    if (!subject) return false;
    const head = subject.substring(0, 80);
    return this.qcm!.questions.some(q => this.isCaseQuestion(q) && q.questionText?.includes(head));
  }

  wordCount(text: string | undefined): number {
    return text?.trim() ? text.trim().split(/\s+/).length : 0;
  }

  private caseBlocksCache = new Map<string, { text?: string; heading?: boolean; table?: string[][] }[]>();

  /**
   * Découpe l'énoncé en paragraphes et tableaux : les lignes contenant des tabulations
   * (tableaux extraits du document Word) ou des « | » sont rendues sous forme de tableau.
   */
  caseBlocks(text: string | null | undefined): { text?: string; heading?: boolean; table?: string[][] }[] {
    const source = (text || '').replace(/\r\n?/g, '\n');
    const cached = this.caseBlocksCache.get(source);
    if (cached) return cached;

    const blocks: { text?: string; heading?: boolean; table?: string[][] }[] = [];
    let table: string[][] | null = null;
    let paragraph: string[] = [];
    const flushParagraph = () => {
      if (paragraph.length) {
        const joined = paragraph.join('\n').trim();
        if (joined) blocks.push({ text: joined, heading: this.isHeadingLine(joined) });
      }
      paragraph = [];
    };
    const flushTable = () => {
      if (table && table.length) blocks.push({ table });
      table = null;
    };
    for (const rawLine of source.split('\n')) {
      const line = rawLine.trimEnd();
      const cells = line.includes('\t') ? line.split('\t')
        : (line.split('|').length > 2 ? line.split('|') : null);
      if (cells) {
        flushParagraph();
        const cleaned = cells.map(c => c.trim());
        while (cleaned.length && !cleaned[0]) cleaned.shift();
        while (cleaned.length && !cleaned[cleaned.length - 1]) cleaned.pop();
        if (cleaned.length) (table ??= []).push(cleaned);
      } else if (!line.trim()) {
        flushTable();
        flushParagraph();
      } else {
        flushTable();
        if (this.isHeadingLine(line)) {
          flushParagraph();
          blocks.push({ text: line.trim(), heading: true });
        } else {
          paragraph.push(line);
        }
      }
    }
    flushTable();
    flushParagraph();
    this.caseBlocksCache.set(source, blocks);
    return blocks;
  }

  private isHeadingLine(line: string): boolean {
    const t = line.trim();
    if (t.length > 90 || t.includes('\n')) return false;
    return /^(exercice|question|partie|travail à faire|annexe|dossier|cas|document)\b/i.test(t)
      || /^[IVX]+[.)-]\s/.test(t)
      || (t === t.toUpperCase() && /[A-ZÀ-Ý]{4,}/.test(t));
  }

  onPaperCorrectionSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file || !this.qcm) return;
    this.paperCorrectionUploading = true;
    this.paperCorrectionError = '';
    const form = new FormData();
    form.append('file', file);
    this.http.post<{ url: string; filename: string }>(
      `/api/qcm/${this.qcmId}/passage/${this.qcm.passageId}/paper-correction`, form
    ).subscribe({
      next: response => {
        this.paperCorrectionUrl = response.url;
        this.paperCorrectionFilename = response.filename;
        this.paperCorrectionUploading = false;
      },
      error: error => {
        this.paperCorrectionError = error.error?.message || 'Impossible de joindre la copie papier.';
        this.paperCorrectionUploading = false;
      }
    });
  }

  get answered() {
    return Object.keys(this.answers).length + Object.values(this.practicalAnswers)
      .filter(values => Object.values(values).some(value => value.trim())).length +
      Object.values(this.textAnswers).filter(value => value.trim()).length;
  }

  get pctColor() {
    if (!this.resultat) return '#6366f1';
    const p = parseInt(this.resultat.percentage);
    return p >= 80 ? '#10b981' : p >= 60 ? '#3b82f6' : p >= 50 ? '#f59e0b' : '#ef4444';
  }

  startQcm() {
    if (this.starting || !this.acces) return;
    if (this.acces.passwordRequired && !this.password.trim()) return;
    // Le navigateur n'autorise le plein écran que pendant le geste utilisateur
    this.enterFullscreen();
    this.starting = true;
    this.startError = '';
    this.http.post<QcmTake>(`/api/qcm/${this.qcmId}/commencer`, { password: this.password.trim() }).subscribe({
      next: (q) => {
        this.starting = false;
        this.loadQcm(q);
        this.activate();
      },
      error: (err) => {
        this.starting = false;
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
        this.startError = err.error?.message || 'Impossible de démarrer le devoir.';
      }
    });
  }

  private loadQcm(q: QcmTake) {
    this.qcm = q;
    this.paperCorrectionUrl = q.paperCorrectionUrl || '';
    this.paperCorrectionFilename = q.paperCorrectionFilename || '';
    this.safeSubjectUrl = q.subjectFileUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(q.subjectFileUrl)
      : null;
    q.questions.filter(question => question.questionType === 'PRACTICAL').forEach(question => {
      this.tableRows[question.id] = 1;
      this.tableCols[question.id] = Math.max(1, question.valueLabels.length);
    });
  }

  private activate() {
    this.status = 'active';
    this.lockScroll();
    this.uiChrome.hide();
    this.startQcmCountdown();
    this.enableProctoring();
  }

  get timeRemainingSeconds(): number {
    if (!this.qcm || !this.qcmDeadlineMs) return 0;
    return Math.max(0, Math.ceil((this.qcmDeadlineMs - Date.now()) / 1000));
  }

  private startQcmCountdown() {
    const durationMinutes = Math.max(1, this.qcm?.estimatedDurationMinutes ?? 30);
    const startedAt = this.qcm?.startedAt ? new Date(this.qcm.startedAt).getTime() : Date.now();
    const deadlineMs = startedAt + durationMinutes * 60 * 1000;
    this.qcmDeadlineMs = deadlineMs;
    this.updateTimeRemainingLabel();
    this.clearQcmCountdown();
    this.countdownInterval = setInterval(() => {
      const remainingSeconds = this.timeRemainingSeconds;
      this.updateTimeRemainingLabel();
      if (remainingSeconds <= 0) {
        this.clearQcmCountdown();
        if (this.status === 'active') {
          this.terminateSession('Le temps alloué à ce devoir est écoulé. Vos réponses ont été soumises automatiquement.');
        }
      }
    }, this.TIME_TICK_MS);
  }

  private clearQcmCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  private updateTimeRemainingLabel() {
    const totalSeconds = this.timeRemainingSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    this.timeRemainingLabel = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  private buildReponses() {
    return this.qcm!.questions.map(q => {
      const base = {
        questionId: q.id,
        choiceId: this.answers[q.id] || null,
        values: this.practicalAnswers[q.id] || {}
      };

      if (this.isCaseQuestion(q) || q.questionType?.toUpperCase() === 'LONG_TEXT') {
        return {
          ...base,
          values: { answer: this.textAnswers[q.id] || '' }
        };
      }

      return base;
    });
  }

  submit() {
    if (!this.qcm || this.submitting) return;
    this.submitting = true;
    this.http.post<Resultat>(`/api/qcm/${this.qcmId}/soumettre`, {
      reponses: this.buildReponses(),
      documentAnswer: this.documentAnswer
    }).subscribe({
      next: (r) => {
        this.resultat = r;
        this.status = 'result';
        this.submitting = false;
        this.unlock();
      },
      error: () => { this.submitting = false; }
    });
  }

  // --- Anti-cheat : blocage du défilement de la page ---

  private lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  // --- Anti-cheat : plein écran ---

  private enterFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    }
  }

  resumeFullscreen() {
    this.enterFullscreen();
  }

  @HostListener('document:fullscreenchange')
  onFullscreenChange() {
    if (this.status !== 'active') return;

    const isFullscreen = !!document.fullscreenElement;

    if (!isFullscreen && !this.fullscreenWarning) {
      this.fullscreenExitCount++;
      this.fullscreenWarning = true;

      if (this.fullscreenExitCount >= 2) {
        // 2ème sortie : soumission automatique immédiate
        this.recordFullscreenViolation(this.fullscreenExitCount, false);
        this.fullscreenRemainingTime = 0;
        setTimeout(() => {
          this.terminateSession('Vous avez quitté le mode plein écran à deux reprises. Vos réponses ont été soumises automatiquement.');
        }, 500);
      } else {
        // 1ère sortie : avertissement + délai de grâce
        this.recordFullscreenViolation(this.fullscreenExitCount, true);
        this.startFullscreenCountdown(this.FULLSCREEN_GRACE_PERIOD_MS);
      }
    } else if (isFullscreen && this.fullscreenWarning) {
      this.fullscreenWarning = false;
      this.fullscreenRemainingTime = 0;
      this.clearCountdownInterval();
    }
  }

  private startFullscreenCountdown(gracePeriodMs: number) {
    this.clearCountdownInterval();
    const endTime = Date.now() + gracePeriodMs;

    this.fullscreenCountdownInterval = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      this.fullscreenRemainingTime = Math.ceil(remaining / 1000);

      if (remaining <= 0) {
        this.clearCountdownInterval();
        if (this.status === 'active' && this.fullscreenWarning) {
          this.terminateSession(`Vous avez quitté le mode plein écran pendant plus de ${gracePeriodMs / 1000} secondes. Vos réponses ont été soumises automatiquement.`);
        }
      }
    }, 100);
  }

  private clearCountdownInterval() {
    if (this.fullscreenCountdownInterval) {
      clearInterval(this.fullscreenCountdownInterval);
      this.fullscreenCountdownInterval = null;
    }
  }

  private recordFullscreenViolation(violationNumber: number, shouldContinue: boolean) {
    if (!this.qcm) return;
    this.http.post(`/api/qcm/${this.qcmId}/passage/${this.qcm.passageId}/fullscreen-violation`, {
      violationNumber,
      details: `Sortie du plein écran - Tentative ${violationNumber}/2`,
      shouldTerminate: !shouldContinue
    }).subscribe({
      next: () => {},
      error: (err) => console.error('Erreur lors de l\'enregistrement de la violation:', err)
    });
  }

  // --- Anti-cheat : copier / couper / coller / clic droit ---

  @HostListener('document:copy', ['$event'])
  @HostListener('document:cut', ['$event'])
  @HostListener('document:paste', ['$event'])
  blockClipboard(event: ClipboardEvent) {
    if (this.status === 'active' || this.status === 'terminated') {
      event.preventDefault();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  blockContextMenu(event: MouseEvent) {
    if (this.status === 'active' || this.status === 'terminated') {
      event.preventDefault();
    }
  }

  // --- Anti-cheat : empêcher la fermeture/quitter la page ---

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent) {
    if (this.status === 'active') {
      event.preventDefault();
      event.returnValue = true;
    }
  }

  private unlock() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    this.clearCountdownInterval();
    this.clearQcmCountdown();
    this.fullscreenWarning = false;
    this.fullscreenRemainingTime = 0;
    this.unlockScroll();
    this.stopProctoring();
    this.uiChrome.show();
  }

  private terminateSession(reason: string) {
    if (this.status !== 'active') return;
    this.terminationReason = reason;
    this.status = 'terminated';
    this.unlock();
    this.http.post<Resultat>(`/api/qcm/${this.qcmId}/soumettre`, {
      reponses: this.buildReponses(),
      documentAnswer: this.documentAnswer
    }).subscribe({
      next: (r) => { this.resultat = r; },
      error: () => {}
    });
  }

  private async enableProctoring() {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      this.attachStreamToVideo();
      this.startMicMeter();
    } catch {
      this.cameraError = "Impossible d'activer la caméra/micro. La surveillance du devoir est désactivée.";
    }
  }

  private attachStreamToVideo() {
    if (this.videoElement && this.mediaStream) {
      this.videoElement.srcObject = this.mediaStream;
      this.videoElement.play().catch(() => {});
    }
  }

  private startMicMeter() {
    if (!this.mediaStream) return;
    this.audioContext = new AudioContext();
    const source = this.audioContext.createMediaStreamSource(this.mediaStream);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    source.connect(this.analyser);

    const data = new Uint8Array(this.analyser.frequencyBinCount);
    const tick = () => {
      if (!this.analyser) return;
      this.analyser.getByteFrequencyData(data);
      const avg = data.reduce((sum, v) => sum + v, 0) / data.length;
      this.micLevel = Math.min(100, Math.round((avg / 128) * 100));
      this.checkVoiceLevel();
      this.micRafId = requestAnimationFrame(tick);
    };
    tick();
  }

  private checkVoiceLevel() {
    if (this.status !== 'active') return;

    if (this.micLevel >= this.VOICE_THRESHOLD) {
      if (!this.voiceWarningActive) {
        this.voiceWarningActive = true;
      }
      this.voiceWarningRemaining = Math.max(0, Math.ceil((this.VOICE_WARNING_MS - 1000) / 1000));
      if (this.micLevel >= this.VOICE_THRESHOLD && this.voiceWarningActive) {
        this.terminateSession('Le niveau sonore est trop élevé pendant le devoir. La session a été interrompue.');
      }
    } else if (this.voiceWarningActive) {
      this.voiceWarningActive = false;
      this.voiceWarningRemaining = 0;
    }
  }

  private stopProctoring() {
    if (this.micRafId !== null) {
      cancelAnimationFrame(this.micRafId);
      this.micRafId = null;
    }
    this.analyser = null;
    if (this.audioContext) {
      this.audioContext.close().catch(() => {});
      this.audioContext = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = null;
    }
    this.micLevel = 0;
    this.cameraError = '';
  }
}

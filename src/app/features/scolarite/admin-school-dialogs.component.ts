import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA, DialogRef, DialogService } from '../../core/services/dialog.service';
import {
  CERTIFICATE_TYPES, ENROLLMENT_STATUS, EnrollmentFile, Fee, LEVELS, METHOD_LABELS, PAYMENT_STATUS, SPECIALIZATIONS,
  SchoolService, apiError, fcfa
} from '../../core/services/school.service';
import { SchoolScheduleComponent, SchoolTranscriptComponent } from './school-shared.component';

/** Création / modification d'un barème de frais. */
@Component({
  selector: 'app-fee-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="save()">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label fw-semibold small" for="feeYear">Année universitaire</label>
          <input id="feeYear" class="form-control" name="year" [(ngModel)]="fee.academicYear" placeholder="2026-2027" required>
        </div>
        <div class="col-md-6">
          <label class="form-label fw-semibold small" for="feeLevel">Niveau</label>
          <select id="feeLevel" class="form-select" name="level" [(ngModel)]="fee.level">
            <option *ngFor="let l of levels" [value]="l">{{ l }}</option>
          </select>
        </div>
        <div class="col-12">
          <label class="form-label fw-semibold small" for="feeSpec">Filière</label>
          <select id="feeSpec" class="form-select" name="spec" [(ngModel)]="fee.specialization">
            <option [ngValue]="null">Toutes les filières</option>
            <option *ngFor="let s of specs" [value]="s[0]">{{ s[1] }}</option>
          </select>
        </div>
        <div class="col-md-4">
          <label class="form-label fw-semibold small" for="feeReg">Frais d'inscription (FCFA)</label>
          <input id="feeReg" type="number" min="0" step="500" class="form-control" name="reg" [(ngModel)]="fee.registrationFee" required>
        </div>
        <div class="col-md-4">
          <label class="form-label fw-semibold small" for="feeTuition">Scolarité annuelle (FCFA)</label>
          <input id="feeTuition" type="number" min="0" step="500" class="form-control" name="tuition" [(ngModel)]="fee.tuitionFee" required>
        </div>
        <div class="col-md-4">
          <label class="form-label fw-semibold small" for="feeInst">Mensualités</label>
          <input id="feeInst" type="number" min="1" max="12" class="form-control" name="inst" [(ngModel)]="fee.installments" required>
        </div>
      </div>
      <p class="small text-muted mt-3 mb-0">
        Total annuel : <strong>{{ fcfa((fee.registrationFee || 0) + (fee.tuitionFee || 0)) }}</strong> —
        mensualité de {{ fcfa((fee.tuitionFee || 0) / (fee.installments || 1)) }} le 5 de chaque mois à partir d'octobre.
      </p>
      <div *ngIf="error" class="alert alert-danger mt-3 mb-0 py-2">{{ error }}</div>
      <div class="d-flex justify-content-end gap-2 mt-4">
        <button type="button" class="btn btn-light" (click)="ref.close()">Annuler</button>
        <button type="submit" class="btn btn-primary" [disabled]="saving">
          <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>Enregistrer
        </button>
      </div>
    </form>
  `
})
export class FeeDialogComponent {
  fee: Fee;
  saving = false;
  error = '';
  readonly levels = LEVELS;
  readonly specs = Object.entries(SPECIALIZATIONS);
  readonly fcfa = fcfa;

  constructor(@Inject(DIALOG_DATA) data: { fee?: Fee; year: string }, public ref: DialogRef<boolean>, private school: SchoolService) {
    this.fee = data.fee ? { ...data.fee }
      : { academicYear: data.year, level: 'L1', specialization: null, registrationFee: 50000, tuitionFee: 450000, installments: 9 };
  }

  save() {
    this.saving = true;
    this.error = '';
    this.school.saveFee(this.fee).subscribe({
      next: () => this.ref.close(true),
      error: err => { this.saving = false; this.error = apiError(err); }
    });
  }
}

/** Inscription administrative : un étudiant, ou tous les étudiants d'un niveau. */
@Component({
  selector: 'app-enrollment-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <ul class="nav nav-underline school-tabs">
      <li class="nav-item"><button type="button" class="nav-link" [class.active]="mode === 'one'" (click)="mode = 'one'">Un étudiant</button></li>
      <li class="nav-item"><button type="button" class="nav-link" [class.active]="mode === 'level'" (click)="mode = 'level'">Tout un niveau</button></li>
    </ul>

    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold small" for="enrYear">Année universitaire</label>
        <input id="enrYear" class="form-control" [(ngModel)]="year" placeholder="2026-2027">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold small" for="enrLevel">Niveau</label>
        <select id="enrLevel" class="form-select" [(ngModel)]="level">
          <option *ngFor="let l of levels" [value]="l">{{ l }}</option>
        </select>
      </div>
    </div>

    <ng-container *ngIf="mode === 'one'">
      <label class="form-label fw-semibold small mt-3" for="enrSearch">Étudiant</label>
      <input id="enrSearch" type="search" class="form-control mb-2" [(ngModel)]="search" placeholder="Rechercher par nom ou email">
      <div class="list-group" style="max-height:220px;overflow:auto">
        <button type="button" *ngFor="let s of filteredStudents" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                [class.active]="studentId === s.id" (click)="pick(s)">
          <span>{{ s.name }}<span class="small d-block" [class.text-muted]="studentId !== s.id">{{ s.email }}</span></span>
          <span class="small">{{ s.level || '—' }}</span>
        </button>
        <div *ngIf="filteredStudents.length === 0" class="text-muted small p-2">Aucun étudiant validé ne correspond.</div>
      </div>
      <div class="row g-3 mt-1">
        <div class="col-md-6">
          <label class="form-label fw-semibold small" for="enrSpec">Filière</label>
          <select id="enrSpec" class="form-select" [(ngModel)]="specialization">
            <option [ngValue]="null">Filière du compte</option>
            <option *ngFor="let s of specs" [value]="s[0]">{{ s[1] }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label fw-semibold small" for="enrDiscount">Réduction / bourse (FCFA)</label>
          <input id="enrDiscount" type="number" min="0" step="500" class="form-control" [(ngModel)]="discount">
        </div>
      </div>
      <p class="small text-muted mt-2 mb-0">Les frais sont repris du barème de l'année et du niveau (onglet « Frais »).</p>
    </ng-container>

    <p *ngIf="mode === 'level'" class="text-muted mt-3 mb-0">
      Tous les étudiants validés du niveau {{ level }} qui ne sont pas encore inscrits pour {{ year }} seront inscrits
      avec le barème de leur filière, et prévenus par notification et email.
    </p>

    <div *ngIf="error" class="alert alert-danger mt-3 mb-0 py-2">{{ error }}</div>
    <div *ngIf="levelErrors.length" class="alert alert-warning mt-3 mb-0 py-2 small">
      <div *ngFor="let e of levelErrors">{{ e }}</div>
    </div>

    <div class="d-flex justify-content-end gap-2 mt-4">
      <button type="button" class="btn btn-light" (click)="ref.close(created > 0)">Fermer</button>
      <button type="button" class="btn btn-primary" [disabled]="saving || (mode === 'one' && !studentId)" (click)="submit()">
        <span *ngIf="saving" class="spinner-border spinner-border-sm me-1"></span>
        {{ mode === 'one' ? 'Inscrire' : 'Inscrire le niveau ' + level }}
      </button>
    </div>
  `
})
export class EnrollmentDialogComponent implements OnInit {
  mode: 'one' | 'level' = 'one';
  year: string;
  level = 'L1';
  students: { id: number; name: string; email: string; level: string | null; specialization: string | null }[] = [];
  search = '';
  studentId: number | null = null;
  specialization: string | null = null;
  discount = 0;
  saving = false;
  error = '';
  levelErrors: string[] = [];
  created = 0;
  readonly levels = LEVELS;
  readonly specs = Object.entries(SPECIALIZATIONS);

  constructor(@Inject(DIALOG_DATA) data: { year: string }, public ref: DialogRef<boolean>, private school: SchoolService,
              private dialogs: DialogService) {
    this.year = data.year;
  }

  ngOnInit() {
    this.school.students().subscribe(s => this.students = s);
  }

  get filteredStudents() {
    const q = this.search.trim().toLowerCase();
    return this.students.filter(s => !q || s.name.toLowerCase().includes(q) || s.email.toLowerCase().includes(q)).slice(0, 100);
  }

  pick(s: { id: number; level: string | null }) {
    this.studentId = s.id;
    if (s.level && LEVELS.includes(s.level)) this.level = s.level;
  }

  submit() {
    this.saving = true;
    this.error = '';
    this.levelErrors = [];
    if (this.mode === 'one') {
      this.school.enroll({ studentId: this.studentId, academicYear: this.year, level: this.level,
                           specialization: this.specialization, discount: this.discount || 0 }).subscribe({
        next: e => { this.dialogs.toast(`${e.studentName} inscrit(e) — matricule ${e.matricule}`); this.ref.close(true); },
        error: err => { this.saving = false; this.error = apiError(err); }
      });
    } else {
      this.school.enrollLevel(this.year, this.level).subscribe({
        next: r => {
          this.saving = false;
          this.created += r.created;
          this.levelErrors = r.errors;
          this.dialogs.toast(`${r.created} étudiant(s) inscrit(s) en ${this.level}`, r.created ? 'success' : 'info');
          if (!r.errors.length) this.ref.close(true);
        },
        error: err => { this.saving = false; this.error = apiError(err); }
      });
    }
  }
}

/** Dossier de scolarité d'un étudiant : échéancier, paiements, notes, attestations et actions. */
@Component({
  selector: 'app-enrollment-file-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, SchoolScheduleComponent, SchoolTranscriptComponent],
  template: `
    <div *ngIf="!file" class="text-center py-5"><div class="spinner-border text-primary"></div></div>
    <ng-container *ngIf="file as f">
      <div class="d-flex flex-wrap justify-content-between gap-3 mb-3">
        <div>
          <h5 class="fw-bold mb-1">{{ f.enrollment.studentName }}</h5>
          <div class="text-muted small">{{ f.enrollment.matricule }} · {{ f.enrollment.level }} · {{ spec(f.enrollment.specialization) }} · {{ f.enrollment.academicYear }}</div>
          <div class="text-muted small">{{ f.enrollment.email }}</div>
        </div>
        <div class="text-end">
          <span class="status-badge" [ngClass]="estatus[f.enrollment.status].tone">{{ estatus[f.enrollment.status].label }}</span>
          <div class="mt-2 small">Payé <strong class="amount">{{ fcfa(f.enrollment.paid) }}</strong> sur <span class="amount">{{ fcfa(f.enrollment.totalDue) }}</span></div>
          <div class="small" [class.text-danger]="f.enrollment.balance > 0">Reste <strong class="amount">{{ fcfa(f.enrollment.balance) }}</strong></div>
        </div>
      </div>

      <ul class="nav nav-underline school-tabs">
        <li class="nav-item" *ngFor="let t of tabs"><button type="button" class="nav-link" [class.active]="tab === t[0]" (click)="tab = t[0]">{{ t[1] }}</button></li>
      </ul>

      <!-- Finances -->
      <div *ngIf="tab === 'finances'">
        <app-school-schedule [items]="f.schedule"></app-school-schedule>

        <h6 class="fw-bold mt-4">Encaisser un paiement</h6>
        <div class="row g-2 align-items-end">
          <div class="col-md-3">
            <label class="form-label small" for="payAmount">Montant (FCFA)</label>
            <input id="payAmount" type="number" min="0" step="500" class="form-control" [(ngModel)]="pay.amount">
          </div>
          <div class="col-md-3">
            <label class="form-label small" for="payMethod">Mode</label>
            <select id="payMethod" class="form-select" [(ngModel)]="pay.method">
              <option *ngFor="let m of methods" [value]="m[0]">{{ m[1] }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label small" for="payRef">Référence (facultatif)</label>
            <input id="payRef" class="form-control" [(ngModel)]="pay.transactionRef" placeholder="N° de transaction, de chèque…">
          </div>
          <div class="col-md-2">
            <button type="button" class="btn btn-primary w-100" [disabled]="busy || !pay.amount" (click)="recordPayment()">Encaisser</button>
          </div>
        </div>

        <h6 class="fw-bold mt-4">Historique des paiements</h6>
        <div class="table-responsive">
          <table class="table table-sm align-middle mb-0">
            <thead class="table-light"><tr><th>Date</th><th>Mode</th><th>Référence</th><th class="text-end">Montant</th><th>État</th><th></th></tr></thead>
            <tbody>
              <tr *ngFor="let p of f.payments">
                <td>{{ p.submittedAt | date:'dd/MM/yyyy' }}</td>
                <td>{{ methodLabel(p.method) }}</td>
                <td class="small">{{ p.transactionRef || '—' }}</td>
                <td class="text-end amount">{{ fcfa(p.amount) }}</td>
                <td><span class="status-badge" [ngClass]="pstatus[p.status].tone">{{ pstatus[p.status].label }}</span></td>
                <td class="text-end">
                  <button *ngIf="p.status === 'VALIDATED'" type="button" class="btn btn-sm btn-light" (click)="school.openPdf('/api/admin/scolarite/payments/' + p.id + '/receipt', p.receiptNumber!)">
                    <i class="bi bi-receipt me-1"></i>Reçu</button>
                </td>
              </tr>
              <tr *ngIf="f.payments.length === 0"><td colspan="6" class="text-muted text-center py-3">Aucun paiement.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Notes -->
      <div *ngIf="tab === 'notes'">
        <app-school-transcript [transcript]="f.transcript" [showPublished]="true"
          emptyText="Aucune note saisie. Saisissez les notes par matière dans l'onglet « Notes »."></app-school-transcript>
      </div>

      <!-- Attestations -->
      <div *ngIf="tab === 'attestations'">
        <div class="d-flex flex-wrap gap-2 align-items-end mb-3">
          <div class="flex-grow-1">
            <label class="form-label small" for="certType">Délivrer un document</label>
            <select id="certType" class="form-select" [(ngModel)]="certType">
              <option *ngFor="let c of certTypes" [value]="c[0]">{{ c[1] }}</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary" [disabled]="busy" (click)="issue()"><i class="bi bi-qr-code me-1"></i>Délivrer</button>
        </div>
        <div class="list-group">
          <div *ngFor="let c of f.certificates" class="list-group-item d-flex flex-wrap justify-content-between align-items-center gap-2">
            <div>
              <div class="fw-semibold">{{ c.typeLabel }} <span *ngIf="c.revoked" class="status-badge danger ms-1">Annulée</span></div>
              <div class="small text-muted">{{ c.reference }} · délivrée le {{ c.issuedAt | date:'dd/MM/yyyy' }}{{ c.mention ? ' · mention ' + c.mention : '' }}</div>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-light" (click)="school.openPdf('/api/admin/scolarite/certificates/' + c.id + '/pdf', c.reference)"><i class="bi bi-file-earmark-pdf me-1"></i>Voir</button>
              <button *ngIf="!c.revoked" type="button" class="btn btn-sm btn-outline-danger" (click)="revoke(c.id)">Annuler</button>
            </div>
          </div>
          <div *ngIf="f.certificates.length === 0" class="text-muted small p-2">Aucun document délivré.</div>
        </div>
      </div>

      <!-- Inscription -->
      <div *ngIf="tab === 'inscription'">
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label small" for="edStatus">Statut</label>
            <select id="edStatus" class="form-select" [(ngModel)]="edit.status">
              <option *ngFor="let s of statuses" [value]="s[0]">{{ s[1].label }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label small" for="edDiscount">Réduction / bourse (FCFA)</label>
            <input id="edDiscount" type="number" min="0" step="500" class="form-control" [(ngModel)]="edit.discount">
          </div>
          <div class="col-md-4">
            <label class="form-label small" for="edInst">Mensualités</label>
            <input id="edInst" type="number" min="1" max="12" class="form-control" [(ngModel)]="edit.installments">
          </div>
        </div>
        <p class="small text-muted mt-2">Frais d'inscription {{ fcfa(f.enrollment.registrationFee) }} · scolarité {{ fcfa(f.enrollment.tuitionFee) }}.
          Un changement de statut est notifié à l'étudiant.</p>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-danger" [disabled]="busy" (click)="remove()"><i class="bi bi-trash3 me-1"></i>Supprimer l'inscription</button>
          <button type="button" class="btn btn-primary" [disabled]="busy" (click)="saveEdit()">Enregistrer</button>
        </div>
      </div>
    </ng-container>
  `
})
export class EnrollmentFileDialogComponent implements OnInit {
  file: EnrollmentFile | null = null;
  tab = 'finances';
  busy = false;
  changed = false;
  pay = { amount: null as number | null, method: 'ESPECES', transactionRef: '' };
  certType = 'INSCRIPTION';
  edit = { status: 'PENDING', discount: 0, installments: 1 };
  readonly tabs = [['finances', 'Finances'], ['notes', 'Notes'], ['attestations', 'Attestations'], ['inscription', 'Inscription']];
  readonly methods = Object.entries(METHOD_LABELS);
  readonly certTypes = Object.entries(CERTIFICATE_TYPES);
  readonly statuses = Object.entries(ENROLLMENT_STATUS);
  readonly estatus = ENROLLMENT_STATUS;
  readonly pstatus = PAYMENT_STATUS;
  readonly fcfa = fcfa;

  constructor(@Inject(DIALOG_DATA) private data: { id: number; tab?: string }, public ref: DialogRef<boolean>,
              public school: SchoolService, private dialogs: DialogService) {
    if (data.tab) this.tab = data.tab;
  }

  ngOnInit() { this.load(); }

  load() {
    this.school.enrollmentFile(this.data.id).subscribe(f => {
      this.file = f;
      this.edit = { status: f.enrollment.status, discount: f.enrollment.discount, installments: f.enrollment.installments };
      if (!this.pay.amount) this.pay.amount = f.enrollment.balance || null;
    });
  }

  spec(s: string | null) { return s ? SPECIALIZATIONS[s] ?? s : 'Sans filière'; }
  methodLabel(m: string) { return METHOD_LABELS[m] ?? m; }

  private run(obs: any, success: string) {
    this.busy = true;
    obs.subscribe({
      next: () => { this.busy = false; this.changed = true; this.dialogs.toast(success); this.load(); },
      error: (err: any) => { this.busy = false; this.dialogs.toast(apiError(err), 'danger', 6000); }
    });
  }

  recordPayment() {
    this.run(this.school.recordPayment({ enrollmentId: this.data.id, ...this.pay }), 'Paiement encaissé, reçu généré et étudiant notifié.');
    this.pay = { amount: null, method: this.pay.method, transactionRef: '' };
  }

  issue() {
    this.run(this.school.issueCertificate(this.data.id, this.certType), `${CERTIFICATE_TYPES[this.certType]} délivré(e), étudiant notifié.`);
  }

  async revoke(id: number) {
    const ok = await this.dialogs.confirm({ title: 'Annuler ce document ?', message: 'Le QR code indiquera qu\'il n\'est plus valide.',
      icon: 'bi-x-octagon', tone: 'danger', confirmText: 'Annuler le document', cancelText: 'Garder' });
    if (ok) this.run(this.school.revokeCertificate(id), 'Document annulé.');
  }

  saveEdit() {
    this.run(this.school.updateEnrollment(this.data.id, this.edit), 'Inscription mise à jour.');
  }

  async remove() {
    if (!await this.dialogs.confirmDelete('cette inscription')) return;
    this.busy = true;
    this.school.deleteEnrollment(this.data.id).subscribe({
      next: () => { this.dialogs.toast('Inscription supprimée.'); this.ref.close(true); },
      error: err => { this.busy = false; this.dialogs.toast(apiError(err), 'danger', 6000); }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface PendingStudent {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  specialization: string | null;
  paymentMethod: string;
  paymentPhone: string;
  paymentReference: string;
  paymentSubmittedAt: string;
  registrationStatus: string;
  createdAt: string;
}

@Component({
  selector: 'app-admin-registrations',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="d-flex align-items-center gap-3 mb-4">
        <a routerLink="/dashboard" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-arrow-left"></i>
        </a>
        <div>
          <h1 class="fw-bold mb-0">Inscriptions en attente</h1>
          <p class="text-muted mb-0">Validez ou rejetez les demandes d'inscription après vérification du paiement</p>
        </div>
        <span *ngIf="students.length > 0" class="badge rounded-pill ms-auto"
              style="background:#f59e0b;color:white;font-size:1rem;padding:8px 16px">
          {{ students.length }} en attente
        </span>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <!-- Vide -->
      <div *ngIf="!loading && students.length === 0" class="text-center py-5">
        <div style="font-size:4rem">✅</div>
        <h4 class="mt-3 fw-bold">Aucune inscription en attente</h4>
        <p class="text-muted">Toutes les demandes ont été traitées.</p>
      </div>

      <!-- Liste -->
      <div class="row g-4" *ngIf="!loading && students.length > 0">
        <div class="col-12" *ngFor="let s of students">
          <div class="card border-0 shadow-sm" style="border-radius:16px;overflow:hidden">
            <div class="d-flex align-items-stretch">

              <!-- Bande couleur gauche -->
              <div style="width:6px;background:linear-gradient(180deg,#f59e0b,#d97706);flex-shrink:0"></div>

              <div class="card-body p-4">
                <div class="row align-items-center g-3">

                  <!-- Infos étudiant -->
                  <div class="col-md-4">
                    <div class="d-flex align-items-center gap-3">
                      <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.1rem;flex-shrink:0">
                        {{ s.firstName.charAt(0) }}{{ s.lastName.charAt(0) }}
                      </div>
                      <div>
                        <div class="fw-bold">{{ s.firstName }} {{ s.lastName }}</div>
                        <div class="text-muted small">{{ s.email }}</div>
                        <span class="badge" style="background:#e0e7ff;color:#4338ca;font-size:.75rem">
                          {{ getSpecialization(s.specialization) }}
                        </span>
                      </div>
                    </div>
                    <div class="small text-muted mt-2">
                      <i class="bi bi-calendar3 me-1"></i>Inscrit le {{ s.createdAt | date:'dd/MM/yyyy' }}
                    </div>
                  </div>

                  <!-- Infos paiement -->
                  <div class="col-md-4">
                    <div class="p-3 rounded-3" style="background:#fffbeb;border:1px solid #fde68a">
                      <div class="d-flex align-items-center gap-2 mb-2">
                        <span style="font-size:1.3rem">{{ s.paymentMethod === 'WAVE' ? '🌊' : '🟠' }}</span>
                        <span class="fw-semibold">{{ s.paymentMethod === 'WAVE' ? 'Wave' : 'Orange Money' }}</span>
                      </div>
                      <div class="small">
                        <div><i class="bi bi-phone me-1 text-muted"></i>{{ s.paymentPhone }}</div>
                        <div class="mt-1">
                          <i class="bi bi-hash me-1 text-muted"></i>
                          <strong style="color:#d97706">{{ s.paymentReference }}</strong>
                        </div>
                        <div class="mt-1 text-muted">
                          <i class="bi bi-clock me-1"></i>Soumis {{ s.paymentSubmittedAt | date:'dd/MM HH:mm' }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="col-md-4">
                    <div *ngIf="actionResult[s.id]" class="alert py-2 px-3 mb-2"
                         [class.alert-success]="actionResult[s.id] === 'validated'"
                         [class.alert-danger]="actionResult[s.id] === 'rejected'">
                      <i class="bi me-1" [class.bi-check-circle]="actionResult[s.id] === 'validated'" [class.bi-x-circle]="actionResult[s.id] === 'rejected'"></i>
                      {{ actionResult[s.id] === 'validated' ? 'Compte validé, étudiant notifié.' : 'Demande rejetée.' }}
                    </div>

                    <div *ngIf="!actionResult[s.id]">
                      <button class="btn btn-success w-100 mb-2 fw-semibold"
                              [disabled]="processing[s.id]"
                              (click)="validate(s)">
                        <span *ngIf="processing[s.id] === 'validate'" class="spinner-border spinner-border-sm me-1"></span>
                        <i *ngIf="processing[s.id] !== 'validate'" class="bi bi-check-circle me-1"></i>
                        Valider l'inscription
                      </button>

                      <div *ngIf="rejectingId !== s.id">
                        <button class="btn btn-outline-danger w-100"
                                [disabled]="processing[s.id]"
                                (click)="rejectingId = s.id; rejectReason = ''">
                          <i class="bi bi-x-circle me-1"></i>Rejeter
                        </button>
                      </div>

                      <div *ngIf="rejectingId === s.id" class="mt-1">
                        <textarea class="form-control form-control-sm mb-2" rows="2"
                                  [(ngModel)]="rejectReason"
                                  placeholder="Motif du rejet (optionnel)"></textarea>
                        <div class="d-flex gap-2">
                          <button class="btn btn-danger btn-sm flex-grow-1"
                                  [disabled]="processing[s.id]"
                                  (click)="reject(s)">
                            <span *ngIf="processing[s.id] === 'reject'" class="spinner-border spinner-border-sm me-1"></span>
                            Confirmer le rejet
                          </button>
                          <button class="btn btn-outline-secondary btn-sm" (click)="rejectingId = null">Annuler</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminRegistrationsComponent implements OnInit {
  students: PendingStudent[] = [];
  loading = true;
  processing: Record<number, 'validate' | 'reject' | null> = {};
  actionResult: Record<number, 'validated' | 'rejected' | null> = {};
  rejectingId: number | null = null;
  rejectReason = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.http.get<PendingStudent[]>('/api/admin/registrations').subscribe({
      next: (data) => { this.students = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  validate(s: PendingStudent) {
    this.processing[s.id] = 'validate';
    this.http.post(`/api/admin/registrations/${s.id}/validate`, {}).subscribe({
      next: () => {
        this.processing[s.id] = null;
        this.actionResult[s.id] = 'validated';
        this.students = this.students.filter(st => st.id !== s.id);
      },
      error: () => { this.processing[s.id] = null; }
    });
  }

  reject(s: PendingStudent) {
    this.processing[s.id] = 'reject';
    this.http.post(`/api/admin/registrations/${s.id}/reject`, { reason: this.rejectReason }).subscribe({
      next: () => {
        this.processing[s.id] = null;
        this.actionResult[s.id] = 'rejected';
        this.rejectingId = null;
        this.students = this.students.filter(st => st.id !== s.id);
      },
      error: () => { this.processing[s.id] = null; }
    });
  }

  getSpecialization(s: string | null): string {
    const map: Record<string, string> = {
      'genie-logiciel': 'Génie Logiciel',
      'reseau': 'Réseaux',
      'comptabilite': 'Comptabilité',
      'sante': 'Santé',
      'marketing-digital': 'Marketing Digital',
      'developpement-personnel': 'Développement Personnel'
    };
    return s ? (map[s] || s) : 'Non précisée';
  }
}

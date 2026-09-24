import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface AppUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  specialization: string | null;
  bio: string | null;
  avatarUrl: string | null;
  role: string;
  registrationStatus: string;
  enabled: boolean;
  createdAt: string;
}

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="fade-in-up">

      <!-- En-tête -->
      <div class="d-flex align-items-center gap-3 mb-4">
        <a routerLink="/dashboard" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-arrow-left"></i>
        </a>
        <div>
          <h1 class="fw-bold mb-0">Membres de la plateforme</h1>
          <p class="text-muted mb-0">Gérez les apprenants et les partenaires (professeurs)</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem">👨‍🎓</div>
            <div class="fw-bold fs-4 mt-1" style="color:#6366f1">{{ students.length }}</div>
            <div class="text-muted small">Apprenants</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem">👨‍🏫</div>
            <div class="fw-bold fs-4 mt-1" style="color:#10b981">{{ teachers.length }}</div>
            <div class="text-muted small">Partenaires</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem">✅</div>
            <div class="fw-bold fs-4 mt-1" style="color:#059669">{{ students.length + teachers.length }}</div>
            <div class="text-muted small">Total actifs</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <a routerLink="/admin/registrations" class="text-decoration-none">
            <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px;cursor:pointer"
                 [style.background]="pendingCount > 0 ? '#fef3c7' : '#f9fafb'">
              <div style="font-size:2rem">⏳</div>
              <div class="fw-bold fs-4 mt-1" [style.color]="pendingCount > 0 ? '#d97706' : '#6b7280'">{{ pendingCount }}</div>
              <div class="text-muted small">En attente</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Barre de recherche + onglets -->
      <div class="card border-0 shadow-sm mb-4" style="border-radius:16px">
        <div class="card-body p-3">
          <div class="d-flex align-items-center gap-3 flex-wrap">
            <!-- Onglets -->
            <div class="d-flex gap-2">
              <button class="btn fw-semibold px-4"
                      [style.background]="activeTab === 'students' ? '#6366f1' : '#f3f4f6'"
                      [style.color]="activeTab === 'students' ? 'white' : '#374151'"
                      style="border-radius:10px;border:none"
                      (click)="activeTab = 'students'; filterList()">
                👨‍🎓 Apprenants
                <span class="badge ms-1 rounded-pill"
                      [style.background]="activeTab === 'students' ? 'rgba(255,255,255,.3)' : '#6366f1'"
                      style="color:white">{{ students.length }}</span>
              </button>
              <button class="btn fw-semibold px-4"
                      [style.background]="activeTab === 'teachers' ? '#10b981' : '#f3f4f6'"
                      [style.color]="activeTab === 'teachers' ? 'white' : '#374151'"
                      style="border-radius:10px;border:none"
                      (click)="activeTab = 'teachers'; filterList()">
                👨‍🏫 Partenaires
                <span class="badge ms-1 rounded-pill"
                      [style.background]="activeTab === 'teachers' ? 'rgba(255,255,255,.3)' : '#10b981'"
                      style="color:white">{{ teachers.length }}</span>
              </button>
            </div>

            <!-- Recherche -->
            <div class="flex-grow-1" style="min-width:200px">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0">
                  <i class="bi bi-search text-muted"></i>
                </span>
                <input type="text" class="form-control border-start-0 ps-0"
                       placeholder="Rechercher par nom ou email..."
                       [(ngModel)]="searchQuery" (input)="filterList()">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
        <p class="mt-3 text-muted">Chargement...</p>
      </div>

      <!-- Liste vide -->
      <div *ngIf="!loading && filtered.length === 0" class="text-center py-5">
        <div style="font-size:3.5rem">{{ activeTab === 'students' ? '👨‍🎓' : '👨‍🏫' }}</div>
        <h5 class="mt-3 fw-bold">Aucun {{ activeTab === 'students' ? 'apprenant' : 'partenaire' }} trouvé</h5>
        <p class="text-muted">{{ searchQuery ? 'Aucun résultat pour "' + searchQuery + '"' : 'Aucun compte validé pour l\'instant.' }}</p>
      </div>

      <!-- Grille de cartes -->
      <div class="row g-3" *ngIf="!loading && filtered.length > 0">
        <div class="col-12 col-md-6 col-xl-4" *ngFor="let u of filtered">
          <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">

            <!-- Bandeau coloré selon le rôle -->
            <div style="height:5px"
                 [style.background]="activeTab === 'students' ? 'linear-gradient(90deg,#6366f1,#4f46e5)' : 'linear-gradient(90deg,#10b981,#059669)'">
            </div>

            <div class="card-body p-4">
              <div class="d-flex align-items-start gap-3">

                <!-- Avatar -->
                <div style="width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.1rem;flex-shrink:0"
                     [style.background]="activeTab === 'students' ? 'linear-gradient(135deg,#6366f1,#4f46e5)' : 'linear-gradient(135deg,#10b981,#059669)'">
                  {{ u.firstName.charAt(0) }}{{ u.lastName.charAt(0) }}
                </div>

                <div class="flex-grow-1 overflow-hidden">
                  <div class="fw-bold text-truncate">{{ u.firstName }} {{ u.lastName }}</div>
                  <div class="text-muted small text-truncate">{{ u.email }}</div>

                  <!-- Filière (apprenants) -->
                  <span *ngIf="activeTab === 'students' && u.specialization"
                        class="badge mt-1" style="background:#ede9fe;color:#6d28d9;font-size:.72rem">
                    {{ getSpecialization(u.specialization) }}
                  </span>

                  <!-- Bio (partenaires) -->
                  <p *ngIf="activeTab === 'teachers' && u.bio"
                     class="text-muted small mt-1 mb-0"
                     style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
                    {{ u.bio }}
                  </p>
                </div>
              </div>

              <hr class="my-3" style="opacity:.08">

              <!-- Infos bas de carte -->
              <div class="d-flex align-items-center justify-content-between">
                <div class="small text-muted">
                  <i class="bi bi-calendar3 me-1"></i>
                  {{ u.createdAt | date:'dd/MM/yyyy' }}
                </div>

                <div class="d-flex align-items-center gap-2">
                  <!-- Badge statut -->
                  <span class="badge rounded-pill"
                        [style.background]="u.enabled ? '#d1fae5' : '#fee2e2'"
                        [style.color]="u.enabled ? '#065f46' : '#991b1b'"
                        style="font-size:.7rem">
                    {{ u.enabled ? '● Actif' : '● Désactivé' }}
                  </span>

                  <!-- Bouton activer/désactiver -->
                  <button *ngIf="u.enabled"
                          class="btn btn-sm btn-outline-danger py-0 px-2"
                          style="font-size:.75rem;border-radius:8px"
                          [disabled]="processing[u.id]"
                          (click)="toggleAccount(u)">
                    <span *ngIf="processing[u.id]" class="spinner-border spinner-border-sm me-1"></span>
                    Désactiver
                  </button>
                  <button *ngIf="!u.enabled"
                          class="btn btn-sm btn-outline-success py-0 px-2"
                          style="font-size:.75rem;border-radius:8px"
                          [disabled]="processing[u.id]"
                          (click)="toggleAccount(u)">
                    <span *ngIf="processing[u.id]" class="spinner-border spinner-border-sm me-1"></span>
                    Réactiver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
})
export class AdminUsersComponent implements OnInit {
  activeTab: 'students' | 'teachers' = 'students';
  students: AppUser[] = [];
  teachers: AppUser[] = [];
  filtered: AppUser[] = [];
  searchQuery = '';
  loading = true;
  pendingCount = 0;
  processing: Record<number, boolean> = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.loading = true;
    let done = 0;
    const check = () => { if (++done === 3) { this.loading = false; this.filterList(); } };

    this.http.get<AppUser[]>('/api/admin/users/students').subscribe({
      next: (d) => { this.students = d; check(); },
      error: () => check()
    });
    this.http.get<AppUser[]>('/api/admin/users/teachers').subscribe({
      next: (d) => { this.teachers = d; check(); },
      error: () => check()
    });
    this.http.get<{pending: number}>('/api/admin/users/stats').subscribe({
      next: (d) => { this.pendingCount = d.pending; check(); },
      error: () => check()
    });
  }

  filterList() {
    const source = this.activeTab === 'students' ? this.students : this.teachers;
    const q = this.searchQuery.toLowerCase().trim();
    this.filtered = q
      ? source.filter(u =>
          (u.firstName + ' ' + u.lastName).toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q))
      : [...source];
  }

  toggleAccount(u: AppUser) {
    this.processing[u.id] = true;
    const action = u.enabled ? 'disable' : 'enable';
    this.http.post(`/api/admin/users/${u.id}/${action}`, {}).subscribe({
      next: () => {
        u.enabled = !u.enabled;
        this.processing[u.id] = false;
      },
      error: () => { this.processing[u.id] = false; }
    });
  }

  getSpecialization(s: string | null): string {
    const map: Record<string, string> = {
      'genie-logiciel': 'Génie Logiciel', 'reseau': 'Réseaux',
      'comptabilite': 'Comptabilité', 'sante': 'Santé',
      'marketing-digital': 'Marketing Digital', 'developpement-personnel': 'Développement Personnel'
    };
    return s ? (map[s] || s) : '';
  }
}

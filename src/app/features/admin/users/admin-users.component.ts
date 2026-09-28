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
  birthDate?: string | null;
  birthPlace?: string | null;
  level?: string | null;
  subjects?: string | null;
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
        <div class="flex-grow-1">
          <h1 class="fw-bold mb-0">Membres de la plateforme</h1>
          <p class="text-muted mb-0">Gérez les apprenants et les partenaires (professeurs)</p>
        </div>
        <button class="btn fw-semibold px-3" style="background:#1d6ff2;color:#fff;border-radius:12px"
                (click)="openCreate()">
          <i class="bi bi-person-plus me-2"></i>Créer un compte
        </button>
      </div>

      <div *ngIf="createMessage" class="alert d-flex align-items-center gap-2"
           [class.alert-success]="createEmailSent" [class.alert-warning]="!createEmailSent">
        <i class="bi" [class.bi-envelope-check]="createEmailSent" [class.bi-exclamation-triangle]="!createEmailSent"></i>
        <span class="flex-grow-1">{{ createMessage }}</span>
        <button type="button" class="btn-close" (click)="createMessage = ''" aria-label="Fermer"></button>
      </div>

      <!-- Création d'un compte (étudiant ou professeur) -->
      <div *ngIf="showCreate" class="card border-0 shadow-sm mb-4" style="border-radius:16px">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="fw-bold mb-0"><i class="bi bi-person-plus me-2 text-primary"></i>Nouveau compte</h5>
            <button type="button" class="btn-close" (click)="showCreate = false" aria-label="Fermer"></button>
          </div>
          <form (ngSubmit)="createAccount()" #createForm="ngForm">
            <div class="row g-3">
              <div class="col-12">
                <div class="btn-group w-100" role="group" aria-label="Type de compte">
                  <input type="radio" class="btn-check" name="role" id="roleStudent" value="STUDENT" [(ngModel)]="newUser.role">
                  <label class="btn btn-outline-primary" for="roleStudent"><i class="bi bi-mortarboard me-1"></i>Étudiant</label>
                  <input type="radio" class="btn-check" name="role" id="roleTeacher" value="TEACHER" [(ngModel)]="newUser.role">
                  <label class="btn btn-outline-primary" for="roleTeacher"><i class="bi bi-person-video3 me-1"></i>Professeur</label>
                </div>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold small" for="newFirstName">Prénom</label>
                <input id="newFirstName" class="form-control" name="firstName" [(ngModel)]="newUser.firstName" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold small" for="newLastName">Nom</label>
                <input id="newLastName" class="form-control" name="lastName" [(ngModel)]="newUser.lastName" required>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold small" for="newEmail">Email</label>
                <input id="newEmail" type="email" class="form-control" name="email" [(ngModel)]="newUser.email" required email>
              </div>
              <ng-container *ngIf="newUser.role === 'STUDENT'">
                <div class="col-md-6">
                  <label class="form-label fw-semibold small" for="newBirthDate">Date de naissance</label>
                  <input id="newBirthDate" type="date" class="form-control" name="birthDate" [(ngModel)]="newUser.birthDate"
                         [max]="maxBirthDate" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold small" for="newBirthPlace">Lieu de naissance</label>
                  <input id="newBirthPlace" class="form-control" name="birthPlace" [(ngModel)]="newUser.birthPlace"
                         placeholder="Ex. Dakar" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold small" for="newLevel">Niveau</label>
                  <select id="newLevel" class="form-select" name="level" [(ngModel)]="newUser.level" required>
                    <option value="" disabled>— Choisir —</option>
                    <option *ngFor="let l of levels" [value]="l">{{ l }}</option>
                  </select>
                </div>
              </ng-container>
              <div class="col-12" *ngIf="newUser.role === 'TEACHER'">
                <label class="form-label fw-semibold small" for="newSubjects">Matières enseignées</label>
                <input id="newSubjects" class="form-control" name="subjects" [(ngModel)]="newUser.subjects" required
                       placeholder="Ex. Comptabilité analytique, Fiscalité, Mathématiques financières">
                <div class="form-text">Séparez les matières par des virgules.</div>
              </div>
              <div class="col-md-6" *ngIf="newUser.role === 'STUDENT'">
                <label class="form-label fw-semibold small" for="newSpecialization">Filière</label>
                <select id="newSpecialization" class="form-select" name="specialization" [(ngModel)]="newUser.specialization">
                  <option value="">— Aucune —</option>
                  <option *ngFor="let f of specializations" [value]="f.value">{{ f.label }}</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold small" for="newPassword">Mot de passe</label>
                <div class="input-group">
                  <input id="newPassword" class="form-control font-monospace" name="password" [(ngModel)]="newUser.password"
                         required minlength="6">
                  <button type="button" class="btn btn-outline-secondary" (click)="newUser.password = generatePassword()"
                          title="Générer un autre mot de passe"><i class="bi bi-arrow-repeat"></i></button>
                </div>
                <div class="form-text">Envoyé automatiquement par email à l'utilisateur.</div>
              </div>
            </div>
            <div *ngIf="createError" class="alert alert-danger py-2 small mt-3 mb-0">{{ createError }}</div>
            <div class="d-flex justify-content-end gap-2 mt-4">
              <button type="button" class="btn btn-outline-secondary" (click)="showCreate = false">Annuler</button>
              <button type="submit" class="btn btn-primary fw-semibold" [disabled]="creating || createForm.invalid">
                <span *ngIf="creating" class="spinner-border spinner-border-sm me-2"></span>
                <i *ngIf="!creating" class="bi bi-send me-2"></i>Créer et envoyer les identifiants
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Stats -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem"><i class="bi bi-mortarboard"></i></div>
            <div class="fw-bold fs-4 mt-1" style="color:#1d6ff2">{{ students.length }}</div>
            <div class="text-muted small">Apprenants</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem"><i class="bi bi-person-video3"></i></div>
            <div class="fw-bold fs-4 mt-1" style="color:#10b981">{{ teachers.length }}</div>
            <div class="text-muted small">Partenaires</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px">
            <div style="font-size:2rem"><i class="bi bi-check-circle"></i></div>
            <div class="fw-bold fs-4 mt-1" style="color:#059669">{{ students.length + teachers.length }}</div>
            <div class="text-muted small">Total actifs</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <a routerLink="/admin/registrations" class="text-decoration-none">
            <div class="card border-0 shadow-sm text-center p-3" style="border-radius:14px;cursor:pointer"
                 [style.background]="pendingCount > 0 ? '#fef3c7' : '#f9fafb'">
              <div style="font-size:2rem"><i class="bi bi-hourglass-split"></i></div>
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
                      [style.background]="activeTab === 'students' ? '#1d6ff2' : '#f3f4f6'"
                      [style.color]="activeTab === 'students' ? 'white' : '#374151'"
                      style="border-radius:10px;border:none"
                      (click)="activeTab = 'students'; filterList()">
                <i class="bi bi-mortarboard me-1"></i>Apprenants
                <span class="badge ms-1 rounded-pill"
                      [style.background]="activeTab === 'students' ? 'rgba(255,255,255,.3)' : '#1d6ff2'"
                      style="color:white">{{ students.length }}</span>
              </button>
              <button class="btn fw-semibold px-4"
                      [style.background]="activeTab === 'teachers' ? '#10b981' : '#f3f4f6'"
                      [style.color]="activeTab === 'teachers' ? 'white' : '#374151'"
                      style="border-radius:10px;border:none"
                      (click)="activeTab = 'teachers'; filterList()">
                <i class="bi bi-person-video3 me-1"></i>Partenaires
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
        <div style="font-size:3.5rem"><i class="bi" [ngClass]="activeTab === 'students' ? 'bi-mortarboard' : 'bi-person-video3'"></i></div>
        <h5 class="mt-3 fw-bold">Aucun {{ activeTab === 'students' ? 'apprenant' : 'partenaire' }} trouvé</h5>
        <p class="text-muted">{{ searchQuery ? 'Aucun résultat pour "' + searchQuery + '"' : 'Aucun compte validé pour l\'instant.' }}</p>
      </div>

      <!-- Grille de cartes -->
      <div class="row g-3" *ngIf="!loading && filtered.length > 0">
        <div class="col-12 col-md-6 col-xl-4" *ngFor="let u of filtered">
          <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">

            <!-- Bandeau coloré selon le rôle -->
            <div style="height:5px"
                 [style.background]="activeTab === 'students' ? '#1d6ff2' : '#1d6ff2'">
            </div>

            <div class="card-body p-4">
              <div class="d-flex align-items-start gap-3">

                <!-- Avatar -->
                <div style="width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.1rem;flex-shrink:0"
                     [style.background]="activeTab === 'students' ? '#1d6ff2' : '#1d6ff2'">
                  {{ u.firstName.charAt(0) }}{{ u.lastName.charAt(0) }}
                </div>

                <div class="flex-grow-1 overflow-hidden">
                  <div class="fw-bold text-truncate">{{ u.firstName }} {{ u.lastName }}</div>
                  <div class="text-muted small text-truncate">{{ u.email }}</div>

                  <!-- Niveau, filière, naissance (apprenants) -->
                  <div *ngIf="activeTab === 'students'" class="d-flex flex-wrap gap-1 mt-1">
                    <span *ngIf="u.level" class="badge" style="background:#dbeafe;color:#1d4ed8;font-size:.72rem">{{ u.level }}</span>
                    <span *ngIf="u.specialization" class="badge" style="background:#eef4ff;color:#1658c4;font-size:.72rem">
                      {{ getSpecialization(u.specialization) }}
                    </span>
                  </div>
                  <div *ngIf="activeTab === 'students' && (u.birthDate || u.birthPlace)" class="text-muted small mt-1">
                    <i class="bi bi-calendar-event me-1"></i>Né(e) {{ u.birthDate ? ('le ' + (u.birthDate | date:'dd/MM/yyyy')) : '' }}{{ u.birthPlace ? ' à ' + u.birthPlace : '' }}
                  </div>

                  <!-- Matières (partenaires) -->
                  <div *ngIf="activeTab === 'teachers' && u.subjects" class="d-flex flex-wrap gap-1 mt-1">
                    <span *ngFor="let m of subjectList(u.subjects)" class="badge" style="background:#d1fae5;color:#047857;font-size:.72rem">{{ m }}</span>
                  </div>

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

  showCreate = false;
  creating = false;
  createError = '';
  createMessage = '';
  createEmailSent = true;
  newUser = this.emptyUser();
  readonly levels = ['L1', 'L2', 'L3', 'M1', 'M2'];
  readonly maxBirthDate = new Date(new Date().getFullYear() - 10, 11, 31).toISOString().substring(0, 10);
  readonly specializations = [
    { value: 'genie-logiciel', label: 'Génie Logiciel' }, { value: 'reseau', label: 'Réseaux' },
    { value: 'comptabilite', label: 'Comptabilité' }, { value: 'sante', label: 'Santé' },
    { value: 'marketing-digital', label: 'Marketing Digital' },
    { value: 'developpement-personnel', label: 'Développement Personnel' }
  ];

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

  private emptyUser() {
    return {
      role: 'STUDENT', firstName: '', lastName: '', email: '', specialization: '', password: this.generatePassword(),
      birthDate: '', birthPlace: '', level: '', subjects: ''
    };
  }

  openCreate() {
    this.newUser = this.emptyUser();
    this.newUser.role = this.activeTab === 'teachers' ? 'TEACHER' : 'STUDENT';
    this.createError = '';
    this.showCreate = true;
  }

  generatePassword(): string {
    // Sans caractères ambigus (0/O, 1/l/I) pour faciliter la saisie
    const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    return Array.from(crypto.getRandomValues(new Uint32Array(10)), b => alphabet[b % alphabet.length]).join('');
  }

  createAccount() {
    if (this.creating) return;
    this.creating = true;
    this.createError = '';
    const student = this.newUser.role === 'STUDENT';
    const body = {
      ...this.newUser,
      specialization: student ? this.newUser.specialization : '',
      birthDate: student ? this.newUser.birthDate : '',
      birthPlace: student ? this.newUser.birthPlace : '',
      level: student ? this.newUser.level : '',
      subjects: student ? '' : this.newUser.subjects
    };
    this.http.post<{ user: AppUser; emailSent: boolean; message: string }>('/api/admin/users', body).subscribe({
      next: res => {
        this.creating = false;
        this.showCreate = false;
        this.createEmailSent = res.emailSent;
        this.createMessage = res.message;
        if (res.user.role === 'ROLE_TEACHER') {
          this.teachers = [res.user, ...this.teachers];
          this.activeTab = 'teachers';
        } else {
          this.students = [res.user, ...this.students];
          this.activeTab = 'students';
        }
        this.filterList();
      },
      error: err => {
        this.creating = false;
        this.createError = err.error?.message || 'Impossible de créer le compte.';
      }
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

  subjectList(subjects: string | null | undefined): string[] {
    return (subjects || '').split(/[,;]/).map(m => m.trim()).filter(Boolean);
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

import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { UserScopeService } from '../../core/services/user-scope.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar pt-3">
      <div class="px-3 mb-4">
        <div class="d-flex align-items-center gap-2 p-3 rounded-3" style="background:rgba(255,255,255,.07)">
          <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold"
               style="width:40px;height:40px;font-size:0.9rem;flex-shrink:0">
            {{ authService.currentUser?.firstName?.charAt(0) }}{{ authService.currentUser?.lastName?.charAt(0) }}
          </div>
          <div class="overflow-hidden">
            <div class="text-white fw-semibold text-truncate" style="font-size:0.85rem">
              {{ authService.currentUser?.firstName }} {{ authService.currentUser?.lastName }}
            </div>
            <span class="badge" style="font-size:.6rem"
                  [class.bg-primary]="authService.isStudent"
                  [class.bg-success]="authService.isTeacher"
                  [class.bg-danger]="authService.isAdmin">
              {{ authService.isAdmin ? '⚙️ Admin' : authService.isTeacher ? '👨‍🏫 Professeur' : '👨‍🎓 Étudiant' }}
            </span>
          </div>
        </div>
      </div>

      <ul class="nav flex-column px-1">
        <li><a class="nav-link" routerLink="/dashboard" routerLinkActive="active">
          <i class="bi bi-speedometer2"></i>Tableau de bord</a></li>
        <li><a class="nav-link" routerLink="/courses" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
          <i class="bi bi-compass"></i>Explorer les cours</a></li>
        <li *ngIf="authService.isStudent || authService.isAdmin">
          <a class="nav-link" routerLink="/courses/my-learning" routerLinkActive="active">
            <i class="bi bi-mortarboard"></i>Mon Apprentissage</a></li>
        <li *ngIf="authService.isStudent || authService.isAdmin">
          <a class="nav-link" routerLink="/my-exams" routerLinkActive="active">
            <i class="bi bi-clipboard-check"></i>Examens en ligne</a></li>
      <!--  <li><a class="nav-link" routerLink="/library" routerLinkActive="active">
          <i class="bi bi-book"></i>Bibliothèque</a></li>
        <li><a class="nav-link" routerLink="/references" routerLinkActive="active">
          <i class="bi bi-journals"></i>Références Zotero</a></li> -->
        <li><a class="nav-link" routerLink="/virtual-class" routerLinkActive="active">
          <i class="bi bi-camera-video"></i>Classes Virtuelles</a></li>
        <li><a class="nav-link" routerLink="/profile" routerLinkActive="active">
          <i class="bi bi-person-gear"></i>Mon Profil</a></li>

        <ng-container *ngIf="authService.isTeacher || authService.isAdmin">
          <li class="mt-3 px-2">
            <span class="text-secondary" style="font-size:.65rem;text-transform:uppercase;letter-spacing:1px;font-weight:600">
              Espace Professeur
            </span>
          </li>
          <li><a class="nav-link" routerLink="/teacher/courses" routerLinkActive="active">
            <i class="bi bi-collection"></i>Mes Cours</a></li>
          <li><a class="nav-link" routerLink="/teacher/create-course" routerLinkActive="active">
            <i class="bi bi-plus-circle"></i>Créer un cours</a></li>
          <li><a class="nav-link" routerLink="/teacher/exams" routerLinkActive="active">
            <i class="bi bi-clipboard-check"></i>Examens en ligne</a></li>
          <li><a class="nav-link" routerLink="/teacher/students" routerLinkActive="active">
            <i class="bi bi-people"></i>Étudiants et notes</a></li>
        </ng-container>

        <ng-container *ngIf="authService.isAdmin">
          <li class="mt-3 px-2">
            <span class="text-secondary" style="font-size:.65rem;text-transform:uppercase;letter-spacing:1px;font-weight:600">
              Administration
            </span>
          </li>
          <li>
            <a class="nav-link d-flex align-items-center justify-content-between"
               routerLink="/admin/registrations" routerLinkActive="active">
              <span><i class="bi bi-person-check me-2"></i>Inscriptions</span>
              <span *ngIf="pendingCount > 0"
                    class="badge rounded-pill"
                    style="background:#f59e0b;color:white;font-size:.65rem;min-width:20px;text-align:center">
                {{ pendingCount }}
              </span>
            </a>
          </li>
          <li>
            <a class="nav-link" routerLink="/admin/users" routerLinkActive="active">
              <i class="bi bi-people me-2"></i>Apprenants & Partenaires
            </a>
          </li>
        </ng-container>
      </ul>
    </div>
  `
})
export class SidebarComponent implements OnInit {
  pendingCount = 0;

  constructor(public authService: AuthService, public userScope: UserScopeService, private http: HttpClient) {}

  ngOnInit() {
    if (this.authService.isAdmin) {
      this.loadPendingCount();
    }
  }

  loadPendingCount() {
    this.http.get<{count: number}>('/api/admin/registrations/count').subscribe({
      next: (res) => this.pendingCount = res.count,
      error: () => {}
    });
  }

  /** Visible par les profs/admin, et par les étudiants en filière génie logiciel. */
  get canSeeProjects(): boolean {
    if (this.authService.isTeacher || this.authService.isAdmin) return true;
    return this.authService.currentUser?.specialization === 'genie-logiciel';
  }
}

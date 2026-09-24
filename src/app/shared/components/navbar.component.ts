import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm" style="height: var(--navbar-height);">
      <div class="container-fluid px-4">
        <a class="navbar-brand" routerLink="/dashboard">
          🎓 ELearning
        </a>
        <div class="d-flex align-items-center ms-auto gap-3">
          <div class="dropdown">
            <button class="btn btn-sm btn-outline-light dropdown-toggle" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle me-1"></i>
              {{ authService.currentUser?.firstName }}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" routerLink="/profile"><i class="bi bi-person me-2"></i>Mon Profil</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger" (click)="logout()" style="cursor:pointer">
                <i class="bi bi-box-arrow-right me-2"></i>Déconnexion</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}
  logout() { this.authService.logout(); }
}

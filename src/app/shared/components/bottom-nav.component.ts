import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LayoutService } from '../../core/services/layout.service';

/** icon : contour ; active : icône pleine de l'onglet ouvert (si elle existe dans Bootstrap Icons). */
interface Tab { label: string; icon: string; active?: string; link: string; }

/** Onglets principaux selon le rôle ; « Plus » ouvre le menu complet. */
const TABS: Record<string, Tab[]> = {
  ROLE_STUDENT: [
    { label: 'Accueil', icon: 'bi-house', active: 'bi-house-fill', link: '/dashboard' },
    { label: 'Mes cours', icon: 'bi-play-btn', active: 'bi-play-btn-fill', link: '/courses/my-learning' },
    { label: 'Devoirs', icon: 'bi-journal-check', link: '/qcm' },
    { label: 'Scolarité', icon: 'bi-wallet', active: 'bi-wallet-fill', link: '/scolarite' }
  ],
  ROLE_TEACHER: [
    { label: 'Accueil', icon: 'bi-house', active: 'bi-house-fill', link: '/dashboard' },
    { label: 'Mes cours', icon: 'bi-collection-play', active: 'bi-collection-play-fill', link: '/teacher/courses' },
    { label: 'Devoirs', icon: 'bi-journal-check', link: '/teacher/exams' },
    { label: 'Classes', icon: 'bi-camera-video', active: 'bi-camera-video-fill', link: '/virtual-class' }
  ],
  ROLE_ADMIN: [
    { label: 'Accueil', icon: 'bi-house', active: 'bi-house-fill', link: '/dashboard' },
    { label: 'Scolarité', icon: 'bi-bank', link: '/admin/scolarite' },
    { label: 'Paiements', icon: 'bi-cash-coin', link: '/admin/paiements' },
    { label: 'Membres', icon: 'bi-people', active: 'bi-people-fill', link: '/admin/users' }
  ]
};

/** Barre d'onglets en bas de l'écran sur téléphone, comme une application mobile. */
@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="bottom-nav d-md-none" aria-label="Navigation principale">
      <a *ngFor="let t of tabs" class="bottom-tab" [routerLink]="t.link" routerLinkActive="active"
         #rla="routerLinkActive" [attr.aria-current]="rla.isActive ? 'page' : null" (click)="layout.closeMobile()">
        <i class="bi" [ngClass]="rla.isActive ? (t.active || t.icon) : t.icon"></i>
        <span>{{ t.label }}</span>
      </a>
      <button type="button" class="bottom-tab" [class.active]="layout.mobileOpen" (click)="layout.toggleMobile()"
              [attr.aria-expanded]="layout.mobileOpen">
        <i class="bi bi-grid"></i><span>Plus</span>
      </button>
    </nav>
  `,
  styles: [`
    .bottom-nav {
      position: fixed; left: 0; right: 0; bottom: 0; z-index: 100;
      display: flex; height: calc(var(--tabbar-height) + var(--safe-bottom)); padding-bottom: var(--safe-bottom);
      background: rgba(250, 250, 251, .94); -webkit-backdrop-filter: saturate(180%) blur(14px); backdrop-filter: saturate(180%) blur(14px);
      border-top: 1px solid var(--surface-border);
    }
    .bottom-tab {
      flex: 1 1 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
      border: 0; background: none; color: var(--muted); text-decoration: none; font-size: .68rem; font-weight: 600;
      min-width: 0; padding: 6px 2px;
    }
    .bottom-tab i { font-size: 1.35rem; line-height: 1; }
    .bottom-tab span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
    .bottom-tab.active { color: var(--primary); }
  `]
})
export class BottomNavComponent {
  constructor(public auth: AuthService, public layout: LayoutService) {}

  get tabs(): Tab[] {
    return TABS[this.auth.currentUser?.role ?? 'ROLE_STUDENT'] ?? TABS['ROLE_STUDENT'];
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { HttpClient, HttpContext } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription, filter, timer } from 'rxjs';
import { SILENT_ERRORS } from '../../core/interceptors/error.interceptor';
import { AuthService } from '../../core/services/auth.service';
import { LayoutService } from '../../core/services/layout.service';

interface PageTitle { title: string; subtitle: string; }

interface AppNotification { id: number; title: string; message: string; link: string | null; category: string; read: boolean; createdAt: string; }

const CATEGORY_ICONS: Record<string, string> = {
  PAIEMENT: 'bi-cash-coin', NOTES: 'bi-journal-text', ATTESTATION: 'bi-patch-check', INSCRIPTION: 'bi-person-vcard', INFO: 'bi-megaphone'
};

/** Titre affiché dans l'en-tête selon l'URL (préfixe le plus long d'abord). */
const PAGE_TITLES: [string, PageTitle][] = [
  ['/dashboard', { title: 'Accueil', subtitle: 'Tableau de bord' }],
  ['/courses/my-learning', { title: 'Mon apprentissage', subtitle: 'Cours suivis' }],
  ['/courses', { title: 'Cours', subtitle: 'Catalogue des formations' }],
  ['/my-exams', { title: 'Examens', subtitle: 'Mes examens en ligne' }],
  ['/qcm', { title: 'Devoirs', subtitle: 'Mes devoirs' }],
  ['/virtual-class', { title: 'Classes virtuelles', subtitle: 'Sessions en direct' }],
  ['/virtual-class/*/attendance', { title: 'Rapport de présence', subtitle: 'Classes virtuelles' }],
  ['/profile', { title: 'Mon profil', subtitle: 'Informations personnelles' }],
  ['/teacher/courses', { title: 'Mes cours', subtitle: 'Espace professeur' }],
  ['/teacher/courses/*/progress', { title: 'Suivi des étudiants', subtitle: 'Mes cours' }],
  ['/teacher/create-course', { title: 'Créer un cours', subtitle: 'Espace professeur' }],
  ['/teacher/exams', { title: 'Devoirs et examens', subtitle: 'Espace professeur' }],
  ['/teacher/qcms', { title: 'Devoirs et examens', subtitle: 'Espace professeur' }],
  ['/teacher/students', { title: 'Étudiants et notes', subtitle: 'Espace professeur' }],
  ['/admin/registrations', { title: 'Inscriptions', subtitle: 'Administration' }],
  ['/admin/users', { title: 'Étudiants et professeurs', subtitle: 'Administration' }],
  ['/admin/scolarite', { title: 'Scolarité', subtitle: 'Administration' }],
  ['/admin/paiements', { title: 'Paiements', subtitle: 'Administration' }],
  ['/scolarite', { title: 'Ma scolarité', subtitle: 'Frais, notes et attestations' }],
  ['/library', { title: 'Bibliothèque', subtitle: 'Ressources' }],
  ['/references', { title: 'Références', subtitle: 'Ressources' }]
];

/** Préfixe d'URL, « * » remplaçant un segment (ex. un identifiant). */
function matchesPrefix(path: string, prefix: string): boolean {
  const p = path.split('/'), q = prefix.split('/');
  if (p.length < q.length) return false;
  return q.every((seg, i) => seg === '*' || seg === p[i]);
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="app-header">
      <button type="button" class="header-icon-btn d-md-none" (click)="layout.toggleMobile()" aria-label="Ouvrir le menu">
        <i class="bi bi-list"></i>
      </button>

      <div class="header-title">
        <h1>{{ page.title }}</h1>
        <span>{{ page.subtitle }}</span>
      </div>

      <div class="header-actions">
        <div class="dropdown">
          <button type="button" class="header-icon-btn" data-bs-toggle="dropdown" aria-expanded="false" aria-label="Notifications"
                  (click)="loadNotifications()">
            <i class="bi bi-bell"></i>
            <span *ngIf="badgeCount > 0" class="header-dot">{{ badgeCount > 9 ? '9+' : badgeCount }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-end header-menu" style="width:360px;max-width:92vw">
            <div class="header-menu-title d-flex justify-content-between align-items-center">
              <span>Notifications</span>
              <button *ngIf="unreadCount > 0" type="button" class="btn btn-link btn-sm p-0 text-decoration-none" (click)="markAllRead($event)">Tout marquer comme lu</button>
            </div>
            <a *ngIf="pendingCount > 0" class="dropdown-item d-flex gap-2 align-items-start" routerLink="/admin/registrations">
              <i class="bi bi-person-check mt-1"></i>
              <span>{{ pendingCount }} inscription{{ pendingCount > 1 ? 's' : '' }} en attente de validation</span>
            </a>
            <div style="max-height:380px;overflow-y:auto">
              <button *ngFor="let n of notifications" type="button" class="dropdown-item d-flex gap-2 align-items-start text-wrap"
                      [class.fw-semibold]="!n.read" (click)="openNotification(n)">
                <i class="bi mt-1" [ngClass]="icon(n.category)" [class.text-primary]="!n.read"></i>
                <span class="flex-grow-1">
                  <span class="d-block">{{ n.title }}</span>
                  <span class="d-block small text-muted fw-normal">{{ n.message }}</span>
                  <span class="d-block small text-muted fw-normal">{{ n.createdAt | date:'dd/MM HH:mm' }}</span>
                </span>
              </button>
            </div>
            <div *ngIf="pendingCount === 0 && notifications.length === 0" class="px-3 py-2 small text-muted">Aucune notification</div>
          </div>
        </div>

        <div class="dropdown">
          <button type="button" class="header-user" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="header-user-text d-none d-sm-flex">
              <span class="header-user-name">{{ authService.currentUser?.firstName }} {{ authService.currentUser?.lastName }}</span>
              <span class="header-user-role">{{ roleLabel }}</span>
            </span>
            <span class="header-avatar">{{ initials }}</span>
            <i class="bi bi-chevron-down header-caret"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end header-menu">
            <li class="px-3 py-2 d-sm-none">
              <div class="fw-semibold">{{ authService.currentUser?.firstName }} {{ authService.currentUser?.lastName }}</div>
              <div class="small text-muted">{{ roleLabel }}</div>
            </li>
            <li><a class="dropdown-item" routerLink="/profile"><i class="bi bi-person me-2"></i>Mon profil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><button type="button" class="dropdown-item text-danger" (click)="logout()">
              <i class="bi bi-box-arrow-right me-2"></i>Déconnexion</button></li>
          </ul>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent implements OnInit, OnDestroy {
  page: PageTitle = PAGE_TITLES[0][1];
  pendingCount = 0;
  unreadCount = 0;
  notifications: AppNotification[] = [];
  private poll?: Subscription;

  constructor(public authService: AuthService, public layout: LayoutService,
              private router: Router, private http: HttpClient) {}

  get initials(): string {
    const u = this.authService.currentUser;
    return `${u?.firstName?.charAt(0) ?? ''}${u?.lastName?.charAt(0) ?? ''}`.toUpperCase();
  }

  get roleLabel(): string {
    return this.authService.isAdmin ? 'Administrateur' : this.authService.isTeacher ? 'Professeur' : 'Étudiant';
  }

  ngOnInit() {
    this.updateTitle(this.router.url);
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.updateTitle(e.urlAfterRedirects));

    if (this.authService.isAdmin) {
      this.http.get<{ count: number }>('/api/admin/registrations/count').subscribe({
        next: res => this.pendingCount = res.count,
        error: () => {}
      });
    }
    // Nombre de notifications non lues, rafraîchi chaque minute
    this.poll = timer(0, 60_000).subscribe(() => this.loadUnreadCount());
  }

  ngOnDestroy() { this.poll?.unsubscribe(); }

  get badgeCount(): number { return this.pendingCount + this.unreadCount; }

  icon(category: string): string { return CATEGORY_ICONS[category] ?? 'bi-bell'; }

  private loadUnreadCount() {
    if (!this.authService.isAuthenticated) return;
    this.http.get<{ count: number }>('/api/notifications/unread-count', { context: new HttpContext().set(SILENT_ERRORS, true) })
      .subscribe({ next: r => this.unreadCount = r.count, error: () => {} });
  }

  loadNotifications() {
    this.http.get<AppNotification[]>('/api/notifications', { context: new HttpContext().set(SILENT_ERRORS, true) })
      .subscribe({ next: n => this.notifications = n, error: () => {} });
  }

  openNotification(n: AppNotification) {
    if (!n.read) {
      n.read = true;
      this.unreadCount = Math.max(0, this.unreadCount - 1);
      this.http.post(`/api/notifications/${n.id}/read`, {}).subscribe({ error: () => {} });
    }
    if (n.link) this.router.navigateByUrl(n.link);
  }

  markAllRead(event: Event) {
    event.stopPropagation();
    this.http.post('/api/notifications/read-all', {}).subscribe(() => {
      this.unreadCount = 0;
      this.notifications.forEach(n => n.read = true);
    });
  }

  private updateTitle(url: string) {
    const path = url.split(/[?#]/)[0];
    const match = [...PAGE_TITLES].sort((a, b) => b[0].length - a[0].length)
      .find(([prefix]) => matchesPrefix(path, prefix));
    this.page = match ? match[1] : { title: 'ITECOM', subtitle: 'E-learning' };
  }

  logout() { this.authService.logout(); }
}

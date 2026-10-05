import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { AuthService } from './core/services/auth.service';
import { UiChromeService } from './core/services/ui-chrome.service';
import { CommonModule } from '@angular/common';
import { DialogHostComponent } from './shared/components/dialog-host.component';

/** Pages affichées sans menu, même connecté : connexion et vérification publique d'un document. */
function isStandalonePage(url: string): boolean {
  return url.startsWith('/auth') || url.startsWith('/verification');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, CommonModule, DialogHostComponent],
  template: `
    <!-- Les pages /auth (connexion…) et /verification (QR code) s'affichent toujours sans le menu du tableau de bord -->
    <ng-container *ngIf="authService.isAuthenticated && !(isAuthPage$ | async); else publicLayout">
      <ng-container *ngIf="!(uiChrome.hidden$ | async)">
        <app-navbar></app-navbar>
        <app-sidebar></app-sidebar>
      </ng-container>
      <main class="main-content fade-in-up" [class.main-content-full]="uiChrome.hidden$ | async">
        <router-outlet></router-outlet>
      </main>
    </ng-container>
    <ng-template #publicLayout>
      <router-outlet></router-outlet>
    </ng-template>
    <app-dialog-host></app-dialog-host>
  `
})
export class AppComponent {
  readonly isAuthPage$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(e => isStandalonePage(e.urlAfterRedirects)),
    startWith(isStandalonePage(location.pathname))
  );

  constructor(public authService: AuthService, public uiChrome: UiChromeService, private router: Router) {}
}

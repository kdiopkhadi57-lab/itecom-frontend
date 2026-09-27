import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { NavbarComponent } from './shared/components/navbar.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { AuthService } from './core/services/auth.service';
import { UiChromeService } from './core/services/ui-chrome.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, CommonModule],
  template: `
    <!-- Les pages /auth (connexion…) s'affichent toujours sans le menu du tableau de bord -->
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
  `
})
export class AppComponent {
  readonly isAuthPage$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(e => e.urlAfterRedirects.startsWith('/auth')),
    startWith(location.pathname.startsWith('/auth'))
  );

  constructor(public authService: AuthService, public uiChrome: UiChromeService, private router: Router) {}
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    <ng-container *ngIf="authService.isAuthenticated; else publicLayout">
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
  constructor(public authService: AuthService, public uiChrome: UiChromeService) {}
}

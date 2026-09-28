import { Injectable } from '@angular/core';

const COLLAPSED_KEY = 'itecom-sidebar-collapsed';

/**
 * État du menu latéral : replié (bureau) et ouvert (mobile).
 * Les classes posées sur <body> pilotent la mise en page dans styles.scss.
 */
@Injectable({ providedIn: 'root' })
export class LayoutService {
  collapsed = false;
  mobileOpen = false;

  constructor() {
    try { this.collapsed = localStorage.getItem(COLLAPSED_KEY) === '1'; } catch {}
    this.sync();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    try { localStorage.setItem(COLLAPSED_KEY, this.collapsed ? '1' : '0'); } catch {}
    this.sync();
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; this.sync(); }

  closeMobile() {
    if (!this.mobileOpen) return;
    this.mobileOpen = false;
    this.sync();
  }

  private sync() {
    document.body.classList.toggle('sidebar-collapsed', this.collapsed);
    document.body.classList.toggle('sidebar-mobile-open', this.mobileOpen);
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAuthenticated) return true;
  router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

export const studentGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  return authService.isAuthenticated && (authService.isStudent || authService.isAdmin);
};

export const teacherGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  return authService.isAuthenticated && (authService.isTeacher || authService.isAdmin);
};

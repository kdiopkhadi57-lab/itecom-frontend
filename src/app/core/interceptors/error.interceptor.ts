import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let router = inject(Router);
  return next(req).pipe(
    catchError(error => {
      // Un 401 sur /api/auth (mauvais identifiants) est géré par le formulaire lui-même
      if (error.status === 401 && !req.url.includes('/api/auth/')) {
        localStorage.clear();
        const current = router.url;
        router.navigate(['/auth/login'], {
          queryParams: current.startsWith('/auth') ? {} : { returnUrl: current }
        });
      }
      return throwError(() => error);
    })
  );
};

import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DialogService } from '../services/dialog.service';

/** À poser sur une requête de fond (ex. envoi du temps passé) pour ne pas afficher de message d'erreur. */
export const SILENT_ERRORS = new HttpContextToken<boolean>(() => false);

// Évite d'empiler le même message quand plusieurs requêtes échouent en même temps
let lastToast = { message: '', at: 0 };

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let router = inject(Router);
  let authService = inject(AuthService);
  let dialogs = inject(DialogService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        authService.clearSession();
        router.navigate(['/auth/login'], {
          queryParams: { returnUrl: router.url }
        });
      } else if (!req.context.get(SILENT_ERRORS)) {
        // Les erreurs 400/404/409 sont affichées par les formulaires eux-mêmes ;
        // les autres échouaient souvent sans aucun message (page vide).
        const message = globalErrorMessage(error);
        if (message && (message !== lastToast.message || Date.now() - lastToast.at > 4000)) {
          lastToast = { message, at: Date.now() };
          dialogs.toast(message, 'danger', 5000);
        }
      }
      return throwError(() => error);
    })
  );
};

function globalErrorMessage(error: HttpErrorResponse): string | null {
  if (!navigator.onLine || error.headers?.get('X-Itecom-Offline')) {
    return 'Vous êtes hors connexion : seuls les cours téléchargés sont disponibles.';
  }
  if (error.status === 0) return 'Serveur injoignable. Vérifiez votre connexion internet puis réessayez.';
  if (error.status === 403) return 'Accès refusé : vous n\'avez pas les droits pour cette action.';
  if (error.status >= 500) return 'Le serveur a rencontré une erreur. Réessayez dans un instant.';
  return null;
}

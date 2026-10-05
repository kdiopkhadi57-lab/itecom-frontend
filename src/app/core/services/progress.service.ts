import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { SILENT_ERRORS } from '../interceptors/error.interceptor';
import { Observable, catchError, of, throwError } from 'rxjs';
import { OfflineService } from './offline.service';
import { Progress } from '../models/course.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  constructor(private http: HttpClient, private offline: OfflineService) {}

  completeLesson(lessonId: number): Observable<ApiResponse<string>> {
    return this.postOrQueue(`/api/progress/lesson/${lessonId}/complete`, {});
  }

  updateScrollProgress(lessonId: number, percentage: number): Observable<ApiResponse<string>> {
    return this.postOrQueue(`/api/progress/lesson/${lessonId}/scroll`, { percentage });
  }

  /** Ajoute du temps passé (en secondes) sur une leçon. */
  addTimeSpent(lessonId: number, seconds: number): Observable<ApiResponse<string>> {
    return this.postOrQueue(`/api/progress/lesson/${lessonId}/time`, { seconds }, true);
  }

  /**
   * Hors connexion (ou réseau coupé pendant l'envoi) : l'action est gardée sur l'appareil
   * et envoyée au retour de la connexion ; l'étudiant continue son cours normalement.
   */
  private postOrQueue(url: string, body: unknown, silent = false): Observable<ApiResponse<string>> {
    const saved = { success: true, message: 'Enregistré sur l\'appareil, envoyé au retour de la connexion.', data: '' };
    if (!this.offline.online) {
      this.offline.enqueue(url, body);
      return of(saved);
    }
    return this.http.post<ApiResponse<string>>(url, body, { context: new HttpContext().set(SILENT_ERRORS, silent) }).pipe(
      catchError(err => {
        if (err?.status === 0 || err?.status === 503) {
          this.offline.enqueue(url, body);
          return of(saved);
        }
        return throwError(() => err);
      })
    );
  }

  saveCode(lessonId: number, code: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`/api/progress/lesson/${lessonId}/save-code`, { code });
  }

  getSavedCode(lessonId: number): Observable<ApiResponse<{ code: string | null }>> {
    return this.http.get<ApiResponse<{ code: string | null }>>(`/api/progress/lesson/${lessonId}/saved-code`);
  }

  getCourseProgress(courseId: number): Observable<Progress> {
    return this.http.get<Progress>(`/api/progress/course/${courseId}`);
  }

  getMyProgress(): Observable<Progress[]> {
    return this.http.get<Progress[]>('/api/progress/my-progress');
  }
}

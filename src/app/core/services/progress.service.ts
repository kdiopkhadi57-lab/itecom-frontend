import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { SILENT_ERRORS } from '../interceptors/error.interceptor';
import { Observable } from 'rxjs';
import { Progress } from '../models/course.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  constructor(private http: HttpClient) {}

  completeLesson(lessonId: number): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`/api/progress/lesson/${lessonId}/complete`, {});
  }

  updateScrollProgress(lessonId: number, percentage: number): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`/api/progress/lesson/${lessonId}/scroll`, { percentage });
  }

  /** Ajoute du temps passé (en secondes) sur une leçon. */
  addTimeSpent(lessonId: number, seconds: number): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`/api/progress/lesson/${lessonId}/time`, { seconds },
      { context: new HttpContext().set(SILENT_ERRORS, true) });
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

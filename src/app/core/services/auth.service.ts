import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthResponse, LoginRequest, RegisterRequest, User } from '../models/user.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    let stored = localStorage.getItem('user');
    if (stored) this.currentUserSubject.next(JSON.parse(stored));
  }

  get currentUser(): User | null { return this.currentUserSubject.value; }
  get isAuthenticated(): boolean { return !!this.currentUserSubject.value && !!localStorage.getItem('token'); }
  get isStudent(): boolean { return this.currentUser?.role === 'ROLE_STUDENT'; }
  get isTeacher(): boolean { return this.currentUser?.role === 'ROLE_TEACHER'; }
  get isAdmin(): boolean { return this.currentUser?.role === 'ROLE_ADMIN'; }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', request).pipe(
      tap(resp => {
        localStorage.setItem('token', resp.accessToken);
        localStorage.setItem('refreshToken', resp.refreshToken);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.currentUserSubject.next(resp.user);
      })
    );
  }

  register(request: RegisterRequest): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>('/api/auth/register', request);
  }

  verifyEmail(token: string): Observable<ApiResponse<string>> {
    return this.http.get<ApiResponse<string>>(`/api/auth/verify-email?token=${token}`);
  }

  forgotPassword(email: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>('/api/auth/forgot-password', { email });
  }

  resetPassword(token: string, password: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>('/api/auth/reset-password', { token, password });
  }

  logout(): void {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null { return localStorage.getItem('token'); }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-vh-100 d-flex" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);">
      <!-- Left: Illustration -->
      <div class="d-none d-lg-flex col-lg-6 flex-column align-items-center justify-content-center p-5">
        <div class="text-center">
          <div style="font-size:6rem; margin-bottom:20px">🎓</div>
          <h1 style="font-size:2.5rem; font-weight:800; background: linear-gradient(135deg, #6366f1, #06b6d4); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
            ELearning Platform
          </h1>
          <p class="text-secondary mt-3 fs-5">Apprenez. Codez. Progressez.</p>
          <div class="d-flex gap-3 mt-4 justify-content-center">
            <div class="text-center">
              <div class="text-white fw-bold fs-4">8+</div>
              <div class="text-secondary small">Cours disponibles</div>
            </div>
            <div class="text-secondary">|</div>
            <div class="text-center">
              <div class="text-white fw-bold fs-4">IDE</div>
              <div class="text-secondary small">Intégré</div>
            </div>
            <div class="text-secondary">|</div>
            <div class="text-center">
              <div class="text-white fw-bold fs-4">IA</div>
              <div class="text-secondary small">Assistant</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Login Form -->
      <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4">
        <div class="card border-0 shadow-lg p-4 w-100" style="max-width:420px; border-radius:20px;">
          <div class="text-center mb-4">
            <div style="font-size:2.5rem">🔐</div>
            <h2 class="fw-bold mt-2">Connexion</h2>
            <p class="text-muted small">Bienvenue ! Connectez-vous à votre compte</p>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                <input type="email" class="form-control" formControlName="email" placeholder="votre@email.com"
                  [class.is-invalid]="form.get('email')?.invalid && form.get('email')?.touched">
              </div>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Mot de passe</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-lock"></i></span>
                <input [type]="showPassword ? 'text' : 'password'" class="form-control" 
                  formControlName="password" placeholder="Votre mot de passe">
                <button type="button" class="input-group-text" (click)="showPassword=!showPassword">
                  <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>
                </button>
              </div>
              <div class="text-end mt-1">
                <a routerLink="/auth/forgot-password" class="small text-primary">Mot de passe oublié ?</a>
              </div>
            </div>

            <div class="alert alert-danger d-flex align-items-center gap-2" *ngIf="error">
              <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
            </div>

            <button type="submit" class="btn w-100 fw-semibold py-2 mb-3" 
              [disabled]="loading || form.invalid"
              style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border-radius: 10px;">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              <i *ngIf="!loading" class="bi bi-box-arrow-in-right me-2"></i>
              {{ loading ? 'Connexion...' : 'Se connecter' }}
            </button>

            <p class="text-center text-muted small">
              Pas encore de compte ? 
              <a routerLink="/auth/register" class="text-primary fw-semibold">S'inscrire gratuitement</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  `
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = '';
    this.authService.login(this.form.value).subscribe({
      next: (resp) => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl || '/dashboard');
      },
      error: (err) => {
        this.error = err.error?.message || 'Email ou mot de passe incorrect';
        this.loading = false;
      }
    });
  }
}

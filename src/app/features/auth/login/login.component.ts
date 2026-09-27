import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { safeReturnUrl } from '../../../core/guards/auth.guard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-page">
      <div class="login-hero" role="img"
           aria-label="ITECOM, votre plateforme d'apprentissage en ligne : cours en ligne, examens et évaluations, suivi des résultats"></div>
      <div class="login-shade"></div>

      <main class="login-panel">
        <div class="login-card">
          <div class="brand">
            <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-name"><span class="ite">ITE</span><span class="com">COM</span></span>
          </div>

          <h1 class="login-title">Connexion</h1>
          <p class="login-subtitle">Accédez à votre espace de formation</p>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
            <div class="form-floating mb-3">
              <input id="loginEmail" type="email" class="form-control" formControlName="email"
                     placeholder="votre@email.com" autocomplete="username"
                     [class.is-invalid]="form.get('email')?.invalid && form.get('email')?.touched">
              <label for="loginEmail"><i class="bi bi-envelope me-2"></i>Adresse email</label>
              <div class="invalid-feedback">Saisissez une adresse email valide.</div>
            </div>

            <div class="form-floating mb-2 password-field">
              <input id="loginPassword" [type]="showPassword ? 'text' : 'password'" class="form-control"
                     formControlName="password" placeholder="Mot de passe" autocomplete="current-password"
                     [class.is-invalid]="form.get('password')?.invalid && form.get('password')?.touched">
              <label for="loginPassword"><i class="bi bi-lock me-2"></i>Mot de passe</label>
              <button type="button" class="toggle-password" (click)="showPassword = !showPassword"
                      [attr.aria-label]="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">
                <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>
              </button>
              <div class="invalid-feedback">Saisissez votre mot de passe.</div>
            </div>

            <div class="text-end mb-4">
              <a routerLink="/auth/forgot-password" class="forgot-link">Mot de passe oublié ?</a>
            </div>

            <div class="alert alert-danger d-flex align-items-center gap-2 py-2 small" *ngIf="error" role="alert">
              <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
            </div>

            <button type="submit" class="btn btn-login w-100" [disabled]="loading">
              <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
              <i *ngIf="!loading" class="bi bi-box-arrow-in-right me-2"></i>
              {{ loading ? 'Connexion…' : 'Se connecter' }}
            </button>
          </form>

          <div class="access-note">
            <i class="bi bi-info-circle"></i>
            <span>Pas encore de compte ? Les comptes étudiants et enseignants sont créés par
              l'administration, qui vous envoie vos identifiants par email.</span>
          </div>

          <div class="card-footer-line">
            <span><i class="bi bi-shield-lock me-1"></i>Connexion sécurisée</span>
            <span>© {{ year }} ITECOM</span>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .login-page {
      --navy: #0b2a6f;
      --blue: #1d6ff2;
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      overflow: hidden;
      background: #0b1d45;
      font-family: 'Inter', sans-serif;
    }
    .login-hero {
      position: absolute; inset: 0;
      background: url('/assets/images/itecom-accueil.jpg') left center / cover no-repeat;
      transform: scale(1.03);
      animation: heroIn 1.4s ease-out forwards;
    }
    /* Voile progressif : l'image reste nette à gauche, le formulaire reste lisible à droite */
    .login-shade {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(11, 29, 69, 0) 38%, rgba(11, 29, 69, .35) 62%, rgba(11, 29, 69, .6) 100%);
    }
    .login-panel {
      position: relative; z-index: 1;
      width: 100%; max-width: 470px;
      margin-right: clamp(24px, 6vw, 110px);
      padding: 24px 0;
    }
    .login-card {
      background: rgba(255, 255, 255, .86);
      backdrop-filter: blur(18px) saturate(160%);
      -webkit-backdrop-filter: blur(18px) saturate(160%);
      border: 1px solid rgba(255, 255, 255, .7);
      border-radius: 24px;
      padding: 40px 38px 28px;
      box-shadow: 0 30px 70px rgba(6, 20, 56, .45), 0 2px 6px rgba(6, 20, 56, .12);
      animation: cardIn .7s .15s cubic-bezier(.2, .8, .2, 1) both;
    }
    .brand { display: flex; align-items: center; gap: 10px; margin-bottom: 26px; }
    .brand-mark {
      width: 42px; height: 42px; border-radius: 12px;
      display: inline-flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--navy), var(--blue));
      color: #fff; font-size: 1.3rem;
      box-shadow: 0 8px 18px rgba(29, 111, 242, .35);
    }
    .brand-name { font-size: 1.55rem; font-weight: 800; letter-spacing: .02em; line-height: 1; }
    .brand-name .ite { color: var(--navy); }
    .brand-name .com { color: var(--blue); }
    .login-title { font-size: 1.75rem; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
    .login-subtitle { color: #64748b; margin-bottom: 26px; }

    .form-floating > .form-control {
      border-radius: 14px; border: 1.5px solid #dbe3f0; background: rgba(255, 255, 255, .95);
      height: 58px; transition: border-color .2s, box-shadow .2s;
    }
    .form-floating > .form-control:focus {
      border-color: var(--blue); box-shadow: 0 0 0 4px rgba(29, 111, 242, .15);
    }
    .form-floating > label { color: #64748b; }
    .password-field > .form-control { padding-right: 52px; }
    .toggle-password {
      position: absolute; top: 29px; right: 14px; transform: translateY(-50%); z-index: 5;
      border: 0; background: transparent; color: #64748b; font-size: 1.15rem; padding: 4px 6px;
    }
    .toggle-password:hover { color: var(--blue); }
    .forgot-link { font-size: .88rem; color: var(--blue); font-weight: 600; text-decoration: none; }
    .forgot-link:hover { text-decoration: underline; }

    .btn-login {
      height: 54px; border: 0; border-radius: 14px;
      font-weight: 700; font-size: 1.02rem; color: #fff;
      background: linear-gradient(135deg, var(--navy), var(--blue));
      box-shadow: 0 12px 26px rgba(29, 111, 242, .35);
      transition: transform .15s, box-shadow .2s, filter .2s;
    }
    .btn-login:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 16px 32px rgba(29, 111, 242, .45); color: #fff; }
    .btn-login:active:not(:disabled) { transform: translateY(0); }
    .btn-login:disabled { filter: saturate(.6); opacity: .85; color: #fff; }

    .access-note {
      display: flex; gap: 10px; margin-top: 22px; padding: 12px 14px;
      border-radius: 12px; background: #eef4ff; color: #334155; font-size: .84rem; line-height: 1.45;
    }
    .access-note i { color: var(--blue); margin-top: 1px; }
    .card-footer-line {
      display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px;
      margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0;
      color: #94a3b8; font-size: .78rem;
    }

    @keyframes heroIn { from { transform: scale(1.08); opacity: .6; } to { transform: scale(1.03); opacity: 1; } }
    @keyframes cardIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }

    /* Tablette et mobile : l'image devient un bandeau, le formulaire le chevauche */
    @media (max-width: 991.98px) {
      .login-page { display: block; background: #eef2f9; }
      .login-hero {
        position: relative; height: 46vh; min-height: 260px;
        background-position: left top; transform: none; animation: none;
      }
      .login-shade {
        top: 0; bottom: auto; height: 46vh; min-height: 260px;
        background: linear-gradient(180deg, rgba(11, 29, 69, 0) 55%, rgba(238, 242, 249, 1) 100%);
      }
      .login-panel { margin: -70px auto 0; padding: 0 16px 32px; max-width: 480px; }
      .login-card { padding: 30px 22px 22px; background: rgba(255, 255, 255, .95); }
    }
    @media (prefers-reduced-motion: reduce) {
      .login-hero, .login-card { animation: none; }
    }
  `]
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error = '';
  showPassword = false;
  readonly year = new Date().getFullYear();

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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = '';
    this.authService.login(this.form.value).subscribe({
      next: (resp) => {
        const returnUrl = safeReturnUrl(this.route.snapshot.queryParamMap.get('returnUrl'));
        // Si la page demandée est refusée (rôle différent), on retombe sur le tableau de bord
        this.router.navigateByUrl(returnUrl).then(ok => { if (!ok) this.router.navigateByUrl('/dashboard'); });
      },
      error: (err) => {
        this.error = err.error?.message || 'Email ou mot de passe incorrect';
        this.loading = false;
      }
    });
  }
}

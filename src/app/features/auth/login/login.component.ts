import { Component, OnDestroy, OnInit } from '@angular/core';
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
    <div class="landing">
      <!-- Barre du haut -->
      <header class="topbar">
        <div class="container-xl d-flex align-items-center justify-content-between">
          <a class="brand" href="/" aria-label="ITECOM, accueil">
            <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-name"><span class="ite">ITE</span><span class="com">COM</span></span>
          </a>
          <nav class="topnav d-none d-md-flex" aria-label="Navigation principale">
            <a href="#matieres">Matières</a>
            <a href="#plateforme">La plateforme</a>
            <a href="#connexion" class="btn btn-sm btn-light fw-semibold px-3">Se connecter</a>
          </nav>
        </div>
      </header>

      <!-- Bannière -->
      <section class="hero">
        <div class="hero-backdrop" aria-hidden="true">
          <img *ngFor="let s of slides; let i = index" [src]="s.image" alt="" [class.active]="i === current">
        </div>

        <div class="container-xl hero-inner">
          <div class="hero-copy">
            <span class="eyebrow"><i class="bi bi-stars me-1"></i>Plateforme d'apprentissage en ligne</span>
            <h1>Apprenez, pratiquez <span class="accent">et réussissez</span> avec ITECOM.</h1>
            <p class="lead-text">
              Cours en ligne, cas pratiques et examens corrigés automatiquement, avec le suivi de vos résultats
              et l'accompagnement de vos enseignants.
            </p>

            <!-- Formulaire de connexion compact -->
            <div id="connexion" class="login-card">
              <div class="login-head">
                <h2>Connexion</h2>
                <span><i class="bi bi-shield-lock me-1"></i>Espace sécurisé</span>
              </div>
              <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
                <div class="row g-2">
                  <div class="col-12">
                    <label class="visually-hidden" for="loginEmail">Adresse email</label>
                    <div class="field" [class.invalid]="form.get('email')?.invalid && form.get('email')?.touched">
                      <i class="bi bi-envelope"></i>
                      <input id="loginEmail" type="email" formControlName="email" placeholder="Adresse email" autocomplete="username">
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="visually-hidden" for="loginPassword">Mot de passe</label>
                    <div class="field" [class.invalid]="form.get('password')?.invalid && form.get('password')?.touched">
                      <i class="bi bi-lock"></i>
                      <input id="loginPassword" [type]="showPassword ? 'text' : 'password'" formControlName="password"
                             placeholder="Mot de passe" autocomplete="current-password">
                      <button type="button" class="eye" (click)="showPassword = !showPassword"
                              [attr.aria-label]="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">
                        <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 small mt-2 mb-0" *ngIf="error" role="alert">
                  <i class="bi bi-exclamation-triangle-fill"></i> {{ error }}
                </div>

                <button type="submit" class="btn btn-login w-100 mt-3" [disabled]="loading">
                  <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                  {{ loading ? 'Connexion…' : 'Se connecter' }}
                  <i *ngIf="!loading" class="bi bi-arrow-right ms-2"></i>
                </button>
                <div class="login-foot">
                  <a routerLink="/auth/forgot-password">Mot de passe oublié ?</a>
                  <span>Comptes créés par l'administration</span>
                </div>
              </form>
            </div>
          </div>

          <!-- Diaporama des matières -->
          <div class="hero-visual" id="matieres">
            <div class="showcase" (mouseenter)="paused = true" (mouseleave)="paused = false">
              <div class="progress-row" aria-hidden="true">
                <span *ngFor="let s of slides; let i = index" class="bar"
                      [class.done]="i < current" [class.running]="i === current && !paused && !reducedMotion"
                      [class.full]="i === current && (paused || reducedMotion)"></span>
              </div>
              <img *ngFor="let s of slides; let i = index" [src]="s.image" [alt]="'Cours de ' + s.name + ' à ITECOM'"
                   class="slide" [class.active]="i === current" [attr.aria-hidden]="i !== current">
            </div>

            <div class="subject-list" role="tablist" aria-label="Matières enseignées">
              <button *ngFor="let s of slides; let i = index" type="button" role="tab" class="subject"
                      [attr.aria-selected]="i === current" [class.active]="i === current"
                      [style.--c]="s.color" (click)="select(i)">
                <i class="bi" [ngClass]="s.icon"></i><span>{{ s.name }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Fonctionnalités -->
      <section class="features" id="plateforme">
        <div class="container-xl">
          <div class="row g-3 g-lg-4">
            <div class="col-6 col-lg-3" *ngFor="let f of features">
              <div class="feature">
                <span class="feature-icon"><i class="bi" [ngClass]="f.icon"></i></span>
                <h3>{{ f.title }}</h3>
                <p>{{ f.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container-xl d-flex flex-wrap justify-content-between gap-2">
          <span>© {{ year }} ITECOM — Plateforme d'apprentissage en ligne</span>
          <span><i class="bi bi-shield-lock me-1"></i>Connexion sécurisée</span>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .landing {
      --navy: #0b2a6f; --navy-deep: #06163d; --blue: #1d6ff2;
      font-family: 'Inter', sans-serif; background: #f5f7fb; color: #0f172a; min-height: 100vh;
    }

    /* Barre du haut */
    .topbar { position: absolute; top: 0; left: 0; right: 0; z-index: 3; padding: 18px 0; }
    .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
    .brand-mark {
      width: 38px; height: 38px; border-radius: 11px; display: inline-flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #3b82f6, var(--blue)); color: #fff; font-size: 1.15rem;
      box-shadow: 0 6px 16px rgba(29, 111, 242, .45);
    }
    .brand-name { font-size: 1.4rem; font-weight: 800; letter-spacing: .02em; }
    .brand-name .ite { color: #fff; }
    .brand-name .com { color: #60a5fa; }
    .topnav { gap: 26px; align-items: center; }
    .topnav a { color: rgba(255, 255, 255, .82); text-decoration: none; font-weight: 500; font-size: .92rem; }
    .topnav a:hover { color: #fff; }
    .topnav a.btn { color: var(--navy); border-radius: 10px; }

    /* Bannière */
    .hero {
      position: relative; overflow: hidden; color: #fff;
      background: radial-gradient(120% 90% at 85% 10%, #123a8c 0%, var(--navy) 45%, var(--navy-deep) 100%);
      padding: 104px 0 72px; min-height: min(100vh, 860px); display: flex; align-items: center;
    }
    .hero-backdrop { position: absolute; inset: 0; }
    .hero-backdrop img {
      position: absolute; inset: -40px; width: calc(100% + 80px); height: calc(100% + 80px); object-fit: cover;
      filter: blur(38px) saturate(130%); opacity: 0; transition: opacity 1.2s ease;
    }
    .hero-backdrop img.active { opacity: .28; }
    .hero-backdrop::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(6, 22, 61, .92) 0%, rgba(6, 22, 61, .7) 45%, rgba(6, 22, 61, .35) 100%);
    }
    .hero-inner {
      position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
      gap: 56px; align-items: center; width: 100%;
    }
    .eyebrow {
      display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; font-size: .8rem; font-weight: 600;
      background: rgba(96, 165, 250, .16); color: #bfdbfe; border: 1px solid rgba(147, 197, 253, .3);
    }
    .hero h1 { font-size: clamp(2rem, 3.6vw, 3.15rem); font-weight: 800; line-height: 1.12; margin: 18px 0 14px; letter-spacing: -.01em; }
    .hero h1 .accent { background: linear-gradient(90deg, #60a5fa, #a5f3fc); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .lead-text { color: rgba(226, 232, 240, .86); font-size: 1.05rem; line-height: 1.6; max-width: 540px; margin-bottom: 28px; }

    /* Connexion compacte */
    .login-card {
      max-width: 400px; padding: 20px 22px 16px; border-radius: 18px; color: #0f172a;
      background: rgba(255, 255, 255, .97); box-shadow: 0 24px 50px rgba(2, 8, 30, .45);
      animation: rise .6s .1s cubic-bezier(.2, .8, .2, 1) both;
    }
    .login-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 12px; }
    .login-head h2 { font-size: 1.15rem; font-weight: 800; margin: 0; }
    .login-head span { font-size: .75rem; color: #64748b; }
    .field {
      display: flex; align-items: center; gap: 10px; height: 46px; padding: 0 12px; border-radius: 12px;
      border: 1.5px solid #dbe3f0; background: #fff; transition: border-color .2s, box-shadow .2s;
    }
    .field:focus-within { border-color: var(--blue); box-shadow: 0 0 0 4px rgba(29, 111, 242, .14); }
    .field.invalid { border-color: #dc3545; }
    .field > i { color: #94a3b8; }
    .field input { flex: 1; min-width: 0; border: 0; outline: none; background: transparent; font-size: .95rem; color: #0f172a; }
    .field .eye { border: 0; background: transparent; color: #64748b; padding: 4px; }
    .field .eye:hover { color: var(--blue); }
    .btn-login {
      height: 46px; border: 0; border-radius: 12px; font-weight: 700; color: #fff;
      background: linear-gradient(135deg, var(--navy), var(--blue)); box-shadow: 0 10px 22px rgba(29, 111, 242, .35);
      transition: transform .15s, box-shadow .2s;
    }
    .btn-login:hover:not(:disabled) { color: #fff; transform: translateY(-1px); box-shadow: 0 14px 28px rgba(29, 111, 242, .45); }
    .btn-login:disabled { color: #fff; opacity: .85; }
    .login-foot { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin-top: 10px; font-size: .78rem; }
    .login-foot a { color: var(--blue); font-weight: 600; text-decoration: none; }
    .login-foot a:hover { text-decoration: underline; }
    .login-foot span { color: #94a3b8; }

    /* Diaporama */
    .hero-visual { display: flex; flex-direction: column; align-items: center; gap: 18px; }
    .showcase {
      position: relative; width: min(340px, 100%); aspect-ratio: 318 / 620; border-radius: 26px; overflow: hidden;
      background: #0b1d45; box-shadow: 0 40px 80px rgba(2, 8, 30, .6), 0 0 0 1px rgba(255, 255, 255, .12);
      animation: rise .7s .2s cubic-bezier(.2, .8, .2, 1) both;
    }
    .slide {
      position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
      opacity: 0; transform: scale(1.04); transition: opacity .9s ease, transform 5s ease-out;
    }
    .slide.active { opacity: 1; transform: scale(1); }
    .progress-row { position: absolute; top: 10px; left: 12px; right: 12px; z-index: 2; display: flex; gap: 5px; }
    .bar { flex: 1; height: 3px; border-radius: 3px; background: rgba(255, 255, 255, .35); overflow: hidden; position: relative; }
    .bar::after { content: ''; position: absolute; inset: 0; width: 0; background: #fff; }
    .bar.done::after, .bar.full::after { width: 100%; }
    .bar.running::after { animation: fill 5s linear forwards; }
    .subject-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 520px; }
    .subject {
      display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; border-radius: 999px; font-size: .82rem; font-weight: 600;
      color: rgba(255, 255, 255, .8); background: rgba(255, 255, 255, .08); border: 1px solid rgba(255, 255, 255, .16);
      transition: background .25s, color .25s, border-color .25s;
    }
    .subject:hover { color: #fff; background: rgba(255, 255, 255, .14); }
    .subject.active { color: #fff; background: var(--c); border-color: var(--c); box-shadow: 0 8px 20px rgba(0, 0, 0, .25); }

    /* Fonctionnalités */
    .features { padding: 56px 0 40px; }
    .feature { height: 100%; background: #fff; border-radius: 16px; padding: 22px; box-shadow: 0 1px 3px rgba(15, 23, 42, .06); border: 1px solid #e8edf5; }
    .feature-icon {
      width: 44px; height: 44px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
      background: #e0ebff; color: var(--blue); font-size: 1.25rem; margin-bottom: 14px;
    }
    .feature h3 { font-size: 1rem; font-weight: 700; margin-bottom: 6px; }
    .feature p { color: #64748b; font-size: .88rem; margin: 0; line-height: 1.5; }
    .footer { border-top: 1px solid #e2e8f0; padding: 20px 0; color: #64748b; font-size: .82rem; }

    @keyframes fill { from { width: 0; } to { width: 100%; } }
    @keyframes rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }

    /* Tablette et mobile : texte et connexion d'abord, diaporama ensuite */
    @media (max-width: 991.98px) {
      .hero { padding: 88px 0 48px; min-height: 0; }
      .hero-inner { grid-template-columns: 1fr; gap: 36px; }
      .login-card { max-width: none; }
      .showcase { width: min(300px, 80vw); }
    }
    @media (max-width: 575.98px) {
      .features .col-6 { width: 100%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .slide, .hero-backdrop img { transition: none; }
      .login-card, .showcase { animation: none; }
    }
  `]
})
export class LoginComponent implements OnInit, OnDestroy {
  readonly slides = [
    { name: 'Comptabilité analytique', image: '/assets/images/matieres/comptabilite.jpg', icon: 'bi-calculator', color: '#1d6ff2' },
    { name: 'Droit', image: '/assets/images/matieres/droit.jpg', icon: 'bi-bank', color: '#4f46e5' },
    { name: 'Réseaux', image: '/assets/images/matieres/reseaux.jpg', icon: 'bi-diagram-3', color: '#0d9488' },
    { name: 'Programmation', image: '/assets/images/matieres/programmation.jpg', icon: 'bi-code-slash', color: '#ea580c' },
    { name: 'Mathématiques', image: '/assets/images/matieres/mathematiques.jpg', icon: 'bi-plus-slash-minus', color: '#e11d48' }
  ];
  readonly features = [
    { icon: 'bi-book', title: 'Cours en ligne', text: 'Leçons, supports et exercices accessibles à tout moment.' },
    { icon: 'bi-clipboard-check', title: 'Examens et évaluations', text: 'QCM, cas pratiques et devoirs corrigés ligne par ligne.' },
    { icon: 'bi-bar-chart-line', title: 'Suivi des résultats', text: 'Notes, corrections détaillées et progression en temps réel.' },
    { icon: 'bi-people', title: 'Interactivité', text: 'Classes virtuelles et échanges avec vos enseignants.' }
  ];
  current = 0;
  paused = false;
  readonly reducedMotion = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  private timer: ReturnType<typeof setInterval> | null = null;

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

  ngOnInit() {
    // Une matière toutes les 5 secondes, comme dans l'animation d'origine
    if (!this.reducedMotion) {
      this.timer = setInterval(() => {
        if (!this.paused) this.current = (this.current + 1) % this.slides.length;
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  select(index: number) {
    this.current = index;
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

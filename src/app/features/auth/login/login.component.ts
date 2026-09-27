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
      <!-- Image plein écran : les 5 matières en panorama, une mise en avant toutes les 5 secondes -->
      <div class="bg" aria-hidden="true">
        <div *ngFor="let s of slides; let i = index" class="panel" [class.active]="i === current">
          <img [src]="s.image" alt="">
        </div>
      </div>
      <div class="shade" aria-hidden="true"></div>

      <div class="content">
        <!-- Barre du haut -->
        <header class="topbar container-xl">
          <a class="brand" href="/" aria-label="ITECOM, accueil">
            <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-name"><span class="ite">ITE</span><span class="com">COM</span></span>
          </a>
          <div class="progress-row d-none d-md-flex" aria-hidden="true">
            <span *ngFor="let s of slides; let i = index" class="bar"
                  [class.done]="i < current" [class.running]="i === current && !paused && !reducedMotion"
                  [class.full]="i === current && (paused || reducedMotion)"></span>
          </div>
        </header>

        <main class="hero container-xl">
          <div class="hero-copy">
            <span class="eyebrow"><i class="bi bi-stars me-1"></i>Plateforme d'apprentissage en ligne</span>
            <h1>Apprenez, pratiquez <span class="accent">et réussissez</span> avec ITECOM.</h1>
            <p class="lead-text">
              Cours en ligne, cas pratiques et examens corrigés automatiquement, avec le suivi de vos résultats
              et l'accompagnement de vos enseignants.
            </p>
            <div class="subject-list" role="tablist" aria-label="Matières enseignées"
                 (mouseenter)="paused = true" (mouseleave)="paused = false">
              <button *ngFor="let s of slides; let i = index" type="button" role="tab" class="subject"
                      [attr.aria-selected]="i === current" [class.active]="i === current"
                      [style.--c]="s.color" (click)="select(i)">
                <i class="bi" [ngClass]="s.icon"></i><span>{{ s.name }}</span>
              </button>
            </div>
          </div>

          <!-- Formulaire de connexion flottant -->
          <div id="connexion" class="login-card">
            <div class="login-head">
              <h2>Connexion</h2>
              <span><i class="bi bi-shield-lock me-1"></i>Espace sécurisé</span>
            </div>
            <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>
              <label class="visually-hidden" for="loginEmail">Adresse email</label>
              <div class="field" [class.invalid]="form.get('email')?.invalid && form.get('email')?.touched">
                <i class="bi bi-envelope"></i>
                <input id="loginEmail" type="email" formControlName="email" placeholder="Adresse email" autocomplete="username">
              </div>
              <label class="visually-hidden" for="loginPassword">Mot de passe</label>
              <div class="field mt-2" [class.invalid]="form.get('password')?.invalid && form.get('password')?.touched">
                <i class="bi bi-lock"></i>
                <input id="loginPassword" [type]="showPassword ? 'text' : 'password'" formControlName="password"
                       placeholder="Mot de passe" autocomplete="current-password">
                <button type="button" class="eye" (click)="showPassword = !showPassword"
                        [attr.aria-label]="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">
                  <i class="bi" [class.bi-eye]="!showPassword" [class.bi-eye-slash]="showPassword"></i>
                </button>
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
        </main>

        <!-- Les quatre atouts, posés sur la bannière -->
        <section class="features container-xl" aria-label="La plateforme">
          <div class="feature" *ngFor="let f of features">
            <span class="feature-icon"><i class="bi" [ngClass]="f.icon"></i></span>
            <div>
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
            </div>
          </div>
        </section>

        <footer class="footer container-xl">
          <span>© {{ year }} ITECOM — Plateforme d'apprentissage en ligne</span>
          <span><i class="bi bi-shield-lock me-1"></i>Connexion sécurisée</span>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .landing {
      --navy: #0b2a6f; --blue: #1d6ff2;
      position: relative; min-height: 100vh; overflow: hidden; color: #fff;
      background: #06163d; font-family: 'Inter', sans-serif;
    }

    /* Image plein écran */
    .bg { position: absolute; inset: 0; display: flex; }
    .panel { position: relative; flex: 1 1 0; overflow: hidden; transition: flex-grow .9s cubic-bezier(.2, .8, .2, 1); }
    .panel + .panel { border-left: 1px solid rgba(255, 255, 255, .1); }
    .panel.active { flex-grow: 1.45; }
    .panel img {
      width: 100%; height: 100%; object-fit: cover; object-position: center 28%;
      filter: brightness(.5) saturate(.8); transform: scale(1.02);
      transition: filter .9s ease, transform 5s ease-out;
    }
    .panel.active img { filter: brightness(1) saturate(1.05); transform: scale(1.06); }
    /* Voile : texte lisible à gauche et en bas, image visible au centre */
    .shade {
      position: absolute; inset: 0;
      background:
        linear-gradient(90deg, rgba(6, 22, 61, .88) 0%, rgba(6, 22, 61, .55) 34%, rgba(6, 22, 61, .05) 58%, rgba(6, 22, 61, .35) 100%),
        linear-gradient(180deg, rgba(6, 22, 61, .6) 0%, rgba(6, 22, 61, 0) 18%, rgba(6, 22, 61, 0) 55%, rgba(6, 22, 61, .9) 100%);
    }

    .content { position: relative; z-index: 1; min-height: 100vh; display: flex; flex-direction: column; }

    /* Barre du haut */
    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-top: 20px; padding-bottom: 12px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
    .brand-mark {
      width: 40px; height: 40px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #3b82f6, var(--blue)); color: #fff; font-size: 1.2rem;
      box-shadow: 0 6px 16px rgba(29, 111, 242, .45);
    }
    .brand-name { font-size: 1.5rem; font-weight: 800; letter-spacing: .02em; }
    .brand-name .ite { color: #fff; }
    .brand-name .com { color: #60a5fa; }
    .progress-row { gap: 6px; width: 260px; }
    .bar { flex: 1; height: 3px; border-radius: 3px; background: rgba(255, 255, 255, .3); overflow: hidden; position: relative; }
    .bar::after { content: ''; position: absolute; inset: 0; width: 0; background: #fff; }
    .bar.done::after, .bar.full::after { width: 100%; }
    .bar.running::after { animation: fill 5s linear forwards; }

    /* Bannière */
    .hero {
      flex: 1; display: grid; grid-template-columns: minmax(0, 1fr) 380px; gap: 48px; align-items: center;
      padding-top: 24px; padding-bottom: 24px;
    }
    .eyebrow {
      display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; font-size: .8rem; font-weight: 600;
      background: rgba(96, 165, 250, .18); color: #dbeafe; border: 1px solid rgba(147, 197, 253, .35);
      backdrop-filter: blur(6px);
    }
    .hero h1 {
      font-size: clamp(2rem, 3.8vw, 3.3rem); font-weight: 800; line-height: 1.1; margin: 18px 0 14px;
      letter-spacing: -.01em; max-width: 640px; text-shadow: 0 2px 18px rgba(0, 0, 0, .35);
    }
    .hero h1 .accent { background: linear-gradient(90deg, #60a5fa, #a5f3fc); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .lead-text { color: rgba(241, 245, 249, .9); font-size: 1.05rem; line-height: 1.6; max-width: 520px; margin-bottom: 22px; text-shadow: 0 1px 10px rgba(0, 0, 0, .3); }
    .subject-list { display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px; }
    .subject {
      display: inline-flex; align-items: center; gap: 7px; padding: 7px 13px; border-radius: 999px; font-size: .82rem; font-weight: 600;
      color: #fff; background: rgba(15, 23, 42, .35); border: 1px solid rgba(255, 255, 255, .25);
      backdrop-filter: blur(8px); transition: background .25s, border-color .25s, transform .15s;
    }
    .subject:hover { background: rgba(255, 255, 255, .18); transform: translateY(-1px); }
    .subject.active { background: var(--c); border-color: var(--c); box-shadow: 0 8px 20px rgba(0, 0, 0, .3); }

    /* Connexion flottante (verre dépoli) */
    .login-card {
      padding: 22px 22px 16px; border-radius: 20px; color: #0f172a;
      background: rgba(255, 255, 255, .88); backdrop-filter: blur(18px) saturate(160%); -webkit-backdrop-filter: blur(18px) saturate(160%);
      border: 1px solid rgba(255, 255, 255, .7); box-shadow: 0 30px 60px rgba(2, 8, 30, .45);
      animation: rise .6s .1s cubic-bezier(.2, .8, .2, 1) both;
    }
    .login-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px; }
    .login-head h2 { font-size: 1.2rem; font-weight: 800; margin: 0; }
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
    .login-foot span { color: #64748b; }

    /* Les quatre atouts sur la bannière */
    .features { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; padding-bottom: 14px; }
    .feature {
      display: flex; gap: 12px; align-items: flex-start; padding: 16px; border-radius: 16px;
      background: rgba(255, 255, 255, .12); border: 1px solid rgba(255, 255, 255, .22);
      backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
      animation: rise .6s .25s cubic-bezier(.2, .8, .2, 1) both;
    }
    .feature-icon {
      width: 40px; height: 40px; flex-shrink: 0; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
      background: rgba(255, 255, 255, .92); color: var(--blue); font-size: 1.15rem;
    }
    .feature h3 { font-size: .95rem; font-weight: 700; margin: 0 0 3px; }
    .feature p { color: rgba(226, 232, 240, .88); font-size: .8rem; margin: 0; line-height: 1.45; }
    .footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding-bottom: 16px; color: rgba(203, 213, 225, .75); font-size: .78rem; }

    @keyframes fill { from { width: 0; } to { width: 100%; } }
    @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }

    @media (max-width: 1199.98px) {
      .features { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    /* Tablette et mobile : tout s'empile sur l'image */
    @media (max-width: 991.98px) {
      .hero { grid-template-columns: 1fr; gap: 28px; }
      .shade { background: linear-gradient(180deg, rgba(6, 22, 61, .55) 0%, rgba(6, 22, 61, .72) 45%, rgba(6, 22, 61, .92) 100%); }
      /* Écran étroit : une seule matière à la fois, en plein écran */
      .panel { display: none; }
      .panel.active { display: block; flex-grow: 1; }
      .panel.active img { object-position: center 18%; transform: none; }
    }
    @media (max-width: 575.98px) {
      .features { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .panel, .panel img { transition: none; transform: none; }
      .login-card, .feature { animation: none; }
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

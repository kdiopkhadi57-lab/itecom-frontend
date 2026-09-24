import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-vh-100 d-flex align-items-center justify-content-center p-4"
         style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);">
      <div class="card border-0 shadow-lg p-4 w-100" style="max-width:520px; border-radius:20px;">

        <!-- En-tête avec étapes -->
        <div class="text-center mb-4" *ngIf="!success">
          <div style="font-size:2.2rem">{{ step === 1 ? '✨' : '💳' }}</div>
          <h2 class="fw-bold mt-2">{{ step === 1 ? 'Créer un compte' : 'Paiement inscription' }}</h2>
          <!-- Indicateur d'étapes -->
          <div class="d-flex align-items-center justify-content-center gap-2 mt-2">
            <div class="d-flex align-items-center gap-1">
              <div [style.background]="step >= 1 ? '#6366f1' : '#e5e7eb'"
                   style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:bold">1</div>
              <span class="small" [style.color]="step >= 1 ? '#6366f1' : '#9ca3af'" style="font-weight:600">Informations</span>
            </div>
            <div style="width:40px;height:2px;background:#e5e7eb"></div>
            <div class="d-flex align-items-center gap-1">
              <div [style.background]="step >= 2 ? '#6366f1' : '#e5e7eb'"
                   style="width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:bold">2</div>
              <span class="small" [style.color]="step >= 2 ? '#6366f1' : '#9ca3af'" style="font-weight:600">Paiement</span>
            </div>
          </div>
        </div>

        <!-- ÉTAPE 1 : Informations personnelles -->
        <ng-container *ngIf="!success && step === 1">
          <form [formGroup]="infoForm" (ngSubmit)="goToPayment()">
            <div class="row g-3 mb-3">
              <div class="col-6">
                <label class="form-label fw-semibold">Prénom</label>
                <input type="text" class="form-control" formControlName="firstName" placeholder="Jean"
                  [class.is-invalid]="infoForm.get('firstName')?.invalid && infoForm.get('firstName')?.touched">
              </div>
              <div class="col-6">
                <label class="form-label fw-semibold">Nom</label>
                <input type="text" class="form-control" formControlName="lastName" placeholder="Dupont"
                  [class.is-invalid]="infoForm.get('lastName')?.invalid && infoForm.get('lastName')?.touched">
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input type="email" class="form-control" formControlName="email" placeholder="votre@email.com"
                [class.is-invalid]="infoForm.get('email')?.invalid && infoForm.get('email')?.touched">
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Je suis...</label>
              <div class="d-flex gap-3">
                <div class="p-3 border rounded-3 text-center"
                     [class.border-primary]="infoForm.get('role')?.value === 'ROLE_STUDENT'"
                     [style.background]="infoForm.get('role')?.value === 'ROLE_STUDENT' ? '#ede9fe' : '#fff'"
                     (click)="infoForm.get('role')?.setValue('ROLE_STUDENT')"
                     style="cursor:pointer;flex:1;transition:all 0.2s">
                  <div style="font-size:1.5rem">👨‍🎓</div>
                  <div class="fw-semibold small" [style.color]="infoForm.get('role')?.value === 'ROLE_STUDENT' ? '#6366f1' : '#374151'">Étudiant</div>
                </div>
                <div class="p-3 border rounded-3 text-center"
                     [class.border-success]="infoForm.get('role')?.value === 'ROLE_TEACHER'"
                     [style.background]="infoForm.get('role')?.value === 'ROLE_TEACHER' ? '#d1fae5' : '#fff'"
                     (click)="infoForm.get('role')?.setValue('ROLE_TEACHER')"
                     style="cursor:pointer;flex:1;transition:all 0.2s">
                  <div style="font-size:1.5rem">👨‍🏫</div>
                  <div class="fw-semibold small" [style.color]="infoForm.get('role')?.value === 'ROLE_TEACHER' ? '#059669' : '#374151'">Professeur</div>
                </div>
              </div>
            </div>

            <div class="mb-3" *ngIf="infoForm.get('role')?.value === 'ROLE_STUDENT'">
              <label class="form-label fw-semibold">Filière</label>
              <select class="form-select" formControlName="specialization">
                <option value="genie-logiciel">Génie logiciel</option>
                <option value="reseau">Réseau</option>
                <option value="comptabilite">Comptabilité</option>
                <option value="sante">Santé</option>
                <option value="marketing-digital">Marketing Digital</option>
                <option value="developpement-personnel">Développement Personnel</option>
              </select>
            </div>

            <div class="mb-3">
              <label class="form-label fw-semibold">Mot de passe</label>
              <div class="input-group">
                <input [type]="showPwd ? 'text' : 'password'" class="form-control"
                  formControlName="password" placeholder="Minimum 8 caractères"
                  [class.is-invalid]="infoForm.get('password')?.invalid && infoForm.get('password')?.touched">
                <button type="button" class="input-group-text" (click)="showPwd=!showPwd">
                  <i class="bi" [class.bi-eye]="!showPwd" [class.bi-eye-slash]="showPwd"></i>
                </button>
              </div>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">Confirmer le mot de passe</label>
              <input type="password" class="form-control" formControlName="confirmPassword"
                [class.is-invalid]="infoForm.errors?.['passwordMismatch'] && infoForm.get('confirmPassword')?.touched">
              <div class="invalid-feedback">Les mots de passe ne correspondent pas</div>
            </div>

            <button type="submit" class="btn w-100 fw-semibold py-2 mb-3"
              [disabled]="infoForm.invalid"
              style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border-radius: 10px;">
              Continuer vers le paiement →
            </button>

            <p class="text-center text-muted small">
              Déjà inscrit ? <a routerLink="/auth/login" class="text-primary fw-semibold">Se connecter</a>
            </p>
          </form>
        </ng-container>

        <!-- ÉTAPE 2 : Paiement -->
        <ng-container *ngIf="!success && step === 2">
          <form [formGroup]="payForm" (ngSubmit)="onSubmit()">

            <!-- Sélection méthode -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Méthode de paiement</label>
              <div class="d-flex gap-3">
                <div class="p-3 border rounded-3 text-center"
                     [style.background]="payForm.get('paymentMethod')?.value === 'WAVE' ? '#eff6ff' : '#fff'"
                     [style.border-color]="payForm.get('paymentMethod')?.value === 'WAVE' ? '#3b82f6' : '#e5e7eb'"
                     (click)="selectMethod('WAVE')"
                     style="cursor:pointer;flex:1;transition:all 0.2s;border:2px solid">
                  <div style="font-size:2rem">🌊</div>
                  <div class="fw-bold" [style.color]="payForm.get('paymentMethod')?.value === 'WAVE' ? '#3b82f6' : '#374151'">Wave</div>
                </div>
                <div class="p-3 border rounded-3 text-center"
                     [style.background]="payForm.get('paymentMethod')?.value === 'ORANGE_MONEY' ? '#fff7ed' : '#fff'"
                     [style.border-color]="payForm.get('paymentMethod')?.value === 'ORANGE_MONEY' ? '#f97316' : '#e5e7eb'"
                     (click)="selectMethod('ORANGE_MONEY')"
                     style="cursor:pointer;flex:1;transition:all 0.2s;border:2px solid">
                  <div style="font-size:2rem">🟠</div>
                  <div class="fw-bold" [style.color]="payForm.get('paymentMethod')?.value === 'ORANGE_MONEY' ? '#f97316' : '#374151'">Orange Money</div>
                </div>
              </div>
            </div>

            <!-- Instructions USSD -->
            <div class="alert mb-3" *ngIf="payForm.get('paymentMethod')?.value"
                 [style.background]="payForm.get('paymentMethod')?.value === 'WAVE' ? '#eff6ff' : '#fff7ed'"
                 [style.border-color]="payForm.get('paymentMethod')?.value === 'WAVE' ? '#3b82f6' : '#f97316'"
                 style="border:1px solid;border-radius:12px">
              <div class="fw-semibold mb-1" *ngIf="payForm.get('paymentMethod')?.value === 'WAVE'" style="color:#1d4ed8">
                Instructions Wave
              </div>
              <div class="fw-semibold mb-1" *ngIf="payForm.get('paymentMethod')?.value === 'ORANGE_MONEY'" style="color:#c2410c">
                Instructions Orange Money
              </div>
              <div *ngIf="payForm.get('paymentMethod')?.value === 'WAVE'" class="small">
                1. Ouvrez l'app <strong>Wave</strong> ou composez <strong>#33# → Envoyer de l'argent</strong><br>
                2. Envoyez <strong>5 000 FCFA</strong> au numéro : <strong>77 XXX XX XX</strong><br>
                3. Notez la référence de transaction et renseignez-la ci-dessous
              </div>
              <div *ngIf="payForm.get('paymentMethod')?.value === 'ORANGE_MONEY'" class="small">
                1. Composez <strong>#144#</strong> → <strong>Transfert d'argent</strong><br>
                2. Envoyez <strong>5 000 FCFA</strong> au numéro : <strong>77 XXX XX XX</strong><br>
                3. Notez la référence de transaction et renseignez-la ci-dessous
              </div>
            </div>

            <!-- Téléphone -->
            <div class="mb-3">
              <label class="form-label fw-semibold">Numéro de téléphone utilisé pour le paiement</label>
              <input type="tel" class="form-control" formControlName="paymentPhone" placeholder="7X XXX XX XX"
                [class.is-invalid]="payForm.get('paymentPhone')?.invalid && payForm.get('paymentPhone')?.touched">
            </div>

            <!-- Référence -->
            <div class="mb-4">
              <label class="form-label fw-semibold">Référence de transaction</label>
              <input type="text" class="form-control" formControlName="paymentReference" placeholder="Ex: TXN-ABC12345"
                [class.is-invalid]="payForm.get('paymentReference')?.invalid && payForm.get('paymentReference')?.touched">
              <div class="form-text text-muted">Référence reçue par SMS après votre paiement</div>
            </div>

            <div class="alert alert-danger" *ngIf="error">{{ error }}</div>

            <div class="d-flex gap-2">
              <button type="button" class="btn btn-outline-secondary flex-grow-0 py-2 px-3" (click)="step = 1">
                ← Retour
              </button>
              <button type="submit" class="btn flex-grow-1 fw-semibold py-2"
                [disabled]="loading || payForm.invalid || !payForm.get('paymentMethod')?.value"
                style="background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; border-radius: 10px;">
                <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? 'Envoi en cours...' : 'Soumettre ma demande' }}
              </button>
            </div>
          </form>
        </ng-container>

        <!-- SUCCÈS -->
        <ng-container *ngIf="success">
          <div class="text-center py-4">
            <div style="font-size:4rem">🎉</div>
            <h4 class="mt-3 fw-bold">Demande soumise !</h4>
            <p class="text-muted">Votre demande d'inscription a bien été reçue.</p>

            <div class="text-start mt-3 mb-3" style="background:#f8f9ff;border-radius:12px;padding:16px">
              <div class="d-flex align-items-start gap-2 mb-2">
                <span style="color:#10b981;font-size:1.1rem">✅</span>
                <span>Informations personnelles enregistrées</span>
              </div>
              <div class="d-flex align-items-start gap-2 mb-2">
                <span style="color:#10b981;font-size:1.1rem">✅</span>
                <span>Paiement soumis</span>
              </div>
              <div class="d-flex align-items-start gap-2">
                <span style="color:#f59e0b;font-size:1.1rem">⏳</span>
                <span>En attente de validation par l'administrateur</span>
              </div>
            </div>

            <div class="alert" style="background:#fef3c7;border:1px solid #f59e0b;border-radius:12px">
              <strong style="color:#92400e">Vous recevrez un email</strong>
              <span style="color:#92400e"> dès que votre compte sera activé. Vous pourrez alors vous connecter et modifier votre mot de passe si vous le souhaitez.</span>
            </div>
          </div>
        </ng-container>

      </div>
    </div>
  `
})
export class RegisterComponent {
  step = 1;
  loading = false;
  error = '';
  success = false;
  showPwd = false;

  infoForm: FormGroup;
  payForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.infoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      role: ['ROLE_STUDENT', Validators.required],
      specialization: ['genie-logiciel']
    }, { validators: this.passwordMatchValidator });

    this.payForm = this.fb.group({
      paymentMethod: ['', Validators.required],
      paymentPhone: ['', Validators.required],
      paymentReference: ['', Validators.required]
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : { passwordMismatch: true };
  }

  selectMethod(method: string) {
    this.payForm.get('paymentMethod')?.setValue(method);
  }

  goToPayment() {
    if (this.infoForm.invalid) { this.infoForm.markAllAsTouched(); return; }
    this.step = 2;
  }

  onSubmit() {
    if (this.infoForm.invalid || this.payForm.invalid) return;
    this.loading = true;
    this.error = '';

    const { confirmPassword, ...infoData } = this.infoForm.value;
    const data = { ...infoData, ...this.payForm.value };

    this.authService.register(data).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          this.success = true;
        } else {
          this.error = resp.message || 'Erreur lors de l\'inscription';
          this.step = 1;
        }
        this.loading = false;
      },
      error: (err: any) => {
        this.error = err.error?.message || 'Erreur lors de l\'inscription';
        this.loading = false;
      }
    });
  }
}

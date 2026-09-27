import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EWJBTFX2.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/auth/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_ng_container_9_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function ForgotPasswordComponent_ng_container_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 17);
  }
}
function ForgotPasswordComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 9);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_ng_container_9_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 10)(3, "label", 11);
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ForgotPasswordComponent_ng_container_9_div_6_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275template(8, ForgotPasswordComponent_ng_container_9_span_8_Template, 1, 0, "span", 15);
    \u0275\u0275text(9, " Envoyer le lien ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function ForgotPasswordComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3, "\u{1F4E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5, "Si cet email existe, vous recevrez un lien de r\xE9initialisation.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.loading = false;
    this.sent = false;
    this.error = "";
    this.form = this.fb.group({ email: ["", [Validators.required, Validators.email]] });
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.authService.forgotPassword(this.form.value.email).subscribe({
      next: () => {
        this.sent = true;
        this.loading = false;
      },
      error: () => {
        this.error = "Erreur. R\xE9essayez plus tard.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(t) {
      return new (t || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "min-vh-100", "d-flex", "align-items-center", "justify-content-center", "p-4", 2, "background", "linear-gradient(135deg, #0f172a, #1e293b)"], [1, "card", "border-0", "shadow-lg", "p-4", "w-100", 2, "max-width", "420px", "border-radius", "20px"], [1, "text-center", "mb-4"], [2, "font-size", "2.5rem"], [1, "fw-bold", "mt-2"], [1, "text-muted", "small"], [4, "ngIf"], [1, "text-center", "mt-3", "small"], ["routerLink", "/auth/login", 1, "text-primary"], [3, "ngSubmit", "formGroup"], [1, "mb-4"], [1, "form-label", "fw-semibold"], ["type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "w-100", "py-2", 2, "background", "linear-gradient(135deg, #6366f1, #4f46e5)", "color", "white", "border-radius", "10px", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-3"], [2, "font-size", "3rem"], [1, "mt-3", "text-muted"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F511}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2", 4);
        \u0275\u0275text(6, "Mot de passe oubli\xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Entrez votre email pour recevoir un lien de r\xE9initialisation");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ForgotPasswordComponent_ng_container_9_Template, 10, 4, "ng-container", 6)(10, ForgotPasswordComponent_ng_container_10_Template, 6, 0, "ng-container", 6);
        \u0275\u0275elementStart(11, "p", 7)(12, "a", 8);
        \u0275\u0275text(13, "\u2190 Retour");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", !ctx.sent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.sent);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent" });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-QNMFK37R.js.map

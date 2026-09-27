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
  ActivatedRoute,
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
function LoginComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function LoginComponent_i_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 39);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router, route) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.error = "";
    this.showPassword = false;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    if (this.form.invalid)
      return;
    this.loading = true;
    this.error = "";
    this.authService.login(this.form.value).subscribe({
      next: (resp) => {
        const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        this.router.navigateByUrl(returnUrl || "/dashboard");
      },
      error: (err) => {
        this.error = err.error?.message || "Email ou mot de passe incorrect";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 67, vars: 13, consts: [[1, "min-vh-100", "d-flex", 2, "background", "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"], [1, "d-none", "d-lg-flex", "col-lg-6", "flex-column", "align-items-center", "justify-content-center", "p-5"], [1, "text-center"], [2, "font-size", "6rem", "margin-bottom", "20px"], [2, "font-size", "2.5rem", "font-weight", "800", "background", "linear-gradient(135deg, #6366f1, #06b6d4)", "-webkit-background-clip", "text", "-webkit-text-fill-color", "transparent"], [1, "text-secondary", "mt-3", "fs-5"], [1, "d-flex", "gap-3", "mt-4", "justify-content-center"], [1, "text-white", "fw-bold", "fs-4"], [1, "text-secondary", "small"], [1, "text-secondary"], [1, "col-12", "col-lg-6", "d-flex", "align-items-center", "justify-content-center", "p-4"], [1, "card", "border-0", "shadow-lg", "p-4", "w-100", 2, "max-width", "420px", "border-radius", "20px"], [1, "text-center", "mb-4"], [2, "font-size", "2.5rem"], [1, "fw-bold", "mt-2"], [1, "text-muted", "small"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "input-group"], [1, "input-group-text"], [1, "bi", "bi-envelope"], ["type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-control"], [1, "mb-4"], [1, "bi", "bi-lock"], ["formControlName", "password", "placeholder", "Votre mot de passe", 1, "form-control", 3, "type"], ["type", "button", 1, "input-group-text", 3, "click"], [1, "bi"], [1, "text-end", "mt-1"], ["routerLink", "/auth/forgot-password", 1, "small", "text-primary"], ["class", "alert alert-danger d-flex align-items-center gap-2", 4, "ngIf"], ["type", "submit", 1, "btn", "w-100", "fw-semibold", "py-2", "mb-3", 2, "background", "linear-gradient(135deg, #6366f1, #4f46e5)", "color", "white", "border-radius", "10px", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-box-arrow-in-right me-2", 4, "ngIf"], [1, "text-center", "text-muted", "small"], ["routerLink", "/auth/register", 1, "text-primary", "fw-semibold"], [1, "alert", "alert-danger", "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-box-arrow-in-right", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, " ELearning Platform ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Apprenez. Codez. Progressez.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 2)(11, "div", 7);
        \u0275\u0275text(12, "8+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275text(14, "Cours disponibles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9);
        \u0275\u0275text(16, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 2)(18, "div", 7);
        \u0275\u0275text(19, "IDE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8);
        \u0275\u0275text(21, "Int\xE9gr\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9);
        \u0275\u0275text(23, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 2)(25, "div", 7);
        \u0275\u0275text(26, "IA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8);
        \u0275\u0275text(28, "Assistant");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "div", 12)(32, "div", 13);
        \u0275\u0275text(33, "\u{1F510}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h2", 14);
        \u0275\u0275text(35, "Connexion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 15);
        \u0275\u0275text(37, "Bienvenue ! Connectez-vous \xE0 votre compte");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "form", 16);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_38_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(39, "div", 17)(40, "label", 18);
        \u0275\u0275text(41, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 19)(43, "span", 20);
        \u0275\u0275element(44, "i", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 23)(47, "label", 18);
        \u0275\u0275text(48, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 19)(50, "span", 20);
        \u0275\u0275element(51, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "input", 25);
        \u0275\u0275elementStart(53, "button", 26);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_53_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        \u0275\u0275element(54, "i", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 28)(56, "a", 29);
        \u0275\u0275text(57, "Mot de passe oubli\xE9 ?");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(58, LoginComponent_div_58_Template, 3, 1, "div", 30);
        \u0275\u0275elementStart(59, "button", 31);
        \u0275\u0275template(60, LoginComponent_span_60_Template, 1, 0, "span", 32)(61, LoginComponent_i_61_Template, 1, 0, "i", 33);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 34);
        \u0275\u0275text(64, " Pas encore de compte ? ");
        \u0275\u0275elementStart(65, "a", 35);
        \u0275\u0275text(66, "S'inscrire gratuitement");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(38);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("is-invalid", ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance(7);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bi-eye", !ctx.showPassword)("bi-eye-slash", ctx.showPassword);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Connexion..." : "Se connecter", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-DEUSX6IZ.js.map

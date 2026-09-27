import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgIf,
  Router,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/auth/verify-email/verify-email.component.ts
function VerifyEmailComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "h4");
    \u0275\u0275text(3, "V\xE9rification en cours...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function VerifyEmailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 5);
    \u0275\u0275text(4, "Email v\xE9rifi\xE9 !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6, "Veuillez maintenant proc\xE9der au paiement de l'inscription pour activer votre compte.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "strong", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 9);
    \u0275\u0275listener("click", function VerifyEmailComponent_ng_container_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPayment());
    });
    \u0275\u0275text(11, " \u{1F4B3} Payer maintenant ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Redirection dans ", ctx_r1.countdown, "s...");
  }
}
function VerifyEmailComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4, "Lien invalide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275text(8, "R\xE9essayer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  constructor(route, router, authService, http) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.http = http;
    this.loading = true;
    this.success = false;
    this.error = "";
    this.countdown = 4;
    this.userEmail = "";
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParams["token"];
    if (!token) {
      this.loading = false;
      this.error = "Token manquant";
      return;
    }
    this.authService.verifyEmail(token).subscribe({
      next: (resp) => {
        this.loading = false;
        this.success = resp.success;
        if (!resp.success) {
          this.error = resp.message;
        } else {
          this.userEmail = this.route.snapshot.queryParams["email"] || "";
          this.startCountdown();
        }
      },
      error: () => {
        this.loading = false;
        this.error = "Lien expir\xE9 ou invalide";
      }
    });
  }
  startCountdown() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(interval);
        this.goToPayment();
      }
    }, 1e3);
  }
  goToPayment() {
    this.router.navigate(["/auth/payment"], { queryParams: { email: this.userEmail } });
  }
  static {
    this.\u0275fac = function VerifyEmailComponent_Factory(t) {
      return new (t || _VerifyEmailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 3, consts: [[1, "min-vh-100", "d-flex", "align-items-center", "justify-content-center", 2, "background", "linear-gradient(135deg, #0f172a, #1e293b)"], [1, "card", "border-0", "shadow-lg", "p-5", "text-center", 2, "max-width", "440px", "border-radius", "20px"], [4, "ngIf"], [1, "spinner-border", "text-primary", "mb-3", 2, "width", "3rem", "height", "3rem"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold", "text-success"], [1, "text-muted"], [1, "alert", "mt-3", 2, "background", "#fef3c7", "border", "1px solid #f59e0b", "border-radius", "12px"], [2, "color", "#92400e"], [1, "btn", "btn-warning", "fw-bold", "mt-2", "w-100", 2, "border-radius", "10px", 3, "click"], [1, "mt-3", "fw-bold", "text-danger"], ["routerLink", "/auth/register", 1, "btn", "btn-outline-primary", "mt-3"]], template: function VerifyEmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, VerifyEmailComponent_ng_container_2_Template, 4, 0, "ng-container", 2)(3, VerifyEmailComponent_ng_container_3_Template, 12, 1, "ng-container", 2)(4, VerifyEmailComponent_ng_container_4_Template, 9, 1, "ng-container", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.success);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent" });
})();
export {
  VerifyEmailComponent
};
//# sourceMappingURL=chunk-UOOSMDIG.js.map

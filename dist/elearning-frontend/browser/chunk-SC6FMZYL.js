import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-EWJBTFX2.js";
import {
  ProgressService
} from "./chunk-JX72GFCA.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
  HttpClient,
  NgIf,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import {
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/profile/profile.component.ts
function ProfileComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSpecializationLabel(ctx_r0.user == null ? null : ctx_r0.user.specialization), " ");
  }
}
function ProfileComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user == null ? null : ctx_r0.user.bio);
  }
}
function ProfileComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "Aucune bio renseign\xE9e");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u2705 Profil mis \xE0 jour !");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 42);
  }
}
function ProfileComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u2705 Mot de passe mis \xE0 jour !");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pwdError);
  }
}
var ProfileComponent = class _ProfileComponent {
  get user() {
    return this.authService.currentUser;
  }
  constructor(fb, authService, progressService, http) {
    this.fb = fb;
    this.authService = authService;
    this.progressService = progressService;
    this.http = http;
    this.savingProfile = false;
    this.saveSuccess = false;
    this.changingPwd = false;
    this.pwdSuccess = false;
    this.pwdError = "";
    this.totalCourses = 0;
    this.totalCompleted = 0;
    this.profileForm = this.fb.group({
      firstName: [this.authService.currentUser?.firstName || "", Validators.required],
      lastName: [this.authService.currentUser?.lastName || "", Validators.required],
      email: [{ value: this.authService.currentUser?.email || "", disabled: true }],
      phone: [""],
      bio: [""]
    });
    this.passwordForm = this.fb.group({
      currentPassword: ["", Validators.required],
      newPassword: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.progressService.getMyProgress().subscribe((progress) => {
      this.totalCourses = progress.length;
      this.totalCompleted = progress.reduce((s, p) => s + p.completedLessons, 0);
    });
  }
  saveProfile() {
    if (this.profileForm.invalid)
      return;
    this.savingProfile = true;
    this.http.put("/api/users/profile", this.profileForm.value).subscribe({
      next: (updatedUser) => {
        let updated = __spreadValues(__spreadValues({}, this.user), this.profileForm.value);
        localStorage.setItem("user", JSON.stringify(updated));
        this.savingProfile = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 3e3);
      },
      error: () => {
        let updated = __spreadValues(__spreadValues({}, this.user), this.profileForm.value);
        localStorage.setItem("user", JSON.stringify(updated));
        this.savingProfile = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 3e3);
      }
    });
  }
  changePassword() {
    if (this.passwordForm.invalid)
      return;
    let { newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.pwdError = "Les mots de passe ne correspondent pas";
      return;
    }
    this.changingPwd = true;
    this.http.put("/api/users/change-password", this.passwordForm.value).subscribe({
      next: () => {
        this.pwdSuccess = true;
        this.changingPwd = false;
        this.passwordForm.reset();
        setTimeout(() => this.pwdSuccess = false, 3e3);
      },
      error: (err) => {
        this.pwdError = err.error?.message || "Erreur lors du changement";
        this.changingPwd = false;
      }
    });
  }
  getRoleLabel(role) {
    return { ROLE_STUDENT: "\u{1F468}\u200D\u{1F393} \xC9tudiant", ROLE_TEACHER: "\u{1F468}\u200D\u{1F3EB} Professeur", ROLE_ADMIN: "\u2699\uFE0F Admin" }[role || ""] || role;
  }
  getSpecializationLabel(key) {
    return {
      "genie-logiciel": "G\xE9nie Logiciel",
      "reseau": "R\xE9seau",
      "comptabilite": "Comptabilit\xE9",
      "sante": "Sant\xE9",
      "marketing-digital": "Marketing Digital",
      "developpement-personnel": "D\xE9veloppement Personnel"
    }[key || ""] || "";
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(t) {
      return new (t || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProgressService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 80, vars: 25, consts: [[1, "fade-in-up"], [1, "fw-bold", "mb-4"], [1, "row", "g-4"], [1, "col-lg-4"], [1, "card", "border-0", "shadow-sm", "text-center", "p-4", 2, "border-radius", "20px"], [1, "position-relative", "d-inline-block", "mx-auto", "mb-3"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "mx-auto", 2, "width", "100px", "height", "100px", "font-size", "2.5rem", "font-weight", "800", "background", "linear-gradient(135deg,#6366f1,#06b6d4)", "color", "white"], [1, "fw-bold"], [1, "text-muted", "small"], [1, "badge", "rounded-pill", "px-3", "py-2", "mb-2"], ["class", "mb-3", 4, "ngIf"], [1, "border-top", "pt-3", "mt-2"], ["class", "text-muted small mb-0", 4, "ngIf"], [1, "border-top", "pt-3", "mt-3", "row", "g-2", "text-center"], [1, "col-6"], [1, "fw-bold", "fs-4", "text-primary"], [1, "text-muted", 2, "font-size", ".75rem"], [1, "fw-bold", "fs-4", "text-success"], [1, "col-lg-8"], [1, "card", "border-0", "shadow-sm", "p-4", "mb-4", 2, "border-radius", "20px"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], [1, "mb-3"], ["type", "email", "formControlName", "email", "readonly", "", 1, "form-control", "bg-light"], ["type", "tel", "formControlName", "phone", "placeholder", "+221 77 000 00 00", 1, "form-control"], [1, "mb-4"], ["rows", "3", "formControlName", "bio", "placeholder", "Parlez-nous de vous...", 1, "form-control"], ["class", "alert alert-success py-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary-custom", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "p-4", 2, "border-radius", "20px"], ["type", "password", "formControlName", "currentPassword", 1, "form-control"], ["type", "password", "formControlName", "newPassword", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], ["class", "alert alert-danger py-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-danger", 3, "disabled"], [1, "badge", "rounded-pill", "px-3", "py-2", "bg-secondary", "text-white"], [1, "text-muted", "small", "mb-0"], [1, "alert", "alert-success", "py-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger", "py-2"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "\u{1F464} Mon Profil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "h4", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, ProfileComponent_div_15_Template, 3, 1, "div", 10);
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275template(17, ProfileComponent_p_17_Template, 2, 1, "p", 12)(18, ProfileComponent_p_18_Template, 2, 0, "p", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 16);
        \u0275\u0275text(24, "Cours inscrits");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 16);
        \u0275\u0275text(29, "Le\xE7ons compl\xE8tes");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(30, "div", 18)(31, "div", 19)(32, "h5", 1);
        \u0275\u0275text(33, "\u270F\uFE0F Modifier mes informations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "form", 20);
        \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_34_listener() {
          return ctx.saveProfile();
        });
        \u0275\u0275elementStart(35, "div", 21)(36, "div", 14)(37, "label", 22);
        \u0275\u0275text(38, "Pr\xE9nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 14)(41, "label", 22);
        \u0275\u0275text(42, "Nom");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 25)(45, "label", 22);
        \u0275\u0275text(46, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 25)(49, "label", 22);
        \u0275\u0275text(50, "T\xE9l\xE9phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 28)(53, "label", 22);
        \u0275\u0275text(54, "Bio");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "textarea", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, ProfileComponent_div_56_Template, 2, 0, "div", 30);
        \u0275\u0275elementStart(57, "button", 31);
        \u0275\u0275template(58, ProfileComponent_span_58_Template, 1, 0, "span", 32);
        \u0275\u0275text(59, " Sauvegarder ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 33)(61, "h5", 1);
        \u0275\u0275text(62, "\u{1F510} Changer le mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "form", 20);
        \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_63_listener() {
          return ctx.changePassword();
        });
        \u0275\u0275elementStart(64, "div", 25)(65, "label", 22);
        \u0275\u0275text(66, "Mot de passe actuel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(67, "input", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 25)(69, "label", 22);
        \u0275\u0275text(70, "Nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 28)(73, "label", 22);
        \u0275\u0275text(74, "Confirmer le nouveau mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "input", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275template(76, ProfileComponent_div_76_Template, 2, 0, "div", 30)(77, ProfileComponent_div_77_Template, 2, 1, "div", 37);
        \u0275\u0275elementStart(78, "button", 38);
        \u0275\u0275text(79, " Changer le mot de passe ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate2(" ", ctx.user == null ? null : ctx.user.firstName == null ? null : ctx.user.firstName.charAt(0), "", ctx.user == null ? null : ctx.user.lastName == null ? null : ctx.user.lastName.charAt(0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.user == null ? null : ctx.user.email);
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-primary", (ctx.user == null ? null : ctx.user.role) === "ROLE_STUDENT")("bg-success", (ctx.user == null ? null : ctx.user.role) === "ROLE_TEACHER")("bg-danger", (ctx.user == null ? null : ctx.user.role) === "ROLE_ADMIN");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.getRoleLabel(ctx.user == null ? null : ctx.user.role), " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.user == null ? null : ctx.user.specialization);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.user == null ? null : ctx.user.bio);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.user == null ? null : ctx.user.bio));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.totalCourses);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalCompleted);
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.profileForm);
        \u0275\u0275advance(22);
        \u0275\u0275property("ngIf", ctx.saveSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.savingProfile);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.savingProfile);
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.passwordForm);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.pwdSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pwdError);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.changingPwd);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent" });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-SC6FMZYL.js.map

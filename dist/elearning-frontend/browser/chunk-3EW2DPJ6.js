import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EWJBTFX2.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/registrations/admin-registrations.component.ts
function AdminRegistrationsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.students.length, " en attente ");
  }
}
function AdminRegistrationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminRegistrationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 12);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 13);
    \u0275\u0275text(4, "Aucune inscription en attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6, "Toutes les demandes ont \xE9t\xE9 trait\xE9es.");
    \u0275\u0275elementEnd()();
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("alert-success", ctx_r0.actionResult[s_r2.id] === "validated")("alert-danger", ctx_r0.actionResult[s_r2.id] === "rejected");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-check-circle", ctx_r0.actionResult[s_r2.id] === "validated")("bi-x-circle", ctx_r0.actionResult[s_r2.id] === "rejected");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.actionResult[s_r2.id] === "validated" ? "Compte valid\xE9, \xE9tudiant notifi\xE9." : "Demande rejet\xE9e.", " ");
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 50);
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 51);
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 52);
    \u0275\u0275listener("click", function AdminRegistrationsComponent_div_12_div_1_div_42_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const s_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.rejectingId = s_r2.id;
      return \u0275\u0275resetView(ctx_r0.rejectReason = "");
    });
    \u0275\u0275element(2, "i", 53);
    \u0275\u0275text(3, "Rejeter ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.processing[s_r2.id]);
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 50);
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminRegistrationsComponent_div_12_div_1_div_42_div_6_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectReason, $event) || (ctx_r0.rejectReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 55)(3, "button", 56);
    \u0275\u0275listener("click", function AdminRegistrationsComponent_div_12_div_1_div_42_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const s_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.reject(s_r2));
    });
    \u0275\u0275template(4, AdminRegistrationsComponent_div_12_div_1_div_42_div_6_span_4_Template, 1, 0, "span", 47);
    \u0275\u0275text(5, " Confirmer le rejet ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 57);
    \u0275\u0275listener("click", function AdminRegistrationsComponent_div_12_div_1_div_42_div_6_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.rejectingId = null);
    });
    \u0275\u0275text(7, "Annuler");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.processing[s_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processing[s_r2.id] === "reject");
  }
}
function AdminRegistrationsComponent_div_12_div_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 46);
    \u0275\u0275listener("click", function AdminRegistrationsComponent_div_12_div_1_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const s_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.validate(s_r2));
    });
    \u0275\u0275template(2, AdminRegistrationsComponent_div_12_div_1_div_42_span_2_Template, 1, 0, "span", 47)(3, AdminRegistrationsComponent_div_12_div_1_div_42_i_3_Template, 1, 0, "i", 48);
    \u0275\u0275text(4, " Valider l'inscription ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminRegistrationsComponent_div_12_div_1_div_42_div_5_Template, 4, 1, "div", 43)(6, AdminRegistrationsComponent_div_12_div_1_div_42_div_6_Template, 8, 3, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.processing[s_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processing[s_r2.id] === "validate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processing[s_r2.id] !== "validate");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.rejectingId !== s_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.rejectingId === s_r2.id);
  }
}
function AdminRegistrationsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19);
    \u0275\u0275element(3, "div", 20);
    \u0275\u0275elementStart(4, "div", 21)(5, "div", 22)(6, "div", 23)(7, "div", 24)(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "div", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 29);
    \u0275\u0275element(18, "i", 30);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23)(22, "div", 31)(23, "div", 32)(24, "span", 33);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 34);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 35)(29, "div");
    \u0275\u0275element(30, "i", 36);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 37);
    \u0275\u0275element(33, "i", 38);
    \u0275\u0275elementStart(34, "strong", 39);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 40);
    \u0275\u0275element(37, "i", 41);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 23);
    \u0275\u0275template(41, AdminRegistrationsComponent_div_12_div_1_div_41_Template, 3, 9, "div", 42)(42, AdminRegistrationsComponent_div_12_div_1_div_42_Template, 7, 5, "div", 43);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2(" ", s_r2.firstName.charAt(0), "", s_r2.lastName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", s_r2.firstName, " ", s_r2.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSpecialization(s_r2.specialization), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Inscrit le ", \u0275\u0275pipeBind2(20, 14, s_r2.createdAt, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r2.paymentMethod === "WAVE" ? "\u{1F30A}" : "\u{1F7E0}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.paymentMethod === "WAVE" ? "Wave" : "Orange Money");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r2.paymentPhone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r2.paymentReference);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Soumis ", \u0275\u0275pipeBind2(39, 17, s_r2.paymentSubmittedAt, "dd/MM HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.actionResult[s_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.actionResult[s_r2.id]);
  }
}
function AdminRegistrationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, AdminRegistrationsComponent_div_12_div_1_Template, 43, 20, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.students);
  }
}
var AdminRegistrationsComponent = class _AdminRegistrationsComponent {
  constructor(http) {
    this.http = http;
    this.students = [];
    this.loading = true;
    this.processing = {};
    this.actionResult = {};
    this.rejectingId = null;
    this.rejectReason = "";
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.http.get("/api/admin/registrations").subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  validate(s) {
    this.processing[s.id] = "validate";
    this.http.post(`/api/admin/registrations/${s.id}/validate`, {}).subscribe({
      next: () => {
        this.processing[s.id] = null;
        this.actionResult[s.id] = "validated";
        this.students = this.students.filter((st) => st.id !== s.id);
      },
      error: () => {
        this.processing[s.id] = null;
      }
    });
  }
  reject(s) {
    this.processing[s.id] = "reject";
    this.http.post(`/api/admin/registrations/${s.id}/reject`, { reason: this.rejectReason }).subscribe({
      next: () => {
        this.processing[s.id] = null;
        this.actionResult[s.id] = "rejected";
        this.rejectingId = null;
        this.students = this.students.filter((st) => st.id !== s.id);
      },
      error: () => {
        this.processing[s.id] = null;
      }
    });
  }
  getSpecialization(s) {
    const map = {
      "genie-logiciel": "G\xE9nie Logiciel",
      "reseau": "R\xE9seaux",
      "comptabilite": "Comptabilit\xE9",
      "sante": "Sant\xE9",
      "marketing-digital": "Marketing Digital",
      "developpement-personnel": "D\xE9veloppement Personnel"
    };
    return s ? map[s] || s : "Non pr\xE9cis\xE9e";
  }
  static {
    this.\u0275fac = function AdminRegistrationsComponent_Factory(t) {
      return new (t || _AdminRegistrationsComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminRegistrationsComponent, selectors: [["app-admin-registrations"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/dashboard", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], ["class", "badge rounded-pill ms-auto", "style", "background:#f59e0b;color:white;font-size:1rem;padding:8px 16px", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "badge", "rounded-pill", "ms-auto", 2, "background", "#f59e0b", "color", "white", "font-size", "1rem", "padding", "8px 16px"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "row", "g-4"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "16px", "overflow", "hidden"], [1, "d-flex", "align-items-stretch"], [2, "width", "6px", "background", "linear-gradient(180deg,#f59e0b,#d97706)", "flex-shrink", "0"], [1, "card-body", "p-4"], [1, "row", "align-items-center", "g-3"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-3"], [2, "width", "48px", "height", "48px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "display", "flex", "align-items", "center", "justify-content", "center", "color", "white", "font-weight", "700", "font-size", "1.1rem", "flex-shrink", "0"], [1, "fw-bold"], [1, "text-muted", "small"], [1, "badge", 2, "background", "#e0e7ff", "color", "#4338ca", "font-size", ".75rem"], [1, "small", "text-muted", "mt-2"], [1, "bi", "bi-calendar3", "me-1"], [1, "p-3", "rounded-3", 2, "background", "#fffbeb", "border", "1px solid #fde68a"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [2, "font-size", "1.3rem"], [1, "fw-semibold"], [1, "small"], [1, "bi", "bi-phone", "me-1", "text-muted"], [1, "mt-1"], [1, "bi", "bi-hash", "me-1", "text-muted"], [2, "color", "#d97706"], [1, "mt-1", "text-muted"], [1, "bi", "bi-clock", "me-1"], ["class", "alert py-2 px-3 mb-2", 3, "alert-success", "alert-danger", 4, "ngIf"], [4, "ngIf"], [1, "alert", "py-2", "px-3", "mb-2"], [1, "bi", "me-1"], [1, "btn", "btn-success", "w-100", "mb-2", "fw-semibold", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-check-circle me-1", 4, "ngIf"], ["class", "mt-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-check-circle", "me-1"], [1, "btn", "btn-outline-danger", "w-100", 3, "click", "disabled"], [1, "bi", "bi-x-circle", "me-1"], ["rows", "2", "placeholder", "Motif du rejet (optionnel)", 1, "form-control", "form-control-sm", "mb-2", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2"], [1, "btn", "btn-danger", "btn-sm", "flex-grow-1", 3, "click", "disabled"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"]], template: function AdminRegistrationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1", 4);
        \u0275\u0275text(6, "Inscriptions en attente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Validez ou rejetez les demandes d'inscription apr\xE8s v\xE9rification du paiement");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminRegistrationsComponent_span_9_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, AdminRegistrationsComponent_div_10_Template, 2, 0, "div", 7)(11, AdminRegistrationsComponent_div_11_Template, 7, 0, "div", 7)(12, AdminRegistrationsComponent_div_12_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.students.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.students.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.students.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminRegistrationsComponent, { className: "AdminRegistrationsComponent" });
})();
export {
  AdminRegistrationsComponent
};
//# sourceMappingURL=chunk-3EW2DPJ6.js.map

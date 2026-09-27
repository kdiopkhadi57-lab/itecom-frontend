import {
  CommonModule,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/qcm/qcm-students-overview.component.ts
var _c0 = (a0) => ["/teacher/qcms", a0, "resultats"];
function QcmStudentsOverviewComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function QcmStudentsOverviewComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function QcmStudentsOverviewComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275elementStart(2, "h5", 13);
    \u0275\u0275text(3, "Aucun devoir disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 14);
    \u0275\u0275text(5, "Cr\xE9ez d\u2019abord un devoir pour g\xE9rer ses \xE9tudiants et ses notes.");
    \u0275\u0275elementEnd()();
  }
}
function QcmStudentsOverviewComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "div", 19);
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "h5", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "span");
    \u0275\u0275element(13, "i", 26);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 27);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "a", 28);
    \u0275\u0275element(19, "i", 29);
    \u0275\u0275text(20, "Voir les \xE9tudiants et notes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const qcm_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", qcm_r2.status === "PUBLISHED" ? "#10b981" : "#6366f1");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(qcm_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", qcm_r2.status === "PUBLISHED")("bg-secondary", qcm_r2.status !== "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", qcm_r2.status === "PUBLISHED" ? "Publi\xE9" : "Brouillon", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(qcm_r2.description || "Aucune description");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", qcm_r2.studentCount, " \xE9tudiant(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", qcm_r2.questionCount, " question(s)");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, qcm_r2.id));
  }
}
function QcmStudentsOverviewComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, QcmStudentsOverviewComponent_div_13_div_1_Template, 21, 14, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.qcms);
  }
}
var QcmStudentsOverviewComponent = class _QcmStudentsOverviewComponent {
  constructor(http) {
    this.http = http;
    this.qcms = [];
    this.loading = true;
    this.error = "";
  }
  ngOnInit() {
    this.http.get("/api/teacher/qcms").subscribe({
      next: (qcms) => {
        this.qcms = qcms;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger la liste des devoirs.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function QcmStudentsOverviewComponent_Factory(t) {
      return new (t || _QcmStudentsOverviewComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmStudentsOverviewComponent, selectors: [["app-qcm-students-overview"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 4, consts: [[1, "fade-in-up"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-4", "flex-wrap"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0"], ["routerLink", "/teacher/qcms/create", 1, "btn", "btn-primary"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "alert", "alert-danger"], [1, "bi", "bi-people", "text-muted", 2, "font-size", "3rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "row", "g-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px"], [1, "card-body", "p-4", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-start", "gap-2", "mb-2"], [1, "fw-bold", "mb-0"], [1, "badge"], [1, "text-muted", "small", "flex-grow-1"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-3"], [1, "bi", "bi-people", "me-1"], [1, "bi", "bi-list-check", "me-1"], [1, "btn", "btn-outline-primary", "w-100", 3, "routerLink"], [1, "bi", "bi-people", "me-2"]], template: function QcmStudentsOverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\xC9tudiants et notes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Consultez les \xE9tudiants et corrigez les notes de vos devoirs.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, "Nouveau devoir ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, QcmStudentsOverviewComponent_div_10_Template, 2, 0, "div", 6)(11, QcmStudentsOverviewComponent_div_11_Template, 2, 1, "div", 7)(12, QcmStudentsOverviewComponent_div_12_Template, 6, 0, "div", 6)(13, QcmStudentsOverviewComponent_div_13_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.qcms.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.qcms.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmStudentsOverviewComponent, { className: "QcmStudentsOverviewComponent" });
})();
export {
  QcmStudentsOverviewComponent
};
//# sourceMappingURL=chunk-JTTCQW4Z.js.map

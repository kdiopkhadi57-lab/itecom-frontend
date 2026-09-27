import {
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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

// src/app/features/qcm/qcm-student-list.component.ts
var _c0 = (a0) => ["/qcm", a0, "passer"];
function QcmStudentListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function QcmStudentListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 9);
    \u0275\u0275text(4, "Aucun devoir disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Vos professeurs n'ont pas encore publi\xE9 de devoirs.");
    \u0275\u0275elementEnd()();
  }
}
function QcmStudentListComponent_div_8_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "\u2705 D\xE9j\xE0 pass\xE9");
    \u0275\u0275elementEnd();
  }
}
function QcmStudentListComponent_div_8_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Nouveau");
    \u0275\u0275elementEnd();
  }
}
function QcmStudentListComponent_div_8_div_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2, "Commencer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, q_r1.id));
  }
}
function QcmStudentListComponent_div_8_div_1_a_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275text(2, "Voir ma correction ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, q_r1.id));
  }
}
function QcmStudentListComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "h6", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, QcmStudentListComponent_div_8_div_1_span_7_Template, 2, 0, "span", 18)(8, QcmStudentListComponent_div_8_div_1_span_8_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21)(12, "span");
    \u0275\u0275element(13, "i", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 23);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, QcmStudentListComponent_div_8_div_1_a_18_Template, 3, 3, "a", 24)(19, QcmStudentListComponent_div_8_div_1_a_19_Template, 3, 3, "a", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", q_r1.alreadyTaken ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#6366f1,#4f46e5)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r1.alreadyTaken);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !q_r1.alreadyTaken);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r1.description || "Aucune description.");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r1.professorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", q_r1.questionCount, " question(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !q_r1.alreadyTaken);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r1.alreadyTaken);
  }
}
function QcmStudentListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, QcmStudentListComponent_div_8_div_1_Template, 20, 10, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.qcms);
  }
}
var QcmStudentListComponent = class _QcmStudentListComponent {
  constructor(http) {
    this.http = http;
    this.qcms = [];
    this.loading = true;
  }
  ngOnInit() {
    this.http.get("/api/qcm").subscribe({
      next: (d) => {
        this.qcms = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function QcmStudentListComponent_Factory(t) {
      return new (t || _QcmStudentListComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmStudentListComponent, selectors: [["app-qcm-student-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [[1, "fade-in-up"], [1, "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "row", "g-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px"], [1, "card-body", "p-4", "d-flex", "flex-column"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "fw-bold", "mb-0", "flex-grow-1", "me-2"], ["class", "badge rounded-pill flex-shrink-0", "style", "background:#d1fae5;color:#065f46", 4, "ngIf"], ["class", "badge rounded-pill flex-shrink-0", "style", "background:#ede9fe;color:#5b21b6", 4, "ngIf"], [1, "text-muted", "small", "mb-3", "flex-grow-1"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-4"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-question-circle", "me-1"], ["class", "btn w-100 fw-semibold", "style", "background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:10px", 3, "routerLink", 4, "ngIf"], ["class", "btn w-100 btn-outline-success fw-semibold", "style", "border-radius:10px", 3, "routerLink", 4, "ngIf"], [1, "badge", "rounded-pill", "flex-shrink-0", 2, "background", "#d1fae5", "color", "#065f46"], [1, "badge", "rounded-pill", "flex-shrink-0", 2, "background", "#ede9fe", "color", "#5b21b6"], [1, "btn", "w-100", "fw-semibold", 2, "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "color", "white", "border-radius", "10px", 3, "routerLink"], [1, "bi", "bi-play-fill", "me-2"], [1, "btn", "w-100", "btn-outline-success", "fw-semibold", 2, "border-radius", "10px", 3, "routerLink"], [1, "bi", "bi-eye", "me-2"]], template: function QcmStudentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Devoirs disponibles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Passez les questionnaires publi\xE9s par vos professeurs");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, QcmStudentListComponent_div_6_Template, 2, 0, "div", 4)(7, QcmStudentListComponent_div_7_Template, 7, 0, "div", 4)(8, QcmStudentListComponent_div_8_Template, 2, 1, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.qcms.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.qcms.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmStudentListComponent, { className: "QcmStudentListComponent" });
})();
export {
  QcmStudentListComponent
};
//# sourceMappingURL=chunk-THNV5UJP.js.map

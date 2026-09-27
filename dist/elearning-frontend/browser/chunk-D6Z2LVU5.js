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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/qcm/qcm-list.component.ts
var _c0 = (a0) => ["/teacher/qcms", a0, "edit"];
var _c1 = (a0) => ["/teacher/qcms", a0, "resultats"];
function QcmListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function QcmListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 11);
    \u0275\u0275text(4, "Aucun devoir cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6, "Commencez par cr\xE9er votre premier questionnaire.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 13);
    \u0275\u0275text(8, "Cr\xE9er un devoir");
    \u0275\u0275elementEnd()();
  }
}
function QcmListComponent_div_12_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r2.description);
  }
}
function QcmListComponent_div_12_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function QcmListComponent_div_12_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const q_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.publish(q_r2));
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, "Publier ");
    \u0275\u0275elementEnd();
  }
}
function QcmListComponent_div_12_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function QcmListComponent_div_12_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const q_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.unpublish(q_r2));
    });
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2, "D\xE9publier ");
    \u0275\u0275elementEnd();
  }
}
function QcmListComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "div", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20)(5, "h6", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, QcmListComponent_div_12_div_1_p_9_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(10, "div", 24)(11, "span");
    \u0275\u0275element(12, "i", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 27)(19, "a", 28);
    \u0275\u0275element(20, "i", 29);
    \u0275\u0275text(21, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 30);
    \u0275\u0275element(23, "i", 31);
    \u0275\u0275text(24, "R\xE9sultats ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, QcmListComponent_div_12_div_1_button_25_Template, 3, 0, "button", 32)(26, QcmListComponent_div_12_div_1_button_26_Template, 3, 0, "button", 33);
    \u0275\u0275elementStart(27, "button", 34);
    \u0275\u0275listener("click", function QcmListComponent_div_12_div_1_Template_button_click_27_listener() {
      const q_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete(q_r2));
    });
    \u0275\u0275element(28, "i", 35);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const q_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", q_r2.status === "PUBLISHED" ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#6366f1,#4f46e5)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r2.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", q_r2.status === "PUBLISHED" ? "#d1fae5" : "#e0e7ff")("color", q_r2.status === "PUBLISHED" ? "#065f46" : "#3730a3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r2.status === "PUBLISHED" ? "\u2705 Publi\xE9" : "\u270F\uFE0F Brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r2.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", q_r2.questionCount, " question(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, q_r2.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, q_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c1, q_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", q_r2.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r2.status === "PUBLISHED");
  }
}
function QcmListComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, QcmListComponent_div_12_div_1_Template, 29, 22, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.qcms);
  }
}
var QcmListComponent = class _QcmListComponent {
  constructor(http) {
    this.http = http;
    this.qcms = [];
    this.loading = true;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.http.get("/api/teacher/qcms").subscribe({
      next: (d) => {
        this.qcms = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  publish(q) {
    this.http.post(`/api/teacher/qcms/${q.id}/publish`, {}).subscribe(() => q.status = "PUBLISHED");
  }
  unpublish(q) {
    this.http.post(`/api/teacher/qcms/${q.id}/unpublish`, {}).subscribe(() => q.status = "DRAFT");
  }
  delete(q) {
    if (!confirm(`Supprimer "${q.title}" ?`))
      return;
    this.http.delete(`/api/teacher/qcms/${q.id}`).subscribe(() => this.qcms = this.qcms.filter((x) => x.id !== q.id));
  }
  static {
    this.\u0275fac = function QcmListComponent_Factory(t) {
      return new (t || _QcmListComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmListComponent, selectors: [["app-qcm-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "fade-in-up"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], ["routerLink", "/teacher/qcms/create", 1, "btn", "fw-semibold", "px-4", 2, "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "color", "white", "border-radius", "12px"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], ["routerLink", "/teacher/qcms/create", 1, "btn", "btn-primary", "px-4", "mt-2"], [1, "row", "g-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "fw-bold", "mb-0", "flex-grow-1", "me-2"], [1, "badge", "rounded-pill", "flex-shrink-0"], ["class", "text-muted small mb-3", 4, "ngIf"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-4"], [1, "bi", "bi-question-circle", "me-1"], [1, "bi", "bi-calendar3", "me-1"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-sm", "btn-outline-info", 3, "routerLink"], [1, "bi", "bi-bar-chart", "me-1"], ["class", "btn btn-sm btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "text-muted", "small", "mb-3"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bi", "bi-send", "me-1"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "bi", "bi-pause-circle", "me-1"]], template: function QcmListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Mes devoirs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Cr\xE9ez et g\xE9rez vos questionnaires \xE0 choix multiples");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, "Cr\xE9er un devoir ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, QcmListComponent_div_10_Template, 2, 0, "div", 6)(11, QcmListComponent_div_11_Template, 9, 0, "div", 6)(12, QcmListComponent_div_12_Template, 2, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.qcms.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.qcms.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmListComponent, { className: "QcmListComponent" });
})();
export {
  QcmListComponent
};
//# sourceMappingURL=chunk-D6Z2LVU5.js.map

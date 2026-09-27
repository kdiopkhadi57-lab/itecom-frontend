import {
  ExamService
} from "./chunk-ITWKVGS7.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/my-exams/my-exams.component.ts
var _c0 = (a0) => ["/exam", a0];
var _c1 = (a0) => ["/qcm", a0, "passer"];
function MyExamsComponent_ng_container_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function MyExamsComponent_ng_container_17_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "i", 14);
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3, "Aucun examen ne vous a \xE9t\xE9 assign\xE9 pour le moment.");
    \u0275\u0275elementEnd()();
  }
}
function MyExamsComponent_ng_container_17_div_3_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "Note :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const exam_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 5, exam_r1.totalScore, "1.1-1"), " / ", \u0275\u0275pipeBind2(5, 8, exam_r1.maxScore, "1.1-1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(((tmp_6_0 = exam_r1.percentage) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0) >= 50 ? "text-success fw-semibold" : "text-danger fw-semibold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(8, 11, exam_r1.percentage, "1.1-1"), "%) ");
  }
}
function MyExamsComponent_ng_container_17_div_3_div_1_a_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275text(2, "Passer l'examen ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exam_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, exam_r1.accessToken));
  }
}
function MyExamsComponent_ng_container_17_div_3_div_1_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, "En attente de correction ");
    \u0275\u0275elementEnd();
  }
}
function MyExamsComponent_ng_container_17_div_3_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, "Examen cl\xF4tur\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function MyExamsComponent_ng_container_17_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "div", 20);
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 22)(5, "h5", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 26);
    \u0275\u0275element(12, "i", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 25);
    \u0275\u0275element(15, "i", 28);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, MyExamsComponent_ng_container_17_div_3_div_1_div_18_Template, 9, 14, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30);
    \u0275\u0275template(20, MyExamsComponent_ng_container_17_div_3_div_1_a_20_Template, 3, 3, "a", 31)(21, MyExamsComponent_ng_container_17_div_3_div_1_span_21_Template, 3, 0, "span", 32)(22, MyExamsComponent_ng_container_17_div_3_div_1_span_22_Template, 3, 0, "span", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exam_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(exam_r1.examTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(exam_r1.studentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(exam_r1.studentStatus), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r1.examDescription || "Aucune description");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r1.professorName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 10, exam_r1.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", exam_r1.studentStatus === "GRADED");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canTakeExam(exam_r1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exam_r1.studentStatus === "SUBMITTED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exam_r1.examStatus === "CLOSED" && exam_r1.studentStatus !== "GRADED" && exam_r1.studentStatus !== "SUBMITTED");
  }
}
function MyExamsComponent_ng_container_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MyExamsComponent_ng_container_17_div_3_div_1_Template, 23, 13, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.exams);
  }
}
function MyExamsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyExamsComponent_ng_container_17_div_1_Template, 2, 0, "div", 10)(2, MyExamsComponent_ng_container_17_div_2_Template, 4, 0, "div", 10)(3, MyExamsComponent_ng_container_17_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.exams.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.exams.length > 0);
  }
}
function MyExamsComponent_ng_container_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementEnd();
  }
}
function MyExamsComponent_ng_container_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 40);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 41);
    \u0275\u0275text(4, "Aucun devoir disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6, "Vos professeurs n'ont pas encore publi\xE9 de devoir.");
    \u0275\u0275elementEnd()();
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " \u2705 D\xE9j\xE0 pass\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r3.description);
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60);
    \u0275\u0275element(3, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.scorePercent(q_r3) + "%")("background", ctx_r1.scorePercent(q_r3) >= 50 ? "#10b981" : "#f59e0b");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.scorePercent(q_r3) >= 50 ? "#059669" : "#b45309");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", q_r3.score, "/", q_r3.maxScore, " (", ctx_r1.scorePercent(q_r3), "%) ");
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_a_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2, "Commencer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, q_r3.id));
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_a_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2, "Voir ma correction ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, q_r3.id));
  }
}
function MyExamsComponent_ng_container_18_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 43);
    \u0275\u0275element(2, "div", 44);
    \u0275\u0275elementStart(3, "div", 21)(4, "div", 45)(5, "h6", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MyExamsComponent_ng_container_18_div_3_div_1_span_7_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyExamsComponent_ng_container_18_div_3_div_1_p_8_Template, 2, 1, "p", 48);
    \u0275\u0275elementStart(9, "div", 49)(10, "span");
    \u0275\u0275element(11, "i", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275element(14, "i", 51);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, MyExamsComponent_ng_container_18_div_3_div_1_div_17_Template, 6, 9, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 53)(19, "div", 54);
    \u0275\u0275template(20, MyExamsComponent_ng_container_18_div_3_div_1_a_20_Template, 3, 3, "a", 55)(21, MyExamsComponent_ng_container_18_div_3_div_1_a_21_Template, 3, 3, "a", 56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", q_r3.alreadyTaken ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#6366f1,#4f46e5)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.alreadyTaken);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", q_r3.questionCount, " question(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 10, q_r3.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", q_r3.alreadyTaken && q_r3.score != null);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !q_r3.alreadyTaken);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r3.alreadyTaken);
  }
}
function MyExamsComponent_ng_container_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MyExamsComponent_ng_container_18_div_3_div_1_Template, 22, 13, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.qcms);
  }
}
function MyExamsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MyExamsComponent_ng_container_18_div_1_Template, 2, 0, "div", 10)(2, MyExamsComponent_ng_container_18_div_2_Template, 7, 0, "div", 10)(3, MyExamsComponent_ng_container_18_div_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingQcm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingQcm && ctx_r1.qcms.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingQcm && ctx_r1.qcms.length > 0);
  }
}
var MyExamsComponent = class _MyExamsComponent {
  constructor(examService, http) {
    this.examService = examService;
    this.http = http;
    this.tab = "exams";
    this.exams = [];
    this.loading = true;
    this.qcms = [];
    this.loadingQcm = false;
    this.qcmsLoaded = false;
  }
  ngOnInit() {
    this.examService.getMyStudentExams().subscribe({
      next: (r) => {
        this.exams = r.data || [];
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  loadQcms() {
    if (this.qcmsLoaded)
      return;
    this.loadingQcm = true;
    this.http.get("/api/qcm").subscribe({
      next: (d) => {
        this.qcms = d;
        this.loadingQcm = false;
        this.qcmsLoaded = true;
      },
      error: () => this.loadingQcm = false
    });
  }
  scorePercent(q) {
    if (!q.maxScore)
      return 0;
    return Math.round(q.score / q.maxScore * 100);
  }
  canTakeExam(exam) {
    return exam.examStatus === "PUBLISHED" && (exam.studentStatus === "INVITED" || exam.studentStatus === "STARTED");
  }
  getStatusClass(status) {
    return { INVITED: "bg-info", STARTED: "bg-warning", SUBMITTED: "bg-primary", GRADED: "bg-success" }[status] || "bg-secondary";
  }
  getStatusLabel(status) {
    return { INVITED: "\xC0 passer", STARTED: "En cours", SUBMITTED: "Soumis", GRADED: "Corrig\xE9" }[status] || status;
  }
  static {
    this.\u0275fac = function MyExamsComponent_Factory(t) {
      return new (t || _MyExamsComponent)(\u0275\u0275directiveInject(ExamService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyExamsComponent, selectors: [["app-my-exams"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 16, consts: [[1, "fade-in-up"], [1, "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2", "mb-4"], [1, "btn", "px-4", "fw-semibold", 2, "border-radius", "12px", "border", "none", 3, "click"], [1, "bi", "bi-clipboard-text", "me-2"], [1, "badge", "ms-1", "rounded-pill", 2, "color", "white"], [1, "bi", "bi-list-check", "me-2"], [4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "bi", "bi-clipboard-x", 2, "font-size", "3rem", "color", "#ccc"], [1, "text-muted", "mt-3"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "card", "h-100", "border-0", "shadow-sm", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "4px", "background", "linear-gradient(90deg,#6366f1,#4f46e5)"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "card-title", "fw-bold", "mb-0"], [1, "badge", 3, "ngClass"], [1, "text-muted", "small", "mb-3"], [1, "text-muted", "small", "mb-2"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-calendar", "me-1"], ["class", "mb-2", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-0", "pt-0", "pb-3", "px-4"], ["class", "btn btn-sm btn-primary", 3, "routerLink", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "mb-2"], [1, "fw-semibold"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "bi", "bi-pencil-square", "me-1"], [1, "text-muted", "small"], [1, "bi", "bi-hourglass-split", "me-1"], [1, "bi", "bi-lock", "me-1"], [2, "font-size", "3.5rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "4px"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "fw-bold", "mb-0", "flex-grow-1", "me-2"], ["class", "badge rounded-pill", "style", "background:#d1fae5;color:#065f46", 4, "ngIf"], ["class", "text-muted small mb-3", 4, "ngIf"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-3"], [1, "bi", "bi-question-circle", "me-1"], [1, "bi", "bi-calendar3", "me-1"], ["class", "mb-3", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-0", "pb-3", "px-4", "pt-0"], [1, "d-flex", "gap-2"], ["class", "btn btn-sm fw-semibold", "style", "background:#6366f1;color:white;border-radius:8px", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm btn-outline-success", 3, "routerLink", 4, "ngIf"], [1, "badge", "rounded-pill", 2, "background", "#d1fae5", "color", "#065f46"], [1, "mb-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "flex-grow-1", "rounded", 2, "height", "8px", "background", "#e5e7eb", "overflow", "hidden"], [1, "h-100", "rounded"], [1, "fw-semibold", "small"], [1, "btn", "btn-sm", "fw-semibold", 2, "background", "#6366f1", "color", "white", "border-radius", "8px", 3, "routerLink"], [1, "bi", "bi-play-fill", "me-1"], [1, "btn", "btn-sm", "btn-outline-success", 3, "routerLink"], [1, "bi", "bi-eye", "me-1"]], template: function MyExamsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Examens en ligne");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Vos examens assign\xE9s et devoirs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MyExamsComponent_Template_button_click_7_listener() {
          return ctx.tab = "exams";
        });
        \u0275\u0275element(8, "i", 6);
        \u0275\u0275text(9, "Examens ");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275listener("click", function MyExamsComponent_Template_button_click_12_listener() {
          ctx.tab = "qcm";
          return ctx.loadQcms();
        });
        \u0275\u0275element(13, "i", 8);
        \u0275\u0275text(14, "Devoirs ");
        \u0275\u0275elementStart(15, "span", 7);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(17, MyExamsComponent_ng_container_17_Template, 4, 3, "ng-container", 9)(18, MyExamsComponent_ng_container_18_Template, 4, 3, "ng-container", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275styleProp("background", ctx.tab === "exams" ? "#6366f1" : "#f3f4f6")("color", ctx.tab === "exams" ? "white" : "#374151");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background", ctx.tab === "exams" ? "rgba(255,255,255,.3)" : "#6366f1");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.exams.length);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.tab === "qcm" ? "#6366f1" : "#f3f4f6")("color", ctx.tab === "qcm" ? "white" : "#374151");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background", ctx.tab === "qcm" ? "rgba(255,255,255,.3)" : "#6366f1");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.qcms.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tab === "exams");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tab === "qcm");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyExamsComponent, { className: "MyExamsComponent" });
})();
export {
  MyExamsComponent
};
//# sourceMappingURL=chunk-OXGFNLXC.js.map

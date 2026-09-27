import {
  ExamService
} from "./chunk-ITWKVGS7.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgClass,
  NgForOf,
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

// src/app/features/admin/exam-list/exam-list.component.ts
var _c0 = (a0) => ["/teacher/exams", a0];
var _c1 = (a0) => ["/teacher/qcms", a0, "edit"];
var _c2 = (a0) => ["/teacher/qcms", a0, "resultats"];
function ExamListComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, "Cr\xE9er un devoir ");
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd()();
  }
}
function ExamListComponent_ng_container_15_div_3_div_1_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_15_div_3_div_1_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const exam_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.publishExam(exam_r3));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, "Publier ");
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_15_div_3_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_15_div_3_div_1_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const exam_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.closeExam(exam_r3));
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2, "Cl\xF4turer ");
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_15_div_3_div_1_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_15_div_3_div_1_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const exam_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteExam(exam_r3));
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "div", 22);
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 24)(5, "h6", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 28)(12, "span");
    \u0275\u0275element(13, "i", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275element(16, "i", 30);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 31);
    \u0275\u0275element(19, "i", 32);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 33)(23, "div", 34)(24, "a", 35);
    \u0275\u0275element(25, "i", 36);
    \u0275\u0275text(26, "D\xE9tails ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ExamListComponent_ng_container_15_div_3_div_1_button_27_Template, 3, 0, "button", 37)(28, ExamListComponent_ng_container_15_div_3_div_1_button_28_Template, 3, 0, "button", 38);
    \u0275\u0275elementStart(29, "button", 39);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_15_div_3_div_1_Template_button_click_29_listener() {
      const exam_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.downloadReport(exam_r3));
    });
    \u0275\u0275element(30, "i", 40);
    \u0275\u0275text(31, "Rapport ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ExamListComponent_ng_container_15_div_3_div_1_button_32_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const exam_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(exam_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.getStatusClass(exam_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getStatusLabel(exam_r3.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r3.description || "Aucune description");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", exam_r3.questionCount, " questions");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", exam_r3.studentCount, " \xE9tudiants");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 12, exam_r3.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, exam_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", exam_r3.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exam_r3.status === "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", exam_r3.status === "DRAFT");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", exam_r3.status === "DRAFT");
  }
}
function ExamListComponent_ng_container_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ExamListComponent_ng_container_15_div_3_div_1_Template, 33, 17, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.exams);
  }
}
function ExamListComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExamListComponent_ng_container_15_div_1_Template, 2, 0, "div", 13)(2, ExamListComponent_ng_container_15_div_2_Template, 3, 0, "div", 13)(3, ExamListComponent_ng_container_15_div_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loadingExams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingExams && ctx_r3.exams.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingExams && ctx_r3.exams.length > 0);
  }
}
function ExamListComponent_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 48);
    \u0275\u0275text(4, "Aucun devoir cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 49);
    \u0275\u0275text(6, "Cr\xE9ez un devoir manuellement ou importez un fichier Word.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 50)(8, "a", 51);
    \u0275\u0275element(9, "i", 12);
    \u0275\u0275text(10, "Cr\xE9er un devoir ");
    \u0275\u0275elementEnd()()();
  }
}
function ExamListComponent_ng_container_16_div_3_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r8.description);
  }
}
function ExamListComponent_ng_container_16_div_3_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_16_div_3_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const q_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.publishQcm(q_r8));
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, "Publier ");
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_16_div_3_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_16_div_3_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const q_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.unpublishQcm(q_r8));
    });
    \u0275\u0275element(1, "i", 68);
    \u0275\u0275text(2, "D\xE9publier ");
    \u0275\u0275elementEnd();
  }
}
function ExamListComponent_ng_container_16_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "div", 55);
    \u0275\u0275elementStart(3, "div", 23)(4, "div", 56)(5, "h6", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ExamListComponent_ng_container_16_div_3_div_1_p_9_Template, 2, 1, "p", 59);
    \u0275\u0275elementStart(10, "div", 60)(11, "span");
    \u0275\u0275element(12, "i", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275element(15, "i", 61);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 34)(19, "a", 62);
    \u0275\u0275element(20, "i", 63);
    \u0275\u0275text(21, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 64);
    \u0275\u0275element(23, "i", 65);
    \u0275\u0275text(24, "R\xE9sultats ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ExamListComponent_ng_container_16_div_3_div_1_button_25_Template, 3, 0, "button", 37)(26, ExamListComponent_ng_container_16_div_3_div_1_button_26_Template, 3, 0, "button", 66);
    \u0275\u0275elementStart(27, "button", 46);
    \u0275\u0275listener("click", function ExamListComponent_ng_container_16_div_3_div_1_Template_button_click_27_listener() {
      const q_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteQcm(q_r8));
    });
    \u0275\u0275element(28, "i", 47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", q_r8.status === "PUBLISHED" ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#6366f1,#4f46e5)");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r8.title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", q_r8.status === "PUBLISHED" ? "#d1fae5" : "#e0e7ff")("color", q_r8.status === "PUBLISHED" ? "#065f46" : "#3730a3");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r8.status === "PUBLISHED" ? "\u2705 Publi\xE9" : "\u270F\uFE0F Brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r8.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", q_r8.questionCount, " question(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, q_r8.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c1, q_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c2, q_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", q_r8.status === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r8.status === "PUBLISHED");
  }
}
function ExamListComponent_ng_container_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, ExamListComponent_ng_container_16_div_3_div_1_Template, 29, 22, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.qcms);
  }
}
function ExamListComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExamListComponent_ng_container_16_div_1_Template, 2, 0, "div", 13)(2, ExamListComponent_ng_container_16_div_2_Template, 11, 0, "div", 13)(3, ExamListComponent_ng_container_16_div_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.loadingQcm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingQcm && ctx_r3.qcms.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loadingQcm && ctx_r3.qcms.length > 0);
  }
}
var ExamListComponent = class _ExamListComponent {
  constructor(examService, authService, http) {
    this.examService = examService;
    this.authService = authService;
    this.http = http;
    this.tab = "exams";
    this.exams = [];
    this.loadingExams = true;
    this.qcms = [];
    this.loadingQcm = false;
    this.qcmsLoaded = false;
  }
  ngOnInit() {
    const obs = this.authService.isAdmin ? this.examService.getAllExams() : this.examService.getMyExams();
    obs.subscribe({
      next: (r) => {
        this.exams = r.data || [];
        this.loadingExams = false;
      },
      error: () => this.loadingExams = false
    });
  }
  loadQcms() {
    if (this.qcmsLoaded)
      return;
    this.loadingQcm = true;
    this.http.get("/api/teacher/qcms").subscribe({
      next: (d) => {
        this.qcms = d;
        this.loadingQcm = false;
        this.qcmsLoaded = true;
      },
      error: () => this.loadingQcm = false
    });
  }
  // ── Actions examens ──────────────────────────────────────────────────────
  publishExam(exam) {
    if (!confirm(`Publier "${exam.title}" ?`))
      return;
    this.examService.publishExam(exam.id).subscribe({ next: (r) => {
      const i = this.exams.findIndex((e) => e.id === exam.id);
      if (i >= 0)
        this.exams[i] = r.data;
    } });
  }
  closeExam(exam) {
    if (!confirm(`Cl\xF4turer "${exam.title}" ?`))
      return;
    this.examService.closeExam(exam.id).subscribe({ next: (r) => {
      const i = this.exams.findIndex((e) => e.id === exam.id);
      if (i >= 0)
        this.exams[i] = r.data;
    } });
  }
  deleteExam(exam) {
    if (!confirm(`Supprimer "${exam.title}" ?`))
      return;
    this.examService.deleteExam(exam.id).subscribe({ next: () => this.exams = this.exams.filter((e) => e.id !== exam.id) });
  }
  downloadReport(exam) {
    const obs = this.authService.isAdmin ? this.examService.downloadAdminReport(exam.id) : this.examService.downloadReport(exam.id);
    obs.subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `rapport-${exam.id}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  // ── Actions QCMs ─────────────────────────────────────────────────────────
  publishQcm(q) {
    this.http.post(`/api/teacher/qcms/${q.id}/publish`, {}).subscribe(() => q.status = "PUBLISHED");
  }
  unpublishQcm(q) {
    this.http.post(`/api/teacher/qcms/${q.id}/unpublish`, {}).subscribe(() => q.status = "DRAFT");
  }
  deleteQcm(q) {
    if (!confirm(`Supprimer "${q.title}" ?`))
      return;
    this.http.delete(`/api/teacher/qcms/${q.id}`).subscribe(() => this.qcms = this.qcms.filter((x) => x.id !== q.id));
  }
  getStatusClass(s) {
    return { DRAFT: "bg-secondary", PUBLISHED: "bg-success", CLOSED: "bg-dark" }[s] || "bg-secondary";
  }
  getStatusLabel(s) {
    return { DRAFT: "Brouillon", PUBLISHED: "Publi\xE9", CLOSED: "Cl\xF4tur\xE9" }[s] || s;
  }
  static {
    this.\u0275fac = function ExamListComponent_Factory(t) {
      return new (t || _ExamListComponent)(\u0275\u0275directiveInject(ExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamListComponent, selectors: [["app-exam-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 10, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], [1, "d-flex", "gap-2"], ["routerLink", "/teacher/qcms/create", "class", "btn fw-semibold", "style", "background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border-radius:12px", 4, "ngIf"], [1, "d-flex", "gap-2", "mb-4"], [1, "btn", "px-4", "fw-semibold", 2, "border-radius", "12px", "border", "none", 3, "click"], [1, "bi", "bi-list-check", "me-2"], [1, "badge", "ms-1", "rounded-pill", 2, "color", "white"], [4, "ngIf"], ["routerLink", "/teacher/qcms/create", 1, "btn", "fw-semibold", 2, "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "color", "white", "border-radius", "12px"], [1, "bi", "bi-plus-circle", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "4rem"], [1, "row", "g-3"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-lg-4"], [1, "card", "h-100", "border-0", "shadow-sm", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px", "background", "linear-gradient(90deg,#6366f1,#4f46e5)"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "card-title", "fw-bold", "mb-0", "flex-grow-1", "me-2"], [1, "badge", "rounded-pill", 3, "ngClass"], [1, "text-muted", "small", "mb-3"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-3"], [1, "bi", "bi-question-circle", "me-1"], [1, "bi", "bi-people", "me-1"], [1, "text-muted", "small"], [1, "bi", "bi-calendar", "me-1"], [1, "card-footer", "bg-transparent", "border-0", "pb-3", "px-4"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "routerLink"], [1, "bi", "bi-eye", "me-1"], ["class", "btn btn-sm btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-success", 3, "click", "disabled"], [1, "bi", "bi-download", "me-1"], ["class", "btn btn-sm btn-outline-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "bi", "bi-send", "me-1"], [1, "btn", "btn-sm", "btn-warning", 3, "click"], [1, "bi", "bi-x-circle", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "d-flex", "gap-2", "justify-content-center", "mt-2"], ["routerLink", "/teacher/qcms/create", 1, "btn", "btn-primary"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px"], [1, "d-flex", "align-items-start", "justify-content-between", "mb-2"], [1, "fw-bold", "mb-0", "flex-grow-1", "me-2"], [1, "badge", "rounded-pill"], ["class", "text-muted small mb-3", 4, "ngIf"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-4"], [1, "bi", "bi-calendar3", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-sm", "btn-outline-info", 3, "routerLink"], [1, "bi", "bi-bar-chart", "me-1"], ["class", "btn btn-sm btn-outline-warning", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], [1, "bi", "bi-pause-circle", "me-1"]], template: function ExamListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Examens en ligne");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "G\xE9rez vos examens et devoirs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, ExamListComponent_a_8_Template, 3, 0, "a", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function ExamListComponent_Template_button_click_10_listener() {
          ctx.tab = "qcm";
          return ctx.loadQcms();
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275text(12, "Devoirs ou Examens ");
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(15, ExamListComponent_ng_container_15_Template, 4, 3, "ng-container", 10)(16, ExamListComponent_ng_container_16_Template, 4, 3, "ng-container", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.tab === "qcm");
        \u0275\u0275advance(2);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamListComponent, { className: "ExamListComponent" });
})();
export {
  ExamListComponent
};
//# sourceMappingURL=chunk-TWCQ2AHL.js.map

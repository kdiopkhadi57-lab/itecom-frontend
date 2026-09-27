import {
  ExamService
} from "./chunk-ITWKVGS7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-EWJBTFX2.js";
import {
  CommonModule,
  HttpClient,
  NgForOf,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/exam-create/exam-create.component.ts
function ExamCreateComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, "Examen cr\xE9\xE9 avec succ\xE8s ! ");
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function ExamCreateComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.success = false);
    });
    \u0275\u0275elementEnd()();
  }
}
function ExamCreateComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function ExamCreateComponent_div_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.error = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.error, " ");
  }
}
function ExamCreateComponent_div_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementStart(2, "p", 58);
    \u0275\u0275text(3, 'Aucune question. Cliquez sur "Ajouter une question".');
    \u0275\u0275elementEnd()();
  }
}
function ExamCreateComponent_div_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60)(2, "span", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 62);
    \u0275\u0275listener("click", function ExamCreateComponent_div_40_div_6_Template_button_click_4_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeQuestion(i_r7));
    });
    \u0275\u0275element(5, "i", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 64)(7, "label", 65);
    \u0275\u0275text(8, "\xC9nonc\xE9 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_div_40_div_6_Template_textarea_ngModelChange_9_listener($event) {
      const q_r8 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(q_r8.questionText, $event) || (q_r8.questionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 64)(11, "label", 65);
    \u0275\u0275text(12, "R\xE9ponse de r\xE9f\xE9rence *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_div_40_div_6_Template_textarea_ngModelChange_13_listener($event) {
      const q_r8 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(q_r8.referenceAnswer, $event) || (q_r8.referenceAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 65);
    \u0275\u0275text(16, "Note maximale *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_div_40_div_6_Template_input_ngModelChange_17_listener($event) {
      const q_r8 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(q_r8.maxScore, $event) || (q_r8.maxScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Question ", i_r7 + 1, "");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", q_r8.questionText);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r8.referenceAnswer);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", q_r8.maxScore);
  }
}
function ExamCreateComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 51)(2, "button", 52);
    \u0275\u0275listener("click", function ExamCreateComponent_div_40_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addQuestion());
    });
    \u0275\u0275element(3, "i", 53);
    \u0275\u0275text(4, "Ajouter une question ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ExamCreateComponent_div_40_div_5_Template, 4, 0, "div", 54)(6, ExamCreateComponent_div_40_div_6_Template, 18, 4, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.questions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.questions);
  }
}
function ExamCreateComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Note totale : ", ctx_r2.totalScore, " pts ");
  }
}
function ExamCreateComponent_div_42_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.examFile.name, " ");
  }
}
function ExamCreateComponent_div_42_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.correctionFile.name, " ");
  }
}
function ExamCreateComponent_div_42_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 14);
    \u0275\u0275text(2, "Correction du cas pratique (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 72);
    \u0275\u0275listener("change", function ExamCreateComponent_div_42_div_9_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCorrectionFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ExamCreateComponent_div_42_div_9_div_4_Template, 3, 1, "div", 73);
    \u0275\u0275elementStart(5, "small", 76);
    \u0275\u0275text(6, "Si aucun fichier de correction n'est fourni, le syst\xE8me r\xE9utilise le document import\xE9 comme source de r\xE9f\xE9rence.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.correctionFile);
  }
}
function ExamCreateComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 70);
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275text(3, " Importez d'abord le document .docx de l'examen. Si le corrig\xE9 du cas pratique est dans un fichier s\xE9par\xE9, importez-le ensuite. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "label", 14);
    \u0275\u0275text(6, "Document .docx de l'examen *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 72);
    \u0275\u0275listener("change", function ExamCreateComponent_div_42_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onExamFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ExamCreateComponent_div_42_div_8_Template, 3, 1, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ExamCreateComponent_div_42_div_9_Template, 7, 1, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.examFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.examFile);
  }
}
function ExamCreateComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 77);
  }
}
function ExamCreateComponent_i_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function ExamCreateComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.studentParseError, " ");
  }
}
function ExamCreateComponent_div_68_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_div_68_tr_20_Template_input_ngModelChange_4_listener($event) {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(s_r14.name, $event) || (s_r14.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_div_68_tr_20_Template_input_ngModelChange_6_listener($event) {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(s_r14.email, $event) || (s_r14.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "button", 95);
    \u0275\u0275listener("click", function ExamCreateComponent_div_68_tr_20_Template_button_click_8_listener() {
      const i_r15 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeStudent(i_r15));
    });
    \u0275\u0275element(9, "i", 96);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r14.email);
  }
}
function ExamCreateComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 81)(2, "span", 82);
    \u0275\u0275element(3, "i", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 83);
    \u0275\u0275listener("click", function ExamCreateComponent_div_68_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearStudents());
    });
    \u0275\u0275element(6, "i", 84);
    \u0275\u0275text(7, "Effacer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 85)(9, "table", 86)(10, "thead", 87)(11, "tr")(12, "th", 88);
    \u0275\u0275text(13, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Nom complet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, ExamCreateComponent_div_68_tr_20_Template, 10, 3, "tr", 90);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 91);
    \u0275\u0275listener("click", function ExamCreateComponent_div_68_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addStudentRow());
    });
    \u0275\u0275element(22, "i", 53);
    \u0275\u0275text(23, "Ajouter manuellement ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.students.length, " \xE9tudiant(s) d\xE9tect\xE9(s) ");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.students);
  }
}
function ExamCreateComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "i", 98);
    \u0275\u0275elementStart(2, "p", 99);
    \u0275\u0275text(3, "Importez un fichier ou t\xE9l\xE9chargez le mod\xE8le Excel pour commencer");
    \u0275\u0275elementEnd()();
  }
}
function ExamCreateComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 100);
  }
}
function ExamCreateComponent_i_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 101);
  }
}
var ExamCreateComponent = class _ExamCreateComponent {
  constructor(examService, router, http) {
    this.examService = examService;
    this.router = router;
    this.http = http;
    this.title = "";
    this.description = "";
    this.estimatedDurationMinutes = 60;
    this.questions = [];
    this.mode = "manual";
    this.examFile = null;
    this.correctionFile = null;
    this.loading = false;
    this.success = false;
    this.error = "";
    this.students = [];
    this.studentFile = null;
    this.studentParsing = false;
    this.studentParseError = "";
  }
  get totalScore() {
    return this.questions.reduce((s, q) => s + (q.maxScore || 0), 0);
  }
  addQuestion() {
    this.questions.push({ questionText: "", referenceAnswer: "", maxScore: 10 });
  }
  removeQuestion(i) {
    this.questions.splice(i, 1);
  }
  onExamFileSelected(e) {
    this.examFile = e.target.files?.[0] || null;
  }
  onCorrectionFileSelected(e) {
    this.correctionFile = e.target.files?.[0] || null;
  }
  // ── Student list ──────────────────────────────────────────────────────
  onStudentFileSelected(e) {
    const input = e.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.studentFile = file;
    this.studentParsing = true;
    this.studentParseError = "";
    const fd = new FormData();
    fd.append("file", file);
    this.http.post("/api/teacher/exams/parse-students", fd).subscribe({
      next: (res) => {
        this.students = res.students || [];
        this.studentParsing = false;
        if (!this.students.length)
          this.studentParseError = "Aucun \xE9tudiant d\xE9tect\xE9 dans ce fichier.";
      },
      error: (err) => {
        this.studentParsing = false;
        this.studentParseError = err.error?.error || err.error?.message || "Erreur lors de la lecture du fichier.";
      }
    });
  }
  clearStudents() {
    this.students = [];
    this.studentFile = null;
    this.studentParseError = "";
  }
  removeStudent(i) {
    this.students.splice(i, 1);
  }
  addStudentRow() {
    this.students.push({ name: "", email: "" });
  }
  isValid() {
    if (!this.title.trim() || this.students.length === 0)
      return false;
    if (!this.estimatedDurationMinutes || this.estimatedDurationMinutes <= 0)
      return false;
    if (this.mode === "manual") {
      return this.questions.length > 0 && this.questions.every((q) => q.questionText.trim() && q.referenceAnswer.trim() && q.maxScore > 0);
    }
    return !!this.examFile;
  }
  submit() {
    if (!this.isValid())
      return;
    this.loading = true;
    this.error = "";
    const csvContent = "Nom,Email\n" + this.students.map((s) => `${s.name},${s.email}`).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const file = new File([blob], "etudiants.csv", { type: "text/csv" });
    const questions = this.mode === "manual" ? this.questions : [];
    const examFile = this.mode === "upload" ? this.examFile : void 0;
    const correctionFile = this.mode === "upload" ? this.correctionFile : void 0;
    this.examService.createExam({ title: this.title, description: this.description, estimatedDurationMinutes: this.estimatedDurationMinutes, questions }, file, examFile, correctionFile).subscribe({
      next: () => {
        this.success = true;
        setTimeout(() => this.router.navigate(["/teacher/exams"]), 1500);
      },
      error: (e) => {
        this.error = e?.error?.message || "Erreur lors de la cr\xE9ation";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ExamCreateComponent_Factory(t) {
      return new (t || _ExamCreateComponent)(\u0275\u0275directiveInject(ExamService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamCreateComponent, selectors: [["app-exam-create"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 77, vars: 26, consts: [["studentInput", ""], [1, "container-fluid", "p-4", "fade-in-up", 2, "max-width", "900px"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/teacher/exams", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0", "small"], ["class", "alert alert-success alert-dismissible", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px"], [1, "card-header", "bg-white", "fw-semibold", "py-3", 2, "border-radius", "16px 16px 0 0"], [1, "bi", "bi-info-circle", "me-2", "text-primary"], [1, "card-body"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "placeholder", "Ex: Examen de mi-semestre - Module Java", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Instructions pour les \xE9tudiants...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "form-control", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "card-header", "bg-white", "py-3", 2, "border-radius", "16px 16px 0 0"], [1, "fw-semibold"], [1, "bi", "bi-question-circle", "me-2", "text-primary"], ["role", "group", 1, "btn-group", "btn-group-sm", "ms-3"], ["type", "button", 1, "btn", 3, "click"], ["class", "card-body", 4, "ngIf"], ["class", "card-footer bg-light text-end small text-muted", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px", "border", "2px dashed #c7d2fe!important"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px", "background", "#ede9fe", "color", "#6366f1", "font-size", "1.3rem"], [1, "flex-grow-1"], [1, "d-flex", "gap-2", "flex-shrink-0"], ["href", "/api/teacher/exams/student-template", "download", "modele_etudiants.xlsx", 1, "btn", "btn-outline-secondary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap"], [1, "bi", "bi-download", "me-1"], [1, "btn", "btn-outline-primary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-upload me-1", 4, "ngIf"], ["type", "file", "accept", ".xlsx,.xls,.pdf,.docx,.doc", 2, "display", "none", 3, "change"], ["class", "alert alert-danger py-2 mb-2", 4, "ngIf"], [4, "ngIf"], ["class", "text-center py-3 text-muted", "style", "font-size:.88rem", 4, "ngIf"], [1, "d-flex", "gap-3", "justify-content-end"], ["routerLink", "/teacher/exams", 1, "btn", "btn-outline-secondary"], [1, "btn", "btn-primary", "px-4", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-floppy me-2", 4, "ngIf"], [1, "alert", "alert-success", "alert-dismissible"], [1, "bi", "bi-check-circle", "me-2"], [1, "btn-close", 3, "click"], [1, "alert", "alert-danger", "alert-dismissible"], [1, "bi", "bi-exclamation-circle", "me-2"], [1, "d-flex", "justify-content-end", "mb-2"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-plus", "me-1"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "border rounded p-3 mb-3", 4, "ngFor", "ngForOf"], [1, "text-center", "py-4", "text-muted"], [1, "bi", "bi-question-square", 2, "font-size", "2rem"], [1, "mt-2"], [1, "border", "rounded", "p-3", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold", "text-primary"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "mb-2"], [1, "form-label", "small", "fw-semibold"], ["rows", "2", "placeholder", "Ex: Expliquez le principe d'encapsulation en POO", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "R\xE9ponse mod\xE8le attendue...", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "form-control", "form-control-sm", 2, "max-width", "120px", 3, "ngModelChange", "ngModel"], [1, "card-footer", "bg-light", "text-end", "small", "text-muted"], [1, "alert", "alert-info", "small", "mb-3"], [1, "bi", "bi-info-circle", "me-1"], ["type", "file", "accept", ".pdf,.docx,.doc", 1, "form-control", 3, "change"], ["class", "text-success small mt-1", 4, "ngIf"], [1, "text-success", "small", "mt-1"], [1, "bi", "bi-check-circle", "me-1"], [1, "text-muted", "d-block", "mt-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-upload", "me-1"], [1, "alert", "alert-danger", "py-2", "mb-2"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "badge", "rounded-pill", "bg-success"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x", "me-1"], [2, "max-height", "260px", "overflow-y", "auto", "border", "1px solid #e5e7eb", "border-radius", "10px"], [1, "table", "table-sm", "table-hover", "mb-0"], [1, "table-light", "sticky-top"], [2, "width", "40px"], [2, "width", "50px"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-secondary", "mt-2", 3, "click"], [1, "text-muted", "small"], [1, "form-control", "form-control-sm", "border-0", "bg-transparent", "p-0", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], [1, "form-control", "form-control-sm", "border-0", "bg-transparent", "p-0", "text-muted", 2, "min-width", "160px", 3, "ngModelChange", "ngModel"], ["title", "Retirer cet \xE9tudiant", 1, "btn", "btn-link", "btn-sm", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-x-circle"], [1, "text-center", "py-3", "text-muted", 2, "font-size", ".88rem"], [1, "bi", "bi-upload", 2, "font-size", "1.8rem", "opacity", ".4"], [1, "mt-2", "mb-0"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-floppy", "me-2"]], template: function ExamCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h2", 5);
        \u0275\u0275text(6, "Cr\xE9er un examen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Configurez les questions et importez la liste des \xE9tudiants");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, ExamCreateComponent_div_9_Template, 4, 0, "div", 7)(10, ExamCreateComponent_div_10_Template, 4, 1, "div", 8);
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275element(13, "i", 11);
        \u0275\u0275text(14, "Informations g\xE9n\xE9rales ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "label", 14);
        \u0275\u0275text(18, "Titre de l'examen *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "label", 14);
        \u0275\u0275text(22, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "textarea", 16);
        \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_Template_textarea_ngModelChange_23_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div")(25, "label", 14);
        \u0275\u0275text(26, "Dur\xE9e estim\xE9e (minutes) *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function ExamCreateComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.estimatedDurationMinutes, $event) || (ctx.estimatedDurationMinutes = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "small", 18);
        \u0275\u0275text(29, " Utilis\xE9e pour bloquer temporairement un \xE9tudiant exclu pour violation des r\xE8gles anti-triche (il ne pourra se reconnecter et voir son r\xE9sultat qu'une fois ce temps \xE9coul\xE9). ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 9)(31, "div", 19)(32, "span", 20);
        \u0275\u0275element(33, "i", 21);
        \u0275\u0275text(34, "Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 22)(36, "button", 23);
        \u0275\u0275listener("click", function ExamCreateComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mode = "manual");
        });
        \u0275\u0275text(37, "Saisie manuelle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 23);
        \u0275\u0275listener("click", function ExamCreateComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.mode = "upload");
        });
        \u0275\u0275text(39, "Importer document + correction");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(40, ExamCreateComponent_div_40_Template, 7, 2, "div", 24)(41, ExamCreateComponent_div_41_Template, 2, 1, "div", 25)(42, ExamCreateComponent_div_42_Template, 10, 2, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29);
        \u0275\u0275text(47, " \u{1F465} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 30)(49, "h6", 5);
        \u0275\u0275text(50, "Liste des \xE9tudiants *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 6);
        \u0275\u0275text(52, " Excel (.xlsx) \u2014 col. A = Nom, col. B = Email, ligne 1 ignor\xE9e");
        \u0275\u0275element(53, "br");
        \u0275\u0275text(54, " Ou PDF / Word avec une ligne par \xE9tudiant : ");
        \u0275\u0275elementStart(55, "em");
        \u0275\u0275text(56, "Nom Email");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 31)(58, "a", 32);
        \u0275\u0275element(59, "i", 33);
        \u0275\u0275text(60, "Mod\xE8le Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "button", 34);
        \u0275\u0275listener("click", function ExamCreateComponent_Template_button_click_61_listener() {
          \u0275\u0275restoreView(_r1);
          const studentInput_r11 = \u0275\u0275reference(66);
          return \u0275\u0275resetView(studentInput_r11.click());
        });
        \u0275\u0275template(62, ExamCreateComponent_span_62_Template, 1, 0, "span", 35)(63, ExamCreateComponent_i_63_Template, 1, 0, "i", 36);
        \u0275\u0275text(64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "input", 37, 0);
        \u0275\u0275listener("change", function ExamCreateComponent_Template_input_change_65_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onStudentFileSelected($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(67, ExamCreateComponent_div_67_Template, 3, 1, "div", 38)(68, ExamCreateComponent_div_68_Template, 24, 2, "div", 39)(69, ExamCreateComponent_div_69_Template, 4, 0, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 41)(71, "a", 42);
        \u0275\u0275text(72, "Annuler");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "button", 43);
        \u0275\u0275listener("click", function ExamCreateComponent_Template_button_click_73_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submit());
        });
        \u0275\u0275template(74, ExamCreateComponent_span_74_Template, 1, 0, "span", 44)(75, ExamCreateComponent_i_75_Template, 1, 0, "i", 45);
        \u0275\u0275text(76, " {{ loading ? 'Cr\xE9ation...' : 'Cr\xE9er l'examen' }} ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.estimatedDurationMinutes);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("btn-primary", ctx.mode === "manual")("btn-outline-primary", ctx.mode !== "manual");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.mode === "upload")("btn-outline-primary", ctx.mode !== "upload");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.mode === "manual");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "manual" && ctx.questions.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "upload");
        \u0275\u0275advance(19);
        \u0275\u0275property("disabled", ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.studentParsing ? "Lecture..." : "Importer un fichier", " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.studentParseError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.students.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.students.length === 0 && !ctx.studentParsing && !ctx.studentParseError);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading || !ctx.isValid());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamCreateComponent, { className: "ExamCreateComponent" });
})();
export {
  ExamCreateComponent
};
//# sourceMappingURL=chunk-247J6KHQ.js.map

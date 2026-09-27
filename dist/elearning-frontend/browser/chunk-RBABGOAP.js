import {
  ExamService
} from "./chunk-ITWKVGS7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EWJBTFX2.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  ActivatedRoute,
  CommonModule,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/features/admin/exam-detail/exam-detail.component.ts
function ExamDetailComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 15);
    \u0275\u0275listener("click", function ExamDetailComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadReport());
    });
    \u0275\u0275element(4, "i", 16);
    \u0275\u0275text(5, "T\xE9l\xE9charger le rapport ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getStatusClass(ctx_r1.exam.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.exam.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.exam.status === "DRAFT");
  }
}
function ExamDetailComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Q", q_r4.orderIndex, ". ", q_r4.questionText, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r4.maxScore, " pts");
  }
}
function ExamDetailComponent_div_11_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function ExamDetailComponent_div_11_i_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
  }
}
function ExamDetailComponent_div_11_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.addStudentError, " ");
  }
}
function ExamDetailComponent_div_11_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.addStudentSuccess, " ");
  }
}
function ExamDetailComponent_div_11_div_62_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function ExamDetailComponent_div_11_div_62_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 76);
  }
}
function ExamDetailComponent_div_11_div_62_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ExamDetailComponent_div_11_div_62_tr_23_Template_input_ngModelChange_4_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(s_r8.name, $event) || (s_r8.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ExamDetailComponent_div_11_div_62_tr_23_Template_input_ngModelChange_6_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(s_r8.email, $event) || (s_r8.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "button", 79);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_div_62_tr_23_Template_button_click_8_listener() {
      const i_r9 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addStudentPreview.splice(i_r9, 1));
    });
    \u0275\u0275element(9, "i", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r8.email);
  }
}
function ExamDetailComponent_div_11_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "button", 70);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_div_62_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addStudentPreview = []);
    });
    \u0275\u0275text(6, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 71);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_div_62_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAddStudents());
    });
    \u0275\u0275template(8, ExamDetailComponent_div_11_div_62_span_8_Template, 1, 0, "span", 45)(9, ExamDetailComponent_div_11_div_62_i_9_Template, 1, 0, "i", 72);
    \u0275\u0275text(10, " {{ addStudentSaving ? 'Ajout...' : 'Confirmer l'ajout' }} ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 73)(12, "table", 74)(13, "thead", 75)(14, "tr")(15, "th");
    \u0275\u0275text(16, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, ExamDetailComponent_div_11_div_62_tr_23_Template, 10, 3, "tr", 56);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.addStudentPreview.length, " \xE0 ajouter");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.addStudentSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addStudentSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.addStudentSaving);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.addStudentPreview);
  }
}
function ExamDetailComponent_div_11_tr_87_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2, "Scann\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2, "En ligne ");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, s_r11.totalScore, "1.1-1"), " / ", \u0275\u0275pipeBind2(3, 5, s_r11.maxScore, "1.1-1"), " ");
  }
}
function ExamDetailComponent_div_11_tr_87_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(s_r11.percentage >= 50 ? "text-success fw-semibold" : "text-danger fw-semibold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, s_r11.percentage, "1.1-1"), "% ");
  }
}
function ExamDetailComponent_div_11_tr_87_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function ExamDetailComponent_div_11_tr_87_i_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 62);
  }
}
function ExamDetailComponent_div_11_tr_87_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_tr_87_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const s_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openComparison(s_r11));
    });
    \u0275\u0275element(1, "i", 97);
    \u0275\u0275text(2, "Comparer ");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_tr_87_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const s_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleReport(s_r11));
    });
    \u0275\u0275element(1, "i", 99);
    \u0275\u0275text(2, "Rapport ");
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_11_tr_87_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.uploadErrorMessage);
  }
}
function ExamDetailComponent_div_11_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 81);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, ExamDetailComponent_div_11_tr_87_span_9_Template, 3, 0, "span", 82)(10, ExamDetailComponent_div_11_tr_87_span_10_Template, 3, 0, "span", 83)(11, ExamDetailComponent_div_11_tr_87_span_11_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ExamDetailComponent_div_11_tr_87_span_13_Template, 4, 8, "span", 11)(14, ExamDetailComponent_div_11_tr_87_span_14_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, ExamDetailComponent_div_11_tr_87_span_16_Template, 4, 6, "span", 11)(17, ExamDetailComponent_div_11_tr_87_span_17_Template, 2, 0, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "div", 85)(20, "input", 86, 1);
    \u0275\u0275listener("change", function ExamDetailComponent_div_11_tr_87_Template_input_change_20_listener($event) {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFilesSelected($event, s_r11));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 87);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_tr_87_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r10);
      const fileInput_r12 = \u0275\u0275reference(21);
      return \u0275\u0275resetView(fileInput_r12.click());
    });
    \u0275\u0275template(23, ExamDetailComponent_div_11_tr_87_span_23_Template, 1, 0, "span", 45)(24, ExamDetailComponent_div_11_tr_87_i_24_Template, 1, 0, "i", 46);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ExamDetailComponent_div_11_tr_87_button_26_Template, 3, 0, "button", 88)(27, ExamDetailComponent_div_11_tr_87_button_27_Template, 3, 0, "button", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ExamDetailComponent_div_11_tr_87_div_28_Template, 2, 1, "div", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.studentEmail);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getStudentStatusClass(s_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStudentStatusLabel(s_r11.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r11.submissionType === "SCANNED_COPY");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.submissionType === "ONLINE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !s_r11.submissionType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r11.totalScore !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.totalScore === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r11.percentage !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.percentage === null);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.uploadingId === s_r11.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadingId === s_r11.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadingId !== s_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadingId === s_r11.id ? "Analyse..." : s_r11.submissionType === "SCANNED_COPY" ? "R\xE9importer" : "Importer copie", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.status === "SUBMITTED" || s_r11.status === "GRADED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r11.aiReport);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadError === s_r11.id);
  }
}
function ExamDetailComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7, "Questions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 20)(9, "div", 21)(10, "div", 24);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 23);
    \u0275\u0275text(13, "\xC9tudiants inscrits");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 20)(15, "div", 21)(16, "div", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275text(19, "Soumissions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 20)(21, "div", 21)(22, "div", 26);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 23);
    \u0275\u0275text(25, "Corrig\xE9s");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 27)(27, "div", 28);
    \u0275\u0275element(28, "i", 29);
    \u0275\u0275text(29, "Questions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 30)(31, "div", 31);
    \u0275\u0275template(32, ExamDetailComponent_div_11_div_32_Template, 6, 3, "div", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 27)(34, "div", 33);
    \u0275\u0275element(35, "i", 34);
    \u0275\u0275text(36, "Copies scann\xE9es apr\xE8s l'examen ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 35)(38, "p", 36);
    \u0275\u0275text(39, " Pour chaque \xE9tudiant, importez une ou plusieurs photos (ou un PDF) de sa copie papier. L'IA lit l'\xE9criture manuscrite, retrouve la r\xE9ponse de chaque question, la compare au corrig\xE9 du professeur et attribue automatiquement une note et un commentaire. Si l'\xE9criture est floue, l'IA fait de son mieux pour la d\xE9chiffrer et le signale si besoin. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 37)(41, "div", 38)(42, "div", 39)(43, "div", 40);
    \u0275\u0275text(44, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 6)(46, "h6", 7);
    \u0275\u0275text(47, "Ajouter des \xE9tudiants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 8);
    \u0275\u0275text(49, "Excel (.xlsx), PDF ou Word (.docx) \u2014 col. A = Nom, col. B = Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 41)(51, "a", 42);
    \u0275\u0275element(52, "i", 43);
    \u0275\u0275text(53, "Mod\xE8le Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 44);
    \u0275\u0275listener("click", function ExamDetailComponent_div_11_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const addStudentInput_r5 = \u0275\u0275reference(59);
      return \u0275\u0275resetView(addStudentInput_r5.click());
    });
    \u0275\u0275template(55, ExamDetailComponent_div_11_span_55_Template, 1, 0, "span", 45)(56, ExamDetailComponent_div_11_i_56_Template, 1, 0, "i", 46);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 47, 0);
    \u0275\u0275listener("change", function ExamDetailComponent_div_11_Template_input_change_58_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddStudentFile($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(60, ExamDetailComponent_div_11_div_60_Template, 3, 1, "div", 48)(61, ExamDetailComponent_div_11_div_61_Template, 3, 1, "div", 49)(62, ExamDetailComponent_div_11_div_62_Template, 24, 5, "div", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 51)(64, "div", 28);
    \u0275\u0275element(65, "i", 52);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 30)(68, "div", 53)(69, "table", 54)(70, "thead", 55)(71, "tr")(72, "th");
    \u0275\u0275text(73, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Copie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th");
    \u0275\u0275text(83, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "th");
    \u0275\u0275text(85, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "tbody");
    \u0275\u0275template(87, ExamDetailComponent_div_11_tr_87_Template, 29, 18, "tr", 56);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.exam.questionCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.exam.studentCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.submittedCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.gradedCount);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.exam.questions);
    \u0275\u0275advance(22);
    \u0275\u0275property("disabled", ctx_r1.addStudentParsing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addStudentParsing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.addStudentParsing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addStudentParsing ? "Lecture..." : "Importer un fichier", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.addStudentError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addStudentSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addStudentPreview.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("R\xE9sultats des \xE9tudiants (", ctx_r1.exam.studentCount, ") ");
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", ctx_r1.exam.students);
  }
}
function ExamDetailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 103)(3, "div", 104)(4, "h5", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 106);
    \u0275\u0275listener("click", function ExamDetailComponent_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.expandedStudent = null);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 107)(8, "pre", 108);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Rapport IA - ", ctx_r1.expandedStudent.studentName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.expandedStudent.aiReport);
  }
}
function ExamDetailComponent_div_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.comparisonDetail.totalScore, "1.1-1"), " / ", \u0275\u0275pipeBind2(3, 5, ctx_r1.comparisonDetail.maxScore, "1.1-1"), " ");
  }
}
function ExamDetailComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ExamDetailComponent_div_13_div_10_div_1_div_5_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 126);
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const url_r18 = ctx_r16.$implicit;
    const i_r19 = ctx_r16.index;
    \u0275\u0275property("src", url_r18, \u0275\u0275sanitizeUrl)("alt", "Page " + (i_r19 + 1));
  }
}
function ExamDetailComponent_div_13_div_10_div_1_div_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 127);
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r16 = \u0275\u0275nextContext();
    const url_r18 = ctx_r16.$implicit;
    const i_r19 = ctx_r16.index;
    \u0275\u0275property("href", url_r18, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Voir le PDF (page ", i_r19 + 1, ") ");
  }
}
function ExamDetailComponent_div_13_div_10_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275template(1, ExamDetailComponent_div_13_div_10_div_1_div_5_img_1_Template, 1, 2, "img", 124)(2, ExamDetailComponent_div_13_div_10_div_1_div_5_a_2_Template, 3, 2, "a", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPdf(url_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPdf(url_r18));
  }
}
function ExamDetailComponent_div_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "h6", 115);
    \u0275\u0275element(2, "i", 92);
    \u0275\u0275text(3, "Copie scann\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 121);
    \u0275\u0275template(5, ExamDetailComponent_div_13_div_10_div_1_div_5_Template, 3, 2, "div", 122);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.comparisonDetail.scannedFileUrls);
  }
}
function ExamDetailComponent_div_13_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.comparisonDetail.aiReport, " ");
  }
}
function ExamDetailComponent_div_13_div_10_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "span", 59);
    \u0275\u0275text(2, "Commentaire IA :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r20.aiComment, " ");
  }
}
function ExamDetailComponent_div_13_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "span", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 132)(8, "div", 133)(9, "div", 134);
    \u0275\u0275text(10, "R\xE9ponse \xE9crite par l'\xE9l\xE8ve (lue par l'IA)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 135);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 133)(14, "div", 134);
    \u0275\u0275text(15, "R\xE9ponse de r\xE9f\xE9rence du professeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 135);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, ExamDetailComponent_div_13_div_10_div_8_div_18_Template, 4, 1, "div", 136);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r20 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Q", a_r20.orderIndex, ". ", a_r20.questionText, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", a_r20.obtainedScore !== null ? \u0275\u0275pipeBind2(6, 7, a_r20.obtainedScore, "1.1-1") : "-", " / ", a_r20.maxScore, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r20.studentAnswer || "(aucune r\xE9ponse d\xE9tect\xE9e)");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r20.referenceAnswer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r20.aiComment);
  }
}
function ExamDetailComponent_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275template(1, ExamDetailComponent_div_13_div_10_div_1_Template, 6, 1, "div", 114);
    \u0275\u0275elementStart(2, "div")(3, "h6", 115);
    \u0275\u0275element(4, "i", 116);
    \u0275\u0275text(5, "Comparaison r\xE9ponse / corrig\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ExamDetailComponent_div_13_div_10_div_6_Template, 2, 1, "div", 117);
    \u0275\u0275elementStart(7, "div", 118);
    \u0275\u0275template(8, ExamDetailComponent_div_13_div_10_div_8_Template, 19, 10, "div", 119);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.comparisonDetail.scannedFileUrls == null ? null : ctx_r1.comparisonDetail.scannedFileUrls.length);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.comparisonDetail.scannedFileUrls.length ? "col-lg-7" : "col-12");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.comparisonDetail.aiReport);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.comparisonDetail.answers);
  }
}
function ExamDetailComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 109)(2, "div", 103)(3, "div", 104)(4, "h5", 105);
    \u0275\u0275text(5);
    \u0275\u0275template(6, ExamDetailComponent_div_13_span_6_Template, 4, 8, "span", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 106);
    \u0275\u0275listener("click", function ExamDetailComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeComparison());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 107);
    \u0275\u0275template(9, ExamDetailComponent_div_13_div_9_Template, 2, 0, "div", 10)(10, ExamDetailComponent_div_13_div_10_Template, 9, 5, "div", 111);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Comparaison de la copie - ", ctx_r1.comparisonStudent.studentName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.comparisonDetail == null ? null : ctx_r1.comparisonDetail.totalScore) !== null && ctx_r1.comparisonDetail);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.comparisonLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.comparisonLoading && ctx_r1.comparisonDetail);
  }
}
var ExamDetailComponent = class _ExamDetailComponent {
  constructor(route, examService, authService, http) {
    this.route = route;
    this.examService = examService;
    this.authService = authService;
    this.http = http;
    this.exam = null;
    this.loading = true;
    this.expandedStudent = null;
    this.uploadingId = null;
    this.uploadError = null;
    this.uploadErrorMessage = "";
    this.comparisonStudent = null;
    this.comparisonDetail = null;
    this.comparisonLoading = false;
    this.addStudentPreview = [];
    this.addStudentParsing = false;
    this.addStudentSaving = false;
    this.addStudentError = "";
    this.addStudentSuccess = "";
  }
  ngOnInit() {
    this.loadExam();
  }
  loadExam() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.examService.getExamById(id).subscribe({
      next: (r) => {
        this.exam = r.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  get submittedCount() {
    return this.exam?.students.filter((s) => s.status === "SUBMITTED" || s.status === "GRADED").length || 0;
  }
  get gradedCount() {
    return this.exam?.students.filter((s) => s.status === "GRADED").length || 0;
  }
  toggleReport(student) {
    this.expandedStudent = this.expandedStudent?.id === student.id ? null : student;
  }
  onFilesSelected(event, student) {
    const input = event.target;
    const files = input.files ? Array.from(input.files) : [];
    if (!files.length || !this.exam) {
      return;
    }
    this.uploadingId = student.id;
    this.uploadError = null;
    this.examService.uploadScannedCopy(this.exam.id, student.id, files).subscribe({
      next: (r) => {
        this.uploadingId = null;
        this.loadExam();
        if (r.data) {
          this.comparisonDetail = r.data;
          this.comparisonStudent = student;
        }
      },
      error: (err) => {
        this.uploadingId = null;
        this.uploadError = student.id;
        this.uploadErrorMessage = err?.error?.message || "Erreur lors de l'analyse de la copie scann\xE9e.";
      }
    });
    input.value = "";
  }
  openComparison(student) {
    if (!this.exam)
      return;
    this.comparisonStudent = student;
    this.comparisonDetail = null;
    this.comparisonLoading = true;
    this.examService.getSubmissionDetail(this.exam.id, student.id).subscribe({
      next: (r) => {
        this.comparisonDetail = r.data;
        this.comparisonLoading = false;
      },
      error: () => {
        this.comparisonLoading = false;
      }
    });
  }
  closeComparison() {
    this.comparisonStudent = null;
    this.comparisonDetail = null;
  }
  isPdf(url) {
    return url.toLowerCase().endsWith(".pdf");
  }
  downloadReport() {
    if (!this.exam)
      return;
    const obs = this.authService.isAdmin ? this.examService.downloadAdminReport(this.exam.id) : this.examService.downloadReport(this.exam.id);
    obs.subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `rapport-examen-${this.exam.id}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  getStatusClass(status) {
    return { DRAFT: "bg-secondary", PUBLISHED: "bg-success", CLOSED: "bg-dark" }[status] || "bg-secondary";
  }
  getStatusLabel(status) {
    return { DRAFT: "Brouillon", PUBLISHED: "Publi\xE9", CLOSED: "Cl\xF4tur\xE9" }[status] || status;
  }
  getStudentStatusClass(status) {
    return { INVITED: "bg-info", STARTED: "bg-warning", SUBMITTED: "bg-primary", GRADED: "bg-success" }[status] || "bg-secondary";
  }
  getStudentStatusLabel(status) {
    return { INVITED: "Invit\xE9", STARTED: "En cours", SUBMITTED: "Soumis", GRADED: "Corrig\xE9" }[status] || status;
  }
  // ── Ajout d'étudiants via fichier ─────────────────────────────────────
  onAddStudentFile(e) {
    const input = e.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.addStudentParsing = true;
    this.addStudentError = "";
    this.addStudentSuccess = "";
    this.addStudentPreview = [];
    const fd = new FormData();
    fd.append("file", file);
    this.http.post("/api/teacher/exams/parse-students", fd).subscribe({
      next: (res) => {
        this.addStudentParsing = false;
        this.addStudentPreview = res.students || [];
        if (!this.addStudentPreview.length)
          this.addStudentError = "Aucun \xE9tudiant d\xE9tect\xE9 dans ce fichier.";
      },
      error: (err) => {
        this.addStudentParsing = false;
        this.addStudentError = err.error?.error || err.error?.message || "Erreur lors de la lecture du fichier.";
      }
    });
  }
  confirmAddStudents() {
    if (!this.exam || !this.addStudentPreview.length)
      return;
    this.addStudentSaving = true;
    this.addStudentError = "";
    const csv = "Nom,Email\n" + this.addStudentPreview.map((s) => `${s.name},${s.email}`).join("\n");
    const fd = new FormData();
    fd.append("file", new File([csv], "etudiants.csv", { type: "text/csv" }));
    this.http.post(`/api/teacher/exams/${this.exam.id}/add-students`, fd).subscribe({
      next: (res) => {
        this.addStudentSaving = false;
        this.addStudentPreview = [];
        this.addStudentSuccess = `${res.message || "\xC9tudiants ajout\xE9s avec succ\xE8s."}`;
        this.loadExam();
        setTimeout(() => this.addStudentSuccess = "", 5e3);
      },
      error: (err) => {
        this.addStudentSaving = false;
        this.addStudentError = err.error?.message || "Erreur lors de l'ajout des \xE9tudiants.";
      }
    });
  }
  static {
    this.\u0275fac = function ExamDetailComponent_Factory(t) {
      return new (t || _ExamDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ExamService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamDetailComponent, selectors: [["app-exam-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [["addStudentInput", ""], ["fileInput", ""], [1, "container-fluid", "p-4"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/teacher/exams", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "flex-grow-1"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0", "small"], ["class", "d-flex gap-2", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], ["class", "modal d-block", "style", "background:rgba(0,0,0,.5)", 4, "ngIf"], [1, "d-flex", "gap-2"], [1, "badge", "fs-6", 3, "ngClass"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-file-earmark-excel", "me-1"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "row", "g-4", "mb-4"], [1, "col-md-3"], [1, "card", "border-0", "shadow-sm", "text-center", "p-3"], [1, "fs-2", "fw-bold", "text-primary"], [1, "text-muted", "small"], [1, "fs-2", "fw-bold", "text-info"], [1, "fs-2", "fw-bold", "text-success"], [1, "fs-2", "fw-bold", "text-warning"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "bg-white", "fw-semibold", "py-3"], [1, "bi", "bi-question-circle", "me-2", "text-primary"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item py-3", 4, "ngFor", "ngForOf"], [1, "card-header", "bg-white", "fw-semibold", "py-3", "d-flex", "align-items-center"], [1, "bi", "bi-camera", "me-2", "text-primary"], [1, "card-body"], [1, "text-muted", "small", "mb-0"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px", "border", "2px dashed #c7d2fe!important"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-center", "gap-3"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px", "background", "#ede9fe", "color", "#6366f1", "font-size", "1.3rem"], [1, "d-flex", "gap-2", "flex-shrink-0"], ["href", "/api/teacher/exams/student-template", "download", "modele_etudiants.xlsx", 1, "btn", "btn-outline-secondary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap"], [1, "bi", "bi-download", "me-1"], [1, "btn", "btn-outline-primary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-upload me-1", 4, "ngIf"], ["type", "file", "accept", ".xlsx,.xls,.pdf,.docx,.doc", 2, "display", "none", 3, "change"], ["class", "alert alert-danger py-2 mt-3 mb-0", 4, "ngIf"], ["class", "alert alert-success py-2 mt-3 mb-0", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "card", "border-0", "shadow-sm"], [1, "bi", "bi-people", "me-2", "text-primary"], [1, "table-responsive"], [1, "table", "table-hover", "mb-0"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "py-3"], [1, "d-flex", "justify-content-between"], [1, "fw-semibold"], [1, "badge", "bg-light", "text-dark", "ms-2", "flex-shrink-0"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-upload", "me-1"], [1, "alert", "alert-danger", "py-2", "mt-3", "mb-0"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "alert", "alert-success", "py-2", "mt-3", "mb-0"], [1, "bi", "bi-check-circle", "me-2"], [1, "mt-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "badge", "rounded-pill", "bg-primary"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "btn", "btn-sm", "fw-semibold", 2, "background", "#6366f1", "color", "white", "border-radius", "8px", 3, "click", "disabled"], ["class", "bi bi-check2 me-1", 4, "ngIf"], [2, "max-height", "200px", "overflow-y", "auto", "border", "1px solid #e5e7eb", "border-radius", "10px"], [1, "table", "table-sm", "table-hover", "mb-0"], [1, "table-light", "sticky-top"], [1, "bi", "bi-check2", "me-1"], [1, "form-control", "form-control-sm", "border-0", "bg-transparent", "p-0", 3, "ngModelChange", "ngModel"], [1, "form-control", "form-control-sm", "border-0", "bg-transparent", "p-0", "text-muted", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-link", "btn-sm", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-x-circle"], [1, "badge", 3, "ngClass"], ["class", "badge bg-purple text-white", "style", "background-color:#6f42c1", 4, "ngIf"], ["class", "badge bg-light text-dark", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-1"], ["type", "file", "multiple", "", "accept", "image/*,.pdf,application/pdf", 1, "d-none", 3, "change"], ["title", "Importer la copie scann\xE9e (photos ou PDF)", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click", "disabled"], ["class", "btn btn-outline-secondary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-info btn-sm", 3, "click", 4, "ngIf"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "badge", "bg-purple", "text-white", 2, "background-color", "#6f42c1"], [1, "bi", "bi-camera", "me-1"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-laptop", "me-1"], [1, "text-muted"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-search", "me-1"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "bi", "bi-eye", "me-1"], [1, "text-danger", "small", "mt-1"], [1, "modal", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "btn-close", 3, "click"], [1, "modal-body"], [2, "white-space", "pre-wrap", "font-family", "Arial,sans-serif"], [1, "modal-dialog", "modal-xl"], ["class", "badge bg-primary ms-2", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "badge", "bg-primary", "ms-2"], [1, "row", "g-3"], ["class", "col-lg-5", 4, "ngIf"], [1, "fw-semibold", "mb-2"], [1, "bi", "bi-list-check", "me-1"], ["class", "alert alert-info py-2 small", 4, "ngIf"], [1, "d-flex", "flex-column", "gap-3", 2, "max-height", "70vh", "overflow-y", "auto"], ["class", "border rounded p-3", 4, "ngFor", "ngForOf"], [1, "col-lg-5"], [1, "d-flex", "flex-column", "gap-2", 2, "max-height", "75vh", "overflow-y", "auto"], ["class", "border rounded p-1", 4, "ngFor", "ngForOf"], [1, "border", "rounded", "p-1"], ["class", "img-fluid w-100", 3, "src", "alt", 4, "ngIf"], ["target", "_blank", "class", "btn btn-outline-secondary btn-sm w-100", 3, "href", 4, "ngIf"], [1, "img-fluid", "w-100", 3, "src", "alt"], ["target", "_blank", 1, "btn", "btn-outline-secondary", "btn-sm", "w-100", 3, "href"], [1, "bi", "bi-file-earmark-pdf", "me-1"], [1, "alert", "alert-info", "py-2", "small"], [1, "border", "rounded", "p-3"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "row", "g-2"], [1, "col-md-6"], [1, "small", "text-muted", "mb-1"], [1, "p-2", "bg-light", "rounded", "small", 2, "white-space", "pre-wrap"], ["class", "small mt-2", 4, "ngIf"], [1, "small", "mt-2"]], template: function ExamDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
        \u0275\u0275element(3, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 6)(5, "h2", 7);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 8);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ExamDetailComponent_div_9_Template, 6, 3, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ExamDetailComponent_div_10_Template, 2, 0, "div", 10)(11, ExamDetailComponent_div_11_Template, 88, 14, "div", 11)(12, ExamDetailComponent_div_12_Template, 10, 2, "div", 12)(13, ExamDetailComponent_div_13_Template, 11, 4, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate((ctx.exam == null ? null : ctx.exam.title) || "Chargement...");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.exam == null ? null : ctx.exam.professorName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.exam);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.exam);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.expandedStudent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.comparisonStudent);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamDetailComponent, { className: "ExamDetailComponent" });
})();
export {
  ExamDetailComponent
};
//# sourceMappingURL=chunk-RBABGOAP.js.map

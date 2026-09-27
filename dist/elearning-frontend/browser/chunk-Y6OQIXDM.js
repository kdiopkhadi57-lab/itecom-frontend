import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/qcm/qcm-resultats.component.ts
function QcmResultatsComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function QcmResultatsComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function QcmResultatsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementEnd();
  }
}
function QcmResultatsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 19);
    \u0275\u0275text(4, "Aucune soumission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6, "Les \xE9tudiants n'ont pas encore pass\xE9 ce devoir.");
    \u0275\u0275elementEnd()();
  }
}
function QcmResultatsComponent_div_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Niveau ", r_r2.studentLevel, "");
  }
}
function QcmResultatsComponent_div_16_div_24_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, "Voir la copie papier ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", r_r2.paperCorrectionUrl, \u0275\u0275sanitizeUrl);
  }
}
function QcmResultatsComponent_div_16_div_24_div_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(4).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.manualCorrectionNote);
  }
}
function QcmResultatsComponent_div_16_div_24_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 29)(2, "span", 20);
    \u0275\u0275text(3, "Note corrig\xE9e :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QcmResultatsComponent_div_16_div_24_div_8_div_1_span_6_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function QcmResultatsComponent_div_16_div_24_div_8_div_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const r_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.startEditing(r_r2));
    });
    \u0275\u0275element(8, "i", 53);
    \u0275\u0275text(9, "Modifier ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const r_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", (tmp_6_0 = (tmp_6_0 = r_r2.manualScore) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : r_r2.score) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : "\u2014", " / ", r_r2.maxScore, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.manualCorrectionNote);
  }
}
function QcmResultatsComponent_div_16_div_24_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div")(2, "label", 56);
    \u0275\u0275text(3, "Note");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 57, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 56);
    \u0275\u0275text(8, "Observation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 58, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 59);
    \u0275\u0275listener("click", function QcmResultatsComponent_div_16_div_24_div_8_div_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const scoreInput_r6 = \u0275\u0275reference(5);
      const noteInput_r7 = \u0275\u0275reference(10);
      const r_r2 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveGrade(r_r2, scoreInput_r6.value, noteInput_r7.value));
    });
    \u0275\u0275element(12, "i", 60);
    \u0275\u0275text(13, "Enregistrer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 61);
    \u0275\u0275listener("click", function QcmResultatsComponent_div_16_div_24_div_8_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const r_r2 = \u0275\u0275nextContext(3).$implicit;
      return \u0275\u0275resetView(r_r2._editing = false);
    });
    \u0275\u0275text(15, "Annuler");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const r_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("max", r_r2.maxScore)("value", (tmp_9_0 = (tmp_9_0 = r_r2.manualScore) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : r_r2.score) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", r_r2.manualCorrectionNote || "");
  }
}
function QcmResultatsComponent_div_16_div_24_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, QcmResultatsComponent_div_16_div_24_div_8_div_1_Template, 10, 3, "div", 49)(2, QcmResultatsComponent_div_16_div_24_div_8_div_2_Template, 16, 3, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r2._editing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2._editing);
  }
}
function QcmResultatsComponent_div_16_div_24_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.ocrCorrectionNote);
  }
}
function QcmResultatsComponent_div_16_div_24_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275text(3, "Correction OCR / IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5, "Note automatique : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, QcmResultatsComponent_div_16_div_24_div_9_div_8_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const r_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", (tmp_5_0 = r_r2.ocrScore) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014", " / ", (tmp_5_0 = r_r2.maxScore) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2014", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.ocrCorrectionNote);
  }
}
function QcmResultatsComponent_div_16_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h6", 24);
    \u0275\u0275text(2, "R\xE9ponse r\xE9dig\xE9e de l\u2019\xE9tudiant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r2.documentAnswer);
  }
}
function QcmResultatsComponent_div_16_div_24_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h6", 24);
    \u0275\u0275text(2, "Correction d\xE9pos\xE9e par le professeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r2.correctionText);
  }
}
function QcmResultatsComponent_div_16_div_24_div_12_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, " \u2713 Attendu : ");
    \u0275\u0275elementStart(2, "strong", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rep_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rep_r8.correctChoice);
  }
}
function QcmResultatsComponent_div_16_div_24_div_12_pre_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rep_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rep_r8.textAnswer);
  }
}
function QcmResultatsComponent_div_16_div_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 29)(9, "span", 75);
    \u0275\u0275text(10, " R\xE9ponse : ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, QcmResultatsComponent_div_16_div_24_div_12_span_13_Template, 4, 1, "span", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, QcmResultatsComponent_div_16_div_24_div_12_pre_14_Template, 2, 1, "pre", 77);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rep_r8 = ctx.$implicit;
    const qi_r9 = ctx.index;
    \u0275\u0275styleProp("background", qi_r9 % 2 === 0 ? "#ffffff" : "#fafafa");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", rep_r8.isCorrect ? "#d1fae5" : "#fee2e2")("color", rep_r8.isCorrect ? "#065f46" : "#991b1b");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rep_r8.isCorrect ? "\u2713" : "\u2717", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", rep_r8.questionText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", rep_r8.points, " pt", rep_r8.points > 1 ? "s" : "", ")");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("color", rep_r8.isCorrect ? "#10b981" : "#ef4444");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rep_r8.choiceSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !rep_r8.isCorrect && !rep_r8.textAnswer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rep_r8.textAnswer);
  }
}
function QcmResultatsComponent_div_16_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "div")(3, "div", 39);
    \u0275\u0275text(4, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, QcmResultatsComponent_div_16_div_24_a_7_Template, 3, 1, "a", 41)(8, QcmResultatsComponent_div_16_div_24_div_8_Template, 3, 2, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, QcmResultatsComponent_div_16_div_24_div_9_Template, 9, 3, "div", 43)(10, QcmResultatsComponent_div_16_div_24_div_10_Template, 5, 1, "div", 44)(11, QcmResultatsComponent_div_16_div_24_div_11_Template, 5, 1, "div", 44)(12, QcmResultatsComponent_div_16_div_24_div_12_Template, 15, 15, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", r_r2.status === "SOUMIS" ? "#d1fae5" : "#e5e7eb")("color", r_r2.status === "SOUMIS" ? "#065f46" : "#374151");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.paperCorrectionUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.status === "SOUMIS" && r_r2.passageId && r_r2.maxScore);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.ocrScore != null || r_r2.ocrCorrectionNote);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.documentAnswer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.correctionText);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", r_r2.reponses);
  }
}
function QcmResultatsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275listener("click", function QcmResultatsComponent_div_16_Template_div_click_1_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(r_r2._open = !r_r2._open);
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275template(10, QcmResultatsComponent_div_16_span_10_Template, 2, 1, "span", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 4)(12, "div", 27)(13, "div", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 31);
    \u0275\u0275element(19, "circle", 32)(20, "circle", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, QcmResultatsComponent_div_16_div_24_Template, 13, 11, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const r_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r2.studentName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.studentEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.studentLevel);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r3.getColor(r_r2.score, r_r2.maxScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (tmp_8_0 = r_r2.score) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "\u2014", " / ", (tmp_8_0 = r_r2.maxScore) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.getColor(r_r2.score, r_r2.maxScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", r_r2.percentage, " \xB7 ", ctx_r3.getMention(r_r2.score, r_r2.maxScore), " ");
    \u0275\u0275advance(4);
    \u0275\u0275attribute("stroke", ctx_r3.getColor(r_r2.score, r_r2.maxScore))("stroke-dasharray", ctx_r3.getPct(r_r2.score, r_r2.maxScore) + " 100");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r2.percentage || "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-chevron-down", !r_r2._open)("bi-chevron-up", r_r2._open);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2._open);
  }
}
var QcmResultatsComponent = class _QcmResultatsComponent {
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.results = [];
    this.loading = true;
    this.downloading = false;
  }
  ngOnInit() {
    this.qcmId = +this.route.snapshot.paramMap.get("id");
    this.http.get(`/api/teacher/qcms/${this.qcmId}/resultats`).subscribe({
      next: (d) => {
        this.results = d;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  getPct(score, max) {
    return score != null && max != null && max > 0 ? Math.round(score / max * 100) : 0;
  }
  getColor(score, max) {
    const p = this.getPct(score, max);
    return p >= 80 ? "#10b981" : p >= 60 ? "#3b82f6" : p >= 50 ? "#f59e0b" : "#ef4444";
  }
  getMention(score, max) {
    const p = this.getPct(score, max);
    return p >= 80 ? "Excellent" : p >= 60 ? "Bien" : p >= 50 ? "Passable" : "Insuffisant";
  }
  saveGrade(result, rawScore, note) {
    if (!result.passageId)
      return;
    this.http.patch(`/api/teacher/qcms/${this.qcmId}/passages/${result.passageId}/note`, {
      score: Number(rawScore),
      note
    }).subscribe({
      next: (updated) => {
        Object.assign(result, updated);
        result._editing = false;
      },
      error: () => alert("Impossible d\u2019enregistrer la note.")
    });
  }
  startEditing(result) {
    this.results.forEach((item) => item._editing = false);
    result._editing = true;
  }
  downloadReport() {
    this.downloading = true;
    this.http.get(`/api/teacher/qcms/${this.qcmId}/report`, { responseType: "blob" }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `resultats-qcm-${this.qcmId}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        this.downloading = false;
      },
      error: () => {
        this.downloading = false;
      }
    });
  }
  static {
    this.\u0275fac = function QcmResultatsComponent_Factory(t) {
      return new (t || _QcmResultatsComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmResultatsComponent, selectors: [["app-qcm-resultats"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 7, consts: [["scoreInput", ""], ["noteInput", ""], [1, "fade-in-up"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "mb-4", "flex-wrap"], [1, "d-flex", "align-items-center", "gap-3"], ["routerLink", "/teacher/qcms", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-file-earmark-excel me-1", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "card border-0 shadow-sm mb-3", "style", "border-radius:16px;overflow:hidden", 4, "ngFor", "ngForOf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-file-earmark-excel", "me-1"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "card", "border-0", "shadow-sm", "mb-3", 2, "border-radius", "16px", "overflow", "hidden"], [1, "d-flex", "align-items-center", "justify-content-between", "p-4", 2, "cursor", "pointer", "background", "#fafafa", 3, "click"], [2, "width", "44px", "height", "44px", "border-radius", "50%", "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "display", "flex", "align-items", "center", "justify-content", "center", "color", "white", "font-weight", "700"], [1, "fw-bold"], [1, "text-muted", "small"], [4, "ngIf"], [1, "text-end"], [1, "fw-bold", "fs-5"], [1, "small"], [2, "width", "52px", "height", "52px", "position", "relative"], ["viewBox", "0 0 36 36", 2, "transform", "rotate(-90deg)"], ["cx", "18", "cy", "18", "r", "15", "fill", "none", "stroke", "#e5e7eb", "stroke-width", "3"], ["cx", "18", "cy", "18", "r", "15", "fill", "none", "stroke-width", "3", "stroke-linecap", "round", "stroke-dashoffset", "0"], [2, "position", "absolute", "inset", "0", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", ".65rem", "font-weight", "700"], [1, "bi", 2, "color", "#9ca3af"], ["style", "border-top:1px solid #f0f0f0", 4, "ngIf"], [2, "border-top", "1px solid #f0f0f0"], [1, "p-4", "border-bottom", "d-flex", "align-items-end", "gap-2", "flex-wrap"], [1, "small", "text-muted", "mb-1"], [1, "badge"], ["class", "btn btn-sm btn-outline-primary", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["class", "ms-auto", 4, "ngIf"], ["class", "p-3 border-bottom", "style", "background:#eff6ff", 4, "ngIf"], ["class", "p-4 border-bottom", 4, "ngIf"], ["class", "d-flex align-items-start gap-3 p-3", 3, "background", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-sm", "btn-outline-primary", 3, "href"], [1, "bi", "bi-file-earmark-image", "me-1"], [1, "ms-auto"], ["class", "d-flex align-items-center gap-3", 4, "ngIf"], ["class", "d-flex align-items-end gap-2 flex-wrap", 4, "ngIf"], ["class", "text-muted ms-2", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil", "me-1"], [1, "text-muted", "ms-2"], [1, "d-flex", "align-items-end", "gap-2", "flex-wrap"], [1, "small", "text-muted"], ["type", "number", "min", "0", 1, "form-control", "form-control-sm", 2, "width", "110px", 3, "max", "value"], ["type", "text", 1, "form-control", "form-control-sm", 2, "width", "220px", 3, "value"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bi", "bi-check2", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "p-3", "border-bottom", 2, "background", "#eff6ff"], [1, "fw-semibold", "small"], [1, "bi", "bi-robot", "me-1"], [1, "small", "mt-1"], ["class", "small text-muted mt-1", "style", "white-space:pre-wrap", 4, "ngIf"], [1, "small", "text-muted", "mt-1", 2, "white-space", "pre-wrap"], [1, "p-4", "border-bottom"], [1, "p-3", "mb-0", 2, "white-space", "pre-wrap", "background", "#f8f9fa", "border-radius", "8px"], [1, "p-3", "mb-0", 2, "white-space", "pre-wrap", "background", "#fff8e1", "border-radius", "8px"], [1, "d-flex", "align-items-start", "gap-3", "p-3"], [2, "width", "28px", "height", "28px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", ".8rem", "font-weight", "700", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-semibold", "small", "mb-1"], [1, "me-3"], ["style", "color:#6b7280", 4, "ngIf"], ["class", "p-3 mt-2 mb-0 small", "style", "white-space:pre-wrap;background:#f8f9fa;border:1px solid #e5e7eb;border-radius:8px;max-height:360px;overflow:auto", 4, "ngIf"], [2, "color", "#6b7280"], [2, "color", "#10b981"], [1, "p-3", "mt-2", "mb-0", "small", 2, "white-space", "pre-wrap", "background", "#f8f9fa", "border", "1px solid #e5e7eb", "border-radius", "8px", "max-height", "360px", "overflow", "auto"]], template: function QcmResultatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
        \u0275\u0275element(4, "i", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "h1", 7);
        \u0275\u0275text(7, "R\xE9sultats du devoir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "button", 9);
        \u0275\u0275listener("click", function QcmResultatsComponent_Template_button_click_10_listener() {
          return ctx.downloadReport();
        });
        \u0275\u0275template(11, QcmResultatsComponent_span_11_Template, 1, 0, "span", 10)(12, QcmResultatsComponent_i_12_Template, 1, 0, "i", 11);
        \u0275\u0275text(13, " T\xE9l\xE9charger les notes (Excel) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, QcmResultatsComponent_div_14_Template, 2, 0, "div", 12)(15, QcmResultatsComponent_div_15_Template, 7, 0, "div", 12)(16, QcmResultatsComponent_div_16_Template, 25, 20, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", ctx.results.length, " \xE9tudiant(s) dans la liste du devoir");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.downloading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.downloading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.downloading);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.results.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.results);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmResultatsComponent, { className: "QcmResultatsComponent" });
})();
export {
  QcmResultatsComponent
};
//# sourceMappingURL=chunk-Y6OQIXDM.js.map

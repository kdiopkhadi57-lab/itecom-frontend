import {
  ExamService
} from "./chunk-ITWKVGS7.js";
import {
  UiChromeService
} from "./chunk-M4IUH3NY.js";
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
  NgForOf,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SMYYTT5I.js";
import {
  __async
} from "./chunk-UGMD5UZ3.js";

// src/app/features/exam-take/exam-take.component.ts
var _c0 = ["proctorVideo"];
function ExamTakeComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.exam.studentName, " \u2014 ", ctx_r0.exam.studentEmail, " ");
  }
}
function ExamTakeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275elementStart(3, "h3", 19);
    \u0275\u0275text(4, "Session interrompue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8, " Vos r\xE9ponses ont \xE9t\xE9 automatiquement soumises dans leur \xE9tat actuel.");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, " Vous recevrez vos r\xE9sultats d\xE9taill\xE9s par email ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 21);
    \u0275\u0275text(15, " Cet examen est termin\xE9. Vous ne pouvez plus interagir avec cette page. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.terminationReason);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("dans ", ctx_r0.delayLabel, "");
  }
}
function ExamTakeComponent_div_7_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, " Apr\xE8s la 3\xE8me tentative, l'examen sera automatiquement soumis et ferm\xE9. ");
    \u0275\u0275elementEnd();
  }
}
function ExamTakeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "i", 23);
    \u0275\u0275elementStart(2, "h4", 24);
    \u0275\u0275text(3, "Mode plein \xE9cran requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 25);
    \u0275\u0275text(5, " L'examen doit \xEAtre pass\xE9 en plein \xE9cran. Vous avez quitt\xE9 ce mode : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 26);
    \u0275\u0275text(9, " Vous avez ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " pour revenir en plein \xE9cran, sinon votre session sera automatiquement interrompue. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 27);
    \u0275\u0275listener("click", function ExamTakeComponent_div_7_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resumeFullscreen());
    });
    \u0275\u0275element(14, "i", 28);
    \u0275\u0275text(15, "Revenir en plein \xE9cran ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ExamTakeComponent_div_7_p_16_Template, 2, 0, "p", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Tentative ", ctx_r0.fullscreenExitCount, "/3");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.fullscreenRemainingTime, " secondes");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.fullscreenExitCount >= 3);
  }
}
function ExamTakeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275element(2, "video", 33, 0);
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275element(5, "span", 35);
    \u0275\u0275text(6, "REC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36)(8, "div", 37);
    \u0275\u0275element(9, "i", 38);
    \u0275\u0275text(10, "Surveillance active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 39);
    \u0275\u0275text(12, "Nous voyons vos gestes et entendons votre voix.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 40);
    \u0275\u0275element(14, "i", 41);
    \u0275\u0275elementStart(15, "div", 42);
    \u0275\u0275element(16, "div", 43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275styleProp("width", ctx_r0.micLevel, "%");
  }
}
function ExamTakeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.cameraError, " ");
  }
}
function ExamTakeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementStart(2, "p", 48);
    \u0275\u0275text(3, "Chargement de l'examen...");
    \u0275\u0275elementEnd()();
  }
}
function ExamTakeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "h4", 50);
    \u0275\u0275text(3, "Acc\xE8s refus\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ExamTakeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "h4", 52);
    \u0275\u0275text(3, "Examen d\xE9j\xE0 soumis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Vous avez d\xE9j\xE0 soumis cet examen. Vos r\xE9sultats vous seront envoy\xE9s par email ", ctx_r0.delayLabel, " apr\xE8s votre soumission.");
  }
}
function ExamTakeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275elementStart(2, "h4", 54);
    \u0275\u0275text(3, "Acc\xE8s temporairement bloqu\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 48);
    \u0275\u0275text(5, " Vous avez \xE9t\xE9 exclu(e) de cet examen pour non-respect des r\xE8gles anti-triche. Votre r\xE9sultat et l'acc\xE8s \xE0 votre compte seront disponibles \xE0 partir du ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.resultsAvailableAt);
  }
}
function ExamTakeComponent_div_15_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function ExamTakeComponent_div_15_i_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 71);
  }
}
function ExamTakeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275elementStart(2, "h3", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 58)(7, "p", 59)(8, "strong");
    \u0275\u0275text(9, "\xC9tudiant :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 59)(12, "strong");
    \u0275\u0275text(13, "Email :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 60)(16, "strong");
    \u0275\u0275text(17, "Nombre de questions :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 61);
    \u0275\u0275element(20, "i", 62);
    \u0275\u0275text(21, " Lisez attentivement chaque question. Une fois soumis, vous ne pourrez pas modifier vos r\xE9ponses. Vos r\xE9sultats vous seront envoy\xE9s par email ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 63);
    \u0275\u0275element(26, "i", 64);
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "\u26A0\uFE0F R\xE8gles du mode plein \xE9cran :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Vous ne pouvez quitter le plein \xE9cran que ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "2 fois maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, ". \xC0 la ");
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34, "3\xE8me sortie, vous serez imm\xE9diatement exclu de l'examen");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " et vos r\xE9ponses seront soumises automatiquement. ");
    \u0275\u0275elementStart(36, "strong");
    \u0275\u0275text(37, "Vous ne pourrez pas vous reconnecter tant que la session d'examen ne sera pas termin\xE9e.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 65);
    \u0275\u0275element(39, "i", 66);
    \u0275\u0275text(40, " L'examen d\xE9marre en mode plein \xE9cran. Le copier/coller et le clic droit sont d\xE9sactiv\xE9s pendant toute la dur\xE9e de l'\xE9preuve. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 67);
    \u0275\u0275listener("click", function ExamTakeComponent_div_15_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startExam());
    });
    \u0275\u0275template(42, ExamTakeComponent_div_15_span_42_Template, 1, 0, "span", 68)(43, ExamTakeComponent_div_15_i_43_Template, 1, 0, "i", 69);
    \u0275\u0275text(44, " Commencer l'examen ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.exam.examTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.exam.examDescription);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.exam.studentName, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.exam.studentEmail, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.exam.questions.length, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.delayLabel, " apr\xE8s la soumission");
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r0.starting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.starting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.starting);
  }
}
function ExamTakeComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Changement de fen\xEAtre/onglet d\xE9tect\xE9 (", ctx_r0.tabSwitchWarnings, "). Restez sur cette page pendant l'examen. ");
  }
}
function ExamTakeComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "i", 86);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " Niveau sonore trop \xE9lev\xE9 d\xE9tect\xE9. Merci de rester silencieux. Votre session sera arr\xEAt\xE9e automatiquement dans ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " seconde(s) si le bruit persiste. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.voiceWarningRemaining);
  }
}
function ExamTakeComponent_div_16_div_8_div_9_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r5);
  }
}
function ExamTakeComponent_div_16_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96);
    \u0275\u0275element(2, "span", 97)(3, "span", 98)(4, "span", 99);
    \u0275\u0275elementStart(5, "span", 100);
    \u0275\u0275text(6, "Main.java");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 101)(8, "div", 102);
    \u0275\u0275template(9, ExamTakeComponent_div_16_div_8_div_9_div_9_Template, 2, 1, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "pre", 104)(11, "code");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.range(ctx_r0.getLineCount(ctx_r0.getCodeSnippet(q_r6))));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getCodeSnippet(q_r6));
  }
}
function ExamTakeComponent_div_16_div_8_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r8);
  }
}
function ExamTakeComponent_div_16_div_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 96);
    \u0275\u0275element(2, "span", 97)(3, "span", 98)(4, "span", 99);
    \u0275\u0275elementStart(5, "span", 100);
    \u0275\u0275text(6, "Votre code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 101)(8, "div", 102);
    \u0275\u0275template(9, ExamTakeComponent_div_16_div_8_div_12_div_9_Template, 2, 1, "div", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 106);
    \u0275\u0275twoWayListener("ngModelChange", function ExamTakeComponent_div_16_div_8_div_12_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const q_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.answers[q_r6.id], $event) || (ctx_r0.answers[q_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("scroll", function ExamTakeComponent_div_16_div_8_div_12_Template_textarea_scroll_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.syncGutterScroll($event));
    })("keydown", function ExamTakeComponent_div_16_div_8_div_12_Template_textarea_keydown_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onCodeKeydown($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.range(ctx_r0.getLineCount(ctx_r0.answers[q_r6.id], 8)));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.answers[q_r6.id]);
  }
}
function ExamTakeComponent_div_16_div_8_textarea_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ExamTakeComponent_div_16_div_8_textarea_13_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const q_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.answers[q_r6.id], $event) || (ctx_r0.answers[q_r6.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.answers[q_r6.id]);
  }
}
function ExamTakeComponent_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 89)(7, "p", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ExamTakeComponent_div_16_div_8_div_9_Template, 13, 2, "div", 91);
    \u0275\u0275elementStart(10, "label", 92);
    \u0275\u0275text(11, "Votre r\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ExamTakeComponent_div_16_div_8_div_12_Template, 11, 2, "div", 93)(13, ExamTakeComponent_div_16_div_8_textarea_13_Template, 1, 1, "textarea", 94);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Question ", q_r6.orderIndex, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r6.maxScore, " pts");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getInstructionText(q_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCodeQuestion(q_r6));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isCodeQuestion(q_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCodeQuestion(q_r6));
  }
}
function ExamTakeComponent_div_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 70);
  }
}
function ExamTakeComponent_div_16_i_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 108);
  }
}
function ExamTakeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, ExamTakeComponent_div_16_div_1_Template, 4, 1, "div", 73)(2, ExamTakeComponent_div_16_div_2_Template, 7, 1, "div", 74);
    \u0275\u0275elementStart(3, "div", 75)(4, "h4", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 77);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ExamTakeComponent_div_16_div_8_Template, 14, 6, "div", 78);
    \u0275\u0275elementStart(9, "div", 79)(10, "p", 80);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 81);
    \u0275\u0275listener("click", function ExamTakeComponent_div_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitExam());
    });
    \u0275\u0275template(13, ExamTakeComponent_div_16_span_13_Template, 1, 0, "span", 68)(14, ExamTakeComponent_div_16_i_14_Template, 1, 0, "i", 82);
    \u0275\u0275text(15, " Soumettre mes r\xE9ponses ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tabSwitchWarnings > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.voiceWarningActive);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.exam.examTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.answeredCount, "/", ctx_r0.exam.questions.length, " r\xE9ponses");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.exam.questions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Vous avez r\xE9pondu \xE0 ", ctx_r0.answeredCount, " question(s) sur ", ctx_r0.exam.questions.length, ". ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.submitting);
  }
}
function ExamTakeComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275elementStart(2, "h3", 110);
    \u0275\u0275text(3, "Examen soumis !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 20);
    \u0275\u0275text(5, " Vos r\xE9ponses ont \xE9t\xE9 enregistr\xE9es avec succ\xE8s.");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, " Vous recevrez vos r\xE9sultats d\xE9taill\xE9s par email ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 111);
    \u0275\u0275element(12, "i", 112);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("dans ", ctx_r0.delayLabel, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Un agent IA corrigera vos r\xE9ponses et g\xE9n\xE9rera un rapport personnalis\xE9 envoy\xE9 \xE0 ", ctx_r0.exam == null ? null : ctx_r0.exam.studentEmail, ". ");
  }
}
var ExamTakeComponent = class _ExamTakeComponent {
  set proctorVideo(ref) {
    this.videoElement = ref?.nativeElement || null;
    this.attachStreamToVideo();
  }
  constructor(route, examService, uiChrome, authService) {
    this.route = route;
    this.examService = examService;
    this.uiChrome = uiChrome;
    this.authService = authService;
    this.status = "loading";
    this.exam = null;
    this.answers = {};
    this.errorMessage = "";
    this.starting = false;
    this.submitting = false;
    this.token = "";
    this.fullscreenWarning = false;
    this.fullscreenExitCount = 0;
    this.fullscreenRemainingTime = 0;
    this.tabSwitchWarnings = 0;
    this.terminationReason = "";
    this.resultsAvailableAt = "";
    this.micLevel = 0;
    this.cameraError = "";
    this.voiceWarningActive = false;
    this.voiceWarningRemaining = 0;
    this.FULLSCREEN_GRACE_PERIODS = [3e4, 15e3, 5e3];
    this.VOICE_THRESHOLD = 55;
    this.VOICE_WARNING_MS = 6e4;
    this.originalWindowOpen = window.open;
    this.mediaStream = null;
    this.audioContext = null;
    this.analyser = null;
    this.micRafId = null;
    this.videoElement = null;
    this.fullscreenExitTimer = null;
    this.fullscreenCountdownInterval = null;
    this.voiceWarningEndAt = 0;
    this.codeIndicators = /[{};]|^\s*(public|private|protected|class|void|int|double|String|return|import|package|def|function|for|while|if)\b/;
  }
  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token") || "";
    const storedReason = this.getStoredTerminationReason();
    this.examService.getExamByToken(this.token).subscribe({
      next: (r) => {
        this.exam = r.data;
        if (this.exam.resultsLocked) {
          this.resultsAvailableAt = this.exam.resultsAvailableAt ? new Date(this.exam.resultsAvailableAt).toLocaleString("fr-FR") : "";
          this.status = "blocked";
        } else if (storedReason) {
          this.terminationReason = storedReason;
          this.status = "terminated";
        } else if (this.exam.status === "SUBMITTED" || this.exam.status === "GRADED") {
          this.status = "already-submitted";
        } else if (this.exam.status === "STARTED") {
          this.status = "active";
          this.uiChrome.hide();
        } else {
          this.status = "welcome";
        }
      },
      error: (e) => {
        this.status = "error";
        this.errorMessage = e?.error?.message || "Token d'acc\xE8s invalide ou examen non disponible.";
      }
    });
  }
  // --- Persistance du blocage de session (anti-cheat) ---
  terminationStorageKey() {
    return `exam-terminated-${this.token}`;
  }
  getStoredTerminationReason() {
    try {
      return localStorage.getItem(this.terminationStorageKey());
    } catch {
      return null;
    }
  }
  storeTerminationReason(reason) {
    try {
      localStorage.setItem(this.terminationStorageKey(), reason);
    } catch {
    }
  }
  get answeredCount() {
    return Object.values(this.answers).filter((a) => a?.trim()).length;
  }
  get delayLabel() {
    const minutes = this.exam?.gradingDelayMinutes ?? 60;
    if (minutes >= 60 && minutes % 60 === 0) {
      const hours = minutes / 60;
      return hours === 1 ? "1 heure" : `${hours} heures`;
    }
    return minutes === 1 ? "1 minute" : `${minutes} minutes`;
  }
  startExam() {
    this.enterFullscreen();
    this.starting = true;
    this.examService.startExam(this.token).subscribe({
      next: (r) => {
        this.exam = r.data;
        this.status = "active";
        this.starting = false;
        this.uiChrome.hide();
        this.lockDown();
        this.lockScroll();
        this.enableProctoring();
      },
      error: () => this.starting = false
    });
  }
  // --- Anti-cheat: blocage du défilement de la page ---
  lockScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  unlockScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
  // --- Surveillance: caméra + micro ---
  enableProctoring() {
    return __async(this, null, function* () {
      try {
        this.mediaStream = yield navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        this.attachStreamToVideo();
        this.startMicMeter();
      } catch {
        this.cameraError = "Impossible d'activer la cam\xE9ra/micro. La surveillance vid\xE9o de l'examen est d\xE9sactiv\xE9e.";
      }
    });
  }
  attachStreamToVideo() {
    if (this.videoElement && this.mediaStream) {
      this.videoElement.srcObject = this.mediaStream;
      this.videoElement.play().catch(() => {
      });
    }
  }
  startMicMeter() {
    if (!this.mediaStream)
      return;
    this.audioContext = new AudioContext();
    const source = this.audioContext.createMediaStreamSource(this.mediaStream);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    source.connect(this.analyser);
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    const tick = () => {
      if (!this.analyser)
        return;
      this.analyser.getByteFrequencyData(data);
      const avg = data.reduce((sum, v) => sum + v, 0) / data.length;
      this.micLevel = Math.min(100, Math.round(avg / 128 * 100));
      this.checkVoiceLevel();
      this.micRafId = requestAnimationFrame(tick);
    };
    tick();
  }
  checkVoiceLevel() {
    if (this.status !== "active")
      return;
    if (this.micLevel >= this.VOICE_THRESHOLD) {
      if (!this.voiceWarningActive) {
        this.voiceWarningActive = true;
        this.voiceWarningEndAt = Date.now() + this.VOICE_WARNING_MS;
      }
      this.voiceWarningRemaining = Math.max(0, Math.ceil((this.voiceWarningEndAt - Date.now()) / 1e3));
      if (Date.now() >= this.voiceWarningEndAt) {
        this.terminateSession("Un niveau sonore \xE9lev\xE9 a \xE9t\xE9 d\xE9tect\xE9 de mani\xE8re prolong\xE9e et vous avez \xE9t\xE9 averti(e), mais le bruit n'a pas cess\xE9.");
      }
    } else if (this.voiceWarningActive) {
      this.voiceWarningActive = false;
      this.voiceWarningRemaining = 0;
    }
  }
  stopProctoring() {
    if (this.micRafId !== null) {
      cancelAnimationFrame(this.micRafId);
      this.micRafId = null;
    }
    this.analyser = null;
    if (this.audioContext) {
      this.audioContext.close().catch(() => {
      });
      this.audioContext = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((t) => t.stop());
      this.mediaStream = null;
    }
    this.micLevel = 0;
  }
  // --- Anti-cheat: plein écran ---
  enterFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
      });
    }
  }
  resumeFullscreen() {
    this.enterFullscreen();
  }
  onFullscreenChange() {
    if (this.status !== "active")
      return;
    const isFullscreen = !!document.fullscreenElement;
    if (!isFullscreen && !this.fullscreenWarning) {
      this.fullscreenExitCount++;
      this.fullscreenWarning = true;
      if (this.fullscreenExitCount >= 3) {
        this.recordFullscreenViolation(this.fullscreenExitCount, false);
        this.fullscreenRemainingTime = 0;
        setTimeout(() => {
          this.terminateSession("Vous avez quitt\xE9 le mode plein \xE9cran trois fois. L'examen a \xE9t\xE9 interrompu.");
        }, 500);
      } else {
        this.recordFullscreenViolation(this.fullscreenExitCount, true);
        const gracePeriod = this.FULLSCREEN_GRACE_PERIODS[this.fullscreenExitCount - 1];
        this.startFullscreenCountdown(gracePeriod);
      }
    } else if (isFullscreen && this.fullscreenWarning) {
      this.fullscreenWarning = false;
      this.fullscreenRemainingTime = 0;
      this.clearCountdownInterval();
    }
  }
  startFullscreenCountdown(gracePeriodMs) {
    this.clearCountdownInterval();
    const startTime = Date.now();
    const endTime = startTime + gracePeriodMs;
    this.fullscreenCountdownInterval = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      this.fullscreenRemainingTime = Math.ceil(remaining / 1e3);
      if (remaining <= 0) {
        this.clearCountdownInterval();
        if (this.status === "active" && this.fullscreenWarning) {
          this.terminateSession(`Vous avez quitt\xE9 le mode plein \xE9cran pendant plus de ${gracePeriodMs / 1e3} secondes.`);
        }
      }
    }, 100);
  }
  clearCountdownInterval() {
    if (this.fullscreenCountdownInterval) {
      clearInterval(this.fullscreenCountdownInterval);
      this.fullscreenCountdownInterval = null;
    }
  }
  recordFullscreenViolation(violationNumber, shouldContinue) {
    if (!this.exam)
      return;
    this.examService.recordFullscreenViolation(this.token, {
      violationNumber,
      details: `Sortie du plein \xE9cran - Tentative ${violationNumber}/3`,
      shouldTerminate: !shouldContinue
    }).subscribe({
      next: () => {
      },
      error: (err) => {
        console.error("Erreur lors de l'enregistrement de la violation:", err);
      }
    });
  }
  // --- Anti-cheat: changement d'onglet/fenêtre ---
  onVisibilityChange() {
    if (this.status === "active" && document.hidden) {
      this.tabSwitchWarnings++;
    }
  }
  // --- Anti-cheat: copier / couper / coller / clic droit ---
  blockClipboard(event) {
    if (this.status === "active" || this.status === "terminated") {
      event.preventDefault();
    }
  }
  blockContextMenu(event) {
    if (this.status === "active" || this.status === "terminated") {
      event.preventDefault();
    }
  }
  // --- Anti-cheat: empêcher la fermeture/quitter la page ---
  onBeforeUnload(event) {
    if (this.status === "active") {
      event.preventDefault();
      event.returnValue = true;
    }
  }
  lockDown() {
    window.open = () => null;
  }
  unlock() {
    window.open = this.originalWindowOpen;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
      });
    }
    if (this.fullscreenExitTimer !== null) {
      clearTimeout(this.fullscreenExitTimer);
      this.fullscreenExitTimer = null;
    }
    this.clearCountdownInterval();
    this.fullscreenWarning = false;
    this.fullscreenRemainingTime = 0;
    this.voiceWarningActive = false;
    this.voiceWarningRemaining = 0;
    this.unlockScroll();
    this.stopProctoring();
    this.uiChrome.show();
  }
  ngOnDestroy() {
    this.unlock();
  }
  isCodeQuestion(q) {
    return this.getCodeSnippet(q).length > 0;
  }
  getInstructionText(q) {
    return this.splitQuestion(q.questionText).text;
  }
  getCodeSnippet(q) {
    return this.splitQuestion(q.questionText).code;
  }
  splitQuestion(questionText) {
    const paragraphs = questionText.split(/\n\s*\n/);
    const textParts = [];
    const codeParts = [];
    for (const para of paragraphs) {
      const lines = para.split("\n");
      const codeLines = lines.filter((l) => this.codeIndicators.test(l)).length;
      if (lines.length > 1 && codeLines / lines.length >= 0.4) {
        codeParts.push(para);
      } else {
        textParts.push(para);
      }
    }
    return { text: textParts.join("\n\n").trim(), code: codeParts.join("\n\n").trim() };
  }
  getLineCount(text, min = 1) {
    const lines = (text || "").split("\n").length;
    return Math.max(lines, min);
  }
  range(n) {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
  syncGutterScroll(event) {
    const textarea = event.target;
    const gutter = textarea.parentElement?.querySelector(".mini-ide-gutter");
    if (gutter)
      gutter.scrollTop = textarea.scrollTop;
  }
  onCodeKeydown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      const ta = event.target;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const value = ta.value;
      ta.value = value.substring(0, start) + "    " + value.substring(end);
      ta.selectionStart = ta.selectionEnd = start + 4;
      ta.dispatchEvent(new Event("input"));
    }
  }
  buildAnswers() {
    if (!this.exam)
      return [];
    return this.exam.questions.map((q) => ({
      questionId: q.id,
      answer: this.answers[q.id] || ""
    }));
  }
  submitExam() {
    if (!this.exam)
      return;
    if (!confirm("\xCAtes-vous s\xFBr de vouloir soumettre l\u2019examen ? Si oui, vos r\xE9ponses seront enregistr\xE9es et vous serez d\xE9connect\xE9(e) de la plateforme."))
      return;
    this.submitting = true;
    this.examService.submitExam(this.token, { answers: this.buildAnswers() }).subscribe({
      next: () => {
        this.status = "submitted";
        this.submitting = false;
        this.unlock();
        this.authService.logout();
      },
      error: (e) => {
        alert(e?.error?.message || "Erreur lors de la soumission. Veuillez r\xE9essayer.");
        this.submitting = false;
      }
    });
  }
  // --- Arrêt forcé de la session (anti-cheat) ---
  terminateSession(reason) {
    if (this.status !== "active" || !this.exam)
      return;
    this.terminationReason = reason;
    this.status = "terminated";
    this.storeTerminationReason(reason);
    this.unlock();
    this.examService.submitExam(this.token, { answers: this.buildAnswers() }).subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
  static {
    this.\u0275fac = function ExamTakeComponent_Factory(t) {
      return new (t || _ExamTakeComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ExamService), \u0275\u0275directiveInject(UiChromeService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamTakeComponent, selectors: [["app-exam-take"]], viewQuery: function ExamTakeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.proctorVideo = _t.first);
      }
    }, hostBindings: function ExamTakeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("fullscreenchange", function ExamTakeComponent_fullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, false, \u0275\u0275resolveDocument)("visibilitychange", function ExamTakeComponent_visibilitychange_HostBindingHandler() {
          return ctx.onVisibilityChange();
        }, false, \u0275\u0275resolveDocument)("copy", function ExamTakeComponent_copy_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("cut", function ExamTakeComponent_cut_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("paste", function ExamTakeComponent_paste_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("contextmenu", function ExamTakeComponent_contextmenu_HostBindingHandler($event) {
          return ctx.blockContextMenu($event);
        }, false, \u0275\u0275resolveDocument)("beforeunload", function ExamTakeComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 22, consts: [["proctorVideo", ""], [1, "min-vh-100", "d-flex", "flex-column", 2, "background", "#f8f9fa"], [1, "navbar", "navbar-light", "bg-white", "border-bottom", "shadow-sm", "px-4", "py-3"], [1, "navbar-brand", "fw-bold", "text-primary"], [1, "bi", "bi-mortarboard", "me-2"], ["class", "text-muted small", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center p-4", "style", "position:fixed;inset:0;background:rgba(20,20,30,.96);z-index:3000;pointer-events:all", 4, "ngIf"], ["class", "d-flex flex-column align-items-center justify-content-center text-center p-4", "style", "position:fixed;inset:0;background:rgba(20,20,30,.92);z-index:2000;color:#fff", 4, "ngIf"], ["class", "proctor-widget", 4, "ngIf"], ["class", "alert alert-danger small d-flex align-items-center gap-2", "style", "position:fixed;bottom:1rem;left:1rem;right:220px;max-width:480px;z-index:2100", 4, "ngIf"], [1, "flex-grow-1", "d-flex", "p-3", 2, "min-height", "0"], ["class", "text-center", 4, "ngIf"], ["class", "card border-0 shadow text-center p-5", "style", "max-width:500px", 4, "ngIf"], ["class", "card border-0 shadow p-5 text-center", "style", "max-width:600px;width:100%", 4, "ngIf"], ["class", "pe-2 exam-fullscreen-content", "style", "width:100%;height:100%;min-height:0;overflow-y:auto", 4, "ngIf"], [1, "text-muted", "small"], [1, "d-flex", "align-items-center", "justify-content-center", "p-4", 2, "position", "fixed", "inset", "0", "background", "rgba(20,20,30,.96)", "z-index", "3000", "pointer-events", "all"], [1, "card", "border-0", "shadow", "text-center", "p-5", 2, "max-width", "500px"], [1, "bi", "bi-shield-exclamation", "text-danger", 2, "font-size", "3.5rem"], [1, "mt-3", "text-danger", "fw-bold"], [1, "text-muted", "mt-2"], [1, "text-muted", "small", "mt-3", "mb-0"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "p-4", 2, "position", "fixed", "inset", "0", "background", "rgba(20,20,30,.92)", "z-index", "2000", "color", "#fff"], [1, "bi", "bi-arrows-fullscreen", 2, "font-size", "3rem"], [1, "mt-3", "fw-bold"], [1, "text-light-50", "mb-2", 2, "max-width", "480px"], [1, "text-light-50", "mb-4", 2, "max-width", "480px"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "bi", "bi-arrows-fullscreen", "me-2"], ["class", "text-danger small mt-3", 4, "ngIf"], [1, "text-danger", "small", "mt-3"], [1, "proctor-widget"], [1, "proctor-video-wrap"], ["autoplay", "", "muted", "", "playsinline", "", 1, "proctor-video"], [1, "proctor-rec"], [1, "proctor-rec-dot"], [1, "proctor-info"], [1, "small", "fw-semibold", "text-white"], [1, "bi", "bi-eye-fill", "me-1"], [1, "small", "text-light"], [1, "proctor-mic", "mt-1"], [1, "bi", "bi-mic-fill", "text-white"], [1, "proctor-mic-bar"], [1, "proctor-mic-fill"], [1, "alert", "alert-danger", "small", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "bottom", "1rem", "left", "1rem", "right", "220px", "max-width", "480px", "z-index", "2100"], [1, "bi", "bi-camera-video-off"], [1, "text-center"], [1, "spinner-border", "text-primary", "mb-3"], [1, "text-muted"], [1, "bi", "bi-exclamation-triangle", "text-danger", 2, "font-size", "3rem"], [1, "mt-3"], [1, "bi", "bi-check-circle", "text-success", 2, "font-size", "3rem"], [1, "mt-3", "text-success"], [1, "bi", "bi-shield-lock", "text-danger", 2, "font-size", "3rem"], [1, "mt-3", "text-danger"], [1, "card", "border-0", "shadow", "p-5", "text-center", 2, "max-width", "600px", "width", "100%"], [1, "bi", "bi-clipboard-check", "text-primary", 2, "font-size", "3.5rem"], [1, "text-muted", "mb-4"], [1, "alert", "alert-light", "border", "text-start", "mb-4"], [1, "mb-1"], [1, "mb-0"], [1, "alert", "alert-warning", "small", "text-start"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "alert", "alert-danger", "small", "text-start"], [1, "bi", "bi-shield-exclamation", "me-1"], [1, "alert", "alert-info", "small", "text-start"], [1, "bi", "bi-shield-lock", "me-1"], [1, "btn", "btn-primary", "btn-lg", "mt-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-play-circle me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-play-circle", "me-2"], [1, "pe-2", "exam-fullscreen-content", 2, "width", "100%", "height", "100%", "min-height", "0", "overflow-y", "auto"], ["class", "alert alert-warning small d-flex align-items-center gap-2 mb-3", 4, "ngIf"], ["class", "alert alert-danger small d-flex align-items-center gap-2 mb-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-0"], [1, "badge", "bg-success"], ["class", "card border-0 shadow-sm mb-4", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "shadow-sm", "p-4", "text-center"], [1, "text-muted", "mb-3"], [1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], ["class", "bi bi-send me-2", 4, "ngIf"], [1, "alert", "alert-warning", "small", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "bi", "bi-exclamation-triangle-fill"], [1, "alert", "alert-danger", "small", "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "bi", "bi-volume-up-fill"], [1, "card", "border-0", "shadow-sm", "mb-4"], [1, "card-header", "bg-primary", "text-white", "py-2", "px-3", "d-flex", "justify-content-between"], [1, "card-body"], [1, "fw-semibold", "mb-3", 2, "white-space", "pre-wrap"], ["class", "mini-ide mb-3", 4, "ngIf"], [1, "form-label", "small", "text-muted"], ["class", "mini-ide", 4, "ngIf"], ["class", "form-control", "rows", "4", "placeholder", "Votre r\xE9ponse ici...", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "mini-ide", "mb-3"], [1, "mini-ide-header"], [1, "mini-ide-dot", "bg-danger"], [1, "mini-ide-dot", "bg-warning"], [1, "mini-ide-dot", "bg-success"], [1, "ms-2", "small", "text-light"], [1, "mini-ide-body"], [1, "mini-ide-gutter"], [4, "ngFor", "ngForOf"], [1, "mini-ide-code"], [1, "mini-ide"], ["rows", "8", "spellcheck", "false", "placeholder", "\xC9crivez votre code ici...", 1, "mini-ide-textarea", 3, "ngModelChange", "scroll", "keydown", "ngModel"], ["rows", "4", "placeholder", "Votre r\xE9ponse ici...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "bi", "bi-send", "me-2"], [1, "bi", "bi-send-check", "text-success", 2, "font-size", "3.5rem"], [1, "mt-3", "text-success", "fw-bold"], [1, "alert", "alert-info", "small", "mt-3"], [1, "bi", "bi-info-circle", "me-1"]], template: function ExamTakeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "span", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275text(4, "ELearning Platform ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ExamTakeComponent_span_5_Template, 2, 2, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ExamTakeComponent_div_6_Template, 16, 2, "div", 6)(7, ExamTakeComponent_div_7_Template, 17, 3, "div", 7)(8, ExamTakeComponent_div_8_Template, 17, 2, "div", 8)(9, ExamTakeComponent_div_9_Template, 3, 1, "div", 9);
        \u0275\u0275elementStart(10, "div", 10);
        \u0275\u0275template(11, ExamTakeComponent_div_11_Template, 4, 0, "div", 11)(12, ExamTakeComponent_div_12_Template, 6, 1, "div", 12)(13, ExamTakeComponent_div_13_Template, 6, 1, "div", 12)(14, ExamTakeComponent_div_14_Template, 9, 1, "div", 12)(15, ExamTakeComponent_div_15_Template, 45, 9, "div", 13)(16, ExamTakeComponent_div_16_Template, 16, 11, "div", 14)(17, ExamTakeComponent_div_17_Template, 14, 2, "div", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.status === "active" ? "100vh" : null)("overflow", ctx.status === "active" ? "hidden" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.exam);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "terminated");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.fullscreenWarning);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.cameraError);
        \u0275\u0275advance();
        \u0275\u0275classProp("align-items-center", ctx.status !== "active")("justify-content-center", ctx.status !== "active")("overflow-hidden", ctx.status === "active");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "loading");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "error");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "already-submitted");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "blocked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "welcome" && ctx.exam);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.exam);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "submitted");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n.proctor-widget[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  width: 200px;\n  background: #1e1e1e;\n  border-radius: 10px;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, .35);\n  overflow: hidden;\n  z-index: 2050;\n}\n.proctor-video-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000;\n}\n.proctor-video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  object-fit: cover;\n  display: block;\n  background: #000;\n}\n.proctor-rec[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  background: rgba(0, 0, 0, .55);\n  color: #fff;\n  font-size: .65rem;\n  padding: 2px 6px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.proctor-rec-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ff4d4f;\n  animation: _ngcontent-%COMP%_proctor-blink 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_proctor-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .2;\n  }\n}\n.proctor-info[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.proctor-mic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.proctor-mic-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #3a3a3a;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.proctor-mic-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #27c93f;\n  transition: width .08s linear;\n}\n.mini-ide[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #2d2d2d;\n  background: #1e1e1e;\n}\n.mini-ide-header[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n  padding: 6px 10px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.mini-ide-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.mini-ide-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.mini-ide-gutter[_ngcontent-%COMP%] {\n  background: #252526;\n  color: #6e7681;\n  text-align: right;\n  padding: 10px 8px;\n  font-family: "Courier New", monospace;\n  font-size: .85rem;\n  line-height: 1.5;\n  -webkit-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n.mini-ide-code[_ngcontent-%COMP%], .mini-ide-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n  padding: 10px;\n  font-family: "Courier New", monospace;\n  font-size: .85rem;\n  line-height: 1.5;\n  color: #d4d4d4;\n  background: #1e1e1e;\n  border: none;\n  white-space: pre;\n  overflow: auto;\n  min-width: 0;\n}\n.mini-ide-textarea[_ngcontent-%COMP%] {\n  resize: none;\n  outline: none;\n}\n.mini-ide-textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n/*# sourceMappingURL=exam-take.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamTakeComponent, { className: "ExamTakeComponent" });
})();
export {
  ExamTakeComponent
};
//# sourceMappingURL=chunk-GYORBQF5.js.map

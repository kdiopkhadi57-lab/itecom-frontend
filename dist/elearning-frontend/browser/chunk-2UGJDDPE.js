import {
  UiChromeService
} from "./chunk-M4IUH3NY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-EWJBTFX2.js";
import {
  ActivatedRoute,
  CommonModule,
  DomSanitizer,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/qcm/qcm-take.component.ts
var _c0 = ["proctorVideo"];
function QcmTakeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementStart(2, "p", 11);
    \u0275\u0275text(3, "Chargement du devoir...");
    \u0275\u0275elementEnd()();
  }
}
function QcmTakeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3, "\u{1F6D1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 15);
    \u0275\u0275text(5, "Session interrompue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9, "Vos r\xE9ponses ont \xE9t\xE9 automatiquement soumises dans leur \xE9tat actuel.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 17);
    \u0275\u0275text(11, "Votre compte est temporairement bloqu\xE9 et votre r\xE9sultat ne sera visible qu'une fois le temps estim\xE9 du devoir \xE9coul\xE9.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.terminationReason);
  }
}
function QcmTakeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 15);
    \u0275\u0275text(4, "R\xE9sultat non disponible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 19);
    \u0275\u0275text(8, "\u2190 Retour aux devoirs");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.blockedMessage);
  }
}
function QcmTakeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u26F6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 22);
    \u0275\u0275text(4, "Mode plein \xE9cran requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6, " Le devoir doit \xEAtre pass\xE9 en plein \xE9cran. Vous avez quitt\xE9 ce mode : ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10, " Vous avez ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " pour revenir en plein \xE9cran, sinon vos r\xE9ponses seront automatiquement soumises. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 25);
    \u0275\u0275listener("click", function QcmTakeComponent_div_4_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resumeFullscreen());
    });
    \u0275\u0275text(15, " \u26F6 Revenir en plein \xE9cran ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Tentative ", ctx_r0.fullscreenExitCount, "/2");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.fullscreenRemainingTime, " secondes");
  }
}
function QcmTakeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "video", 28, 0);
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275element(5, "span", 30);
    \u0275\u0275text(6, "REC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "div", 32);
    \u0275\u0275element(9, "i", 33);
    \u0275\u0275text(10, "Surveillance active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275text(12, "Nous v\xE9rifions votre environnement pendant le devoir.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 35);
    \u0275\u0275element(14, "i", 36);
    \u0275\u0275elementStart(15, "div", 37);
    \u0275\u0275element(16, "div", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 39);
    \u0275\u0275element(18, "i", 40);
    \u0275\u0275text(19, "Temps restant : ");
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275styleProp("width", ctx_r0.micLevel, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.timeRemainingLabel);
  }
}
function QcmTakeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.cameraError, " ");
  }
}
function QcmTakeComponent_div_7_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1, " Bonne r\xE9ponse : ");
    \u0275\u0275elementStart(2, "strong", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r3.correctChoice);
  }
}
function QcmTakeComponent_div_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 65);
    \u0275\u0275text(9, " Votre r\xE9ponse : ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, QcmTakeComponent_div_7_div_32_div_12_Template, 4, 1, "div", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275styleProp("background", i_r4 % 2 === 0 ? "#fff" : "#fafafa");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", d_r3.isCorrect ? "#d1fae5" : "#fee2e2")("color", d_r3.isCorrect ? "#065f46" : "#991b1b");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r3.isCorrect ? "\u2713" : "\u2717", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", d_r3.questionText, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", d_r3.points, " pt", d_r3.points > 1 ? "s" : "", ")");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", d_r3.isCorrect ? "#10b981" : "#ef4444");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r3.choiceSelected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r3.isCorrect);
  }
}
function QcmTakeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 43)(2, "div", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47)(9, "div", 48)(10, "div", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50);
    \u0275\u0275text(13, "Points obtenus");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 51);
    \u0275\u0275text(15, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 48)(17, "div", 52);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 50);
    \u0275\u0275text(20, "Points max");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 53);
    \u0275\u0275elementStart(22, "div", 48)(23, "div", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 50);
    \u0275\u0275text(26, "Score");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 55)(28, "div", 56)(29, "div", 57)(30, "h5", 58);
    \u0275\u0275text(31, "\u{1F4CB} Correction d\xE9taill\xE9e");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, QcmTakeComponent_div_7_div_32_Template, 13, 14, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "a", 60);
    \u0275\u0275text(34, " \u2190 Retour aux devoirs ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.resultat.mention === "Excellent" ? "\u{1F3C6}" : ctx_r0.resultat.mention === "Bien" ? "\u{1F44D}" : ctx_r0.resultat.mention === "Passable" ? "\u{1F60A}" : "\u{1F614}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.resultat.mention);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.resultat.qcmTitle);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.resultat.score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.resultat.maxScore);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", ctx_r0.pctColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.resultat.percentage);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.resultat.detail);
  }
}
function QcmTakeComponent_div_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.acces.description);
  }
}
function QcmTakeComponent_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 84);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Niveau :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.acces.studentLevel, "");
  }
}
function QcmTakeComponent_div_8_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "label", 86);
    \u0275\u0275element(2, "i", 87);
    \u0275\u0275text(3, "Mot de passe du devoir ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function QcmTakeComponent_div_8_div_36_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.password, $event) || (ctx_r0.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function QcmTakeComponent_div_8_div_36_Template_input_keydown_enter_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startQcm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", !!ctx_r0.startError);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.password);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.startError);
  }
}
function QcmTakeComponent_div_8_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.startError);
  }
}
function QcmTakeComponent_div_8_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function QcmTakeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 69)(2, "div", 21);
    \u0275\u0275text(3, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QcmTakeComponent_div_8_p_6_Template, 2, 1, "p", 70);
    \u0275\u0275elementStart(7, "div", 71)(8, "div");
    \u0275\u0275element(9, "i", 72);
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "\xC9tudiant :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, QcmTakeComponent_div_8_div_13_Template, 5, 1, "div", 7);
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275element(15, "i", 73);
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " question(s) \xE0 r\xE9pondre.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 74);
    \u0275\u0275element(20, "i", 40);
    \u0275\u0275text(21, " Dur\xE9e maximale : ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, ". Le compte \xE0 rebours d\xE9marre d\xE8s le lancement du devoir. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 75);
    \u0275\u0275element(26, "i", 76);
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28, "\u26A0\uFE0F R\xE8gle du mode plein \xE9cran :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " vous ne pouvez quitter le plein \xE9cran qu'une seule fois. \xC0 la ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "2\xE8me sortie, vos r\xE9ponses seront automatiquement soumises");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " dans leur \xE9tat actuel. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 77);
    \u0275\u0275element(34, "i", 78);
    \u0275\u0275text(35, " Le devoir d\xE9marre en plein \xE9cran. Le copier/coller et le clic droit sont d\xE9sactiv\xE9s pendant l'\xE9preuve. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, QcmTakeComponent_div_8_div_36_Template, 7, 4, "div", 79)(37, QcmTakeComponent_div_8_div_37_Template, 2, 1, "div", 80);
    \u0275\u0275elementStart(38, "button", 81);
    \u0275\u0275listener("click", function QcmTakeComponent_div_8_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startQcm());
    });
    \u0275\u0275template(39, QcmTakeComponent_div_8_span_39_Template, 1, 0, "span", 82);
    \u0275\u0275text(40, " \u25B6 Commencer le devoir ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.acces.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.acces.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.acces.studentName, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.acces.studentLevel);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.acces.questionCount);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", (tmp_6_0 = ctx_r0.acces.estimatedDurationMinutes) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 30, " minute(s)");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.acces.passwordRequired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.startError && !ctx_r0.acces.passwordRequired);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.starting || ctx_r0.acces.passwordRequired && !ctx_r0.password.trim());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.starting);
  }
}
function QcmTakeComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "a", 109);
    \u0275\u0275element(2, "i", 110);
    \u0275\u0275text(3, "Ouvrir le sujet ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.qcm.subjectFileUrl, \u0275\u0275sanitizeUrl);
  }
}
function QcmTakeComponent_div_9_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.qcm.description);
  }
}
function QcmTakeComponent_div_9_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r0.answered / ctx_r0.qcm.questions.length * 100, "%");
  }
}
function QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = ctx.$implicit;
    const ri_r9 = \u0275\u0275nextContext().index;
    \u0275\u0275classProp("fw-semibold", ri_r9 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r8);
  }
}
function QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_tr_2_td_1_Template, 2, 3, "td", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ri_r9 = ctx.index;
    \u0275\u0275classProp("table-light", ri_r9 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r10);
  }
}
function QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 122)(1, "tbody");
    \u0275\u0275template(2, QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_tr_2_Template, 2, 3, "tr", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", block_r11.table);
  }
}
function QcmTakeComponent_div_9_div_15_div_2_ng_container_5_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("case-heading", block_r11.heading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r11.text);
  }
}
function QcmTakeComponent_div_9_div_15_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_15_div_2_ng_container_5_table_1_Template, 3, 1, "table", 120)(2, QcmTakeComponent_div_9_div_15_div_2_ng_container_5_p_2_Template, 2, 3, "p", 121);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const block_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r11.table);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !block_r11.table);
  }
}
function QcmTakeComponent_div_9_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117);
    \u0275\u0275element(2, "i", 110);
    \u0275\u0275text(3, "Sujet du devoir / cas pratique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118);
    \u0275\u0275template(5, QcmTakeComponent_div_9_div_15_div_2_ng_container_5_Template, 3, 2, "ng-container", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.caseBlocks(ctx_r0.qcm.subjectText));
  }
}
function QcmTakeComponent_div_9_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275element(1, "iframe", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.safeSubjectUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function QcmTakeComponent_div_9_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1, "Le fichier sujet n\u2019est pas disponible.");
    \u0275\u0275elementEnd();
  }
}
function QcmTakeComponent_div_9_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 129);
    \u0275\u0275text(2, "Votre r\xE9ponse au devoir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function QcmTakeComponent_div_9_div_15_div_5_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.documentAnswer, $event) || (ctx_r0.documentAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.documentAnswer);
  }
}
function QcmTakeComponent_div_9_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 103);
    \u0275\u0275template(2, QcmTakeComponent_div_9_div_15_div_2_Template, 6, 1, "div", 113)(3, QcmTakeComponent_div_9_div_15_div_3_Template, 2, 1, "div", 114)(4, QcmTakeComponent_div_9_div_15_div_4_Template, 2, 0, "div", 115)(5, QcmTakeComponent_div_9_div_15_div_5_Template, 4, 1, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.qcm.subjectText && !ctx_r0.subjectShownInCase);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.subjectFileUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.qcm.subjectFileUrl && !ctx_r0.qcm.subjectText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.questions.length === 0);
  }
}
function QcmTakeComponent_div_9_div_16_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r13.questionText);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 146);
    \u0275\u0275element(2, "i", 166);
    \u0275\u0275text(3, "Donn\xE9es du cas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r13.caseScenario);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r15 = ctx.$implicit;
    const ri_r16 = \u0275\u0275nextContext().index;
    \u0275\u0275classProp("fw-semibold", ri_r16 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r15);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_tr_2_td_1_Template, 2, 3, "td", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ri_r16 = ctx.index;
    \u0275\u0275classProp("table-light", ri_r16 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r17);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 122)(1, "tbody");
    \u0275\u0275template(2, QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_tr_2_Template, 2, 3, "tr", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const block_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", block_r18.table);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_ng_container_14_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("case-heading", block_r18.heading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r18.text);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_16_div_9_ng_container_14_table_1_Template, 3, 1, "table", 120)(2, QcmTakeComponent_div_9_div_16_div_9_ng_container_14_p_2_Template, 2, 3, "p", 121);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const block_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", block_r18.table);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !block_r18.table);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "i", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Fichier joint : ", ctx_r0.paperCorrectionFilename, " ");
  }
}
function QcmTakeComponent_div_9_div_16_div_9_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.paperCorrectionError);
  }
}
function QcmTakeComponent_div_9_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 141);
    \u0275\u0275element(2, "i", 142);
    \u0275\u0275elementStart(3, "div")(4, "div", 95);
    \u0275\u0275text(5, "Cas pratique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 143);
    \u0275\u0275text(7, "Lisez attentivement les donn\xE9es, puis r\xE9digez votre r\xE9ponse dans la zone pr\xE9vue en dessous.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, QcmTakeComponent_div_9_div_16_div_9_div_8_Template, 6, 1, "div", 144);
    \u0275\u0275elementStart(9, "div", 145)(10, "div", 146);
    \u0275\u0275element(11, "i", 147);
    \u0275\u0275text(12, "\xC9nonc\xE9 / travail \xE0 faire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 148);
    \u0275\u0275template(14, QcmTakeComponent_div_9_div_16_div_9_ng_container_14_Template, 3, 2, "ng-container", 119);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 149)(16, "div", 150)(17, "label", 151);
    \u0275\u0275element(18, "i", 152);
    \u0275\u0275text(19, "Votre r\xE9ponse ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 153);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "textarea", 154);
    \u0275\u0275twoWayListener("ngModelChange", function QcmTakeComponent_div_9_div_16_div_9_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.textAnswers[q_r13.id], $event) || (ctx_r0.textAnswers[q_r13.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 155);
    \u0275\u0275element(24, "i", 156);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 157)(27, "div", 64);
    \u0275\u0275element(28, "i", 158);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 159);
    \u0275\u0275text(31, "Si vous avez trait\xE9 tout ou partie du cas sur papier, joignez une photo ou un PDF avant de soumettre.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 160)(33, "input", 161);
    \u0275\u0275listener("change", function QcmTakeComponent_div_9_div_16_div_9_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPaperCorrectionSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, QcmTakeComponent_div_9_div_16_div_9_span_34_Template, 1, 0, "span", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, QcmTakeComponent_div_9_div_16_div_9_div_35_Template, 3, 1, "div", 163)(36, QcmTakeComponent_div_9_div_16_div_9_div_36_Template, 2, 1, "div", 164);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", q_r13.caseScenario && q_r13.caseScenario.trim() !== q_r13.questionText.trim());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.caseBlocks(q_r13.questionText));
    \u0275\u0275advance(3);
    \u0275\u0275property("for", "case-answer-" + q_r13.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.wordCount(ctx_r0.textAnswers[q_r13.id]), " mot(s)");
    \u0275\u0275advance();
    \u0275\u0275property("id", "case-answer-" + q_r13.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.textAnswers[q_r13.id]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Si vous r\xE9digez votre r\xE9ponse ici, la copie papier devient facultative", ctx_r0.qcm.paperCorrectionRequired ? " (sauf si le professeur l\u2019exige)" : "", ". ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Copie papier", ctx_r0.qcm.paperCorrectionRequired ? "" : " (facultatif)", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.paperCorrectionUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionError);
  }
}
function QcmTakeComponent_div_9_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "textarea", 172);
    \u0275\u0275twoWayListener("ngModelChange", function QcmTakeComponent_div_9_div_16_div_10_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.textAnswers[q_r13.id], $event) || (ctx_r0.textAnswers[q_r13.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.textAnswers[q_r13.id]);
    \u0275\u0275property("placeholder", "D\xE9veloppez votre r\xE9ponse argument\xE9e ici...");
  }
}
function QcmTakeComponent_div_9_div_16_div_11_tr_15_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 181);
    \u0275\u0275listener("ngModelChange", function QcmTakeComponent_div_9_div_16_div_11_tr_15_td_1_Template_input_ngModelChange_1_listener($event) {
      const ci_r22 = \u0275\u0275restoreView(_r21).index;
      const ri_r23 = \u0275\u0275nextContext().index;
      const q_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setPracticalAnswer(q_r13.id, ctx_r0.tableCellKey(q_r13, ri_r23, ci_r22), $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ci_r22 = ctx.index;
    const ri_r23 = \u0275\u0275nextContext().index;
    const q_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r0.tableCellLabel(q_r13, ri_r23, ci_r22))("ngModel", ctx_r0.getPracticalAnswer(q_r13.id, ctx_r0.tableCellKey(q_r13, ri_r23, ci_r22)));
  }
}
function QcmTakeComponent_div_9_div_16_div_11_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_16_div_11_tr_15_td_1_Template, 2, 2, "td", 119);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.tableRange(ctx_r0.tableCols[q_r13.id] || 1));
  }
}
function QcmTakeComponent_div_9_div_16_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 171)(1, "div", 173);
    \u0275\u0275text(2, "Saisissez chaque valeur calcul\xE9e. Les r\xE9ponses seront compar\xE9es \xE0 la correction enregistr\xE9e par le professeur.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 174)(4, "div", 175)(5, "label", 176);
    \u0275\u0275text(6, "Nombre de lignes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 177);
    \u0275\u0275listener("ngModelChange", function QcmTakeComponent_div_9_div_16_div_11_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r20);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTableDimensions(q_r13.id, $event, ctx_r0.tableCols[q_r13.id] || 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 175)(9, "label", 176);
    \u0275\u0275text(10, "Nombre de colonnes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 178);
    \u0275\u0275listener("ngModelChange", function QcmTakeComponent_div_9_div_16_div_11_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r20);
      const q_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTableDimensions(q_r13.id, ctx_r0.tableRows[q_r13.id] || 1, $event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 179)(13, "table", 180)(14, "tbody");
    \u0275\u0275template(15, QcmTakeComponent_div_9_div_16_div_11_tr_15_Template, 2, 1, "tr", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r0.tableRows[q_r13.id] || 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.tableCols[q_r13.id] || 1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.tableRange(ctx_r0.tableRows[q_r13.id] || 1));
  }
}
function QcmTakeComponent_div_9_div_16_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275listener("click", function QcmTakeComponent_div_9_div_16_ng_container_12_div_1_Template_div_click_0_listener() {
      const c_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const q_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select(q_r13.id, c_r25.id));
    });
    \u0275\u0275elementStart(1, "div", 184);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r25 = ctx.$implicit;
    const ci_r26 = ctx.index;
    const q_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r0.answers[q_r13.id] === c_r25.id ? "#ede9fe" : "#f9fafb")("border", ctx_r0.answers[q_r13.id] === c_r25.id ? "2px solid #6366f1" : "2px solid transparent");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.answers[q_r13.id] === c_r25.id ? "#6366f1" : "#e5e7eb")("color", ctx_r0.answers[q_r13.id] === c_r25.id ? "white" : "#6b7280");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.labels[ci_r26], " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.answers[q_r13.id] === c_r25.id ? "#4338ca" : "#374151")("font-weight", ctx_r0.answers[q_r13.id] === c_r25.id ? "600" : "400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r25.choiceText, " ");
  }
}
function QcmTakeComponent_div_9_div_16_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QcmTakeComponent_div_9_div_16_ng_container_12_div_1_Template, 5, 14, "div", 182);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const q_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r13.choices);
  }
}
function QcmTakeComponent_div_9_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "div", 132);
    \u0275\u0275elementStart(2, "div", 103)(3, "div", 133)(4, "span", 134);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 135);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, QcmTakeComponent_div_9_div_16_p_8_Template, 2, 1, "p", 136)(9, QcmTakeComponent_div_9_div_16_div_9_Template, 37, 12, "div", 137)(10, QcmTakeComponent_div_9_div_16_div_10_Template, 2, 2, "div", 138)(11, QcmTakeComponent_div_9_div_16_div_11_Template, 16, 3, "div", 138)(12, QcmTakeComponent_div_9_div_16_ng_container_12_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r13 = ctx.$implicit;
    const qi_r27 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.answers[q_r13.id] ? "#10b981" : "#e5e7eb");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Q", qi_r27 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r13.points, " pt", q_r13.points > 1 ? "s" : "", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCaseQuestion(q_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCaseQuestion(q_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.questionType === "LONG_TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.questionType === "PRACTICAL" && !ctx_r0.isCaseQuestion(q_r13));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r13.questionType === "QCM");
  }
}
function QcmTakeComponent_div_9_div_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 167);
  }
}
function QcmTakeComponent_div_9_div_19_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168);
    \u0275\u0275element(1, "i", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Copie jointe : ", ctx_r0.paperCorrectionFilename, " ");
  }
}
function QcmTakeComponent_div_9_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 170);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.paperCorrectionError);
  }
}
function QcmTakeComponent_div_9_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185)(1, "div", 64);
    \u0275\u0275element(2, "i", 186);
    \u0275\u0275text(3, "Correction papier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 159);
    \u0275\u0275text(5, "Joignez la photo ou le scan de votre correction avant de soumettre le devoir.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 160)(7, "input", 161);
    \u0275\u0275listener("change", function QcmTakeComponent_div_9_div_19_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPaperCorrectionSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, QcmTakeComponent_div_9_div_19_span_8_Template, 1, 0, "span", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, QcmTakeComponent_div_9_div_19_div_9_Template, 3, 1, "div", 163)(10, QcmTakeComponent_div_9_div_19_div_10_Template, 2, 1, "div", 164);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.paperCorrectionUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paperCorrectionError);
  }
}
function QcmTakeComponent_div_9_strong_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.answered, "/", ctx_r0.qcm.questions.length, "");
  }
}
function QcmTakeComponent_div_9_strong_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.documentAnswer.trim() ? "R\xE9ponse saisie" : "R\xE9ponse vide");
  }
}
function QcmTakeComponent_div_9_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 187);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.qcm.questions.length - ctx_r0.answered, " sans r\xE9ponse ");
  }
}
function QcmTakeComponent_div_9_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
}
function QcmTakeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93);
    \u0275\u0275template(2, QcmTakeComponent_div_9_div_2_Template, 4, 1, "div", 94);
    \u0275\u0275elementStart(3, "div", 43)(4, "h2", 95);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QcmTakeComponent_div_9_p_6_Template, 2, 1, "p", 96);
    \u0275\u0275elementStart(7, "div", 97)(8, "span");
    \u0275\u0275element(9, "i", 73);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275element(12, "i", 98);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, QcmTakeComponent_div_9_div_14_Template, 2, 2, "div", 99)(15, QcmTakeComponent_div_9_div_15_Template, 6, 4, "div", 100)(16, QcmTakeComponent_div_9_div_16_Template, 13, 10, "div", 101);
    \u0275\u0275elementStart(17, "div", 102)(18, "div", 103);
    \u0275\u0275template(19, QcmTakeComponent_div_9_div_19_Template, 11, 4, "div", 104);
    \u0275\u0275elementStart(20, "div", 105)(21, "div", 50);
    \u0275\u0275template(22, QcmTakeComponent_div_9_strong_22_Template, 2, 2, "strong", 7)(23, QcmTakeComponent_div_9_strong_23_Template, 2, 1, "strong", 7)(24, QcmTakeComponent_div_9_span_24_Template, 2, 1, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 107);
    \u0275\u0275listener("click", function QcmTakeComponent_div_9_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275template(26, QcmTakeComponent_div_9_span_26_Template, 1, 0, "span", 82);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.qcm.subjectFileUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.qcm.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.qcm.questions.length ? ctx_r0.qcm.questions.length + " question(s)" : "Sujet documentaire");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.qcm.questions.length ? ctx_r0.answered + "/" + ctx_r0.qcm.questions.length + " r\xE9pondu(s)" : ctx_r0.documentAnswer.trim() ? "R\xE9ponse saisie" : "R\xE9ponse \xE0 saisir", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.subjectText && !ctx_r0.subjectShownInCase || ctx_r0.qcm.subjectFileUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.qcm.questions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.qcm.paperCorrectionRequired && !ctx_r0.hasCaseQuestion);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.qcm.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.qcm.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qcm.questions.length && ctx_r0.answered < ctx_r0.qcm.questions.length);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.submitting || ctx_r0.paperCorrectionUploading || ctx_r0.requiresPaperCorrection && !ctx_r0.paperCorrectionUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting ? "Soumission..." : "Soumettre mes r\xE9ponses", " ");
  }
}
var QcmTakeComponent = class _QcmTakeComponent {
  set proctorVideo(ref) {
    this.videoElement = ref?.nativeElement || null;
    this.attachStreamToVideo();
  }
  constructor(http, route, router, uiChrome, sanitizer) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.uiChrome = uiChrome;
    this.sanitizer = sanitizer;
    this.status = "loading";
    this.qcm = null;
    this.acces = null;
    this.password = "";
    this.starting = false;
    this.startError = "";
    this.resultat = null;
    this.answers = {};
    this.practicalAnswers = {};
    this.textAnswers = {};
    this.documentAnswer = "";
    this.paperCorrectionUrl = "";
    this.paperCorrectionFilename = "";
    this.paperCorrectionUploading = false;
    this.paperCorrectionError = "";
    this.safeSubjectUrl = null;
    this.tableRows = {};
    this.tableCols = {};
    this.labels = ["A", "B", "C", "D", "E"];
    this.submitting = false;
    this.fullscreenWarning = false;
    this.fullscreenExitCount = 0;
    this.fullscreenRemainingTime = 0;
    this.terminationReason = "";
    this.blockedMessage = "";
    this.cameraError = "";
    this.micLevel = 0;
    this.voiceWarningActive = false;
    this.voiceWarningRemaining = 0;
    this.timeRemainingLabel = "00:00";
    this.FULLSCREEN_GRACE_PERIOD_MS = 3e4;
    this.VOICE_THRESHOLD = 55;
    this.VOICE_WARNING_MS = 6e4;
    this.TIME_TICK_MS = 1e3;
    this.fullscreenCountdownInterval = null;
    this.countdownInterval = null;
    this.mediaStream = null;
    this.audioContext = null;
    this.analyser = null;
    this.micRafId = null;
    this.videoElement = null;
    this.qcmDeadlineMs = 0;
    this.caseBlocksCache = /* @__PURE__ */ new Map();
  }
  get isFullscreenMode() {
    return this.status === "active" || this.status === "terminated";
  }
  ngOnInit() {
    this.qcmId = +this.route.snapshot.paramMap.get("id");
    this.http.get(`/api/qcm/${this.qcmId}/mon-resultat`).subscribe({
      next: (r) => {
        this.resultat = r;
        this.status = "result";
      },
      error: (err) => {
        if (err.status === 423) {
          this.blockedMessage = err.error?.message || "Votre r\xE9sultat n'est pas encore disponible.";
          this.status = "blocked";
          return;
        }
        this.http.get(`/api/qcm/${this.qcmId}/acces`).subscribe({
          next: (a) => {
            this.acces = a;
            this.status = "welcome";
          },
          error: () => {
            this.router.navigate(["/qcm"]);
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.unlock();
  }
  select(questionId, choiceId) {
    this.answers[questionId] = choiceId;
  }
  setPracticalAnswer(questionId, label, value) {
    this.practicalAnswers[questionId] = __spreadProps(__spreadValues({}, this.practicalAnswers[questionId] || {}), {
      [label]: value
    });
  }
  getPracticalAnswer(questionId, label) {
    return this.practicalAnswers[questionId]?.[label] || "";
  }
  setTableDimensions(questionId, rows, cols) {
    this.tableRows[questionId] = Math.min(30, Math.max(1, Number(rows) || 1));
    this.tableCols[questionId] = Math.min(20, Math.max(1, Number(cols) || 1));
  }
  tableRange(size) {
    return Array.from({ length: Math.max(1, size) }, (_, index) => index + 1);
  }
  tableCellKey(question, row, col) {
    const index = row * (this.tableCols[question.id] || 1) + col;
    return question.valueLabels[index] || `r${row + 1}c${col + 1}`;
  }
  tableCellLabel(question, row, col) {
    return this.tableCellKey(question, row, col);
  }
  isCaseQuestion(question) {
    const type = question.questionType?.toUpperCase();
    return type === "CASE" || type === "PRACTICAL" && !!question.caseScenario?.trim();
  }
  get hasCaseQuestion() {
    return !!this.qcm?.questions.some((question) => this.isCaseQuestion(question));
  }
  get requiresPaperCorrection() {
    if (!this.qcm)
      return false;
    if (this.qcm.paperCorrectionRequired === true)
      return true;
    return this.qcm.questions.some((q) => this.isCaseQuestion(q) && !this.textAnswers[q.id]?.trim());
  }
  /** Le sujet documentaire est déjà affiché dans la question « cas pratique » : inutile de le répéter. */
  get subjectShownInCase() {
    const subject = this.qcm?.subjectText?.trim();
    if (!subject)
      return false;
    const head = subject.substring(0, 80);
    return this.qcm.questions.some((q) => this.isCaseQuestion(q) && q.questionText?.includes(head));
  }
  wordCount(text) {
    return text?.trim() ? text.trim().split(/\s+/).length : 0;
  }
  /**
   * Découpe l'énoncé en paragraphes et tableaux : les lignes contenant des tabulations
   * (tableaux extraits du document Word) ou des « | » sont rendues sous forme de tableau.
   */
  caseBlocks(text) {
    const source = (text || "").replace(/\r\n?/g, "\n");
    const cached = this.caseBlocksCache.get(source);
    if (cached)
      return cached;
    const blocks = [];
    let table = null;
    let paragraph = [];
    const flushParagraph = () => {
      if (paragraph.length) {
        const joined = paragraph.join("\n").trim();
        if (joined)
          blocks.push({ text: joined, heading: this.isHeadingLine(joined) });
      }
      paragraph = [];
    };
    const flushTable = () => {
      if (table && table.length)
        blocks.push({ table });
      table = null;
    };
    for (const rawLine of source.split("\n")) {
      const line = rawLine.trimEnd();
      const cells = line.includes("	") ? line.split("	") : line.split("|").length > 2 ? line.split("|") : null;
      if (cells) {
        flushParagraph();
        const cleaned = cells.map((c) => c.trim());
        while (cleaned.length && !cleaned[0])
          cleaned.shift();
        while (cleaned.length && !cleaned[cleaned.length - 1])
          cleaned.pop();
        if (cleaned.length)
          (table ??= []).push(cleaned);
      } else if (!line.trim()) {
        flushTable();
        flushParagraph();
      } else {
        flushTable();
        if (this.isHeadingLine(line)) {
          flushParagraph();
          blocks.push({ text: line.trim(), heading: true });
        } else {
          paragraph.push(line);
        }
      }
    }
    flushTable();
    flushParagraph();
    this.caseBlocksCache.set(source, blocks);
    return blocks;
  }
  isHeadingLine(line) {
    const t = line.trim();
    if (t.length > 90 || t.includes("\n"))
      return false;
    return /^(exercice|question|partie|travail à faire|annexe|dossier|cas|document)\b/i.test(t) || /^[IVX]+[.)-]\s/.test(t) || t === t.toUpperCase() && /[A-ZÀ-Ý]{4,}/.test(t);
  }
  onPaperCorrectionSelected(event) {
    const file = event.target.files?.[0];
    if (!file || !this.qcm)
      return;
    this.paperCorrectionUploading = true;
    this.paperCorrectionError = "";
    const form = new FormData();
    form.append("file", file);
    this.http.post(`/api/qcm/${this.qcmId}/passage/${this.qcm.passageId}/paper-correction`, form).subscribe({
      next: (response) => {
        this.paperCorrectionUrl = response.url;
        this.paperCorrectionFilename = response.filename;
        this.paperCorrectionUploading = false;
      },
      error: (error) => {
        this.paperCorrectionError = error.error?.message || "Impossible de joindre la copie papier.";
        this.paperCorrectionUploading = false;
      }
    });
  }
  get answered() {
    return Object.keys(this.answers).length + Object.values(this.practicalAnswers).filter((values) => Object.values(values).some((value) => value.trim())).length + Object.values(this.textAnswers).filter((value) => value.trim()).length;
  }
  get pctColor() {
    if (!this.resultat)
      return "#6366f1";
    const p = parseInt(this.resultat.percentage);
    return p >= 80 ? "#10b981" : p >= 60 ? "#3b82f6" : p >= 50 ? "#f59e0b" : "#ef4444";
  }
  startQcm() {
    if (this.starting || !this.acces)
      return;
    if (this.acces.passwordRequired && !this.password.trim())
      return;
    this.enterFullscreen();
    this.starting = true;
    this.startError = "";
    this.http.post(`/api/qcm/${this.qcmId}/commencer`, { password: this.password.trim() }).subscribe({
      next: (q) => {
        this.starting = false;
        this.loadQcm(q);
        this.activate();
      },
      error: (err) => {
        this.starting = false;
        if (document.fullscreenElement)
          document.exitFullscreen().catch(() => {
          });
        this.startError = err.error?.message || "Impossible de d\xE9marrer le devoir.";
      }
    });
  }
  loadQcm(q) {
    this.qcm = q;
    this.paperCorrectionUrl = q.paperCorrectionUrl || "";
    this.paperCorrectionFilename = q.paperCorrectionFilename || "";
    this.safeSubjectUrl = q.subjectFileUrl ? this.sanitizer.bypassSecurityTrustResourceUrl(q.subjectFileUrl) : null;
    q.questions.filter((question) => question.questionType === "PRACTICAL").forEach((question) => {
      this.tableRows[question.id] = 1;
      this.tableCols[question.id] = Math.max(1, question.valueLabels.length);
    });
  }
  activate() {
    this.status = "active";
    this.lockScroll();
    this.uiChrome.hide();
    this.startQcmCountdown();
    this.enableProctoring();
  }
  get timeRemainingSeconds() {
    if (!this.qcm || !this.qcmDeadlineMs)
      return 0;
    return Math.max(0, Math.ceil((this.qcmDeadlineMs - Date.now()) / 1e3));
  }
  startQcmCountdown() {
    const durationMinutes = Math.max(1, this.qcm?.estimatedDurationMinutes ?? 30);
    const startedAt = this.qcm?.startedAt ? new Date(this.qcm.startedAt).getTime() : Date.now();
    const deadlineMs = startedAt + durationMinutes * 60 * 1e3;
    this.qcmDeadlineMs = deadlineMs;
    this.updateTimeRemainingLabel();
    this.clearQcmCountdown();
    this.countdownInterval = setInterval(() => {
      const remainingSeconds = this.timeRemainingSeconds;
      this.updateTimeRemainingLabel();
      if (remainingSeconds <= 0) {
        this.clearQcmCountdown();
        if (this.status === "active") {
          this.terminateSession("Le temps allou\xE9 \xE0 ce devoir est \xE9coul\xE9. Vos r\xE9ponses ont \xE9t\xE9 soumises automatiquement.");
        }
      }
    }, this.TIME_TICK_MS);
  }
  clearQcmCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }
  updateTimeRemainingLabel() {
    const totalSeconds = this.timeRemainingSeconds;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    this.timeRemainingLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  buildReponses() {
    return this.qcm.questions.map((q) => {
      const base = {
        questionId: q.id,
        choiceId: this.answers[q.id] || null,
        values: this.practicalAnswers[q.id] || {}
      };
      if (this.isCaseQuestion(q) || q.questionType?.toUpperCase() === "LONG_TEXT") {
        return __spreadProps(__spreadValues({}, base), {
          values: { answer: this.textAnswers[q.id] || "" }
        });
      }
      return base;
    });
  }
  submit() {
    if (!this.qcm || this.submitting)
      return;
    this.submitting = true;
    this.http.post(`/api/qcm/${this.qcmId}/soumettre`, {
      reponses: this.buildReponses(),
      documentAnswer: this.documentAnswer
    }).subscribe({
      next: (r) => {
        this.resultat = r;
        this.status = "result";
        this.submitting = false;
        this.unlock();
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
  // --- Anti-cheat : blocage du défilement de la page ---
  lockScroll() {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
  unlockScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
  // --- Anti-cheat : plein écran ---
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
      if (this.fullscreenExitCount >= 2) {
        this.recordFullscreenViolation(this.fullscreenExitCount, false);
        this.fullscreenRemainingTime = 0;
        setTimeout(() => {
          this.terminateSession("Vous avez quitt\xE9 le mode plein \xE9cran \xE0 deux reprises. Vos r\xE9ponses ont \xE9t\xE9 soumises automatiquement.");
        }, 500);
      } else {
        this.recordFullscreenViolation(this.fullscreenExitCount, true);
        this.startFullscreenCountdown(this.FULLSCREEN_GRACE_PERIOD_MS);
      }
    } else if (isFullscreen && this.fullscreenWarning) {
      this.fullscreenWarning = false;
      this.fullscreenRemainingTime = 0;
      this.clearCountdownInterval();
    }
  }
  startFullscreenCountdown(gracePeriodMs) {
    this.clearCountdownInterval();
    const endTime = Date.now() + gracePeriodMs;
    this.fullscreenCountdownInterval = setInterval(() => {
      const remaining = Math.max(0, endTime - Date.now());
      this.fullscreenRemainingTime = Math.ceil(remaining / 1e3);
      if (remaining <= 0) {
        this.clearCountdownInterval();
        if (this.status === "active" && this.fullscreenWarning) {
          this.terminateSession(`Vous avez quitt\xE9 le mode plein \xE9cran pendant plus de ${gracePeriodMs / 1e3} secondes. Vos r\xE9ponses ont \xE9t\xE9 soumises automatiquement.`);
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
    if (!this.qcm)
      return;
    this.http.post(`/api/qcm/${this.qcmId}/passage/${this.qcm.passageId}/fullscreen-violation`, {
      violationNumber,
      details: `Sortie du plein \xE9cran - Tentative ${violationNumber}/2`,
      shouldTerminate: !shouldContinue
    }).subscribe({
      next: () => {
      },
      error: (err) => console.error("Erreur lors de l'enregistrement de la violation:", err)
    });
  }
  // --- Anti-cheat : copier / couper / coller / clic droit ---
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
  // --- Anti-cheat : empêcher la fermeture/quitter la page ---
  onBeforeUnload(event) {
    if (this.status === "active") {
      event.preventDefault();
      event.returnValue = true;
    }
  }
  unlock() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {
      });
    }
    this.clearCountdownInterval();
    this.clearQcmCountdown();
    this.fullscreenWarning = false;
    this.fullscreenRemainingTime = 0;
    this.unlockScroll();
    this.stopProctoring();
    this.uiChrome.show();
  }
  terminateSession(reason) {
    if (this.status !== "active")
      return;
    this.terminationReason = reason;
    this.status = "terminated";
    this.unlock();
    this.http.post(`/api/qcm/${this.qcmId}/soumettre`, {
      reponses: this.buildReponses(),
      documentAnswer: this.documentAnswer
    }).subscribe({
      next: (r) => {
        this.resultat = r;
      },
      error: () => {
      }
    });
  }
  enableProctoring() {
    return __async(this, null, function* () {
      try {
        this.mediaStream = yield navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        this.attachStreamToVideo();
        this.startMicMeter();
      } catch {
        this.cameraError = "Impossible d'activer la cam\xE9ra/micro. La surveillance du devoir est d\xE9sactiv\xE9e.";
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
      }
      this.voiceWarningRemaining = Math.max(0, Math.ceil((this.VOICE_WARNING_MS - 1e3) / 1e3));
      if (this.micLevel >= this.VOICE_THRESHOLD && this.voiceWarningActive) {
        this.terminateSession("Le niveau sonore est trop \xE9lev\xE9 pendant le devoir. La session a \xE9t\xE9 interrompue.");
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
    this.cameraError = "";
  }
  static {
    this.\u0275fac = function QcmTakeComponent_Factory(t) {
      return new (t || _QcmTakeComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UiChromeService), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmTakeComponent, selectors: [["app-qcm-take"]], viewQuery: function QcmTakeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.proctorVideo = _t.first);
      }
    }, hostBindings: function QcmTakeComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("fullscreenchange", function QcmTakeComponent_fullscreenchange_HostBindingHandler() {
          return ctx.onFullscreenChange();
        }, false, \u0275\u0275resolveDocument)("copy", function QcmTakeComponent_copy_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("cut", function QcmTakeComponent_cut_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("paste", function QcmTakeComponent_paste_HostBindingHandler($event) {
          return ctx.blockClipboard($event);
        }, false, \u0275\u0275resolveDocument)("contextmenu", function QcmTakeComponent_contextmenu_HostBindingHandler($event) {
          return ctx.blockContextMenu($event);
        }, false, \u0275\u0275resolveDocument)("beforeunload", function QcmTakeComponent_beforeunload_HostBindingHandler($event) {
          return ctx.onBeforeUnload($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 21, consts: [["proctorVideo", ""], [1, "fade-in-up"], ["class", "text-center py-5", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center p-4", "style", "position:fixed;inset:0;background:rgba(20,20,30,.96);z-index:3000;pointer-events:all", 4, "ngIf"], ["class", "d-flex flex-column align-items-center justify-content-center text-center p-4", "style", "position:fixed;inset:0;background:rgba(20,20,30,.92);z-index:2000;color:#fff", 4, "ngIf"], ["class", "proctor-widget", 4, "ngIf"], ["class", "alert alert-danger small d-flex align-items-center gap-2", "style", "position:fixed;bottom:1rem;left:1rem;right:220px;max-width:480px;z-index:2100", 4, "ngIf"], [4, "ngIf"], ["style", "flex:1 1 auto;min-height:0;overflow-y:auto", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "mt-3", "text-muted"], [1, "d-flex", "align-items-center", "justify-content-center", "p-4", 2, "position", "fixed", "inset", "0", "background", "rgba(20,20,30,.96)", "z-index", "3000", "pointer-events", "all"], [1, "card", "border-0", "shadow", "text-center", "p-5", 2, "max-width", "500px"], [2, "font-size", "3.5rem"], [1, "mt-3", "text-danger", "fw-bold"], [1, "text-muted", "mt-2"], [1, "text-muted", "small", "mt-2"], [1, "text-muted", "mt-2", 2, "max-width", "480px", "margin", "0 auto"], ["routerLink", "/qcm", 1, "btn", "btn-outline-secondary", "mt-3", 2, "border-radius", "12px"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "p-4", 2, "position", "fixed", "inset", "0", "background", "rgba(20,20,30,.92)", "z-index", "2000", "color", "#fff"], [2, "font-size", "3rem"], [1, "mt-3", "fw-bold"], [1, "mb-2", 2, "max-width", "480px", "color", "#e5e7eb"], [1, "mb-4", 2, "max-width", "480px", "color", "#e5e7eb"], [1, "btn", "btn-lg", 2, "background", "#6366f1", "color", "#fff", "border-radius", "12px", 3, "click"], [1, "proctor-widget"], [1, "proctor-video-wrap"], ["autoplay", "", "muted", "", "playsinline", "", 1, "proctor-video"], [1, "proctor-rec"], [1, "proctor-rec-dot"], [1, "proctor-info"], [1, "small", "fw-semibold", "text-white"], [1, "bi", "bi-eye-fill", "me-1"], [1, "small", "text-light"], [1, "proctor-mic", "mt-1"], [1, "bi", "bi-mic-fill", "text-white"], [1, "proctor-mic-bar"], [1, "proctor-mic-fill"], [1, "small", "text-light", "mt-2"], [1, "bi", "bi-clock-history", "me-1"], [1, "alert", "alert-danger", "small", "d-flex", "align-items-center", "gap-2", 2, "position", "fixed", "bottom", "1rem", "left", "1rem", "right", "220px", "max-width", "480px", "z-index", "2100"], [1, "bi", "bi-camera-video-off"], [1, "text-center", "mb-4"], [2, "font-size", "4rem"], [1, "fw-bold", "mt-2"], [1, "text-muted"], [1, "d-inline-flex", "align-items-center", "gap-4", "p-4", "rounded-4", "mb-3", 2, "background", "linear-gradient(135deg,#f8f9ff,#ede9fe)"], [1, "text-center"], [1, "fw-bold", 2, "font-size", "2.5rem", "color", "#6366f1"], [1, "text-muted", "small"], [2, "font-size", "2rem", "color", "#9ca3af"], [1, "fw-bold", 2, "font-size", "2.5rem", "color", "#374151"], [2, "width", "2px", "height", "60px", "background", "#e5e7eb"], [1, "fw-bold", 2, "font-size", "2.5rem"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px"], [1, "card-body", "p-0"], [1, "p-4", "border-bottom"], [1, "fw-bold", "mb-0"], ["class", "d-flex align-items-start gap-3 p-4", 3, "background", 4, "ngFor", "ngForOf"], ["routerLink", "/qcm", 1, "btn", "btn-outline-primary", "w-100", 2, "border-radius", "12px"], [1, "d-flex", "align-items-start", "gap-3", "p-4"], [2, "width", "32px", "height", "32px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "1rem", "font-weight", "700", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-semibold", "mb-1"], [1, "small"], ["class", "small mt-1", "style", "color:#6b7280", 4, "ngIf"], [1, "small", "mt-1", 2, "color", "#6b7280"], [2, "color", "#10b981"], [1, "card", "border-0", "shadow", "p-5", "text-center", 2, "border-radius", "16px"], ["class", "text-muted mb-4", 4, "ngIf"], [1, "alert", "alert-light", "border", "text-start", "mb-3"], [1, "bi", "bi-person", "me-1"], [1, "bi", "bi-question-circle", "me-1"], [1, "alert", "alert-primary", "small", "text-start", "mb-3"], [1, "alert", "alert-danger", "small", "text-start", "mb-3"], [1, "bi", "bi-shield-exclamation", "me-1"], [1, "alert", "alert-info", "small", "text-start", "mb-4"], [1, "bi", "bi-shield-lock", "me-1"], ["class", "text-start mb-4 mx-auto", "style", "max-width:360px", 4, "ngIf"], ["class", "alert alert-danger small", 4, "ngIf"], [1, "btn", "btn-lg", "fw-semibold", 2, "background", "#6366f1", "color", "#fff", "border-radius", "12px", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-muted", "mb-4"], [1, "bi", "bi-mortarboard", "me-1"], [1, "text-start", "mb-4", "mx-auto", 2, "max-width", "360px"], ["for", "qcmPassword", 1, "form-label", "fw-semibold"], [1, "bi", "bi-key", "me-1"], ["id", "qcmPassword", "type", "password", "autocomplete", "off", "placeholder", "Mot de passe communiqu\xE9 par votre professeur", 1, "form-control", "form-control-lg", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "invalid-feedback"], [1, "alert", "alert-danger", "small"], [1, "spinner-border", "spinner-border-sm", "me-2"], [2, "flex", "1 1 auto", "min-height", "0", "overflow-y", "auto"], [2, "max-width", "760px", "margin", "0 auto", "padding", "24px 16px"], ["class", "d-flex justify-content-end mb-3", 4, "ngIf"], [1, "fw-bold"], ["class", "text-muted", 4, "ngIf"], [1, "d-flex", "justify-content-center", "gap-3", "text-muted", "small"], [1, "bi", "bi-circle-fill", "me-1", 2, "font-size", ".4rem", "color", "#10b981"], ["class", "progress mb-4", "style", "height:6px;border-radius:4px", 4, "ngIf"], ["class", "card border-0 shadow-sm mb-4", "style", "border-radius:16px", 4, "ngIf"], ["class", "card border-0 shadow-sm mb-3", "style", "border-radius:16px;overflow:hidden", 4, "ngFor", "ngForOf"], [1, "card", "border-0", "shadow-sm", "mt-4", 2, "border-radius", "16px", "background", "#f8f9ff"], [1, "card-body", "p-4"], ["class", "mb-4 p-3 rounded-3", "style", "background:#fff8e1;border:1px solid #f5d06f", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap"], ["style", "color:#f59e0b", 4, "ngIf"], [1, "btn", "fw-semibold", "px-5", "py-2", 2, "background", "linear-gradient(135deg,#10b981,#059669)", "color", "white", "border-radius", "12px", 3, "click", "disabled"], [1, "d-flex", "justify-content-end", "mb-3"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-outline-primary", "btn-sm", 3, "href"], [1, "bi", "bi-file-earmark-text", "me-1"], [1, "progress", "mb-4", 2, "height", "6px", "border-radius", "4px"], [1, "progress-bar", 2, "background", "#6366f1"], ["class", "subject-text mb-4", 4, "ngIf"], ["class", "ratio ratio-4x3 mb-4", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "subject-text", "mb-4"], [1, "case-section-title", "mb-2"], [1, "case-section", "case-text", 2, "max-height", "520px", "overflow", "auto"], [4, "ngFor", "ngForOf"], ["class", "table table-sm table-bordered case-table mb-3", 4, "ngIf"], ["class", "mb-2", 3, "case-heading", 4, "ngIf"], [1, "table", "table-sm", "table-bordered", "case-table", "mb-3"], [3, "table-light", 4, "ngFor", "ngForOf"], [3, "fw-semibold", 4, "ngFor", "ngForOf"], [1, "mb-2"], [1, "ratio", "ratio-4x3", "mb-4"], ["title", "Sujet du devoir", 2, "border", "1px solid #dee2e6", "border-radius", "8px", 3, "src"], [1, "alert", "alert-warning"], [1, "form-label", "fw-semibold"], ["rows", "12", "placeholder", "R\xE9digez votre r\xE9solution et vos calculs ici...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "card", "border-0", "shadow-sm", "mb-3", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "4px"], [1, "d-flex", "gap-2", "mb-3"], [1, "badge", "rounded-pill", 2, "background", "#ede9fe", "color", "#6d28d9"], [1, "text-muted", "small", 2, "margin-top", "2px"], ["class", "fw-semibold mb-3", 4, "ngIf"], ["class", "case-block mb-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "fw-semibold", "mb-3"], [1, "case-block", "mb-3"], [1, "case-banner"], [1, "bi", "bi-briefcase-fill"], [1, "small", "opacity-75"], ["class", "case-section", 4, "ngIf"], [1, "case-section", "case-section-statement"], [1, "case-section-title"], [1, "bi", "bi-list-check", "me-1"], [1, "case-text"], [1, "case-answer"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "flex-wrap", "gap-2"], [1, "fw-semibold", "mb-0", 3, "for"], [1, "bi", "bi-pencil-square", "me-1"], [1, "small", "text-muted"], ["rows", "14", "spellcheck", "true", "placeholder", "R\xE9digez ici votre r\xE9solution : raisonnement, calculs, tableaux (une ligne par ligne du tableau, colonnes s\xE9par\xE9es par | ), conclusion...", 1, "form-control", "case-textarea", 3, "ngModelChange", "id", "ngModel"], [1, "small", "text-muted", "mt-1"], [1, "bi", "bi-info-circle", "me-1"], [1, "case-paper"], [1, "bi", "bi-upload", "me-2"], [1, "small", "text-muted", "mb-2"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["type", "file", "accept", "image/*,.pdf", 1, "form-control", "form-control-sm", 2, "max-width", "420px", 3, "change", "disabled"], ["class", "spinner-border spinner-border-sm text-primary", 4, "ngIf"], ["class", "small text-success mt-2", 4, "ngIf"], ["class", "small text-danger mt-2", 4, "ngIf"], [1, "case-section"], [1, "bi", "bi-clipboard-data", "me-1"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "small", "text-success", "mt-2"], [1, "bi", "bi-check-circle", "me-1"], [1, "small", "text-danger", "mt-2"], [1, "mb-3"], ["rows", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "alert", "alert-info", "small"], [1, "row", "g-2", "mb-3"], [1, "col-sm-6"], [1, "form-label", "small", "fw-semibold"], ["type", "number", "min", "1", "max", "30", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "align-middle", "mb-0"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "d-flex align-items-center gap-3 p-3 mb-2 rounded-3", "style", "cursor:pointer;transition:all .15s", 3, "background", "border", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "mb-2", "rounded-3", 2, "cursor", "pointer", "transition", "all .15s", 3, "click"], [2, "width", "28px", "height", "28px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", ".85rem", "font-weight", "700", "flex-shrink", "0"], [1, "mb-4", "p-3", "rounded-3", 2, "background", "#fff8e1", "border", "1px solid #f5d06f"], [1, "bi", "bi-file-earmark-image", "me-2"], [2, "color", "#f59e0b"]], template: function QcmTakeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, QcmTakeComponent_div_1_Template, 4, 0, "div", 2)(2, QcmTakeComponent_div_2_Template, 12, 1, "div", 3)(3, QcmTakeComponent_div_3_Template, 9, 1, "div", 2)(4, QcmTakeComponent_div_4_Template, 16, 2, "div", 4)(5, QcmTakeComponent_div_5_Template, 22, 3, "div", 5)(6, QcmTakeComponent_div_6_Template, 3, 1, "div", 6)(7, QcmTakeComponent_div_7_Template, 35, 9, "div", 7)(8, QcmTakeComponent_div_8_Template, 41, 10, "div", 7)(9, QcmTakeComponent_div_9_Template, 28, 15, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("height", ctx.isFullscreenMode ? "100vh" : null)("display", ctx.isFullscreenMode ? "flex" : null)("flex-direction", ctx.isFullscreenMode ? "column" : null)("overflow", ctx.isFullscreenMode ? "hidden" : null)("max-width", ctx.isFullscreenMode ? null : "760px")("margin", ctx.isFullscreenMode ? null : "0 auto");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "loading");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "terminated");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "blocked");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.fullscreenWarning);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.cameraError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "result" && ctx.resultat);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "welcome" && ctx.acces);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.status === "active" && ctx.qcm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterLink], styles: ["\n\n.case-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.case-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: #fff;\n}\n.case-banner[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.case-section[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  border-radius: 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n}\n.case-section-statement[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  border-color: #c7d2fe;\n}\n.case-section-title[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .05em;\n  color: #4338ca;\n  margin-bottom: 10px;\n}\n.case-text[_ngcontent-%COMP%] {\n  font-size: .98rem;\n  line-height: 1.7;\n  color: #1f2937;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.case-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0 !important;\n}\n.case-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #312e81;\n  margin-top: 6px;\n}\n.case-table[_ngcontent-%COMP%] {\n  background: #fff;\n  font-size: .9rem;\n  white-space: normal;\n}\n.case-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n}\n.case-answer[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  border-radius: 12px;\n  background: #fff;\n  border: 2px solid #10b981;\n}\n.case-textarea[_ngcontent-%COMP%] {\n  min-height: 280px;\n  font-size: .98rem;\n  line-height: 1.6;\n  resize: vertical;\n  border-radius: 10px;\n}\n.case-paper[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 12px;\n  background: #fff8e1;\n  border: 1px solid #f5d06f;\n}\n.proctor-widget[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 12px;\n  bottom: 12px;\n  width: 150px;\n  background: #1e1e1e;\n  border-radius: 8px;\n  box-shadow: 0 3px 12px rgba(0, 0, 0, .3);\n  overflow: hidden;\n  z-index: 2050;\n}\n.proctor-video-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000;\n}\n.proctor-video[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n  height: 84px;\n  object-fit: cover;\n  background: #000;\n}\n.proctor-rec[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  padding: 1px 4px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, .55);\n  color: #fff;\n  font-size: .58rem;\n}\n.proctor-rec-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ff4d4f;\n  animation: _ngcontent-%COMP%_proctor-blink 1.2s infinite;\n}\n@keyframes _ngcontent-%COMP%_proctor-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .2;\n  }\n}\n.proctor-info[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n}\n.proctor-info[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-size: .65rem;\n  line-height: 1.2;\n}\n.proctor-mic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.proctor-mic-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #3a3a3a;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.proctor-mic-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #27c93f;\n  transition: width .08s linear;\n}\n@media (max-width: 576px) {\n  .proctor-widget[_ngcontent-%COMP%] {\n    right: 8px;\n    bottom: 8px;\n    width: 112px;\n  }\n  .proctor-video[_ngcontent-%COMP%] {\n    width: 112px;\n    height: 63px;\n  }\n  .proctor-info[_ngcontent-%COMP%] {\n    padding: 4px 5px;\n  }\n  .proctor-info[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n    font-size: .56rem;\n  }\n}\n/*# sourceMappingURL=qcm-take.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmTakeComponent, { className: "QcmTakeComponent" });
})();
export {
  QcmTakeComponent
};
//# sourceMappingURL=chunk-2UGJDDPE.js.map

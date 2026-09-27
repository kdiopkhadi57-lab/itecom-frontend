import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  ActivatedRoute,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SMYYTT5I.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/qcm/qcm-create.component.ts
var _c0 = ["wordFileInput"];
function QcmCreateComponent_div_9_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function QcmCreateComponent_div_9_i_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 65);
  }
}
function QcmCreateComponent_div_9_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 67);
    \u0275\u0275text(2, "Format attendu dans le fichier Word :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 68);
    \u0275\u0275text(4, "Titre: Examen Java Chapitre 3\nDescription: Dur\xE9e 30 minutes\nQuestion 1: Qu'est-ce qu'un objet en Java ?\nA) Un type primitif\nB) Une instance de classe\nC) Un tableau\nBonne r\xE9ponse: B Question 2: Quelle est la taille d'un int ?\nA) 8 bits B) 16 bits C) 32 bits D) 64 bits\nBonne r\xE9ponse: C");
    \u0275\u0275elementEnd()();
  }
}
function QcmCreateComponent_div_9_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.wordError, " ");
  }
}
function QcmCreateComponent_div_9_div_22_div_15_div_8_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 90);
  }
}
function QcmCreateComponent_div_9_div_22_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QcmCreateComponent_div_9_div_22_div_15_div_8_i_5_Template, 1, 0, "i", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ci_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", c_r6.isCorrect ? "#10b981" : "#6b7280");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.labels[ci_r7]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", c_r6.isCorrect ? "#059669" : "#374151");
    \u0275\u0275classProp("fw-semibold", c_r6.isCorrect);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r6.choiceText || "(vide)", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r6.isCorrect);
  }
}
function QcmCreateComponent_div_9_div_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, QcmCreateComponent_div_9_div_22_div_15_div_8_Template, 6, 9, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r8 = ctx.$implicit;
    const qi_r9 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", qi_r9 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r8.questionText || "(sans texte)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r8.points, " pt");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r8.choices);
  }
}
function QcmCreateComponent_div_9_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72)(2, "div", 73)(3, "span", 74);
    \u0275\u0275element(4, "i", 75);
    \u0275\u0275text(5, "Import\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "button", 76);
    \u0275\u0275listener("click", function QcmCreateComponent_div_9_div_22_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.wordPreview = null;
      return \u0275\u0275resetView(ctx_r2.wordError = "");
    });
    \u0275\u0275element(10, "i", 77);
    \u0275\u0275text(11, "Annuler ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 78);
    \u0275\u0275listener("click", function QcmCreateComponent_div_9_div_22_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyWordPreview());
    });
    \u0275\u0275element(13, "i", 79);
    \u0275\u0275text(14, "Utiliser ces questions ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, QcmCreateComponent_div_9_div_22_div_15_Template, 9, 4, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.wordPreview.questions.length, " question(s) d\xE9tect\xE9e(s)");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.wordPreview.questions);
  }
}
function QcmCreateComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 10)(2, "div", 54)(3, "div", 55);
    \u0275\u0275text(4, " \u{1F4C4} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h6", 6);
    \u0275\u0275text(7, "Importer depuis un fichier Word");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9, "Importez un fichier .docx structur\xE9 et les questions seront extraites automatiquement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 56)(11, "button", 57);
    \u0275\u0275listener("click", function QcmCreateComponent_div_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadTemplate());
    });
    \u0275\u0275element(12, "i", 58);
    \u0275\u0275text(13, "T\xE9l\xE9charger le mod\xE8le ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 59);
    \u0275\u0275listener("click", function QcmCreateComponent_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const wordFileInput_r4 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(wordFileInput_r4.click());
    });
    \u0275\u0275template(15, QcmCreateComponent_div_9_span_15_Template, 1, 0, "span", 52)(16, QcmCreateComponent_div_9_i_16_Template, 1, 0, "i", 60);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 61, 1);
    \u0275\u0275listener("change", function QcmCreateComponent_div_9_Template_input_change_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWordFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, QcmCreateComponent_div_9_div_20_Template, 5, 0, "div", 62)(21, QcmCreateComponent_div_9_div_21_Template, 3, 1, "div", 63)(22, QcmCreateComponent_div_9_div_22_Template, 16, 2, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r2.wordLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.wordLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.wordLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.wordLoading ? "Lecture..." : "Importer un .docx", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.wordError && !ctx_r2.wordPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.wordError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.wordPreview);
  }
}
function QcmCreateComponent_small_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.subjectFile.name);
  }
}
function QcmCreateComponent_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.correctionFile.name);
  }
}
function QcmCreateComponent_div_51_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "label", 13);
    \u0275\u0275text(2, "Correction de r\xE9f\xE9rence par valeur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 114);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_div_28_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const q_r11 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.correctionData, $event) || (q_r11.correctionData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 115);
    \u0275\u0275text(5, "JSON strict : chaque cl\xE9 devient un champ \xE9tudiant. Les valeurs sont compar\xE9es avec une tol\xE9rance de 0,1 %.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", q_r11.correctionData);
  }
}
function QcmCreateComponent_div_51_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "label", 13);
    \u0275\u0275text(2, "Contexte du cas de commerce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 117);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_div_29_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r11 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.caseScenario, $event) || (q_r11.caseScenario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 13);
    \u0275\u0275text(5, "Donn\xE9es de correction / r\xE9ponse attendue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "textarea", 118);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_div_29_Template_textarea_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const q_r11 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.correctionData, $event) || (q_r11.correctionData = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 115);
    \u0275\u0275text(8, "Le cas peut m\xEAler contexte, calculs et analyse strat\xE9gique pour un devoir d\u2019\xE9cole de commerce.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", q_r11.caseScenario);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", q_r11.correctionData);
  }
}
function QcmCreateComponent_div_51_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "label", 13);
    \u0275\u0275text(2, "R\xE9ponse attendue / grille d\u2019\xE9valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 120);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_div_30_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r15);
      const q_r11 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.expectedAnswer, $event) || (q_r11.expectedAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", q_r11.expectedAnswer);
  }
}
function QcmCreateComponent_div_51_ng_container_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 124)(1, "div", 125);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_ng_container_31_div_1_Template_input_ngModelChange_3_listener($event) {
      const c_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(c_r18.choiceText, $event) || (c_r18.choiceText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 127)(5, "input", 128);
    \u0275\u0275listener("change", function QcmCreateComponent_div_51_ng_container_31_div_1_Template_input_change_5_listener() {
      const ci_r19 = \u0275\u0275restoreView(_r17).index;
      const q_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCorrect(q_r11, ci_r19));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 129);
    \u0275\u0275text(7, " Bonne r\xE9ponse ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 130);
    \u0275\u0275listener("click", function QcmCreateComponent_div_51_ng_container_31_div_1_Template_button_click_8_listener() {
      const ci_r19 = \u0275\u0275restoreView(_r17).index;
      const q_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeChoice(q_r11, ci_r19));
    });
    \u0275\u0275element(9, "i", 131);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    const ci_r19 = ctx.index;
    const ctx_r19 = \u0275\u0275nextContext(2);
    const q_r11 = ctx_r19.$implicit;
    const qi_r12 = ctx_r19.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.labels[ci_r19], " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", c_r18.isCorrect ? "#10b981" : "")("background", c_r18.isCorrect ? "#f0fdf4" : "");
    \u0275\u0275twoWayProperty("ngModel", c_r18.choiceText);
    \u0275\u0275property("placeholder", "Choix " + ctx_r2.labels[ci_r19] + "...");
    \u0275\u0275advance(2);
    \u0275\u0275property("name", "correct_" + qi_r12)("checked", c_r18.isCorrect);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", q_r11.choices.length <= 2);
  }
}
function QcmCreateComponent_div_51_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, QcmCreateComponent_div_51_ng_container_31_div_1_Template, 10, 10, "div", 121);
    \u0275\u0275elementStart(2, "button", 122);
    \u0275\u0275listener("click", function QcmCreateComponent_div_51_ng_container_31_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const q_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addChoice(q_r11));
    });
    \u0275\u0275element(3, "i", 123);
    \u0275\u0275text(4, "Ajouter un choix ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const q_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", q_r11.choices);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", q_r11.choices.length >= 5);
  }
}
function QcmCreateComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275element(1, "div", 92);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 93)(4, "div", 94)(5, "span", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_Template_input_ngModelChange_7_listener($event) {
      const q_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.questionText, $event) || (q_r11.questionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 97)(9, "div", 98)(10, "div", 99)(11, "span", 100);
    \u0275\u0275text(12, "pts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_Template_input_ngModelChange_13_listener($event) {
      const q_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.points, $event) || (q_r11.points = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 102);
    \u0275\u0275listener("click", function QcmCreateComponent_div_51_Template_button_click_14_listener() {
      const qi_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeQuestion(qi_r12));
    });
    \u0275\u0275element(15, "i", 103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 12)(17, "label", 13);
    \u0275\u0275text(18, "Type de question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 104);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_51_Template_select_ngModelChange_19_listener($event) {
      const q_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(q_r11.questionType, $event) || (q_r11.questionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 105);
    \u0275\u0275text(21, "Question \xE0 choix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 106);
    \u0275\u0275text(23, "Cas pratique / calcul");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 107);
    \u0275\u0275text(25, "\xC9tude de cas de commerce");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 108);
    \u0275\u0275text(27, "R\xE9ponse \xE9crite argument\xE9e");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, QcmCreateComponent_div_51_div_28_Template, 6, 1, "div", 109)(29, QcmCreateComponent_div_51_div_29_Template, 9, 2, "div", 110)(30, QcmCreateComponent_div_51_div_30_Template, 4, 1, "div", 111)(31, QcmCreateComponent_div_51_ng_container_31_Template, 5, 2, "ng-container", 112);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    const qi_r12 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Q", qi_r12 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", q_r11.questionText);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", q_r11.points);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.questions.length === 1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", q_r11.questionType);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", q_r11.questionType === "PRACTICAL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r11.questionType === "CASE" || q_r11.questionType === "PRACTICAL");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r11.questionType === "LONG_TEXT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", q_r11.questionType === "QCM");
  }
}
function QcmCreateComponent_span_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 132);
  }
}
function QcmCreateComponent_i_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 133);
  }
}
function QcmCreateComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.studentError, " ");
  }
}
function QcmCreateComponent_div_87_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275element(1, "i", 149);
    \u0275\u0275text(2, " Certains mots de passe sont utilis\xE9s par plusieurs \xE9tudiants. Chaque \xE9tudiant doit avoir un mot de passe unique. ");
    \u0275\u0275elementEnd();
  }
}
function QcmCreateComponent_div_87_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_87_tr_31_Template_input_ngModelChange_4_listener($event) {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(s_r24.lastName, $event) || (s_r24.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_87_tr_31_Template_input_ngModelChange_6_listener($event) {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(s_r24.firstName, $event) || (s_r24.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_87_tr_31_Template_input_ngModelChange_8_listener($event) {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(s_r24.level, $event) || (s_r24.level = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_87_tr_31_Template_input_ngModelChange_10_listener($event) {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(s_r24.email, $event) || (s_r24.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 99)(13, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_div_87_tr_31_Template_input_ngModelChange_13_listener($event) {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(s_r24.password, $event) || (s_r24.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 155);
    \u0275\u0275listener("click", function QcmCreateComponent_div_87_tr_31_Template_button_click_14_listener() {
      const s_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(s_r24.password = ctx_r2.generatePassword());
    });
    \u0275\u0275element(15, "i", 156);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td")(17, "button", 157);
    \u0275\u0275listener("click", function QcmCreateComponent_div_87_tr_31_Template_button_click_17_listener() {
      const i_r25 = \u0275\u0275restoreView(_r23).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.students.splice(i_r25, 1));
    });
    \u0275\u0275element(18, "i", 158);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r24.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r24.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r24.level);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", s_r24.email);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", !s_r24.password.trim() || ctx_r2.duplicatePasswords.has(s_r24.password.trim()));
    \u0275\u0275twoWayProperty("ngModel", s_r24.password);
  }
}
function QcmCreateComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 135)(2, "span", 136);
    \u0275\u0275element(3, "i", 137);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "button", 76);
    \u0275\u0275listener("click", function QcmCreateComponent_div_87_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.students = [];
      return \u0275\u0275resetView(ctx_r2.studentError = "");
    });
    \u0275\u0275element(7, "i", 77);
    \u0275\u0275text(8, "Effacer tout ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 138);
    \u0275\u0275listener("click", function QcmCreateComponent_div_87_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addStudent());
    });
    \u0275\u0275element(10, "i", 123);
    \u0275\u0275text(11, "Ajouter manuellement ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, QcmCreateComponent_div_87_div_12_Template, 3, 0, "div", 139);
    \u0275\u0275elementStart(13, "div", 140)(14, "table", 141)(15, "thead", 142)(16, "tr")(17, "th", 143);
    \u0275\u0275text(18, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 144);
    \u0275\u0275text(24, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 145);
    \u0275\u0275text(28, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "th", 146);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "tbody");
    \u0275\u0275template(31, QcmCreateComponent_div_87_tr_31_Template, 19, 8, "tr", 147);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r2.students.length, " \xE9tudiant(s) ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.duplicatePasswords.size);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r2.students);
  }
}
function QcmCreateComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275element(1, "i", 160);
    \u0275\u0275elementStart(2, "p", 161);
    \u0275\u0275text(3, "Laissez vide pour un acc\xE8s universel, ou importez une liste pour cibler des \xE9tudiants");
    \u0275\u0275elementEnd()();
  }
}
function QcmCreateComponent_span_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 64);
  }
}
function QcmCreateComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error);
  }
}
var QcmCreateComponent = class _QcmCreateComponent {
  constructor(http, router, route) {
    this.http = http;
    this.router = router;
    this.route = route;
    this.title = "";
    this.description = "";
    this.estimatedDurationMinutes = 30;
    this.paperCorrectionRequired = false;
    this.questions = [];
    this.labels = ["A", "B", "C", "D", "E"];
    this.loading = false;
    this.error = "";
    this.isEdit = false;
    this.editId = null;
    this.wordLoading = false;
    this.wordError = "";
    this.wordPreview = null;
    this.students = [];
    this.studentParsing = false;
    this.studentError = "";
    this.subjectFile = null;
    this.correctionFile = null;
  }
  onSubjectFile(event) {
    this.subjectFile = event.target.files?.[0] || null;
    this.removeEmptyQuestionForDocuments();
  }
  onCorrectionFile(event) {
    this.correctionFile = event.target.files?.[0] || null;
    this.removeEmptyQuestionForDocuments();
  }
  removeEmptyQuestionForDocuments() {
    if (this.subjectFile && this.correctionFile && this.questions.length === 1 && !this.questions[0].questionText.trim()) {
      this.questions = [];
    }
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEdit = true;
      this.editId = +id;
      this.http.get(`/api/teacher/qcms/${id}`).subscribe((qcm) => {
        this.title = qcm.title;
        this.description = qcm.description || "";
        this.estimatedDurationMinutes = qcm.estimatedDurationMinutes || 30;
        this.paperCorrectionRequired = !!qcm.paperCorrectionRequired;
        this.questions = (qcm.questions || []).map((q) => ({
          questionText: q.questionText,
          points: q.points,
          questionType: q.questionType || "QCM",
          correctionData: q.correctionData || "",
          caseScenario: q.caseScenario || "",
          expectedAnswer: q.expectedAnswer || "",
          choices: (q.choices || []).map((c) => ({ choiceText: c.choiceText, isCorrect: c.isCorrect }))
        }));
        this.students = (qcm.students || []).map((s) => this.toStudentEntry({
          name: s.studentName,
          email: s.studentEmail,
          firstName: s.firstName,
          lastName: s.lastName,
          level: s.level,
          password: s.password
        }));
        if (!this.questions.length)
          this.addQuestion();
      });
    } else {
      this.addQuestion();
    }
  }
  // ── Import Word ──────────────────────────────────────────────────────────
  onWordFile(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    input.value = "";
    this.wordLoading = true;
    this.wordError = "";
    this.wordPreview = null;
    const fd = new FormData();
    fd.append("file", file);
    this.http.post("/api/teacher/qcms/parse-word", fd).subscribe({
      next: (data) => {
        this.wordLoading = false;
        if (!data.questions?.length) {
          this.wordError = "Aucune question d\xE9tect\xE9e. V\xE9rifiez le format du fichier.";
          return;
        }
        this.wordPreview = {
          title: data.title || "",
          description: data.description || "",
          questions: data.questions
        };
      },
      error: (err) => {
        this.wordLoading = false;
        this.wordError = err.error?.error || "Erreur lors de la lecture du fichier.";
      }
    });
  }
  downloadTemplate() {
    this.http.get("/api/teacher/qcms/template", { responseType: "blob" }).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "modele_qcm.docx";
        link.click();
        URL.revokeObjectURL(url);
      },
      error: () => {
        this.wordError = "Impossible de t\xE9l\xE9charger le mod\xE8le. V\xE9rifiez votre connexion et votre session enseignant.";
      }
    });
  }
  applyWordPreview() {
    if (!this.wordPreview)
      return;
    if (!this.title.trim() && this.wordPreview.title)
      this.title = this.wordPreview.title;
    if (!this.description.trim() && this.wordPreview.description)
      this.description = this.wordPreview.description;
    this.questions = this.wordPreview.questions.map((q) => ({
      questionText: q.questionText,
      points: q.points || 1,
      questionType: "QCM",
      correctionData: "",
      caseScenario: "",
      expectedAnswer: "",
      choices: (q.choices || []).map((c) => ({ choiceText: c.choiceText, isCorrect: !!c.isCorrect }))
    }));
    if (!this.questions.length)
      this.addQuestion();
    this.wordPreview = null;
    this.wordError = "";
  }
  // ── Gestion questions ────────────────────────────────────────────────────
  addQuestion() {
    this.questions.push({
      questionText: "",
      points: 1,
      questionType: "QCM",
      correctionData: "",
      caseScenario: "",
      expectedAnswer: "",
      choices: [
        { choiceText: "", isCorrect: true },
        { choiceText: "", isCorrect: false },
        { choiceText: "", isCorrect: false },
        { choiceText: "", isCorrect: false }
      ]
    });
  }
  removeQuestion(i) {
    this.questions.splice(i, 1);
  }
  addChoice(q) {
    q.choices.push({ choiceText: "", isCorrect: false });
  }
  removeChoice(q, i) {
    const wasCorrect = q.choices[i].isCorrect;
    q.choices.splice(i, 1);
    if (wasCorrect && q.choices.length)
      q.choices[0].isCorrect = true;
  }
  setCorrect(q, correctIndex) {
    q.choices.forEach((c, i) => c.isCorrect = i === correctIndex);
  }
  get totalPoints() {
    return this.questions.reduce((s, q) => s + (q.points || 1), 0);
  }
  get isValid() {
    return this.questions.length > 0 && this.questions.every((q) => !!q.questionText.trim() && (q.questionType === "PRACTICAL" ? q.correctionData.trim().startsWith("{") : q.questionType === "CASE" ? q.caseScenario.trim() && q.correctionData.trim().startsWith("{") : q.questionType === "LONG_TEXT" ? q.expectedAnswer.trim() : q.choices.length >= 2 && q.choices.some((c) => c.isCorrect) && q.choices.every((c) => c.choiceText.trim())));
  }
  get canSave() {
    const documentsReady = !!this.subjectFile && !!this.correctionFile;
    return !!this.title.trim() && (documentsReady || this.isValid);
  }
  onStudentFile(e) {
    const input = e.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.studentParsing = true;
    this.studentError = "";
    const fd = new FormData();
    fd.append("file", file);
    this.http.post("/api/teacher/qcms/parse-students", fd).subscribe({
      next: (res) => {
        this.studentParsing = false;
        this.students = (res.students || []).map((s) => this.toStudentEntry(s));
        if (!this.students.length)
          this.studentError = "Aucun \xE9tudiant d\xE9tect\xE9 dans ce fichier.";
      },
      error: (err) => {
        this.studentParsing = false;
        this.studentError = err.error?.error || err.error?.message || "Erreur lors de la lecture du fichier.";
      }
    });
  }
  toStudentEntry(s) {
    let firstName = (s.firstName || "").trim();
    let lastName = (s.lastName || "").trim();
    const name = (s.name || "").trim();
    if (!firstName && !lastName && name) {
      const lastSpace = name.lastIndexOf(" ");
      firstName = lastSpace > 0 ? name.substring(0, lastSpace) : "";
      lastName = lastSpace > 0 ? name.substring(lastSpace + 1) : name;
    }
    return {
      name,
      email: s.email || "",
      firstName,
      lastName,
      level: s.level || "",
      password: s.password || this.generatePassword()
    };
  }
  addStudent() {
    this.students.push({ name: "", email: "", firstName: "", lastName: "", level: "", password: this.generatePassword() });
  }
  generatePassword() {
    const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    const used = new Set(this.students.map((s) => s.password.trim()));
    let password = "";
    do {
      const bytes = crypto.getRandomValues(new Uint32Array(8));
      password = Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
    } while (used.has(password));
    return password;
  }
  get duplicatePasswords() {
    const seen = /* @__PURE__ */ new Set();
    const duplicates = /* @__PURE__ */ new Set();
    for (const s of this.students) {
      const password = s.password.trim();
      if (!password)
        continue;
      if (seen.has(password))
        duplicates.add(password);
      seen.add(password);
    }
    return duplicates;
  }
  save() {
    if (this.duplicatePasswords.size) {
      this.error = "Chaque \xE9tudiant doit avoir un mot de passe unique : corrigez les doublons dans la liste des \xE9tudiants.";
      return;
    }
    if (!this.canSave) {
      this.error = "Saisissez un titre et fournissez soit des questions valides, soit le sujet et la correction.";
      return;
    }
    this.loading = true;
    this.error = "";
    const body = {
      title: this.title,
      description: this.description,
      estimatedDurationMinutes: this.estimatedDurationMinutes,
      paperCorrectionRequired: this.paperCorrectionRequired,
      questions: this.questions,
      students: this.students.filter((s) => s.email.trim()).map((s) => __spreadProps(__spreadValues({}, s), {
        name: `${s.firstName.trim()} ${s.lastName.trim()}`.trim() || s.name
      }))
    };
    const req = this.isEdit ? this.http.put(`/api/teacher/qcms/${this.editId}`, body) : this.http.post("/api/teacher/qcms", body);
    req.subscribe({
      next: (saved) => {
        const id = this.editId || saved.id;
        if (!this.subjectFile && !this.correctionFile) {
          this.router.navigate(["/teacher/exams"]);
          return;
        }
        if (!this.subjectFile || !this.correctionFile) {
          this.error = "S\xE9lectionnez le sujet et la correction avant de continuer.";
          this.loading = false;
          return;
        }
        const files = new FormData();
        files.append("subjectFile", this.subjectFile);
        files.append("correctionFile", this.correctionFile);
        this.http.post(`/api/teacher/qcms/${id}/documents`, files).subscribe({
          next: () => this.router.navigate(["/teacher/exams"]),
          error: (e) => {
            this.error = e.error?.error || "Erreur lors de l\u2019enregistrement des documents.";
            this.loading = false;
          }
        });
      },
      error: (e) => {
        this.error = e.error?.message || "Erreur";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function QcmCreateComponent_Factory(t) {
      return new (t || _QcmCreateComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcmCreateComponent, selectors: [["app-qcm-create"]], viewQuery: function QcmCreateComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.wordFileInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 105, vars: 22, consts: [["studentInput", ""], ["wordFileInput", ""], [1, "fade-in-up", 2, "max-width", "860px", "margin", "0 auto"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/teacher/exams", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0", "small"], ["class", "card border-0 shadow-sm mb-4", "style", "border-radius:16px;border:2px dashed #c7d2fe!important", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px"], [1, "card-body", "p-4"], [1, "fw-bold", "mb-3"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "placeholder", "Ex : Examen Java \u2013 Chapitre 3", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Instructions pour les \xE9tudiants...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "form-control", 2, "max-width", "160px", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [1, "form-check", "form-switch", "mt-3"], ["type", "checkbox", "id", "paperCorrectionRequired", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "paperCorrectionRequired", 1, "form-check-label", "fw-semibold"], [1, "form-text"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px", "border", "2px dashed #c7d2fe!important"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small", "mb-3"], [1, "row", "g-3"], [1, "col-md-6"], ["type", "file", "accept", ".pdf,.docx,.xlsx,.xls", 1, "form-control", 3, "change"], ["class", "text-muted", 4, "ngIf"], ["class", "card border-0 shadow-sm mb-3", "style", "border-radius:16px;overflow:hidden", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-primary", "w-100", "mb-4", "py-2", 2, "border-radius", "12px", "border-style", "dashed", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "44px", "height", "44px", "background", "#ede9fe", "color", "#6366f1", "font-size", "1.3rem"], [1, "flex-grow-1"], [1, "badge", "rounded-pill", "bg-secondary", "ms-1", 2, "font-size", ".7rem"], [1, "d-flex", "gap-2", "flex-shrink-0"], ["href", "/api/teacher/exams/student-template", "download", "modele_etudiants.xlsx", 1, "btn", "btn-outline-secondary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap"], [1, "bi", "bi-download", "me-1"], [1, "btn", "btn-outline-primary", "btn-sm", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-upload me-1", 4, "ngIf"], ["type", "file", "accept", ".xlsx,.xls,.csv,.pdf,.docx,.doc", 2, "display", "none", 3, "change"], ["class", "alert alert-danger py-2 mt-3 mb-0", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["class", "text-center py-3 text-muted mt-2", "style", "font-size:.85rem", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "16px", "background", "#f8f9ff"], [1, "card-body", "p-4", "d-flex", "align-items-center", "justify-content-between", "gap-3", "flex-wrap"], [1, "text-muted", "small"], [1, "d-flex", "gap-2"], ["routerLink", "/teacher/exams", 1, "btn", "btn-outline-secondary"], [1, "btn", "fw-semibold", "px-4", 2, "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "color", "white", "border-radius", "10px", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", 2, "width", "44px", "height", "44px", "background", "#ede9fe", "color", "#6366f1", "font-size", "1.3rem", "flex-shrink", "0"], [1, "d-flex", "gap-2", "ms-auto", "flex-shrink-0"], ["type", "button", 1, "btn", "btn-outline-secondary", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap", 3, "click"], [1, "bi", "bi-download", "me-2"], [1, "btn", "btn-outline-primary", "fw-semibold", 2, "border-radius", "10px", "white-space", "nowrap", 3, "click", "disabled"], ["class", "bi bi-upload me-2", 4, "ngIf"], ["type", "file", "accept", ".docx", 2, "display", "none", 3, "change"], ["class", "p-3 rounded-3", "style", "background:#f8faff;font-size:.82rem", 4, "ngIf"], ["class", "alert alert-danger mt-2 mb-0 py-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-upload", "me-2"], [1, "p-3", "rounded-3", 2, "background", "#f8faff", "font-size", ".82rem"], [1, "fw-semibold", "mb-2", "text-muted"], [2, "display", "block", "white-space", "pre", "color", "#4f46e5", "font-size", ".78rem"], [1, "alert", "alert-danger", "mt-2", "mb-0", "py-2"], [1, "bi", "bi-exclamation-triangle", "me-2"], [1, "mt-3"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "bg-success"], [1, "bi", "bi-check-circle", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x", "me-1"], [1, "btn", "btn-sm", "fw-semibold", 2, "background", "#6366f1", "color", "white", "border-radius", "8px", 3, "click"], [1, "bi", "bi-check2", "me-1"], ["class", "p-3 rounded-3 mb-2", "style", "background:#f8faff;border:1px solid #e0e7ff", 4, "ngFor", "ngForOf"], [1, "p-3", "rounded-3", "mb-2", 2, "background", "#f8faff", "border", "1px solid #e0e7ff"], [1, "d-flex", "gap-2", "mb-2"], [1, "fw-bold", 2, "color", "#6366f1", "min-width", "24px"], [1, "fw-semibold"], [1, "badge", "rounded-pill", "ms-auto", 2, "background", "#e0e7ff", "color", "#4f46e5"], ["class", "d-flex align-items-center gap-2 mb-1", "style", "padding-left:24px;font-size:.88rem", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-2", "mb-1", 2, "padding-left", "24px", "font-size", ".88rem"], [1, "fw-semibold", 2, "min-width", "18px"], ["class", "bi bi-check-circle-fill text-success ms-1", 4, "ngIf"], [1, "bi", "bi-check-circle-fill", "text-success", "ms-1"], [1, "card", "border-0", "shadow-sm", "mb-3", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "4px", "background", "linear-gradient(90deg,#6366f1,#4f46e5)"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-3", "mb-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-grow-1"], [1, "fw-bold", 2, "color", "#6366f1", "font-size", "1.1rem", "min-width", "28px"], ["type", "text", "placeholder", "\xC9nonc\xE9 de la question...", 1, "form-control", "fw-semibold", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2", "flex-shrink-0"], [2, "width", "100px"], [1, "input-group", "input-group-sm"], [1, "input-group-text", "bg-white"], ["type", "number", "min", "1", "max", "10", 1, "form-control", "text-center", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-trash"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "QCM"], ["value", "PRACTICAL"], ["value", "CASE"], ["value", "LONG_TEXT"], ["class", "alert alert-warning small", 4, "ngIf"], ["class", "alert alert-info small", 4, "ngIf"], ["class", "alert alert-secondary small", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-warning", "small"], ["rows", "4", "placeholder", '{"cout_achat_mil": 7920000, "production_pas": 137000}', 1, "form-control", "font-monospace", 3, "ngModelChange", "ngModel"], [1, "mt-2"], [1, "alert", "alert-info", "small"], ["rows", "4", "placeholder", "Ex : La soci\xE9t\xE9 XYZ veut lancer une gamme premium... (facultatif pour un calcul simple)", 1, "form-control", "mb-2", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", '{"marge_brute": 180000, "seuil_rentabilite": 7200}', 1, "form-control", "font-monospace", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-secondary", "small"], ["rows", "4", "placeholder", "Indiquez les \xE9l\xE9ments attendus : prix, cible, positionnement, rentabilit\xE9...", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "d-flex align-items-center gap-2 mb-2", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-secondary", "mt-1", 3, "click", "disabled"], [1, "bi", "bi-plus", "me-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "d-flex", "align-items-center", "justify-content-center", "fw-bold", "rounded", 2, "width", "32px", "height", "32px", "background", "#f3f4f6", "color", "#6b7280", "font-size", ".85rem", "flex-shrink", "0"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "form-check", "mb-0", "flex-shrink-0", "d-flex", "align-items-center", "gap-1"], ["type", "radio", 1, "form-check-input", 2, "cursor", "pointer", 3, "change", "name", "checked"], [1, "form-check-label", "small", 2, "color", "#10b981", "font-weight", "600", "cursor", "pointer"], [1, "btn", "btn-sm", "btn-outline-secondary", "px-2", 3, "click", "disabled"], [1, "bi", "bi-x"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-upload", "me-1"], [1, "alert", "alert-danger", "py-2", "mt-3", "mb-0"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "badge", "rounded-pill", "bg-success"], [1, "bi", "bi-people", "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], ["class", "alert alert-warning py-2 small mb-2", 4, "ngIf"], [2, "max-height", "320px", "overflow", "auto", "border", "1px solid #e5e7eb", "border-radius", "10px"], [1, "table", "table-sm", "table-hover", "mb-0", "align-middle", 2, "min-width", "760px"], [1, "table-light", "sticky-top"], [2, "width", "32px"], [2, "width", "90px"], [2, "width", "170px"], [2, "width", "40px"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-warning", "py-2", "small", "mb-2"], [1, "bi", "bi-exclamation-triangle", "me-1"], ["placeholder", "Nom", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Pr\xE9nom", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "L3", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "email@example.com", 1, "form-control", "form-control-sm", "text-muted", 3, "ngModelChange", "ngModel"], ["placeholder", "Mot de passe", 1, "form-control", "font-monospace", 3, "ngModelChange", "ngModel"], ["type", "button", "title", "G\xE9n\xE9rer un nouveau mot de passe", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-arrow-repeat"], [1, "btn", "btn-link", "btn-sm", "text-danger", "p-0", 3, "click"], [1, "bi", "bi-x-circle"], [1, "text-center", "py-3", "text-muted", "mt-2", 2, "font-size", ".85rem"], [1, "bi", "bi-people", 2, "font-size", "1.8rem", "opacity", ".35"], [1, "mt-2", "mb-0"], [1, "alert", "alert-danger", "mt-3"]], template: function QcmCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
        \u0275\u0275element(3, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 7);
        \u0275\u0275text(8, "Questions \xE0 choix multiples \u2014 correction automatique");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, QcmCreateComponent_div_9_Template, 23, 7, "div", 8);
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "h5", 11);
        \u0275\u0275text(13, "\u{1F4CB} Informations g\xE9n\xE9rales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "label", 13);
        \u0275\u0275text(16, "Titre du QCM *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.title, $event) || (ctx.title = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "label", 13);
        \u0275\u0275text(20, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "textarea", 15);
        \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_Template_textarea_ngModelChange_21_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.description, $event) || (ctx.description = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div")(23, "label", 13);
        \u0275\u0275text(24, "Dur\xE9e estim\xE9e (minutes) *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.estimatedDurationMinutes, $event) || (ctx.estimatedDurationMinutes = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "small", 17);
        \u0275\u0275text(27, " Utilis\xE9e pour bloquer temporairement un \xE9tudiant exclu pour violation des r\xE8gles anti-triche (il ne pourra se reconnecter et voir son r\xE9sultat qu'une fois ce temps \xE9coul\xE9). ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 18)(29, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function QcmCreateComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.paperCorrectionRequired, $event) || (ctx.paperCorrectionRequired = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "label", 20);
        \u0275\u0275text(31, " Exiger une copie papier scann\xE9e avant la soumission ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 21);
        \u0275\u0275text(33, "L\u2019\xE9tudiant devra photographier ou scanner sa correction manuscrite et la joindre au devoir.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 22)(35, "div", 10)(36, "h5", 23);
        \u0275\u0275text(37, "Sujet et correction de r\xE9f\xE9rence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 24);
        \u0275\u0275text(39, " D\xE9posez les deux fichiers. Le sujet est conserv\xE9 pour l\u2019\xE9tudiant et la correction est extraite c\xF4t\xE9 serveur. Les points sont attribu\xE9s uniquement avec les crit\xE8res structur\xE9s des questions pratiques. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 25)(41, "div", 26)(42, "label", 13);
        \u0275\u0275text(43, "Sujet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "input", 27);
        \u0275\u0275listener("change", function QcmCreateComponent_Template_input_change_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubjectFile($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, QcmCreateComponent_small_45_Template, 2, 1, "small", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 26)(47, "label", 13);
        \u0275\u0275text(48, "Correction professeur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "input", 27);
        \u0275\u0275listener("change", function QcmCreateComponent_Template_input_change_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onCorrectionFile($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, QcmCreateComponent_small_50_Template, 2, 1, "small", 28);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(51, QcmCreateComponent_div_51_Template, 32, 9, "div", 29);
        \u0275\u0275elementStart(52, "button", 30);
        \u0275\u0275listener("click", function QcmCreateComponent_Template_button_click_52_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addQuestion());
        });
        \u0275\u0275element(53, "i", 31);
        \u0275\u0275text(54, "Ajouter une question ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 22)(56, "div", 10)(57, "div", 32)(58, "div", 33);
        \u0275\u0275text(59, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 34)(61, "h6", 6);
        \u0275\u0275text(62, "\xC9tudiants concern\xE9s ");
        \u0275\u0275elementStart(63, "span", 35);
        \u0275\u0275text(64, "Optionnel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "p", 7);
        \u0275\u0275text(66, " Si vide \u2192 QCM visible par ");
        \u0275\u0275elementStart(67, "strong");
        \u0275\u0275text(68, "tous");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " les \xE9tudiants approuv\xE9s.");
        \u0275\u0275element(70, "br");
        \u0275\u0275text(71, " Sinon \u2192 seulement les \xE9tudiants de la liste pourront le passer.");
        \u0275\u0275element(72, "br");
        \u0275\u0275text(73, " Colonnes : Nom \xB7 Pr\xE9nom \xB7 Niveau \xB7 Email \xB7 Mot de passe (unique par \xE9tudiant, g\xE9n\xE9r\xE9 s'il est absent)");
        \u0275\u0275element(74, "br");
        \u0275\u0275text(75, " Formats : Excel (.xlsx) \xB7 CSV \xB7 Word \xB7 PDF ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 36)(77, "a", 37);
        \u0275\u0275element(78, "i", 38);
        \u0275\u0275text(79, "Mod\xE8le Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 39);
        \u0275\u0275listener("click", function QcmCreateComponent_Template_button_click_80_listener() {
          \u0275\u0275restoreView(_r1);
          const studentInput_r21 = \u0275\u0275reference(85);
          return \u0275\u0275resetView(studentInput_r21.click());
        });
        \u0275\u0275template(81, QcmCreateComponent_span_81_Template, 1, 0, "span", 40)(82, QcmCreateComponent_i_82_Template, 1, 0, "i", 41);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "input", 42, 0);
        \u0275\u0275listener("change", function QcmCreateComponent_Template_input_change_84_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onStudentFile($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(86, QcmCreateComponent_div_86_Template, 3, 1, "div", 43)(87, QcmCreateComponent_div_87_Template, 32, 3, "div", 44)(88, QcmCreateComponent_div_88_Template, 4, 0, "div", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 46)(90, "div", 47)(91, "div", 48)(92, "strong");
        \u0275\u0275text(93);
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " question(s) \xB7 ");
        \u0275\u0275elementStart(95, "strong");
        \u0275\u0275text(96);
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, " point(s) au total ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 49)(99, "a", 50);
        \u0275\u0275text(100, "Annuler");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 51);
        \u0275\u0275listener("click", function QcmCreateComponent_Template_button_click_101_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275template(102, QcmCreateComponent_span_102_Template, 1, 0, "span", 52);
        \u0275\u0275text(103);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(104, QcmCreateComponent_div_104_Template, 2, 1, "div", 53);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isEdit ? "Modifier le devoir" : "Cr\xE9er un devoir");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.isEdit);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.estimatedDurationMinutes);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.paperCorrectionRequired);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.subjectFile);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.correctionFile);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.questions);
        \u0275\u0275advance(29);
        \u0275\u0275property("disabled", ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.studentParsing);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.studentParsing ? "Lecture..." : "Importer un fichier", " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.studentError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.students.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.students.length === 0 && !ctx.studentParsing && !ctx.studentError);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.questions.length);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.totalPoints);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.loading || !ctx.canSave);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Enregistrement..." : ctx.isEdit ? "Enregistrer" : "Cr\xE9er le devoir", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcmCreateComponent, { className: "QcmCreateComponent" });
})();
export {
  QcmCreateComponent
};
//# sourceMappingURL=chunk-3PNQASOL.js.map

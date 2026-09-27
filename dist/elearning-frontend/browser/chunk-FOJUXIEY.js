import {
  UploadService
} from "./chunk-KHIL3TYC.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  COURSE_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  ActivatedRoute,
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/edit-course/edit-course.component.ts
function EditCourseComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function EditCourseComponent_div_7_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cat_r3.icon, " ", cat_r3.label, "");
  }
}
function EditCourseComponent_div_7_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function EditCourseComponent_div_7_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "\u2705 Cours mis \xE0 jour !");
    \u0275\u0275elementEnd();
  }
}
function EditCourseComponent_div_7_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 42);
  }
}
function EditCourseComponent_div_7_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, " Aucune le\xE7on ou exercice pour ce cours pour le moment. ");
    \u0275\u0275elementEnd();
  }
}
function EditCourseComponent_div_7_div_45_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", lesson_r5.duration, " min");
  }
}
function EditCourseComponent_div_7_div_45_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", lesson_r5.language, "");
  }
}
function EditCourseComponent_div_7_div_45_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 56);
  }
}
function EditCourseComponent_div_7_div_45_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 57);
  }
}
function EditCourseComponent_div_7_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48);
    \u0275\u0275element(7, "i", 49);
    \u0275\u0275text(8);
    \u0275\u0275template(9, EditCourseComponent_div_7_div_45_span_9_Template, 2, 1, "span", 50)(10, EditCourseComponent_div_7_div_45_span_10_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 51);
    \u0275\u0275listener("click", function EditCourseComponent_div_7_div_45_Template_button_click_11_listener() {
      const lesson_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startEditLesson(lesson_r5));
    });
    \u0275\u0275element(12, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 53);
    \u0275\u0275listener("click", function EditCourseComponent_div_7_div_45_Template_button_click_13_listener() {
      const lesson_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteLesson(lesson_r5));
    });
    \u0275\u0275template(14, EditCourseComponent_div_7_div_45_span_14_Template, 1, 0, "span", 54)(15, EditCourseComponent_div_7_div_45_i_15_Template, 1, 0, "i", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lesson_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", i_r6 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-play-circle", lesson_r5.type === "VIDEO")("bi-file-pdf", lesson_r5.type === "PDF")("bi-code-slash", lesson_r5.type === "CODE_EXERCISE")("bi-table", lesson_r5.type === "EXCEL_EXERCISE")("bi-question-circle", lesson_r5.type === "QUIZ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.typeLabels[lesson_r5.type], " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r5.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r5.type === "CODE_EXERCISE" && lesson_r5.language);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.deletingId === lesson_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingId === lesson_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deletingId !== lesson_r5.id);
  }
}
function EditCourseComponent_div_7_div_46_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "input", 77);
    \u0275\u0275elementStart(2, "label", 78);
    \u0275\u0275text(3, ` \u{1F3CB}\uFE0F Afficher dans l'onglet "Pratique" (exercice) `);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275text(5, "Cochez si ce contenu est un exercice \xE0 faire plut\xF4t qu'un cours \xE0 lire.");
    \u0275\u0275elementEnd()();
  }
}
function EditCourseComponent_div_7_div_46_div_32_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function EditCourseComponent_div_7_div_46_div_32_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 101);
    \u0275\u0275listener("click", function EditCourseComponent_div_7_div_46_div_32_div_21_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.lessonForm.patchValue({ pdfUrl: "" }));
    });
    \u0275\u0275text(4, "Retirer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xC9nonc\xE9 pr\xEAt : ", (tmp_4_0 = ctx_r1.lessonForm.get("pdfUrl")) == null ? null : tmp_4_0.value, " ");
  }
}
function EditCourseComponent_div_7_div_46_div_32_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pdfUploadError);
  }
}
function EditCourseComponent_div_7_div_46_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 80)(2, "label", 14);
    \u0275\u0275text(3, "Langage de l'IDE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 81)(5, "option", 82);
    \u0275\u0275text(6, "\u{1F40D} Python");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 83);
    \u0275\u0275text(8, "\u{1F7E8} JavaScript");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 84);
    \u0275\u0275text(10, "\u2615 Java");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 85);
    \u0275\u0275text(12, "\u{1F5C4}\uFE0F SQL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15, "\u{1F4C4} \xC9nonc\xE9 de l'exercice (PDF, optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 86);
    \u0275\u0275text(17, " Affich\xE9 \xE0 gauche de l'IDE, comme une feuille de TP. Si vide, la description ci-dessus est utilis\xE9e. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 87)(19, "input", 88);
    \u0275\u0275listener("change", function EditCourseComponent_div_7_div_46_div_32_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPdfFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EditCourseComponent_div_7_div_46_div_32_span_20_Template, 1, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, EditCourseComponent_div_7_div_46_div_32_div_21_Template, 5, 1, "div", 90)(22, EditCourseComponent_div_7_div_46_div_32_div_22_Template, 2, 1, "div", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13)(24, "div", 92)(25, "label", 93);
    \u0275\u0275text(26, "Code de d\xE9part (affich\xE9 dans l'IDE)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "label", 94);
    \u0275\u0275element(28, "i", 95);
    \u0275\u0275text(29, "Importer un fichier de code ");
    \u0275\u0275elementStart(30, "input", 96);
    \u0275\u0275listener("change", function EditCourseComponent_div_7_div_46_div_32_Template_input_change_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onCodeFileSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(31, "textarea", 97);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r1.uploadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.lessonForm.get("pdfUrl")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pdfUploadError);
  }
}
function EditCourseComponent_div_7_div_46_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Feuille de d\xE9part (JSON, optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 103);
    \u0275\u0275elementStart(4, "div", 79);
    \u0275\u0275text(5, " Pour pr\xE9-remplir le tableur : ouvrez ");
    \u0275\u0275elementStart(6, "a", 104);
    \u0275\u0275text(7, "/spreadsheet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ', construisez votre mod\xE8le, cliquez sur "Exporter" puis collez le JSON ici. Laissez vide pour d\xE9marrer avec une feuille vierge. ');
    \u0275\u0275elementEnd()();
  }
}
function EditCourseComponent_div_7_div_46_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "URL de la vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 105);
    \u0275\u0275elementEnd();
  }
}
function EditCourseComponent_div_7_div_46_div_35_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
}
function EditCourseComponent_div_7_div_46_div_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "i", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Document pr\xEAt : ", (tmp_4_0 = ctx_r1.lessonForm.get("pdfUrl")) == null ? null : tmp_4_0.value, " ");
  }
}
function EditCourseComponent_div_7_div_46_div_35_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pdfUploadError);
  }
}
function EditCourseComponent_div_7_div_46_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Document (PDF ou Word)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87)(4, "input", 88);
    \u0275\u0275listener("change", function EditCourseComponent_div_7_div_46_div_35_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPdfFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EditCourseComponent_div_7_div_46_div_35_span_5_Template, 1, 0, "span", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EditCourseComponent_div_7_div_46_div_35_div_6_Template, 3, 1, "div", 90)(7, EditCourseComponent_div_7_div_46_div_35_div_7_Template, 2, 1, "div", 91);
    \u0275\u0275elementStart(8, "label", 106);
    \u0275\u0275text(9, "ou collez une URL directement");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.uploadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadingPdf);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.lessonForm.get("pdfUrl")) == null ? null : tmp_5_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pdfUploadError);
  }
}
function EditCourseComponent_div_7_div_46_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Support de cours (texte affich\xE9 \xE0 l'\xE9l\xE8ve)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "textarea", 108);
    \u0275\u0275elementEnd();
  }
}
function EditCourseComponent_div_7_div_46_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.lessonError);
  }
}
function EditCourseComponent_div_7_div_46_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 42);
  }
}
function EditCourseComponent_div_7_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "h6", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function EditCourseComponent_div_7_div_46_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmitLesson());
    });
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 60)(6, "label", 14);
    \u0275\u0275text(7, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 62)(10, "label", 14);
    \u0275\u0275text(11, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 63)(13, "option", 64);
    \u0275\u0275text(14, "\u{1F4BB} Exercice de code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 65);
    \u0275\u0275text(16, "\u{1F4CA} Exercice Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 66);
    \u0275\u0275text(18, "\u{1F3AC} Vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 67);
    \u0275\u0275text(20, "\u{1F4C4} PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 68);
    \u0275\u0275text(22, "\u2753 Quiz");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, EditCourseComponent_div_7_div_46_div_23_Template, 6, 0, "div", 69);
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 14);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 71)(29, "label", 14);
    \u0275\u0275text(30, "Dur\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, EditCourseComponent_div_7_div_46_div_32_Template, 32, 4, "div", 50)(33, EditCourseComponent_div_7_div_46_div_33_Template, 9, 0, "div", 73)(34, EditCourseComponent_div_7_div_46_div_34_Template, 4, 0, "div", 73)(35, EditCourseComponent_div_7_div_46_div_35_Template, 11, 4, "div", 73)(36, EditCourseComponent_div_7_div_46_div_36_Template, 4, 0, "div", 73)(37, EditCourseComponent_div_7_div_46_div_37_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(38, "div", 74)(39, "button", 30);
    \u0275\u0275template(40, EditCourseComponent_div_7_div_46_span_40_Template, 1, 0, "span", 31);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 75);
    \u0275\u0275listener("click", function EditCourseComponent_div_7_div_46_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelLessonForm());
    });
    \u0275\u0275text(43, "Annuler");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.editingLessonId ? "\u270F\uFE0F Modifier" : "\u2795 Nouveau", " : exercice / le\xE7on");
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.lessonForm);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_4_0.value) !== "CODE_EXERCISE" && ((tmp_4_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_4_0.value) !== "EXCEL_EXERCISE");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_5_0.value) === "CODE_EXERCISE" || ((tmp_5_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_5_0.value) === "EXCEL_EXERCISE" ? "\xC9nonc\xE9 de l'exercice" : "Description", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_6_0.value) === "CODE_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_7_0.value) === "EXCEL_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_8_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_8_0.value) === "VIDEO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_9_0.value) === "PDF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_10_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_10_0.value) === "VIDEO" || ((tmp_10_0 = ctx_r1.lessonForm.get("type")) == null ? null : tmp_10_0.value) === "PDF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lessonError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.savingLesson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingLesson);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingLessonId ? "Enregistrer" : "Ajouter", " ");
  }
}
function EditCourseComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "form", 12);
    \u0275\u0275listener("ngSubmit", function EditCourseComponent_div_7_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(4, "div", 13)(5, "label", 14);
    \u0275\u0275text(6, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "label", 14);
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "div", 18)(14, "label", 14);
    \u0275\u0275text(15, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 19);
    \u0275\u0275template(17, EditCourseComponent_div_7_option_17_Template, 2, 3, "option", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "label", 14);
    \u0275\u0275text(20, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 21)(22, "option", 22);
    \u0275\u0275text(23, "\u{1F7E2} D\xE9butant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 23);
    \u0275\u0275text(25, "\u{1F7E1} Interm\xE9diaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 24);
    \u0275\u0275text(27, "\u{1F534} Avanc\xE9");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 25);
    \u0275\u0275element(29, "input", 26);
    \u0275\u0275elementStart(30, "label", 27);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, EditCourseComponent_div_7_div_32_Template, 2, 1, "div", 28)(33, EditCourseComponent_div_7_div_33_Template, 2, 0, "div", 29);
    \u0275\u0275elementStart(34, "button", 30);
    \u0275\u0275template(35, EditCourseComponent_div_7_span_35_Template, 1, 0, "span", 31);
    \u0275\u0275text(36, " Sauvegarder les modifications ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 32)(38, "div", 33)(39, "h5", 4);
    \u0275\u0275text(40, "\u{1F4CB} Programme du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 34);
    \u0275\u0275listener("click", function EditCourseComponent_div_7_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startAddLesson());
    });
    \u0275\u0275element(42, "i", 35);
    \u0275\u0275text(43, "Ajouter un exercice / une le\xE7on ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, EditCourseComponent_div_7_div_44_Template, 2, 0, "div", 36)(45, EditCourseComponent_div_7_div_45_Template, 16, 18, "div", 37)(46, EditCourseComponent_div_7_div_46_Template, 44, 13, "div", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.courseForm);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.courseForm.get("published")) == null ? null : tmp_3_0.value) ? "\u2705 Publi\xE9" : "\u23F3 Brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.success);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.saving);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", !ctx_r1.lessons.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.lessons);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.lessonForm);
  }
}
var CODE_FILE_EXTENSIONS = {
  py: "python",
  js: "javascript",
  java: "java",
  sql: "sql",
  txt: "python"
};
var EditCourseComponent = class _EditCourseComponent {
  constructor(fb, courseService, uploadService, route, router) {
    this.fb = fb;
    this.courseService = courseService;
    this.uploadService = uploadService;
    this.route = route;
    this.router = router;
    this.categories = COURSE_CATEGORIES;
    this.loading = true;
    this.saving = false;
    this.error = "";
    this.success = false;
    this.course = null;
    this.lessons = [];
    this.lessonForm = null;
    this.editingLessonId = null;
    this.savingLesson = false;
    this.deletingId = null;
    this.lessonError = "";
    this.uploadingPdf = false;
    this.pdfUploadError = "";
    this.typeLabels = {
      VIDEO: "Vid\xE9o",
      PDF: "PDF",
      QUIZ: "Quiz",
      CODE_EXERCISE: "Exercice de code",
      EXCEL_EXERCISE: "Exercice Excel"
    };
  }
  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get("id");
    this.courseService.getCourseById(this.courseId).subscribe((course) => {
      this.course = course;
      this.lessons = (course.lessons || []).slice().sort((a, b) => a.orderIndex - b.orderIndex);
      this.courseForm = this.fb.group({
        title: [course.title, Validators.required],
        description: [course.description],
        category: [course.category],
        level: [course.level],
        published: [course.published]
      });
      this.loading = false;
    });
  }
  onSubmit() {
    this.saving = true;
    this.courseService.updateCourse(this.courseId, this.courseForm.value).subscribe({
      next: () => {
        this.saving = false;
        this.success = true;
        setTimeout(() => this.router.navigate(["/teacher/courses"]), 1500);
      },
      error: (err) => {
        this.error = err.error?.message || "Erreur";
        this.saving = false;
      }
    });
  }
  startAddLesson() {
    this.editingLessonId = null;
    this.lessonError = "";
    this.pdfUploadError = "";
    this.lessonForm = this.fb.group({
      title: ["", Validators.required],
      type: ["CODE_EXERCISE", Validators.required],
      description: [""],
      content: [""],
      duration: [0],
      language: ["python"],
      starterCode: [""],
      videoUrl: [""],
      pdfUrl: [""],
      exercise: [false]
    });
  }
  startEditLesson(lesson) {
    this.editingLessonId = lesson.id;
    this.lessonError = "";
    this.pdfUploadError = "";
    this.lessonForm = this.fb.group({
      title: [lesson.title, Validators.required],
      type: [lesson.type, Validators.required],
      description: [lesson.description || ""],
      content: [lesson.content || ""],
      duration: [lesson.duration || 0],
      language: [lesson.language || "python"],
      starterCode: [lesson.starterCode || ""],
      videoUrl: [lesson.videoUrl || ""],
      pdfUrl: [lesson.pdfUrl || ""],
      exercise: [lesson.exercise || false]
    });
  }
  cancelLessonForm() {
    this.lessonForm = null;
    this.editingLessonId = null;
    this.lessonError = "";
  }
  onSubmitLesson() {
    if (!this.lessonForm)
      return;
    this.savingLesson = true;
    this.lessonError = "";
    const value = this.lessonForm.value;
    if (this.editingLessonId) {
      this.courseService.updateLesson(this.editingLessonId, value).subscribe({
        next: (updated) => {
          const idx = this.lessons.findIndex((l) => l.id === this.editingLessonId);
          if (idx >= 0)
            this.lessons[idx] = updated;
          this.savingLesson = false;
          this.cancelLessonForm();
        },
        error: (err) => {
          this.lessonError = err.error?.message || "Erreur";
          this.savingLesson = false;
        }
      });
    } else {
      this.courseService.createLesson(this.courseId, value).subscribe({
        next: (created) => {
          this.lessons.push(created);
          this.savingLesson = false;
          this.cancelLessonForm();
        },
        error: (err) => {
          this.lessonError = err.error?.message || "Erreur";
          this.savingLesson = false;
        }
      });
    }
  }
  onPdfFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !this.lessonForm)
      return;
    this.uploadingPdf = true;
    this.pdfUploadError = "";
    this.uploadService.uploadOne(file).subscribe({
      next: (res) => {
        this.lessonForm.patchValue({ pdfUrl: res.data.url });
        this.uploadingPdf = false;
      },
      error: (err) => {
        this.pdfUploadError = err.error?.message || "Erreur lors de l'import du document";
        this.uploadingPdf = false;
      }
    });
    input.value = "";
  }
  onCodeFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !this.lessonForm)
      return;
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    const reader = new FileReader();
    reader.onload = () => {
      const patch = { starterCode: String(reader.result || "") };
      if (CODE_FILE_EXTENSIONS[extension])
        patch["language"] = CODE_FILE_EXTENSIONS[extension];
      this.lessonForm.patchValue(patch);
    };
    reader.readAsText(file);
    input.value = "";
  }
  deleteLesson(lesson) {
    if (!confirm(`Supprimer "${lesson.title}" ?`))
      return;
    this.deletingId = lesson.id;
    this.courseService.deleteLesson(lesson.id).subscribe({
      next: () => {
        this.lessons = this.lessons.filter((l) => l.id !== lesson.id);
        this.deletingId = null;
      },
      error: () => {
        this.deletingId = null;
      }
    });
  }
  static {
    this.\u0275fac = function EditCourseComponent_Factory(t) {
      return new (t || _EditCourseComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(UploadService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditCourseComponent, selectors: [["app-edit-course"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/teacher/courses", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "card", "border-0", "shadow-sm", "p-4", "mb-4", 2, "border-radius", "16px"], [3, "ngSubmit", "formGroup"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "title", 1, "form-control"], ["rows", "5", "formControlName", "description", 1, "form-control"], [1, "row", "g-3", "mb-3"], [1, "col-6"], ["formControlName", "category", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "level", 1, "form-select"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], [1, "form-check", "form-switch", "mb-4"], ["type", "checkbox", "id", "pub", "formControlName", "published", 1, "form-check-input", 2, "width", "48px", "height", "24px"], ["for", "pub", 1, "form-check-label", "fw-semibold", "ms-2"], ["class", "alert alert-danger py-2", 4, "ngIf"], ["class", "alert alert-success py-2", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary-custom", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "p-4", 2, "border-radius", "16px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "btn", "btn-sm", "btn-primary-custom", 3, "click"], [1, "bi", "bi-plus-lg", "me-1"], ["class", "text-muted text-center py-3", 4, "ngIf"], ["class", "d-flex align-items-center gap-3 p-3 mb-2 border rounded-3", 4, "ngFor", "ngForOf"], ["class", "border rounded-3 p-3 mt-3 bg-light", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger", "py-2"], [1, "alert", "alert-success", "py-2"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-muted", "text-center", "py-3"], [1, "d-flex", "align-items-center", "gap-3", "p-3", "mb-2", "border", "rounded-3"], [1, "rounded-circle", "bg-light", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "32px", "height", "32px"], [1, "flex-grow-1"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "me-1"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "bi bi-trash", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-trash"], [1, "border", "rounded-3", "p-3", "mt-3", "bg-light"], [1, "fw-bold", "mb-3"], [1, "col-8"], ["type", "text", "formControlName", "title", "placeholder", "Ex: Exercice - Boucles for", 1, "form-control"], [1, "col-4"], ["formControlName", "type", 1, "form-select"], ["value", "CODE_EXERCISE"], ["value", "EXCEL_EXERCISE"], ["value", "VIDEO"], ["value", "PDF"], ["value", "QUIZ"], ["class", "form-check mb-3", 4, "ngIf"], ["rows", "4", "formControlName", "description", "placeholder", "D\xE9crivez ce que l'\xE9l\xE8ve doit faire...", 1, "form-control"], [1, "mb-3", 2, "width", "160px"], ["type", "number", "min", "0", "formControlName", "duration", 1, "form-control"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "isExercise", "formControlName", "exercise", 1, "form-check-input"], ["for", "isExercise", 1, "form-check-label", "fw-semibold"], [1, "form-text"], [1, "mb-3", 2, "width", "220px"], ["formControlName", "language", 1, "form-select"], ["value", "python"], ["value", "javascript"], ["value", "java"], ["value", "sql"], [1, "form-text", "mb-2"], [1, "d-flex", "gap-2", "align-items-center", "mb-2"], ["type", "file", "accept", ".pdf,.doc,.docx", 1, "form-control", 3, "change", "disabled"], ["class", "spinner-border spinner-border-sm text-primary", 4, "ngIf"], ["class", "small text-success mb-2", 4, "ngIf"], ["class", "small text-danger mb-2", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "form-label", "fw-semibold", "mb-0"], [1, "btn", "btn-sm", "btn-outline-secondary", "mb-0"], [1, "bi", "bi-upload", "me-1"], ["type", "file", "hidden", "", "accept", ".py,.js,.java,.sql,.txt", 3, "change"], ["rows", "5", "formControlName", "starterCode", "placeholder", "// Code de d\xE9part pour l'\xE9l\xE8ve...", 1, "form-control", 2, "font-family", "monospace", "font-size", "0.85rem"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "small", "text-success", "mb-2"], [1, "bi", "bi-check-circle", "me-1"], ["type", "button", 1, "btn", "btn-sm", "btn-link", "text-danger", "p-0", "ms-2", 3, "click"], [1, "small", "text-danger", "mb-2"], ["rows", "5", "formControlName", "starterCode", "placeholder", '{"cells":{"A1":{"raw":"D\xE9signation","bold":true}}}', 1, "form-control", 2, "font-family", "monospace", "font-size", "0.85rem"], ["routerLink", "/spreadsheet", "target", "_blank"], ["type", "text", "formControlName", "videoUrl", "placeholder", "https://...", 1, "form-control"], [1, "form-label", "fw-semibold", "small", "text-muted"], ["type", "text", "formControlName", "pdfUrl", "placeholder", "https://...", 1, "form-control"], ["rows", "6", "formControlName", "content", "placeholder", "R\xE9digez ici le contenu p\xE9dagogique de la le\xE7on (affich\xE9 si aucune vid\xE9o/PDF n'est fourni)...", 1, "form-control"]], template: function EditCourseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "\u270F\uFE0F Modifier le cours");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, EditCourseComponent_div_6_Template, 2, 0, "div", 5)(7, EditCourseComponent_div_7_Template, 47, 10, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.courseForm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditCourseComponent, { className: "EditCourseComponent" });
})();
export {
  EditCourseComponent
};
//# sourceMappingURL=chunk-FOJUXIEY.js.map

import {
  FormsModule
} from "./chunk-EWJBTFX2.js";
import {
  ProgressService
} from "./chunk-JX72GFCA.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  DomSanitizer,
  NgForOf,
  NgIf,
  NgStyle,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/courses/course-player/course-player.component.ts
var _c0 = (a0) => ["/courses", a0];
var _c1 = (a0) => ({ "border-radius": "14px", "border-left": a0 });
var _c2 = () => ["/spreadsheet"];
var _c3 = (a0) => ({ lessonId: a0 });
var _c4 = () => ["/ide"];
function CoursePlayerComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.exerciseLessons.length);
  }
}
function CoursePlayerComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CoursePlayerComponent_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sidebarOpen = !ctx_r0.sidebarOpen);
    });
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-layout-sidebar", !ctx_r0.sidebarOpen)("bi-layout-sidebar-inset", ctx_r0.sidebarOpen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.sidebarOpen ? "Masquer le programme" : "Afficher le programme", " ");
  }
}
function CoursePlayerComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F3CB}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4, "Aucun exercice pratique dans ce cours.");
    \u0275\u0275elementEnd()();
  }
}
function CoursePlayerComponent_div_22_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2, " Fait");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayerComponent_div_22_div_2_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ex_r3.description, " ");
  }
}
function CoursePlayerComponent_div_22_div_2_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ex_r3.duration, "min");
  }
}
function CoursePlayerComponent_div_22_div_2_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2, "Ouvrir le tableur ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c2))("queryParams", \u0275\u0275pureFunction1(3, _c3, ex_r3.id));
  }
}
function CoursePlayerComponent_div_22_div_2_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, "Ouvrir l'IDE ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ex_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c4))("queryParams", \u0275\u0275pureFunction1(3, _c3, ex_r3.id));
  }
}
function CoursePlayerComponent_div_22_div_2_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_22_div_2_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ex_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openExerciseInCourse(ex_r3));
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, "Ouvrir l'exercice ");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayerComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "div", 30)(4, "span", 31);
    \u0275\u0275element(5, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, CoursePlayerComponent_div_22_div_2_span_8_Template, 3, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h6", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CoursePlayerComponent_div_22_div_2_p_11_Template, 2, 1, "p", 35);
    \u0275\u0275elementStart(12, "div", 36);
    \u0275\u0275template(13, CoursePlayerComponent_div_22_div_2_span_13_Template, 3, 1, "span", 37)(14, CoursePlayerComponent_div_22_div_2_a_14_Template, 3, 5, "a", 38)(15, CoursePlayerComponent_div_22_div_2_a_15_Template, 3, 5, "a", 39)(16, CoursePlayerComponent_div_22_div_2_button_16_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ex_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(23, _c1, "4px solid " + ctx_r0.exerciseColor(ex_r3)));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.exerciseColor(ex_r3));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-table", ex_r3.type === "EXCEL_EXERCISE")("bi-code-slash", ex_r3.type === "CODE_EXERCISE")("bi-file-pdf", ex_r3.type === "PDF")("bi-play-circle", ex_r3.type === "VIDEO")("bi-question-circle", ex_r3.type === "QUIZ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.exerciseColor(ex_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.exerciseLabel(ex_r3), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ex_r3.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ex_r3.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ex_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ex_r3.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ex_r3.type === "EXCEL_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ex_r3.type === "CODE_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ex_r3.type !== "EXCEL_EXERCISE" && ex_r3.type !== "CODE_EXERCISE");
  }
}
function CoursePlayerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, CoursePlayerComponent_div_22_div_1_Template, 5, 0, "div", 22)(2, CoursePlayerComponent_div_22_div_2_Template, 17, 25, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.exerciseLessons.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.exerciseLessons);
  }
}
function CoursePlayerComponent_div_23_div_1_div_6_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 42);
  }
}
function CoursePlayerComponent_div_23_div_1_div_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r7 + 1);
  }
}
function CoursePlayerComponent_div_23_div_1_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", lesson_r6.duration, "min");
  }
}
function CoursePlayerComponent_div_23_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_23_div_1_div_6_Template_div_click_0_listener() {
      const lesson_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectLesson(lesson_r6));
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 62);
    \u0275\u0275template(3, CoursePlayerComponent_div_23_div_1_div_6_i_3_Template, 1, 0, "i", 63)(4, CoursePlayerComponent_div_23_div_1_div_6_span_4_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65)(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67)(9, "span");
    \u0275\u0275element(10, "i");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CoursePlayerComponent_div_23_div_1_div_6_span_12_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lesson_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", (ctx_r0.currentLesson == null ? null : ctx_r0.currentLesson.id) === lesson_r6.id)("completed", lesson_r6.completed);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", lesson_r6.completed)("bg-secondary", !lesson_r6.completed && (ctx_r0.currentLesson == null ? null : ctx_r0.currentLesson.id) !== lesson_r6.id)("bg-primary", (ctx_r0.currentLesson == null ? null : ctx_r0.currentLesson.id) === lesson_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r6.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lesson_r6.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r6.title);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-play-circle", lesson_r6.type === "VIDEO")("bi-file-pdf", lesson_r6.type === "PDF")("bi-code-slash", lesson_r6.type === "CODE_EXERCISE")("bi-table", lesson_r6.type === "EXCEL_EXERCISE")("bi-question-circle", lesson_r6.type === "QUIZ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lesson_r6.type, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r6.duration);
  }
}
function CoursePlayerComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3, "\u{1F4CB} Programme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CoursePlayerComponent_div_23_div_1_div_6_Template, 13, 25, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r0.completedCount, "/", (ctx_r0.course == null ? null : ctx_r0.course.lessons == null ? null : ctx_r0.course.lessons.length) || 0, " le\xE7ons");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.course == null ? null : ctx_r0.course.lessons);
  }
}
function CoursePlayerComponent_div_23_div_2_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_23_div_2_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.markComplete());
    });
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2, "Marquer comme compl\xE9t\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.markingComplete);
  }
}
function CoursePlayerComponent_div_23_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275element(1, "i", 82);
    \u0275\u0275text(2, "Compl\xE9t\xE9 \u2713 ");
    \u0275\u0275elementEnd();
  }
}
function CoursePlayerComponent_div_23_div_2_div_10_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275text(2, "\u{1F3AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 92);
    \u0275\u0275text(4, "Vid\xE9o non disponible pour cette d\xE9mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 93);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("URL : ", ctx_r0.currentLesson.videoUrl || "Non configur\xE9", "");
  }
}
function CoursePlayerComponent_div_23_div_2_div_10_div_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 94);
    \u0275\u0275element(1, "source", 95);
    \u0275\u0275text(2, " Votre navigateur ne supporte pas la vid\xE9o. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.currentLesson.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function CoursePlayerComponent_div_23_div_2_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87);
    \u0275\u0275template(2, CoursePlayerComponent_div_23_div_2_div_10_div_1_div_2_Template, 7, 1, "div", 88)(3, CoursePlayerComponent_div_23_div_2_div_10_div_1_video_3_Template, 3, 1, "video", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.currentLesson.videoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.videoUrl);
  }
}
function CoursePlayerComponent_div_23_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, CoursePlayerComponent_div_23_div_2_div_10_div_1_Template, 4, 2, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.videoUrl || !ctx_r0.currentLesson.content);
  }
}
function CoursePlayerComponent_div_23_div_2_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 91);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 100);
    \u0275\u0275text(4, "Document non disponible");
    \u0275\u0275elementEnd()();
  }
}
function CoursePlayerComponent_div_23_div_2_div_11_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 101);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r0.safeDocUrl(ctx_r0.currentLesson.pdfUrl), \u0275\u0275sanitizeResourceUrl);
  }
}
function CoursePlayerComponent_div_23_div_2_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 25);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 103);
    \u0275\u0275text(4, "Ce document (Word) ne peut pas s'afficher directement dans le navigateur.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 104);
    \u0275\u0275element(6, "i", 105);
    \u0275\u0275text(7, "T\xE9l\xE9charger le document ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275property("href", ctx_r0.currentLesson.pdfUrl, \u0275\u0275sanitizeUrl);
  }
}
function CoursePlayerComponent_div_23_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, CoursePlayerComponent_div_23_div_2_div_11_div_1_Template, 5, 0, "div", 96)(2, CoursePlayerComponent_div_23_div_2_div_11_iframe_2_Template, 1, 1, "iframe", 97)(3, CoursePlayerComponent_div_23_div_2_div_11_div_3_Template, 8, 1, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.currentLesson.pdfUrl && !ctx_r0.currentLesson.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.pdfUrl && ctx_r0.isViewableInline(ctx_r0.currentLesson.pdfUrl));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.pdfUrl && !ctx_r0.isViewableInline(ctx_r0.currentLesson.pdfUrl));
  }
}
function CoursePlayerComponent_div_23_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107)(2, "h6", 108);
    \u0275\u0275element(3, "i", 109);
    \u0275\u0275text(4, "Support de cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.currentLesson.content);
  }
}
function CoursePlayerComponent_div_23_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 111);
    \u0275\u0275element(2, "i", 112);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Exercice de code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 113);
    \u0275\u0275text(8, "Pratiquez votre code dans l'IDE int\xE9gr\xE9.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 114);
    \u0275\u0275element(10, "i", 115);
    \u0275\u0275text(11, "Ouvrir l'IDE ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c3, ctx_r0.currentLesson.id));
  }
}
function CoursePlayerComponent_div_23_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 111);
    \u0275\u0275element(2, "i", 116);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Exercice Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 113);
    \u0275\u0275text(8, "Pratiquez vos calculs comptables dans le tableur int\xE9gr\xE9 (formules type Excel).");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 117);
    \u0275\u0275element(10, "i", 118);
    \u0275\u0275text(11, "Ouvrir le tableur ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c3, ctx_r0.currentLesson.id));
  }
}
function CoursePlayerComponent_div_23_div_2_div_15_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_23_div_2_div_15_button_15_Template_button_click_0_listener() {
      const qi_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectedQuiz = qi_r12);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    const qi_r12 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("btn-outline-secondary", ctx_r0.selectedQuiz !== qi_r12)("btn-success", ctx_r0.selectedQuiz === qi_r12 && qi_r12 === 0)("btn-danger", ctx_r0.selectedQuiz === qi_r12 && qi_r12 !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", qi_r12 + 1, ". ", opt_r13, " ");
  }
}
function CoursePlayerComponent_div_23_div_2_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("alert-success", ctx_r0.selectedQuiz === 0)("alert-danger", ctx_r0.selectedQuiz !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedQuiz === 0 ? "\u2705 Correct ! int x = 5; est la bonne syntaxe Java." : "\u274C Incorrect. La bonne r\xE9ponse est la premi\xE8re option.", " ");
  }
}
function CoursePlayerComponent_div_23_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 119);
    \u0275\u0275element(2, "i", 120);
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 113);
    \u0275\u0275text(8, "Testez vos connaissances.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 121)(10, "p", 122);
    \u0275\u0275text(11, "Question de d\xE9monstration :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13, "Quelle est la bonne syntaxe pour d\xE9clarer une variable en Java ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 123);
    \u0275\u0275template(15, CoursePlayerComponent_div_23_div_2_div_15_button_15_Template, 2, 8, "button", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, CoursePlayerComponent_div_23_div_2_div_15_div_16_Template, 2, 5, "div", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.quizOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedQuiz !== null);
  }
}
function CoursePlayerComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68, 0);
    \u0275\u0275listener("scroll", function CoursePlayerComponent_div_23_div_2_Template_div_scroll_0_listener() {
      \u0275\u0275restoreView(_r8);
      const contentArea_r9 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onContentScroll(contentArea_r9));
    });
    \u0275\u0275elementStart(2, "div", 69)(3, "div")(4, "h3", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 71);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, CoursePlayerComponent_div_23_div_2_button_8_Template, 3, 1, "button", 72)(9, CoursePlayerComponent_div_23_div_2_span_9_Template, 3, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CoursePlayerComponent_div_23_div_2_div_10_Template, 2, 1, "div", 74)(11, CoursePlayerComponent_div_23_div_2_div_11_Template, 4, 3, "div", 74)(12, CoursePlayerComponent_div_23_div_2_div_12_Template, 7, 1, "div", 75)(13, CoursePlayerComponent_div_23_div_2_div_13_Template, 12, 3, "div", 74)(14, CoursePlayerComponent_div_23_div_2_div_14_Template, 12, 3, "div", 74)(15, CoursePlayerComponent_div_23_div_2_div_15_Template, 17, 2, "div", 74);
    \u0275\u0275elementStart(16, "div", 76)(17, "button", 77);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_23_div_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevLesson());
    });
    \u0275\u0275element(18, "i", 78);
    \u0275\u0275text(19, "Pr\xE9c\xE9dent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 79);
    \u0275\u0275listener("click", function CoursePlayerComponent_div_23_div_2_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextLesson());
    });
    \u0275\u0275text(21, " Suivant");
    \u0275\u0275element(22, "i", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.currentLesson.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentLesson.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.currentLesson.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.type === "VIDEO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.type === "PDF");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.type === "CODE_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.type === "EXCEL_EXERCISE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson.type === "QUIZ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isFirstLesson);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLastLesson);
  }
}
function CoursePlayerComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 129)(2, "div", 91);
    \u0275\u0275text(3, "\u{1F448}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 26);
    \u0275\u0275text(5, "S\xE9lectionnez une le\xE7on pour commencer");
    \u0275\u0275elementEnd()()();
  }
}
function CoursePlayerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, CoursePlayerComponent_div_23_div_1_Template, 7, 3, "div", 53)(2, CoursePlayerComponent_div_23_div_2_Template, 23, 12, "div", 54)(3, CoursePlayerComponent_div_23_div_3_Template, 6, 0, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.sidebarOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentLesson);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.currentLesson);
  }
}
var CoursePlayerComponent = class _CoursePlayerComponent {
  constructor(route, courseService, progressService, sanitizer) {
    this.route = route;
    this.courseService = courseService;
    this.progressService = progressService;
    this.sanitizer = sanitizer;
    this.course = null;
    this.currentLesson = null;
    this.activeTab = "cours";
    this.sidebarOpen = false;
    this.overallProgress = 0;
    this.completedCount = 0;
    this.markingComplete = false;
    this.selectedQuiz = null;
    this.quizOptions = ["int x = 5;", "var x = 5", "x = 5;", "declare x = 5;"];
    this.lastSentScrollPercentage = 0;
    this.scrollUpdatePending = false;
  }
  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get("id");
    this.courseService.getCourseById(this.courseId).subscribe((course) => {
      this.course = course;
      if (course.lessons?.length) {
        this.selectLesson(course.lessons[0]);
      }
      this.refreshProgress();
    });
  }
  // ─── Getters dérivés ───────────────────────────────────────────────────────
  get exerciseLessons() {
    return (this.course?.lessons ?? []).filter((l) => l.type === "EXCEL_EXERCISE" || l.type === "CODE_EXERCISE" || l.exercise);
  }
  exerciseColor(ex) {
    if (ex.type === "EXCEL_EXERCISE")
      return "#0ea5e9";
    if (ex.type === "CODE_EXERCISE")
      return "#6366f1";
    return "#f59e0b";
  }
  exerciseLabel(ex) {
    if (ex.type === "EXCEL_EXERCISE")
      return "Tableur Excel";
    if (ex.type === "CODE_EXERCISE")
      return "Exercice code";
    if (ex.type === "PDF")
      return "Fiche PDF";
    if (ex.type === "VIDEO")
      return "Vid\xE9o";
    return "Quiz";
  }
  /** Pour les exercices PDF/Vidéo/Quiz : bascule vers l'onglet Cours sur cette leçon. */
  openExerciseInCourse(ex) {
    this.activeTab = "cours";
    this.selectLesson(ex);
  }
  get isFirstLesson() {
    if (!this.course?.lessons || !this.currentLesson)
      return true;
    return this.course.lessons[0].id === this.currentLesson.id;
  }
  get isLastLesson() {
    if (!this.course?.lessons || !this.currentLesson)
      return true;
    return this.course.lessons[this.course.lessons.length - 1].id === this.currentLesson.id;
  }
  // ─── Navigation entre leçons ────────────────────────────────────────────
  selectLesson(lesson) {
    this.currentLesson = lesson;
    this.selectedQuiz = null;
    this.lastSentScrollPercentage = lesson.completed ? 100 : 0;
  }
  prevLesson() {
    const idx = this.currentLessonIndex();
    if (idx > 0)
      this.selectLesson(this.course.lessons[idx - 1]);
  }
  nextLesson() {
    const idx = this.currentLessonIndex();
    if (idx >= 0 && idx < this.course.lessons.length - 1) {
      this.selectLesson(this.course.lessons[idx + 1]);
    }
  }
  currentLessonIndex() {
    if (!this.course?.lessons || !this.currentLesson)
      return -1;
    return this.course.lessons.findIndex((l) => l.id === this.currentLesson.id);
  }
  // ─── Progression ────────────────────────────────────────────────────────
  markComplete() {
    if (!this.currentLesson)
      return;
    this.markingComplete = true;
    this.progressService.completeLesson(this.currentLesson.id).subscribe({
      next: () => {
        this.currentLesson.completed = true;
        this.markingComplete = false;
        this.refreshProgress();
      },
      error: () => {
        this.markingComplete = false;
      }
    });
  }
  refreshProgress() {
    this.progressService.getCourseProgress(this.courseId).subscribe((p) => {
      this.overallProgress = p.overallPercentage;
      this.completedCount = p.completedLessons;
    });
  }
  /**
   * Suit la lecture de la page : une fois le bas de la leçon atteint, la leçon est
   * automatiquement marquée comme complétée (sans action manuelle de l'élève).
   */
  onContentScroll(el) {
    if (!this.currentLesson || this.currentLesson.completed || this.scrollUpdatePending)
      return;
    const scrollable = el.scrollHeight - el.clientHeight;
    const percentage = scrollable <= 0 ? 100 : Math.min(100, el.scrollTop / scrollable * 100);
    if (percentage - this.lastSentScrollPercentage < 10 && percentage < 95)
      return;
    this.lastSentScrollPercentage = percentage;
    this.scrollUpdatePending = true;
    const lessonId = this.currentLesson.id;
    this.progressService.updateScrollProgress(lessonId, percentage).subscribe({
      next: () => {
        this.scrollUpdatePending = false;
        if (percentage >= 95 && this.currentLesson?.id === lessonId) {
          this.currentLesson.completed = true;
          this.refreshProgress();
        }
      },
      error: () => {
        this.scrollUpdatePending = false;
      }
    });
  }
  // ─── Documents (PDF / Word) ─────────────────────────────────────────────
  /** Seuls les vrais PDF s'affichent dans un iframe ; les fichiers Word doivent être téléchargés. */
  isViewableInline(url) {
    return /\.pdf$/i.test(url);
  }
  safeDocUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function CoursePlayerComponent_Factory(t) {
      return new (t || _CoursePlayerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ProgressService), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursePlayerComponent, selectors: [["app-course-player"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 22, consts: [["contentArea", ""], [1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "bi", "bi-arrow-left", "me-1"], [1, "fw-bold", "text-truncate", "flex-grow-1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "progress-custom", 2, "width", "120px"], [1, "progress-bar"], [1, "small", "text-muted", "fw-semibold"], [1, "d-flex", "gap-2", "mb-3"], [1, "btn", "btn-sm", "fw-semibold", 3, "click"], [1, "bi", "bi-play-circle", "me-1"], [1, "bi", "bi-trophy", "me-1"], ["class", "badge bg-white text-dark ms-1", "style", "font-size:.65rem", 4, "ngIf"], ["class", "btn btn-sm btn-outline-secondary ms-auto", 3, "click", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], ["class", "player-layout", 4, "ngIf"], [1, "badge", "bg-white", "text-dark", "ms-1", 2, "font-size", ".65rem"], [1, "btn", "btn-sm", "btn-outline-secondary", "ms-auto", 3, "click"], [1, "bi"], [1, "row", "g-3"], ["class", "col-12 text-center py-5 text-muted", 4, "ngIf"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center", "py-5", "text-muted"], [2, "font-size", "3rem"], [1, "mt-2"], [1, "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 3, "ngStyle"], [1, "card-body", "p-4", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "text-white", 2, "width", "36px", "height", "36px", "flex-shrink", "0"], [1, "badge", "rounded-pill", "text-white", "small"], ["class", "badge bg-success ms-auto", 4, "ngIf"], [1, "fw-bold", "mb-2", "flex-grow-1"], ["class", "text-muted small mb-3", "style", "display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mt-auto"], ["class", "text-muted small", 4, "ngIf"], ["class", "btn btn-sm ms-auto", "style", "background:#0ea5e9;color:white", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "btn btn-sm btn-primary ms-auto", 3, "routerLink", "queryParams", 4, "ngIf"], ["class", "btn btn-sm ms-auto", "style", "background:#6366f1;color:white", 3, "click", 4, "ngIf"], [1, "badge", "bg-success", "ms-auto"], [1, "bi", "bi-check-lg"], [1, "text-muted", "small", "mb-3", 2, "display", "-webkit-box", "-webkit-line-clamp", "3", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "text-muted", "small"], [1, "bi", "bi-clock", "me-1"], [1, "btn", "btn-sm", "ms-auto", 2, "background", "#0ea5e9", "color", "white", 3, "routerLink", "queryParams"], [1, "bi", "bi-table", "me-1"], [1, "btn", "btn-sm", "btn-primary", "ms-auto", 3, "routerLink", "queryParams"], [1, "bi", "bi-code-slash", "me-1"], [1, "btn", "btn-sm", "ms-auto", 2, "background", "#6366f1", "color", "white", 3, "click"], [1, "bi", "bi-box-arrow-up-right", "me-1"], [1, "player-layout"], ["class", "lessons-panel", 4, "ngIf"], ["class", "content-area reading-pad", 3, "scroll", 4, "ngIf"], ["class", "content-area d-flex align-items-center justify-content-center", 4, "ngIf"], [1, "lessons-panel"], [1, "p-3", "border-bottom", "border-secondary"], [1, "text-white", "fw-semibold", "small"], [1, "text-secondary", 2, "font-size", ".75rem"], ["class", "lesson-item", 3, "active", "completed", "click", 4, "ngFor", "ngForOf"], [1, "lesson-item", 3, "click"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "24px", "height", "24px", "font-size", "0.65rem", "color", "white"], ["class", "bi bi-check-lg", 4, "ngIf"], [4, "ngIf"], [1, "overflow-hidden"], [1, "text-white", "small", "fw-semibold", "text-truncate"], [1, "text-secondary", "d-flex", "gap-2", 2, "font-size", ".7rem"], [1, "content-area", "reading-pad", 3, "scroll"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], ["class", "btn btn-success btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "badge bg-success px-3 py-2", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "card border-0 bg-light mb-4", "style", "border-radius:12px", 4, "ngIf"], [1, "d-flex", "justify-content-between", "mt-4", "pt-3", "border-top"], [1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-arrow-left", "me-2"], [1, "btn", "btn-primary-custom", 3, "click", "disabled"], [1, "bi", "bi-arrow-right", "ms-2"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "bi", "bi-check-circle", "me-1"], [1, "badge", "bg-success", "px-3", "py-2"], [1, "mb-4"], ["class", "video-container mb-3", 4, "ngIf"], [1, "video-container", "mb-3"], [1, "video-placeholder", 2, "aspect-ratio", "16/9"], ["class", "text-center", 4, "ngIf"], ["controls", "", "class", "w-100", "style", "max-height:400px", 4, "ngIf"], [1, "text-center"], [2, "font-size", "4rem"], [1, "mt-2", "opacity-75"], [1, "small", "opacity-50"], ["controls", "", 1, "w-100", 2, "max-height", "400px"], ["type", "video/mp4", 3, "src"], ["class", "border rounded-3 p-5 text-center bg-light mb-3", 4, "ngIf"], ["class", "w-100 border rounded-3", "style", "height:85vh", 3, "src", 4, "ngIf"], ["class", "border rounded-3 p-5 text-center bg-light", 4, "ngIf"], [1, "border", "rounded-3", "p-5", "text-center", "bg-light", "mb-3"], [1, "mt-2", "text-muted"], [1, "w-100", "border", "rounded-3", 2, "height", "85vh", 3, "src"], [1, "border", "rounded-3", "p-5", "text-center", "bg-light"], [1, "mt-2", "mb-3", "text-muted"], ["target", "_blank", "download", "", 1, "btn", "btn-primary-custom", 3, "href"], [1, "bi", "bi-download", "me-2"], [1, "card", "border-0", "bg-light", "mb-4", 2, "border-radius", "12px"], [1, "card-body", "p-4"], [1, "fw-bold", "mb-3"], [1, "bi", "bi-journal-text", "me-2", "text-primary"], [1, "lesson-content", 2, "white-space", "pre-wrap", "line-height", "1.7"], [1, "alert", "alert-info", "d-flex", "gap-2"], [1, "bi", "bi-code-slash", "fs-5"], [1, "small"], ["routerLink", "/ide", 1, "btn", "btn-primary-custom", 3, "queryParams"], [1, "bi", "bi-code-slash", "me-2"], [1, "bi", "bi-table", "fs-5"], ["routerLink", "/spreadsheet", 1, "btn", "btn-primary-custom", 3, "queryParams"], [1, "bi", "bi-table", "me-2"], [1, "alert", "alert-warning", "d-flex", "gap-2"], [1, "bi", "bi-question-circle", "fs-5"], [1, "card", "border-0", "bg-light", "p-4", "rounded-3"], [1, "fw-semibold"], [1, "d-flex", "flex-column", "gap-2", "mt-3"], ["class", "btn text-start", 3, "btn-outline-secondary", "btn-success", "btn-danger", "click", 4, "ngFor", "ngForOf"], ["class", "mt-3 alert", 3, "alert-success", "alert-danger", 4, "ngIf"], [1, "btn", "text-start", 3, "click"], [1, "mt-3", "alert"], [1, "content-area", "d-flex", "align-items-center", "justify-content-center"], [1, "text-center", "text-muted"]], template: function CoursePlayerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275text(4, "Retour ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 9);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
        \u0275\u0275listener("click", function CoursePlayerComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "cours";
        });
        \u0275\u0275element(15, "i", 12);
        \u0275\u0275text(16, "Cours ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275listener("click", function CoursePlayerComponent_Template_button_click_17_listener() {
          return ctx.activeTab = "pratique";
        });
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275text(19, "Pratique ");
        \u0275\u0275template(20, CoursePlayerComponent_span_20_Template, 2, 1, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, CoursePlayerComponent_button_21_Template, 3, 5, "button", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, CoursePlayerComponent_div_22_Template, 3, 2, "div", 16)(23, CoursePlayerComponent_div_23_Template, 4, 3, "div", 17);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, ctx.courseId));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.course == null ? null : ctx.course.title);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.overallProgress, "%");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 17, ctx.overallProgress, "1.0-0"), "%");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("btn-primary-custom", ctx.activeTab === "cours")("btn-outline-secondary", ctx.activeTab !== "cours");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("btn-warning", ctx.activeTab === "pratique")("btn-outline-secondary", ctx.activeTab !== "pratique");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.exerciseLessons.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "cours");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "pratique");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "cours");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, NgStyle, DecimalPipe, RouterLink, FormsModule], styles: ["\n\n.player-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - var(--navbar-height) - 40px);\n}\n.lessons-panel[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n  overflow-y: auto;\n  background: #1e293b;\n  border-radius: 12px 0 0 12px;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background: white;\n  border-radius: 12px;\n}\n.lessons-panel[_ngcontent-%COMP%]    + .content-area[_ngcontent-%COMP%] {\n  border-radius: 0 12px 12px 0;\n}\n.lesson-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-left: 3px solid transparent;\n  transition: all 0.2s;\n}\n.lesson-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n.lesson-item.active[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.2);\n  border-left-color: #6366f1;\n}\n.lesson-item.completed[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #000;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.reading-pad[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem;\n}\n@media (max-width: 991px) {\n  .reading-pad[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.25rem;\n  }\n}\n.video-placeholder[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #0f172a);\n  color: white;\n}\n@media (max-width: 768px) {\n  .player-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  .lessons-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n    max-height: 300px;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    border-radius: 0 0 12px 12px;\n  }\n}\n/*# sourceMappingURL=course-player.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursePlayerComponent, { className: "CoursePlayerComponent" });
})();
export {
  CoursePlayerComponent
};
//# sourceMappingURL=chunk-XGODALFU.js.map

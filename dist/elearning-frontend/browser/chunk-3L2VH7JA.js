import {
  ProgressService
} from "./chunk-JX72GFCA.js";
import {
  COURSE_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/courses/course-detail/course-detail.component.ts
var _c0 = (a0) => ["/courses", a0, "learn"];
function CourseDetailComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.course.teacher.firstName, " ", ctx_r0.course.teacher.lastName, "");
  }
}
function CourseDetailComponent_div_0_button_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 46);
  }
}
function CourseDetailComponent_div_0_button_22_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function CourseDetailComponent_div_0_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function CourseDetailComponent_div_0_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.enroll());
    });
    \u0275\u0275template(1, CourseDetailComponent_div_0_button_22_span_1_Template, 1, 0, "span", 44)(2, CourseDetailComponent_div_0_button_22_i_2_Template, 1, 0, "i", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.enrollLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.enrollLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.enrollLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enrollLoading ? "Inscription..." : "S'inscrire gratuitement", " ");
  }
}
function CourseDetailComponent_div_0_a_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2, "Continuer l'apprentissage ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r0.course.id));
  }
}
function CourseDetailComponent_div_0_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275text(1, " Se connecter pour s'inscrire ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3, "\u{1F4C8} Votre progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275element(8, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 5, ctx_r0.progress.overallPercentage, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r0.progress.overallPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.progress.completedLessons, "/", ctx_r0.progress.totalLessons, " le\xE7ons compl\xE9t\xE9es");
  }
}
function CourseDetailComponent_div_0_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4, "Aucune le\xE7on disponible pour l'instant");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_div_0_div_37_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 68);
  }
}
function CourseDetailComponent_div_0_div_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r3 + 1);
  }
}
function CourseDetailComponent_div_0_div_37_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", lesson_r4.duration, "min");
  }
}
function CourseDetailComponent_div_0_div_37_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275element(1, "i", 70);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275template(2, CourseDetailComponent_div_0_div_37_i_2_Template, 1, 0, "i", 63)(3, CourseDetailComponent_div_0_div_37_span_3_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "div", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 65)(8, "span");
    \u0275\u0275element(9, "i", 66);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CourseDetailComponent_div_0_div_37_span_11_Template, 3, 1, "span", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CourseDetailComponent_div_0_div_37_span_12_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lesson_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-light", lesson_r4.completed);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", lesson_r4.completed)("bg-primary", !lesson_r4.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !lesson_r4.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lesson_r4.title);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bi-play-circle", lesson_r4.type === "VIDEO")("bi-file-pdf", lesson_r4.type === "PDF")("bi-code-slash", lesson_r4.type === "CODE_EXERCISE")("bi-table", lesson_r4.type === "EXCEL_EXERCISE")("bi-question-circle", lesson_r4.type === "QUIZ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLessonTypeLabel(lesson_r4.type), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", lesson_r4.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEnrolled);
  }
}
function CourseDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h1", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "span");
    \u0275\u0275element(15, "i", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, CourseDetailComponent_div_0_span_20_Template, 3, 2, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275template(22, CourseDetailComponent_div_0_button_22_Template, 4, 4, "button", 16)(23, CourseDetailComponent_div_0_a_23_Template, 3, 3, "a", 17)(24, CourseDetailComponent_div_0_a_24_Template, 2, 0, "a", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 19)(26, "div", 20);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(28, CourseDetailComponent_div_0_div_28_Template, 11, 8, "div", 21);
    \u0275\u0275elementStart(29, "div", 22)(30, "div", 5)(31, "div", 23)(32, "div", 24)(33, "h4", 25);
    \u0275\u0275text(34, "\u{1F4CB} Programme du cours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 26);
    \u0275\u0275template(36, CourseDetailComponent_div_0_div_36_Template, 5, 0, "div", 27)(37, CourseDetailComponent_div_0_div_37_Template, 13, 22, "div", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 29)(39, "div", 30)(40, "h5", 31);
    \u0275\u0275text(41, "Ce que vous apprendrez");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ul", 32)(43, "li", 33);
    \u0275\u0275element(44, "i", 34);
    \u0275\u0275text(45, "Fondamentaux du langage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "li", 33);
    \u0275\u0275element(47, "i", 34);
    \u0275\u0275text(48, "Bonnes pratiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li", 33);
    \u0275\u0275element(50, "i", 34);
    \u0275\u0275text(51, "Projets pratiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "li", 33);
    \u0275\u0275element(53, "i", 34);
    \u0275\u0275text(54, "Exercices de code en direct");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li", 33);
    \u0275\u0275element(56, "i", 34);
    \u0275\u0275text(57, "Support IA int\xE9gr\xE9");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 35)(59, "h5", 31);
    \u0275\u0275text(60, "Ce cours inclut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 36)(62, "div");
    \u0275\u0275element(63, "i", 37);
    \u0275\u0275text(64, "Vid\xE9os HD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div");
    \u0275\u0275element(66, "i", 38);
    \u0275\u0275text(67, "Ressources PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div");
    \u0275\u0275element(69, "i", 39);
    \u0275\u0275text(70, "IDE int\xE9gr\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div");
    \u0275\u0275element(72, "i", 40);
    \u0275\u0275text(73, "Assistant IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div");
    \u0275\u0275element(75, "i", 41);
    \u0275\u0275text(76, "Acc\xE8s illimit\xE9");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getCategoryGradient(ctx_r0.course.category));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.getCategoryIcon(ctx_r0.course.category), " ", ctx_r0.getCategoryLabel(ctx_r0.course.category), " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r0.getLevelColor(ctx_r0.course.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getLevelLabel(ctx_r0.course.level), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.course.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.course.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.course.totalLessons, " le\xE7ons");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDuration(ctx_r0.course.totalDurationMinutes));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.course.teacher);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.authService.isAuthenticated);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getCategoryIcon(ctx_r0.course.category));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEnrolled && ctx_r0.progress);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r0.course.lessons || ctx_r0.course.lessons.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.course.lessons);
  }
}
function CourseDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "div", 72);
    \u0275\u0275elementStart(2, "p", 73);
    \u0275\u0275text(3, "Chargement du cours...");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 74);
    \u0275\u0275text(2, "\u{1F615}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 75);
    \u0275\u0275text(4, "Cours introuvable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 76);
    \u0275\u0275text(6, "Retour aux cours");
    \u0275\u0275elementEnd()();
  }
}
var CourseDetailComponent = class _CourseDetailComponent {
  constructor(route, courseService, progressService, authService, router) {
    this.route = route;
    this.courseService = courseService;
    this.progressService = progressService;
    this.authService = authService;
    this.router = router;
    this.course = null;
    this.error = false;
    this.isEnrolled = false;
    this.enrollLoading = false;
    this.progress = null;
  }
  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.courseService.getCourseById(id).subscribe({
      next: (course) => {
        this.course = course;
        if (this.authService.isAuthenticated) {
          this.courseService.getEnrolledCourses().subscribe((enrolled) => {
            this.isEnrolled = enrolled.some((c) => c.id === id);
            if (this.isEnrolled) {
              this.progressService.getCourseProgress(id).subscribe((p) => this.progress = p);
            }
          });
        }
      },
      error: () => {
        this.error = true;
      }
    });
  }
  enroll() {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(["/auth/login"]);
      return;
    }
    this.enrollLoading = true;
    this.courseService.enrollCourse(this.course.id).subscribe({
      next: () => {
        this.isEnrolled = true;
        this.enrollLoading = false;
      },
      error: () => {
        this.enrollLoading = false;
      }
    });
  }
  getCategoryIcon(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.icon || "\u{1F4DA}";
  }
  getCategoryLabel(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.label || cat;
  }
  getCategoryGradient(cat) {
    let color = COURSE_CATEGORIES.find((c) => c.key === cat)?.color || "#6366f1";
    return `linear-gradient(135deg, ${color}, ${color}cc)`;
  }
  getLevelLabel(lvl) {
    return { BEGINNER: "D\xE9butant", INTERMEDIATE: "Interm\xE9diaire", ADVANCED: "Avanc\xE9" }[lvl] || lvl;
  }
  getLevelColor(lvl) {
    return { BEGINNER: "#10b981", INTERMEDIATE: "#f59e0b", ADVANCED: "#ef4444" }[lvl] || "#6366f1";
  }
  getLessonTypeLabel(t) {
    return { VIDEO: "Vid\xE9o", PDF: "Document PDF", CODE_EXERCISE: "Exercice de code", EXCEL_EXERCISE: "Exercice Excel", QUIZ: "Quiz" }[t] || t;
  }
  formatDuration(min) {
    if (!min)
      return "\u2014";
    return min < 60 ? `${min}min` : `${Math.floor(min / 60)}h${min % 60 > 0 ? min % 60 + "min" : ""}`;
  }
  static {
    this.\u0275fac = function CourseDetailComponent_Factory(t) {
      return new (t || _CourseDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ProgressService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailComponent, selectors: [["app-course-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["class", "fade-in-up", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], [1, "fade-in-up"], [1, "rounded-4", "p-5", "mb-4", "position-relative", "overflow-hidden"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "d-flex", "gap-2", "mb-3"], [1, "badge", "bg-white", "text-dark", "rounded-pill", "fw-semibold"], [1, "badge", "rounded-pill", "fw-semibold", "text-white"], [1, "fw-bold", "text-white", "mb-3", 2, "font-size", "2rem"], [1, "text-white", "opacity-85", "mb-4"], [1, "d-flex", "gap-4", "text-white", "opacity-75", "small", "mb-4"], [1, "bi", "bi-collection", "me-1"], [1, "bi", "bi-clock", "me-1"], [4, "ngIf"], [1, "d-flex", "gap-3"], ["class", "btn btn-light fw-bold px-4 py-2", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-light fw-bold px-4 py-2", 3, "routerLink", 4, "ngIf"], ["routerLink", "/auth/login", "class", "btn btn-outline-light fw-bold px-4 py-2", 4, "ngIf"], [1, "col-lg-4", "text-center", "d-none", "d-lg-block"], [2, "font-size", "8rem", "opacity", "0.3"], ["class", "card border-0 shadow-sm mb-4 p-4", "style", "border-radius:16px", 4, "ngIf"], [1, "row", "g-4"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "16px"], [1, "card-header", "bg-white", "border-0", "p-4"], [1, "fw-bold", "mb-0"], [1, "card-body", "p-0"], ["class", "text-center py-5 text-muted", 4, "ngIf"], ["class", "d-flex align-items-center gap-3 p-4 border-bottom", "style", "transition: background 0.2s", 3, "bg-light", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "border-0", "shadow-sm", "mb-3", "p-4", 2, "border-radius", "16px"], [1, "fw-bold", "mb-3"], [1, "list-unstyled"], [1, "mb-2"], [1, "bi", "bi-check-circle-fill", "text-success", "me-2"], [1, "card", "border-0", "shadow-sm", "p-4", 2, "border-radius", "16px"], [1, "d-flex", "flex-column", "gap-2", "text-muted", "small"], [1, "bi", "bi-play-circle", "me-2", "text-primary"], [1, "bi", "bi-file-pdf", "me-2", "text-danger"], [1, "bi", "bi-code-slash", "me-2", "text-success"], [1, "bi", "bi-robot", "me-2", "text-info"], [1, "bi", "bi-infinity", "me-2", "text-warning"], [1, "bi", "bi-person", "me-1"], [1, "btn", "btn-light", "fw-bold", "px-4", "py-2", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-plus-circle me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-plus-circle", "me-2"], [1, "btn", "btn-light", "fw-bold", "px-4", "py-2", 3, "routerLink"], [1, "bi", "bi-play-circle", "me-2"], ["routerLink", "/auth/login", 1, "btn", "btn-outline-light", "fw-bold", "px-4", "py-2"], [1, "card", "border-0", "shadow-sm", "mb-4", "p-4", 2, "border-radius", "16px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold"], [1, "badge", "bg-primary", "rounded-pill"], [1, "progress-custom"], [1, "progress-bar"], [1, "text-muted", "small", "mt-1"], [1, "text-center", "py-5", "text-muted"], [2, "font-size", "3rem"], [1, "mt-2"], [1, "d-flex", "align-items-center", "gap-3", "p-4", "border-bottom", 2, "transition", "background 0.2s"], [1, "rounded-circle", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "36px", "height", "36px", "color", "white", "font-size", "0.8rem", "font-weight", "700"], ["class", "bi bi-check-lg", 4, "ngIf"], [1, "flex-grow-1"], [1, "text-muted", "small", "d-flex", "gap-3", "mt-1"], [1, "me-1"], ["class", "text-muted", 4, "ngIf"], [1, "bi", "bi-check-lg"], [1, "text-muted"], [1, "bi", "bi-lock"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary", 2, "width", "3rem", "height", "3rem"], [1, "mt-3", "text-muted"], [2, "font-size", "4rem"], [1, "mt-3"], ["routerLink", "/courses", 1, "btn", "btn-primary-custom", "mt-3"]], template: function CourseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CourseDetailComponent_div_0_Template, 77, 19, "div", 0)(1, CourseDetailComponent_div_1_Template, 4, 0, "div", 1)(2, CourseDetailComponent_div_2_Template, 7, 0, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.course);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.course && !ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailComponent, { className: "CourseDetailComponent" });
})();
export {
  CourseDetailComponent
};
//# sourceMappingURL=chunk-3L2VH7JA.js.map

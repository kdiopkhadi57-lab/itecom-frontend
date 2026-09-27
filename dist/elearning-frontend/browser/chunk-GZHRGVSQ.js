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
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/courses/my-learning/my-learning.component.ts
var _c0 = (a0) => ["/courses", a0, "learn"];
var _c1 = (a0) => ["/courses", a0];
function MyLearningComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementEnd();
  }
}
function MyLearningComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 17);
    \u0275\u0275text(4, "Aucun cours en cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Inscrivez-vous \xE0 des cours pour d\xE9marrer votre apprentissage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 18);
    \u0275\u0275text(8, "D\xE9couvrir les cours");
    \u0275\u0275elementEnd()();
  }
}
function MyLearningComponent_div_37_div_1_div_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2, "\u{1F389} Cours termin\xE9 !");
    \u0275\u0275elementEnd()();
  }
}
function MyLearningComponent_div_37_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 35);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 36);
    \u0275\u0275element(8, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, MyLearningComponent_div_37_div_1_div_10_div_9_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r1.completedLessons, "/", p_r1.totalLessons, " le\xE7ons");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 6, p_r1.overallPercentage, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", p_r1.overallPercentage, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r1.overallPercentage === 100);
  }
}
function MyLearningComponent_div_37_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "span", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MyLearningComponent_div_37_div_1_div_10_Template, 10, 9, "div", 27);
    \u0275\u0275elementStart(11, "div", 28)(12, "a", 29);
    \u0275\u0275element(13, "i", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 31);
    \u0275\u0275element(16, "i", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const course_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getCategoryGradient(course_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon(course_r2.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(course_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getProgress(course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_9_0 = ctx_r2.getProgress(course_r2.id)) == null ? null : tmp_9_0.overallPercentage) === 0 ? "Commencer" : "Continuer", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c1, course_r2.id));
  }
}
function MyLearningComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, MyLearningComponent_div_37_div_1_Template, 17, 13, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.courses);
  }
}
var MyLearningComponent = class _MyLearningComponent {
  constructor(courseService, progressService) {
    this.courseService = courseService;
    this.progressService = progressService;
    this.courses = [];
    this.progressMap = {};
    this.loading = true;
    this.totalCompleted = 0;
    this.avgProgress = 0;
  }
  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe((courses) => {
      this.courses = courses;
      this.progressService.getMyProgress().subscribe((progressList) => {
        progressList.forEach((p) => this.progressMap[p.courseId] = p);
        this.totalCompleted = progressList.reduce((s, p) => s + p.completedLessons, 0);
        this.avgProgress = progressList.length > 0 ? Math.round(progressList.reduce((s, p) => s + p.overallPercentage, 0) / progressList.length) : 0;
        this.loading = false;
      });
    });
  }
  getProgress(courseId) {
    return this.progressMap[courseId] || null;
  }
  getCategoryIcon(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.icon || "\u{1F4DA}";
  }
  getCategoryLabel(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.label || cat;
  }
  getCategoryGradient(cat) {
    let color = COURSE_CATEGORIES.find((c) => c.key === cat)?.color || "#6366f1";
    return `linear-gradient(135deg, ${color}22, ${color}55)`;
  }
  static {
    this.\u0275fac = function MyLearningComponent_Factory(t) {
      return new (t || _MyLearningComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ProgressService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyLearningComponent, selectors: [["app-my-learning"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 6, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], ["routerLink", "/courses", 1, "btn", "btn-primary-custom"], [1, "bi", "bi-plus-circle", "me-2"], [1, "row", "g-3", "mb-4"], [1, "col-sm-4"], [1, "card", "border-0", "shadow-sm", "p-4", "text-center", 2, "border-radius", "16px"], [2, "font-size", "2rem"], [1, "fw-bold", "fs-3", "mt-1"], [1, "text-muted", "small"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "5rem"], [1, "mt-3", "fw-bold"], ["routerLink", "/courses", 1, "btn", "btn-primary-custom", "mt-3"], [1, "row", "g-4"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "card", "course-card", "h-100"], [1, "course-thumbnail-placeholder"], [1, "card-body", "d-flex", "flex-column", "p-4"], [1, "badge-category", "mb-2"], [1, "fw-bold", "flex-grow-1"], ["class", "my-3", 4, "ngIf"], [1, "d-flex", "gap-2", "mt-auto"], [1, "btn", "btn-primary-custom", "flex-grow-1", 3, "routerLink"], [1, "bi", "bi-play-fill", "me-1"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], [1, "bi", "bi-info-circle"], [1, "my-3"], [1, "d-flex", "justify-content-between", "small", "mb-1"], [1, "fw-semibold", "text-primary"], [1, "progress-custom"], [1, "progress-bar"], ["class", "mt-2 text-center", 4, "ngIf"], [1, "mt-2", "text-center"], [1, "badge", "bg-success", "rounded-pill", "px-3"]], template: function MyLearningComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F4DA} Mon Apprentissage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Suivez votre progression sur tous vos cours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, "Explorer d'autres cours ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275text(14, "\u{1F4DA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275text(18, "Cours inscrits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 7)(20, "div", 8)(21, "div", 9);
        \u0275\u0275text(22, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 11);
        \u0275\u0275text(26, "Le\xE7ons compl\xE9t\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 7)(28, "div", 8)(29, "div", 9);
        \u0275\u0275text(30, "\u{1F525}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 10);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11);
        \u0275\u0275text(34, "Progression moyenne");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(35, MyLearningComponent_div_35_Template, 2, 0, "div", 12)(36, MyLearningComponent_div_36_Template, 9, 0, "div", 12)(37, MyLearningComponent_div_37_Template, 2, 1, "div", 13);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.courses.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.totalCompleted);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.avgProgress, "%");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyLearningComponent, { className: "MyLearningComponent" });
})();
export {
  MyLearningComponent
};
//# sourceMappingURL=chunk-GZHRGVSQ.js.map

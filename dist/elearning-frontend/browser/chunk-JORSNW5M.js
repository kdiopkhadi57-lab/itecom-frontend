import {
  COURSE_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/admin/teacher-courses/teacher-courses.component.ts
var _c0 = (a0) => ["/teacher/courses", a0, "edit"];
var _c1 = (a0) => ["/courses", a0];
function TeacherCoursesComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function TeacherCoursesComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 17);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 18);
    \u0275\u0275text(4, "Aucun cours cr\xE9\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Commencez par cr\xE9er votre premier cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 19);
    \u0275\u0275text(8, "Cr\xE9er un cours");
    \u0275\u0275elementEnd()();
  }
}
function TeacherCoursesComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "div", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 28)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 31)(14, "p", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 33)(17, "span");
    \u0275\u0275element(18, "i", 34);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 36)(26, "a", 37);
    \u0275\u0275element(27, "i", 38);
    \u0275\u0275text(28, "Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 39);
    \u0275\u0275element(30, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 41);
    \u0275\u0275listener("click", function TeacherCoursesComponent_div_31_div_1_Template_button_click_31_listener() {
      const course_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.togglePublish(course_r2));
    });
    \u0275\u0275element(32, "i", 42);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getCategoryGradient(course_r2.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon(course_r2.category));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryLabel(course_r2.category), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-success", course_r2.published)("bg-warning", !course_r2.published);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", course_r2.published ? "\u2705 Publi\xE9" : "\u23F3 Brouillon", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", course_r2.description || "Aucune description", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", course_r2.totalLessons, " le\xE7ons");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDuration(course_r2.totalDurationMinutes));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge-level ", course_r2.level, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getLevelLabel(course_r2.level));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c0, course_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(29, _c1, course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("btn-outline-warning", course_r2.published)("btn-outline-success", !course_r2.published);
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-eye-slash", course_r2.published)("bi-eye", !course_r2.published);
  }
}
function TeacherCoursesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, TeacherCoursesComponent_div_31_div_1_Template, 33, 31, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.courses);
  }
}
var TeacherCoursesComponent = class _TeacherCoursesComponent {
  get publishedCount() {
    return this.courses.filter((c) => c.published).length;
  }
  get draftCount() {
    return this.courses.filter((c) => !c.published).length;
  }
  constructor(courseService) {
    this.courseService = courseService;
    this.courses = [];
    this.loading = true;
  }
  ngOnInit() {
    this.courseService.getTeacherCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  togglePublish(course) {
    this.courseService.updateCourse(course.id, __spreadProps(__spreadValues({}, course), { published: !course.published })).subscribe({
      next: (updated) => {
        course.published = updated.published;
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
    return `linear-gradient(135deg, ${color}, ${color}bb)`;
  }
  getLevelLabel(lvl) {
    return { BEGINNER: "D\xE9butant", INTERMEDIATE: "Interm\xE9diaire", ADVANCED: "Avanc\xE9" }[lvl] || lvl;
  }
  formatDuration(min) {
    return min < 60 ? `${min}min` : `${Math.floor(min / 60)}h${min % 60 > 0 ? min % 60 + "min" : ""}`;
  }
  static {
    this.\u0275fac = function TeacherCoursesComponent_Factory(t) {
      return new (t || _TeacherCoursesComponent)(\u0275\u0275directiveInject(CourseService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherCoursesComponent, selectors: [["app-teacher-courses"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 6, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], ["routerLink", "/teacher/create-course", 1, "btn", "btn-primary-custom"], [1, "bi", "bi-plus-circle", "me-2"], [1, "row", "g-3", "mb-4"], [1, "col-sm-4"], [1, "card", "border-0", "bg-primary", "text-white", "p-4", "text-center", 2, "border-radius", "16px"], [1, "fw-bold", "fs-2"], [1, "opacity-75", "small"], [1, "card", "border-0", "bg-success", "text-white", "p-4", "text-center", 2, "border-radius", "16px"], [1, "card", "border-0", "bg-warning", "text-white", "p-4", "text-center", 2, "border-radius", "16px"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [2, "font-size", "5rem"], [1, "mt-3"], ["routerLink", "/teacher/create-course", 1, "btn", "btn-primary-custom", "mt-3"], [1, "row", "g-4"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [1, "p-3", "d-flex", "align-items-center", "gap-3"], [2, "font-size", "2.5rem"], [1, "flex-grow-1"], [1, "fw-bold", "text-white"], [1, "d-flex", "gap-2", "mt-1"], [1, "badge", "bg-white", "text-dark", "rounded-pill", 2, "font-size", ".7rem"], [1, "badge", "rounded-pill", 2, "font-size", ".7rem"], [1, "card-body", "p-4"], [1, "text-muted", "small", "mb-3", 2, "display", "-webkit-box", "-webkit-line-clamp", "2", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "d-flex", "gap-3", "small", "text-muted", "mb-4"], [1, "bi", "bi-collection", "me-1"], [1, "bi", "bi-clock", "me-1"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", "flex-grow-1", 3, "routerLink"], [1, "bi", "bi-pencil", "me-1"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "bi", "bi-eye"], [1, "btn", "btn-sm", 3, "click"], [1, "bi"]], template: function TeacherCoursesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F4DA} Mes Cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "G\xE9rez vos cours et suivez l'engagement de vos \xE9tudiants");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, "Cr\xE9er un cours ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275text(16, "Cours cr\xE9\xE9s");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 7)(18, "div", 11)(19, "div", 9);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10);
        \u0275\u0275text(22, "Cours publi\xE9s");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 7)(24, "div", 12)(25, "div", 9);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 10);
        \u0275\u0275text(28, "Brouillons");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(29, TeacherCoursesComponent_div_29_Template, 2, 0, "div", 13)(30, TeacherCoursesComponent_div_30_Template, 9, 0, "div", 13)(31, TeacherCoursesComponent_div_31_Template, 2, 1, "div", 14);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.courses.length);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.publishedCount);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.draftCount);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.courses.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherCoursesComponent, { className: "TeacherCoursesComponent" });
})();
export {
  TeacherCoursesComponent
};
//# sourceMappingURL=chunk-JORSNW5M.js.map

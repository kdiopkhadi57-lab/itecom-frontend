import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EWJBTFX2.js";
import {
  UserScopeService
} from "./chunk-27HYB7NT.js";
import {
  COURSE_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import "./chunk-2SZQOUIP.js";
import {
  ActivatedRoute,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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

// src/app/features/courses/course-list/course-list.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/courses", a0];
function CourseListComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function CourseListComponent_button_14_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(cat_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-dark", ctx_r2.selectedCategory === cat_r2.key)("btn-outline-secondary", ctx_r2.selectedCategory !== cat_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r2.icon, " ", cat_r2.label, " ");
  }
}
function CourseListComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function CourseListComponent_button_18_Template_button_click_0_listener() {
      const lvl_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.selectedLevel = ctx_r2.selectedLevel === lvl_r5.key ? null : lvl_r5.key;
      return \u0275\u0275resetView(ctx_r2.applyFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-primary", ctx_r2.selectedLevel === lvl_r5.key)("btn-outline-secondary", ctx_r2.selectedLevel !== lvl_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.label, " ");
  }
}
function CourseListComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 22);
    \u0275\u0275element(6, "span", 25)(7, "span", 26)(8, "span", 27);
    \u0275\u0275elementEnd()()()();
  }
}
function CourseListComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, CourseListComponent_div_19_div_1_Template, 9, 0, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function CourseListComponent_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 33);
    \u0275\u0275text(4, "Aucun cours trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 34);
    \u0275\u0275text(6, "Essayez d'autres filtres ou mots-cl\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 35);
    \u0275\u0275listener("click", function CourseListComponent_div_20_div_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(8, "R\xE9initialiser");
    \u0275\u0275elementEnd()();
  }
}
function CourseListComponent_div_20_div_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", course_r7.teacher.firstName == null ? null : course_r7.teacher.firstName.charAt(0), "", course_r7.teacher.lastName == null ? null : course_r7.teacher.lastName.charAt(0), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", course_r7.teacher.firstName, " ", course_r7.teacher.lastName, "");
  }
}
function CourseListComponent_div_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 36)(2, "div", 37)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 38)(6, "div", 39)(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h5", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 43)(16, "span");
    \u0275\u0275element(17, "i", 44);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275element(20, "i", 45);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, CourseListComponent_div_20_div_6_div_22_Template, 5, 4, "div", 46);
    \u0275\u0275elementStart(23, "a", 47);
    \u0275\u0275text(24, " Voir le cours ");
    \u0275\u0275element(25, "i", 48);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const course_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.getCategoryColor(course_r7.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon(course_r7.category));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel(course_r7.category));
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("badge-level ", course_r7.level, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getLevelLabel(course_r7.level));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r7.description, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", course_r7.totalLessons, " le\xE7ons");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDuration(course_r7.totalDurationMinutes));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", course_r7.teacher);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, course_r7.id));
  }
}
function CourseListComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, CourseListComponent_div_20_div_4_Template, 9, 0, "div", 30);
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275template(6, CourseListComponent_div_20_div_6_Template, 26, 16, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredCourses.length, " cours trouv\xE9(s)");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredCourses.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.filteredCourses);
  }
}
var CourseListComponent = class _CourseListComponent {
  get visibleCategories() {
    if (this.userCategoryKeys && this.userCategoryKeys.length > 0)
      return this.categories.filter((c) => this.userCategoryKeys.includes(c.key));
    return this.categories;
  }
  constructor(courseService, route, userScope) {
    this.courseService = courseService;
    this.route = route;
    this.userScope = userScope;
    this.courses = [];
    this.filteredCourses = [];
    this.loading = true;
    this.searchTerm = "";
    this.selectedCategory = null;
    this.selectedLevel = null;
    this.categories = COURSE_CATEGORIES;
    this.userCategoryKeys = null;
    this.levels = [
      { key: "BEGINNER", label: "\u{1F7E2} D\xE9butant" },
      { key: "INTERMEDIATE", label: "\u{1F7E1} Interm\xE9diaire" },
      { key: "ADVANCED", label: "\u{1F534} Avanc\xE9" }
    ];
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["category"])
        this.selectedCategory = params["category"];
    });
    this.userScope.userCategoryKeys$.subscribe((keys) => {
      this.userCategoryKeys = keys;
      if (keys && this.selectedCategory && !keys.includes(this.selectedCategory)) {
        this.selectedCategory = null;
      }
      this.applyFilters();
    });
    this.loadCourses();
  }
  loadCourses() {
    this.loading = true;
    this.courseService.getPublicCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onSearch() {
    this.applyFilters();
  }
  filterByCategory(cat) {
    this.selectedCategory = cat;
    this.applyFilters();
  }
  applyFilters() {
    let result = [...this.courses];
    if (this.searchTerm.trim()) {
      let term = this.searchTerm.toLowerCase();
      result = result.filter((c) => c.title.toLowerCase().includes(term) || c.description?.toLowerCase().includes(term));
    }
    if (this.selectedCategory)
      result = result.filter((c) => c.category === this.selectedCategory);
    if (this.selectedLevel)
      result = result.filter((c) => c.level === this.selectedLevel);
    if (this.userCategoryKeys && this.userCategoryKeys.length > 0)
      result = result.filter((c) => this.userCategoryKeys.includes(c.category));
    this.filteredCourses = result;
  }
  resetFilters() {
    this.searchTerm = "";
    this.selectedCategory = null;
    this.selectedLevel = null;
    this.applyFilters();
  }
  getCategoryIcon(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.icon || "\u{1F4DA}";
  }
  getCategoryLabel(cat) {
    return COURSE_CATEGORIES.find((c) => c.key === cat)?.label || cat;
  }
  getCategoryColor(cat) {
    let color = COURSE_CATEGORIES.find((c) => c.key === cat)?.color || "#6366f1";
    return `linear-gradient(135deg, ${color}22, ${color}44)`;
  }
  getLevelLabel(level) {
    let map = { BEGINNER: "\u{1F7E2} D\xE9butant", INTERMEDIATE: "\u{1F7E1} Interm\xE9diaire", ADVANCED: "\u{1F534} Avanc\xE9" };
    return map[level] || level;
  }
  formatDuration(min) {
    if (!min)
      return "\u2014";
    if (min < 60)
      return `${min}min`;
    return `${Math.floor(min / 60)}h${min % 60 > 0 ? min % 60 + "min" : ""}`;
  }
  static {
    this.\u0275fac = function CourseListComponent_Factory(t) {
      return new (t || _CourseListComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UserScopeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseListComponent, selectors: [["app-course-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 9, consts: [[1, "fade-in-up"], [1, "text-center", "py-5", "mb-4", "rounded-4", 2, "background", "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)"], [1, "fw-bold", "text-white", "mb-2"], [1, "text-white", "opacity-75", "mb-4"], [1, "d-flex", "justify-content-center"], [1, "input-group", 2, "max-width", "480px"], [1, "input-group-text", "bg-white", "border-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Rechercher un cours...", 1, "form-control", "border-0", "shadow-none", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "flex-wrap", "mb-4"], [1, "btn", "rounded-pill", "fw-semibold", 3, "click"], ["class", "btn rounded-pill fw-semibold", 3, "btn-dark", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "gap-2", "mb-4", "align-items-center"], [1, "text-muted", "small", "fw-semibold"], ["class", "btn btn-sm rounded-pill", 3, "btn-primary", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], ["class", "row g-4", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-sm", "rounded-pill", 3, "click"], [1, "row", "g-4"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "16px"], [1, "placeholder-glow"], [1, "placeholder", "bg-secondary", 2, "height", "160px", "width", "100%", "border-radius", "16px 16px 0 0"], [1, "card-body", "p-4"], [1, "placeholder", "col-8", "mb-2"], [1, "placeholder", "col-12"], [1, "placeholder", "col-10"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted", "small"], ["class", "text-center py-5", 4, "ngIf"], [1, "text-center", "py-5"], [2, "font-size", "4rem"], [1, "mt-3"], [1, "text-muted"], [1, "btn", "btn-primary-custom", 3, "click"], [1, "course-card", "card", "h-100"], [1, "course-thumbnail-placeholder"], [1, "card-body", "d-flex", "flex-column", "p-4"], [1, "d-flex", "gap-2", "mb-2", "flex-wrap"], [1, "badge-category"], [1, "fw-bold", "mb-2", "flex-grow-1"], [1, "text-muted", "small", "mb-3", 2, "display", "-webkit-box", "-webkit-line-clamp", "2", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-3"], [1, "bi", "bi-collection", "me-1"], [1, "bi", "bi-clock", "me-1"], ["class", "d-flex align-items-center gap-2 mb-3", 4, "ngIf"], [1, "btn", "btn-primary-custom", "w-100", 3, "routerLink"], [1, "bi", "bi-arrow-right", "ms-1"], [1, "d-flex", "align-items-center", "gap-2", "mb-3"], [1, "rounded-circle", "bg-primary", "d-flex", "align-items-center", "justify-content-center", "text-white", 2, "width", "28px", "height", "28px", "font-size", "0.7rem", "flex-shrink", "0"], [1, "small", "text-muted"]], template: function CourseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "\u{1F393} Nos Cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Ma\xEEtrisez les technologies les plus demand\xE9es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function CourseListComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function CourseListComponent_Template_input_ngModelChange_10_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
        \u0275\u0275listener("click", function CourseListComponent_Template_button_click_12_listener() {
          return ctx.filterByCategory(null);
        });
        \u0275\u0275text(13, " Tous les cours ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, CourseListComponent_button_14_Template, 2, 6, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "span", 13);
        \u0275\u0275text(17, "Niveau :");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, CourseListComponent_button_18_Template, 2, 5, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, CourseListComponent_div_19_Template, 2, 2, "div", 15)(20, CourseListComponent_div_20_Template, 7, 3, "div", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-dark", !ctx.selectedCategory)("btn-outline-secondary", ctx.selectedCategory);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.visibleCategories);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.levels);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseListComponent, { className: "CourseListComponent" });
})();
export {
  CourseListComponent
};
//# sourceMappingURL=chunk-DWKH4JKJ.js.map

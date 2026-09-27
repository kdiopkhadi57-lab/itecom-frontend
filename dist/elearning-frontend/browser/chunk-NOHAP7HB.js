import {
  ProgressService
} from "./chunk-JX72GFCA.js";
import {
  UserScopeService
} from "./chunk-27HYB7NT.js";
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
  CommonModule,
  DecimalPipe,
  HttpClient,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/dashboard/dashboard.component.ts
var _c0 = () => ["/courses"];
var _c1 = (a0) => ({ category: a0 });
function DashboardComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33)(1, "div", 34)(2, "div", 35);
    \u0275\u0275text(3, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275text(8, " Des \xE9tudiants ont soumis leur paiement et attendent votre validation. Cliquez pour acc\xE9der \xE0 la liste. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "i", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r0.pendingCount, " inscription", ctx_r0.pendingCount > 1 ? "s" : "", " en attente de validation ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pendingCount, " en attente ");
  }
}
function DashboardComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 44);
    \u0275\u0275text(4, "Pas encore inscrit \xE0 des cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 45);
    \u0275\u0275text(6, "Explorer les cours");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div")(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275element(11, "div", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.courseTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r2.completedLessons, "/", p_r2.totalLessons, " le\xE7ons");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 6, p_r2.overallPercentage, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", p_r2.overallPercentage, "%");
  }
}
function DashboardComponent_a_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0))("queryParams", \u0275\u0275pureFunction1(5, _c1, cat_r3.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r3.icon, " ", cat_r3.label, " ");
  }
}
var DashboardComponent = class _DashboardComponent {
  get visibleCategories() {
    if (this.userCategoryKeys && this.userCategoryKeys.length > 0)
      return this.categories.filter((c) => this.userCategoryKeys.includes(c.key));
    return this.hideProgramming ? this.categories.filter((c) => c.key !== "algorithms" && !["java", "python", "javascript", "angular", "springboot", "sql"].includes(c.key)) : this.categories;
  }
  constructor(authService, courseService, progressService, userScope, http) {
    this.authService = authService;
    this.courseService = courseService;
    this.progressService = progressService;
    this.userScope = userScope;
    this.http = http;
    this.enrolledCourses = [];
    this.progressList = [];
    this.completedLessons = 0;
    this.avgProgress = 0;
    this.categories = COURSE_CATEGORIES;
    this.hideProgramming = false;
    this.userCategoryKeys = null;
    this.pendingCount = 0;
  }
  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe((courses) => {
      this.enrolledCourses = courses;
    });
    this.progressService.getMyProgress().subscribe((progress) => {
      this.progressList = progress;
      this.completedLessons = progress.reduce((sum, p) => sum + p.completedLessons, 0);
      this.avgProgress = progress.length > 0 ? Math.round(progress.reduce((sum, p) => sum + p.overallPercentage, 0) / progress.length) : 0;
    });
    this.userScope.hideProgramming$.subscribe((hide) => this.hideProgramming = hide);
    this.userScope.userCategoryKeys$.subscribe((keys) => this.userCategoryKeys = keys);
    if (this.authService.isAdmin) {
      this.http.get("/api/admin/registrations/count").subscribe({
        next: (res) => this.pendingCount = res.count,
        error: () => {
        }
      });
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ProgressService), \u0275\u0275directiveInject(UserScopeService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 8, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], ["routerLink", "/courses", 1, "btn", "btn-primary-custom"], [1, "bi", "bi-compass", "me-2"], ["routerLink", "/admin/registrations", "class", "d-block text-decoration-none mb-4", 4, "ngIf"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-xl-3"], [1, "stat-card", 2, "background", "linear-gradient(135deg, #6366f1, #4f46e5)"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "stat-card", 2, "background", "linear-gradient(135deg, #10b981, #059669)"], [1, "stat-card", 2, "background", "linear-gradient(135deg, #f59e0b, #d97706)"], [1, "row", "g-4"], [1, "col-12", "col-xl-8"], [1, "card", "border-0", "shadow-sm", 2, "border-radius", "16px"], [1, "card-header", "bg-white", "border-0", "d-flex", "justify-content-between", "align-items-center", "p-4"], [1, "fw-bold", "mb-0"], ["routerLink", "/courses/my-learning", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "card-body", "px-4", "pb-4"], ["class", "text-center py-4 text-muted", 4, "ngIf"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "mb-3", 2, "border-radius", "16px"], [1, "card-body", "p-4"], [1, "fw-bold", "mb-3"], [1, "d-grid", "gap-2"], ["routerLink", "/virtual-class", 1, "btn", "btn-outline-primary", "text-start"], [1, "bi", "bi-camera-video", "me-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "btn btn-sm btn-outline-secondary rounded-pill", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["routerLink", "/admin/registrations", 1, "d-block", "text-decoration-none", "mb-4"], ["onmouseenter", "this.style.boxShadow='0 4px 20px rgba(245,158,11,.35)'", "onmouseleave", "this.style.boxShadow='none'", 1, "alert", "d-flex", "align-items-center", "gap-3", "mb-0", 2, "background", "linear-gradient(135deg,#fef3c7,#fde68a)", "border", "2px solid #f59e0b", "border-radius", "14px", "cursor", "pointer", "transition", "box-shadow .2s"], [2, "font-size", "2rem", "flex-shrink", "0"], [1, "flex-grow-1"], [1, "fw-bold", 2, "color", "#92400e", "font-size", "1rem"], [1, "small", 2, "color", "#b45309"], [2, "flex-shrink", "0"], [1, "badge", "rounded-pill", 2, "background", "#f59e0b", "color", "white", "font-size", ".95rem", "padding", "6px 14px"], [1, "bi", "bi-chevron-right", "ms-2", 2, "color", "#92400e"], [1, "text-center", "py-4", "text-muted"], [2, "font-size", "3rem"], [1, "mt-2"], ["routerLink", "/courses", 1, "btn", "btn-primary-custom", "btn-sm"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "fw-semibold"], [1, "text-muted", "small"], [1, "badge", "bg-primary", "rounded-pill"], [1, "progress-custom"], [1, "progress-bar"], [1, "btn", "btn-sm", "btn-outline-secondary", "rounded-pill", 3, "routerLink", "queryParams"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Continuez votre apprentissage aujourd'hui !");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275text(9, "Explorer les cours ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, DashboardComponent_a_10_Template, 13, 3, "a", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10);
        \u0275\u0275text(15, "\u{1F4DA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275text(19, "Cours inscrits");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 13)(22, "div", 10);
        \u0275\u0275text(23, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12);
        \u0275\u0275text(27, "Le\xE7ons compl\xE9t\xE9es");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 8)(29, "div", 14)(30, "div", 10);
        \u0275\u0275text(31, "\u{1F525}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 11);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 12);
        \u0275\u0275text(35, "Progression moyenne");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16)(38, "div", 17)(39, "div", 18)(40, "h5", 19);
        \u0275\u0275text(41, "\u{1F4C8} Ma progression");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 20);
        \u0275\u0275text(43, "Tout voir");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 21);
        \u0275\u0275template(45, DashboardComponent_div_45_Template, 7, 0, "div", 22)(46, DashboardComponent_div_46_Template, 12, 9, "div", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 24)(48, "div", 25)(49, "div", 26)(50, "h5", 27);
        \u0275\u0275text(51, "\u{1F680} Acc\xE8s rapide");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 28)(53, "a", 29);
        \u0275\u0275element(54, "i", 30);
        \u0275\u0275text(55, "Classes virtuelles ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 17)(57, "div", 26)(58, "h5", 27);
        \u0275\u0275text(59, "\u{1F4C2} Cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 31);
        \u0275\u0275template(61, DashboardComponent_a_61_Template, 2, 7, "a", 32);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Bonjour, ", ctx.authService.currentUser == null ? null : ctx.authService.currentUser.firstName, " \u{1F44B}");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.authService.isAdmin && ctx.pendingCount > 0);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.enrolledCourses.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.completedLessons);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.avgProgress, "%");
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.progressList.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.progressList.slice(0, 5));
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.visibleCategories);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-NOHAP7HB.js.map

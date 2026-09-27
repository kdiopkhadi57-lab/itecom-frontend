import {
  PROGRAMMING_CATEGORIES,
  SPECIALIZATION_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  BehaviorSubject,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/user-scope.service.ts
var UserScopeService = class _UserScopeService {
  get userCategoryKeys() {
    return this.userCategoryKeysSubject.value;
  }
  get hideProgramming() {
    const keys = this.userCategoryKeys;
    return keys !== null && keys.length > 0 && !keys.some((k) => PROGRAMMING_CATEGORIES.includes(k));
  }
  constructor(authService, courseService) {
    this.authService = authService;
    this.courseService = courseService;
    this.userCategoryKeysSubject = new BehaviorSubject(null);
    this.userCategoryKeys$ = this.userCategoryKeysSubject.asObservable();
    this.hideProgramming$ = this.userCategoryKeys$.pipe(map((keys) => keys !== null && keys.length > 0 && !keys.some((k) => PROGRAMMING_CATEGORIES.includes(k))));
    this.authService.currentUser$.subscribe((user) => {
      if (!user || this.authService.isAdmin) {
        this.userCategoryKeysSubject.next(null);
        return;
      }
      if (this.authService.isStudent && user.specialization) {
        const keys = SPECIALIZATION_CATEGORIES[user.specialization] ?? null;
        this.userCategoryKeysSubject.next(keys && keys.length > 0 ? keys : null);
        return;
      }
      const source$ = this.authService.isTeacher ? this.courseService.getTeacherCourses() : this.courseService.getEnrolledCourses();
      source$.subscribe({
        next: (courses) => {
          const keys = [...new Set(courses.map((c) => c.category).filter(Boolean))];
          this.userCategoryKeysSubject.next(keys.length > 0 ? keys : null);
        },
        error: () => this.userCategoryKeysSubject.next(null)
      });
    });
  }
  static {
    this.\u0275fac = function UserScopeService_Factory(t) {
      return new (t || _UserScopeService)(\u0275\u0275inject(AuthService), \u0275\u0275inject(CourseService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserScopeService, factory: _UserScopeService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserScopeService
};
//# sourceMappingURL=chunk-27HYB7NT.js.map

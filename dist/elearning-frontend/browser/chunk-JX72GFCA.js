import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/progress.service.ts
var ProgressService = class _ProgressService {
  constructor(http) {
    this.http = http;
  }
  completeLesson(lessonId) {
    return this.http.post(`/api/progress/lesson/${lessonId}/complete`, {});
  }
  updateScrollProgress(lessonId, percentage) {
    return this.http.post(`/api/progress/lesson/${lessonId}/scroll`, { percentage });
  }
  saveCode(lessonId, code) {
    return this.http.post(`/api/progress/lesson/${lessonId}/save-code`, { code });
  }
  getSavedCode(lessonId) {
    return this.http.get(`/api/progress/lesson/${lessonId}/saved-code`);
  }
  getCourseProgress(courseId) {
    return this.http.get(`/api/progress/course/${courseId}`);
  }
  getMyProgress() {
    return this.http.get("/api/progress/my-progress");
  }
  static {
    this.\u0275fac = function ProgressService_Factory(t) {
      return new (t || _ProgressService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProgressService, factory: _ProgressService.\u0275fac, providedIn: "root" });
  }
};

export {
  ProgressService
};
//# sourceMappingURL=chunk-JX72GFCA.js.map

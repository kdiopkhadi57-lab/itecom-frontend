import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/course.service.ts
var CourseService = class _CourseService {
  constructor(http) {
    this.http = http;
  }
  getPublicCourses(category, search) {
    let params = new HttpParams();
    if (category)
      params = params.set("category", category);
    if (search)
      params = params.set("search", search);
    return this.http.get("/api/courses/public", { params });
  }
  getCourseById(id) {
    return this.http.get(`/api/courses/public/${id}`);
  }
  getEnrolledCourses() {
    return this.http.get("/api/courses/enrolled");
  }
  enrollCourse(id) {
    return this.http.post(`/api/courses/${id}/enroll`, {});
  }
  getTeacherCourses() {
    return this.http.get("/api/teacher/courses");
  }
  createCourse(course) {
    return this.http.post("/api/teacher/courses", course);
  }
  updateCourse(id, course) {
    return this.http.put(`/api/teacher/courses/${id}`, course);
  }
  getLessonById(id) {
    return this.http.get(`/api/lessons/${id}`);
  }
  createLesson(courseId, lesson) {
    return this.http.post(`/api/teacher/courses/${courseId}/lessons`, lesson);
  }
  updateLesson(id, lesson) {
    return this.http.put(`/api/teacher/lessons/${id}`, lesson);
  }
  deleteLesson(id) {
    return this.http.delete(`/api/teacher/lessons/${id}`);
  }
  static {
    this.\u0275fac = function CourseService_Factory(t) {
      return new (t || _CourseService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
  }
};

export {
  CourseService
};
//# sourceMappingURL=chunk-HACBF6OZ.js.map

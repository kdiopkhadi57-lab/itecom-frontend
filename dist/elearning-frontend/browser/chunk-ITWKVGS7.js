import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/exam.service.ts
var ExamService = class _ExamService {
  constructor(http) {
    this.http = http;
  }
  createExam(request, studentListFile, examFile, correctionFile) {
    const formData = new FormData();
    formData.append("exam", new Blob([JSON.stringify(request)], { type: "application/json" }));
    formData.append("studentList", studentListFile);
    if (examFile) {
      formData.append("examFile", examFile);
    }
    if (correctionFile) {
      formData.append("correctionFile", correctionFile);
    }
    return this.http.post("/api/teacher/exams", formData);
  }
  getMyExams() {
    return this.http.get("/api/teacher/exams");
  }
  getExamById(id) {
    return this.http.get(`/api/teacher/exams/${id}`);
  }
  publishExam(id) {
    return this.http.post(`/api/teacher/exams/${id}/publish`, {});
  }
  closeExam(id) {
    return this.http.post(`/api/teacher/exams/${id}/close`, {});
  }
  deleteExam(id) {
    return this.http.delete(`/api/teacher/exams/${id}`);
  }
  downloadReport(id) {
    return this.http.get(`/api/teacher/exams/${id}/report`, { responseType: "blob" });
  }
  uploadScannedCopy(examId, studentId, files) {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    return this.http.post(`/api/teacher/exams/${examId}/students/${studentId}/scan`, formData);
  }
  getSubmissionDetail(examId, studentId) {
    return this.http.get(`/api/teacher/exams/${examId}/students/${studentId}/submission`);
  }
  // Admin
  getAllExams() {
    return this.http.get("/api/admin/exams");
  }
  downloadAdminReport(id) {
    return this.http.get(`/api/admin/exams/${id}/report`, { responseType: "blob" });
  }
  // Student
  getMyStudentExams() {
    return this.http.get("/api/student/exams");
  }
  // Public (student)
  getExamByToken(token) {
    return this.http.get(`/api/exam/access/${token}`);
  }
  startExam(token) {
    return this.http.post(`/api/exam/access/${token}/start`, {});
  }
  submitExam(token, request) {
    return this.http.post(`/api/exam/access/${token}/submit`, request);
  }
  recordFullscreenViolation(token, violation) {
    return this.http.post(`/api/exam/access/${token}/fullscreen-violation`, violation);
  }
  static {
    this.\u0275fac = function ExamService_Factory(t) {
      return new (t || _ExamService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExamService, factory: _ExamService.\u0275fac, providedIn: "root" });
  }
};

export {
  ExamService
};
//# sourceMappingURL=chunk-ITWKVGS7.js.map

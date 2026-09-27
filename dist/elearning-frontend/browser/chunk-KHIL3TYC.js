import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/upload.service.ts
var UploadService = class _UploadService {
  constructor(http) {
    this.http = http;
  }
  uploadOne(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post("/api/teacher/courses/upload", fd);
  }
  uploadBatch(files) {
    const fd = new FormData();
    files.forEach((f) => fd.append("files", f));
    return this.http.post("/api/teacher/courses/upload-batch", fd);
  }
  static {
    this.\u0275fac = function UploadService_Factory(t) {
      return new (t || _UploadService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UploadService, factory: _UploadService.\u0275fac, providedIn: "root" });
  }
};

export {
  UploadService
};
//# sourceMappingURL=chunk-KHIL3TYC.js.map

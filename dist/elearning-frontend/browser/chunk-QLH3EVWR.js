import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/book.service.ts
var BookService = class _BookService {
  constructor(http) {
    this.http = http;
    this.base = "/api/books";
  }
  getBooks(filters) {
    let params = new HttpParams();
    if (filters?.category)
      params = params.set("category", filters.category);
    if (filters?.language)
      params = params.set("language", filters.language);
    if (filters?.search)
      params = params.set("search", filters.search);
    return this.http.get(this.base, { params });
  }
  getBook(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  createBook(book) {
    return this.http.post("/api/teacher/books", book);
  }
  updateBook(id, book) {
    return this.http.put(`/api/teacher/books/${id}`, book);
  }
  uploadPdf(id, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`/api/teacher/books/${id}/upload-pdf`, fd);
  }
  uploadCover(id, file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`/api/teacher/books/${id}/upload-cover`, fd);
  }
  deleteBook(id) {
    return this.http.delete(`/api/teacher/books/${id}`);
  }
  getCategories() {
    return this.http.get(`${this.base}/categories`);
  }
  static {
    this.\u0275fac = function BookService_Factory(t) {
      return new (t || _BookService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookService, factory: _BookService.\u0275fac, providedIn: "root" });
  }
};

export {
  BookService
};
//# sourceMappingURL=chunk-QLH3EVWR.js.map

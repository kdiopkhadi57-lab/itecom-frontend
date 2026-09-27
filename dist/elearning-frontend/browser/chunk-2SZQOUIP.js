import {
  BehaviorSubject,
  HttpClient,
  Router,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    let stored = localStorage.getItem("user");
    if (stored)
      this.currentUserSubject.next(JSON.parse(stored));
  }
  get currentUser() {
    return this.currentUserSubject.value;
  }
  get isAuthenticated() {
    return !!this.currentUserSubject.value && !!localStorage.getItem("token");
  }
  get isStudent() {
    return this.currentUser?.role === "ROLE_STUDENT";
  }
  get isTeacher() {
    return this.currentUser?.role === "ROLE_TEACHER";
  }
  get isAdmin() {
    return this.currentUser?.role === "ROLE_ADMIN";
  }
  login(request) {
    return this.http.post("/api/auth/login", request).pipe(tap((resp) => {
      localStorage.setItem("token", resp.accessToken);
      localStorage.setItem("refreshToken", resp.refreshToken);
      localStorage.setItem("user", JSON.stringify(resp.user));
      this.currentUserSubject.next(resp.user);
    }));
  }
  register(request) {
    return this.http.post("/api/auth/register", request);
  }
  verifyEmail(token) {
    return this.http.get(`/api/auth/verify-email?token=${token}`);
  }
  forgotPassword(email) {
    return this.http.post("/api/auth/forgot-password", { email });
  }
  resetPassword(token, password) {
    return this.http.post("/api/auth/reset-password", { token, password });
  }
  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-2SZQOUIP.js.map

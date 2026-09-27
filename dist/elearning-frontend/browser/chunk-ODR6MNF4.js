import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  Router,
  inject
} from "./chunk-SMYYTT5I.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAuthenticated)
    return true;
  router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  return false;
};
var teacherGuard = (route, state) => {
  let authService = inject(AuthService);
  return authService.isAuthenticated && (authService.isTeacher || authService.isAdmin);
};

export {
  authGuard,
  teacherGuard
};
//# sourceMappingURL=chunk-ODR6MNF4.js.map

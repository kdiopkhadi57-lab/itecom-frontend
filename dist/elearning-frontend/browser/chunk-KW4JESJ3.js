import "./chunk-UGMD5UZ3.js";

// src/app/features/auth/auth.routes.ts
var authRoutes = [
  { path: "login", loadComponent: () => import("./chunk-DEUSX6IZ.js").then((m) => m.LoginComponent) },
  { path: "register", loadComponent: () => import("./chunk-54DU37ND.js").then((m) => m.RegisterComponent) },
  { path: "verify-email", loadComponent: () => import("./chunk-UOOSMDIG.js").then((m) => m.VerifyEmailComponent) },
  { path: "payment", loadComponent: () => import("./chunk-27WMBEAL.js").then((m) => m.PaymentComponent) },
  { path: "forgot-password", loadComponent: () => import("./chunk-QNMFK37R.js").then((m) => m.ForgotPasswordComponent) },
  { path: "", redirectTo: "login", pathMatch: "full" }
];
export {
  authRoutes
};
//# sourceMappingURL=chunk-KW4JESJ3.js.map

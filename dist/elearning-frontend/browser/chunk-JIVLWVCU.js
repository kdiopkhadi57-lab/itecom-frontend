import {
  authGuard
} from "./chunk-ODR6MNF4.js";
import "./chunk-2SZQOUIP.js";
import "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/courses/courses.routes.ts
var coursesRoutes = [
  {
    path: "",
    loadComponent: () => import("./chunk-DWKH4JKJ.js").then((m) => m.CourseListComponent)
  },
  {
    path: "my-learning",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-GZHRGVSQ.js").then((m) => m.MyLearningComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-3L2VH7JA.js").then((m) => m.CourseDetailComponent)
  },
  {
    path: ":id/learn",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-XGODALFU.js").then((m) => m.CoursePlayerComponent)
  }
];
export {
  coursesRoutes
};
//# sourceMappingURL=chunk-JIVLWVCU.js.map

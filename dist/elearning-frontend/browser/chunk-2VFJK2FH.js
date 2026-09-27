import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/teacher.routes.ts
var teacherRoutes = [
  {
    path: "courses",
    loadComponent: () => import("./chunk-JORSNW5M.js").then((m) => m.TeacherCoursesComponent)
  },
  {
    path: "create-course",
    loadComponent: () => import("./chunk-WESQ3W4H.js").then((m) => m.CreateCourseComponent)
  },
  {
    path: "courses/:id/edit",
    loadComponent: () => import("./chunk-FOJUXIEY.js").then((m) => m.EditCourseComponent)
  },
  {
    path: "exams",
    loadComponent: () => import("./chunk-TWCQ2AHL.js").then((m) => m.ExamListComponent)
  },
  {
    path: "exams/create",
    loadComponent: () => import("./chunk-247J6KHQ.js").then((m) => m.ExamCreateComponent)
  },
  {
    path: "exams/:id",
    loadComponent: () => import("./chunk-RBABGOAP.js").then((m) => m.ExamDetailComponent)
  },
  {
    path: "qcms",
    loadComponent: () => import("./chunk-D6Z2LVU5.js").then((m) => m.QcmListComponent)
  },
  {
    path: "students",
    loadComponent: () => import("./chunk-JTTCQW4Z.js").then((m) => m.QcmStudentsOverviewComponent)
  },
  {
    path: "qcms/create",
    loadComponent: () => import("./chunk-3PNQASOL.js").then((m) => m.QcmCreateComponent)
  },
  {
    path: "qcms/:id/edit",
    loadComponent: () => import("./chunk-3PNQASOL.js").then((m) => m.QcmCreateComponent)
  },
  {
    path: "qcms/:id/resultats",
    loadComponent: () => import("./chunk-Y6OQIXDM.js").then((m) => m.QcmResultatsComponent)
  }
];
export {
  teacherRoutes
};
//# sourceMappingURL=chunk-2VFJK2FH.js.map

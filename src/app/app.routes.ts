import { Routes } from '@angular/router';
import { authGuard, teacherGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.routes').then(m => m.coursesRoutes)
  },
  {
    path: 'spreadsheet',
    canActivate: [authGuard],
    loadComponent: () => import('./features/spreadsheet/spreadsheet.component').then(m => m.SpreadsheetComponent)
  },
  {
    path: 'library',
    canActivate: [authGuard],
    loadComponent: () => import('./features/library/library.component').then(m => m.LibraryComponent)
  },
  {
    path: 'library/:id/read',
    canActivate: [authGuard],
    loadComponent: () => import('./features/library/book-reader.component').then(m => m.BookReaderComponent)
  },
  {
    path: 'references',
    canActivate: [authGuard],
    loadComponent: () => import('./features/references/reference-manager.component').then(m => m.ReferenceManagerComponent)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'virtual-class',
    canActivate: [authGuard],
    loadComponent: () => import('./features/virtual-class/virtual-class.component').then(m => m.VirtualClassComponent)
  },
  {
    path: 'virtual-class/:id/room',
    canActivate: [authGuard],
    loadComponent: () => import('./features/virtual-class/virtual-class-room.component').then(m => m.VirtualClassRoomComponent)
  },
  {
    path: 'my-exams',
    canActivate: [authGuard],
    loadComponent: () => import('./features/my-exams/my-exams.component').then(m => m.MyExamsComponent)
  },
  {
    path: 'teacher',
    canActivate: [authGuard, teacherGuard],
    loadChildren: () => import('./features/admin/teacher.routes').then(m => m.teacherRoutes)
  },
  {
    path: 'admin/registrations',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/registrations/admin-registrations.component').then(m => m.AdminRegistrationsComponent)
  },
  {
    path: 'admin/users',
    canActivate: [authGuard],
    loadComponent: () => import('./features/admin/users/admin-users.component').then(m => m.AdminUsersComponent)
  },
  {
    path: 'exam/:token',
    loadComponent: () => import('./features/exam-take/exam-take.component').then(m => m.ExamTakeComponent)
  },
  {
    path: 'qcm',
    canActivate: [authGuard],
    loadComponent: () => import('./features/qcm/qcm-student-list.component').then(m => m.QcmStudentListComponent)
  },
  {
    path: 'qcm/:id/passer',
    canActivate: [authGuard],
    loadComponent: () => import('./features/qcm/qcm-take.component').then(m => m.QcmTakeComponent)
  },
  { path: '**', redirectTo: '/dashboard' }
];

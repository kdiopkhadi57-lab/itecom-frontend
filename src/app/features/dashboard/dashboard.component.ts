import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { CourseService } from '../../core/services/course.service';
import { ProgressService } from '../../core/services/progress.service';
import { Course } from '../../core/models/course.model';
import { Progress } from '../../core/models/course.model';
import { COURSE_CATEGORIES } from '../../core/models/course.model';
import { UserScopeService } from '../../core/services/user-scope.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe],
  template: `
    <div class="fade-in-up">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="fw-bold mb-1">Bonjour, {{ authService.currentUser?.firstName }} 👋</h1>
          <p class="text-muted">Continuez votre apprentissage aujourd'hui !</p>
        </div>
        <a routerLink="/courses" class="btn btn-primary-custom">
          <i class="bi bi-compass me-2"></i>Explorer les cours
        </a>
      </div>

      <!-- Warning Admin : inscriptions en attente -->
      <a *ngIf="authService.isAdmin && pendingCount > 0"
         routerLink="/admin/registrations"
         class="d-block text-decoration-none mb-4">
        <div class="alert d-flex align-items-center gap-3 mb-0"
             style="background:linear-gradient(135deg,#fef3c7,#fde68a);border:2px solid #f59e0b;border-radius:14px;cursor:pointer;transition:box-shadow .2s"
             onmouseenter="this.style.boxShadow='0 4px 20px rgba(245,158,11,.35)'"
             onmouseleave="this.style.boxShadow='none'">
          <div style="font-size:2rem;flex-shrink:0">🔔</div>
          <div class="flex-grow-1">
            <div class="fw-bold" style="color:#92400e;font-size:1rem">
              {{ pendingCount }} inscription{{ pendingCount > 1 ? 's' : '' }} en attente de validation
            </div>
            <div class="small" style="color:#b45309">
              Des étudiants ont soumis leur paiement et attendent votre validation. Cliquez pour accéder à la liste.
            </div>
          </div>
          <div style="flex-shrink:0">
            <span class="badge rounded-pill" style="background:#f59e0b;color:white;font-size:.95rem;padding:6px 14px">
              {{ pendingCount }} en attente
            </span>
            <i class="bi bi-chevron-right ms-2" style="color:#92400e"></i>
          </div>
        </div>
      </a>

      <!-- Stats Row -->
      <div class="row g-3 mb-4">
        <div class="col-6 col-xl-3">
          <div class="stat-card" style="background: linear-gradient(135deg, #6366f1, #4f46e5)">
            <div class="stat-icon">📚</div>
            <div class="stat-value">{{ enrolledCourses.length }}</div>
            <div class="stat-label">Cours inscrits</div>
          </div>
        </div>
        <div class="col-6 col-xl-3">
          <div class="stat-card" style="background: linear-gradient(135deg, #10b981, #059669)">
            <div class="stat-icon">✅</div>
            <div class="stat-value">{{ completedLessons }}</div>
            <div class="stat-label">Leçons complétées</div>
          </div>
        </div>
        <div class="col-6 col-xl-3">
          <div class="stat-card" style="background: linear-gradient(135deg, #f59e0b, #d97706)">
            <div class="stat-icon">🔥</div>
            <div class="stat-value">{{ avgProgress }}%</div>
            <div class="stat-label">Progression moyenne</div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <!-- My Courses Progress -->
        <div class="col-12 col-xl-8">
          <div class="card border-0 shadow-sm" style="border-radius:16px;">
            <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center p-4">
              <h5 class="fw-bold mb-0">📈 Ma progression</h5>
              <a routerLink="/courses/my-learning" class="btn btn-sm btn-outline-primary">Tout voir</a>
            </div>
            <div class="card-body px-4 pb-4">
              <div *ngIf="progressList.length === 0" class="text-center py-4 text-muted">
                <div style="font-size:3rem">📚</div>
                <p class="mt-2">Pas encore inscrit à des cours</p>
                <a routerLink="/courses" class="btn btn-primary-custom btn-sm">Explorer les cours</a>
              </div>
              <div *ngFor="let p of progressList.slice(0,5)" class="mb-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <div class="fw-semibold">{{ p.courseTitle }}</div>
                    <div class="text-muted small">{{ p.completedLessons }}/{{ p.totalLessons }} leçons</div>
                  </div>
                  <span class="badge bg-primary rounded-pill">{{ p.overallPercentage | number:'1.0-0' }}%</span>
                </div>
                <div class="progress-custom">
                  <div class="progress-bar" [style.width.%]="p.overallPercentage"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="col-12 col-xl-4">
          <div class="card border-0 shadow-sm mb-3" style="border-radius:16px;">
            <div class="card-body p-4">
              <h5 class="fw-bold mb-3">🚀 Accès rapide</h5>
              <div class="d-grid gap-2">
                <a routerLink="/virtual-class" class="btn btn-outline-primary text-start">
                  <i class="bi bi-camera-video me-2"></i>Classes virtuelles
                </a>
              </div>
            </div>
          </div>

          <div class="card border-0 shadow-sm" style="border-radius:16px;">
            <div class="card-body p-4">
              <h5 class="fw-bold mb-3">📂 Catégories</h5>
              <div class="d-flex flex-wrap gap-2">
                <a *ngFor="let cat of visibleCategories" [routerLink]="['/courses']" [queryParams]="{category: cat.key}"
                   class="btn btn-sm btn-outline-secondary rounded-pill">
                  {{ cat.icon }} {{ cat.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  enrolledCourses: Course[] = [];
  progressList: Progress[] = [];
  completedLessons = 0;
  avgProgress = 0;
  categories = COURSE_CATEGORIES;
  hideProgramming = false;
  userCategoryKeys: string[] | null = null;

  get visibleCategories() {
    if (this.userCategoryKeys && this.userCategoryKeys.length > 0)
      return this.categories.filter(c => this.userCategoryKeys!.includes(c.key));
    return this.hideProgramming
      ? this.categories.filter(c => c.key !== 'algorithms' && !['java','python','javascript','angular','springboot','sql'].includes(c.key))
      : this.categories;
  }

  pendingCount = 0;

  constructor(
    public authService: AuthService,
    private courseService: CourseService,
    private progressService: ProgressService,
    public userScope: UserScopeService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe(courses => {
      this.enrolledCourses = courses;
    });
    this.progressService.getMyProgress().subscribe(progress => {
      this.progressList = progress;
      this.completedLessons = progress.reduce((sum, p) => sum + p.completedLessons, 0);
      this.avgProgress = progress.length > 0
        ? Math.round(progress.reduce((sum, p) => sum + p.overallPercentage, 0) / progress.length)
        : 0;
    });
    this.userScope.hideProgramming$.subscribe(hide => this.hideProgramming = hide);
    this.userScope.userCategoryKeys$.subscribe(keys => this.userCategoryKeys = keys);

    if (this.authService.isAdmin) {
      this.http.get<{count: number}>('/api/admin/registrations/count').subscribe({
        next: (res) => this.pendingCount = res.count,
        error: () => {}
      });
    }
  }
}

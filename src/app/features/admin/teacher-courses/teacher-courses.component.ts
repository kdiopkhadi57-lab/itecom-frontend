import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';
import { Course, COURSE_CATEGORIES } from '../../../core/models/course.model';

@Component({
  selector: 'app-teacher-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="fade-in-up">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="fw-bold mb-1">📚 Mes Cours</h1>
          <p class="text-muted">Gérez vos cours et suivez l'engagement de vos étudiants</p>
        </div>
        <a routerLink="/teacher/create-course" class="btn btn-primary-custom">
          <i class="bi bi-plus-circle me-2"></i>Créer un cours
        </a>
      </div>

      <!-- Stats -->
      <div class="row g-3 mb-4">
        <div class="col-sm-4">
          <div class="card border-0 bg-primary text-white p-4 text-center" style="border-radius:16px">
            <div class="fw-bold fs-2">{{ courses.length }}</div>
            <div class="opacity-75 small">Cours créés</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border-0 bg-success text-white p-4 text-center" style="border-radius:16px">
            <div class="fw-bold fs-2">{{ publishedCount }}</div>
            <div class="opacity-75 small">Cours publiés</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border-0 bg-warning text-white p-4 text-center" style="border-radius:16px">
            <div class="fw-bold fs-2">{{ draftCount }}</div>
            <div class="opacity-75 small">Brouillons</div>
          </div>
        </div>
      </div>

      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <div *ngIf="!loading && courses.length === 0" class="text-center py-5">
        <div style="font-size:5rem">📭</div>
        <h3 class="mt-3">Aucun cours créé</h3>
        <p class="text-muted">Commencez par créer votre premier cours</p>
        <a routerLink="/teacher/create-course" class="btn btn-primary-custom mt-3">Créer un cours</a>
      </div>

      <div class="row g-4" *ngIf="!loading">
        <div class="col-md-6" *ngFor="let course of courses">
          <div class="card border-0 shadow-sm h-100" style="border-radius:16px;overflow:hidden">
            <div class="p-3 d-flex align-items-center gap-3"
                 [style.background]="getCategoryGradient(course.category)">
              <div style="font-size:2.5rem">{{ getCategoryIcon(course.category) }}</div>
              <div class="flex-grow-1">
                <div class="fw-bold text-white">{{ course.title }}</div>
                <div class="d-flex gap-2 mt-1">
                  <span class="badge bg-white text-dark rounded-pill" style="font-size:.7rem">
                    {{ getCategoryLabel(course.category) }}
                  </span>
                  <span class="badge rounded-pill" style="font-size:.7rem"
                        [class.bg-success]="course.published"
                        [class.bg-warning]="!course.published">
                    {{ course.published ? '✅ Publié' : '⏳ Brouillon' }}
                  </span>
                </div>
              </div>
            </div>

            <div class="card-body p-4">
              <p class="text-muted small mb-3" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
                {{ course.description || 'Aucune description' }}
              </p>
              <div class="d-flex gap-3 small text-muted mb-4">
                <span><i class="bi bi-collection me-1"></i>{{ course.totalLessons }} leçons</span>
                <span><i class="bi bi-clock me-1"></i>{{ formatDuration(course.totalDurationMinutes) }}</span>
                <span class="badge-level {{ course.level }}">{{ getLevelLabel(course.level) }}</span>
              </div>

              <div class="d-flex gap-2">
                <a [routerLink]="['/teacher/courses', course.id, 'edit']"
                   class="btn btn-outline-primary btn-sm flex-grow-1">
                  <i class="bi bi-pencil me-1"></i>Modifier
                </a>
                <a [routerLink]="['/courses', course.id]"
                   class="btn btn-outline-secondary btn-sm">
                  <i class="bi bi-eye"></i>
                </a>
                <button class="btn btn-sm"
                        [class.btn-outline-warning]="course.published"
                        [class.btn-outline-success]="!course.published"
                        (click)="togglePublish(course)">
                  <i class="bi" [class.bi-eye-slash]="course.published" [class.bi-eye]="!course.published"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TeacherCoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;

  get publishedCount() { return this.courses.filter(c => c.published).length; }
  get draftCount() { return this.courses.filter(c => !c.published).length; }

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getTeacherCourses().subscribe({
      next: (courses) => { this.courses = courses; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  togglePublish(course: Course) {
    this.courseService.updateCourse(course.id, { ...course, published: !course.published }).subscribe({
      next: (updated) => { course.published = updated.published; }
    });
  }

  getCategoryIcon(cat: string) { return COURSE_CATEGORIES.find(c => c.key === cat)?.icon || '📚'; }
  getCategoryLabel(cat: string) { return COURSE_CATEGORIES.find(c => c.key === cat)?.label || cat; }
  getCategoryGradient(cat: string) {
    let color = COURSE_CATEGORIES.find(c => c.key === cat)?.color || '#6366f1';
    return `linear-gradient(135deg, ${color}, ${color}bb)`;
  }
  getLevelLabel(lvl: string) { return { BEGINNER: 'Débutant', INTERMEDIATE: 'Intermédiaire', ADVANCED: 'Avancé' }[lvl] || lvl; }
  formatDuration(min: number) { return min < 60 ? `${min}min` : `${Math.floor(min/60)}h${min%60 > 0 ? (min%60)+'min' : ''}`; }
}

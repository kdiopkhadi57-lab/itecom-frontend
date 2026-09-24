import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CourseService } from '../../../core/services/course.service';
import { ProgressService } from '../../../core/services/progress.service';
import { Course, Progress, COURSE_CATEGORIES } from '../../../core/models/course.model';

@Component({
  selector: 'app-my-learning',
  standalone: true,
  imports: [CommonModule, RouterLink, DecimalPipe],
  template: `
    <div class="fade-in-up">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="fw-bold mb-1">📚 Mon Apprentissage</h1>
          <p class="text-muted">Suivez votre progression sur tous vos cours</p>
        </div>
        <a routerLink="/courses" class="btn btn-primary-custom">
          <i class="bi bi-plus-circle me-2"></i>Explorer d'autres cours
        </a>
      </div>

      <!-- Global stats -->
      <div class="row g-3 mb-4">
        <div class="col-sm-4">
          <div class="card border-0 shadow-sm p-4 text-center" style="border-radius:16px">
            <div style="font-size:2rem">📚</div>
            <div class="fw-bold fs-3 mt-1">{{ courses.length }}</div>
            <div class="text-muted small">Cours inscrits</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border-0 shadow-sm p-4 text-center" style="border-radius:16px">
            <div style="font-size:2rem">✅</div>
            <div class="fw-bold fs-3 mt-1">{{ totalCompleted }}</div>
            <div class="text-muted small">Leçons complétées</div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card border-0 shadow-sm p-4 text-center" style="border-radius:16px">
            <div style="font-size:2rem">🔥</div>
            <div class="fw-bold fs-3 mt-1">{{ avgProgress }}%</div>
            <div class="text-muted small">Progression moyenne</div>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div *ngIf="loading" class="text-center py-5">
        <div class="spinner-border text-primary"></div>
      </div>

      <!-- Empty state -->
      <div *ngIf="!loading && courses.length === 0" class="text-center py-5">
        <div style="font-size:5rem">📭</div>
        <h3 class="mt-3 fw-bold">Aucun cours en cours</h3>
        <p class="text-muted">Inscrivez-vous à des cours pour démarrer votre apprentissage</p>
        <a routerLink="/courses" class="btn btn-primary-custom mt-3">Découvrir les cours</a>
      </div>

      <!-- Courses grid -->
      <div class="row g-4" *ngIf="!loading && courses.length > 0">
        <div class="col-md-6 col-xl-4" *ngFor="let course of courses">
          <div class="card course-card h-100">
            <div class="course-thumbnail-placeholder"
                 [style.background]="getCategoryGradient(course.category)">
              <span>{{ getCategoryIcon(course.category) }}</span>
            </div>
            <div class="card-body d-flex flex-column p-4">
              <span class="badge-category mb-2">{{ getCategoryLabel(course.category) }}</span>
              <h5 class="fw-bold flex-grow-1">{{ course.title }}</h5>

              <div class="my-3" *ngIf="getProgress(course.id) as p">
                <div class="d-flex justify-content-between small mb-1">
                  <span class="text-muted">{{ p.completedLessons }}/{{ p.totalLessons }} leçons</span>
                  <span class="fw-semibold text-primary">{{ p.overallPercentage | number:'1.0-0' }}%</span>
                </div>
                <div class="progress-custom">
                  <div class="progress-bar" [style.width.%]="p.overallPercentage"></div>
                </div>
                <div *ngIf="p.overallPercentage === 100" class="mt-2 text-center">
                  <span class="badge bg-success rounded-pill px-3">🎉 Cours terminé !</span>
                </div>
              </div>

              <div class="d-flex gap-2 mt-auto">
                <a [routerLink]="['/courses', course.id, 'learn']" class="btn btn-primary-custom flex-grow-1">
                  <i class="bi bi-play-fill me-1"></i>
                  {{ getProgress(course.id)?.overallPercentage === 0 ? 'Commencer' : 'Continuer' }}
                </a>
                <a [routerLink]="['/courses', course.id]" class="btn btn-outline-secondary">
                  <i class="bi bi-info-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MyLearningComponent implements OnInit {
  courses: Course[] = [];
  progressMap: Record<number, Progress> = {};
  loading = true;
  totalCompleted = 0;
  avgProgress = 0;

  constructor(private courseService: CourseService, private progressService: ProgressService) {}

  ngOnInit() {
    this.courseService.getEnrolledCourses().subscribe(courses => {
      this.courses = courses;
      this.progressService.getMyProgress().subscribe(progressList => {
        progressList.forEach(p => this.progressMap[p.courseId] = p);
        this.totalCompleted = progressList.reduce((s, p) => s + p.completedLessons, 0);
        this.avgProgress = progressList.length > 0
          ? Math.round(progressList.reduce((s, p) => s + p.overallPercentage, 0) / progressList.length) : 0;
        this.loading = false;
      });
    });
  }

  getProgress(courseId: number): Progress | null { return this.progressMap[courseId] || null; }
  getCategoryIcon(cat: string) { return COURSE_CATEGORIES.find(c => c.key === cat)?.icon || '📚'; }
  getCategoryLabel(cat: string) { return COURSE_CATEGORIES.find(c => c.key === cat)?.label || cat; }
  getCategoryGradient(cat: string) {
    let color = COURSE_CATEGORIES.find(c => c.key === cat)?.color || '#6366f1';
    return `linear-gradient(135deg, ${color}22, ${color}55)`;
  }
}

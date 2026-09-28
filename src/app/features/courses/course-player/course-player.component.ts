import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CourseService } from '../../../core/services/course.service';
import { ProgressService } from '../../../core/services/progress.service';
import { Course, Lesson } from '../../../core/models/course.model';

type CoursePlayerTab = 'cours' | 'pratique';

@Component({
  selector: 'app-course-player',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, DecimalPipe],
  templateUrl: './course-player.component.html',
  styleUrl: './course-player.component.scss'
})
export class CoursePlayerComponent implements OnInit, OnDestroy {

  // ─── État ────────────────────────────────────────────────────────────────

  course: Course | null = null;
  currentLesson: Lesson | null = null;
  courseId!: number;
  activeTab: CoursePlayerTab = 'cours';
  sidebarOpen = false;

  overallProgress = 0;
  completedCount = 0;
  markingComplete = false;

  selectedQuiz: number | null = null;
  readonly quizOptions = ['int x = 5;', 'var x = 5', 'x = 5;', 'declare x = 5;'];

  private lastSentScrollPercentage = 0;
  private scrollUpdatePending = false;

  // Temps passé : compté seconde par seconde tant que l'onglet est visible, envoyé par paquets
  private static readonly TIME_FLUSH_SECONDS = 30;
  private pendingSeconds = 0;
  private timeTicker: ReturnType<typeof setInterval> | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private progressService: ProgressService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('id')!;
    this.courseService.getCourseById(this.courseId).subscribe(course => {
      this.course = course;
      if (course.lessons?.length) {
        this.selectLesson(course.lessons[0]);
      }
      this.refreshProgress();
    });
    this.timeTicker = setInterval(() => this.tickTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timeTicker) clearInterval(this.timeTicker);
    this.flushTime();
  }

  private tickTime(): void {
    if (!this.currentLesson || document.hidden) return;
    this.pendingSeconds++;
    if (this.pendingSeconds >= CoursePlayerComponent.TIME_FLUSH_SECONDS) this.flushTime();
  }

  private flushTime(): void {
    if (!this.currentLesson || this.pendingSeconds <= 0) return;
    const seconds = this.pendingSeconds;
    this.pendingSeconds = 0;
    this.progressService.addTimeSpent(this.currentLesson.id, seconds).subscribe({ error: () => {} });
  }

  // ─── Getters dérivés ───────────────────────────────────────────────────────

  get exerciseLessons(): Lesson[] {
    return (this.course?.lessons ?? []).filter(
      l => l.type === 'EXCEL_EXERCISE' || l.type === 'CODE_EXERCISE' || l.exercise
    );
  }

  exerciseColor(ex: Lesson): string {
    if (ex.type === 'EXCEL_EXERCISE') return '#0ea5e9';
    if (ex.type === 'CODE_EXERCISE') return '#2b3ea8';
    return '#f59e0b';
  }

  exerciseLabel(ex: Lesson): string {
    if (ex.type === 'EXCEL_EXERCISE') return 'Tableur Excel';
    if (ex.type === 'CODE_EXERCISE') return 'Exercice code';
    if (ex.type === 'PDF') return 'Fiche PDF';
    if (ex.type === 'VIDEO') return 'Vidéo';
    return 'Quiz';
  }

  /** Pour les exercices PDF/Vidéo/Quiz : bascule vers l'onglet Cours sur cette leçon. */
  openExerciseInCourse(ex: Lesson): void {
    this.activeTab = 'cours';
    this.selectLesson(ex);
  }

  get isFirstLesson(): boolean {
    if (!this.course?.lessons || !this.currentLesson) return true;
    return this.course.lessons[0].id === this.currentLesson.id;
  }

  get isLastLesson(): boolean {
    if (!this.course?.lessons || !this.currentLesson) return true;
    return this.course.lessons[this.course.lessons.length - 1].id === this.currentLesson.id;
  }

  // ─── Navigation entre leçons ────────────────────────────────────────────

  selectLesson(lesson: Lesson): void {
    if (this.currentLesson && this.currentLesson.id !== lesson.id) this.flushTime();
    this.currentLesson = lesson;
    this.selectedQuiz = null;
    this.lastSentScrollPercentage = lesson.completed ? 100 : 0;
  }

  prevLesson(): void {
    const idx = this.currentLessonIndex();
    if (idx > 0) this.selectLesson(this.course!.lessons![idx - 1]);
  }

  nextLesson(): void {
    const idx = this.currentLessonIndex();
    if (idx >= 0 && idx < this.course!.lessons!.length - 1) {
      this.selectLesson(this.course!.lessons![idx + 1]);
    }
  }

  private currentLessonIndex(): number {
    if (!this.course?.lessons || !this.currentLesson) return -1;
    return this.course.lessons.findIndex(l => l.id === this.currentLesson!.id);
  }

  // ─── Progression ────────────────────────────────────────────────────────

  markComplete(): void {
    if (!this.currentLesson) return;
    this.markingComplete = true;
    this.progressService.completeLesson(this.currentLesson.id).subscribe({
      next: () => {
        this.currentLesson!.completed = true;
        this.markingComplete = false;
        this.refreshProgress();
      },
      error: () => { this.markingComplete = false; }
    });
  }

  refreshProgress(): void {
    this.progressService.getCourseProgress(this.courseId).subscribe(p => {
      this.overallProgress = p.overallPercentage;
      this.completedCount = p.completedLessons;
    });
  }

  /**
   * Suit la lecture de la page : une fois le bas de la leçon atteint, la leçon est
   * automatiquement marquée comme complétée (sans action manuelle de l'élève).
   */
  onContentScroll(el: HTMLElement): void {
    if (!this.currentLesson || this.currentLesson.completed || this.scrollUpdatePending) return;

    const scrollable = el.scrollHeight - el.clientHeight;
    const percentage = scrollable <= 0 ? 100 : Math.min(100, (el.scrollTop / scrollable) * 100);

    // On n'envoie une mise à jour que par tranche de 10% pour ne pas spammer le serveur.
    if (percentage - this.lastSentScrollPercentage < 10 && percentage < 95) return;

    this.lastSentScrollPercentage = percentage;
    this.scrollUpdatePending = true;
    const lessonId = this.currentLesson.id;

    this.progressService.updateScrollProgress(lessonId, percentage).subscribe({
      next: () => {
        this.scrollUpdatePending = false;
        if (percentage >= 95 && this.currentLesson?.id === lessonId) {
          this.currentLesson.completed = true;
          this.refreshProgress();
        }
      },
      error: () => { this.scrollUpdatePending = false; }
    });
  }

  // ─── Documents (PDF / Word) ─────────────────────────────────────────────

  /** Seuls les vrais PDF s'affichent dans un iframe ; les fichiers Word doivent être téléchargés. */
  isViewableInline(url: string): boolean {
    return /\.pdf$/i.test(url);
  }

  safeDocUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

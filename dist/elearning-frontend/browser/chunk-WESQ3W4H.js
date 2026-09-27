import {
  UploadService
} from "./chunk-KHIL3TYC.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  COURSE_CATEGORIES
} from "./chunk-ARMKVPHW.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/create-course/create-course.component.ts
function CreateCourseComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275property("value", cat_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cat_r2.icon, " ", cat_r2.label, "");
  }
}
function CreateCourseComponent_div_57_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", u_r4.progress, "%");
  }
}
function CreateCourseComponent_div_57_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1, "\u2705 Import\xE9 \u2014 le\xE7on cr\xE9\xE9e");
    \u0275\u0275elementEnd();
  }
}
function CreateCourseComponent_div_57_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u274C ", u_r4.error, "");
  }
}
function CreateCourseComponent_div_57_div_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function CreateCourseComponent_div_57_div_1_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.removePending(i_r6));
    });
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementEnd();
  }
}
function CreateCourseComponent_div_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "div", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CreateCourseComponent_div_57_div_1_div_6_Template, 2, 2, "div", 65)(7, CreateCourseComponent_div_57_div_1_div_7_Template, 2, 0, "div", 66)(8, CreateCourseComponent_div_57_div_1_div_8_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, CreateCourseComponent_div_57_div_1_button_9_Template, 2, 0, "button", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r4.kind === "VIDEO" ? "\u{1F3AC}" : u_r4.kind === "PDF" ? "\u{1F4C4}" : "\u{1F4CE}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r4.status === "uploading");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r4.status === "done");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r4.status === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r4.status === "pending");
  }
}
function CreateCourseComponent_div_57_button_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 77);
  }
}
function CreateCourseComponent_div_57_button_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 78);
  }
}
function CreateCourseComponent_div_57_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function CreateCourseComponent_div_57_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.uploadAllPending());
    });
    \u0275\u0275template(1, CreateCourseComponent_div_57_button_2_span_1_Template, 1, 0, "span", 54)(2, CreateCourseComponent_div_57_button_2_i_2_Template, 1, 0, "i", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r6.uploadingAll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.uploadingAll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r6.uploadingAll);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.uploadingAll ? "Import en cours..." : "Importer " + ctx_r6.pendingCount() + " fichier(s)", " ");
  }
}
function CreateCourseComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, CreateCourseComponent_div_57_div_1_Template, 10, 6, "div", 59)(2, CreateCourseComponent_div_57_button_2_Template, 4, 4, "button", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.pendingUploads);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.hasPendingFiles());
  }
}
function CreateCourseComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 30);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 80);
    \u0275\u0275text(4, "Ajoutez des le\xE7ons \xE0 votre cours, ou importez des fichiers ci-dessus");
    \u0275\u0275elementEnd()();
  }
}
function CreateCourseComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 84);
    \u0275\u0275listener("click", function CreateCourseComponent_div_67_Template_button_click_4_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeLesson(i_r10));
    });
    \u0275\u0275element(5, "i", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 86)(7, "div", 87);
    \u0275\u0275element(8, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 89)(10, "select", 90)(11, "option", 91);
    \u0275\u0275text(12, "\u{1F3AC} Vid\xE9o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 92);
    \u0275\u0275text(14, "\u{1F4C4} PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 93);
    \u0275\u0275text(16, "\u{1F4BB} Exercice code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 94);
    \u0275\u0275text(18, "\u{1F4CA} Exercice Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 95);
    \u0275\u0275text(20, "\u2753 Quiz");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "div", 96)(22, "div", 87);
    \u0275\u0275element(23, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 89)(25, "div", 98);
    \u0275\u0275element(26, "input", 99);
    \u0275\u0275elementStart(27, "span", 100);
    \u0275\u0275text(28, "min");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    \u0275\u0275property("formGroupName", i_r10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Le\xE7on ", i_r10 + 1, "");
  }
}
function CreateCourseComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r6.error);
  }
}
function CreateCourseComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275text(1, "\u2705 Cours cr\xE9\xE9 avec succ\xE8s !");
    \u0275\u0275elementEnd();
  }
}
function CreateCourseComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 77);
  }
}
function CreateCourseComponent_i_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 103);
  }
}
var CreateCourseComponent = class _CreateCourseComponent {
  get lessons() {
    return this.courseForm.get("lessons");
  }
  constructor(fb, courseService, uploadService, router) {
    this.fb = fb;
    this.courseService = courseService;
    this.uploadService = uploadService;
    this.router = router;
    this.categories = COURSE_CATEGORIES;
    this.loading = false;
    this.error = "";
    this.success = false;
    this.pendingUploads = [];
    this.isDragOver = false;
    this.uploadingAll = false;
    this.courseForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      category: ["", Validators.required],
      level: ["BEGINNER", Validators.required],
      published: [false],
      lessons: this.fb.array([])
    });
  }
  addLesson(opts) {
    this.lessons.push(this.fb.group({
      title: [opts?.title || "", Validators.required],
      description: [""],
      type: [opts?.type || "VIDEO"],
      videoUrl: [opts?.videoUrl || ""],
      pdfUrl: [opts?.pdfUrl || ""],
      duration: [0],
      orderIndex: [this.lessons.length]
    }));
  }
  removeLesson(i) {
    this.lessons.removeAt(i);
  }
  // ─── Import multiple fichiers ──────────────────────────────────────
  detectKind(file) {
    if (file.type.startsWith("video/"))
      return "VIDEO";
    if (file.type === "application/pdf" || /\.(pdf|doc|docx)$/i.test(file.name))
      return "PDF";
    return "OTHER";
  }
  onFilesSelected(event) {
    const input = event.target;
    if (input.files)
      this.addFiles(Array.from(input.files));
    input.value = "";
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer?.files)
      this.addFiles(Array.from(event.dataTransfer.files));
  }
  addFiles(files) {
    files.forEach((file) => {
      this.pendingUploads.push({
        file,
        name: file.name,
        kind: this.detectKind(file),
        progress: 0,
        status: "pending"
      });
    });
  }
  removePending(i) {
    this.pendingUploads.splice(i, 1);
  }
  hasPendingFiles() {
    return this.pendingUploads.some((u) => u.status === "pending" || u.status === "error");
  }
  pendingCount() {
    return this.pendingUploads.filter((u) => u.status === "pending" || u.status === "error").length;
  }
  uploadAllPending() {
    const toUpload = this.pendingUploads.filter((u) => u.status === "pending" || u.status === "error");
    if (!toUpload.length)
      return;
    this.uploadingAll = true;
    toUpload.forEach((u) => u.status = "uploading");
    this.uploadService.uploadBatch(toUpload.map((u) => u.file)).subscribe({
      next: (res) => {
        const results = res.data;
        toUpload.forEach((u, idx) => {
          const result = results[idx];
          if (result) {
            u.status = "done";
            u.progress = 100;
            u.url = result.url;
            this.addLesson({
              title: this.stripExtension(u.name),
              type: result.type,
              videoUrl: result.type === "VIDEO" ? result.url : "",
              pdfUrl: result.type === "PDF" ? result.url : ""
            });
          } else {
            u.status = "error";
            u.error = "\xC9chec de l'import";
          }
        });
        this.uploadingAll = false;
      },
      error: (err) => {
        toUpload.forEach((u) => {
          u.status = "error";
          u.error = err.error?.message || "Erreur r\xE9seau";
        });
        this.uploadingAll = false;
      }
    });
  }
  stripExtension(filename) {
    const dot = filename.lastIndexOf(".");
    return dot > 0 ? filename.substring(0, dot) : filename;
  }
  onSubmit() {
    if (this.courseForm.invalid)
      return;
    this.loading = true;
    this.error = "";
    this.courseService.createCourse(this.courseForm.value).subscribe({
      next: (course) => {
        this.loading = false;
        this.success = true;
        setTimeout(() => this.router.navigate(["/teacher/courses"]), 1500);
      },
      error: (err) => {
        this.error = err.error?.message || "Erreur lors de la cr\xE9ation";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function CreateCourseComponent_Factory(t) {
      return new (t || _CreateCourseComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(UploadService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateCourseComponent, selectors: [["app-create-course"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 92, vars: 18, consts: [["fileInput", ""], [1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/teacher/courses", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0", "small"], [3, "ngSubmit", "formGroup"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "card", "border-0", "shadow-sm", "p-4", "mb-4", 2, "border-radius", "16px"], [1, "fw-bold", "mb-4"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "title", "placeholder", "Ex: Ma\xEEtrisez Java en 30 jours", 1, "form-control"], [1, "invalid-feedback"], ["rows", "5", "formControlName", "description", "placeholder", "D\xE9crivez votre cours, ce que les \xE9tudiants vont apprendre...", 1, "form-control"], [1, "row", "g-3"], [1, "col-md-6"], ["formControlName", "category", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "level", 1, "form-select"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], [1, "fw-bold", "mb-2"], [1, "text-muted", "small", "mb-3"], [1, "upload-dropzone", 3, "dragover", "dragleave", "drop", "click"], ["type", "file", "multiple", "", "hidden", "", "accept", "video/*,.pdf,.doc,.docx", 3, "change"], [2, "font-size", "2rem"], [1, "fw-semibold", "mb-1"], [1, "text-muted", "small", "mb-0"], ["class", "mt-3 d-flex flex-column gap-2", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "p-4", 2, "border-radius", "16px"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], ["type", "button", 1, "btn", "btn-sm", "btn-primary-custom", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], ["class", "text-center py-4 text-muted bg-light rounded-3", 4, "ngIf"], ["formArrayName", "lessons"], ["class", "border rounded-3 p-3 mb-3", "style", "background:#f8fafc", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "border-0", "shadow-sm", "p-4", "mb-4", 2, "border-radius", "16px", "position", "sticky", "top", "80px"], [1, "mb-4"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "publishSwitch", "formControlName", "published", 1, "form-check-input", 2, "width", "48px", "height", "24px"], ["for", "publishSwitch", 1, "form-check-label", "fw-semibold", "ms-2"], [1, "text-muted", "small", "mt-1"], [1, "border-top", "pt-3"], [1, "d-flex", "gap-3", "text-muted", "small", "mb-4"], [1, "bi", "bi-collection", "me-1"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], ["class", "alert alert-success py-2 small", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary-custom", "w-100", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-save me-2", 4, "ngIf"], ["routerLink", "/teacher/courses", 1, "btn", "btn-outline-secondary", "w-100", "mt-2"], [3, "value"], [1, "mt-3", "d-flex", "flex-column", "gap-2"], ["class", "d-flex align-items-center gap-2 p-2 border rounded-3", "style", "background:#f8fafc", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-primary-custom btn-sm mt-1", 3, "disabled", "click", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "p-2", "border", "rounded-3", 2, "background", "#f8fafc"], [2, "font-size", "1.3rem"], [1, "flex-grow-1", 2, "min-width", "0"], [1, "small", "fw-semibold", "text-truncate"], ["class", "progress", "style", "height:5px", 4, "ngIf"], ["class", "small text-success", 4, "ngIf"], ["class", "small text-danger", 4, "ngIf"], ["type", "button", "class", "btn btn-sm btn-outline-secondary", 3, "click", 4, "ngIf"], [1, "progress", 2, "height", "5px"], [1, "progress-bar"], [1, "small", "text-success"], [1, "small", "text-danger"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x"], ["type", "button", 1, "btn", "btn-primary-custom", "btn-sm", "mt-1", 3, "click", "disabled"], ["class", "bi bi-cloud-upload me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "bi", "bi-cloud-upload", "me-1"], [1, "text-center", "py-4", "text-muted", "bg-light", "rounded-3"], [1, "mb-0", "small"], [1, "border", "rounded-3", "p-3", "mb-3", 2, "background", "#f8fafc", 3, "formGroupName"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-semibold"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "row", "g-2", "mb-2"], [1, "col-md-8"], ["type", "text", "formControlName", "title", "placeholder", "Titre de la le\xE7on", 1, "form-control", "form-control-sm"], [1, "col-md-4"], ["formControlName", "type", 1, "form-select", "form-select-sm"], ["value", "VIDEO"], ["value", "PDF"], ["value", "CODE_EXERCISE"], ["value", "EXCEL_EXERCISE"], ["value", "QUIZ"], [1, "row", "g-2"], ["type", "text", "formControlName", "description", "placeholder", "Description courte", 1, "form-control", "form-control-sm"], [1, "input-group", "input-group-sm"], ["type", "number", "formControlName", "duration", "placeholder", "Dur\xE9e", 1, "form-control"], [1, "input-group-text"], [1, "alert", "alert-danger", "py-2", "small"], [1, "alert", "alert-success", "py-2", "small"], [1, "bi", "bi-save", "me-2"]], template: function CreateCourseComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1", 5);
        \u0275\u0275text(6, "\u2728 Cr\xE9er un cours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Remplissez les informations de votre cours");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "form", 7);
        \u0275\u0275listener("ngSubmit", function CreateCourseComponent_Template_form_ngSubmit_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSubmit());
        });
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h5", 11);
        \u0275\u0275text(14, "\u{1F4DD} Informations g\xE9n\xE9rales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
        \u0275\u0275text(17, "Titre du cours *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 14);
        \u0275\u0275elementStart(19, "div", 15);
        \u0275\u0275text(20, "Le titre est obligatoire");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "label", 13);
        \u0275\u0275text(23, "Description *");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "textarea", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 17)(26, "div", 18)(27, "label", 13);
        \u0275\u0275text(28, "Cat\xE9gorie *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "select", 19)(30, "option", 20);
        \u0275\u0275text(31, "Choisir une cat\xE9gorie");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, CreateCourseComponent_option_32_Template, 2, 3, "option", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 18)(34, "label", 13);
        \u0275\u0275text(35, "Niveau *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "select", 22)(37, "option", 23);
        \u0275\u0275text(38, "\u{1F7E2} D\xE9butant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option", 24);
        \u0275\u0275text(40, "\u{1F7E1} Interm\xE9diaire");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option", 25);
        \u0275\u0275text(42, "\u{1F534} Avanc\xE9");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 10)(44, "h5", 26);
        \u0275\u0275text(45, "\u{1F4E4} Importer des fichiers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 27);
        \u0275\u0275text(47, "S\xE9lectionnez plusieurs vid\xE9os et/ou documents (PDF, Word) en une seule fois. Une le\xE7on sera cr\xE9\xE9e automatiquement pour chaque fichier.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 28);
        \u0275\u0275listener("dragover", function CreateCourseComponent_Template_div_dragover_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragOver($event));
        })("dragleave", function CreateCourseComponent_Template_div_dragleave_48_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.isDragOver = false);
        })("drop", function CreateCourseComponent_Template_div_drop_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDrop($event));
        })("click", function CreateCourseComponent_Template_div_click_48_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r3 = \u0275\u0275reference(50);
          return \u0275\u0275resetView(fileInput_r3.click());
        });
        \u0275\u0275elementStart(49, "input", 29, 0);
        \u0275\u0275listener("change", function CreateCourseComponent_Template_input_change_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFilesSelected($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 30);
        \u0275\u0275text(52, "\u{1F4C1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p", 31);
        \u0275\u0275text(54, "Cliquez ou d\xE9posez vos fichiers ici");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 32);
        \u0275\u0275text(56, "Vid\xE9os (MP4, WebM...) et documents (PDF, Word) \u2014 plusieurs fichiers \xE0 la fois");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, CreateCourseComponent_div_57_Template, 3, 2, "div", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 34)(59, "div", 35)(60, "h5", 5);
        \u0275\u0275text(61, "\u{1F4CB} Le\xE7ons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "button", 36);
        \u0275\u0275listener("click", function CreateCourseComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addLesson());
        });
        \u0275\u0275element(63, "i", 37);
        \u0275\u0275text(64, "Ajouter une le\xE7on ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(65, CreateCourseComponent_div_65_Template, 5, 0, "div", 38);
        \u0275\u0275elementStart(66, "div", 39);
        \u0275\u0275template(67, CreateCourseComponent_div_67_Template, 29, 2, "div", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 41)(69, "div", 42)(70, "h5", 11);
        \u0275\u0275text(71, "\u2699\uFE0F Param\xE8tres");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 43)(73, "div", 44);
        \u0275\u0275element(74, "input", 45);
        \u0275\u0275elementStart(75, "label", 46);
        \u0275\u0275text(76);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "p", 47);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 48)(80, "div", 49)(81, "div");
        \u0275\u0275element(82, "i", 50);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(84, CreateCourseComponent_div_84_Template, 2, 1, "div", 51)(85, CreateCourseComponent_div_85_Template, 2, 0, "div", 52);
        \u0275\u0275elementStart(86, "button", 53);
        \u0275\u0275template(87, CreateCourseComponent_span_87_Template, 1, 0, "span", 54)(88, CreateCourseComponent_i_88_Template, 1, 0, "i", 55);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "a", 56);
        \u0275\u0275text(91, "Annuler");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_8_0;
        let tmp_9_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.courseForm);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx.courseForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.courseForm.get("title")) == null ? null : tmp_2_0.touched));
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(16);
        \u0275\u0275classProp("dragover", ctx.isDragOver);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.pendingUploads.length);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.lessons.length === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.lessons.controls);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = ctx.courseForm.get("published")) == null ? null : tmp_8_0.value) ? "\u2705 Publi\xE9" : "\u23F3 Brouillon", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(((tmp_9_0 = ctx.courseForm.get("published")) == null ? null : tmp_9_0.value) ? "Visible par tous les \xE9tudiants" : "Seul vous pouvez le voir");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.lessons.length, " le\xE7on(s)");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading || ctx.courseForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Cr\xE9ation..." : "Cr\xE9er le cours", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, RouterLink], styles: ["\n\n.upload-dropzone[_ngcontent-%COMP%] {\n  border: 2px dashed #cbd5e1;\n  border-radius: 14px;\n  padding: 2rem 1rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all .2s;\n  background: #f8fafc;\n}\n.upload-dropzone[_ngcontent-%COMP%]:hover, .upload-dropzone.dragover[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  background: #eef2ff;\n}\n/*# sourceMappingURL=create-course.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateCourseComponent, { className: "CreateCourseComponent" });
})();
export {
  CreateCourseComponent
};
//# sourceMappingURL=chunk-WESQ3W4H.js.map

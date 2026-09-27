import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  ProgressService
} from "./chunk-JX72GFCA.js";
import {
  CourseService
} from "./chunk-HACBF6OZ.js";
import {
  ActivatedRoute,
  CommonModule,
  NgForOf,
  NgIf,
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/spreadsheet/spreadsheet.component.ts
var _c0 = (a0) => ["/courses", a0, "learn"];
function SpreadsheetComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", t_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.templates[t_r1].label);
  }
}
function SpreadsheetComponent_div_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275element(1, "i", 56);
    \u0275\u0275text(2, "Termin\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function SpreadsheetComponent_div_16_button_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 60);
  }
}
function SpreadsheetComponent_div_16_button_13_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 56);
  }
}
function SpreadsheetComponent_div_16_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function SpreadsheetComponent_div_16_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.markComplete());
    });
    \u0275\u0275template(1, SpreadsheetComponent_div_16_button_13_span_1_Template, 1, 0, "span", 58)(2, SpreadsheetComponent_div_16_button_13_i_2_Template, 1, 0, "i", 59);
    \u0275\u0275text(3, "Marquer comme termin\xE9 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.markingComplete);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.markingComplete);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.markingComplete);
  }
}
function SpreadsheetComponent_div_16_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, "Retour au cours ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.exercise.courseId));
  }
}
function SpreadsheetComponent_div_16_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 63);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, "Retour aux cas pratiques ");
    \u0275\u0275elementEnd();
  }
}
function SpreadsheetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div", 44)(3, "div", 45)(4, "span", 46);
    \u0275\u0275element(5, "i", 47);
    \u0275\u0275text(6, "Exercice Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SpreadsheetComponent_div_16_span_7_Template, 3, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 51);
    \u0275\u0275template(13, SpreadsheetComponent_div_16_button_13_Template, 4, 3, "button", 52)(14, SpreadsheetComponent_div_16_a_14_Template, 3, 3, "a", 53)(15, SpreadsheetComponent_div_16_a_15_Template, 3, 0, "a", 54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.exercise.completed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.exercise.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.exercise.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.exercise.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.exercise.courseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.exercise.courseId);
  }
}
function SpreadsheetComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const c_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected-header", ctx_r1.selected.col === c_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r4);
  }
}
function SpreadsheetComponent_tr_52_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 66);
    \u0275\u0275listener("focus", function SpreadsheetComponent_tr_52_td_3_Template_input_focus_1_listener() {
      const c_r7 = \u0275\u0275restoreView(_r6).index;
      const r_r8 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCell(r_r8, c_r7));
    })("input", function SpreadsheetComponent_tr_52_td_3_Template_input_input_1_listener($event) {
      const c_r7 = \u0275\u0275restoreView(_r6).index;
      const r_r8 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCellInput(r_r8, c_r7, $event));
    })("keydown", function SpreadsheetComponent_tr_52_td_3_Template_input_keydown_1_listener($event) {
      const c_r7 = \u0275\u0275restoreView(_r6).index;
      const r_r8 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCellKeydown(r_r8, c_r7, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const c_r7 = ctx.index;
    const r_r8 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selected.row === r_r8 && ctx_r1.selected.col === c_r7);
    \u0275\u0275advance();
    \u0275\u0275classProp("fw-bold", cell_r9.bold)("text-end", ctx_r1.isNumericResult(r_r8, c_r7))("text-danger", ctx_r1.isErrorResult(r_r8, c_r7));
    \u0275\u0275property("id", "cell_" + r_r8 + "_" + c_r7)("value", ctx_r1.getDisplayValue(r_r8, c_r7));
  }
}
function SpreadsheetComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SpreadsheetComponent_tr_52_td_3_Template, 2, 10, "td", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const r_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("selected-header", ctx_r1.selected.row === r_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", row_r10);
  }
}
var SpreadsheetComponent = class _SpreadsheetComponent {
  constructor(courseService, progressService, route) {
    this.courseService = courseService;
    this.progressService = progressService;
    this.route = route;
    this.ROWS = 25;
    this.COLS = 10;
    this.colLabels = Array.from({ length: this.COLS }, (_, i) => String.fromCharCode(65 + i));
    this.grid = this.createEmptyGrid();
    this.computedGrid = this.createEmptyComputed();
    this.selected = { row: 0, col: 0 };
    this.selectedTemplate = "";
    this.exercise = null;
    this.markingComplete = false;
    this.evaluating = /* @__PURE__ */ new Set();
    this.tokens = [];
    this.pos = 0;
    this.templates = {
      facture: {
        label: "\u{1F9FE} Facture",
        cells: {
          A1: { raw: "FACTURE", bold: true },
          A3: { raw: "D\xE9signation", bold: true },
          B3: { raw: "Quantit\xE9", bold: true },
          C3: { raw: "Prix unitaire", bold: true },
          D3: { raw: "Total", bold: true },
          A4: { raw: "Ordinateur portable" },
          B4: { raw: "2" },
          C4: { raw: "450", format: "currency" },
          D4: { raw: "=B4*C4", format: "currency" },
          A5: { raw: "Souris sans fil" },
          B5: { raw: "5" },
          C5: { raw: "15", format: "currency" },
          D5: { raw: "=B5*C5", format: "currency" },
          A6: { raw: "Clavier" },
          B6: { raw: "3" },
          C6: { raw: "25", format: "currency" },
          D6: { raw: "=B6*C6", format: "currency" },
          A9: { raw: "Total HT", bold: true },
          D9: { raw: "=SOMME(D4:D6)", bold: true, format: "currency" },
          A10: { raw: "TVA (18%)" },
          D10: { raw: "=D9*0.18", format: "currency" },
          A11: { raw: "Total TTC", bold: true },
          D11: { raw: "=D9+D10", bold: true, format: "currency" }
        }
      },
      balance: {
        label: "\u2696\uFE0F Balance de v\xE9rification",
        cells: {
          A1: { raw: "N\xB0 Compte", bold: true },
          B1: { raw: "Intitul\xE9 du compte", bold: true },
          C1: { raw: "D\xE9bit", bold: true },
          D1: { raw: "Cr\xE9dit", bold: true },
          A2: { raw: "601" },
          B2: { raw: "Achats de marchandises" },
          C2: { raw: "150000", format: "currency" },
          A3: { raw: "401" },
          B3: { raw: "Fournisseurs" },
          D3: { raw: "150000", format: "currency" },
          A4: { raw: "512" },
          B4: { raw: "Banque" },
          C4: { raw: "500000", format: "currency" },
          A5: { raw: "701" },
          B5: { raw: "Ventes de marchandises" },
          D5: { raw: "500000", format: "currency" },
          A7: { raw: "TOTAL", bold: true },
          C7: { raw: "=SOMME(C2:C6)", bold: true, format: "currency" },
          D7: { raw: "=SOMME(D2:D6)", bold: true, format: "currency" }
        }
      },
      resultat: {
        label: "\u{1F4C8} Compte de r\xE9sultat",
        cells: {
          A1: { raw: "CHARGES", bold: true },
          B1: { raw: "Montant", bold: true },
          D1: { raw: "PRODUITS", bold: true },
          E1: { raw: "Montant", bold: true },
          A2: { raw: "Achats consomm\xE9s" },
          B2: { raw: "200000", format: "currency" },
          A3: { raw: "Charges de personnel" },
          B3: { raw: "150000", format: "currency" },
          A4: { raw: "Charges financi\xE8res" },
          B4: { raw: "10000", format: "currency" },
          D2: { raw: "Ventes de marchandises" },
          E2: { raw: "500000", format: "currency" },
          D3: { raw: "Production vendue" },
          E3: { raw: "50000", format: "currency" },
          A6: { raw: "Total des charges", bold: true },
          B6: { raw: "=SOMME(B2:B5)", bold: true, format: "currency" },
          D6: { raw: "Total des produits", bold: true },
          E6: { raw: "=SOMME(E2:E5)", bold: true, format: "currency" },
          A8: { raw: "R\xE9sultat net (Produits - Charges)", bold: true },
          B8: { raw: "=E6-B6", bold: true, format: "currency" }
        }
      },
      journal: {
        label: "\u{1F4D3} Journal comptable",
        cells: {
          A1: { raw: "Date", bold: true },
          B1: { raw: "N\xB0 Compte", bold: true },
          C1: { raw: "Libell\xE9", bold: true },
          D1: { raw: "D\xE9bit", bold: true },
          E1: { raw: "Cr\xE9dit", bold: true },
          A2: { raw: "01/01/2026" },
          B2: { raw: "512" },
          C2: { raw: "Apport en capital" },
          D2: { raw: "1000000", format: "currency" },
          A3: { raw: "01/01/2026" },
          B3: { raw: "101" },
          C3: { raw: "Capital social" },
          E3: { raw: "1000000", format: "currency" },
          A5: { raw: "Totaux", bold: true },
          D5: { raw: "=SOMME(D2:D4)", bold: true, format: "currency" },
          E5: { raw: "=SOMME(E2:E4)", bold: true, format: "currency" }
        }
      }
    };
    this.templateKeys = Object.keys(this.templates);
    this.recompute();
  }
  ngOnInit() {
    const lessonId = this.route.snapshot.queryParamMap.get("lessonId");
    if (lessonId) {
      this.courseService.getLessonById(+lessonId).subscribe((lesson) => {
        this.exercise = lesson;
        if (lesson.starterCode?.trim()) {
          this.loadGridFromData(lesson.starterCode);
        }
      });
    }
  }
  // ---------- Grid helpers ----------
  createEmptyGrid() {
    return Array.from({ length: this.ROWS }, () => Array.from({ length: this.COLS }, () => ({ raw: "" })));
  }
  createEmptyComputed() {
    return Array.from({ length: this.ROWS }, () => Array.from({ length: this.COLS }, () => ""));
  }
  getCellLabel(r, c) {
    return `${this.colLabels[c]}${r + 1}`;
  }
  selectCell(r, c) {
    this.selected = { row: r, col: c };
  }
  isNumericResult(r, c) {
    return typeof this.computedGrid[r][c] === "number";
  }
  isErrorResult(r, c) {
    const v = this.computedGrid[r][c];
    return v === "#ERREUR" || v === "#CIRC";
  }
  getDisplayValue(r, c) {
    if (this.selected.row === r && this.selected.col === c) {
      return this.grid[r][c].raw;
    }
    return this.formatCellValue(r, c);
  }
  formatCellValue(r, c) {
    const computed = this.computedGrid[r][c];
    if (typeof computed !== "number")
      return String(computed ?? "");
    const format = this.grid[r][c].format;
    switch (format) {
      case "currency":
        return computed.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " \u20AC";
      case "percent":
        return (computed * 100).toLocaleString("fr-FR", { maximumFractionDigits: 2 }) + " %";
      case "number":
        return computed.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      default:
        return String(computed);
    }
  }
  // ---------- Editing ----------
  onCellInput(r, c, event) {
    this.grid[r][c].raw = event.target.value;
    this.recompute();
  }
  onFormulaBarInput(event) {
    this.grid[this.selected.row][this.selected.col].raw = event.target.value;
    this.recompute();
  }
  onCellKeydown(r, c, event) {
    let target = null;
    if (event.key === "Enter")
      target = { row: Math.min(r + 1, this.ROWS - 1), col: c };
    else if (event.key === "Tab") {
      event.preventDefault();
      target = { row: r, col: Math.min(c + 1, this.COLS - 1) };
    } else if (event.key === "ArrowDown")
      target = { row: Math.min(r + 1, this.ROWS - 1), col: c };
    else if (event.key === "ArrowUp")
      target = { row: Math.max(r - 1, 0), col: c };
    else if (event.key === "ArrowRight" && event.target.selectionStart === event.target.value.length)
      target = { row: r, col: Math.min(c + 1, this.COLS - 1) };
    else if (event.key === "ArrowLeft" && event.target.selectionStart === 0)
      target = { row: r, col: Math.max(c - 1, 0) };
    if (target) {
      event.preventDefault();
      this.focusCell(target.row, target.col);
    }
  }
  focusCell(r, c) {
    this.selectCell(r, c);
    setTimeout(() => {
      const el = document.getElementById(`cell_${r}_${c}`);
      el?.focus();
      el?.select();
    });
  }
  toggleBold() {
    const cell = this.grid[this.selected.row][this.selected.col];
    cell.bold = !cell.bold;
  }
  setFormat(format) {
    this.grid[this.selected.row][this.selected.col].format = format;
  }
  clearSelectedCell() {
    this.grid[this.selected.row][this.selected.col] = { raw: "" };
    this.recompute();
  }
  resetGridConfirm() {
    if (!confirm("Effacer toute la feuille ?"))
      return;
    this.selectedTemplate = "";
    this.resetGrid();
  }
  resetGrid() {
    this.grid = this.createEmptyGrid();
    this.recompute();
  }
  applyTemplate(key) {
    if (!key)
      return;
    this.resetGrid();
    const tpl = this.templates[key];
    for (const [ref, data] of Object.entries(tpl.cells)) {
      const pos = this.parseRef(ref);
      this.grid[pos.row][pos.col] = { raw: data.raw ?? "", bold: data.bold, format: data.format };
    }
    this.recompute();
  }
  // ---------- Import / Export ----------
  exportGridToJSON() {
    const cells = {};
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        const cell = this.grid[r][c];
        if (cell.raw || cell.bold || cell.format && cell.format !== "none") {
          const entry = { raw: cell.raw };
          if (cell.bold)
            entry.bold = true;
          if (cell.format && cell.format !== "none")
            entry.format = cell.format;
          cells[this.getCellLabel(r, c)] = entry;
        }
      }
    }
    return JSON.stringify({ cells });
  }
  loadGridFromData(json) {
    try {
      const parsed = JSON.parse(json);
      const cells = parsed.cells ?? parsed;
      this.grid = this.createEmptyGrid();
      for (const [ref, data] of Object.entries(cells)) {
        const pos = this.parseRef(ref);
        this.grid[pos.row][pos.col] = { raw: data.raw ?? "", bold: data.bold, format: data.format };
      }
      this.recompute();
    } catch {
    }
  }
  exportJSON() {
    prompt('Copiez ce JSON dans le champ "Code/Donn\xE9es de d\xE9part" de la le\xE7on pour le r\xE9utiliser :', this.exportGridToJSON());
  }
  importJSON() {
    const json = prompt("Collez le JSON export\xE9 pr\xE9c\xE9demment :", "");
    if (json)
      this.loadGridFromData(json);
  }
  exportCSV() {
    const lines = [];
    for (let r = 0; r < this.ROWS; r++) {
      const cells = [];
      for (let c = 0; c < this.COLS; c++) {
        const v = this.computedGrid[r][c];
        cells.push(typeof v === "number" ? String(v) : `"${String(v ?? "").replace(/"/g, '""')}"`);
      }
      lines.push(cells.join(";"));
    }
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tableur.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  // ---------- Progress ----------
  markComplete() {
    if (!this.exercise)
      return;
    this.markingComplete = true;
    this.progressService.completeLesson(this.exercise.id).subscribe({
      next: () => {
        this.exercise.completed = true;
        this.markingComplete = false;
      },
      error: () => {
        this.markingComplete = false;
      }
    });
  }
  // ---------- Formula engine ----------
  recompute() {
    this.computedGrid = this.createEmptyComputed();
    for (let r = 0; r < this.ROWS; r++) {
      for (let c = 0; c < this.COLS; c++) {
        this.getComputed(r, c);
      }
    }
  }
  getComputed(r, c) {
    const existing = this.computedGrid[r][c];
    if (existing !== "" || this.grid[r][c].raw.trim() === "") {
      if (this.grid[r][c].raw.trim() === "")
        return "";
      if (existing !== "")
        return existing;
    }
    const key = `${r}:${c}`;
    if (this.evaluating.has(key)) {
      this.computedGrid[r][c] = "#CIRC";
      return "#CIRC";
    }
    const raw = this.grid[r][c].raw.trim();
    if (!raw) {
      this.computedGrid[r][c] = "";
      return "";
    }
    if (raw.startsWith("=")) {
      this.evaluating.add(key);
      try {
        this.computedGrid[r][c] = this.evaluateFormula(raw.slice(1), r, c);
      } catch {
        this.computedGrid[r][c] = "#ERREUR";
      }
      this.evaluating.delete(key);
      return this.computedGrid[r][c];
    }
    const normalized = raw.replace(",", ".");
    if (/^-?\d+(\.\d+)?$/.test(normalized)) {
      this.computedGrid[r][c] = parseFloat(normalized);
    } else {
      this.computedGrid[r][c] = raw;
    }
    return this.computedGrid[r][c];
  }
  evaluateFormula(expr, r, c) {
    this.tokens = this.tokenize(expr);
    this.pos = 0;
    const value = this.parseExpression(r, c);
    if (this.pos < this.tokens.length)
      throw new Error("Expression invalide");
    return value;
  }
  tokenize(expr) {
    const s = expr.toUpperCase().replace(/\s+/g, "");
    const tokens = [];
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      if (/[0-9]/.test(ch) || ch === "." && /[0-9]/.test(s[i + 1] || "")) {
        let j = i;
        while (j < s.length && /[0-9.]/.test(s[j]))
          j++;
        tokens.push({ type: "num", value: s.slice(i, j) });
        i = j;
      } else if (/[A-Z]/.test(ch)) {
        let j = i;
        while (j < s.length && /[A-Z]/.test(s[j]))
          j++;
        let k = j;
        while (k < s.length && /[0-9]/.test(s[k]))
          k++;
        if (k > j) {
          tokens.push({ type: "ref", value: s.slice(i, k) });
          i = k;
        } else {
          tokens.push({ type: "ident", value: s.slice(i, j) });
          i = j;
        }
      } else if ("+-*/".includes(ch)) {
        tokens.push({ type: "op", value: ch });
        i++;
      } else if (ch === "(") {
        tokens.push({ type: "lparen", value: ch });
        i++;
      } else if (ch === ")") {
        tokens.push({ type: "rparen", value: ch });
        i++;
      } else if (ch === ",") {
        tokens.push({ type: "comma", value: ch });
        i++;
      } else if (ch === ":") {
        tokens.push({ type: "colon", value: ch });
        i++;
      } else {
        throw new Error(`Caract\xE8re invalide: ${ch}`);
      }
    }
    return tokens;
  }
  peek() {
    return this.tokens[this.pos];
  }
  next() {
    return this.tokens[this.pos++];
  }
  parseExpression(r, c) {
    let value = this.parseTerm(r, c);
    while (this.peek()?.type === "op" && (this.peek().value === "+" || this.peek().value === "-")) {
      const op = this.next().value;
      const rhs = this.parseTerm(r, c);
      value = op === "+" ? value + rhs : value - rhs;
    }
    return value;
  }
  parseTerm(r, c) {
    let value = this.parseFactor(r, c);
    while (this.peek()?.type === "op" && (this.peek().value === "*" || this.peek().value === "/")) {
      const op = this.next().value;
      const rhs = this.parseFactor(r, c);
      if (op === "/") {
        if (rhs === 0)
          throw new Error("Division par z\xE9ro");
        value = value / rhs;
      } else {
        value = value * rhs;
      }
    }
    return value;
  }
  parseFactor(r, c) {
    const tok = this.peek();
    if (!tok)
      throw new Error("Expression incompl\xE8te");
    if (tok.type === "op" && tok.value === "-") {
      this.next();
      return -this.parseFactor(r, c);
    }
    if (tok.type === "op" && tok.value === "+") {
      this.next();
      return this.parseFactor(r, c);
    }
    if (tok.type === "num") {
      this.next();
      return parseFloat(tok.value);
    }
    if (tok.type === "lparen") {
      this.next();
      const value = this.parseExpression(r, c);
      if (this.peek()?.type !== "rparen")
        throw new Error("Parenth\xE8se manquante");
      this.next();
      return value;
    }
    if (tok.type === "ref") {
      this.next();
      return this.refToNumber(tok.value);
    }
    if (tok.type === "ident") {
      this.next();
      if (this.peek()?.type !== "lparen")
        throw new Error("Fonction invalide");
      this.next();
      const values = this.parseFunctionArgs(r, c);
      if (this.peek()?.type !== "rparen")
        throw new Error("Parenth\xE8se manquante");
      this.next();
      return this.applyFunction(tok.value, values);
    }
    throw new Error("Token inattendu");
  }
  parseFunctionArgs(r, c) {
    const values = [];
    if (this.peek()?.type === "rparen")
      return values;
    while (true) {
      if (this.peek()?.type === "ref" && this.tokens[this.pos + 1]?.type === "colon") {
        const start = this.next().value;
        this.next();
        const endTok = this.next();
        if (endTok.type !== "ref")
          throw new Error("Plage invalide");
        values.push(...this.rangeToNumbers(start, endTok.value));
      } else {
        values.push(this.parseExpression(r, c));
      }
      if (this.peek()?.type === "comma") {
        this.next();
        continue;
      }
      break;
    }
    return values;
  }
  parseRef(ref) {
    const m = ref.match(/^([A-Z]+)(\d+)$/);
    if (!m)
      throw new Error(`R\xE9f\xE9rence invalide: ${ref}`);
    let col = 0;
    for (const ch of m[1])
      col = col * 26 + (ch.charCodeAt(0) - 64);
    col -= 1;
    const row = parseInt(m[2], 10) - 1;
    if (row < 0 || row >= this.ROWS || col < 0 || col >= this.COLS)
      throw new Error(`R\xE9f\xE9rence hors limites: ${ref}`);
    return { row, col };
  }
  refToNumber(ref) {
    const pos = this.parseRef(ref);
    const val = this.getComputed(pos.row, pos.col);
    if (val === "#ERREUR" || val === "#CIRC")
      throw new Error("R\xE9f\xE9rence en erreur");
    if (val === "")
      return 0;
    const num = typeof val === "number" ? val : Number(val);
    return isNaN(num) ? 0 : num;
  }
  rangeToNumbers(startRef, endRef) {
    const start = this.parseRef(startRef);
    const end = this.parseRef(endRef);
    const r1 = Math.min(start.row, end.row), r2 = Math.max(start.row, end.row);
    const c1 = Math.min(start.col, end.col), c2 = Math.max(start.col, end.col);
    const values = [];
    for (let r = r1; r <= r2; r++) {
      for (let c = c1; c <= c2; c++) {
        const val = this.getComputed(r, c);
        if (val === "#ERREUR" || val === "#CIRC" || val === "")
          continue;
        const num = typeof val === "number" ? val : Number(val);
        if (!isNaN(num))
          values.push(num);
      }
    }
    return values;
  }
  applyFunction(name, values) {
    switch (name) {
      case "SUM":
      case "SOMME":
        return values.reduce((a, b) => a + b, 0);
      case "AVERAGE":
      case "MOYENNE":
        return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
      case "MIN":
        return values.length ? Math.min(...values) : 0;
      case "MAX":
        return values.length ? Math.max(...values) : 0;
      case "COUNT":
      case "NB":
        return values.length;
      case "ABS":
        return Math.abs(values[0] ?? 0);
      case "ROUND":
      case "ARRONDI": {
        if (!values.length)
          throw new Error("ARRONDI n\xE9cessite des arguments");
        const decimals = values.length > 1 ? values[1] : 0;
        const factor = Math.pow(10, decimals);
        return Math.round(values[0] * factor) / factor;
      }
      default:
        throw new Error(`Fonction inconnue: ${name}`);
    }
  }
  static {
    this.\u0275fac = function SpreadsheetComponent_Factory(t) {
      return new (t || _SpreadsheetComponent)(\u0275\u0275directiveInject(CourseService), \u0275\u0275directiveInject(ProgressService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpreadsheetComponent, selectors: [["app-spreadsheet"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 12, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], [1, "d-flex", "gap-2", "align-items-center"], [1, "form-select", "form-select-sm", 2, "width", "220px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-trash", "me-1"], [1, "d-flex", "gap-3"], ["class", "exercise-panel", 4, "ngIf"], [1, "flex-grow-1", 2, "min-width", "0"], [1, "toolbar", "d-flex", "align-items-center", "gap-2", "mb-2", "p-2", "rounded-3", 2, "background", "#f1f5f9"], [1, "badge", "bg-secondary", 2, "min-width", "50px"], ["placeholder", "Valeur ou formule, ex: =SOMME(A1:A5)", 1, "form-control", "form-control-sm", 2, "max-width", "380px", 3, "input", "value"], ["title", "Gras", 1, "btn", "btn-sm", 3, "click"], [1, "bi", "bi-type-bold"], [1, "form-select", "form-select-sm", 2, "width", "160px", 3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "number"], ["value", "currency"], ["value", "percent"], ["title", "Effacer la cellule", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-eraser"], [1, "ms-auto", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-download", "me-1"], [1, "bi", "bi-cloud-arrow-up", "me-1"], [1, "bi", "bi-cloud-arrow-down", "me-1"], [1, "sheet-wrapper"], [1, "sheet-table"], [1, "corner"], [3, "selected-header", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "card", "border-0", "bg-light", "mt-3", 2, "border-radius", "12px"], [1, "card-body", "p-3"], [1, "fw-bold", "mb-2"], [1, "bi", "bi-info-circle", "text-primary", "me-2"], [1, "small", "text-muted"], [1, "d-flex", "flex-wrap", "gap-3", "mt-1"], [3, "value"], [1, "exercise-panel"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "12px"], [1, "card-body", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "badge", "bg-primary"], [1, "bi", "bi-table", "me-1"], ["class", "badge bg-success", 4, "ngIf"], [1, "fw-bold"], [1, "text-muted", "small", "mb-3", 2, "white-space", "pre-wrap"], [1, "mt-auto", "d-flex", "flex-column", "gap-2"], ["class", "btn btn-success btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-secondary btn-sm", 3, "routerLink", 4, "ngIf"], ["routerLink", "/exercises", "class", "btn btn-outline-secondary btn-sm", 4, "ngIf"], [1, "badge", "bg-success"], [1, "bi", "bi-check-circle", "me-1"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "bi bi-check-circle me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "bi", "bi-arrow-left", "me-1"], ["routerLink", "/exercises", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "row-header"], [3, "selected", 4, "ngFor", "ngForOf"], ["spellcheck", "false", "autocomplete", "off", 1, "cell-input", 3, "focus", "input", "keydown", "id", "value"]], template: function SpreadsheetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F4CA} Tableur");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Pratiquez vos calculs comptables avec un tableur int\xE9gr\xE9 (formules type Excel)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function SpreadsheetComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTemplate, $event) || (ctx.selectedTemplate = $event);
          return $event;
        });
        \u0275\u0275listener("change", function SpreadsheetComponent_Template_select_change_8_listener() {
          return ctx.applyTemplate(ctx.selectedTemplate);
        });
        \u0275\u0275elementStart(9, "option", 6);
        \u0275\u0275text(10, "\u2014 Charger un mod\xE8le \u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, SpreadsheetComponent_option_11_Template, 2, 2, "option", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_12_listener() {
          return ctx.resetGridConfirm();
        });
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275text(14, "Effacer tout ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, SpreadsheetComponent_div_16_Template, 16, 6, "div", 11);
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "span", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 15);
        \u0275\u0275listener("input", function SpreadsheetComponent_Template_input_input_21_listener($event) {
          return ctx.onFormulaBarInput($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 16);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_22_listener() {
          return ctx.toggleBold();
        });
        \u0275\u0275element(23, "i", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "select", 18);
        \u0275\u0275listener("ngModelChange", function SpreadsheetComponent_Template_select_ngModelChange_24_listener($event) {
          return ctx.setFormat($event);
        });
        \u0275\u0275elementStart(25, "option", 19);
        \u0275\u0275text(26, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "option", 20);
        \u0275\u0275text(28, "Nombre (2 d\xE9c.)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 21);
        \u0275\u0275text(30, "Devise (\u20AC)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 22);
        \u0275\u0275text(32, "Pourcentage");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 23);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_33_listener() {
          return ctx.clearSelectedCell();
        });
        \u0275\u0275element(34, "i", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div", 25)(36, "button", 26);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_36_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275element(37, "i", 27);
        \u0275\u0275text(38, "CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 26);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_39_listener() {
          return ctx.exportJSON();
        });
        \u0275\u0275element(40, "i", 28);
        \u0275\u0275text(41, "Exporter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 26);
        \u0275\u0275listener("click", function SpreadsheetComponent_Template_button_click_42_listener() {
          return ctx.importJSON();
        });
        \u0275\u0275element(43, "i", 29);
        \u0275\u0275text(44, "Importer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 30)(46, "table", 31)(47, "thead")(48, "tr");
        \u0275\u0275element(49, "th", 32);
        \u0275\u0275template(50, SpreadsheetComponent_th_50_Template, 2, 3, "th", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "tbody");
        \u0275\u0275template(52, SpreadsheetComponent_tr_52_Template, 4, 4, "tr", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 35)(54, "div", 36)(55, "h6", 37);
        \u0275\u0275element(56, "i", 38);
        \u0275\u0275text(57, "Formules disponibles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 39)(59, "div");
        \u0275\u0275text(60, "Commencez une formule par ");
        \u0275\u0275elementStart(61, "code");
        \u0275\u0275text(62, "=");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, ". Exemples : ");
        \u0275\u0275elementStart(64, "code");
        \u0275\u0275text(65, "=A1+B2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, ", ");
        \u0275\u0275elementStart(67, "code");
        \u0275\u0275text(68, "=A1*0.18");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, ", ");
        \u0275\u0275elementStart(70, "code");
        \u0275\u0275text(71, "=SOMME(A1:A5)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div");
        \u0275\u0275text(73, "Utilisez le point ");
        \u0275\u0275elementStart(74, "code");
        \u0275\u0275text(75, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " pour les d\xE9cimales dans les formules (ex: ");
        \u0275\u0275elementStart(77, "code");
        \u0275\u0275text(78, "0.18");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, "). La virgule reste possible pour saisir un nombre simple dans une cellule.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 40)(81, "span")(82, "code");
        \u0275\u0275text(83, "SOMME / SUM");
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " : addition d'une plage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span")(86, "code");
        \u0275\u0275text(87, "MOYENNE / AVERAGE");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " : moyenne");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span")(90, "code");
        \u0275\u0275text(91, "MIN");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " / ");
        \u0275\u0275elementStart(93, "code");
        \u0275\u0275text(94, "MAX");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "span")(96, "code");
        \u0275\u0275text(97, "NB / COUNT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " : nombre de valeurs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "span")(100, "code");
        \u0275\u0275text(101, "ARRONDI / ROUND");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " : arrondi (valeur, d\xE9cimales)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "span")(104, "code");
        \u0275\u0275text(105, "ABS");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " : valeur absolue");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedTemplate);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.templateKeys);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.exercise);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.getCellLabel(ctx.selected.row, ctx.selected.col));
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.grid[ctx.selected.row][ctx.selected.col].raw);
        \u0275\u0275advance();
        \u0275\u0275classProp("btn-primary", ctx.grid[ctx.selected.row][ctx.selected.col].bold)("btn-outline-secondary", !ctx.grid[ctx.selected.row][ctx.selected.col].bold);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.grid[ctx.selected.row][ctx.selected.col].format || "none");
        \u0275\u0275advance(26);
        \u0275\u0275property("ngForOf", ctx.colLabels);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.grid);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.exercise-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n}\n.sheet-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  max-height: calc(100vh - 380px);\n  min-height: 350px;\n}\n.sheet-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.sheet-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border: 1px solid #d1d5db;\n  padding: 4px;\n  text-align: center;\n  min-width: 130px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #475569;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.sheet-table[_ngcontent-%COMP%]   th.row-header[_ngcontent-%COMP%] {\n  min-width: 40px;\n  position: sticky;\n  left: 0;\n  z-index: 2;\n}\n.sheet-table[_ngcontent-%COMP%]   th.corner[_ngcontent-%COMP%] {\n  min-width: 40px;\n  position: sticky;\n  left: 0;\n  top: 0;\n  z-index: 3;\n}\n.sheet-table[_ngcontent-%COMP%]   th.selected-header[_ngcontent-%COMP%] {\n  background: #c7d2fe;\n  color: #1e1b4b;\n}\n.sheet-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  padding: 0;\n  min-width: 130px;\n}\n.sheet-table[_ngcontent-%COMP%]   td.selected[_ngcontent-%COMP%] {\n  outline: 2px solid #6366f1;\n  outline-offset: -2px;\n}\n.cell-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  border: none;\n  outline: none;\n  padding: 2px 6px;\n  font-size: 0.85rem;\n  background: transparent;\n}\n.cell-input[_ngcontent-%COMP%]:focus {\n  background: #eef2ff;\n}\n@media (max-width: 992px) {\n  .d-flex.gap-3[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .exercise-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=spreadsheet.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpreadsheetComponent, { className: "SpreadsheetComponent" });
})();
export {
  SpreadsheetComponent
};
//# sourceMappingURL=chunk-DV4P3FRL.js.map

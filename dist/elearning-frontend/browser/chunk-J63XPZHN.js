import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EWJBTFX2.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/admin/users/admin-users.component.ts
function AdminUsersComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31);
    \u0275\u0275elementStart(2, "p", 32);
    \u0275\u0275text(3, "Chargement...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 35);
    \u0275\u0275text(6, `{{ searchQuery ? 'Aucun r\xE9sultat pour "' + searchQuery + '"' : 'Aucun compte valid\xE9 pour l'instant.' }}`);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeTab === "students" ? "\u{1F468}\u200D\u{1F393}" : "\u{1F468}\u200D\u{1F3EB}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Aucun ", ctx_r0.activeTab === "students" ? "apprenant" : "partenaire", " trouv\xE9");
  }
}
function AdminUsersComponent_div_62_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSpecialization(u_r2.specialization), " ");
  }
}
function AdminUsersComponent_div_62_div_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.bio, " ");
  }
}
function AdminUsersComponent_div_62_div_1_button_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function AdminUsersComponent_div_62_div_1_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function AdminUsersComponent_div_62_div_1_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const u_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAccount(u_r2));
    });
    \u0275\u0275template(1, AdminUsersComponent_div_62_div_1_button_23_span_1_Template, 1, 0, "span", 60);
    \u0275\u0275text(2, " D\xE9sactiver ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.processing[u_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processing[u_r2.id]);
  }
}
function AdminUsersComponent_div_62_div_1_button_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function AdminUsersComponent_div_62_div_1_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function AdminUsersComponent_div_62_div_1_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const u_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAccount(u_r2));
    });
    \u0275\u0275template(1, AdminUsersComponent_div_62_div_1_button_24_span_1_Template, 1, 0, "span", 60);
    \u0275\u0275text(2, " R\xE9activer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.processing[u_r2.id]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.processing[u_r2.id]);
  }
}
function AdminUsersComponent_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39);
    \u0275\u0275element(2, "div", 40);
    \u0275\u0275elementStart(3, "div", 41)(4, "div", 42)(5, "div", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminUsersComponent_div_62_div_1_span_12_Template, 2, 1, "span", 47)(13, AdminUsersComponent_div_62_div_1_p_13_Template, 2, 1, "p", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "hr", 49);
    \u0275\u0275elementStart(15, "div", 50)(16, "div", 51);
    \u0275\u0275element(17, "i", 52);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 53)(21, "span", 54);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminUsersComponent_div_62_div_1_button_23_Template, 3, 2, "button", 55)(24, AdminUsersComponent_div_62_div_1_button_24_Template, 3, 2, "button", 56);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.activeTab === "students" ? "linear-gradient(90deg,#6366f1,#4f46e5)" : "linear-gradient(90deg,#10b981,#059669)");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.activeTab === "students" ? "linear-gradient(135deg,#6366f1,#4f46e5)" : "linear-gradient(135deg,#10b981,#059669)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", u_r2.firstName.charAt(0), "", u_r2.lastName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", u_r2.firstName, " ", u_r2.lastName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "students" && u_r2.specialization);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeTab === "teachers" && u_r2.bio);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 19, u_r2.createdAt, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", u_r2.enabled ? "#d1fae5" : "#fee2e2")("color", u_r2.enabled ? "#065f46" : "#991b1b");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.enabled ? "\u25CF Actif" : "\u25CF D\xE9sactiv\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r2.enabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !u_r2.enabled);
  }
}
function AdminUsersComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, AdminUsersComponent_div_62_div_1_Template, 25, 22, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filtered);
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  constructor(http) {
    this.http = http;
    this.activeTab = "students";
    this.students = [];
    this.teachers = [];
    this.filtered = [];
    this.searchQuery = "";
    this.loading = true;
    this.pendingCount = 0;
    this.processing = {};
  }
  ngOnInit() {
    this.loadAll();
  }
  loadAll() {
    this.loading = true;
    let done = 0;
    const check = () => {
      if (++done === 3) {
        this.loading = false;
        this.filterList();
      }
    };
    this.http.get("/api/admin/users/students").subscribe({
      next: (d) => {
        this.students = d;
        check();
      },
      error: () => check()
    });
    this.http.get("/api/admin/users/teachers").subscribe({
      next: (d) => {
        this.teachers = d;
        check();
      },
      error: () => check()
    });
    this.http.get("/api/admin/users/stats").subscribe({
      next: (d) => {
        this.pendingCount = d.pending;
        check();
      },
      error: () => check()
    });
  }
  filterList() {
    const source = this.activeTab === "students" ? this.students : this.teachers;
    const q = this.searchQuery.toLowerCase().trim();
    this.filtered = q ? source.filter((u) => (u.firstName + " " + u.lastName).toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) : [...source];
  }
  toggleAccount(u) {
    this.processing[u.id] = true;
    const action = u.enabled ? "disable" : "enable";
    this.http.post(`/api/admin/users/${u.id}/${action}`, {}).subscribe({
      next: () => {
        u.enabled = !u.enabled;
        this.processing[u.id] = false;
      },
      error: () => {
        this.processing[u.id] = false;
      }
    });
  }
  getSpecialization(s) {
    const map = {
      "genie-logiciel": "G\xE9nie Logiciel",
      "reseau": "R\xE9seaux",
      "comptabilite": "Comptabilit\xE9",
      "sante": "Sant\xE9",
      "marketing-digital": "Marketing Digital",
      "developpement-personnel": "D\xE9veloppement Personnel"
    };
    return s ? map[s] || s : "";
  }
  static {
    this.\u0275fac = function AdminUsersComponent_Factory(t) {
      return new (t || _AdminUsersComponent)(\u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 26, consts: [[1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-4"], ["routerLink", "/dashboard", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "card", "border-0", "shadow-sm", "text-center", "p-3", 2, "border-radius", "14px"], [2, "font-size", "2rem"], [1, "fw-bold", "fs-4", "mt-1", 2, "color", "#6366f1"], [1, "text-muted", "small"], [1, "fw-bold", "fs-4", "mt-1", 2, "color", "#10b981"], [1, "fw-bold", "fs-4", "mt-1", 2, "color", "#059669"], ["routerLink", "/admin/registrations", 1, "text-decoration-none"], [1, "card", "border-0", "shadow-sm", "text-center", "p-3", 2, "border-radius", "14px", "cursor", "pointer"], [1, "fw-bold", "fs-4", "mt-1"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "16px"], [1, "card-body", "p-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "d-flex", "gap-2"], [1, "btn", "fw-semibold", "px-4", 2, "border-radius", "10px", "border", "none", 3, "click"], [1, "badge", "ms-1", "rounded-pill", 2, "color", "white"], [1, "flex-grow-1", 2, "min-width", "200px"], [1, "input-group"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Rechercher par nom ou email...", 1, "form-control", "border-start-0", "ps-0", 3, "ngModelChange", "input", "ngModel"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-3", 4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "mt-3", "text-muted"], [2, "font-size", "3.5rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "row", "g-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [2, "height", "5px"], [1, "card-body", "p-4"], [1, "d-flex", "align-items-start", "gap-3"], [2, "width", "52px", "height", "52px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "color", "white", "font-weight", "700", "font-size", "1.1rem", "flex-shrink", "0"], [1, "flex-grow-1", "overflow-hidden"], [1, "fw-bold", "text-truncate"], [1, "text-muted", "small", "text-truncate"], ["class", "badge mt-1", "style", "background:#ede9fe;color:#6d28d9;font-size:.72rem", 4, "ngIf"], ["class", "text-muted small mt-1 mb-0", "style", "display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden", 4, "ngIf"], [1, "my-3", 2, "opacity", ".08"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "small", "text-muted"], [1, "bi", "bi-calendar3", "me-1"], [1, "d-flex", "align-items-center", "gap-2"], [1, "badge", "rounded-pill", 2, "font-size", ".7rem"], ["class", "btn btn-sm btn-outline-danger py-0 px-2", "style", "font-size:.75rem;border-radius:8px", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-success py-0 px-2", "style", "font-size:.75rem;border-radius:8px", 3, "disabled", "click", 4, "ngIf"], [1, "badge", "mt-1", 2, "background", "#ede9fe", "color", "#6d28d9", "font-size", ".72rem"], [1, "text-muted", "small", "mt-1", "mb-0", 2, "display", "-webkit-box", "-webkit-line-clamp", "2", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "btn", "btn-sm", "btn-outline-danger", "py-0", "px-2", 2, "font-size", ".75rem", "border-radius", "8px", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "btn", "btn-sm", "btn-outline-success", "py-0", "px-2", 2, "font-size", ".75rem", "border-radius", "8px", 3, "click", "disabled"]], template: function AdminUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h1", 4);
        \u0275\u0275text(6, "Membres de la plateforme");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "G\xE9rez les apprenants et les partenaires (professeurs)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
        \u0275\u0275text(13, "\u{1F468}\u200D\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275text(17, "Apprenants");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 7)(19, "div", 8)(20, "div", 9);
        \u0275\u0275text(21, "\u{1F468}\u200D\u{1F3EB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 11);
        \u0275\u0275text(25, "Partenaires");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 7)(27, "div", 8)(28, "div", 9);
        \u0275\u0275text(29, "\u2705");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 11);
        \u0275\u0275text(33, "Total actifs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 7)(35, "a", 14)(36, "div", 15)(37, "div", 9);
        \u0275\u0275text(38, "\u23F3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 16);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 11);
        \u0275\u0275text(42, "En attente");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "div", 19)(46, "div", 20)(47, "button", 21);
        \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_47_listener() {
          ctx.activeTab = "students";
          return ctx.filterList();
        });
        \u0275\u0275text(48, " \u{1F468}\u200D\u{1F393} Apprenants ");
        \u0275\u0275elementStart(49, "span", 22);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "button", 21);
        \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_51_listener() {
          ctx.activeTab = "teachers";
          return ctx.filterList();
        });
        \u0275\u0275text(52, " \u{1F468}\u200D\u{1F3EB} Partenaires ");
        \u0275\u0275elementStart(53, "span", 22);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 23)(56, "div", 24)(57, "span", 25);
        \u0275\u0275element(58, "i", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function AdminUsersComponent_Template_input_input_59_listener() {
          return ctx.filterList();
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275template(60, AdminUsersComponent_div_60_Template, 4, 0, "div", 28)(61, AdminUsersComponent_div_61_Template, 7, 2, "div", 28)(62, AdminUsersComponent_div_62_Template, 2, 1, "div", 29);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.students.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.teachers.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.students.length + ctx.teachers.length);
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("background", ctx.pendingCount > 0 ? "#fef3c7" : "#f9fafb");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("color", ctx.pendingCount > 0 ? "#d97706" : "#6b7280");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(7);
        \u0275\u0275styleProp("background", ctx.activeTab === "students" ? "#6366f1" : "#f3f4f6")("color", ctx.activeTab === "students" ? "white" : "#374151");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", ctx.activeTab === "students" ? "rgba(255,255,255,.3)" : "#6366f1");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.students.length);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.activeTab === "teachers" ? "#10b981" : "#f3f4f6")("color", ctx.activeTab === "teachers" ? "white" : "#374151");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", ctx.activeTab === "teachers" ? "rgba(255,255,255,.3)" : "#10b981");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.teachers.length);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent" });
})();
export {
  AdminUsersComponent
};
//# sourceMappingURL=chunk-J63XPZHN.js.map

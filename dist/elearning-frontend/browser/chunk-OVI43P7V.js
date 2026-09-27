import {
  ReferenceService
} from "./chunk-3WQZPF57.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  CommonModule,
  DomSanitizer,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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
import {
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/shared/directives/markdown-italic.pipe.ts
var MarkdownItalicPipe = class _MarkdownItalicPipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value)
      return "";
    const html = value.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  static {
    this.\u0275fac = function MarkdownItalicPipe_Factory(t) {
      return new (t || _MarkdownItalicPipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "markdownItalic", type: _MarkdownItalicPipe, pure: true, standalone: true });
  }
};

// src/app/features/references/reference-manager.component.ts
function ReferenceManagerComponent_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ReferenceManagerComponent_button_60_Template_button_click_0_listener() {
      const col_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByType(col_r2.type));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCollection === "__type__" + col_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", col_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.countType(col_r2.type));
  }
}
function ReferenceManagerComponent_div_61_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_61_button_3_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.activeCollection = c_r5;
      return \u0275\u0275resetView(ctx_r2.filterRefs());
    });
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeCollection === c_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r5, " ");
  }
}
function ReferenceManagerComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "Collections");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReferenceManagerComponent_div_61_button_3_Template, 3, 3, "button", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.collections);
  }
}
function ReferenceManagerComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "div", 48);
    \u0275\u0275elementEnd();
  }
}
function ReferenceManagerComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2, "\u{1F5C2}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h5", 51);
    \u0275\u0275text(4, "Aucune r\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6, "Ajoutez votre premi\xE8re r\xE9f\xE9rence bibliographique.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_85_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openForm());
    });
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275text(9, "Ajouter une r\xE9f\xE9rence ");
    \u0275\u0275elementEnd()();
  }
}
function ReferenceManagerComponent_div_86_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ref_r8.authors);
  }
}
function ReferenceManagerComponent_div_86_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ref_r8.year);
  }
}
function ReferenceManagerComponent_div_86_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ref_r8.journal, "");
  }
}
function ReferenceManagerComponent_div_86_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ref_r8.publisher, "");
  }
}
function ReferenceManagerComponent_div_86_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ref_r8.collection, " ");
  }
}
function ReferenceManagerComponent_div_86_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r9, " ");
  }
}
function ReferenceManagerComponent_div_86_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" DOI: ", ref_r8.doi, " ");
  }
}
function ReferenceManagerComponent_div_86_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ISBN: ", ref_r8.isbn, " ");
  }
}
function ReferenceManagerComponent_div_86_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 82);
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ref_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ref_r8.note, " ");
  }
}
function ReferenceManagerComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "div", 55)(6, "h6", 56);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 57)(9, "button", 58);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_86_Template_button_click_9_listener() {
      const ref_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCitation(ref_r8));
    });
    \u0275\u0275element(10, "i", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 60);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_86_Template_button_click_11_listener() {
      const ref_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openForm(ref_r8));
    });
    \u0275\u0275element(12, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 62);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_86_Template_button_click_13_listener() {
      const ref_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteRef(ref_r8));
    });
    \u0275\u0275element(14, "i", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 64);
    \u0275\u0275template(16, ReferenceManagerComponent_div_86_span_16_Template, 2, 1, "span", 65)(17, ReferenceManagerComponent_div_86_span_17_Template, 2, 1, "span", 66)(18, ReferenceManagerComponent_div_86_span_18_Template, 2, 1, "span", 67)(19, ReferenceManagerComponent_div_86_span_19_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 68)(21, "span", 69);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ReferenceManagerComponent_div_86_span_23_Template, 3, 1, "span", 70)(24, ReferenceManagerComponent_div_86_span_24_Template, 2, 1, "span", 71)(25, ReferenceManagerComponent_div_86_span_25_Template, 2, 1, "span", 72)(26, ReferenceManagerComponent_div_86_span_26_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, ReferenceManagerComponent_div_86_p_27_Template, 3, 1, "p", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ref_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.typeColor(ref_r8.refType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.typeIcon(ref_r8.refType), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ref_r8.title);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ref_r8.authors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.journal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.publisher);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(ref_r8.refType));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.collection);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getTags(ref_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.doi);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.isbn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ref_r8.note);
  }
}
function ReferenceManagerComponent_div_87_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function ReferenceManagerComponent_div_87_i_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 100);
  }
}
function ReferenceManagerComponent_div_87_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.lookupError);
  }
}
function ReferenceManagerComponent_div_87_div_17_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.lookupResult.year);
  }
}
function ReferenceManagerComponent_div_87_div_17_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.lookupResult.publisher);
  }
}
function ReferenceManagerComponent_div_87_div_17_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.lookupResult.isbn);
  }
}
function ReferenceManagerComponent_div_87_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 103);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 104);
    \u0275\u0275template(6, ReferenceManagerComponent_div_87_div_17_span_6_Template, 2, 1, "span", 105)(7, ReferenceManagerComponent_div_87_div_17_span_7_Template, 2, 1, "span", 105)(8, ReferenceManagerComponent_div_87_div_17_span_8_Template, 2, 1, "span", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 106);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_87_div_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.importLookupResult());
    });
    \u0275\u0275element(10, "i", 10);
    \u0275\u0275text(11, "Importer cette r\xE9f\xE9rence ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.lookupResult.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.lookupResult.authors);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.lookupResult.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lookupResult.publisher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lookupResult.isbn);
  }
}
function ReferenceManagerComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_87_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showIsbnModal = false);
    });
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_87_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "h5", 87);
    \u0275\u0275element(4, "i", 88);
    \u0275\u0275text(5, "Recherche ISBN / DOI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_87_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showIsbnModal = false);
    });
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 91);
    \u0275\u0275text(9, " Entrez un ISBN (livre) ou un DOI (article) pour remplir automatiquement les m\xE9tadonn\xE9es depuis OpenLibrary et CrossRef. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 92)(11, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_87_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.isbnInput, $event) || (ctx_r2.isbnInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ReferenceManagerComponent_div_87_Template_input_keyup_enter_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.lookupIdentifier());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 94);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_87_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.lookupIdentifier());
    });
    \u0275\u0275template(13, ReferenceManagerComponent_div_87_span_13_Template, 1, 0, "span", 95)(14, ReferenceManagerComponent_div_87_i_14_Template, 1, 0, "i", 96);
    \u0275\u0275text(15, "Chercher ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ReferenceManagerComponent_div_87_div_16_Template, 2, 1, "div", 97)(17, ReferenceManagerComponent_div_87_div_17_Template, 12, 5, "div", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.isbnInput);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.lookupLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lookupLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.lookupLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.lookupError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.lookupResult);
  }
}
function ReferenceManagerComponent_div_88_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function ReferenceManagerComponent_div_88_i_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
  }
}
function ReferenceManagerComponent_div_88_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.zoteroError);
  }
}
function ReferenceManagerComponent_div_88_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "i", 122);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.zoteroImported, " r\xE9f\xE9rence(s) import\xE9e(s) avec succ\xE8s ! ");
  }
}
function ReferenceManagerComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_88_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showZoteroModal = false);
    });
    \u0275\u0275elementStart(1, "div", 108);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_88_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "h5", 87);
    \u0275\u0275element(4, "i", 109);
    \u0275\u0275text(5, "Connecter Zotero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_88_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showZoteroModal = false);
    });
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 91);
    \u0275\u0275text(9, " Importez vos r\xE9f\xE9rences directement depuis votre biblioth\xE8que Zotero en ligne. N\xE9cessite un compte Zotero et une cl\xE9 API. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 110)(11, "strong");
    \u0275\u0275text(12, "Comment obtenir votre cl\xE9 API :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " 1. Allez sur ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "zotero.org/settings/keys");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "br");
    \u0275\u0275text(18, " 2. Cr\xE9ez une nouvelle cl\xE9 avec acc\xE8s en lecture \xE0 votre biblioth\xE8que");
    \u0275\u0275element(19, "br");
    \u0275\u0275text(20, " 3. Notez votre ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22, "User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " (visible sur la m\xEAme page) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 111)(25, "label", 112);
    \u0275\u0275text(26, "User ID Zotero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_88_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zoteroUserId, $event) || (ctx_r2.zoteroUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 114)(29, "label", 112);
    \u0275\u0275text(30, "Cl\xE9 API Zotero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_88_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zoteroApiKey, $event) || (ctx_r2.zoteroApiKey = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 116);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_88_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fetchZoteroRefs());
    });
    \u0275\u0275template(33, ReferenceManagerComponent_div_88_span_33_Template, 1, 0, "span", 95)(34, ReferenceManagerComponent_div_88_i_34_Template, 1, 0, "i", 117);
    \u0275\u0275text(35, "Importer depuis Zotero ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ReferenceManagerComponent_div_88_div_36_Template, 2, 1, "div", 118)(37, ReferenceManagerComponent_div_88_div_37_Template, 3, 1, "div", 119);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(27);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zoteroUserId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zoteroApiKey);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.zoteroLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.zoteroLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.zoteroLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.zoteroError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.zoteroImported > 0);
  }
}
function ReferenceManagerComponent_div_89_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_button_9_Template_button_click_0_listener() {
      const t_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.refType = t_r15.type);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-primary", ctx_r2.form.refType === t_r15.type)("btn-outline-secondary", ctx_r2.form.refType !== t_r15.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r15.icon, " ", t_r15.label, " ");
  }
}
function ReferenceManagerComponent_div_89_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 138)(2, "label", 112);
    \u0275\u0275text(3, "\xC9diteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_37_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.publisher, $event) || (ctx_r2.form.publisher = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138)(6, "label", 112);
    \u0275\u0275text(7, "Lieu de publication");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_37_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.place, $event) || (ctx_r2.form.place = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 130)(10, "label", 112);
    \u0275\u0275text(11, "ISBN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_37_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isbn, $event) || (ctx_r2.form.isbn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 130)(14, "label", 112);
    \u0275\u0275text(15, "\xC9dition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_37_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.edition, $event) || (ctx_r2.form.edition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 130)(18, "label", 112);
    \u0275\u0275text(19, "Pages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 151);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_37_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.pages, $event) || (ctx_r2.form.pages = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.publisher);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.place);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isbn);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.edition);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.pages);
  }
}
function ReferenceManagerComponent_div_89_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 126)(2, "label", 112);
    \u0275\u0275text(3, "Revue / Journal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.journal, $event) || (ctx_r2.form.journal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 153)(6, "label", 112);
    \u0275\u0275text(7, "Volume");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 154);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.volume, $event) || (ctx_r2.form.volume = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 153)(10, "label", 112);
    \u0275\u0275text(11, "Num\xE9ro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 155);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.issue, $event) || (ctx_r2.form.issue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 153)(14, "label", 112);
    \u0275\u0275text(15, "Page d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.startPage, $event) || (ctx_r2.form.startPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 153)(18, "label", 112);
    \u0275\u0275text(19, "Page fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.endPage, $event) || (ctx_r2.form.endPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 126)(22, "label", 112);
    \u0275\u0275text(23, "DOI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 158);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_38_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.doi, $event) || (ctx_r2.form.doi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.journal);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.volume);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.issue);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.startPage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.endPage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.doi);
  }
}
function ReferenceManagerComponent_div_89_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 126)(2, "label", 112);
    \u0275\u0275text(3, "URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_39_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.url, $event) || (ctx_r2.form.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138)(6, "label", 112);
    \u0275\u0275text(7, "Date de consultation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 160);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_39_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.accessDate, $event) || (ctx_r2.form.accessDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.url);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.accessDate);
  }
}
function ReferenceManagerComponent_div_89_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 138)(2, "label", 112);
    \u0275\u0275text(3, "Universit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 161);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_40_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.university, $event) || (ctx_r2.form.university = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 138)(6, "label", 112);
    \u0275\u0275text(7, "Type de th\xE8se");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 132);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_ng_container_40_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.form.thesisType, $event) || (ctx_r2.form.thesisType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(9, "option", 162);
    \u0275\u0275text(10, "Th\xE8se de doctorat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 163);
    \u0275\u0275text(12, "M\xE9moire de master");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 164);
    \u0275\u0275text(14, "M\xE9moire de licence");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.university);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.thesisType);
  }
}
function ReferenceManagerComponent_div_89_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
}
function ReferenceManagerComponent_div_89_i_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 165);
  }
}
function ReferenceManagerComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275elementStart(1, "div", 123);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "h5", 87);
    \u0275\u0275element(4, "i");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 104);
    \u0275\u0275template(9, ReferenceManagerComponent_div_89_button_9_Template, 2, 6, "button", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 125)(11, "div", 126)(12, "label", 112);
    \u0275\u0275text(13, "Titre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.title, $event) || (ctx_r2.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 126)(16, "label", 112);
    \u0275\u0275text(17, "Auteur(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.authors, $event) || (ctx_r2.form.authors = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 129);
    \u0275\u0275text(20, "S\xE9parez les auteurs par des virgules");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 130)(22, "label", 112);
    \u0275\u0275text(23, "Ann\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.year, $event) || (ctx_r2.form.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 130)(26, "label", 112);
    \u0275\u0275text(27, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "select", 132);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.language, $event) || (ctx_r2.form.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 133);
    \u0275\u0275text(30, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 134);
    \u0275\u0275text(32, "Anglais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 135);
    \u0275\u0275text(34, "Arabe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 136);
    \u0275\u0275text(36, "Autre");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(37, ReferenceManagerComponent_div_89_ng_container_37_Template, 21, 5, "ng-container", 137)(38, ReferenceManagerComponent_div_89_ng_container_38_Template, 25, 6, "ng-container", 137)(39, ReferenceManagerComponent_div_89_ng_container_39_Template, 9, 2, "ng-container", 137)(40, ReferenceManagerComponent_div_89_ng_container_40_Template, 15, 2, "ng-container", 137);
    \u0275\u0275elementStart(41, "div", 138)(42, "label", 112);
    \u0275\u0275text(43, "Collection / Dossier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.collection, $event) || (ctx_r2.form.collection = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 138)(46, "label", 112);
    \u0275\u0275text(47, "Mots-cl\xE9s (tags)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.tags, $event) || (ctx_r2.form.tags = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 126)(50, "label", 112);
    \u0275\u0275text(51, "R\xE9sum\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "textarea", 141);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_textarea_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.abstract_, $event) || (ctx_r2.form.abstract_ = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 126)(54, "label", 112);
    \u0275\u0275text(55, "Note personnelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "textarea", 142);
    \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_div_89_Template_textarea_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.note, $event) || (ctx_r2.form.note = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 143)(58, "button", 5);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showForm = false);
    });
    \u0275\u0275text(59, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 144);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_89_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveRef());
    });
    \u0275\u0275template(61, ReferenceManagerComponent_div_89_span_61_Template, 1, 0, "span", 95)(62, ReferenceManagerComponent_div_89_i_62_Template, 1, 0, "i", 145);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("bi bi-", (ctx_r2.editingRef == null ? null : ctx_r2.editingRef.id) ? "pencil" : "plus-circle", " me-2 text-primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.editingRef == null ? null : ctx_r2.editingRef.id) ? "Modifier" : "Ajouter", " une r\xE9f\xE9rence ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.refTypes);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.authors);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.year);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.language);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.form.refType === "book");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.refType === "article" || ctx_r2.form.refType === "journal");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.refType === "website");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.refType === "thesis");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.collection);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.tags);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.abstract_);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.note);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.editingRef == null ? null : ctx_r2.editingRef.id) ? "Mettre \xE0 jour" : "Enregistrer", " ");
  }
}
function ReferenceManagerComponent_div_90_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 146);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_button_13_Template_button_click_0_listener() {
      const s_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.activeStyle = s_r22;
      return \u0275\u0275resetView(ctx_r2.generateCitation());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("btn-primary", ctx_r2.activeStyle === s_r22)("btn-outline-secondary", ctx_r2.activeStyle !== s_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r22, " ");
  }
}
function ReferenceManagerComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCitationModal = false);
    });
    \u0275\u0275elementStart(1, "div", 166);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 86)(3, "h5", 87);
    \u0275\u0275element(4, "i", 167);
    \u0275\u0275text(5, "G\xE9n\xE9rer une citation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCitationModal = false);
    });
    \u0275\u0275element(7, "i", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 168);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 91);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 169);
    \u0275\u0275template(13, ReferenceManagerComponent_div_90_button_13_Template, 2, 5, "button", 124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 170);
    \u0275\u0275element(15, "div", 171);
    \u0275\u0275pipe(16, "markdownItalic");
    \u0275\u0275elementStart(17, "button", 172);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyCitation());
    });
    \u0275\u0275element(18, "i", 173);
    \u0275\u0275text(19, "Copier ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 174)(21, "div", 175)(22, "h6", 176);
    \u0275\u0275text(23, "Export BibTeX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 177);
    \u0275\u0275listener("click", function ReferenceManagerComponent_div_90_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyBibTeX());
    });
    \u0275\u0275element(25, "i", 173);
    \u0275\u0275text(26, "Copier BibTeX ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "pre", 178);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.citationRef == null ? null : ctx_r2.citationRef.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.citationRef == null ? null : ctx_r2.citationRef.authors);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.citationStyles);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 5, ctx_r2.citationText), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r2.bibtexText);
  }
}
var ReferenceManagerComponent = class _ReferenceManagerComponent {
  constructor(refService) {
    this.refService = refService;
    this.refs = [];
    this.filteredRefs = [];
    this.collections = [];
    this.activeCollection = "";
    this.searchQuery = "";
    this.sortBy = "date";
    this.loading = true;
    this.saving = false;
    this.showForm = false;
    this.editingRef = null;
    this.form = { refType: "book" };
    this.showCitationModal = false;
    this.citationRef = null;
    this.citationText = "";
    this.bibtexText = "";
    this.activeStyle = "APA";
    this.citationStyles = ["APA", "MLA", "Chicago", "IEEE", "Vancouver"];
    this.showIsbnModal = false;
    this.isbnInput = "";
    this.lookupLoading = false;
    this.lookupError = "";
    this.lookupResult = null;
    this.showZoteroModal = false;
    this.zoteroUserId = "";
    this.zoteroApiKey = "";
    this.zoteroLoading = false;
    this.zoteroError = "";
    this.zoteroImported = 0;
    this.activeTypeFilter = "";
    this.refTypes = [
      { type: "book", label: "Livre", icon: "\u{1F4D6}" },
      { type: "article", label: "Article", icon: "\u{1F4F0}" },
      { type: "journal", label: "Revue", icon: "\u{1F4D3}" },
      { type: "website", label: "Site Web", icon: "\u{1F310}" },
      { type: "thesis", label: "Th\xE8se", icon: "\u{1F393}" },
      { type: "conference", label: "Conf\xE9rence", icon: "\u{1F3A4}" }
    ];
  }
  ngOnInit() {
    this.loadRefs();
  }
  loadRefs() {
    this.loading = true;
    this.refService.getReferences().subscribe({
      next: (refs) => {
        this.refs = refs;
        this.filterRefs();
        this.loading = false;
        this.refService.getCollections().subscribe((c) => this.collections = c);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  filterByType(type) {
    this.activeTypeFilter = type;
    this.activeCollection = "__type__" + type;
    this.filterRefs();
  }
  filterRefs() {
    let list = [...this.refs];
    if (this.activeCollection.startsWith("__type__")) {
      list = list.filter((r) => r.refType === this.activeTypeFilter);
    } else if (this.activeCollection) {
      list = list.filter((r) => r.collection === this.activeCollection);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter((r) => r.title?.toLowerCase().includes(q) || r.authors?.toLowerCase().includes(q) || r.tags?.toLowerCase().includes(q));
    }
    list.sort((a, b) => {
      if (this.sortBy === "title")
        return (a.title ?? "").localeCompare(b.title ?? "");
      if (this.sortBy === "author")
        return (a.authors ?? "").localeCompare(b.authors ?? "");
      if (this.sortBy === "year")
        return (b.year ?? "").localeCompare(a.year ?? "");
      return new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime();
    });
    this.filteredRefs = list;
  }
  countType(type) {
    return this.refs.filter((r) => r.refType === type).length;
  }
  typeIcon(t) {
    return this.refTypes.find((x) => x.type === t)?.icon ?? "\u{1F4C4}";
  }
  typeLabel(t) {
    return this.refTypes.find((x) => x.type === t)?.label ?? t;
  }
  typeColor(t) {
    const m = {
      book: "#dbeafe",
      article: "#dcfce7",
      journal: "#fef9c3",
      website: "#fce7f3",
      thesis: "#f3e8ff",
      conference: "#ffedd5"
    };
    return m[t] ?? "#f1f5f9";
  }
  getTags(r) {
    return r.tags ? r.tags.split(",").map((t) => t.trim()).filter(Boolean) : [];
  }
  // ── Form ────────────────────────────────────────────────────────────────────
  openForm(ref) {
    this.editingRef = ref ?? null;
    this.form = ref ? __spreadValues({}, ref) : { refType: "book" };
    this.showForm = true;
  }
  saveRef() {
    if (!this.form.title?.trim())
      return;
    this.saving = true;
    const obs = this.editingRef?.id ? this.refService.update(this.editingRef.id, this.form) : this.refService.create(this.form);
    obs.subscribe({
      next: (saved) => {
        if (this.editingRef?.id) {
          const i = this.refs.findIndex((r) => r.id === saved.id);
          if (i >= 0)
            this.refs[i] = saved;
        } else {
          this.refs.unshift(saved);
        }
        this.filterRefs();
        this.refService.getCollections().subscribe((c) => this.collections = c);
        this.showForm = false;
        this.saving = false;
      },
      error: () => {
        this.saving = false;
      }
    });
  }
  deleteRef(ref) {
    if (!confirm(`Supprimer \xAB ${ref.title} \xBB ?`))
      return;
    this.refService.delete(ref.id).subscribe(() => {
      this.refs = this.refs.filter((r) => r.id !== ref.id);
      this.filterRefs();
    });
  }
  // ── Citation ────────────────────────────────────────────────────────────────
  openCitation(ref) {
    this.citationRef = ref;
    this.activeStyle = "APA";
    this.showCitationModal = true;
    this.generateCitation();
  }
  generateCitation() {
    if (!this.citationRef)
      return;
    this.citationText = this.refService.formatCitation(this.citationRef, this.activeStyle);
    this.bibtexText = this.refService.toBibTeX(this.citationRef);
  }
  copyCitation() {
    const plain = this.citationText.replace(/\*/g, "");
    navigator.clipboard.writeText(plain).then(() => alert("Citation copi\xE9e !"));
  }
  copyBibTeX() {
    navigator.clipboard.writeText(this.bibtexText).then(() => alert("BibTeX copi\xE9 !"));
  }
  // ── Export ──────────────────────────────────────────────────────────────────
  exportBibTeX() {
    const content = this.filteredRefs.map((r) => this.refService.toBibTeX(r)).join("\n\n");
    this.downloadFile(content, "references.bib", "text/plain");
  }
  exportRIS() {
    const lines = [];
    for (const r of this.filteredRefs) {
      const t = r.refType === "article" || r.refType === "journal" ? "JOUR" : "BOOK";
      lines.push(`TY  - ${t}`);
      if (r.title)
        lines.push(`TI  - ${r.title}`);
      if (r.authors)
        r.authors.split(",").forEach((a) => lines.push(`AU  - ${a.trim()}`));
      if (r.year)
        lines.push(`PY  - ${r.year}`);
      if (r.publisher)
        lines.push(`PB  - ${r.publisher}`);
      if (r.place)
        lines.push(`CY  - ${r.place}`);
      if (r.isbn)
        lines.push(`SN  - ${r.isbn}`);
      if (r.doi)
        lines.push(`DO  - ${r.doi}`);
      if (r.journal)
        lines.push(`JO  - ${r.journal}`);
      if (r.url)
        lines.push(`UR  - ${r.url}`);
      lines.push("ER  - \n");
    }
    this.downloadFile(lines.join("\n"), "references.ris", "text/plain");
  }
  downloadFile(content, name, mime) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    URL.revokeObjectURL(a.href);
  }
  // ── ISBN / DOI lookup ────────────────────────────────────────────────────────
  openIsbnLookup() {
    this.showIsbnModal = true;
    this.lookupResult = null;
    this.lookupError = "";
  }
  lookupIdentifier() {
    const val = this.isbnInput.trim();
    if (!val)
      return;
    this.lookupLoading = true;
    this.lookupError = "";
    this.lookupResult = null;
    if (val.startsWith("10.") || val.includes("/")) {
      this.refService.lookupDOI(val).subscribe({
        next: (res) => {
          if (res?.error) {
            this.lookupError = "DOI introuvable via CrossRef.";
            this.lookupLoading = false;
            return;
          }
          const w = res.message;
          const authors = (w.author ?? []).map((a) => [a.given, a.family].filter(Boolean).join(" ")).join(", ");
          this.lookupResult = {
            refType: "article",
            title: (w.title ?? [""])[0],
            authors,
            year: w.published?.["date-parts"]?.[0]?.[0]?.toString(),
            journal: (w["container-title"] ?? [""])[0],
            doi: val,
            volume: w.volume,
            issue: w.issue,
            startPage: w.page?.split("-")[0],
            endPage: w.page?.split("-")[1]
          };
          this.lookupLoading = false;
        },
        error: () => {
          this.lookupError = "DOI introuvable via CrossRef.";
          this.lookupLoading = false;
        }
      });
    } else {
      const clean = val.replace(/[-\s]/g, "");
      this.refService.lookupISBN(clean).subscribe({
        next: (data) => {
          if (data?.error) {
            this.lookupError = "ISBN introuvable sur OpenLibrary.";
            this.lookupLoading = false;
            return;
          }
          const key = `ISBN:${clean}`;
          const book = data[key];
          if (!book) {
            this.lookupError = "ISBN introuvable sur OpenLibrary.";
            this.lookupLoading = false;
            return;
          }
          const authors = (book.authors ?? []).map((a) => a.name).join(", ");
          this.lookupResult = {
            refType: "book",
            title: book.title,
            authors,
            year: book.publish_date?.replace(/\D.*/, ""),
            publisher: (book.publishers ?? [{}])[0]?.name,
            place: (book.publish_places ?? [{}])[0]?.name,
            isbn: clean,
            pages: book.number_of_pages?.toString()
          };
          this.lookupLoading = false;
        },
        error: () => {
          this.lookupError = "ISBN introuvable sur OpenLibrary.";
          this.lookupLoading = false;
        }
      });
    }
  }
  importLookupResult() {
    if (!this.lookupResult)
      return;
    this.refService.create(this.lookupResult).subscribe((saved) => {
      this.refs.unshift(saved);
      this.filterRefs();
      this.showIsbnModal = false;
    });
  }
  // ── Zotero Web API ───────────────────────────────────────────────────────────
  openZoteroImport() {
    this.showZoteroModal = true;
    this.zoteroError = "";
    this.zoteroImported = 0;
  }
  fetchZoteroRefs() {
    if (!this.zoteroUserId || !this.zoteroApiKey) {
      this.zoteroError = "User ID et cl\xE9 API requis.";
      return;
    }
    this.zoteroLoading = true;
    this.zoteroError = "";
    this.zoteroImported = 0;
    this.refService.lookupZotero(this.zoteroUserId, this.zoteroApiKey).subscribe({
      next: (items) => {
        const toCreate = [];
        for (const item of items) {
          const d = item.data;
          if (!d.title)
            continue;
          const authors = (d.creators ?? []).filter((c) => c.creatorType === "author").map((c) => [c.firstName, c.lastName].filter(Boolean).join(" ")).join(", ");
          const typeMap = {
            book: "book",
            journalArticle: "article",
            magazineArticle: "article",
            thesis: "thesis",
            webpage: "website",
            conferencePaper: "conference"
          };
          toCreate.push({
            refType: typeMap[d.itemType] ?? "book",
            title: d.title,
            authors,
            year: d.date?.substring(0, 4),
            publisher: d.publisher,
            place: d.place,
            isbn: d.ISBN,
            doi: d.DOI,
            journal: d.publicationTitle,
            volume: d.volume,
            issue: d.issue,
            url: d.url,
            university: d.university,
            thesisType: d.thesisType,
            note: d.abstractNote,
            collection: "Zotero"
          });
        }
        let count = 0;
        const save = (i) => {
          if (i >= toCreate.length) {
            this.zoteroImported = count;
            this.zoteroLoading = false;
            this.loadRefs();
            return;
          }
          this.refService.create(toCreate[i]).subscribe({
            next: () => {
              count++;
              save(i + 1);
            },
            error: () => save(i + 1)
          });
        };
        save(0);
      },
      error: () => {
        this.zoteroError = "Connexion \xE0 Zotero \xE9chou\xE9e. V\xE9rifiez votre User ID et cl\xE9 API.";
        this.zoteroLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function ReferenceManagerComponent_Factory(t) {
      return new (t || _ReferenceManagerComponent)(\u0275\u0275directiveInject(ReferenceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReferenceManagerComponent, selectors: [["app-reference-manager"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 91, vars: 20, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"], [1, "bi", "bi-upc-scan", "me-1"], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "bi", "bi-cloud-download", "me-1"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], [1, "row", "g-3", "mb-4"], [1, "col-6", "col-md-3"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "d-flex", "gap-3", "align-items-start"], [1, "collections-sidebar"], [1, "sidebar-section"], [1, "sidebar-label"], [1, "sidebar-item", 3, "click"], [1, "bi", "bi-collection", "me-2"], [1, "ms-auto", "badge", "bg-light", "text-secondary"], ["class", "sidebar-item", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "sidebar-section", 4, "ngIf"], [1, "flex-grow-1", "min-w-0"], [1, "d-flex", "gap-2", "mb-3", "align-items-center", "flex-wrap"], [1, "input-group", "input-group-sm", "flex-grow-1", 2, "max-width", "320px"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["placeholder", "Rechercher titre, auteur\u2026", 1, "form-control", "border-start-0", 3, "ngModelChange", "input", "ngModel"], [1, "form-select", "form-select-sm", 2, "width", "160px", 3, "ngModelChange", "change", "ngModel"], ["value", "date"], ["value", "title"], ["value", "author"], ["value", "year"], [1, "ms-auto", "d-flex", "gap-2"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], [1, "bi", "bi-filetype-raw", "me-1"], [1, "bi", "bi-download", "me-1"], ["class", "text-center py-5", 4, "ngIf"], ["class", "empty-state text-center py-5", 4, "ngIf"], ["class", "ref-card", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "me-2"], [1, "bi", "bi-folder2", "me-2", "text-warning"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "empty-state", "text-center", "py-5"], [2, "font-size", "3.5rem"], [1, "mt-3", "fw-bold"], [1, "ref-card"], [1, "d-flex", "align-items-start", "gap-3"], [1, "ref-type-badge"], [1, "d-flex", "align-items-start", "justify-content-between", "gap-2"], [1, "ref-title", "mb-0"], [1, "d-flex", "gap-1", "flex-shrink-0"], ["title", "G\xE9n\xE9rer citation", 1, "btn", "btn-xs", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-quote"], ["title", "Modifier", 1, "btn", "btn-xs", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Supprimer", 1, "btn", "btn-xs", "btn-outline-danger", 3, "click"], [1, "bi", "bi-trash"], [1, "ref-meta"], ["class", "ref-authors", 4, "ngIf"], ["class", "ref-year", 4, "ngIf"], ["class", "ref-journal", 4, "ngIf"], [1, "d-flex", "gap-2", "mt-1", "flex-wrap"], [1, "badge", "bg-light", "text-secondary", 2, "font-size", ".65rem"], ["class", "badge bg-warning bg-opacity-25 text-warning-emphasis", "style", "font-size:.65rem", 4, "ngIf"], ["class", "badge bg-primary bg-opacity-10 text-primary", "style", "font-size:.65rem", 4, "ngFor", "ngForOf"], ["class", "badge bg-info bg-opacity-10 text-info", "style", "font-size:.65rem", 4, "ngIf"], ["class", "badge bg-light text-secondary", "style", "font-size:.65rem", 4, "ngIf"], ["class", "small text-muted mt-1 mb-0", 4, "ngIf"], [1, "ref-authors"], [1, "ref-year"], [1, "ref-journal"], [1, "badge", "bg-warning", "bg-opacity-25", "text-warning-emphasis", 2, "font-size", ".65rem"], [1, "bi", "bi-folder2", "me-1"], [1, "badge", "bg-primary", "bg-opacity-10", "text-primary", 2, "font-size", ".65rem"], [1, "badge", "bg-info", "bg-opacity-10", "text-info", 2, "font-size", ".65rem"], [1, "small", "text-muted", "mt-1", "mb-0"], [1, "bi", "bi-sticky", "me-1"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "480px", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], [1, "bi", "bi-upc-scan", "me-2", "text-primary"], [1, "btn", "btn-sm", "btn-ghost", 3, "click"], [1, "bi", "bi-x-lg"], [1, "small", "text-muted", "mb-3"], [1, "input-group", "mb-3"], ["placeholder", "978-2-7236-0009-0 ou 10.1000/xyz123", 1, "form-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-search me-1", 4, "ngIf"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], ["class", "card border-0 bg-light p-3", "style", "border-radius:10px", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-search", "me-1"], [1, "alert", "alert-danger", "py-2", "small"], [1, "card", "border-0", "bg-light", "p-3", 2, "border-radius", "10px"], [1, "small", "text-muted", "mb-2"], [1, "d-flex", "gap-2", "flex-wrap", "mb-3"], ["class", "badge bg-light text-dark", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "badge", "bg-light", "text-dark"], [1, "modal-box", 2, "max-width", "520px", 3, "click"], [1, "bi", "bi-cloud-download", "me-2", "text-success"], [1, "alert", "alert-info", "py-2", "small", "mb-3"], [1, "mb-2"], [1, "form-label", "small", "fw-semibold"], ["placeholder", "Ex: 1234567", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "mb-3"], ["type", "password", "placeholder", "Votre cl\xE9 API\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], ["class", "bi bi-cloud-download me-1", 4, "ngIf"], ["class", "alert alert-danger py-2 small mt-2", 4, "ngIf"], ["class", "alert alert-success py-2 small mt-2", 4, "ngIf"], [1, "alert", "alert-danger", "py-2", "small", "mt-2"], [1, "alert", "alert-success", "py-2", "small", "mt-2"], [1, "bi", "bi-check-circle", "me-1"], [1, "modal-box", 3, "click"], ["class", "btn btn-sm", 3, "btn-primary", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], [1, "row", "g-2"], [1, "col-12"], ["placeholder", "Titre complet", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "B\xE2, Mariama, Kane, Cheikh Hamidou (virgule entre les auteurs)", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-text"], [1, "col-md-4"], ["placeholder", "2024", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Fran\xE7ais"], ["value", "Anglais"], ["value", "Arabe"], ["value", "Autre"], [4, "ngIf"], [1, "col-md-6"], ["placeholder", "Ex: Cours GL, Litt\xE9rature africaine\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "colonialisme, roman, 20e si\xE8cle", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "R\xE9sum\xE9 optionnel\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Vos notes\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], ["class", "bi bi-check2 me-1", 4, "ngIf"], [1, "btn", "btn-sm", 3, "click"], ["placeholder", "Pr\xE9sence Africaine", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Paris", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "978-\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "3e \xE9d.", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "250", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom de la revue", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["placeholder", "12", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "3", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "45", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "67", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "10.1000/xyz123", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "https://\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Universit\xE9 Cheikh Anta Diop", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["value", "Th\xE8se de doctorat"], ["value", "M\xE9moire de master"], ["value", "M\xE9moire de licence"], [1, "bi", "bi-check2", "me-1"], [1, "modal-box", 2, "max-width", "680px", 3, "click"], [1, "bi", "bi-quote", "me-2", "text-primary"], [1, "small", "text-muted", "mb-1", "fw-semibold"], [1, "d-flex", "gap-2", "mb-3", "flex-wrap"], [1, "citation-box"], [1, "citation-text", 3, "innerHTML"], [1, "btn", "btn-sm", "btn-outline-secondary", "mt-2", 3, "click"], [1, "bi", "bi-clipboard", "me-1"], [1, "mt-3", "pt-3", "border-top"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "mb-0", "small", "fw-bold"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bibtex-box"]], template: function ReferenceManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F5C2}\uFE0F Gestionnaire de r\xE9f\xE9rences");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, " Biblioth\xE8que personnelle Zotero-like : g\xE9rez vos r\xE9f\xE9rences bibliographiques, g\xE9n\xE9rez des citations APA/MLA/Chicago/IEEE et exportez en BibTeX. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_8_listener() {
          return ctx.openIsbnLookup();
        });
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275text(10, "ISBN / DOI ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_11_listener() {
          return ctx.openZoteroImport();
        });
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275text(13, "Zotero Web API ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_14_listener() {
          return ctx.openForm();
        });
        \u0275\u0275element(15, "i", 10);
        \u0275\u0275text(16, "Ajouter ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14);
        \u0275\u0275text(21, "\u{1F4DA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275text(25, "R\xE9f\xE9rences totales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "div", 14);
        \u0275\u0275text(29, "\u{1F4D6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 15);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 16);
        \u0275\u0275text(33, "Livres");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 12)(35, "div", 13)(36, "div", 14);
        \u0275\u0275text(37, "\u{1F4F0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 15);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 16);
        \u0275\u0275text(41, "Articles");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 12)(43, "div", 13)(44, "div", 14);
        \u0275\u0275text(45, "\u{1F5C2}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 15);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 16);
        \u0275\u0275text(49, "Collections");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 17)(51, "div", 18)(52, "div", 19)(53, "div", 20);
        \u0275\u0275text(54, "Biblioth\xE8que");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 21);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_55_listener() {
          ctx.activeCollection = "";
          return ctx.filterRefs();
        });
        \u0275\u0275element(56, "i", 22);
        \u0275\u0275text(57, "Toutes les r\xE9f\xE9rences ");
        \u0275\u0275elementStart(58, "span", 23);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(60, ReferenceManagerComponent_button_60_Template, 6, 5, "button", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275template(61, ReferenceManagerComponent_div_61_Template, 4, 1, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 26)(63, "div", 27)(64, "div", 28)(65, "span", 29);
        \u0275\u0275element(66, "i", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "input", 31);
        \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_Template_input_ngModelChange_67_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function ReferenceManagerComponent_Template_input_input_67_listener() {
          return ctx.filterRefs();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "select", 32);
        \u0275\u0275twoWayListener("ngModelChange", function ReferenceManagerComponent_Template_select_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("change", function ReferenceManagerComponent_Template_select_change_68_listener() {
          return ctx.filterRefs();
        });
        \u0275\u0275elementStart(69, "option", 33);
        \u0275\u0275text(70, "R\xE9centes en premier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "option", 34);
        \u0275\u0275text(72, "Titre (A-Z)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "option", 35);
        \u0275\u0275text(74, "Auteur (A-Z)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "option", 36);
        \u0275\u0275text(76, "Ann\xE9e");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 37)(78, "button", 38);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_78_listener() {
          return ctx.exportBibTeX();
        });
        \u0275\u0275element(79, "i", 39);
        \u0275\u0275text(80, "BibTeX ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "button", 38);
        \u0275\u0275listener("click", function ReferenceManagerComponent_Template_button_click_81_listener() {
          return ctx.exportRIS();
        });
        \u0275\u0275element(82, "i", 40);
        \u0275\u0275text(83, "RIS ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(84, ReferenceManagerComponent_div_84_Template, 2, 0, "div", 41)(85, ReferenceManagerComponent_div_85_Template, 10, 0, "div", 42)(86, ReferenceManagerComponent_div_86_Template, 28, 14, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(87, ReferenceManagerComponent_div_87_Template, 18, 6, "div", 44)(88, ReferenceManagerComponent_div_88_Template, 38, 7, "div", 44)(89, ReferenceManagerComponent_div_89_Template, 64, 21, "div", 44)(90, ReferenceManagerComponent_div_90_Template, 29, 7, "div", 44);
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate(ctx.refs.length);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.countType("book"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.countType("article") + ctx.countType("journal"));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.collections.length);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", !ctx.activeCollection);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.refs.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.refTypes);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.collections.length);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance(10);
        \u0275\u0275property("disabled", !ctx.filteredRefs.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.filteredRefs.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredRefs.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredRefs);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIsbnModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showZoteroModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCitationModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MarkdownItalicPipe], styles: ["\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  border: 1px solid #e2e8f0;\n  transition: box-shadow .2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .08);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.collections-sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 8px;\n  height: fit-content;\n  position: sticky;\n  top: 8px;\n}\n.sidebar-section[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.sidebar-label[_ngcontent-%COMP%] {\n  font-size: .65rem;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n  padding: 6px 10px 4px;\n}\n.sidebar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 7px 10px;\n  border-radius: 8px;\n  font-size: .82rem;\n  background: none;\n  border: none;\n  text-align: left;\n  color: #334155;\n  transition: background .12s;\n  cursor: pointer;\n}\n.sidebar-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.sidebar-item.active[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n  font-weight: 600;\n}\n.ref-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 10px;\n  transition: box-shadow .15s;\n}\n.ref-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, .07);\n}\n.ref-type-badge[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  opacity: .85;\n}\n.ref-title[_ngcontent-%COMP%] {\n  font-size: .88rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.ref-meta[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: #64748b;\n  margin: 3px 0;\n}\n.ref-authors[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.ref-year[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  color: #94a3b8;\n}\n.ref-journal[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.btn-xs[_ngcontent-%COMP%] {\n  padding: 2px 7px;\n  font-size: .72rem;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #64748b;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 760px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .18);\n}\n.citation-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 16px;\n  border-left: 4px solid #6366f1;\n}\n.citation-text[_ngcontent-%COMP%] {\n  font-size: .88rem;\n  line-height: 1.7;\n  color: #1e293b;\n}\n.citation-text[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.bibtex-box[_ngcontent-%COMP%] {\n  background: #1e1e2e;\n  color: #cdd6f4;\n  border-radius: 8px;\n  padding: 14px;\n  font-size: .75rem;\n  max-height: 200px;\n  overflow-y: auto;\n  white-space: pre-wrap;\n}\n@media (max-width:768px) {\n  .d-flex.gap-3[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .collections-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    position: static;\n  }\n}\n/*# sourceMappingURL=reference-manager.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReferenceManagerComponent, { className: "ReferenceManagerComponent" });
})();
export {
  ReferenceManagerComponent
};
//# sourceMappingURL=chunk-OVI43P7V.js.map

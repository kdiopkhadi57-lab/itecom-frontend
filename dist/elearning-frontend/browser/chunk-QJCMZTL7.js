import {
  BookService
} from "./chunk-QLH3EVWR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
  HttpClient,
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
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/features/library/library.component.ts
var _c0 = (a0) => ["/library", a0, "read"];
function LibraryComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function LibraryComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(1, "i", 33);
    \u0275\u0275text(2, "Ajouter manuellement ");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function LibraryComponent_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function LibraryComponent_button_42_Template_button_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.selectedCategory = c_r5;
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("btn-primary", ctx_r1.selectedCategory === c_r5)("btn-outline-secondary", ctx_r1.selectedCategory !== c_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", c_r5, " (", ctx_r1.countByCategory(c_r5), ") ");
  }
}
function LibraryComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "p", 37);
    \u0275\u0275text(3, "Chargement de la biblioth\xE8que\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LibraryComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275elementStart(2, "p", 39);
    \u0275\u0275text(3, "Aucun livre trouv\xE9 pour ces crit\xE8res.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function LibraryComponent_div_44_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDiscoverModal());
    });
    \u0275\u0275element(5, "i", 6);
    \u0275\u0275text(6, "Chercher dans les catalogues en ligne ");
    \u0275\u0275elementEnd()();
  }
}
function LibraryComponent_div_45_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 55);
  }
  if (rf & 2) {
    const book_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", book_r8.coverUrl, \u0275\u0275sanitizeUrl)("alt", book_r8.title);
  }
}
function LibraryComponent_div_45_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const book_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(book_r8.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(book_r8.title);
  }
}
function LibraryComponent_div_45_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275text(2, "PDF");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_45_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2, "Bient\xF4t");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_45_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const book_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(book_r8.year);
  }
}
function LibraryComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275listener("click", function LibraryComponent_div_45_div_1_Template_div_click_1_listener() {
      const book_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openBook(book_r8));
    });
    \u0275\u0275elementStart(2, "div", 44);
    \u0275\u0275template(3, LibraryComponent_div_45_div_1_img_3_Template, 1, 2, "img", 45)(4, LibraryComponent_div_45_div_1_div_4_Template, 5, 2, "div", 46)(5, LibraryComponent_div_45_div_1_span_5_Template, 3, 0, "span", 47)(6, LibraryComponent_div_45_div_1_span_6_Template, 3, 0, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 49)(8, "h6", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52)(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, LibraryComponent_div_45_div_1_span_15_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const book_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getCoverColor(book_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r8.coverUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !book_r8.coverUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r8.hasFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !book_r8.hasFile);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", book_r8.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", book_r8.author, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(book_r8.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", book_r8.year);
  }
}
function LibraryComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, LibraryComponent_div_45_div_1_Template, 16, 10, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredBooks);
  }
}
function LibraryComponent_div_46_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 85);
  }
}
function LibraryComponent_div_46_i_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 86);
  }
}
function LibraryComponent_div_46_div_27_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function LibraryComponent_div_46_div_27_button_4_Template_button_click_0_listener() {
      const s_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.quickSearch(s_r11.query, s_r11.lang));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r11.label, " ");
  }
}
function LibraryComponent_div_46_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "p", 88);
    \u0275\u0275text(2, "Suggestions rapides :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275template(4, LibraryComponent_div_46_div_27_button_4_Template, 2, 1, "button", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.quickSearches);
  }
}
function LibraryComponent_div_46_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275element(1, "i", 93);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.discoverError, " ");
  }
}
function LibraryComponent_div_46_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275element(1, "div", 95);
    \u0275\u0275elementStart(2, "p", 96);
    \u0275\u0275text(3, "Recherche en cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function LibraryComponent_div_46_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.importedIds.size, " import\xE9(s) ");
  }
}
function LibraryComponent_div_46_div_30_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 122);
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", b_r12.coverUrl, \u0275\u0275sanitizeUrl)("alt", b_r12.title);
  }
}
function LibraryComponent_div_46_div_30_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123)(1, "span", 124);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.getDiscoverColor(b_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDiscoverIcon(b_r12));
  }
}
function LibraryComponent_div_46_div_30_div_7_button_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 128);
  }
}
function LibraryComponent_div_46_div_30_div_7_button_13_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 33);
  }
}
function LibraryComponent_div_46_div_30_div_7_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function LibraryComponent_div_46_div_30_div_7_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const b_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.importBook(b_r12));
    });
    \u0275\u0275template(1, LibraryComponent_div_46_div_30_div_7_button_13_span_1_Template, 1, 0, "span", 126)(2, LibraryComponent_div_46_div_30_div_7_button_13_i_2_Template, 1, 0, "i", 127);
    \u0275\u0275text(3, " Importer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.importingId === b_r12.googleId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importingId === b_r12.googleId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importingId !== b_r12.googleId);
  }
}
function LibraryComponent_div_46_div_30_div_7_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275text(2, "Import\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_46_div_30_div_7_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r12.year);
  }
}
function LibraryComponent_div_46_div_30_div_7_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r12.publisher);
  }
}
function LibraryComponent_div_46_div_30_div_7_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", b_r12.pages, " p.");
  }
}
function LibraryComponent_div_46_div_30_div_7_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r12.language);
  }
}
function LibraryComponent_div_46_div_30_div_7_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("ISBN ", b_r12.isbn, "");
  }
}
function LibraryComponent_div_46_div_30_div_7_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 132);
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2, "Lire gratuitement ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", b_r12.readUrl, \u0275\u0275sanitizeUrl);
  }
}
function LibraryComponent_div_46_div_30_div_7_a_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 134);
    \u0275\u0275element(1, "i", 135);
    \u0275\u0275text(2, "Voir sur OpenLibrary ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", b_r12.previewLink, \u0275\u0275sanitizeUrl);
  }
}
function LibraryComponent_div_46_div_30_div_7_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275text(2, "Acc\xE8s libre ");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_46_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275template(2, LibraryComponent_div_46_div_30_div_7_img_2_Template, 1, 2, "img", 104)(3, LibraryComponent_div_46_div_30_div_7_div_3_Template, 3, 3, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 106)(5, "div", 107)(6, "div", 108)(7, "h6", 109);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 110);
    \u0275\u0275element(10, "i", 111);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 112);
    \u0275\u0275template(13, LibraryComponent_div_46_div_30_div_7_button_13_Template, 4, 3, "button", 113)(14, LibraryComponent_div_46_div_30_div_7_span_14_Template, 3, 0, "span", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 115);
    \u0275\u0275template(16, LibraryComponent_div_46_div_30_div_7_span_16_Template, 2, 1, "span", 116)(17, LibraryComponent_div_46_div_30_div_7_span_17_Template, 2, 1, "span", 116)(18, LibraryComponent_div_46_div_30_div_7_span_18_Template, 2, 1, "span", 116)(19, LibraryComponent_div_46_div_30_div_7_span_19_Template, 2, 1, "span", 116)(20, LibraryComponent_div_46_div_30_div_7_span_20_Template, 2, 1, "span", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 117);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 118);
    \u0275\u0275template(24, LibraryComponent_div_46_div_30_div_7_a_24_Template, 3, 1, "a", 119)(25, LibraryComponent_div_46_div_30_div_7_a_25_Template, 3, 1, "a", 120)(26, LibraryComponent_div_46_div_30_div_7_span_26_Template, 3, 0, "span", 121);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("imported", ctx_r1.importedIds.has(b_r12.googleId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r12.coverUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !b_r12.coverUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(b_r12.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", b_r12.authors || "Auteur inconnu", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.importedIds.has(b_r12.googleId));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.importedIds.has(b_r12.googleId));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r12.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r12.publisher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r12.pages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r12.language);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r12.isbn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", b_r12.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", b_r12.isPublicDomain && b_r12.readUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !b_r12.isPublicDomain && b_r12.previewLink);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r12.isPublicDomain);
  }
}
function LibraryComponent_div_46_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 97)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " r\xE9sultats trouv\xE9s ");
    \u0275\u0275template(5, LibraryComponent_div_46_div_30_span_5_Template, 2, 1, "span", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 99);
    \u0275\u0275template(7, LibraryComponent_div_46_div_30_div_7_Template, 27, 17, "div", 100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.discoverResults.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.importedIds.size > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.discoverResults);
  }
}
function LibraryComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function LibraryComponent_div_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDiscoverModal = false);
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function LibraryComponent_div_46_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "div")(4, "h5", 66);
    \u0275\u0275text(5, "\u{1F50D} D\xE9couvrir des livres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 67);
    \u0275\u0275text(7, "Recherchez dans Google Books et importez en un clic");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 68);
    \u0275\u0275listener("click", function LibraryComponent_div_46_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showDiscoverModal = false);
    });
    \u0275\u0275element(9, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "div", 71)(12, "div", 72)(13, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_46_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.discoverQuery, $event) || (ctx_r1.discoverQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function LibraryComponent_div_46_Template_input_keydown_enter_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchExternalBooks());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_46_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.discoverLang, $event) || (ctx_r1.discoverLang = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 18);
    \u0275\u0275text(16, "Toutes langues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 75);
    \u0275\u0275text(18, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 76);
    \u0275\u0275text(20, "Anglais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 77);
    \u0275\u0275text(22, "Arabe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 78);
    \u0275\u0275listener("click", function LibraryComponent_div_46_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchExternalBooks());
    });
    \u0275\u0275template(24, LibraryComponent_div_46_span_24_Template, 1, 0, "span", 79)(25, LibraryComponent_div_46_i_25_Template, 1, 0, "i", 80);
    \u0275\u0275text(26, " Rechercher ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, LibraryComponent_div_46_div_27_Template, 5, 1, "div", 81)(28, LibraryComponent_div_46_div_28_Template, 3, 1, "div", 82)(29, LibraryComponent_div_46_div_29_Template, 4, 0, "div", 83)(30, LibraryComponent_div_46_div_30_Template, 8, 3, "div", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.discoverQuery);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.discoverLang);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r1.discoverLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.discoverLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.discoverLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.discoverResults.length && !ctx_r1.discoverLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.discoverError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.discoverLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.discoverResults.length > 0 && !ctx_r1.discoverLoading);
  }
}
function LibraryComponent_div_47_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 157);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.selectedBook.coverUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedBook.title);
  }
}
function LibraryComponent_div_47_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(ctx_r1.selectedBook.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedBook.title);
  }
}
function LibraryComponent_div_47_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275element(1, "i", 162);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBook.genre, " ");
  }
}
function LibraryComponent_div_47_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275element(1, "i", 163);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBook.language, " ");
  }
}
function LibraryComponent_div_47_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275element(1, "i", 164);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBook.year, " ");
  }
}
function LibraryComponent_div_47_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275element(1, "i", 165);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBook.pages, " pages ");
  }
}
function LibraryComponent_div_47_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275element(1, "i", 166);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedBook.publisher, " ");
  }
}
function LibraryComponent_div_47_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "i", 167);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ISBN : ", ctx_r1.selectedBook.isbn, " ");
  }
}
function LibraryComponent_div_47_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 168);
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2, "Lire le livre ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, ctx_r1.selectedBook.id));
  }
}
function LibraryComponent_div_47_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 169);
    \u0275\u0275element(1, "i", 170);
    \u0275\u0275text(2, "T\xE9l\xE9charger PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.selectedBook.fileUrl, \u0275\u0275sanitizeUrl);
  }
}
function LibraryComponent_div_47_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 171);
    \u0275\u0275element(1, "i", 133);
    \u0275\u0275text(2, "Lire en ligne ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.selectedBook.externalReadUrl, \u0275\u0275sanitizeUrl);
  }
}
function LibraryComponent_div_47_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 172);
    \u0275\u0275element(1, "i", 137);
    \u0275\u0275text(2, "Acc\xE8s libre ");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_47_div_32_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "i", 180);
    \u0275\u0275text(2, "Ou uploadez le fichier PDF du livre ci-dessous (section professeur) ");
    \u0275\u0275elementEnd();
  }
}
function LibraryComponent_div_47_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "div", 174);
    \u0275\u0275element(2, "i", 175);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Ce livre n'est pas encore disponible en lecture.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "br");
    \u0275\u0275elementStart(6, "span", 176);
    \u0275\u0275text(7, "Recherchez-le sur ");
    \u0275\u0275elementStart(8, "a", 177);
    \u0275\u0275text(9, "Internet Archive");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " ou ");
    \u0275\u0275elementStart(11, "a", 177);
    \u0275\u0275text(12, "Gallica (BnF)");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " pour lire gratuitement en ligne.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, LibraryComponent_div_47_div_32_div_14_Template, 3, 0, "div", 178);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275propertyInterpolate1("href", "https://archive.org/search?query=", ctx_r1.selectedBook.title, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("href", "https://gallica.bnf.fr/recherche/simple?lang=FR&query=", ctx_r1.selectedBook.title, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.authService.isTeacher || ctx_r1.authService.isAdmin);
  }
}
function LibraryComponent_div_47_div_33_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("text-success", !ctx_r1.uploadError)("text-danger", ctx_r1.uploadError);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.uploadMessage, " ");
  }
}
function LibraryComponent_div_47_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 181)(1, "p", 182);
    \u0275\u0275element(2, "i", 183);
    \u0275\u0275text(3, "Gestion (professeur)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 184)(5, "label", 185);
    \u0275\u0275element(6, "i", 60);
    \u0275\u0275text(7, "Uploader PDF ");
    \u0275\u0275elementStart(8, "input", 186);
    \u0275\u0275listener("change", function LibraryComponent_div_47_div_33_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUploadPdf($event, ctx_r1.selectedBook.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 187);
    \u0275\u0275element(10, "i", 188);
    \u0275\u0275text(11, "Uploader couverture ");
    \u0275\u0275elementStart(12, "input", 189);
    \u0275\u0275listener("change", function LibraryComponent_div_47_div_33_Template_input_change_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onUploadCover($event, ctx_r1.selectedBook.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 190);
    \u0275\u0275listener("click", function LibraryComponent_div_47_div_33_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteBook(ctx_r1.selectedBook.id));
    });
    \u0275\u0275element(14, "i", 191);
    \u0275\u0275text(15, "Supprimer ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, LibraryComponent_div_47_div_33_div_16_Template, 2, 5, "div", 192);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.uploadMessage);
  }
}
function LibraryComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function LibraryComponent_div_47_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal($event));
    });
    \u0275\u0275elementStart(1, "div", 138);
    \u0275\u0275listener("click", function LibraryComponent_div_47_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 139)(3, "div", 140);
    \u0275\u0275template(4, LibraryComponent_div_47_img_4_Template, 1, 2, "img", 141)(5, LibraryComponent_div_47_div_5_Template, 5, 2, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 106)(7, "div", 143)(8, "div")(9, "span", 144);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h4", 2);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 145);
    \u0275\u0275element(14, "i", 111);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 68);
    \u0275\u0275listener("click", function LibraryComponent_div_47_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedBook = null);
    });
    \u0275\u0275element(17, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 146);
    \u0275\u0275template(19, LibraryComponent_div_47_span_19_Template, 3, 1, "span", 147)(20, LibraryComponent_div_47_span_20_Template, 3, 1, "span", 147)(21, LibraryComponent_div_47_span_21_Template, 3, 1, "span", 147)(22, LibraryComponent_div_47_span_22_Template, 3, 1, "span", 147)(23, LibraryComponent_div_47_span_23_Template, 3, 1, "span", 147);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 148);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, LibraryComponent_div_47_div_26_Template, 3, 1, "div", 149);
    \u0275\u0275elementStart(27, "div", 150);
    \u0275\u0275template(28, LibraryComponent_div_47_a_28_Template, 3, 3, "a", 151)(29, LibraryComponent_div_47_a_29_Template, 3, 1, "a", 152)(30, LibraryComponent_div_47_a_30_Template, 3, 1, "a", 153)(31, LibraryComponent_div_47_span_31_Template, 3, 0, "span", 154)(32, LibraryComponent_div_47_div_32_Template, 15, 5, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, LibraryComponent_div_47_div_33_Template, 17, 1, "div", 156);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getCoverColor(ctx_r1.selectedBook));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.coverUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedBook.coverUrl);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r1.getCoverColor(ctx_r1.selectedBook));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedBook.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedBook.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedBook.author);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.genre);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.language);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.pages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.publisher);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedBook.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.isbn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.hasFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedBook.hasFile && ctx_r1.selectedBook.fileUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedBook.hasFile && ctx_r1.selectedBook.hasExternalRead && ctx_r1.selectedBook.externalReadUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedBook.hasFile && ctx_r1.selectedBook.hasExternalRead);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedBook.hasFile && !ctx_r1.selectedBook.hasExternalRead);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isTeacher || ctx_r1.authService.isAdmin);
  }
}
function LibraryComponent_div_48_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 128);
  }
}
function LibraryComponent_div_48_i_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 130);
  }
}
function LibraryComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function LibraryComponent_div_48_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddModal = false);
    });
    \u0275\u0275elementStart(1, "div", 194);
    \u0275\u0275listener("click", function LibraryComponent_div_48_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "h5", 66);
    \u0275\u0275text(4, "\u2795 Ajouter un livre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function LibraryComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddModal = false);
    });
    \u0275\u0275element(6, "i", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 195)(8, "div", 196)(9, "label", 197);
    \u0275\u0275text(10, "Titre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 198);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.title, $event) || (ctx_r1.newBook.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 196)(13, "label", 197);
    \u0275\u0275text(14, "Auteur *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 199);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.author, $event) || (ctx_r1.newBook.author = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 200)(17, "label", 197);
    \u0275\u0275text(18, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 201);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.category, $event) || (ctx_r1.newBook.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(20, "option", 202);
    \u0275\u0275text(21, "Litt\xE9rature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 203);
    \u0275\u0275text(23, "Informatique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 204);
    \u0275\u0275text(25, "Histoire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 205);
    \u0275\u0275text(27, "Sciences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 206);
    \u0275\u0275text(29, "Math\xE9matiques");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 207);
    \u0275\u0275text(31, "Philosophie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 208);
    \u0275\u0275text(33, "Autre");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 200)(35, "label", 197);
    \u0275\u0275text(36, "Genre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 209);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.genre, $event) || (ctx_r1.newBook.genre = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 200)(39, "label", 197);
    \u0275\u0275text(40, "Langue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 201);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.language, $event) || (ctx_r1.newBook.language = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option", 20);
    \u0275\u0275text(43, "Fran\xE7ais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 21);
    \u0275\u0275text(45, "Anglais");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 22);
    \u0275\u0275text(47, "Arabe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 16)(49, "label", 197);
    \u0275\u0275text(50, "Ann\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 210);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.year, $event) || (ctx_r1.newBook.year = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 16)(53, "label", 197);
    \u0275\u0275text(54, "Pages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 211);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.pages, $event) || (ctx_r1.newBook.pages = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 212)(57, "label", 197);
    \u0275\u0275text(58, "\xC9diteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 213);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.publisher, $event) || (ctx_r1.newBook.publisher = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 11)(61, "label", 197);
    \u0275\u0275text(62, "ISBN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 214);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.isbn, $event) || (ctx_r1.newBook.isbn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 196)(65, "label", 197);
    \u0275\u0275text(66, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "textarea", 215);
    \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_div_48_Template_textarea_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBook.description, $event) || (ctx_r1.newBook.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 216)(69, "button", 68);
    \u0275\u0275listener("click", function LibraryComponent_div_48_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showAddModal = false);
    });
    \u0275\u0275text(70, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "button", 125);
    \u0275\u0275listener("click", function LibraryComponent_div_48_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNewBook());
    });
    \u0275\u0275template(72, LibraryComponent_div_48_span_72_Template, 1, 0, "span", 126)(73, LibraryComponent_div_48_i_73_Template, 1, 0, "i", 217);
    \u0275\u0275text(74, "Enregistrer ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.author);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.category);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.genre);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.language);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.year);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.pages);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.publisher);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.isbn);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBook.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.savingBook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.savingBook);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.savingBook);
  }
}
var LibraryComponent = class _LibraryComponent {
  constructor(bookService, authService, http) {
    this.bookService = bookService;
    this.authService = authService;
    this.http = http;
    this.allBooks = [];
    this.filteredBooks = [];
    this.categories = [];
    this.selectedBook = null;
    this.selectedCategory = "";
    this.selectedLanguage = "";
    this.searchQuery = "";
    this.loading = true;
    this.showAddModal = false;
    this.savingBook = false;
    this.uploadMessage = "";
    this.uploadError = false;
    this.showDiscoverModal = false;
    this.discoverQuery = "";
    this.discoverLang = "fr";
    this.discoverLoading = false;
    this.discoverError = "";
    this.discoverResults = [];
    this.importedIds = /* @__PURE__ */ new Set();
    this.importingId = "";
    this.quickSearches = [
      // Littérature sénégalaise & africaine francophone
      { label: "\u{1F1F8}\u{1F1F3} Mariama B\xE2", query: "Mariama Ba", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} Ousmane Semb\xE8ne", query: "Ousmane Sembene", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} Cheikh Hamidou Kane", query: "Cheikh Hamidou Kane", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} L\xE9opold S\xE9dar Senghor", query: "L\xE9opold S\xE9dar Senghor", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} Birago Diop", query: "Birago Diop", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} Fatou Diome", query: "Fatou Diome", lang: "fr" },
      { label: "\u{1F1F8}\u{1F1F3} Boubacar Boris Diop", query: "Boubacar Boris Diop", lang: "fr" },
      { label: "\u{1F30D} Roman s\xE9n\xE9galais", query: "roman s\xE9n\xE9galais S\xE9n\xE9gal", lang: "fr" },
      { label: "\u{1F30D} Litt\xE9rature africaine", query: "litt\xE9rature africaine roman", lang: "fr" },
      { label: "\u{1F30D} N\xE9gritude po\xE9sie", query: "n\xE9gritude po\xE9sie africaine C\xE9saire Senghor", lang: "fr" },
      { label: "\u{1F30D} Ahmadou Kourouma", query: "Ahmadou Kourouma", lang: "fr" },
      { label: "\u{1F30D} Mongo Beti", query: "Mongo Beti roman", lang: "fr" },
      // Informatique
      { label: "\u{1F4BB} Algorithmes", query: "algorithmes structures de donn\xE9es", lang: "fr" },
      { label: "\u{1F3D7}\uFE0F G\xE9nie logiciel", query: "g\xE9nie logiciel conception", lang: "fr" },
      { label: "\u{1F9E0} Intelligence artificielle", query: "intelligence artificielle machine learning", lang: "fr" },
      { label: "\u{1F4D0} UML mod\xE9lisation", query: "UML mod\xE9lisation objet", lang: "fr" },
      { label: "\u{1F52C} Bases de donn\xE9es", query: "bases de donn\xE9es SQL conception", lang: "fr" },
      { label: "\u{1F310} R\xE9seaux informatiques", query: "r\xE9seaux informatiques protocoles", lang: "fr" }
    ];
    this.newBook = {
      category: "Litt\xE9rature",
      language: "Fran\xE7ais",
      genre: ""
    };
    this.coverPalette = {
      "Litt\xE9rature": "#7c3aed",
      "Informatique": "#0891b2",
      "Histoire": "#b45309",
      "Sciences": "#059669",
      "Math\xE9matiques": "#dc2626",
      "Philosophie": "#7c3aed",
      "Autre": "#475569"
    };
  }
  ngOnInit() {
    this.loadBooks();
  }
  loadBooks() {
    this.loading = true;
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.allBooks = books;
        this.categories = [...new Set(books.map((b) => b.category).filter(Boolean))].sort();
        this.applyFilters();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  applyFilters() {
    let list = this.allBooks;
    if (this.selectedCategory)
      list = list.filter((b) => b.category === this.selectedCategory);
    if (this.selectedLanguage)
      list = list.filter((b) => b.language === this.selectedLanguage);
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || (b.description ?? "").toLowerCase().includes(q));
    }
    this.filteredBooks = list;
  }
  resetFilters() {
    this.selectedCategory = "";
    this.selectedLanguage = "";
    this.searchQuery = "";
    this.applyFilters();
  }
  countByCategory(cat) {
    return this.allBooks.filter((b) => b.category === cat).length;
  }
  getCoverColor(book) {
    return this.coverPalette[book.category] ?? "#475569";
  }
  getCategoryIcon(category) {
    const icons = {
      "Litt\xE9rature": "\u{1F4D6}",
      "Informatique": "\u{1F4BB}",
      "Histoire": "\u{1F3DB}\uFE0F",
      "Sciences": "\u{1F52C}",
      "Math\xE9matiques": "\u{1F4D0}",
      "Philosophie": "\u{1F9E0}"
    };
    return icons[category] ?? "\u{1F4DA}";
  }
  openBook(book) {
    this.selectedBook = book;
    this.uploadMessage = "";
    this.uploadError = false;
  }
  closeModal(event) {
    this.selectedBook = null;
  }
  openAddModal() {
    this.newBook = { category: "Litt\xE9rature", language: "Fran\xE7ais", genre: "" };
    this.showAddModal = true;
  }
  saveNewBook() {
    if (!this.newBook.title?.trim() || !this.newBook.author?.trim())
      return;
    this.savingBook = true;
    this.bookService.createBook(this.newBook).subscribe({
      next: (book) => {
        this.allBooks.unshift(book);
        this.applyFilters();
        this.showAddModal = false;
        this.savingBook = false;
      },
      error: () => {
        this.savingBook = false;
      }
    });
  }
  // ── Discover ──────────────────────────────────────────────────────────────
  openDiscoverModal() {
    this.showDiscoverModal = true;
    this.discoverResults = [];
    this.discoverError = "";
    this.discoverQuery = "";
    this.importedIds = /* @__PURE__ */ new Set();
  }
  quickSearch(query, lang) {
    this.discoverQuery = query;
    this.discoverLang = lang;
    this.searchExternalBooks();
  }
  searchExternalBooks() {
    if (!this.discoverQuery.trim())
      return;
    this.discoverLoading = true;
    this.discoverError = "";
    this.discoverResults = [];
    const params = { q: this.discoverQuery, maxResults: 24 };
    if (this.discoverLang)
      params["lang"] = this.discoverLang;
    this.http.get("/api/lookup/books/search", { params }).subscribe({
      next: (data) => {
        this.discoverLoading = false;
        if (data?.error) {
          this.discoverError = data.error;
          return;
        }
        const items = data?.docs ?? [];
        if (!items.length) {
          this.discoverError = "Aucun r\xE9sultat. Essayez d'autres mots-cl\xE9s.";
          return;
        }
        this.discoverResults = items.map((item) => this.parseOpenLibraryBook(item));
      },
      error: (err) => {
        this.discoverLoading = false;
        if (err.status === 0) {
          this.discoverError = "Impossible de joindre le serveur. V\xE9rifiez que le backend est d\xE9marr\xE9 sur le port 8080.";
        } else if (err.status === 401 || err.status === 403) {
          this.discoverError = "Acc\xE8s refus\xE9 (erreur " + err.status + "). Reconnectez-vous et r\xE9essayez.";
        } else if (err.status === 502) {
          this.discoverError = "Google Books est temporairement indisponible. R\xE9essayez dans quelques instants.";
        } else {
          this.discoverError = "Erreur " + (err.status || "") + " : " + (err.error?.error || err.message || "Erreur inconnue");
        }
      }
    });
  }
  parseOpenLibraryBook(doc) {
    const langMap = { fre: "Fran\xE7ais", eng: "Anglais", ara: "Arabe", spa: "Espagnol", ger: "Allemand", por: "Portugais" };
    const coverId = doc.cover_i;
    const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : "";
    const isbn = (doc.isbn ?? [])[0] ?? "";
    const langs = doc.language ?? [];
    const langLabel = langs.length ? langMap[langs[0]] ?? langs[0] : "";
    const subjects = doc.subject ?? [];
    const publisher = Array.isArray(doc.publisher) ? doc.publisher[0] : doc.publisher ?? "";
    const iaId = Array.isArray(doc.ia) ? doc.ia[0] : doc.ia ?? "";
    const isPublicDomain = !!doc.public_scan_b;
    const hasFullText = !!doc.has_fulltext;
    const lendingId = doc.lending_identifier_s || doc.lending_edition_s || "";
    let readUrl = "";
    if (isPublicDomain && iaId) {
      readUrl = `https://archive.org/details/${iaId}`;
    } else if (hasFullText && iaId) {
      readUrl = `https://archive.org/details/${iaId}`;
    } else if (lendingId) {
      readUrl = `https://archive.org/details/${lendingId}`;
    } else if (doc.key) {
      readUrl = `https://openlibrary.org${doc.key}`;
    }
    return {
      googleId: doc.key ?? doc.title + Math.random(),
      title: doc.title ?? "Titre inconnu",
      authors: (doc.author_name ?? []).join(", "),
      description: Array.isArray(doc.first_sentence) ? doc.first_sentence[0] : doc.first_sentence ?? "",
      coverUrl,
      publisher,
      year: doc.first_publish_year ? String(doc.first_publish_year) : "",
      pages: doc.number_of_pages_median ?? 0,
      isbn,
      language: langLabel,
      categories: subjects.slice(0, 3).join(", "),
      previewLink: doc.key ? `https://openlibrary.org${doc.key}` : "",
      readUrl,
      isPublicDomain: isPublicDomain || hasFullText || !!lendingId
    };
  }
  importBook(b) {
    this.importingId = b.googleId;
    const category = this.guessCategory(b);
    const bookData = {
      title: b.title,
      author: b.authors,
      description: b.description,
      coverUrl: b.coverUrl,
      publisher: b.publisher,
      year: b.year ? +b.year : void 0,
      pages: b.pages || void 0,
      isbn: b.isbn,
      language: b.language || "Fran\xE7ais",
      category,
      genre: b.categories,
      available: true,
      externalReadUrl: b.readUrl || void 0
    };
    this.bookService.createBook(bookData).subscribe({
      next: (book) => {
        this.allBooks.unshift(book);
        this.applyFilters();
        if (!this.categories.includes(book.category)) {
          this.categories = [...new Set(this.allBooks.map((b2) => b2.category).filter(Boolean))].sort();
        }
        this.importedIds.add(b.googleId);
        this.importingId = "";
      },
      error: () => {
        this.importingId = "";
      }
    });
  }
  guessCategory(b) {
    const text = (b.title + " " + b.categories + " " + b.description).toLowerCase();
    if (/informatique|algorithm|programm|logiciel|code|données|réseau|java|python|sql|uml/.test(text))
      return "Informatique";
    if (/roman|poésie|littérat|fiction|conte|théâtre|novel|poem/.test(text))
      return "Litt\xE9rature";
    if (/histoire|history|afrique|coloni|africa/.test(text))
      return "Histoire";
    if (/math|algèbre|calcul|géométrie|statistique/.test(text))
      return "Math\xE9matiques";
    if (/science|physique|chimie|biolog|physic|chemi/.test(text))
      return "Sciences";
    if (/philosophi|éthique|moral|ontolog/.test(text))
      return "Philosophie";
    return "Autre";
  }
  getDiscoverColor(b) {
    const cat = this.guessCategory(b);
    return this.coverPalette[cat] ?? "#475569";
  }
  getDiscoverIcon(b) {
    return this.getCategoryIcon(this.guessCategory(b));
  }
  onUploadPdf(event, bookId) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.uploadMessage = "T\xE9l\xE9versement en cours\u2026";
    this.uploadError = false;
    this.bookService.uploadPdf(bookId, file).subscribe({
      next: () => {
        this.uploadMessage = "PDF ajout\xE9 avec succ\xE8s !";
        this.loadBooks();
      },
      error: () => {
        this.uploadMessage = "Erreur lors du t\xE9l\xE9versement.";
        this.uploadError = true;
      }
    });
  }
  onUploadCover(event, bookId) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.uploadMessage = "T\xE9l\xE9versement en cours\u2026";
    this.uploadError = false;
    this.bookService.uploadCover(bookId, file).subscribe({
      next: () => {
        this.uploadMessage = "Couverture ajout\xE9e avec succ\xE8s !";
        this.loadBooks();
      },
      error: () => {
        this.uploadMessage = "Erreur lors du t\xE9l\xE9versement.";
        this.uploadError = true;
      }
    });
  }
  deleteBook(id) {
    if (!confirm("Supprimer ce livre de la biblioth\xE8que ?"))
      return;
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.allBooks = this.allBooks.filter((b) => b.id !== id);
        this.applyFilters();
        this.selectedBook = null;
      }
    });
  }
  static {
    this.\u0275fac = function LibraryComponent_Factory(t) {
      return new (t || _LibraryComponent)(\u0275\u0275directiveInject(BookService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LibraryComponent, selectors: [["app-library"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 17, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted", "small"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-search", "me-1"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "card", "border-0", "shadow-sm", "mb-4", 2, "border-radius", "12px"], [1, "card-body", "p-3"], [1, "row", "g-2", "align-items-center"], [1, "col-md-4"], [1, "input-group", "input-group-sm"], [1, "input-group-text", "bg-white", "border-end-0"], [1, "bi", "bi-search", "text-muted"], ["type", "text", "placeholder", "Rechercher titre, auteur\u2026", 1, "form-control", "border-start-0", 3, "ngModelChange", "input", "ngModel"], [1, "col-md-3"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "Fran\xE7ais"], ["value", "Anglais"], ["value", "Arabe"], [1, "col-md-2"], [1, "btn", "btn-sm", "btn-outline-secondary", "w-100", 3, "click"], [1, "bi", "bi-x-circle", "me-1"], [1, "d-flex", "gap-2", "flex-wrap", "mb-4"], [1, "btn", "btn-sm", "rounded-pill", 3, "click"], ["class", "btn btn-sm rounded-pill", 3, "btn-primary", "btn-outline-secondary", "click", 4, "ngFor", "ngForOf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "bi", "bi-plus-circle", "me-1"], [3, "value"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "text-muted", "mt-2", "small"], [1, "bi", "bi-book", "text-muted", 2, "font-size", "3rem"], [1, "text-muted", "mt-2"], [1, "row", "g-4"], ["class", "col-6 col-md-4 col-lg-3 col-xl-2-custom", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-3", "col-xl-2-custom"], [1, "book-card", "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "12px", "cursor", "pointer", "transition", "transform .2s,box-shadow .2s", 3, "click"], [1, "book-cover", "position-relative"], ["class", "cover-img", 3, "src", "alt", 4, "ngIf"], ["class", "cover-placeholder d-flex flex-column align-items-center justify-content-center p-2", 4, "ngIf"], ["class", "position-absolute top-0 end-0 m-1 badge bg-success", "style", "font-size:.55rem", 4, "ngIf"], ["class", "position-absolute top-0 end-0 m-1 badge bg-warning text-dark", "style", "font-size:.55rem", 4, "ngIf"], [1, "card-body", "p-2"], [1, "mb-0", "fw-bold", 2, "font-size", ".78rem", "line-height", "1.3", "display", "-webkit-box", "-webkit-line-clamp", "2", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "text-muted", "mb-1", 2, "font-size", ".7rem", "margin-top", "2px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "d-flex", "align-items-center", "gap-1", "flex-wrap"], [1, "badge", "bg-light", "text-secondary", 2, "font-size", ".58rem"], ["class", "badge bg-light text-secondary", "style", "font-size:.58rem", 4, "ngIf"], [1, "cover-img", 3, "src", "alt"], [1, "cover-placeholder", "d-flex", "flex-column", "align-items-center", "justify-content-center", "p-2"], [1, "cover-icon"], [1, "cover-title", "text-white", "text-center", "fw-bold", "mt-1"], [1, "position-absolute", "top-0", "end-0", "m-1", "badge", "bg-success", 2, "font-size", ".55rem"], [1, "bi", "bi-file-pdf", "me-1"], [1, "position-absolute", "top-0", "end-0", "m-1", "badge", "bg-warning", "text-dark", 2, "font-size", ".55rem"], [1, "bi", "bi-clock", "me-1"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 2, "max-width", "900px", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "fw-bold", "mb-0"], [1, "text-muted", "small", "mb-0"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-lg"], [1, "row", "g-2", "mb-3"], [1, "col"], [1, "input-group"], ["type", "text", "placeholder", 'Ex: "litt\xE9rature africaine", "algorithmes", "Mariama B\xE2"\u2026', 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "form-select", 2, "max-width", "130px", 3, "ngModelChange", "ngModel"], ["value", "fr"], ["value", "en"], ["value", "ar"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], ["class", "bi bi-search", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["class", "alert alert-danger py-2 small", 4, "ngIf"], ["class", "text-center py-4", 4, "ngIf"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm"], [1, "bi", "bi-search"], [1, "mb-3"], [1, "small", "text-muted", "fw-semibold", "mb-2"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "btn btn-sm btn-outline-secondary rounded-pill", 3, "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-secondary", "rounded-pill", 3, "click"], [1, "alert", "alert-danger", "py-2", "small"], [1, "bi", "bi-exclamation-triangle", "me-1"], [1, "text-center", "py-4"], [1, "spinner-border", "text-primary"], [1, "text-muted", "small", "mt-2"], [1, "small", "text-muted", "mb-3"], ["class", "ms-2 text-success", 4, "ngIf"], [1, "discover-results"], ["class", "discover-item d-flex gap-3 p-3 rounded-3 mb-2", 3, "imported", 4, "ngFor", "ngForOf"], [1, "ms-2", "text-success"], [1, "discover-item", "d-flex", "gap-3", "p-3", "rounded-3", "mb-2"], [1, "discover-cover", "flex-shrink-0"], ["class", "w-100 h-100", "style", "object-fit:cover;border-radius:6px", 3, "src", "alt", 4, "ngIf"], ["class", "no-cover d-flex align-items-center justify-content-center h-100 rounded", 3, "background", 4, "ngIf"], [1, "flex-grow-1", "min-w-0"], [1, "d-flex", "justify-content-between", "align-items-start", "gap-2"], [1, "min-w-0"], [1, "fw-bold", "mb-1", 2, "font-size", ".88rem", "line-height", "1.3"], [1, "text-muted", "mb-1", 2, "font-size", ".78rem"], [1, "bi", "bi-person", "me-1"], [1, "flex-shrink-0"], ["class", "btn btn-sm btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "badge bg-success py-2 px-3", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-1", "mb-1"], ["class", "badge bg-light text-secondary", "style", "font-size:.65rem", 4, "ngIf"], [1, "text-muted", "mb-0", 2, "font-size", ".75rem", "line-height", "1.4", "display", "-webkit-box", "-webkit-line-clamp", "2", "-webkit-box-orient", "vertical", "overflow", "hidden"], [1, "d-flex", "gap-2", "flex-wrap", "mt-1"], ["target", "_blank", "class", "btn btn-sm btn-success", "style", "font-size:.72rem;padding:2px 10px", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "small text-primary d-inline-flex align-items-center", "style", "font-size:.72rem", 3, "href", 4, "ngIf"], ["class", "badge bg-success-subtle text-success", "style", "font-size:.62rem", 4, "ngIf"], [1, "w-100", "h-100", 2, "object-fit", "cover", "border-radius", "6px", 3, "src", "alt"], [1, "no-cover", "d-flex", "align-items-center", "justify-content-center", "h-100", "rounded"], [2, "font-size", "1.6rem"], [1, "btn", "btn-sm", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-plus-circle me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "badge", "bg-success", "py-2", "px-3"], [1, "bi", "bi-check2", "me-1"], [1, "badge", "bg-light", "text-secondary", 2, "font-size", ".65rem"], ["target", "_blank", 1, "btn", "btn-sm", "btn-success", 2, "font-size", ".72rem", "padding", "2px 10px", 3, "href"], [1, "bi", "bi-book-half", "me-1"], ["target", "_blank", 1, "small", "text-primary", "d-inline-flex", "align-items-center", 2, "font-size", ".72rem", 3, "href"], [1, "bi", "bi-box-arrow-up-right", "me-1"], [1, "badge", "bg-success-subtle", "text-success", 2, "font-size", ".62rem"], [1, "bi", "bi-unlock", "me-1"], [1, "modal-box", 3, "click"], [1, "d-flex", "gap-3"], [1, "book-detail-cover", "flex-shrink-0"], ["class", "w-100 h-100", "style", "object-fit:cover;border-radius:8px", 3, "src", "alt", 4, "ngIf"], ["class", "d-flex flex-column align-items-center justify-content-center h-100 p-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "badge", "mb-2"], [1, "text-muted", "mb-2"], [1, "d-flex", "flex-wrap", "gap-2", "mb-3"], ["class", "badge bg-light text-dark", 4, "ngIf"], [1, "text-muted", "small", "mb-3", 2, "line-height", "1.6"], ["class", "small text-muted mb-3", 4, "ngIf"], [1, "d-flex", "gap-2", "flex-wrap", "align-items-center"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "class", "btn btn-outline-secondary", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "btn btn-success", 3, "href", 4, "ngIf"], ["class", "badge bg-success-subtle text-success small", 4, "ngIf"], ["class", "w-100", 4, "ngIf"], ["class", "mt-3 pt-3 border-top", 4, "ngIf"], [1, "w-100", "h-100", 2, "object-fit", "cover", "border-radius", "8px", 3, "src", "alt"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "p-3"], [2, "font-size", "3rem"], [1, "text-white", "text-center", "fw-bold", "mt-2", "small"], [1, "badge", "bg-light", "text-dark"], [1, "bi", "bi-bookmark", "me-1"], [1, "bi", "bi-translate", "me-1"], [1, "bi", "bi-calendar", "me-1"], [1, "bi", "bi-file-text", "me-1"], [1, "bi", "bi-building", "me-1"], [1, "bi", "bi-upc-scan", "me-1"], [1, "btn", "btn-primary", 3, "routerLink"], ["target", "_blank", 1, "btn", "btn-outline-secondary", 3, "href"], [1, "bi", "bi-download", "me-1"], ["target", "_blank", 1, "btn", "btn-success", 3, "href"], [1, "badge", "bg-success-subtle", "text-success", "small"], [1, "w-100"], [1, "alert", "alert-info", "py-2", "px-3", "mb-2", "small"], [1, "bi", "bi-info-circle-fill", "me-1"], [1, "text-muted"], ["target", "_blank", 3, "href"], ["class", "small text-muted", 4, "ngIf"], [1, "small", "text-muted"], [1, "bi", "bi-arrow-down", "me-1"], [1, "mt-3", "pt-3", "border-top"], [1, "small", "fw-semibold", "text-muted", "mb-2"], [1, "bi", "bi-gear", "me-1"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-sm", "btn-outline-primary", "mb-0"], ["type", "file", "accept", ".pdf", "hidden", "", 3, "change"], [1, "btn", "btn-sm", "btn-outline-secondary", "mb-0"], [1, "bi", "bi-image", "me-1"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash", "me-1"], ["class", "mt-2 small", 3, "text-success", "text-danger", 4, "ngIf"], [1, "mt-2", "small"], [1, "modal-box", 2, "max-width", "560px", 3, "click"], [1, "row", "g-2"], [1, "col-12"], [1, "form-label", "small", "fw-semibold"], ["placeholder", "Titre du livre", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Nom de l'auteur", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "form-select", "form-select-sm", 3, "ngModelChange", "ngModel"], ["value", "Litt\xE9rature"], ["value", "Informatique"], ["value", "Histoire"], ["value", "Sciences"], ["value", "Math\xE9matiques"], ["value", "Philosophie"], ["value", "Autre"], ["placeholder", "Roman, Essai, Manuel\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "2024", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "250", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "col-md-8"], ["placeholder", "Nom de l'\xE9diteur", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "978-\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "R\xE9sum\xE9 du livre\u2026", 1, "form-control", "form-control-sm", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["class", "bi bi-check2 me-1", 4, "ngIf"]], template: function LibraryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F4DA} Biblioth\xE8que");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Explorez notre collection de livres : litt\xE9rature africaine, informatique, g\xE9nie logiciel\u2026");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function LibraryComponent_Template_button_click_8_listener() {
          return ctx.openDiscoverModal();
        });
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275text(10, "D\xE9couvrir des livres ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, LibraryComponent_button_11_Template, 3, 0, "button", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
        \u0275\u0275element(18, "i", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function LibraryComponent_Template_input_input_19_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("change", function LibraryComponent_Template_select_change_21_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(22, "option", 18);
        \u0275\u0275text(23, "Toutes les cat\xE9gories");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, LibraryComponent_option_24_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 16)(26, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function LibraryComponent_Template_select_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedLanguage, $event) || (ctx.selectedLanguage = $event);
          return $event;
        });
        \u0275\u0275listener("change", function LibraryComponent_Template_select_change_26_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(27, "option", 18);
        \u0275\u0275text(28, "Toutes les langues");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option", 20);
        \u0275\u0275text(30, "Fran\xE7ais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option", 21);
        \u0275\u0275text(32, "Anglais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option", 22);
        \u0275\u0275text(34, "Arabe");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 23)(36, "button", 24);
        \u0275\u0275listener("click", function LibraryComponent_Template_button_click_36_listener() {
          return ctx.resetFilters();
        });
        \u0275\u0275element(37, "i", 25);
        \u0275\u0275text(38, "R\xE9initialiser ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 26)(40, "button", 27);
        \u0275\u0275listener("click", function LibraryComponent_Template_button_click_40_listener() {
          ctx.selectedCategory = "";
          return ctx.applyFilters();
        });
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, LibraryComponent_button_42_Template, 2, 6, "button", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, LibraryComponent_div_43_Template, 4, 0, "div", 29)(44, LibraryComponent_div_44_Template, 7, 0, "div", 29)(45, LibraryComponent_div_45_Template, 2, 1, "div", 30)(46, LibraryComponent_div_46_Template, 31, 9, "div", 31)(47, LibraryComponent_div_47_Template, 34, 22, "div", 31)(48, LibraryComponent_div_48_Template, 75, 13, "div", 31);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.authService.isTeacher || ctx.authService.isAdmin);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedLanguage);
        \u0275\u0275advance(14);
        \u0275\u0275classProp("btn-primary", ctx.selectedCategory === "")("btn-outline-secondary", ctx.selectedCategory !== "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Tous (", ctx.allBooks.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredBooks.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDiscoverModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedBook);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAddModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.book-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .12) !important;\n}\n.book-cover[_ngcontent-%COMP%] {\n  height: 180px;\n  border-radius: 12px 12px 0 0;\n  overflow: hidden;\n  position: relative;\n}\n.cover-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cover-placeholder[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.cover-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cover-title[_ngcontent-%COMP%] {\n  font-size: .68rem;\n  line-height: 1.2;\n  max-height: 4em;\n  overflow: hidden;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .5);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 24px;\n  max-width: 800px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .2);\n}\n.book-detail-cover[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 200px;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.discover-results[_ngcontent-%COMP%] {\n  max-height: 55vh;\n  overflow-y: auto;\n}\n.discover-item[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  background: #fafafa;\n  transition: background .15s;\n}\n.discover-item[_ngcontent-%COMP%]:hover {\n  background: #f0f4ff;\n}\n.discover-item.imported[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.discover-cover[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n}\n.no-cover[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n}\n/*# sourceMappingURL=library.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LibraryComponent, { className: "LibraryComponent" });
})();
export {
  LibraryComponent
};
//# sourceMappingURL=chunk-QJCMZTL7.js.map

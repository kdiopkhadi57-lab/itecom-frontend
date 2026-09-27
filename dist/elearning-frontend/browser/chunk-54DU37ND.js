import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EWJBTFX2.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-SMYYTT5I.js";
import {
  __objRest,
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10, "Informations");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 11);
    \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
    \u0275\u0275text(14, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, "Paiement");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.step === 1 ? "\u2728" : "\u{1F4B3}");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.step === 1 ? "Cr\xE9er un compte" : "Paiement inscription");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r0.step >= 1 ? "#6366f1" : "#e5e7eb");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.step >= 1 ? "#6366f1" : "#9ca3af");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r0.step >= 2 ? "#6366f1" : "#e5e7eb");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r0.step >= 2 ? "#6366f1" : "#9ca3af");
  }
}
function RegisterComponent_ng_container_3_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 15);
    \u0275\u0275text(2, "Fili\xE8re");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 35)(4, "option", 36);
    \u0275\u0275text(5, "G\xE9nie logiciel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 37);
    \u0275\u0275text(7, "R\xE9seau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 38);
    \u0275\u0275text(9, "Comptabilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 39);
    \u0275\u0275text(11, "Sant\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 40);
    \u0275\u0275text(13, "Marketing Digital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 41);
    \u0275\u0275text(15, "D\xE9veloppement Personnel");
    \u0275\u0275elementEnd()()();
  }
}
function RegisterComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 12);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_ng_container_3_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToPayment());
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "label", 15);
    \u0275\u0275text(5, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "label", 15);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "label", 15);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18)(16, "label", 15);
    \u0275\u0275text(17, "Je suis...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 20)(19, "div", 21);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_3_Template_div_click_19_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_2_0.setValue("ROLE_STUDENT"));
    });
    \u0275\u0275elementStart(20, "div", 22);
    \u0275\u0275text(21, "\u{1F468}\u200D\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 23);
    \u0275\u0275text(23, "\xC9tudiant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_3_Template_div_click_24_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_2_0.setValue("ROLE_TEACHER"));
    });
    \u0275\u0275elementStart(25, "div", 22);
    \u0275\u0275text(26, "\u{1F468}\u200D\u{1F3EB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 23);
    \u0275\u0275text(28, "Professeur");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(29, RegisterComponent_ng_container_3_div_29_Template, 16, 0, "div", 24);
    \u0275\u0275elementStart(30, "div", 18)(31, "label", 15);
    \u0275\u0275text(32, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 25);
    \u0275\u0275element(34, "input", 26);
    \u0275\u0275elementStart(35, "button", 27);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_3_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showPwd = !ctx_r0.showPwd);
    });
    \u0275\u0275element(36, "i", 28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 29)(38, "label", 15);
    \u0275\u0275text(39, "Confirmer le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 30);
    \u0275\u0275elementStart(41, "div", 31);
    \u0275\u0275text(42, "Les mots de passe ne correspondent pas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 32);
    \u0275\u0275text(44, " Continuer vers le paiement \u2192 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 33);
    \u0275\u0275text(46, " D\xE9j\xE0 inscrit ? ");
    \u0275\u0275elementStart(47, "a", 34);
    \u0275\u0275text(48, "Se connecter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_16_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.infoForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_2_0 = ctx_r0.infoForm.get("firstName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.infoForm.get("firstName")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_3_0 = ctx_r0.infoForm.get("lastName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r0.infoForm.get("lastName")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_4_0 = ctx_r0.infoForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r0.infoForm.get("email")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ((tmp_5_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_5_0.value) === "ROLE_STUDENT" ? "#ede9fe" : "#fff");
    \u0275\u0275classProp("border-primary", ((tmp_6_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_6_0.value) === "ROLE_STUDENT");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ((tmp_7_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_7_0.value) === "ROLE_STUDENT" ? "#6366f1" : "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ((tmp_8_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_8_0.value) === "ROLE_TEACHER" ? "#d1fae5" : "#fff");
    \u0275\u0275classProp("border-success", ((tmp_9_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_9_0.value) === "ROLE_TEACHER");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ((tmp_10_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_10_0.value) === "ROLE_TEACHER" ? "#059669" : "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r0.infoForm.get("role")) == null ? null : tmp_11_0.value) === "ROLE_STUDENT");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", ((tmp_12_0 = ctx_r0.infoForm.get("password")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r0.infoForm.get("password")) == null ? null : tmp_12_0.touched));
    \u0275\u0275property("type", ctx_r0.showPwd ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bi-eye", !ctx_r0.showPwd)("bi-eye-slash", ctx_r0.showPwd);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r0.infoForm.errors == null ? null : ctx_r0.infoForm.errors["passwordMismatch"]) && ((tmp_16_0 = ctx_r0.infoForm.get("confirmPassword")) == null ? null : tmp_16_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.infoForm.invalid);
  }
}
function RegisterComponent_ng_container_4_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, " Instructions Wave ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_4_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " Instructions Orange Money ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_4_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, " 1. Ouvrez l'app ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Wave");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " ou composez ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "#33# \u2192 Envoyer de l'argent");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " 2. Envoyez ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "5 000 FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " au num\xE9ro : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "77 XXX XX XX");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, " 3. Notez la r\xE9f\xE9rence de transaction et renseignez-la ci-dessous ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_4_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, " 1. Composez ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "#144#");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " \u2192 ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Transfert d'argent");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8, " 2. Envoyez ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "5 000 FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " au num\xE9ro : ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13, "77 XXX XX XX");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15, " 3. Notez la r\xE9f\xE9rence de transaction et renseignez-la ci-dessous ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_ng_container_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, RegisterComponent_ng_container_4_div_16_div_1_Template, 2, 0, "div", 55)(2, RegisterComponent_ng_container_4_div_16_div_2_Template, 2, 0, "div", 56)(3, RegisterComponent_ng_container_4_div_16_div_3_Template, 16, 0, "div", 57)(4, RegisterComponent_ng_container_4_div_16_div_4_Template, 16, 0, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ((tmp_2_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_2_0.value) === "WAVE" ? "#eff6ff" : "#fff7ed")("border-color", ((tmp_3_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_3_0.value) === "WAVE" ? "#3b82f6" : "#f97316");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_4_0.value) === "WAVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_5_0.value) === "ORANGE_MONEY");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_6_0.value) === "WAVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_7_0.value) === "ORANGE_MONEY");
  }
}
function RegisterComponent_ng_container_4_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RegisterComponent_ng_container_4_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 62);
  }
}
function RegisterComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 12);
    \u0275\u0275listener("ngSubmit", function RegisterComponent_ng_container_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 18)(3, "label", 15);
    \u0275\u0275text(4, "M\xE9thode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20)(6, "div", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_4_Template_div_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectMethod("WAVE"));
    });
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275text(8, "\u{1F30A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44);
    \u0275\u0275text(10, "Wave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_4_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectMethod("ORANGE_MONEY"));
    });
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275text(13, "\u{1F7E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 44);
    \u0275\u0275text(15, "Orange Money");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(16, RegisterComponent_ng_container_4_div_16_Template, 5, 8, "div", 45);
    \u0275\u0275elementStart(17, "div", 18)(18, "label", 15);
    \u0275\u0275text(19, "Num\xE9ro de t\xE9l\xE9phone utilis\xE9 pour le paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 29)(22, "label", 15);
    \u0275\u0275text(23, "R\xE9f\xE9rence de transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 47);
    \u0275\u0275elementStart(25, "div", 48);
    \u0275\u0275text(26, "R\xE9f\xE9rence re\xE7ue par SMS apr\xE8s votre paiement");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, RegisterComponent_ng_container_4_div_27_Template, 2, 1, "div", 49);
    \u0275\u0275elementStart(28, "div", 50)(29, "button", 51);
    \u0275\u0275listener("click", function RegisterComponent_ng_container_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.step = 1);
    });
    \u0275\u0275text(30, " \u2190 Retour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 52);
    \u0275\u0275template(32, RegisterComponent_ng_container_4_span_32_Template, 1, 0, "span", 53);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r0.payForm);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("background", ((tmp_2_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_2_0.value) === "WAVE" ? "#eff6ff" : "#fff")("border-color", ((tmp_3_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_3_0.value) === "WAVE" ? "#3b82f6" : "#e5e7eb");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ((tmp_4_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_4_0.value) === "WAVE" ? "#3b82f6" : "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ((tmp_5_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_5_0.value) === "ORANGE_MONEY" ? "#fff7ed" : "#fff")("border-color", ((tmp_6_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_6_0.value) === "ORANGE_MONEY" ? "#f97316" : "#e5e7eb");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ((tmp_7_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_7_0.value) === "ORANGE_MONEY" ? "#f97316" : "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_8_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_9_0 = ctx_r0.payForm.get("paymentPhone")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r0.payForm.get("paymentPhone")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", ((tmp_10_0 = ctx_r0.payForm.get("paymentReference")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r0.payForm.get("paymentReference")) == null ? null : tmp_10_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.error);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.loading || ctx_r0.payForm.invalid || !((tmp_12_0 = ctx_r0.payForm.get("paymentMethod")) == null ? null : tmp_12_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Envoi en cours..." : "Soumettre ma demande", " ");
  }
}
function RegisterComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64);
    \u0275\u0275text(3, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 65);
    \u0275\u0275text(5, "Demande soumise !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 66);
    \u0275\u0275text(7, "Votre demande d'inscription a bien \xE9t\xE9 re\xE7ue.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67)(9, "div", 68)(10, "span", 69);
    \u0275\u0275text(11, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Informations personnelles enregistr\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 68)(15, "span", 69);
    \u0275\u0275text(16, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Paiement soumis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 70)(20, "span", 71);
    \u0275\u0275text(21, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "En attente de validation par l'administrateur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 72)(25, "strong", 73);
    \u0275\u0275text(26, "Vous recevrez un email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 73);
    \u0275\u0275text(28, " d\xE8s que votre compte sera activ\xE9. Vous pourrez alors vous connecter et modifier votre mot de passe si vous le souhaitez.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.step = 1;
    this.loading = false;
    this.error = "";
    this.success = false;
    this.showPwd = false;
    this.infoForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", Validators.required],
      role: ["ROLE_STUDENT", Validators.required],
      specialization: ["genie-logiciel"]
    }, { validators: this.passwordMatchValidator });
    this.payForm = this.fb.group({
      paymentMethod: ["", Validators.required],
      paymentPhone: ["", Validators.required],
      paymentReference: ["", Validators.required]
    });
  }
  passwordMatchValidator(g) {
    return g.get("password")?.value === g.get("confirmPassword")?.value ? null : { passwordMismatch: true };
  }
  selectMethod(method) {
    this.payForm.get("paymentMethod")?.setValue(method);
  }
  goToPayment() {
    if (this.infoForm.invalid) {
      this.infoForm.markAllAsTouched();
      return;
    }
    this.step = 2;
  }
  onSubmit() {
    if (this.infoForm.invalid || this.payForm.invalid)
      return;
    this.loading = true;
    this.error = "";
    const _a = this.infoForm.value, { confirmPassword } = _a, infoData = __objRest(_a, ["confirmPassword"]);
    const data = __spreadValues(__spreadValues({}, infoData), this.payForm.value);
    this.authService.register(data).subscribe({
      next: (resp) => {
        if (resp.success) {
          this.success = true;
        } else {
          this.error = resp.message || "Erreur lors de l'inscription";
          this.step = 1;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || "Erreur lors de l'inscription";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [[1, "min-vh-100", "d-flex", "align-items-center", "justify-content-center", "p-4", 2, "background", "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"], [1, "card", "border-0", "shadow-lg", "p-4", "w-100", 2, "max-width", "520px", "border-radius", "20px"], ["class", "text-center mb-4", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "mb-4"], [2, "font-size", "2.2rem"], [1, "fw-bold", "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "mt-2"], [1, "d-flex", "align-items-center", "gap-1"], [2, "width", "28px", "height", "28px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "color", "white", "font-size", "12px", "font-weight", "bold"], [1, "small", 2, "font-weight", "600"], [2, "width", "40px", "height", "2px", "background", "#e5e7eb"], [3, "ngSubmit", "formGroup"], [1, "row", "g-3", "mb-3"], [1, "col-6"], [1, "form-label", "fw-semibold"], ["type", "text", "formControlName", "firstName", "placeholder", "Jean", 1, "form-control"], ["type", "text", "formControlName", "lastName", "placeholder", "Dupont", 1, "form-control"], [1, "mb-3"], ["type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-control"], [1, "d-flex", "gap-3"], [1, "p-3", "border", "rounded-3", "text-center", 2, "cursor", "pointer", "flex", "1", "transition", "all 0.2s", 3, "click"], [2, "font-size", "1.5rem"], [1, "fw-semibold", "small"], ["class", "mb-3", 4, "ngIf"], [1, "input-group"], ["formControlName", "password", "placeholder", "Minimum 8 caract\xE8res", 1, "form-control", 3, "type"], ["type", "button", 1, "input-group-text", 3, "click"], [1, "bi"], [1, "mb-4"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "w-100", "fw-semibold", "py-2", "mb-3", 2, "background", "linear-gradient(135deg, #6366f1, #4f46e5)", "color", "white", "border-radius", "10px", 3, "disabled"], [1, "text-center", "text-muted", "small"], ["routerLink", "/auth/login", 1, "text-primary", "fw-semibold"], ["formControlName", "specialization", 1, "form-select"], ["value", "genie-logiciel"], ["value", "reseau"], ["value", "comptabilite"], ["value", "sante"], ["value", "marketing-digital"], ["value", "developpement-personnel"], [1, "p-3", "border", "rounded-3", "text-center", 2, "cursor", "pointer", "flex", "1", "transition", "all 0.2s", "border", "2px solid", 3, "click"], [2, "font-size", "2rem"], [1, "fw-bold"], ["class", "alert mb-3", "style", "border:1px solid;border-radius:12px", 3, "background", "border-color", 4, "ngIf"], ["type", "tel", "formControlName", "paymentPhone", "placeholder", "7X XXX XX XX", 1, "form-control"], ["type", "text", "formControlName", "paymentReference", "placeholder", "Ex: TXN-ABC12345", 1, "form-control"], [1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-grow-0", "py-2", "px-3", 3, "click"], ["type", "submit", 1, "btn", "flex-grow-1", "fw-semibold", "py-2", 2, "background", "linear-gradient(135deg, #6366f1, #4f46e5)", "color", "white", "border-radius", "10px", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "alert", "mb-3", 2, "border", "1px solid", "border-radius", "12px"], ["class", "fw-semibold mb-1", "style", "color:#1d4ed8", 4, "ngIf"], ["class", "fw-semibold mb-1", "style", "color:#c2410c", 4, "ngIf"], ["class", "small", 4, "ngIf"], [1, "fw-semibold", "mb-1", 2, "color", "#1d4ed8"], [1, "fw-semibold", "mb-1", 2, "color", "#c2410c"], [1, "small"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "text-start", "mt-3", "mb-3", 2, "background", "#f8f9ff", "border-radius", "12px", "padding", "16px"], [1, "d-flex", "align-items-start", "gap-2", "mb-2"], [2, "color", "#10b981", "font-size", "1.1rem"], [1, "d-flex", "align-items-start", "gap-2"], [2, "color", "#f59e0b", "font-size", "1.1rem"], [1, "alert", 2, "background", "#fef3c7", "border", "1px solid #f59e0b", "border-radius", "12px"], [2, "color", "#92400e"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, RegisterComponent_div_2_Template, 17, 10, "div", 2)(3, RegisterComponent_ng_container_3_Template, 49, 30, "ng-container", 3)(4, RegisterComponent_ng_container_4_Template, 34, 22, "ng-container", 3)(5, RegisterComponent_ng_container_5_Template, 29, 0, "ng-container", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success && ctx.step === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success && ctx.step === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent" });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-54DU37ND.js.map

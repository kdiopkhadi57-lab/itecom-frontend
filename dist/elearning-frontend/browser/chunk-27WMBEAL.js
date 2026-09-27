import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-EWJBTFX2.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgIf,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SMYYTT5I.js";
import "./chunk-UGMD5UZ3.js";

// src/app/features/auth/payment/payment.component.ts
function PaymentComponent_ng_container_2_div_37_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li");
    \u0275\u0275text(2, "Ouvrez l'app ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Wave");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li");
    \u0275\u0275text(6, "Faites un transfert de ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "5 000 FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " au num\xE9ro ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "70 000 0000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, "Notez la ");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15, "r\xE9f\xE9rence de transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " re\xE7ue par SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Remplissez le formulaire ci-dessous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentComponent_ng_container_2_div_37_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li");
    \u0275\u0275text(2, "Composez ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "#144#");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " ou ouvrez l'app ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Orange Money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "Faites un transfert de ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "5 000 FCFA");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " au num\xE9ro ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14, "77 000 0000");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Notez la ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18, "r\xE9f\xE9rence de transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " re\xE7ue par SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "li");
    \u0275\u0275text(21, "Remplissez le formulaire ci-dessous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentComponent_ng_container_2_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol", 35);
    \u0275\u0275template(5, PaymentComponent_ng_container_2_div_37_ng_container_5_Template, 19, 0, "ng-container", 36)(6, PaymentComponent_ng_container_2_div_37_ng_container_6_Template, 22, 0, "ng-container", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Comment payer via ", ctx_r1.method === "WAVE" ? "Wave" : "Orange Money", " : ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.method === "WAVE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.method === "ORANGE_MONEY");
  }
}
function PaymentComponent_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function PaymentComponent_ng_container_2_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
  }
}
function PaymentComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3, "\u{1F4B3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 6);
    \u0275\u0275text(5, "Paiement de l'inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7, "Choisissez votre mode de paiement et envoyez le montant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "span", 10);
    \u0275\u0275text(11, "\u{1F3F7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "div", 11);
    \u0275\u0275text(14, "Frais d'inscription");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, "5 000 FCFA");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
    \u0275\u0275text(19, "M\xE9thode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "div", 17);
    \u0275\u0275listener("click", function PaymentComponent_ng_container_2_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.method = "WAVE");
    });
    \u0275\u0275elementStart(23, "div", 18);
    \u0275\u0275text(24, "\u{1F30A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 19);
    \u0275\u0275text(26, "Wave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 20);
    \u0275\u0275text(28, "+221 70 000 0000");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 16)(30, "div", 17);
    \u0275\u0275listener("click", function PaymentComponent_ng_container_2_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.method = "ORANGE_MONEY");
    });
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275text(32, "\u{1F7E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 19);
    \u0275\u0275text(34, "Orange Money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 20);
    \u0275\u0275text(36, "+221 77 000 0000");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(37, PaymentComponent_ng_container_2_div_37_Template, 7, 3, "div", 21);
    \u0275\u0275elementStart(38, "div", 22)(39, "label", 14);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 23)(42, "span", 24);
    \u0275\u0275text(43, "\u{1F4F1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentComponent_ng_container_2_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentPhone, $event) || (ctx_r1.paymentPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 13)(46, "label", 14);
    \u0275\u0275text(47, "R\xE9f\xE9rence de transaction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 23)(49, "span", 24);
    \u0275\u0275text(50, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentComponent_ng_container_2_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.paymentReference, $event) || (ctx_r1.paymentReference = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 27);
    \u0275\u0275text(53, "La r\xE9f\xE9rence figure dans le SMS de confirmation de paiement.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, PaymentComponent_ng_container_2_div_54_Template, 2, 1, "div", 28);
    \u0275\u0275elementStart(55, "button", 29);
    \u0275\u0275listener("click", function PaymentComponent_ng_container_2_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(56, PaymentComponent_ng_container_2_span_56_Template, 1, 0, "span", 30);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 31);
    \u0275\u0275text(59, " Votre compte sera activ\xE9 dans les ");
    \u0275\u0275elementStart(60, "strong");
    \u0275\u0275text(61, "24h");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " apr\xE8s v\xE9rification par l'administration. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275styleProp("border-color", ctx_r1.method === "WAVE" ? "#3b82f6" : "#dee2e6")("background", ctx_r1.method === "WAVE" ? "#eff6ff" : "white");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.method === "WAVE" ? "#1d4ed8" : "#333");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("border-color", ctx_r1.method === "ORANGE_MONEY" ? "#f97316" : "#dee2e6")("background", ctx_r1.method === "ORANGE_MONEY" ? "#fff7ed" : "white");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.method === "ORANGE_MONEY" ? "#c2410c" : "#333");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.method);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Votre num\xE9ro ", ctx_r1.method === "WAVE" ? "Wave" : "Orange Money", "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentPhone);
    \u0275\u0275property("disabled", !ctx_r1.method);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.paymentReference);
    \u0275\u0275property("disabled", !ctx_r1.method);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading || !ctx_r1.canSubmit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Envoi..." : "Confirmer le paiement", " ");
  }
}
function PaymentComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 41);
    \u0275\u0275text(4, "Paiement soumis !");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 42);
    \u0275\u0275text(6, "Votre paiement a bien \xE9t\xE9 enregistr\xE9. L'administrateur va v\xE9rifier votre transaction et activer votre compte sous ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "24h");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 7);
    \u0275\u0275text(11, "Vous recevrez un email de confirmation d\xE8s que votre compte est activ\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 43)(13, "strong");
    \u0275\u0275text(14, "R\xE9capitulatif :");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275text(16);
    \u0275\u0275element(17, "br");
    \u0275\u0275text(18);
    \u0275\u0275element(19, "br");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1(" M\xE9thode : ", ctx_r1.method === "WAVE" ? "Wave" : "Orange Money", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" T\xE9l\xE9phone : ", ctx_r1.paymentPhone, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" R\xE9f\xE9rence : ", ctx_r1.paymentReference, " ");
  }
}
var PaymentComponent = class _PaymentComponent {
  get canSubmit() {
    return !!this.method && this.paymentPhone.trim().length >= 8 && this.paymentReference.trim().length >= 4;
  }
  constructor(http, route, router) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.method = "";
    this.paymentPhone = "";
    this.paymentReference = "";
    this.loading = false;
    this.error = "";
    this.submitted = false;
    this.email = "";
  }
  ngOnInit() {
    this.email = this.route.snapshot.queryParamMap.get("email") || "";
    if (!this.email)
      this.router.navigate(["/auth/login"]);
  }
  submit() {
    this.loading = true;
    this.error = "";
    this.http.post("/api/auth/submit-payment", {
      email: this.email,
      paymentMethod: this.method,
      paymentPhone: this.paymentPhone.trim(),
      paymentReference: this.paymentReference.trim()
    }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.status === "SUCCESS") {
          this.submitted = true;
        } else {
          this.error = res.message || "Erreur lors de la soumission.";
        }
      },
      error: () => {
        this.loading = false;
        this.error = "Erreur r\xE9seau. R\xE9essayez.";
      }
    });
  }
  static {
    this.\u0275fac = function PaymentComponent_Factory(t) {
      return new (t || _PaymentComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentComponent, selectors: [["app-payment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["successBlock", ""], [1, "min-vh-100", "d-flex", "align-items-center", "justify-content-center", "p-4", 2, "background", "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"], [1, "card", "border-0", "shadow-lg", "p-4", "w-100", 2, "max-width", "520px", "border-radius", "20px"], [4, "ngIf", "ngIfElse"], [1, "text-center", "mb-4"], [2, "font-size", "2.5rem"], [1, "fw-bold", "mt-2"], [1, "text-muted", "small"], [1, "alert", "mb-4", 2, "background", "linear-gradient(135deg,#f59e0b22,#d9770622)", "border", "1px solid #f59e0b", "border-radius", "12px"], [1, "d-flex", "align-items-center", "gap-3"], [2, "font-size", "2rem"], [1, "fw-bold", 2, "color", "#d97706"], [2, "font-size", "1.4rem", "font-weight", "800", "color", "#92400e"], [1, "mb-4"], [1, "form-label", "fw-semibold"], [1, "row", "g-3"], [1, "col-6"], [1, "p-3", "border", "rounded-3", "text-center", 2, "cursor", "pointer", "transition", "all .2s", 3, "click"], [2, "font-size", "1.8rem"], [1, "fw-bold", "mt-1"], [1, "small", "text-muted"], ["class", "alert mb-4", "style", "background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px", 4, "ngIf"], [1, "mb-3"], [1, "input-group"], [1, "input-group-text"], ["type", "tel", "placeholder", "Ex: 77 123 45 67", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "Ex: TXN123456789", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-text"], ["class", "alert alert-danger", 4, "ngIf"], [1, "btn", "w-100", "fw-semibold", "py-2", 2, "background", "linear-gradient(135deg,#6366f1,#4f46e5)", "color", "white", "border-radius", "10px", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], [1, "text-center", "text-muted", "small", "mt-3"], [1, "alert", "mb-4", 2, "background", "#f0f9ff", "border", "1px solid #bae6fd", "border-radius", "12px"], [1, "fw-semibold", "mb-2", 2, "color", "#0369a1"], [1, "bi", "bi-info-circle", "me-1"], [1, "mb-0", "small", 2, "color", "#0c4a6e"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "py-4"], [2, "font-size", "4rem"], [1, "mt-3", "fw-bold"], [1, "text-muted"], [1, "alert", "alert-info", "mt-3", "text-start"]], template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, PaymentComponent_ng_container_2_Template, 63, 22, "ng-container", 3)(3, PaymentComponent_ng_template_3_Template, 21, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const successBlock_r3 = \u0275\u0275reference(4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.submitted)("ngIfElse", successBlock_r3);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentComponent, { className: "PaymentComponent" });
})();
export {
  PaymentComponent
};
//# sourceMappingURL=chunk-27WMBEAL.js.map

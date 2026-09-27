import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/ui-chrome.service.ts
var UiChromeService = class _UiChromeService {
  constructor() {
    this.hiddenSubject = new BehaviorSubject(false);
    this.hidden$ = this.hiddenSubject.asObservable();
  }
  hide() {
    this.hiddenSubject.next(true);
  }
  show() {
    this.hiddenSubject.next(false);
  }
  static {
    this.\u0275fac = function UiChromeService_Factory(t) {
      return new (t || _UiChromeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UiChromeService, factory: _UiChromeService.\u0275fac, providedIn: "root" });
  }
};

export {
  UiChromeService
};
//# sourceMappingURL=chunk-M4IUH3NY.js.map

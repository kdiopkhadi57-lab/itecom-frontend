import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-EWJBTFX2.js";
import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
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
import {
  __spreadValues
} from "./chunk-UGMD5UZ3.js";

// src/app/features/virtual-class/virtual-class.component.ts
function VirtualClassComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 13);
    \u0275\u0275listener("click", function VirtualClassComponent_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateModal = true);
    });
    \u0275\u0275element(2, "i", 14);
    \u0275\u0275text(3, "Cr\xE9er une session ");
    \u0275\u0275elementEnd()();
  }
}
function VirtualClassComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Aucune classe ", ctx_r1.getTabLabel(), "");
  }
}
function VirtualClassComponent_div_19_div_2_div_5_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275property("src", "data:image/jpeg;base64," + vc_r4.thumbnailData, \u0275\u0275sanitizeUrl);
  }
}
function VirtualClassComponent_div_19_div_2_div_5_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "Enregistrement disponible");
    \u0275\u0275elementEnd()();
  }
}
function VirtualClassComponent_div_19_div_2_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, VirtualClassComponent_div_19_div_2_div_5_ng_container_1_img_1_Template, 1, 1, "img", 44)(2, VirtualClassComponent_div_19_div_2_div_5_ng_container_1_div_2_Template, 4, 0, "div", 45);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.thumbnailData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vc_r4.thumbnailData);
  }
}
function VirtualClassComponent_div_19_div_2_div_5_video_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "video", 50);
    \u0275\u0275listener("canplay", function VirtualClassComponent_div_19_div_2_div_5_video_2_Template_video_canplay_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onVideoReady($event));
    })("pause", function VirtualClassComponent_div_19_div_2_div_5_video_2_Template_video_pause_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.videoIsPaused = true);
    })("play", function VirtualClassComponent_div_19_div_2_div_5_video_2_Template_video_play_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.videoIsPaused = false);
    })("ended", function VirtualClassComponent_div_19_div_2_div_5_video_2_Template_video_ended_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.videoIsPaused = true);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("src", ctx_r1.playingObjectUrl, \u0275\u0275sanitizeUrl);
  }
}
function VirtualClassComponent_div_19_div_2_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275element(1, "div", 52);
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54);
    \u0275\u0275element(2, "i", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.playingVcId === vc_r4.id && !ctx_r1.videoIsPaused ? "bi bi-pause-fill" : "bi bi-play-fill");
  }
}
function VirtualClassComponent_div_19_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function VirtualClassComponent_div_19_div_2_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const vc_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleInlinePlay(vc_r4));
    });
    \u0275\u0275template(1, VirtualClassComponent_div_19_div_2_div_5_ng_container_1_Template, 3, 2, "ng-container", 4)(2, VirtualClassComponent_div_19_div_2_div_5_video_2_Template, 1, 1, "video", 41)(3, VirtualClassComponent_div_19_div_2_div_5_div_3_Template, 2, 0, "div", 42)(4, VirtualClassComponent_div_19_div_2_div_5_div_4_Template, 3, 2, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.playingVcId !== vc_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.playingVcId === vc_r4.id && ctx_r1.playingObjectUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingVcId === vc_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loadingVcId !== vc_r4.id);
  }
}
function VirtualClassComponent_div_19_div_2_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function VirtualClassComponent_div_19_div_2_button_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const vc_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteRecording(vc_r4));
    });
    \u0275\u0275element(1, "i", 57);
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vc_r4.teacherName);
  }
}
function VirtualClassComponent_div_19_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vc_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vc_r4.courseTitle);
  }
}
function VirtualClassComponent_div_19_div_2_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function VirtualClassComponent_div_19_div_2_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const vc_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.joinRoom(vc_r4.id));
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275text(2, "Rejoindre maintenant ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function VirtualClassComponent_div_19_div_2_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const vc_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startSession(vc_r4));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, "D\xE9marrer la session ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_button_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2, "Rappel activ\xE9 ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_div_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function VirtualClassComponent_div_19_div_2_div_27_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const vc_r4 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.startSession(vc_r4));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, "D\xE9marrer en retard ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_div_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2, "Session non tenue ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassComponent_div_19_div_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275template(1, VirtualClassComponent_div_19_div_2_div_27_button_1_Template, 3, 0, "button", 67)(2, VirtualClassComponent_div_19_div_2_div_27_button_2_Template, 3, 0, "button", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isTeacher || ctx_r1.authService.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.authService.isStudent);
  }
}
function VirtualClassComponent_div_19_div_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "button", 70);
    \u0275\u0275element(2, "i", 71);
    \u0275\u0275text(3, "Session termin\xE9e (sans enregistrement) ");
    \u0275\u0275elementEnd()();
  }
}
function VirtualClassComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, VirtualClassComponent_div_19_div_2_div_5_Template, 5, 4, "div", 27);
    \u0275\u0275elementStart(6, "div", 28)(7, "div", 29)(8, "h5", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, VirtualClassComponent_div_19_div_2_button_10_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 33)(14, "div");
    \u0275\u0275element(15, "i", 34);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275element(19, "i", 35);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, VirtualClassComponent_div_19_div_2_div_22_Template, 3, 1, "div", 4)(23, VirtualClassComponent_div_19_div_2_div_23_Template, 3, 1, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, VirtualClassComponent_div_19_div_2_button_24_Template, 3, 0, "button", 36)(25, VirtualClassComponent_div_19_div_2_button_25_Template, 3, 0, "button", 37)(26, VirtualClassComponent_div_19_div_2_button_26_Template, 3, 0, "button", 38)(27, VirtualClassComponent_div_19_div_2_div_27_Template, 3, 2, "div", 39)(28, VirtualClassComponent_div_19_div_2_div_28_Template, 4, 0, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vc_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.isOverdue(vc_r4) ? "#94a3b8" : ctx_r1.getStatusColor(vc_r4.status));
    \u0275\u0275advance();
    \u0275\u0275classProp("bi-clock", vc_r4.status === "SCHEDULED" && !ctx_r1.isOverdue(vc_r4))("bi-exclamation-circle", ctx_r1.isOverdue(vc_r4))("bi-record-circle", vc_r4.status === "ONGOING")("bi-check-circle", vc_r4.status === "COMPLETED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isOverdue(vc_r4) ? "Non tenue" : ctx_r1.getStatusLabel(vc_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.hasRecording);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(vc_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete(vc_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(vc_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 25, vc_r4.scheduledAt, "EEEE d MMMM y", "", "fr"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 30, vc_r4.scheduledAt, "HH:mm"), " \xB7 ", vc_r4.durationMinutes, "min");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vc_r4.teacherName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.courseTitle);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.status === "ONGOING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.status === "SCHEDULED" && !ctx_r1.isOverdue(vc_r4) && (ctx_r1.authService.isTeacher || ctx_r1.authService.isAdmin));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.status === "SCHEDULED" && !ctx_r1.isOverdue(vc_r4) && ctx_r1.authService.isStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.status === "SCHEDULED" && ctx_r1.isOverdue(vc_r4));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vc_r4.status === "COMPLETED" && !vc_r4.hasRecording);
  }
}
function VirtualClassComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, VirtualClassComponent_div_19_div_1_Template, 5, 1, "div", 18)(2, VirtualClassComponent_div_19_div_2_Template, 29, 33, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredClasses.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredClasses);
  }
}
function VirtualClassComponent_div_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h6", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r10.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r10.desc);
  }
}
function VirtualClassComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "h4", 74);
    \u0275\u0275text(3, "Comment fonctionnent les classes virtuelles ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275template(5, VirtualClassComponent_div_20_div_5_Template, 7, 3, "div", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.howItWorks);
  }
}
function VirtualClassComponent_div_21_div_31_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.studentCount, " \xE9tudiant(s) d\xE9tect\xE9(s)");
  }
}
function VirtualClassComponent_div_21_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275text(2);
    \u0275\u0275template(3, VirtualClassComponent_div_21_div_31_span_3_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.studentListFile.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.studentCount !== null);
  }
}
function VirtualClassComponent_div_21_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.createError);
  }
}
function VirtualClassComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "div", 83)(4, "h5", 84);
    \u0275\u0275text(5, "\u{1F4C5} Cr\xE9er une classe virtuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 85);
    \u0275\u0275listener("click", function VirtualClassComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateModal = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 86)(8, "div", 87)(9, "label", 88);
    \u0275\u0275text(10, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function VirtualClassComponent_div_21_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClass.title, $event) || (ctx_r1.newClass.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 87)(13, "label", 88);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function VirtualClassComponent_div_21_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClass.description, $event) || (ctx_r1.newClass.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 91)(17, "div", 92)(18, "label", 88);
    \u0275\u0275text(19, "Date et heure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function VirtualClassComponent_div_21_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClass.scheduledAt, $event) || (ctx_r1.newClass.scheduledAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 94)(22, "label", 88);
    \u0275\u0275text(23, "Dur\xE9e (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function VirtualClassComponent_div_21_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newClass.durationMinutes, $event) || (ctx_r1.newClass.durationMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 87)(26, "label", 88);
    \u0275\u0275text(27, "Liste des \xE9tudiants *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 96);
    \u0275\u0275listener("change", function VirtualClassComponent_div_21_Template_input_change_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStudentListSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "small", 97);
    \u0275\u0275text(30, " Excel : colonne A = Nom, colonne B = Email, ligne 1 ignor\xE9e. PDF/Word : une ligne par \xE9tudiant, Nom Email. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, VirtualClassComponent_div_21_div_31_Template, 4, 2, "div", 98)(32, VirtualClassComponent_div_21_div_32_Template, 2, 1, "div", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 100);
    \u0275\u0275element(34, "i", 101);
    \u0275\u0275text(35, " Un salon de visioconf\xE9rence int\xE9gr\xE9 sera g\xE9n\xE9r\xE9 automatiquement pour cette session, aucun lien externe n'est n\xE9cessaire. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 102)(37, "button", 103);
    \u0275\u0275listener("click", function VirtualClassComponent_div_21_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateModal = false);
    });
    \u0275\u0275text(38, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 13);
    \u0275\u0275listener("click", function VirtualClassComponent_div_21_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createClass());
    });
    \u0275\u0275element(40, "i", 104);
    \u0275\u0275text(41, "Cr\xE9er la session ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClass.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClass.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClass.scheduledAt);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newClass.durationMinutes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.studentListFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.createError);
  }
}
function VirtualClassComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "button", 110);
    \u0275\u0275listener("click", function VirtualClassComponent_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.inlineError = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.inlineError, " ");
  }
}
function VirtualClassComponent_div_23_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 115);
  }
}
function VirtualClassComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "div", 82)(3, "div", 111)(4, "div", 77);
    \u0275\u0275text(5, "\u{1F5D1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h5", 78);
    \u0275\u0275text(7, "Supprimer l'enregistrement ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 3);
    \u0275\u0275text(9, "Cette action est irr\xE9versible. La vid\xE9o sera d\xE9finitivement supprim\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 112)(11, "button", 103);
    \u0275\u0275listener("click", function VirtualClassComponent_div_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deletingRecording = null);
    });
    \u0275\u0275text(12, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 113);
    \u0275\u0275listener("click", function VirtualClassComponent_div_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteRecording());
    });
    \u0275\u0275template(14, VirtualClassComponent_div_23_span_14_Template, 1, 0, "span", 114);
    \u0275\u0275text(15, " Supprimer ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("disabled", ctx_r1.deleteLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.deleteLoading);
  }
}
var VirtualClassComponent = class _VirtualClassComponent {
  get filteredClasses() {
    let now = /* @__PURE__ */ new Date();
    return this.classes.filter((vc) => {
      let date = new Date(vc.scheduledAt);
      if (this.activeTab === "ongoing")
        return vc.status === "ONGOING";
      if (this.activeTab === "upcoming")
        return vc.status === "SCHEDULED" && date >= now;
      if (this.activeTab === "past")
        return vc.status === "COMPLETED" || date < now;
      return true;
    });
  }
  constructor(http, router, authService) {
    this.http = http;
    this.router = router;
    this.authService = authService;
    this.classes = [];
    this.loading = true;
    this.activeTab = "upcoming";
    this.showCreateModal = false;
    this.deletingRecording = null;
    this.deleteLoading = false;
    this.newClass = { title: "", description: "", scheduledAt: "", durationMinutes: 60 };
    this.studentListFile = null;
    this.studentCount = null;
    this.createError = "";
    this.playingVcId = null;
    this.loadingVcId = null;
    this.playingObjectUrl = null;
    this.videoIsPaused = true;
    this.inlineError = "";
    this.currentVideoEl = null;
    this.howItWorks = [
      { icon: "\u{1F4C5}", title: "Planifiez", desc: "Les professeurs planifient des sessions en direct" },
      { icon: "\u{1F3A5}", title: "Rejoignez", desc: "La visioconf\xE9rence est int\xE9gr\xE9e \xE0 la plateforme, en un clic" },
      { icon: "\u23FA\uFE0F", title: "Enregistrez", desc: "Le professeur peut enregistrer la session" },
      { icon: "\u{1F4C1}", title: "Revoyez", desc: "Le cours enregistr\xE9 reste disponible dans l'onglet Pass\xE9es" }
    ];
  }
  ngOnInit() {
    this.http.get("/api/virtual-classes").subscribe({
      next: (data) => {
        this.classes = data;
        this.loading = false;
      },
      error: () => {
        this.classes = [
          { id: 1, title: "Introduction \xE0 Java - Session Live", description: "Cours en direct sur les bases de Java OOP", scheduledAt: new Date(Date.now() + 36e5).toISOString(), durationMinutes: 90, roomName: "elearning-demo-1", recordingUrl: null, status: "ONGOING", teacherName: "Prof. Martin", teacherId: null, courseTitle: "Java", thumbnailData: null, hasRecording: false },
          { id: 2, title: "Angular Deep Dive", description: "Composants, Services et Routing avanc\xE9", scheduledAt: new Date(Date.now() + 864e5).toISOString(), durationMinutes: 120, roomName: "elearning-demo-2", recordingUrl: null, status: "SCHEDULED", teacherName: "Dr. Diallo", teacherId: null, courseTitle: "Angular", thumbnailData: null, hasRecording: false }
        ];
        this.loading = false;
      }
    });
  }
  isOverdue(vc) {
    if (vc.status !== "SCHEDULED")
      return false;
    const end = new Date(vc.scheduledAt).getTime() + (vc.durationMinutes || 0) * 6e4;
    return end < Date.now();
  }
  canDelete(vc) {
    if (!vc.hasRecording)
      return false;
    if (this.authService.isAdmin)
      return true;
    const currentUserId = this.authService.currentUser?.id;
    return !!(this.authService.isTeacher && currentUserId && vc.teacherId === currentUserId);
  }
  getTabLabel() {
    return { upcoming: "\xE0 venir", ongoing: "en cours", past: "pass\xE9e" }[this.activeTab] || "";
  }
  getStatusLabel(s) {
    return { SCHEDULED: "Planifi\xE9e", ONGOING: "\u{1F534} En direct", COMPLETED: "Termin\xE9e", CANCELLED: "Annul\xE9e" }[s] || s;
  }
  getStatusColor(s) {
    return { SCHEDULED: "#6366f1", ONGOING: "#ef4444", COMPLETED: "#10b981", CANCELLED: "#94a3b8" }[s] || "#6366f1";
  }
  joinRoom(id) {
    this.router.navigate(["/virtual-class", id, "room"]);
  }
  toggleInlinePlay(vc) {
    if (!vc.hasRecording)
      return;
    if (this.playingVcId === vc.id) {
      if (this.currentVideoEl) {
        if (this.videoIsPaused) {
          this.currentVideoEl.play();
        } else {
          this.currentVideoEl.pause();
        }
      }
      return;
    }
    this.stopCurrentVideo();
    this.inlineError = "";
    this.playingVcId = vc.id;
    this.loadingVcId = vc.id;
    this.videoIsPaused = true;
    this.http.get(`/api/virtual-classes/${vc.id}/recording`, { responseType: "blob" }).subscribe({
      next: (blob) => {
        this.playingObjectUrl = URL.createObjectURL(blob);
      },
      error: () => {
        this.loadingVcId = null;
        this.playingVcId = null;
        this.inlineError = "Impossible de charger la vid\xE9o.";
      }
    });
  }
  onVideoReady(event) {
    this.loadingVcId = null;
    this.currentVideoEl = event.target;
    this.currentVideoEl.play();
    this.videoIsPaused = false;
  }
  stopCurrentVideo() {
    if (this.currentVideoEl) {
      this.currentVideoEl.pause();
      this.currentVideoEl = null;
    }
    if (this.playingObjectUrl) {
      URL.revokeObjectURL(this.playingObjectUrl);
      this.playingObjectUrl = null;
    }
    this.playingVcId = null;
    this.loadingVcId = null;
    this.videoIsPaused = true;
  }
  confirmDeleteRecording(vc) {
    this.deletingRecording = vc;
  }
  deleteRecording() {
    if (!this.deletingRecording)
      return;
    this.deleteLoading = true;
    const vc = this.deletingRecording;
    this.http.delete(`/api/teacher/virtual-classes/${vc.id}/recording`).subscribe({
      next: (updated) => {
        const idx = this.classes.findIndex((c) => c.id === vc.id);
        if (idx !== -1)
          this.classes[idx] = __spreadValues(__spreadValues({}, this.classes[idx]), updated);
        this.deleteLoading = false;
        this.deletingRecording = null;
      },
      error: () => {
        this.deleteLoading = false;
        this.deletingRecording = null;
      }
    });
  }
  startSession(vc) {
    this.http.put(`/api/teacher/virtual-classes/${vc.id}/status`, {}, { params: { status: "ONGOING" } }).subscribe({
      next: () => {
        vc.status = "ONGOING";
        this.joinRoom(vc.id);
      },
      error: () => {
        this.joinRoom(vc.id);
      }
    });
  }
  onStudentListSelected(event) {
    const input = event.target;
    this.studentListFile = input.files?.[0] || null;
    this.studentCount = null;
    this.createError = "";
    if (!this.studentListFile)
      return;
    const formData = new FormData();
    formData.append("file", this.studentListFile);
    this.http.post("/api/teacher/exams/parse-students", formData).subscribe({
      next: (result) => this.studentCount = result.count,
      error: () => {
        this.studentListFile = null;
        this.createError = "Impossible de lire la liste. V\xE9rifiez le format et les colonnes demand\xE9es.";
      }
    });
  }
  createClass() {
    if (!this.studentListFile) {
      this.createError = "La liste des \xE9tudiants est obligatoire.";
      return;
    }
    const formData = new FormData();
    formData.append("class", new Blob([JSON.stringify(this.newClass)], { type: "application/json" }));
    formData.append("studentList", this.studentListFile);
    this.http.post("/api/teacher/virtual-classes", formData).subscribe({
      next: (vc) => {
        this.classes.unshift(vc);
        this.showCreateModal = false;
        this.newClass = { title: "", description: "", scheduledAt: "", durationMinutes: 60 };
        this.studentListFile = null;
        this.studentCount = null;
        this.createError = "";
      },
      error: () => {
        this.createError = "Impossible de cr\xE9er la session. V\xE9rifiez les informations et la liste des \xE9tudiants.";
      }
    });
  }
  static {
    this.\u0275fac = function VirtualClassComponent_Factory(t) {
      return new (t || _VirtualClassComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualClassComponent, selectors: [["app-virtual-class"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 13, consts: [[1, "fade-in-up"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fw-bold", "mb-1"], [1, "text-muted"], [4, "ngIf"], [1, "nav", "nav-pills", "mb-4"], [1, "nav-item"], [1, "nav-link", 3, "click"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row g-4", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "modal fade show d-block", "style", "background:rgba(0,0,0,.5)", 4, "ngIf"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "btn", "btn-primary-custom", 3, "click"], [1, "bi", "bi-plus-circle", "me-2"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], [1, "row", "g-4"], ["class", "col-12 text-center py-5", 4, "ngIf"], ["class", "col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center", "py-5"], [2, "font-size", "4rem"], [1, "mt-3"], [1, "col-md-6", "col-xl-4"], [1, "card", "border-0", "shadow-sm", "h-100", 2, "border-radius", "16px", "overflow", "hidden"], [1, "p-3", "text-white", "text-center", "fw-semibold"], [1, "me-2"], ["style", "position:relative; background:#111; height:180px; overflow:hidden; cursor:pointer", 3, "click", 4, "ngIf"], [1, "card-body", "p-4"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "fw-bold", "mb-0"], ["class", "btn btn-sm btn-outline-danger ms-2", "title", "Supprimer l'enregistrement", 3, "click", 4, "ngIf"], [1, "text-muted", "small", "mb-3"], [1, "d-flex", "flex-column", "gap-2", "small", "text-muted", "mb-4"], [1, "bi", "bi-calendar3", "me-2", "text-primary"], [1, "bi", "bi-clock", "me-2", "text-primary"], ["class", "btn btn-danger fw-bold w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-primary fw-bold w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary w-100", "disabled", "", 4, "ngIf"], ["class", "d-grid", 4, "ngIf"], [2, "position", "relative", "background", "#111", "height", "180px", "overflow", "hidden", "cursor", "pointer", 3, "click"], ["style", "width:100%; height:100%; object-fit:contain; background:#000", 3, "src", "canplay", "pause", "play", "ended", 4, "ngIf"], ["style", "position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.65)", 4, "ngIf"], ["style", "position:absolute; inset:0; display:flex; align-items:center; justify-content:center", 4, "ngIf"], ["alt", "miniature", "style", "width:100%; height:100%; object-fit:cover; opacity:0.9; transition:opacity .2s", 3, "src", 4, "ngIf"], ["style", "width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px; color:#555", 4, "ngIf"], ["alt", "miniature", 2, "width", "100%", "height", "100%", "object-fit", "cover", "opacity", "0.9", "transition", "opacity .2s", 3, "src"], [2, "width", "100%", "height", "100%", "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "gap", "6px", "color", "#555"], [1, "bi", "bi-camera-video", 2, "font-size", "2.2rem"], [2, "font-size", ".75rem"], [2, "width", "100%", "height", "100%", "object-fit", "contain", "background", "#000", 3, "canplay", "pause", "play", "ended", "src"], [2, "position", "absolute", "inset", "0", "display", "flex", "align-items", "center", "justify-content", "center", "background", "rgba(0,0,0,.65)"], [1, "spinner-border", "text-light"], [2, "position", "absolute", "inset", "0", "display", "flex", "align-items", "center", "justify-content", "center"], [2, "background", "rgba(0,0,0,.55)", "border-radius", "50%", "width", "54px", "height", "54px", "display", "flex", "align-items", "center", "justify-content", "center", "transition", "background .15s", "box-shadow", "0 2px 8px rgba(0,0,0,.4)"], [2, "color", "#fff", "font-size", "1.5rem", "margin-left", "2px"], ["title", "Supprimer l'enregistrement", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click"], [1, "bi", "bi-trash"], [1, "bi", "bi-person", "me-2", "text-primary"], [1, "bi", "bi-book", "me-2", "text-primary"], [1, "btn", "btn-danger", "fw-bold", "w-100", 3, "click"], [1, "bi", "bi-camera-video-fill", "me-2"], [1, "btn", "btn-primary", "fw-bold", "w-100", 3, "click"], [1, "bi", "bi-play-circle", "me-2"], ["disabled", "", 1, "btn", "btn-outline-primary", "w-100"], [1, "bi", "bi-bell", "me-2"], [1, "d-grid"], ["class", "btn btn-outline-primary w-100", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-secondary w-100", "disabled", "", 4, "ngIf"], [1, "btn", "btn-outline-primary", "w-100", 3, "click"], ["disabled", "", 1, "btn", "btn-outline-secondary", "w-100"], [1, "bi", "bi-archive", "me-2"], [1, "mt-4"], [1, "card", "border-0", "bg-light", "p-5", "rounded-4", "text-center"], [1, "fw-bold", "mb-4"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [2, "font-size", "2.5rem"], [1, "fw-bold", "mt-2"], [1, "text-muted", "small"], [1, "modal", "fade", "show", "d-block", 2, "background", "rgba(0,0,0,.5)"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content", "border-0", "rounded-4"], [1, "modal-header", "border-0", "p-4"], [1, "modal-title", "fw-bold"], [1, "btn-close", 3, "click"], [1, "modal-body", "p-4"], [1, "mb-3"], [1, "form-label", "fw-semibold"], ["type", "text", "placeholder", "Ex: Introduction \xE0 Java", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "g-3", "mb-3"], [1, "col-7"], ["type", "datetime-local", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-5"], ["type", "number", "value", "60", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".xlsx,.xls,.pdf,.docx,.doc", 1, "form-control", 3, "change"], [1, "text-muted", "d-block", "mt-1"], ["class", "text-success small mt-1", 4, "ngIf"], ["class", "alert alert-danger py-2 mt-2 mb-0 small", 4, "ngIf"], [1, "alert", "alert-info", "small", "mb-0"], [1, "bi", "bi-info-circle", "me-1"], [1, "modal-footer", "border-0", "p-4", "pt-0"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-check-circle", "me-2"], [1, "text-success", "small", "mt-1"], [1, "bi", "bi-check-circle", "me-1"], [1, "alert", "alert-danger", "py-2", "mt-2", "mb-0", "small"], [1, "alert", "alert-danger", "mt-3"], [1, "bi", "bi-exclamation-circle", "me-2"], [1, "btn-close", "float-end", 3, "click"], [1, "modal-body", "p-4", "text-center"], [1, "d-flex", "gap-2", "justify-content-center", "mt-3"], [1, "btn", "btn-danger", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-1"]], template: function VirtualClassComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F3A5} Classes Virtuelles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Rejoignez des sessions en direct avec vos professeurs");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, VirtualClassComponent_div_7_Template, 4, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "ul", 5)(9, "li", 6)(10, "button", 7);
        \u0275\u0275listener("click", function VirtualClassComponent_Template_button_click_10_listener() {
          return ctx.activeTab = "upcoming";
        });
        \u0275\u0275text(11, " \u{1F5D3}\uFE0F \xC0 venir ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "li", 6)(13, "button", 7);
        \u0275\u0275listener("click", function VirtualClassComponent_Template_button_click_13_listener() {
          return ctx.activeTab = "ongoing";
        });
        \u0275\u0275text(14, " \u{1F534} En cours ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li", 6)(16, "button", 7);
        \u0275\u0275listener("click", function VirtualClassComponent_Template_button_click_16_listener() {
          return ctx.activeTab = "past";
        });
        \u0275\u0275text(17, " \u{1F4C1} Pass\xE9es ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(18, VirtualClassComponent_div_18_Template, 2, 0, "div", 8)(19, VirtualClassComponent_div_19_Template, 3, 2, "div", 9)(20, VirtualClassComponent_div_20_Template, 6, 1, "div", 10)(21, VirtualClassComponent_div_21_Template, 42, 6, "div", 11)(22, VirtualClassComponent_div_22_Template, 4, 1, "div", 12)(23, VirtualClassComponent_div_23_Template, 16, 2, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.authService.isTeacher || ctx.authService.isAdmin);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "upcoming");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "ongoing");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "past");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.classes.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCreateModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.inlineError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.deletingRecording);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualClassComponent, { className: "VirtualClassComponent" });
})();
export {
  VirtualClassComponent
};
//# sourceMappingURL=chunk-FWW5OFHC.js.map

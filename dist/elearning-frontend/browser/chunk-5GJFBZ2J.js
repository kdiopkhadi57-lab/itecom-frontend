import {
  AuthService
} from "./chunk-2SZQOUIP.js";
import {
  ActivatedRoute,
  CommonModule,
  HttpClient,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  firstValueFrom,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-SMYYTT5I.js";
import {
  __async
} from "./chunk-UGMD5UZ3.js";

// src/app/features/virtual-class/virtual-class-room.component.ts
var _c0 = ["jitsiContainer"];
function VirtualClassRoomComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " a rejoint la session.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r1);
  }
}
function VirtualClassRoomComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, VirtualClassRoomComponent_div_10_div_1_div_1_Template, 5, 1, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.joinNotifications);
  }
}
function VirtualClassRoomComponent_div_10_div_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function VirtualClassRoomComponent_div_10_div_2_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startRecording());
    });
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2, "D\xE9marrer l'enregistrement ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function VirtualClassRoomComponent_div_10_div_2_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.stopRecording());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, "Arr\xEAter et enregistrer ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2, "Enregistrement en cours... ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275text(2, "Envoi de l'enregistrement... ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
}
function VirtualClassRoomComponent_div_10_div_2_i_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 41);
  }
}
function VirtualClassRoomComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275element(3, "i", 26);
    \u0275\u0275text(4, "Enregistrement de la session");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, VirtualClassRoomComponent_div_10_div_2_button_5_Template, 3, 0, "button", 27)(6, VirtualClassRoomComponent_div_10_div_2_button_6_Template, 3, 0, "button", 28)(7, VirtualClassRoomComponent_div_10_div_2_span_7_Template, 3, 0, "span", 29)(8, VirtualClassRoomComponent_div_10_div_2_span_8_Template, 3, 0, "span", 30);
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function VirtualClassRoomComponent_div_10_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.endSession());
    });
    \u0275\u0275template(10, VirtualClassRoomComponent_div_10_div_2_span_10_Template, 1, 0, "span", 32)(11, VirtualClassRoomComponent_div_10_div_2_i_11_Template, 1, 0, "i", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.recording);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recording);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.recording);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.ending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.ending);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.ending);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.ending ? "Sauvegarde de l'enregistrement..." : "Terminer la session", " ");
  }
}
function VirtualClassRoomComponent_div_10_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " Aucun \xE9tudiant connect\xE9 pour le moment. ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r6.name, " ");
  }
}
function VirtualClassRoomComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 42)(2, "h6", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275text(4, "Participants connect\xE9s ");
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, VirtualClassRoomComponent_div_10_div_3_div_7_Template, 2, 0, "div", 30);
    \u0275\u0275elementStart(8, "div", 46);
    \u0275\u0275template(9, VirtualClassRoomComponent_div_10_div_3_span_9_Template, 3, 1, "span", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.connectedParticipants.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.connectedParticipants.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.connectedParticipants);
  }
}
function VirtualClassRoomComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, `Enregistrement sauvegard\xE9 dans la plateforme. Il sera disponible dans l'onglet "Pass\xE9es". `);
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.uploadError, " ");
  }
}
function VirtualClassRoomComponent_div_10_div_6_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function VirtualClassRoomComponent_div_10_div_6_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reloadConference());
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275text(2, "Recharger la visioconf\xE9rence ");
    \u0275\u0275elementEnd();
  }
}
function VirtualClassRoomComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 55);
    \u0275\u0275elementStart(2, "span", 56);
    \u0275\u0275text(3, " Si une fen\xEAtre ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, '"Rejoindre la r\xE9union" / "Join Meeting"');
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " s'affiche dans la vid\xE9o ci-dessous (avec les r\xE9glages cam\xE9ra/micro), cliquez dessus pour entrer dans la session. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, VirtualClassRoomComponent_div_10_div_6_button_7_Template, 3, 0, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.showReload);
  }
}
function VirtualClassRoomComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r8);
  }
}
function VirtualClassRoomComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, VirtualClassRoomComponent_div_10_div_1_Template, 2, 1, "div", 11)(2, VirtualClassRoomComponent_div_10_div_2_Template, 13, 8, "div", 12)(3, VirtualClassRoomComponent_div_10_div_3_Template, 10, 3, "div", 12)(4, VirtualClassRoomComponent_div_10_div_4_Template, 3, 0, "div", 13)(5, VirtualClassRoomComponent_div_10_div_5_Template, 3, 1, "div", 14)(6, VirtualClassRoomComponent_div_10_div_6_Template, 8, 1, "div", 15);
    \u0275\u0275element(7, "div", 16, 0);
    \u0275\u0275elementStart(9, "details", 17)(10, "summary", 18);
    \u0275\u0275text(11, "Diagnostic technique (en cas de probl\xE8me de connexion)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 19);
    \u0275\u0275template(13, VirtualClassRoomComponent_div_10_div_13_Template, 2, 1, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeacher && ctx_r1.joinNotifications.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.joined);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.debugLog);
  }
}
var VirtualClassRoomComponent = class _VirtualClassRoomComponent {
  constructor(route, router, http, authService) {
    this.route = route;
    this.router = router;
    this.http = http;
    this.authService = authService;
    this.vc = null;
    this.loading = true;
    this.recording = false;
    this.uploading = false;
    this.uploadSuccess = false;
    this.uploadError = "";
    this.knockingParticipants = [];
    this.connectedParticipants = [];
    this.joinNotifications = [];
    this.debugLog = [];
    this.joined = false;
    this.showReload = false;
    this.ending = false;
    this.mediaRecorder = null;
    this.recordedChunks = [];
    this.displayStream = null;
    this.micStream = null;
    this.recordingAudioCtx = null;
    this.stopCallback = null;
  }
  get isTeacher() {
    return this.authService.isTeacher || this.authService.isAdmin;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.http.get(`/api/virtual-classes/${id}`).subscribe({
      next: (data) => {
        this.vc = data;
        this.loading = false;
        setTimeout(() => this.initJitsi(), 0);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  /**
   * Si l'enseignant ferme l'onglet/le navigateur pendant un enregistrement,
   * la page est déchargée immédiatement : onstop() ne se déclenche jamais
   * et l'enregistrement est perdu sans avertissement. On bloque donc la
   * fermeture tant que l'enregistrement est en cours ou en cours d'envoi.
   */
  beforeUnload(event) {
    if (this.recording || this.uploading) {
      event.preventDefault();
      event.returnValue = "";
    }
  }
  ngOnDestroy() {
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
    this.displayStream?.getTracks().forEach((t) => t.stop());
    clearTimeout(this.joinTimeoutHandle);
    this.jitsiApi?.dispose();
  }
  reloadConference() {
    this.log("Rechargement manuel de la visioconf\xE9rence...");
    this.showReload = false;
    this.joined = false;
    clearTimeout(this.joinTimeoutHandle);
    try {
      this.jitsiApi?.dispose();
    } catch {
    }
    this.jitsiApi = null;
    this.connectedParticipants = [];
    this.knockingParticipants = [];
    setTimeout(() => this.initJitsi(), 100);
  }
  loadJitsiScript(domain) {
    return new Promise((resolve, reject) => {
      if (typeof JitsiMeetExternalAPI !== "undefined") {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://${domain}/external_api.js`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Impossible de charger Jitsi Meet"));
      document.body.appendChild(script);
    });
  }
  initJitsi() {
    return __async(this, null, function* () {
      if (!this.vc)
        return;
      try {
        this.log("Demande du jeton s\xE9curis\xE9 Jitsi...");
        const jitsi = yield firstValueFrom(this.http.get(`/api/virtual-classes/${this.vc.id}/jitsi-token`));
        this.log("Jeton obtenu. Chargement de Jitsi...");
        yield this.loadJitsiScript(jitsi.domain);
        this.log('Script charg\xE9. Cr\xE9ation de la salle "' + jitsi.roomName + '"...');
        const user = this.authService.currentUser;
        this.jitsiApi = new JitsiMeetExternalAPI(jitsi.domain, {
          roomName: jitsi.roomName,
          jwt: jitsi.token,
          parentNode: this.jitsiContainer.nativeElement,
          width: "100%",
          height: "100%",
          userInfo: {
            displayName: user ? `${user.firstName} ${user.lastName}` : "Utilisateur"
          },
          configOverwrite: {
            prejoinPageEnabled: false,
            prejoinConfig: { enabled: false },
            requireDisplayName: false,
            lobby: { enabled: false },
            hideLobbyButton: true,
            enableLobbyChat: false,
            disableDeepLinking: true
          }
        });
        this.showReload = false;
        clearTimeout(this.joinTimeoutHandle);
        this.joinTimeoutHandle = setTimeout(() => {
          if (!this.joined) {
            this.log("Toujours pas connect\xE9 apr\xE8s 8s, affichage du bouton de rechargement.");
            this.showReload = true;
          }
        }, 8e3);
        this.jitsiApi.addListener("videoConferenceJoined", (event) => {
          this.joined = true;
          this.showReload = false;
          clearTimeout(this.joinTimeoutHandle);
          this.log("videoConferenceJoined : " + (event?.displayName || "") + " (id=" + event?.id + ")");
          const existing = this.jitsiApi.getParticipantsInfo?.() || [];
          this.log("Participants d\xE9j\xE0 pr\xE9sents : " + existing.length);
          for (const p of existing) {
            this.addParticipant(p.participantId, p.displayName);
          }
        });
        this.jitsiApi.addListener("videoConferenceLeft", () => {
          this.log("videoConferenceLeft");
        });
        this.jitsiApi.addListener("participantRoleChanged", (event) => {
          this.log("participantRoleChanged : id=" + event?.id + " role=" + event?.role);
        });
        this.jitsiApi.addListener("participantJoined", (event) => {
          this.log("participantJoined : " + (event?.displayName || event?.id));
          this.addParticipant(event?.id, event?.displayName);
          this.knockingParticipants = this.knockingParticipants.filter((p) => p.id !== event?.id);
          if (this.isTeacher && event?.displayName) {
            this.notifyJoin(event.displayName);
          }
        });
        this.jitsiApi.addListener("participantLeft", (event) => {
          this.log("participantLeft : " + event?.id);
          this.connectedParticipants = this.connectedParticipants.filter((p) => p.id !== event?.id);
        });
        this.jitsiApi.addListener("readyToClose", () => {
          this.log("readyToClose (la session a \xE9t\xE9 quitt\xE9e c\xF4t\xE9 Jitsi)");
        });
      } catch (e) {
        const detail = e?.error?.message || e?.message || "Erreur inconnue";
        this.log("ERREUR : " + detail);
        this.uploadError = `Impossible de charger la visioconf\xE9rence : ${detail}`;
      }
    });
  }
  log(message) {
    const time = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    this.debugLog.push(`[${time}] ${message}`);
  }
  addParticipant(id, name) {
    if (id && !this.connectedParticipants.some((p) => p.id === id)) {
      this.connectedParticipants.push({ id, name: name || "Participant" });
    }
  }
  notifyJoin(name) {
    this.joinNotifications.push(name);
    setTimeout(() => {
      this.joinNotifications = this.joinNotifications.filter((n) => n !== name);
    }, 5e3);
  }
  startRecording() {
    return __async(this, null, function* () {
      this.uploadError = "";
      this.uploadSuccess = false;
      try {
        this.displayStream = yield navigator.mediaDevices.getDisplayMedia({
          // Qualité réduite : la vidéo est stockée en base64 dans MySQL (64 Mo max par requête)
          video: { width: 1280, height: 720, frameRate: 15 },
          audio: true
        });
        try {
          this.micStream = yield navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        } catch {
          this.micStream = null;
        }
        this.recordingAudioCtx = new AudioContext();
        const dest = this.recordingAudioCtx.createMediaStreamDestination();
        const display = this.displayStream;
        const audioCtx = this.recordingAudioCtx;
        if (display.getAudioTracks().length > 0) {
          const sysSource = audioCtx.createMediaStreamSource(new MediaStream(display.getAudioTracks()));
          sysSource.connect(dest);
        }
        if (this.micStream && this.micStream.getAudioTracks().length > 0) {
          const micSource = audioCtx.createMediaStreamSource(this.micStream);
          micSource.connect(dest);
        }
        const combined = new MediaStream([
          ...display.getVideoTracks(),
          ...dest.stream.getAudioTracks()
        ]);
        this.recordedChunks = [];
        const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9,opus") ? "video/webm;codecs=vp9,opus" : "video/webm";
        this.mediaRecorder = new MediaRecorder(combined, {
          mimeType,
          videoBitsPerSecond: 25e4,
          audioBitsPerSecond: 32e3
        });
        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0)
            this.recordedChunks.push(e.data);
        };
        this.mediaRecorder.onstop = () => this.uploadRecording(this.stopCallback);
        display.getVideoTracks()[0].onended = () => this.stopRecording();
        this.mediaRecorder.start();
        this.recording = true;
      } catch (e) {
        this.uploadError = "Impossible de d\xE9marrer l'enregistrement (autorisation refus\xE9e).";
      }
    });
  }
  stopRecording(onStopped) {
    this.stopCallback = onStopped || null;
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    } else {
      this.uploadRecording(this.stopCallback);
    }
    this.displayStream?.getTracks().forEach((t) => t.stop());
    this.micStream?.getTracks().forEach((t) => t.stop());
    this.micStream = null;
    this.recordingAudioCtx?.close();
    this.recordingAudioCtx = null;
    this.recording = false;
  }
  uploadRecording(onDone) {
    if (!this.vc || this.recordedChunks.length === 0) {
      onDone?.();
      return;
    }
    const blob = new Blob(this.recordedChunks, { type: "video/webm" });
    const filename = `session-${this.vc.id}.webm`;
    if (blob.size > 45 * 1024 * 1024) {
      const sizeMb = Math.round(blob.size / (1024 * 1024));
      this.uploadError = `Enregistrement trop volumineux (${sizeMb} Mo, maximum 45 Mo, soit environ 20 minutes). Faites des enregistrements plus courts.`;
      onDone?.();
      return;
    }
    this.uploading = true;
    this.extractThumbnailFromBlob(blob).then((thumbnailBase64) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        this.http.post(`/api/teacher/virtual-classes/${this.vc.id}/recording`, {
          videoBase64: base64,
          mimeType: "video/webm",
          filename,
          thumbnailBase64
        }).subscribe({
          next: () => {
            this.uploading = false;
            this.uploadSuccess = true;
            if (this.vc)
              this.vc.status = "COMPLETED";
            onDone?.();
          },
          error: () => {
            this.uploading = false;
            this.uploadError = "Erreur lors de l'envoi de l'enregistrement vers la plateforme.";
            onDone?.();
          }
        });
      };
      reader.readAsDataURL(blob);
    });
  }
  extractThumbnailFromBlob(blob) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      const url = URL.createObjectURL(blob);
      video.src = url;
      video.muted = true;
      video.currentTime = 1;
      video.onloadeddata = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 320;
        canvas.height = 180;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, 320, 180);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
          resolve(dataUrl.split(",")[1]);
        } else {
          resolve("");
        }
        URL.revokeObjectURL(url);
      };
      video.onerror = () => {
        URL.revokeObjectURL(url);
        resolve("");
      };
    });
  }
  endSession() {
    if (!this.vc)
      return;
    const finish = () => {
      this.ending = false;
      if (this.isTeacher && this.vc.status !== "COMPLETED") {
        this.http.put(`/api/teacher/virtual-classes/${this.vc.id}/status`, {}, { params: { status: "COMPLETED" } }).subscribe({
          next: () => this.router.navigate(["/virtual-class"]),
          error: () => this.router.navigate(["/virtual-class"])
        });
      } else {
        this.router.navigate(["/virtual-class"]);
      }
    };
    if (this.recording) {
      this.ending = true;
      this.stopRecording(finish);
    } else {
      finish();
    }
  }
  static {
    this.\u0275fac = function VirtualClassRoomComponent_Factory(t) {
      return new (t || _VirtualClassRoomComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VirtualClassRoomComponent, selectors: [["app-virtual-class-room"]], viewQuery: function VirtualClassRoomComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.jitsiContainer = _t.first);
      }
    }, hostBindings: function VirtualClassRoomComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("beforeunload", function VirtualClassRoomComponent_beforeunload_HostBindingHandler($event) {
          return ctx.beforeUnload($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [["jitsiContainer", ""], [1, "fade-in-up"], [1, "d-flex", "align-items-center", "gap-3", "mb-3"], ["routerLink", "/virtual-class", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "bi", "bi-arrow-left"], [1, "fw-bold", "mb-0"], [1, "text-muted", "mb-0", "small"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], [1, "spinner-border", "text-primary"], ["class", "alert alert-success d-flex flex-column gap-1 py-2", 4, "ngIf"], ["class", "card border-0 shadow-sm mb-3", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-info d-flex flex-wrap align-items-center gap-2", 4, "ngIf"], [1, "shadow-sm", 2, "width", "100%", "height", "75vh", "border-radius", "12px", "overflow", "hidden"], [1, "mt-3"], [1, "text-muted", "small"], [1, "bg-dark", "text-light", "p-2", "mt-1", "rounded", "small", 2, "font-family", "monospace", "max-height", "200px", "overflow", "auto"], [4, "ngFor", "ngForOf"], [1, "alert", "alert-success", "d-flex", "flex-column", "gap-1", "py-2"], [1, "bi", "bi-person-check-fill", "me-2"], [1, "card", "border-0", "shadow-sm", "mb-3"], [1, "card-body", "d-flex", "align-items-center", "gap-3", "py-3"], [1, "fw-semibold"], [1, "bi", "bi-record-circle", "me-2", "text-danger"], ["class", "btn btn-sm btn-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], ["class", "text-muted small", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-1", 4, "ngIf"], ["class", "bi bi-box-arrow-right me-1", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-record-circle", "me-1"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "bi", "bi-stop-circle", "me-1"], [1, "badge", "bg-danger"], [1, "bi", "bi-record-circle-fill", "me-1"], [1, "spinner-border", "spinner-border-sm", "me-1"], [1, "bi", "bi-box-arrow-right", "me-1"], [1, "card-body", "py-3"], [1, "fw-bold", "mb-2"], [1, "bi", "bi-people-fill", "me-2", "text-primary"], [1, "badge", "bg-primary", "ms-1"], [1, "d-flex", "flex-wrap", "gap-2"], ["class", "badge bg-light text-dark border d-flex align-items-center gap-1 py-2 px-3", 4, "ngFor", "ngForOf"], [1, "badge", "bg-light", "text-dark", "border", "d-flex", "align-items-center", "gap-1", "py-2", "px-3"], [1, "bi", "bi-person-circle", "text-success"], [1, "alert", "alert-success"], [1, "bi", "bi-check-circle", "me-2"], [1, "alert", "alert-danger"], [1, "bi", "bi-exclamation-circle", "me-2"], [1, "alert", "alert-info", "d-flex", "flex-wrap", "align-items-center", "gap-2"], [1, "bi", "bi-info-circle", "me-2"], [1, "flex-grow-1"], ["class", "btn btn-sm btn-outline-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-arrow-clockwise", "me-1"]], template: function VirtualClassRoomComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div")(5, "h2", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(9, VirtualClassRoomComponent_div_9_Template, 2, 0, "div", 7)(10, VirtualClassRoomComponent_div_10_Template, 14, 7, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate((ctx.vc == null ? null : ctx.vc.title) || "Classe virtuelle");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.vc == null ? null : ctx.vc.description);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && ctx.vc);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VirtualClassRoomComponent, { className: "VirtualClassRoomComponent" });
})();
export {
  VirtualClassRoomComponent
};
//# sourceMappingURL=chunk-5GJFBZ2J.js.map

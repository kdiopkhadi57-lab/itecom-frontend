import {
  HttpClient,
  HttpParams,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SMYYTT5I.js";

// src/app/core/services/reference.service.ts
var ReferenceService = class _ReferenceService {
  constructor(http) {
    this.http = http;
  }
  getReferences(opts) {
    let params = new HttpParams();
    if (opts?.collection)
      params = params.set("collection", opts.collection);
    if (opts?.search)
      params = params.set("search", opts.search);
    return this.http.get("/api/references", { params });
  }
  getCollections() {
    return this.http.get("/api/references/collections");
  }
  create(ref) {
    return this.http.post("/api/references", ref);
  }
  update(id, ref) {
    return this.http.put(`/api/references/${id}`, ref);
  }
  delete(id) {
    return this.http.delete(`/api/references/${id}`);
  }
  // ── Citation formatter (client-side, no server needed) ──────────────────────
  formatCitation(ref, style) {
    const authors = this.formatAuthors(ref.authors ?? "", style);
    const year = ref.year ?? "s.d.";
    const title = ref.title ?? "";
    const pub = ref.publisher ?? "";
    const place = ref.place ?? "";
    switch (style) {
      case "APA":
        return this.apa(ref, authors, year, title, pub, place);
      case "MLA":
        return this.mla(ref, authors, title, pub, place, year);
      case "Chicago":
        return this.chicago(ref, authors, year, title, pub, place);
      case "IEEE":
        return this.ieee(ref, authors, title, year, pub, place);
      case "Vancouver":
        return this.vancouver(ref, authors, title, year, pub, place);
      default:
        return "";
    }
  }
  formatAuthors(raw, style) {
    if (!raw)
      return "";
    const names = raw.split(",").map((n) => n.trim()).filter(Boolean);
    if (style === "APA") {
      return names.map((n) => {
        const parts = n.split(" ");
        if (parts.length < 2)
          return n;
        const last = parts[parts.length - 1];
        const inits = parts.slice(0, -1).map((p) => p[0] + ".").join(" ");
        return `${last}, ${inits}`;
      }).join(", ");
    }
    if (style === "MLA") {
      if (names.length === 0)
        return "";
      if (names.length === 1) {
        const p = names[0].split(" ");
        return p.length > 1 ? `${p[p.length - 1]}, ${p.slice(0, -1).join(" ")}` : names[0];
      }
      const first = names[0].split(" ");
      const firstFmt = first.length > 1 ? `${first[first.length - 1]}, ${first.slice(0, -1).join(" ")}` : names[0];
      return `${firstFmt}, et al.`;
    }
    return names.join(", ");
  }
  apa(r, authors, year, title, pub, place) {
    if (r.refType === "article" || r.refType === "journal") {
      const pp = r.startPage && r.endPage ? `${r.startPage}\u2013${r.endPage}` : r.pages ?? "";
      const doi = r.doi ? ` https://doi.org/${r.doi}` : "";
      return `${authors} (${year}). ${title}. *${r.journal ?? ""}*, *${r.volume ?? ""}*(${r.issue ?? ""}), ${pp}.${doi}`;
    }
    if (r.refType === "website") {
      return `${authors} (${year}). *${title}*. R\xE9cup\xE9r\xE9 de ${r.url ?? ""}`;
    }
    if (r.refType === "thesis") {
      return `${authors} (${year}). *${title}* [${r.thesisType ?? "Th\xE8se de doctorat"}, ${r.university ?? ""}].`;
    }
    const placeStr = place && pub ? `${place} : ${pub}` : pub || place;
    return `${authors} (${year}). *${title}*. ${placeStr}.`;
  }
  mla(r, authors, title, pub, place, year) {
    if (r.refType === "article" || r.refType === "journal") {
      const pp = r.startPage && r.endPage ? `${r.startPage}-${r.endPage}` : r.pages ?? "";
      return `${authors}. "${title}." *${r.journal ?? ""}*, vol. ${r.volume ?? ""}, no. ${r.issue ?? ""}, ${year}, pp. ${pp}.`;
    }
    if (r.refType === "website") {
      return `${authors}. "${title}." *Web*, ${year}, ${r.url ?? ""}. Consult\xE9 le ${r.accessDate ?? ""}.`;
    }
    return `${authors}. *${title}*. ${pub}, ${year}.`;
  }
  chicago(r, authors, year, title, pub, place) {
    if (r.refType === "article" || r.refType === "journal") {
      const pp = r.startPage && r.endPage ? `${r.startPage}\u2013${r.endPage}` : r.pages ?? "";
      return `${authors}. "${title}." *${r.journal ?? ""}* ${r.volume ?? ""}, no. ${r.issue ?? ""} (${year}): ${pp}.`;
    }
    const placeStr = place && pub ? `${place}: ${pub}` : pub || place;
    return `${authors}. *${title}*. ${placeStr}, ${year}.`;
  }
  ieee(r, authors, title, year, pub, place) {
    const names = (r.authors ?? "").split(",").map((n) => n.trim()).filter(Boolean);
    const ieeAuth = names.map((n) => {
      const p = n.split(" ");
      if (p.length < 2)
        return n;
      return p.slice(0, -1).map((x) => x[0] + ".").join(" ") + " " + p[p.length - 1];
    }).join(", ");
    if (r.refType === "article" || r.refType === "journal") {
      const pp = r.startPage && r.endPage ? `pp. ${r.startPage}\u2013${r.endPage}` : "";
      return `${ieeAuth}, "${title}," *${r.journal ?? ""}*, vol. ${r.volume ?? ""}, no. ${r.issue ?? ""}, ${pp}, ${year}.`;
    }
    const placeStr = place && pub ? `${place}: ${pub}` : pub || place;
    return `${ieeAuth}, *${title}*. ${placeStr}, ${year}.`;
  }
  vancouver(r, authors, title, year, pub, place) {
    const names = (r.authors ?? "").split(",").map((n) => n.trim()).filter(Boolean);
    const vancAuth = names.map((n) => {
      const p = n.split(" ");
      if (p.length < 2)
        return n;
      return `${p[p.length - 1]} ${p.slice(0, -1).map((x) => x[0]).join("")}`;
    }).join(", ");
    if (r.refType === "article" || r.refType === "journal") {
      const pp = r.startPage && r.endPage ? `${r.startPage}-${r.endPage}` : r.pages ?? "";
      return `${vancAuth}. ${title}. ${r.journal ?? ""}. ${year};${r.volume ?? ""}(${r.issue ?? ""}):${pp}.`;
    }
    const placeStr = place && pub ? `${place}: ${pub}` : pub || place;
    return `${vancAuth}. ${title}. ${placeStr}; ${year}.`;
  }
  // ── BibTeX export ───────────────────────────────────────────────────────────
  toBibTeX(ref) {
    const key = (ref.authors?.split(" ")[0] ?? "Anon") + (ref.year ?? "");
    const type = ref.refType === "article" || ref.refType === "journal" ? "article" : ref.refType === "thesis" ? "phdthesis" : ref.refType === "website" ? "misc" : "book";
    const fields = [];
    const add = (k, v) => {
      if (v)
        fields.push(`  ${k} = {${v}}`);
    };
    add("author", ref.authors);
    add("title", ref.title);
    add("year", ref.year);
    add("publisher", ref.publisher);
    add("address", ref.place);
    add("isbn", ref.isbn);
    add("journal", ref.journal);
    add("volume", ref.volume);
    add("number", ref.issue);
    add("pages", ref.startPage && ref.endPage ? `${ref.startPage}--${ref.endPage}` : ref.pages);
    add("doi", ref.doi);
    add("url", ref.url);
    add("note", ref.note);
    add("school", ref.university);
    return `@${type}{${key},
${fields.join(",\n")}
}`;
  }
  // ── ISBN / DOI lookup via backend proxy (évite les erreurs CORS) ─────────────
  lookupISBN(isbn) {
    const clean = isbn.replace(/[-\s]/g, "");
    return this.http.get(`/api/lookup/isbn/${clean}`);
  }
  lookupDOI(doi) {
    return this.http.get(`/api/lookup/doi`, { params: { doi } });
  }
  lookupZotero(userId, apiKey) {
    return this.http.get(`/api/lookup/zotero/${userId}/items`, {
      headers: { "X-Zotero-Key": apiKey }
    });
  }
  static {
    this.\u0275fac = function ReferenceService_Factory(t) {
      return new (t || _ReferenceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReferenceService, factory: _ReferenceService.\u0275fac, providedIn: "root" });
  }
};

export {
  ReferenceService
};
//# sourceMappingURL=chunk-3WQZPF57.js.map

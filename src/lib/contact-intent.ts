// Contact "intelligence": remembers which service a visitor was reading and where they
// came from, so the contact form can pre-fill itself and every lead arrives with context.
// Session storage only — nothing is sent anywhere until the visitor submits the form.

const KEYS = {
  lastService: "cc-last-service",
  attribution: "cc-attribution",
} as const;

export interface Attribution {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

function storage(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.sessionStorage;
  } catch {
    return null;
  }
}

/** Link to the contact page carrying context, e.g. /contact?service=seo-analytics&plan=SEO%20Growth&from=/pricing */
export function contactHref(opts: { service?: string; plan?: string; from?: string } = {}) {
  const params = new URLSearchParams();
  if (opts.service) params.set("service", opts.service);
  if (opts.plan) params.set("plan", opts.plan);
  if (opts.from) params.set("from", opts.from);
  const q = params.toString();
  return q ? `/contact?${q}` : "/contact";
}

/** Call when a visitor views a service or landing page. */
export function rememberService(slug: string) {
  storage()?.setItem(KEYS.lastService, slug);
}

export function lastViewedService(): string | null {
  return storage()?.getItem(KEYS.lastService) ?? null;
}

/** Record how this visit started (first page, referrer, UTM tags). Runs once per session. */
export function captureAttribution() {
  const s = storage();
  if (!s || s.getItem(KEYS.attribution)) return;
  const q = new URLSearchParams(window.location.search);
  const referrer = document.referrer && !document.referrer.includes(window.location.host) ? document.referrer : "";
  const data: Attribution = {
    landingPage: window.location.pathname,
    referrer,
    utmSource: q.get("utm_source") ?? "",
    utmMedium: q.get("utm_medium") ?? "",
    utmCampaign: q.get("utm_campaign") ?? "",
  };
  s.setItem(KEYS.attribution, JSON.stringify(data));
}

export function getAttribution(): Attribution | null {
  try {
    const raw = storage()?.getItem(KEYS.attribution);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

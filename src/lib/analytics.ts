// Google Analytics 4 helpers. The gtag.js snippet itself lives in index.html, so it
// loads on every page; these helpers add the lead events Enhanced Measurement misses.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a GA4 event. Safe to call anywhere: no-ops on the server or when GA is blocked. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/**
 * Record clicks on phone and email links anywhere on the site (header, footer,
 * contact page, legacy pages) with one delegated listener. Returns a cleanup function.
 */
export function trackContactLinkClicks() {
  const onClick = (e: MouseEvent) => {
    const link = (e.target as Element | null)?.closest?.("a[href^='tel:'], a[href^='mailto:']");
    if (!link) return;
    const href = link.getAttribute("href") ?? "";
    const isPhone = href.startsWith("tel:");
    trackEvent(isPhone ? "phone_click" : "email_click", {
      link_url: href,
      page_path: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}

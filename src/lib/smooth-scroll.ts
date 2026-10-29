// Inertial smooth scrolling (Lenis). Client-only and lazy-loaded; skipped entirely for
// prefers-reduced-motion. Native scroll position is kept in sync, so framer-motion's
// useScroll, sticky positioning and window.scrollY all keep working unchanged.
import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function startSmoothScroll() {
  if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  let cancelled = false;
  import("lenis").then(({ default: LenisCtor }) => {
    if (cancelled) return;
    lenis = new LenisCtor({
      lerp: 0.09,
      autoRaf: true,
      anchors: true, // in-page #links glide instead of jumping
      allowNestedScroll: true, // menus, dialogs and panels keep their own scrolling
    });
  });
  return () => {
    cancelled = true;
    lenis?.destroy();
    lenis = null;
  };
}

/** Jump to the top without animation (route changes). Works with or without Lenis. */
export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0, behavior: "instant" });
}

/** Glide to an absolute scroll position (uses Lenis when active, native smooth scroll otherwise). */
export function scrollToY(y: number) {
  if (lenis) lenis.scrollTo(y, { duration: 1.4 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

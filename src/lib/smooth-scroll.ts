// Scrolling uses the browser's native engine: it tracks wheel, trackpad and touch input
// exactly, with zero added latency. Smooth glides are used only for deliberate jumps
// (anchor links via CSS scroll-behavior, and the chapter buttons below).

/** Jump to the top without animation (route changes). */
export function resetScroll() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

/** Glide to an absolute scroll position (respects reduced-motion via CSS). */
export function scrollToY(y: number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: y, behavior: reduce ? "instant" : "smooth" });
}

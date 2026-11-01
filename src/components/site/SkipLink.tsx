/** First focusable element on every page: keyboard and screen-reader users jump past the header. */
export function SkipLink() {
  const skip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.querySelector("main");
    if (!main) return;
    main.setAttribute("tabindex", "-1");
    main.focus();
    main.scrollIntoView({ block: "start" });
  };
  return (
    <a
      href="#main"
      onClick={skip}
      className="sr-only transition-none focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:h-12 focus:items-center focus:bg-ink focus:px-5 focus:font-semibold focus:text-ink-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

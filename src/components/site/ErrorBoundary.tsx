import { Component, type ErrorInfo, type ReactNode } from "react";

type State = { error: Error | null };

/**
 * Last line of defence: a runtime error in one page shows a branded recovery screen with a
 * way back, instead of a blank white page. Errors are reported to GA4 when it is loaded.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", "exception", { description: `${error.name}: ${error.message}`, fatal: true });
    if (import.meta.env.DEV) console.error(error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <main className="flex min-h-screen items-center bg-background px-6 py-24 text-foreground">
        <div className="mx-auto w-full max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Something went wrong</p>
          <h1 className="mt-5 font-display text-4xl leading-tight md:text-5xl">This page hit an unexpected error.</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Reloading usually fixes it. If it keeps happening, call us at{" "}
            <a href="tel:281-901-7016" className="font-medium text-foreground underline underline-offset-4">(281) 901-7016</a> or email{" "}
            <a href="mailto:Hunain@visitcardinal.com" className="font-medium text-foreground underline underline-offset-4">Hunain@visitcardinal.com</a>.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex h-12 items-center bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary"
            >
              Reload the page
            </button>
            <a href="/" className="inline-flex h-12 items-center border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
              Go to the homepage
            </a>
          </div>
        </div>
      </main>
    );
  }
}

import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AppRoutes } from "./AppRoutes";
import { trackContactLinkClicks } from "@/lib/analytics";
import { captureAttribution } from "@/lib/contact-intent";
import { MotionConfig } from "framer-motion";
import { CursorLabel, PageFade } from "@/components/site/motion";
import { CardinalFlight } from "@/components/site/CardinalFlight";
import { ErrorBoundary } from "@/components/site/ErrorBoundary";
import { SkipLink } from "@/components/site/SkipLink";

const queryClient = new QueryClient();

/** Shared by the browser app and the build-time pre-renderer (src/entry-server.tsx). */
export function AppProviders({ children, helmetContext }: { children: ReactNode; helmetContext?: object }) {
  return (
    <HelmetProvider context={helmetContext}>
      <MotionConfig reducedMotion="user">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
      </MotionConfig>
    </HelmetProvider>
  );
}

/**
 * Everything inside the router. The pre-renderer (src/entry-server.tsx) renders this exact tree,
 * so the browser can hydrate the static HTML instead of throwing it away and rendering again.
 */
export function AppShell() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <CursorLabel />
      <CardinalFlight />
      <ErrorBoundary>
        <PageFade>
          <AppRoutes />
        </PageFade>
      </ErrorBoundary>
    </>
  );
}

const App = () => {
  useEffect(() => {
    captureAttribution();
    return trackContactLinkClicks();
  }, []);

  return (
    <AppProviders>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;

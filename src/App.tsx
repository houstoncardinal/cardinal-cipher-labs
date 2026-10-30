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

const App = () => {
  useEffect(() => {
    captureAttribution();
    return trackContactLinkClicks();
  }, []);

  return (
    <AppProviders>
      <BrowserRouter>
        <ScrollToTop />
        <CursorLabel />
        <CardinalFlight />
        <PageFade>
          <AppRoutes />
        </PageFade>
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;

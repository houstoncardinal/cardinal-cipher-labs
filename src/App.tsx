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

const queryClient = new QueryClient();

/** Shared by the browser app and the build-time pre-renderer (src/entry-server.tsx). */
export function AppProviders({ children, helmetContext }: { children: ReactNode; helmetContext?: object }) {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

const App = () => {
  useEffect(() => trackContactLinkClicks(), []);

  return (
    <AppProviders>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;

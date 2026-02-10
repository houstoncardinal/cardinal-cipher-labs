import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CursorTrail } from "@/components/ui/cursor-trail";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLogin } from "./pages/admin/Login";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminClients } from "./pages/admin/Clients";
import { AdminProjects } from "./pages/admin/Projects";
import { AdminDocuments } from "./pages/admin/Documents";
import { AdminActivityLogs } from "./pages/admin/ActivityLogs";
import { AdminSEOSchemas } from "./pages/admin/SEOSchemas";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import SEOAnalytics from "./pages/services/SEOAnalytics";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import BrandIdentity from "./pages/services/BrandIdentity";
import UXUI from "./pages/services/UXUI";
import About from "./pages/About";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <CursorTrail />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mobile-apps" element={<MobileApps />} />
              <Route path="/services/seo-analytics" element={<SEOAnalytics />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/brand-identity" element={<BrandIdentity />} />
              <Route path="/services/ux-ui" element={<UXUI />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Protected Admin Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminDashboard />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="clients" element={<AdminClients />} />
                <Route path="projects" element={<AdminProjects />} />
                <Route path="documents" element={<AdminDocuments />} />
                <Route path="seo-schemas" element={<AdminSEOSchemas />} />
                <Route path="activity" element={<AdminActivityLogs />} />
              </Route>

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

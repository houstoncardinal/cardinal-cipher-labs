import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { HoustonClassicLayout, IndustryClassicLayout } from "@/components/services/ClassicLandingLayouts";
import { services } from "@/lib/services-catalog";
import { landingPages } from "@/lib/landing-pages";
import { startPages } from "@/lib/start-pages";
import { StartLandingLayout } from "@/components/start/StartLandingLayout";
import { caseStudies } from "@/lib/case-studies";
import { articles as blogArticles } from "@/lib/blog-data";
import { redirects } from "@/lib/redirects";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FounderStory from "./pages/FounderStory";
import PortfolioPage from "./pages/PortfolioPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import ServicesPage from "./pages/ServicesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// The admin app is loaded on demand so public pages never download it.
const AdminLogin = lazy(() => import("./pages/admin/Login").then((m) => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard").then((m) => ({ default: m.AdminDashboard })));
const AdminClients = lazy(() => import("./pages/admin/Clients").then((m) => ({ default: m.AdminClients })));
const AdminProjects = lazy(() => import("./pages/admin/Projects").then((m) => ({ default: m.AdminProjects })));
const AdminDocuments = lazy(() => import("./pages/admin/Documents").then((m) => ({ default: m.AdminDocuments })));
const AdminActivityLogs = lazy(() => import("./pages/admin/ActivityLogs").then((m) => ({ default: m.AdminActivityLogs })));
const AdminSEOSchemas = lazy(() => import("./pages/admin/SEOSchemas").then((m) => ({ default: m.AdminSEOSchemas })));
const AdminLeads = lazy(() => import("./pages/admin/Leads").then((m) => ({ default: m.AdminLeads })));
const AdminServices = lazy(() => import("./pages/admin/Services").then((m) => ({ default: m.AdminServices })));
const AdminAnalytics = lazy(() => import("./pages/admin/Analytics").then((m) => ({ default: m.AdminAnalytics })));
const AdminLayout = lazy(() => import("@/components/admin/AdminLayout").then((m) => ({ default: m.AdminLayout })));

/** Hand-built pages. Service, landing, case-study and blog pages come from their data files. */
const staticPages: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/about", element: <About /> },
  { path: "/about/hunain-qureshi", element: <FounderStory /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/careers", element: <Careers /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
];

/** Pre-rendered but kept out of the sitemap (carry noindex). */
export const noindexPaths = new Set<string>();

/** Every public URL: drives build-time pre-rendering and sitemap.xml. */
export const publicPaths: string[] = [
  ...staticPages.map((p) => p.path),
  ...services.map((s) => s.path),
  ...landingPages.map((p) => p.path),
  ...startPages.map((p) => p.path),
  ...caseStudies.filter((c) => c.detail).map((c) => `/portfolio/${c.slug}`),
  ...blogArticles.map((a) => `/blog/${a.slug}`),
];

export { redirects };

function AdminLoading() {
  return <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">Loading…</div>;
}

function ServiceBySlug() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  return service ? <ServicePageLayout service={service} /> : <NotFound />;
}

export function AppRoutes() {
  return (
    <Routes>
      {staticPages.map((p) => <Route key={p.path} path={p.path} element={p.element} />)}
      {landingPages.map((p) => (
        <Route key={p.path} path={p.path} element={p.kind === "houston" ? <HoustonClassicLayout page={p} /> : <IndustryClassicLayout page={p} />} />
      ))}
      {startPages.map((p) => (
        <Route key={p.path} path={p.path} element={<StartLandingLayout page={p} />} />
      ))}
      {Object.entries(redirects).map(([from, to]) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
      <Route path="/services/:slug" element={<ServiceBySlug />} />
      <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />

      <Route path="/admin/login" element={<Suspense fallback={<AdminLoading />}><AdminLogin /></Suspense>} />
      <Route
        path="/admin"
        element={<Suspense fallback={<AdminLoading />}><AdminLayout /></Suspense>}
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="clients" element={<AdminClients />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="documents" element={<AdminDocuments />} />
        <Route path="seo-schemas" element={<AdminSEOSchemas />} />
        <Route path="activity" element={<AdminActivityLogs />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

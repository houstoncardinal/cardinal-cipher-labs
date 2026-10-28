import { Routes, Route, useParams } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { services } from "@/lib/services-catalog";
import { caseStudies } from "@/lib/case-studies";
import { articles as blogArticles } from "@/lib/blog-data";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLogin } from "./pages/admin/Login";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminClients } from "./pages/admin/Clients";
import { AdminProjects } from "./pages/admin/Projects";
import { AdminDocuments } from "./pages/admin/Documents";
import { AdminActivityLogs } from "./pages/admin/ActivityLogs";
import { AdminSEOSchemas } from "./pages/admin/SEOSchemas";
import About from "./pages/About";
import PortfolioPage from "./pages/PortfolioPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import { HealthcareIndustry } from "./pages/industry/Healthcare";
import { LegalIndustry } from "./pages/industry/Legal";
import { FinancialIndustry } from "./pages/industry/Financial";
import { TechnologyIndustry } from "./pages/industry/Technology";
import { AIAutomationIndustry } from "./pages/industry/AIAutomation";
import { ConstructionIndustry } from "./pages/industry/Construction";
import { HoustonSEOPage } from "./pages/HoustonSEO";
import { HoustonWebDesignPage } from "./pages/HoustonWebDesign";
import { HoustonAppDevelopmentPage } from "./pages/HoustonAppDevelopment";
import { HoustonWebDeveloperPage } from "./pages/HoustonWebDeveloper";
import { HoustonSEOCompanyPage } from "./pages/HoustonSEOCompany";
import HoustonLawFirmWebDesignPage from "./pages/HoustonLawFirmWebDesign";
import HoustonMedicalWebDesignPage from "./pages/HoustonMedicalWebDesign";
import HoustonRestaurantWebDesignPage from "./pages/HoustonRestaurantWebDesign";
import HoustonEcommerceWebDesignPage from "./pages/HoustonEcommerceWebDesign";
import HoustonRealEstateWebDesignPage from "./pages/HoustonRealEstateWebDesign";
import HoustonServices from "./pages/HoustonServices";
import { CitySEOPage, citySlugs } from "./pages/CitySEO";
import RapidDelivery from "./pages/RapidDelivery";
import RushPrototyping from "./pages/RushPrototyping";
import EnterpriseSecurity from "./pages/EnterpriseSecurity";
import SameDaySupport from "./pages/SameDaySupport";
import CustomDesign from "./pages/CustomDesign";
import ModernTechStack from "./pages/ModernTechStack";
import ServicesPage from "./pages/ServicesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

/** Explicit, single-segment pages. Keep this list in sync with the <Route>s below. */
const staticPages: { path: string; element: JSX.Element }[] = [
  { path: "/", element: <Index /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/careers", element: <Careers /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/industry/healthcare", element: <HealthcareIndustry /> },
  { path: "/industry/legal", element: <LegalIndustry /> },
  { path: "/industry/financial", element: <FinancialIndustry /> },
  { path: "/industry/technology", element: <TechnologyIndustry /> },
  { path: "/industry/ai-automation", element: <AIAutomationIndustry /> },
  { path: "/industry/construction", element: <ConstructionIndustry /> },
  { path: "/houston-seo", element: <HoustonSEOPage /> },
  { path: "/houston-web-design", element: <HoustonWebDesignPage /> },
  { path: "/houston-app-development", element: <HoustonAppDevelopmentPage /> },
  { path: "/houston-web-developer", element: <HoustonWebDeveloperPage /> },
  { path: "/houston-seo-company", element: <HoustonSEOCompanyPage /> },
  { path: "/houston-services", element: <HoustonServices /> },
  { path: "/houston-law-firm-website-design", element: <HoustonLawFirmWebDesignPage /> },
  { path: "/houston-medical-website-design", element: <HoustonMedicalWebDesignPage /> },
  { path: "/houston-restaurant-website-design", element: <HoustonRestaurantWebDesignPage /> },
  { path: "/houston-ecommerce-website-design", element: <HoustonEcommerceWebDesignPage /> },
  { path: "/houston-real-estate-website-design", element: <HoustonRealEstateWebDesignPage /> },
  { path: "/rapid-delivery", element: <RapidDelivery /> },
  { path: "/rush-prototyping", element: <RushPrototyping /> },
  { path: "/enterprise-security", element: <EnterpriseSecurity /> },
  { path: "/same-day-support", element: <SameDaySupport /> },
  { path: "/custom-design", element: <CustomDesign /> },
  { path: "/modern-tech-stack", element: <ModernTechStack /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-of-service", element: <TermsOfService /> },
];

/** Paths whose pages carry noindex — pre-rendered (so links work) but kept out of the sitemap. */
export const noindexPaths = new Set(citySlugs.map((c) => `/${c}-seo`));

/** Every public URL: drives build-time pre-rendering and sitemap.xml. */
export const publicPaths: string[] = [
  ...staticPages.map((p) => p.path),
  ...services.map((s) => s.path),
  ...caseStudies.filter((c) => c.detail).map((c) => `/portfolio/${c.slug}`),
  ...blogArticles.map((a) => `/blog/${a.slug}`),
  ...citySlugs.map((c) => `/${c}-seo`),
];

function ServiceBySlug() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  return service ? <ServicePageLayout service={service} /> : <NotFound />;
}

export function AppRoutes() {
  return (
    <Routes>
      {staticPages.map((p) => <Route key={p.path} path={p.path} element={p.element} />)}
      <Route path="/services/:slug" element={<ServiceBySlug />} />
      <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      {citySlugs.map((c) => (
        <Route key={c} path={`/${c}-seo`} element={<CitySEOPage cityKey={c} />} />
      ))}

      <Route path="/admin/login" element={<AdminLogin />} />
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

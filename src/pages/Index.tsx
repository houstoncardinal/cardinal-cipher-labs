import { Header } from "@/components/layout/Header";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Advantage } from "@/components/sections/Advantage";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { FreeAuditCTA } from "@/components/sections/FreeAuditCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { generateAllHomePageSchemas, generateVideoObjectSchema, generateAllAdvancedHomePageSchemas } from "@/lib/schema-generators";
import { siteConfig } from "@/lib/seo-config";
import { Link } from "react-router-dom";

const Index = () => {
  // Generate all comprehensive E-E-A-T compliant schemas
  const schemas = [
    ...generateAllHomePageSchemas(),
    ...generateAllAdvancedHomePageSchemas(),
    generateVideoObjectSchema({
      name: "Cardinal Consulting — Houston's #1 Web Design & App Development Agency",
      description: "See how Cardinal Consulting builds custom websites that rank #1 on Google, iOS/Android apps, and SEO strategies that grow Houston businesses. 500+ projects delivered.",
      thumbnailUrl: 'https://www.visitcardinal.com/og-image.jpg',
      uploadDate: '2025-01-01',
      duration: 'PT3M',
      url: 'https://www.visitcardinal.com',
    }),
  ];

  return (
    <>
      <SEOHead
        title="#1 Web Design & App Development Company Houston TX"
        description="Cardinal Consulting — Houston's #1 web design company, app development agency & SEO experts. Custom websites that rank #1 on Google, iOS/Android apps, local SEO & digital marketing. 500+ Houston projects. Call (281) 901-7016 for free consultation."
        url={siteConfig.url}
        schemas={schemas}
        keywords={[
          'web design company Houston',
          'best web design company Houston',
          '#1 web design company Houston',
          'web design company near me Houston',
          'app development company Houston',
          'app development company near me',
          'best web developer Houston',
          'web developer near me Houston',
          'SEO company Houston',
          'best SEO company Houston',
          'Houston web design agency',
          'Houston app development',
          'web design Houston TX',
          'custom website development Houston',
          'mobile app development Houston',
          'iOS app development Houston',
          'Android app development Houston',
          'digital marketing Houston',
          'local SEO Houston',
          'Houston web developer',
          'website design near me Houston',
          'top web design company Houston',
          'best website designer Houston',
          'web development company Houston Texas',
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <VerticalNav />
        <main>
          <section id="hero"><Hero /></section>
          <section id="clients"><Clients /></section>
          <section id="services"><Services /></section>
          <section id="advantage"><Advantage /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="process"><Process /></section>
          <section id="industries"><Industries /></section>
          <section id="reviews"><GoogleReviews /></section>
          <section id="audit"><FreeAuditCTA /></section>
          <section id="faq"><FAQ /></section>
          <section id="contact"><Contact /></section>

          {/* Industry-Specific Web Design — Internal Link Hub */}
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">Industry-Specific Web Design in Houston</p>
              <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto mb-8">We build specialized websites for every Houston industry — designed for your customers and optimized for your keywords.</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  { label: "Law Firm Websites", href: "/houston-law-firm-website-design" },
                  { label: "Medical Practice Websites", href: "/houston-medical-website-design" },
                  { label: "Restaurant Websites", href: "/houston-restaurant-website-design" },
                  { label: "eCommerce Websites", href: "/houston-ecommerce-website-design" },
                  { label: "Real Estate Websites", href: "/houston-real-estate-website-design" },
                  { label: "Construction Websites", href: "/houston-construction-website-design" },
                  { label: "Startup Websites", href: "/houston-startup-website-design" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="inline-flex items-center gap-1 px-5 py-2.5 bg-white rounded-full border border-gray-200 hover:border-red-300 hover:text-red-600 text-sm font-semibold text-gray-700 transition-all duration-200 hover:shadow-sm">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

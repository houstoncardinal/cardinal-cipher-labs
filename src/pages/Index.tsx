import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Advantage } from "@/components/sections/Advantage";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
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
      thumbnailUrl: 'https://visitcardinal.com/og-image.jpg',
      uploadDate: '2025-01-01',
      duration: 'PT3M',
      url: 'https://visitcardinal.com',
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
        <main>
          <section id="hero"><Hero /></section>
          <section id="clients"><Clients /></section>
          <section id="services"><Services /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="industries"><Industries /></section>
          <section id="advantage"><Advantage /></section>
          <section id="process"><Process /></section>
          <section id="reviews"><GoogleReviews /></section>
          <section id="faq"><FAQ /></section>
          <section id="contact"><Contact /></section>

          {/* Industry-specific web design — internal link hub */}
          <section className="border-t border-border bg-secondary py-12">
            <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-x-6 gap-y-3 px-6 text-sm lg:px-10">
              <span className="font-semibold text-foreground">Industry websites in Houston:</span>
              {[
                { label: "Law Firm Websites", href: "/houston-law-firm-website-design" },
                { label: "Medical Practice Websites", href: "/houston-medical-website-design" },
                { label: "Restaurant Websites", href: "/houston-restaurant-website-design" },
                { label: "eCommerce Websites", href: "/houston-ecommerce-website-design" },
                { label: "Real Estate Websites", href: "/houston-real-estate-website-design" },
                { label: "Construction Websites", href: "/houston-construction-website-design" },
                { label: "Startup Websites", href: "/houston-startup-website-design" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

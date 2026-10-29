import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Craft } from "@/components/sections/Craft";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { faqSchema, organizationSchema, webPageSchema, websiteSchema } from "@/lib/site-schema";
import { siteConfig } from "@/lib/seo-config";
import { homeFaqs } from "@/lib/home-faqs";
import { Link } from "react-router-dom";
import { VelocityMarquee } from "@/components/site/canvas";

const Index = () => {
  // Generate all comprehensive E-E-A-T compliant schemas
  const description =
    "Cardinal Consulting designs, builds, and grows digital businesses from Houston, TX: custom websites, mobile apps, branding, SEO, social media, AI automation, and technical consulting. 500+ projects delivered.";
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({ url: siteConfig.url, name: "Houston Web Design & App Development Company", description }),
    faqSchema(siteConfig.url, homeFaqs),
  ];

  return (
    <>
      <SEOHead
        title="Houston Web Design & App Development Company"
        description={description}
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
          <Craft />
          <section id="portfolio"><Portfolio /></section>
          <section id="industries"><Industries /></section>
          <section id="process"><Process /></section>
          <section id="faq"><FAQ /></section>
          <VelocityMarquee words={["Let's build", "something", "remarkable"]} baseVelocity={1.8} className="border-t border-border" />
          <section id="contact"><Contact /></section>

          {/* Industry-specific web design — internal link hub */}
          <section className="border-t border-border bg-background py-10">
            <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-x-6 gap-y-3 px-6 text-sm lg:px-10">
              <span className="font-semibold text-foreground">Industry websites in Houston:</span>
              {[
                { label: "Law Firm Websites", href: "/houston-law-firm-website-design" },
                { label: "Medical Practice Websites", href: "/houston-medical-website-design" },
                { label: "Restaurant Websites", href: "/houston-restaurant-website-design" },
                { label: "eCommerce Websites", href: "/houston-ecommerce-website-design" },
                { label: "Real Estate Websites", href: "/houston-real-estate-website-design" },
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

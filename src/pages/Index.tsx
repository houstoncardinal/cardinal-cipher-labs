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
  // Search targeting: the homepage is the site's strongest page, so it carries the core
  // "Houston web design" phrase in the title, H1 and description, and links to the dedicated
  // /houston-web-design page with that exact anchor. Keep "Houston" here.
  const description =
    "Houston web design and app development company. Custom, fast websites ready for Google and AI search, from $3,500, built by a senior team near the Galleria.";
  const schemas = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({ url: siteConfig.url, name: "Houston Web Design & App Development Company", description }),
    faqSchema(siteConfig.url, homeFaqs),
  ];

  return (
    <>
      <SEOHead
        title="Houston Web Design & App Development"
        description={description}
        url={siteConfig.url}
        schemas={schemas}
        keywords={[
          "Houston web design",
          "web design Houston",
          "Houston web design company",
          "web design company Houston TX",
          "Houston web developer",
          "app development company Houston",
          "mobile app development Houston",
          "SEO company Houston",
          "AI automation Houston",
          "custom website development",
          "enterprise web design",
          "fractional CTO",
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
              <span className="font-semibold text-foreground">Websites in Houston:</span>
              {[
                { label: "Houston Web Design", href: "/houston-web-design" },
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

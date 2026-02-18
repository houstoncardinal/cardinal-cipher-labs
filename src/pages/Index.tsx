import { Header } from "@/components/layout/Header";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { MobileToolbar } from "@/components/layout/MobileToolbar";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Advantage } from "@/components/sections/Advantage";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { generateAllHomePageSchemas } from "@/lib/schema-generators";

const Index = () => {
  // Generate all comprehensive E-E-A-T compliant schemas
  const schemas = generateAllHomePageSchemas();

  return (
    <>
      <SEOHead
        title="Web Design & Digital Marketing Agency Houston TX"
        description="Cardinal Consulting is Houston's top-rated web design and digital marketing agency. We build custom websites, mobile apps, and SEO strategies that grow your business. Serving Houston and nationwide. Call (281) 901-7016."
        schemas={schemas}
        keywords={[
          'web design Houston',
          'web design agency Houston',
          'digital marketing agency Houston',
          'Houston web developer',
          'website development Houston TX',
          'SEO company Houston',
          'mobile app development Houston',
          'custom website design',
          'web development company',
          'digital marketing services',
          'SEO services Houston TX',
          'app development Houston',
          'brand identity design',
          'UX UI design agency',
          'Houston digital agency',
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <VerticalNav />
        <MobileToolbar />
        <main>
          <section id="hero"><Hero /></section>
          <section id="clients"><Clients /></section>
          <section id="services"><Services /></section>
          <section id="advantage"><Advantage /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="process"><Process /></section>
          <section id="industries"><Industries /></section>
          <section id="faq"><FAQ /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

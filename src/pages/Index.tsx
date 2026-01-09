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
        title="Enterprise Software Development & Consulting"
        description="Transform your business with enterprise-grade software solutions. Expert cloud architecture, AI integration, and digital transformation services from certified professionals."
        schemas={schemas}
        keywords={[
          'enterprise software development',
          'cloud architecture consulting',
          'AI machine learning integration',
          'digital transformation services',
          'DevOps infrastructure',
          'cybersecurity solutions',
          'AWS consulting partner',
          'software engineering excellence',
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

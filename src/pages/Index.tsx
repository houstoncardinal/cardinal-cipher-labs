import { Header } from "@/components/layout/Header";
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
        <main>
          <Hero />
          <Clients />
          <Services />
          <Advantage />
          <Portfolio />
          <Process />
          <Industries />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

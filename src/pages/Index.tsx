import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Divisions } from "@/components/sections/Divisions";
import { Industries } from "@/components/sections/Industries";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cardinal Consulting",
    "description": "Strategic digital infrastructure consulting for enterprise organizations. Specializing in web development, AI systems, dashboards, SEO, and digital operations.",
    "url": "https://cardinal.consulting",
    "logo": "https://cardinal.consulting/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-888-555-1234",
      "contactType": "sales",
      "email": "briefings@cardinal.consulting"
    },
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Development",
      "Software Engineering",
      "AI Systems",
      "Business Intelligence",
      "SEO",
      "Digital Infrastructure"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cardinal Consulting | Strategic Digital Infrastructure</title>
        <meta 
          name="description" 
          content="Enterprise digital consulting for mission-critical systems. Web development, AI integration, dashboards, SEO, and digital operations for organizations that demand precision." 
        />
        <meta name="keywords" content="enterprise consulting, digital infrastructure, web development, AI systems, business intelligence, SEO, software engineering" />
        <link rel="canonical" href="https://cardinal.consulting" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cardinal Consulting | Strategic Digital Infrastructure" />
        <meta property="og:description" content="Enterprise digital consulting for mission-critical systems. Web development, AI integration, dashboards, and SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cardinal.consulting" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardinal Consulting | Strategic Digital Infrastructure" />
        <meta name="twitter:description" content="Enterprise digital consulting for mission-critical systems." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Divisions />
          <Industries />
          <Approach />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Advantage } from "@/components/sections/Advantage";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cardinal Consulting",
    "description": "Premier digital agency specializing in web development, mobile app development, SEO, and digital marketing. Based in Houston, TX serving clients worldwide.",
    "url": "https://cardinalhtx.com",
    "logo": "https://cardinalhtx.com/logo.png",
    "telephone": "+1-281-901-7016",
    "email": "hello@cardinalhtx.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2100 West Loop S Fwy",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77027",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "priceRange": "$$-$$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [],
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "SEO Optimization",
      "Digital Marketing",
      "Brand Identity Design",
      "UX/UI Design"
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cardinal Consulting",
    "image": "https://cardinalhtx.com/logo.png",
    "telephone": "+1-281-901-7016",
    "email": "hello@cardinalhtx.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2100 West Loop S Fwy",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7376,
      "longitude": -95.4567
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$-$$$"
  };

  return (
    <>
      <Helmet>
        <title>Cardinal Consulting | Premier Web Design & App Development Agency | Houston, TX</title>
        <meta 
          name="description" 
          content="Transform your business with custom websites, mobile apps, and digital marketing solutions. 500+ projects completed. Based in Houston, serving clients worldwide. Free consultation available." 
        />
        <meta name="keywords" content="web development houston, mobile app development, digital marketing agency, seo services, brand identity, ux ui design, custom website development" />
        <link rel="canonical" href="https://cardinalhtx.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cardinal Consulting | Premier Digital Agency" />
        <meta property="og:description" content="Custom websites, mobile apps, and digital marketing that deliver measurable ROI. 500+ successful projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cardinalhtx.com" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardinal Consulting | Premier Digital Agency" />
        <meta name="twitter:description" content="Custom websites, mobile apps, and digital marketing that deliver measurable ROI." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
      </Helmet>

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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

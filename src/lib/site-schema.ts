// Site-level structured data. Keep it small and true: every property here must
// match something visible on the site and be verifiable. (Google's structured-data
// guidelines treat markup for content that isn't on the page as spam.)
import { siteConfig } from "@/lib/seo-config";
import { services } from "@/lib/services-catalog";
import { industries } from "@/lib/industries";

const ORG_ID = `${siteConfig.url}#organization`;
const SITE_ID = `${siteConfig.url}#website`;

export function organizationSchema() {
  const { contact, business, links } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    image: siteConfig.ogImage,
    description:
      "Cardinal Consulting is a Houston-based digital firm offering web development, mobile apps, brand identity, UX/UI design, SEO, digital marketing, social media management, AI & automation, technical consulting, and website maintenance.",
    telephone: contact.phone,
    email: contact.email,
    foundingDate: business.foundingDate,
    priceRange: business.priceRange,
    address: { "@type": "PostalAddress", ...contact.address },
    geo: { "@type": "GeoCoordinates", latitude: contact.geo.latitude, longitude: contact.geo.longitude },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    ],
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    founder: { "@type": "Person", name: siteConfig.team[0].name, jobTitle: siteConfig.team[0].role },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: contact.phone,
      email: contact.email,
      areaServed: "US",
      availableLanguage: "English",
    },
    knowsAbout: [
      ...services.map((s) => s.name),
      ...industries.map((i) => `${i.name} websites and marketing`),
      "Local SEO",
      "Google Business Profile",
      "Fractional CTO",
      "Cloud cost optimization",
    ],
    sameAs: Object.values(links),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${siteConfig.url}${s.path}`, description: s.summary },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function webPageSchema(opts: { url: string; name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
  };
}

export function faqSchema(url: string, faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

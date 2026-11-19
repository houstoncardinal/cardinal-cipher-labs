// Site-level structured data. Keep it small and true: every property here must
// match something visible on the site and be verifiable. (Google's structured-data
// guidelines treat markup for content that isn't on the page as spam.)
import { serviceAreaCities, siteConfig } from "@/lib/seo-config";
import { services } from "@/lib/services-catalog";
import { industries } from "@/lib/industries";

export const ORG_ID = `${siteConfig.url}#organization`;
export const SITE_ID = `${siteConfig.url}#website`;

// Entity links. sameAs to Wikidata tells Google and AI systems exactly which "Houston" and which
// "web design" we mean (IDs verified on wikidata.org: Q16555 Houston, Q1439 Texas, Q190637 web design).
const TEXAS_ENTITY = { "@type": "State", name: "Texas", sameAs: "https://www.wikidata.org/wiki/Q1439" };
export const HOUSTON_ENTITY = {
  "@type": "City",
  name: "Houston",
  sameAs: "https://www.wikidata.org/wiki/Q16555",
  containedInPlace: TEXAS_ENTITY,
};
export const WEB_DESIGN_ENTITY = { "@type": "Thing", name: "Web design", sameAs: "https://www.wikidata.org/wiki/Q190637" };

/** Houston, the suburbs we list on the site, and a ~50-mile radius around our Uptown office. */
export function houstonAreaServed() {
  return [
    HOUSTON_ENTITY,
    ...serviceAreaCities
      .filter((name) => name !== "Houston")
      .map((name) => ({ "@type": "City", name, containedInPlace: TEXAS_ENTITY })),
    {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: siteConfig.contact.geo.latitude, longitude: siteConfig.contact.geo.longitude },
      geoRadius: 80000,
    },
  ];
}

export function organizationSchema() {
  const { contact, business } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}#logo`,
      url: siteConfig.logo,
      contentUrl: siteConfig.logo,
      width: 512,
      height: 512,
      caption: siteConfig.name,
    },
    image: [siteConfig.ogImage, siteConfig.wordmark],
    description:
      "Cardinal Consulting is a Houston web design and app development company headquartered in Uptown Houston near the Galleria, offering custom websites, mobile apps, brand identity, UX/UI design, SEO, digital marketing, social media management, AI & automation, technical consulting, and website maintenance.",
    slogan: "Houston web design, app development & SEO",
    telephone: contact.phone,
    email: contact.email,
    foundingDate: business.foundingDate.slice(0, 4),
    priceRange: business.priceRange,
    address: { "@type": "PostalAddress", ...contact.address },
    geo: { "@type": "GeoCoordinates", latitude: contact.geo.latitude, longitude: contact.geo.longitude },
    ...(siteConfig.mapsUrl ? { hasMap: siteConfig.mapsUrl } : {}),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    ],
    areaServed: [...houstonAreaServed(), TEXAS_ENTITY, { "@type": "Country", name: "United States" }],
    founder: { "@type": "Person", "@id": `${siteConfig.url}#person-hunain-qureshi`, name: siteConfig.team[0].name, jobTitle: siteConfig.team[0].role },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: contact.phone,
      email: contact.email,
      areaServed: "US",
      availableLanguage: "English",
    },
    knowsAbout: [
      WEB_DESIGN_ENTITY,
      "Houston web design",
      ...services.map((s) => s.name),
      ...industries.map((i) => `${i.name} websites and marketing`),
      "Local SEO",
      "Google Business Profile",
      "AI search optimization (Google AI Overviews, ChatGPT search, Perplexity)",
      "Structured data and schema.org markup",
      "Core Web Vitals",
      "Fractional CTO",
      "Cloud cost optimization",
    ],
    ...(siteConfig.verifiedProfiles.length ? { sameAs: siteConfig.verifiedProfiles } : {}),
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
    alternateName: "Cardinal",
    description: siteConfig.description,
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

// Schema.org JSON-LD Generators for Google E-E-A-T Compliance
// Comprehensive Schema Markup for Maximum SEO Impact
import { siteConfig, services, faqs, industries } from './seo-config';

// Generate LocalBusiness Schema - Critical for Local SEO
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    description: siteConfig.description,
    slogan: siteConfig.business.slogan,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logo,
      width: 200,
      height: 200,
    },
    image: siteConfig.ogImage,
    priceRange: siteConfig.business.priceRange,
    currenciesAccepted: siteConfig.business.currenciesAccepted.join(', '),
    paymentAccepted: siteConfig.business.paymentAccepted.join(', '),
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    
    // Geo Coordinates for Maps
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    
    // Opening Hours
    openingHoursSpecification: siteConfig.business.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    
    // Area Served
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': area.type,
      name: area.name,
      ...(area.region && { containedInPlace: { '@type': 'State', name: area.region } }),
    })),
    
    // Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      ratingCount: siteConfig.aggregateRating.ratingCount,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: siteConfig.aggregateRating.bestRating,
      worstRating: siteConfig.aggregateRating.worstRating,
    },
    
    // Social Profiles
    sameAs: siteConfig.socialProfiles,
    
    // Expertise
    knowsAbout: siteConfig.expertise.specialties,
    hasCredential: siteConfig.expertise.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
    })),
  };
}

// Generate Organization Schema with Enhanced E-E-A-T Signals
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logo,
      width: 200,
      height: 200,
    },
    image: siteConfig.ogImage,
    description: siteConfig.description,
    foundingDate: siteConfig.business.foundingDate,
    slogan: siteConfig.business.slogan,

    // E-E-A-T: Contact Information
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    faxNumber: siteConfig.contact.fax,

    // E-E-A-T: Physical Address (Trustworthiness)
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },

    // E-E-A-T: Social Proof & Authority
    sameAs: siteConfig.socialProfiles,

    // Multiple Contact Points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer service',
        email: siteConfig.contact.supportEmail,
        areaServed: 'Worldwide',
        availableLanguage: siteConfig.expertise.languages,
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'sales',
        email: siteConfig.contact.email,
        areaServed: 'Worldwide',
        availableLanguage: siteConfig.expertise.languages,
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'technical support',
        email: siteConfig.contact.supportEmail,
        areaServed: 'Worldwide',
        availableLanguage: siteConfig.expertise.languages,
      },
    ],

    // E-E-A-T: Expertise Areas
    knowsAbout: siteConfig.expertise.specialties,

    // E-E-A-T: Certifications
    hasCredential: siteConfig.expertise.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: cert,
    })),

    // E-E-A-T: Awards & Recognition (Authoritativeness)
    award: siteConfig.expertise.awardsRecognition,

    // Number of employees
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: siteConfig.business.numberOfEmployees,
    },
    
    // Founder
    founder: {
      '@type': 'Person',
      name: siteConfig.team[0].name,
      jobTitle: siteConfig.team[0].role,
    },
    
    // Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      ratingCount: siteConfig.aggregateRating.ratingCount,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: siteConfig.aggregateRating.bestRating,
      worstRating: siteConfig.aggregateRating.worstRating,
    },
  };
}

// Generate Website Schema with Sitelinks Search Box
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Generate Individual Service Schemas with Enhanced Data
export function generateServiceSchemas() {
  return services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}#service-${index}`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    category: service.category,
    provider: {
      '@id': `${siteConfig.url}#organization`,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: service.offers.priceCurrency,
      price: service.offers.price,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: service.offers.priceCurrency,
        price: service.offers.price,
      },
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Features`,
      itemListElement: service.features.map((feature, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: i + 1,
      })),
    },
    termsOfService: `${siteConfig.url}/terms`,
    providerMobility: 'dynamic',
  }));
}

// Generate Person Schemas for Team Members
export function generatePersonSchemas() {
  return siteConfig.team.map((person) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}#person-${person.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    image: `${siteConfig.url}${person.image}`,
    url: person.linkedin,
    description: person.description,

    // E-E-A-T: Expertise & Credentials
    knowsAbout: person.expertise,
    hasCredential: person.credentials.map((credential) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: credential,
    })),

    // Affiliation with organization
    worksFor: {
      '@id': `${siteConfig.url}#organization`,
    },

    // Authority signals
    sameAs: [person.linkedin],
  }));
}

// Generate FAQPage Schema
export function generateFAQPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}#faqpage`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Review Schemas
export function generateReviewSchemas() {
  return siteConfig.reviews.map((review, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${siteConfig.url}#review-${index}`,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: review.author,
      jobTitle: review.authorTitle,
      worksFor: {
        '@type': 'Organization',
        name: review.authorCompany,
      },
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@id': `${siteConfig.url}#organization`,
    },
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
  }));
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteConfig.url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate Article Schema
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': article.url,
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author || siteConfig.team[0].name,
      url: siteConfig.team[0].linkedin,
    },
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
  };
}

// Generate WebPage Schema
export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.url,
    name: page.name,
    description: page.description,
    url: page.url,
    datePublished: page.datePublished || siteConfig.business.foundingDate,
    dateModified: page.dateModified || new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
    about: {
      '@id': `${siteConfig.url}#organization`,
    },
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
    breadcrumb: {
      '@id': `${siteConfig.url}#breadcrumb`,
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: page.url,
    },
  };
}

// Generate SiteNavigationElement Schema
export function generateNavigationSchema() {
  const navItems = [
    { name: 'Services', url: `${siteConfig.url}#services` },
    { name: 'Portfolio', url: `${siteConfig.url}#portfolio` },
    { name: 'Process', url: `${siteConfig.url}#process` },
    { name: 'Industries', url: `${siteConfig.url}#industries` },
    { name: 'Contact', url: `${siteConfig.url}#contact` },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    '@id': `${siteConfig.url}#navigation`,
    name: 'Main Navigation',
    hasPart: navItems.map((item, index) => ({
      '@type': 'WebPage',
      name: item.name,
      url: item.url,
      position: index + 1,
    })),
  };
}

// Generate ItemList Schema for Services/Portfolio
export function generateServiceListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteConfig.url}#servicelist`,
    name: 'Our Services',
    description: 'Digital solutions that grow your business',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${siteConfig.url}#organization`,
        },
      },
    })),
  };
}

// Generate Portfolio/CreativeWork Schema
export function generatePortfolioSchemas() {
  return siteConfig.portfolio.map((project, index) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteConfig.url}#portfolio-${index}`,
    name: project.name,
    description: project.description,
    url: project.url,
    image: `${siteConfig.url}${project.image}`,
    creator: {
      '@id': `${siteConfig.url}#organization`,
    },
    genre: project.category,
    keywords: project.technologies.join(', '),
    dateCreated: siteConfig.business.foundingDate,
  }));
}

// Generate HowTo Schema for Process Section
export function generateProcessSchema() {
  const steps = [
    {
      name: 'Discovery & Analysis',
      text: 'We analyze your current situation, identify opportunities, and define clear objectives for your digital transformation.',
    },
    {
      name: 'Strategy & Planning',
      text: 'Our team develops a comprehensive roadmap with timelines, milestones, and resource allocation.',
    },
    {
      name: 'Design & Development',
      text: 'We bring your vision to life with cutting-edge design and robust development practices.',
    },
    {
      name: 'Launch & Optimization',
      text: 'We deploy your solution and continuously monitor and optimize for peak performance.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${siteConfig.url}#process`,
    name: 'Our Development Process',
    description: 'How Cardinal Consulting delivers enterprise-grade digital solutions',
    totalTime: 'P12W',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: 'Contact for Quote',
    },
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// Generate ContactPage Schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${siteConfig.url}#contact`,
    name: 'Contact Cardinal Consulting',
    description: 'Get in touch with Cardinal Consulting for your digital transformation needs.',
    url: `${siteConfig.url}#contact`,
    mainEntity: {
      '@id': `${siteConfig.url}#organization`,
    },
  };
}

// Generate Aggregate Rating Schema (standalone)
export function generateAggregateRatingSchema(rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
  };
}

// Generate Industry Schema for vertical markets
export function generateIndustrySchemas() {
  return industries.map((industry, index) => ({
    '@context': 'https://schema.org',
    '@type': 'SpecialAnnouncement',
    '@id': `${siteConfig.url}#industry-${index}`,
    name: `${industry.name} Solutions`,
    text: industry.description,
    category: 'https://schema.org/BusinessSupport',
    announcementLocation: {
      '@type': 'Place',
      name: industry.name,
    },
    provider: {
      '@id': `${siteConfig.url}#organization`,
    },
  }));
}

// Generate Offer Catalog Schema
export function generateOfferCatalogSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${siteConfig.url}#offercatalog`,
    name: 'Cardinal Consulting Service Catalog',
    description: 'Complete digital solutions for enterprise transformation',
    provider: {
      '@id': `${siteConfig.url}#organization`,
    },
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
      },
      position: index + 1,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: service.offers.price,
      },
    })),
  };
}

// Generate Knowledge Graph Entity Schema
export function generateKnowledgeGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    '@id': `${siteConfig.url}#entity`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: siteConfig.socialProfiles,
    mainEntityOfPage: siteConfig.url,
  };
}

// Generate All Schemas for Homepage
export function generateAllHomePageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      name: 'Cardinal Consulting - Enterprise Software Development & Consulting',
      description: siteConfig.description,
      url: siteConfig.url,
    }),
    generateNavigationSchema(),
    generateKnowledgeGraphSchema(),
    generateOfferCatalogSchema(),
    ...generateServiceSchemas(),
    generateServiceListSchema(),
    ...generatePersonSchemas(),
    generateFAQPageSchema(),
    ...generateReviewSchemas(),
    ...generatePortfolioSchemas(),
    generateProcessSchema(),
    generateContactPageSchema(),
    ...generateIndustrySchemas(),
    generateBreadcrumbSchema([{ name: 'Home', url: siteConfig.url }]),
  ];
}

// Helper function to inject schema into page
export function injectSchema(schemas: any | any[]) {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];

  return schemaArray.map((schema, index) => (
    <script
      key={`schema-${index}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}

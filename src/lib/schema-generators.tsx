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
    termsOfService: `${siteConfig.url}/terms-of-service`,
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

// Generate VideoObject Schema (for tutorial/demo content)
export function generateVideoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  url?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${siteConfig.url}#video-${video.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration || 'PT5M',
    contentUrl: video.url || siteConfig.url,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
    author: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
    },
    inLanguage: 'en-US',
    isFamilyFriendly: true,
  };
}

// Generate Product Schema (for pricing packages — boosts rich snippets)
export function generateProductSchemas() {
  const packages = [
    {
      name: 'Starter Website Package',
      description: 'Professional small business website with responsive design, SEO optimization, and CMS integration. Perfect for startups and growing businesses.',
      price: '3000',
      sku: 'CARD-WEB-STARTER',
    },
    {
      name: 'Professional Website Package',
      description: 'Advanced custom website with e-commerce, custom integrations, advanced SEO, and priority support. For established businesses scaling online.',
      price: '8000',
      sku: 'CARD-WEB-PRO',
    },
    {
      name: 'Enterprise Digital Platform',
      description: 'Full enterprise-grade digital platform including web app, mobile app, SEO strategy, and dedicated account management.',
      price: '25000',
      sku: 'CARD-ENT-FULL',
    },
  ];

  return packages.map((pkg, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.url}#product-${i}`,
    name: pkg.name,
    description: pkg.description,
    sku: pkg.sku,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      price: pkg.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        '@id': `${siteConfig.url}#organization`,
        name: siteConfig.name,
      },
      url: `${siteConfig.url}/pricing`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    category: 'Digital Services',
    provider: {
      '@id': `${siteConfig.url}#organization`,
    },
  }));
}

// Generate SpeakableSpecification for voice search optimization
export function generateSpeakableSchema(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.service-description', '.page-summary', 'meta[name="description"]'],
      xpath: [
        '/html/head/title',
        '/html/head/meta[@name="description"]/@content',
      ],
    },
  };
}

// Generate All Schemas for Homepage
export function generateAllHomePageSchemas() {
  return [
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateWebPageSchema({
      name: 'Cardinal Consulting - Web Design & App Development Houston TX',
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
    ...generateProductSchemas(),
    generateSpeakableSchema(siteConfig.url),
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

// NEW SCHEMA TYPES - Advanced Implementation

// Generate Product Schema for Services
export function generateProductSchemas() {
  return services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${siteConfig.url}#product-${index}`,
    name: service.name,
    description: service.description,
    brand: {
      '@id': `${siteConfig.url}#organization`,
    },
    category: service.category,
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
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: siteConfig.aggregateRating.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: siteConfig.reviews[0].author,
      },
      reviewBody: siteConfig.reviews[0].reviewBody,
      datePublished: siteConfig.reviews[0].datePublished,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }));
}

// Generate Event Schema for Webinars/Workshops
export function generateEventSchemas() {
  const events = [
    {
      name: 'Enterprise Cloud Migration Workshop',
      description: 'Hands-on workshop for enterprise cloud migration strategies',
      startDate: '2024-03-15T10:00:00-06:00',
      endDate: '2024-03-15T16:00:00-06:00',
      location: {
        '@type': 'Place',
        name: 'Cardinal Consulting Office',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.streetAddress,
          addressLocality: siteConfig.contact.address.addressLocality,
          addressRegion: siteConfig.contact.address.addressRegion,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: siteConfig.contact.address.addressCountry,
        },
      },
      organizer: {
        '@id': `${siteConfig.url}#organization`,
      },
      offers: {
        '@type': 'Offer',
        price: 'Free',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      name: 'AI/ML Integration Strategy Session',
      description: 'Learn how to integrate AI/ML into your business processes',
      startDate: '2024-04-20T14:00:00-06:00',
      endDate: '2024-04-20T16:00:00-06:00',
      location: {
        '@type': 'VirtualLocation',
        url: 'https://zoom.us/j/123456789',
      },
      organizer: {
        '@id': `${siteConfig.url}#organization`,
      },
      offers: {
        '@type': 'Offer',
        price: 'Free',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
  ];

  return events.map((event, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${siteConfig.url}#event-${index}`,
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: event.location,
    organizer: event.organizer,
    offers: event.offers,
    performer: {
      '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
    },
    image: siteConfig.ogImage,
    isAccessibleForFree: true,
  }));
}

// Generate Course Schema for Training Programs
export function generateCourseSchemas() {
  const courses = [
    {
      name: 'Enterprise Software Development Bootcamp',
      description: 'Comprehensive training in enterprise software development',
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      educationalLevel: 'Professional Development',
      timeRequired: 'P8W',
      inLanguage: 'en-US',
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          name: 'Spring 2024 Cohort',
          startDate: '2024-03-01',
          endDate: '2024-04-30',
          courseMode: 'Full-time',
          instructor: {
            '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
          },
          location: {
            '@type': 'Place',
            name: 'Cardinal Consulting Training Center',
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.contact.address.streetAddress,
              addressLocality: siteConfig.contact.address.addressLocality,
              addressRegion: siteConfig.contact.address.addressRegion,
              postalCode: siteConfig.contact.address.postalCode,
              addressCountry: siteConfig.contact.address.addressCountry,
            },
          },
        },
      ],
    },
    {
      name: 'Cloud Architecture Certification Program',
      description: 'Prepare for AWS/Azure cloud architecture certifications',
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      educationalLevel: 'Professional Development',
      timeRequired: 'P12W',
      inLanguage: 'en-US',
      hasCourseInstance: [
        {
          '@type': 'CourseInstance',
          name: 'Summer 2024 Cohort',
          startDate: '2024-06-01',
          endDate: '2024-08-31',
          courseMode: 'Part-time',
          instructor: {
            '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
          },
          location: {
            '@type': 'VirtualLocation',
            url: 'https://cardinalconsulting.zoom.us/j/123456789',
          },
        },
      ],
    },
  ];

  return courses.map((course, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${siteConfig.url}#course-${index}`,
    name: course.name,
    description: course.description,
    provider: course.provider,
    educationalLevel: course.educationalLevel,
    timeRequired: course.timeRequired,
    inLanguage: course.inLanguage,
    hasCourseInstance: course.hasCourseInstance,
  }));
}

// Generate JobPosting Schema for Career Opportunities
export function generateJobPostingSchemas() {
  const jobPostings = [
    {
      title: 'Senior Software Engineer',
      description: 'Design and develop enterprise software solutions',
      employmentType: 'Full-time',
      hiringOrganization: {
        '@id': `${siteConfig.url}#organization`,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.streetAddress,
          addressLocality: siteConfig.contact.address.addressLocality,
          addressRegion: siteConfig.contact.address.addressRegion,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: siteConfig.contact.address.addressCountry,
        },
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: {
          '@type': 'QuantitativeValue',
          minValue: 120000,
          maxValue: 160000,
          unitText: 'YEAR',
        },
      },
      datePosted: '2024-02-15',
      validThrough: '2024-03-31',
      experienceRequirements: '5+ years',
      qualifications: 'Bachelor\'s degree in Computer Science or related field',
      responsibilities: 'Design, develop, and maintain enterprise software applications',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    },
    {
      title: 'Cloud Solutions Architect',
      description: 'Design and implement cloud infrastructure solutions',
      employmentType: 'Full-time',
      hiringOrganization: {
        '@id': `${siteConfig.url}#organization`,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address.streetAddress,
          addressLocality: siteConfig.contact.address.addressLocality,
          addressRegion: siteConfig.contact.address.addressRegion,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: siteConfig.contact.address.addressCountry,
        },
      },
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: {
          '@type': 'QuantitativeValue',
          minValue: 140000,
          maxValue: 180000,
          unitText: 'YEAR',
        },
      },
      datePosted: '2024-02-15',
      validThrough: '2024-03-31',
      experienceRequirements: '7+ years',
      qualifications: 'Bachelor\'s degree in Computer Science or related field',
      responsibilities: 'Design and implement cloud infrastructure solutions',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
    },
  ];

  return jobPostings.map((job, index) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `${siteConfig.url}#job-${index}`,
    title: job.title,
    description: job.description,
    employmentType: job.employmentType,
    hiringOrganization: job.hiringOrganization,
    jobLocation: job.jobLocation,
    baseSalary: job.baseSalary,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    experienceRequirements: job.experienceRequirements,
    qualifications: job.qualifications,
    responsibilities: job.responsibilities,
    skills: job.skills,
  }));
}

// Generate SoftwareApplication Schema for Products
export function generateSoftwareApplicationSchemas() {
  const applications = [
    {
      name: 'Cardinal Cloud Manager',
      description: 'Enterprise cloud management platform',
      operatingSystem: 'Web Browser',
      applicationCategory: 'BusinessApplication',
      softwareVersion: '2.1.0',
      releaseNotes: 'Improved performance and new features',
      offers: {
        '@type': 'Offer',
        price: 'Contact for Quote',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: [
        'Multi-cloud management',
        'Cost optimization',
        'Security monitoring',
        'Automated deployment',
      ],
      screenshot: [
        {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/screenshots/cloud-manager-1.png`,
          caption: 'Dashboard view',
        },
        {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/screenshots/cloud-manager-2.png`,
          caption: 'Cost analysis',
        },
      ],
    },
    {
      name: 'AI Analytics Platform',
      description: 'Advanced AI-powered analytics solution',
      operatingSystem: 'Web Browser',
      applicationCategory: 'AnalyticsApplication',
      softwareVersion: '1.5.0',
      releaseNotes: 'Enhanced machine learning models',
      offers: {
        '@type': 'Offer',
        price: 'Contact for Quote',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      featureList: [
        'Predictive analytics',
        'Natural language processing',
        'Real-time dashboards',
        'Custom model training',
      ],
      screenshot: [
        {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/screenshots/ai-analytics-1.png`,
          caption: 'Main dashboard',
        },
        {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/screenshots/ai-analytics-2.png`,
          caption: 'Model training',
        },
      ],
    },
  ];

  return applications.map((app, index) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteConfig.url}#software-${index}`,
    name: app.name,
    description: app.description,
    operatingSystem: app.operatingSystem,
    applicationCategory: app.applicationCategory,
    softwareVersion: app.softwareVersion,
    releaseNotes: app.releaseNotes,
    offers: app.offers,
    featureList: app.featureList,
    screenshot: app.screenshot,
    creator: {
      '@id': `${siteConfig.url}#organization`,
    },
  }));
}

// Generate Dataset Schema for AI/ML Work
export function generateDatasetSchemas() {
  const datasets = [
    {
      name: 'Enterprise Customer Behavior Dataset',
      description: 'Comprehensive dataset for customer behavior analysis',
      datasetTimeInterval: 'P1Y',
      variableMeasured: ['Customer Engagement', 'Purchase Behavior', 'Churn Prediction'],
      measurementTechnique: 'Machine Learning',
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      includedInDataCatalog: {
        '@type': 'DataCatalog',
        name: 'Cardinal Consulting Data Catalog',
        url: `${siteConfig.url}/data-catalog`,
      },
      distribution: [
        {
          '@type': 'DataDownload',
          contentUrl: `${siteConfig.url}/datasets/customer-behavior.csv`,
          encodingFormat: 'text/csv',
        },
      ],
    },
    {
      name: 'Financial Market Analysis Dataset',
      description: 'Historical financial market data for analysis',
      datasetTimeInterval: 'P5Y',
      variableMeasured: ['Stock Prices', 'Market Trends', 'Economic Indicators'],
      measurementTechnique: 'Statistical Analysis',
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      includedInDataCatalog: {
        '@type': 'DataCatalog',
        name: 'Cardinal Consulting Data Catalog',
        url: `${siteConfig.url}/data-catalog`,
      },
      distribution: [
        {
          '@type': 'DataDownload',
          contentUrl: `${siteConfig.url}/datasets/financial-market.json`,
          encodingFormat: 'application/json',
        },
      ],
    },
  ];

  return datasets.map((dataset, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${siteConfig.url}#dataset-${index}`,
    name: dataset.name,
    description: dataset.description,
    datasetTimeInterval: dataset.datasetTimeInterval,
    variableMeasured: dataset.variableMeasured,
    measurementTechnique: dataset.measurementTechnique,
    creator: dataset.creator,
    includedInDataCatalog: dataset.includedInDataCatalog,
    distribution: dataset.distribution,
  }));
}

// Generate ResearchProject Schema for R&D Initiatives
export function generateResearchProjectSchemas() {
  const projects = [
    {
      name: 'AI-Powered Predictive Maintenance System',
      description: 'Research project for predictive maintenance using AI',
      funder: {
        '@type': 'Organization',
        name: 'Cardinal Consulting R&D',
      },
      investigator: {
        '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
      },
      sponsor: {
        '@id': `${siteConfig.url}#organization`,
      },
      keywords: ['Predictive Maintenance', 'AI', 'Machine Learning', 'IoT'],
      temporalCoverage: '2024-01/2024-12',
      funding: {
        '@type': 'MonetaryGrant',
        funder: {
          '@id': `${siteConfig.url}#organization`,
        },
        amount: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '500000',
        },
      },
    },
    {
      name: 'Blockchain for Supply Chain Transparency',
      description: 'Research project on blockchain for supply chain',
      funder: {
        '@type': 'Organization',
        name: 'Cardinal Consulting R&D',
      },
      investigator: {
        '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
      },
      sponsor: {
        '@id': `${siteConfig.url}#organization`,
      },
      keywords: ['Blockchain', 'Supply Chain', 'Transparency', 'Smart Contracts'],
      temporalCoverage: '2024-01/2024-12',
      funding: {
        '@type': 'MonetaryGrant',
        funder: {
          '@id': `${siteConfig.url}#organization`,
        },
        amount: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '300000',
        },
      },
    },
  ];

  return projects.map((project, index) => ({
    '@context': 'https://schema.org',
    '@type': 'ResearchProject',
    '@id': `${siteConfig.url}#research-${index}`,
    name: project.name,
    description: project.description,
    funder: project.funder,
    investigator: project.investigator,
    sponsor: project.sponsor,
    keywords: project.keywords,
    temporalCoverage: project.temporalCoverage,
    funding: project.funding,
  }));
}

// Generate PressRelease Schema for Announcements
export function generatePressReleaseSchemas() {
  const pressReleases = [
    {
      name: 'Cardinal Consulting Launches AI-Powered Analytics Platform',
      headline: 'Cardinal Consulting Launches AI-Powered Analytics Platform',
      description: 'New platform brings advanced AI capabilities to enterprise analytics',
      datePublished: '2024-02-15',
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      image: siteConfig.ogImage,
      articleBody: 'Cardinal Consulting today announced the launch of its new AI-powered analytics platform, bringing advanced machine learning capabilities to enterprise data analysis.',
      keywords: ['AI', 'Analytics', 'Enterprise', 'Platform'],
    },
    {
      name: 'Cardinal Consulting Achieves SOC 2 Type II Compliance',
      headline: 'Cardinal Consulting Achieves SOC 2 Type II Compliance',
      description: 'Major security milestone demonstrates commitment to data protection',
      datePublished: '2024-01-20',
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      image: siteConfig.ogImage,
      articleBody: 'Cardinal Consulting has successfully completed its SOC 2 Type II audit, demonstrating its commitment to maintaining the highest standards of security and data protection.',
      keywords: ['Security', 'Compliance', 'SOC 2', 'Data Protection'],
    },
  ];

  return pressReleases.map((press, index) => ({
    '@context': 'https://schema.org',
    '@type': 'PressRelease',
    '@id': `${siteConfig.url}#press-${index}`,
    name: press.name,
    headline: press.headline,
    description: press.description,
    datePublished: press.datePublished,
    provider: press.provider,
    image: press.image,
    articleBody: press.articleBody,
    keywords: press.keywords,
  }));
}

// Generate BlogPosting Schema for Content
export function generateBlogPostingSchemas() {
  const blogPosts = [
    {
      name: 'The Future of Enterprise Software Development',
      headline: 'The Future of Enterprise Software Development',
      description: 'Exploring emerging trends in enterprise software',
      datePublished: '2024-02-10',
      dateModified: '2024-02-12',
      author: {
        '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
      },
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      image: `${siteConfig.url}/blog/future-enterprise-software.jpg`,
      articleBody: 'The enterprise software landscape is rapidly evolving with new technologies and methodologies...',
      keywords: ['Enterprise Software', 'Development', 'Future Trends', 'Technology'],
    },
    {
      name: 'AI Integration Strategies for Business Success',
      headline: 'AI Integration Strategies for Business Success',
      description: 'Practical strategies for implementing AI in business',
      datePublished: '2024-01-25',
      dateModified: '2024-01-28',
      author: {
        '@id': `${siteConfig.url}#person-${siteConfig.team[0].name.toLowerCase().replace(/\s+/g, '-')}`,
      },
      provider: {
        '@id': `${siteConfig.url}#organization`,
      },
      image: `${siteConfig.url}/blog/ai-integration-strategies.jpg`,
      articleBody: 'Artificial Intelligence is transforming businesses across industries...',
      keywords: ['AI', 'Integration', 'Business Strategy', 'Machine Learning'],
    },
  ];

  return blogPosts.map((blog, index) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${siteConfig.url}#blog-${index}`,
    name: blog.name,
    headline: blog.headline,
    description: blog.description,
    datePublished: blog.datePublished,
    dateModified: blog.dateModified,
    author: blog.author,
    provider: blog.provider,
    image: blog.image,
    articleBody: blog.articleBody,
    keywords: blog.keywords,
  }));
}

// Generate VideoObject Schema for Video Content
export function generateVideoObjectSchemas() {
  const videos = [
    {
      name: 'Enterprise Cloud Migration Guide',
      description: 'Complete guide to enterprise cloud migration',
      contentUrl: 'https://www.youtube.com/watch?v=cloud-migration-guide',
      thumbnailUrl: `${siteConfig.url}/videos/cloud-migration-thumbnail.jpg`,
      duration: 'PT45M',
      uploadDate: '2024-02-01',
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      embedUrl: 'https://www.youtube.com/embed/cloud-migration-guide',
      interactionCount: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/WatchAction',
        userInteractionCount: 1250,
      },
    },
    {
      name: 'AI/ML Integration Best Practices',
      description: 'Best practices for AI/ML integration',
      contentUrl: 'https://www.youtube.com/watch?v=ai-ml-best-practices',
      thumbnailUrl: `${siteConfig.url}/videos/ai-ml-best-practices-thumbnail.jpg`,
      duration: 'PT30M',
      uploadDate: '2024-01-15',
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      embedUrl: 'https://www.youtube.com/embed/ai-ml-best-practices',
      interactionCount: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/WatchAction',
        userInteractionCount: 875,
      },
    },
  ];

  return videos.map((video, index) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${siteConfig.url}#video-${index}`,
    name: video.name,
    description: video.description,
    contentUrl: video.contentUrl,
    thumbnailUrl: video.thumbnailUrl,
    duration: video.duration,
    uploadDate: video.uploadDate,
    creator: video.creator,
    embedUrl: video.embedUrl,
    interactionCount: video.interactionCount,
  }));
}

// Generate ImageObject Schema for Visual Content
export function generateImageObjectSchemas() {
  const images = [
    {
      name: 'Enterprise Architecture Diagram',
      description: 'Enterprise architecture diagram',
      contentUrl: `${siteConfig.url}/images/enterprise-architecture.jpg`,
      thumbnailUrl: `${siteConfig.url}/images/enterprise-architecture-thumbnail.jpg`,
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      license: 'https://creativecommons.org/licenses/by/4.0/',
      representativeOfPage: true,
    },
    {
      name: 'AI/ML Workflow Diagram',
      description: 'AI/ML workflow diagram',
      contentUrl: `${siteConfig.url}/images/ai-ml-workflow.jpg`,
      thumbnailUrl: `${siteConfig.url}/images/ai-ml-workflow-thumbnail.jpg`,
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      license: 'https://creativecommons.org/licenses/by/4.0/',
      representativeOfPage: true,
    },
  ];

  return images.map((image, index) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${siteConfig.url}#image-${index}`,
    name: image.name,
    description: image.description,
    contentUrl: image.contentUrl,
    thumbnailUrl: image.thumbnailUrl,
    creator: image.creator,
    license: image.license,
    representativeOfPage: image.representativeOfPage,
  }));
}

// Generate FAQ Schema for Specific Pages
export function generateFAQSchemas(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}#faqpage`,
    mainEntity: questions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate Speakable Schema for Voice Search
export function generateSpeakableSchemas() {
  const speakableContent = [
    {
      name: 'Cardinal Consulting Overview',
      description: 'Cardinal Consulting is an enterprise software development and consulting firm...',
      url: siteConfig.url,
      xpath: '/html/head/title',
    },
    {
      name: 'Services Overview',
      description: 'We offer custom website development, mobile applications, SEO services...',
      url: `${siteConfig.url}/services`,
      xpath: '//*[@id="services"]',
    },
  ];

  return speakableContent.map((content, index) => ({
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    '@id': `${siteConfig.url}#speakable-${index}`,
    name: content.name,
    description: content.description,
    url: content.url,
    xpath: content.xpath,
  }));
}

// Generate CollectionPage Schema for Content Collections
export function generateCollectionPageSchemas() {
  const collections = [
    {
      name: 'Blog Collection',
      description: 'Collection of Cardinal Consulting blog posts',
      url: `${siteConfig.url}/blog`,
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      about: 'Enterprise Software Development',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${siteConfig.url}#website`,
      },
    },
    {
      name: 'Portfolio Collection',
      description: 'Collection of Cardinal Consulting projects',
      url: `${siteConfig.url}/portfolio`,
      creator: {
        '@id': `${siteConfig.url}#organization`,
      },
      about: 'Software Development Projects',
      inLanguage: 'en-US',
      isPartOf: {
        '@id': `${siteConfig.url}#website`,
      },
    },
  ];

  return collections.map((collection, index) => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}#collection-${index}`,
    name: collection.name,
    description: collection.description,
    url: collection.url,
    creator: collection.creator,
    about: collection.about,
    inLanguage: collection.inLanguage,
    isPartOf: collection.isPartOf,
  }));
}

// Generate SitelinksSearchBox Schema
export function generateSitelinksSearchBoxSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
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

// Generate MedicalEntity Schema for Healthcare Clients
export function generateMedicalEntitySchemas() {
  const medicalEntities = [
    {
      name: 'HIPAA Compliance Solutions',
      description: 'HIPAA-compliant software solutions for healthcare providers',
      code: 'HIPAA-001',
      relevantSpecialty: 'Health Informatics',
      study: {
        '@type': 'MedicalStudy',
        name: 'Healthcare Data Security Study',
        studySubject: 'Data Security',
        healthCondition: 'Data Breach Prevention',
      },
    },
    {
      name: 'Electronic Health Records (EHR) Systems',
      description: 'Custom EHR systems for medical practices',
      code: 'EHR-001',
      relevantSpecialty: 'Medical Informatics',
      study: {
        '@type': 'MedicalStudy',
        name: 'EHR Implementation Study',
        studySubject: 'Electronic Health Records',
        healthCondition: 'Healthcare Efficiency',
      },
    },
  ];

  return medicalEntities.map((entity, index) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalEntity',
    '@id': `${siteConfig.url}#medical-${index}`,
    name: entity.name,
    description: entity.description,
    code: entity.code,
    relevantSpecialty: entity.relevantSpecialty,
    study: entity.study,
  }));
}

// Generate FinancialProduct Schema for Banking/Finance Clients
export function generateFinancialProductSchemas() {
  const financialProducts = [
    {
      name: 'Payment Processing System',
      description: 'Secure payment processing solutions',
      category: 'Payment Processing',
      serviceType: 'FinancialService',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Payment Processing Features',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Credit Card Processing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ACH Processing',
            },
          },
        ],
      },
    },
    {
      name: 'Financial Analytics Platform',
      description: 'Advanced financial analytics and reporting',
      category: 'Financial Analytics',
      serviceType: 'FinancialService',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Analytics Features',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Real-time Analytics',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Reporting',
            },
          },
        ],
      },
    },
  ];

  return financialProducts.map((product, index) => ({
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    '@id': `${siteConfig.url}#financial-${index}`,
    name: product.name,
    description: product.description,
    category: product.category,
    serviceType: product.serviceType,
    hasOfferCatalog: product.hasOfferCatalog,
  }));
}

// Generate EducationalOrganization Schema for Learning Content
export function generateEducationalOrganizationSchemas() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteConfig.url}#education`,
    name: `${siteConfig.name} Training Division`,
    description: 'Professional training and certification programs',
    url: `${siteConfig.url}/training`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': area.type,
      name: area.name,
    })),
    makesOffer: siteConfig.services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Course',
        name: service.name,
        description: service.description,
      },
    })),
  };
}

// Generate All Advanced Schemas for Homepage
export function generateAllAdvancedHomePageSchemas() {
  return [
    ...generateProductSchemas(),
    ...generateEventSchemas(),
    ...generateCourseSchemas(),
    ...generateJobPostingSchemas(),
    ...generateSoftwareApplicationSchemas(),
    ...generateDatasetSchemas(),
    ...generateResearchProjectSchemas(),
    ...generatePressReleaseSchemas(),
    ...generateBlogPostingSchemas(),
    ...generateVideoObjectSchemas(),
    ...generateImageObjectSchemas(),
    ...generateSpeakableSchemas(),
    ...generateCollectionPageSchemas(),
    generateSitelinksSearchBoxSchema(),
    ...generateMedicalEntitySchemas(),
    ...generateFinancialProductSchemas(),
    generateEducationalOrganizationSchemas(),
  ];
}

// Helper function to get appropriate schemas for page type
export function getSchemasForPage(pageType: string) {
  switch (pageType) {
    case 'homepage':
      return generateAllHomePageSchemas();
    case 'services':
      return [
        ...generateServiceSchemas(),
        ...generateProductSchemas(),
        ...generateOfferCatalogSchema(),
      ];
case 'portfolio':
      return [
        ...generatePortfolioSchemas(),
        ...generatePortfolioSchemas(),
      ];
    case 'blog':
      return [
        ...generateBlogPostingSchemas(),
        ...generateCollectionPageSchemas(),
      ];
    case 'contact':
      return [
        generateContactPageSchema(),
        generateLocalBusinessSchema(),
      ];
    case 'careers':
      return [
        ...generateJobPostingSchemas(),
        ...generateOrganizationSchema(),
      ];
    case 'training':
      return [
        ...generateCourseSchemas(),
        generateEducationalOrganizationSchemas(),
      ];
    default:
      return generateAllAdvancedHomePageSchemas();
  }
}

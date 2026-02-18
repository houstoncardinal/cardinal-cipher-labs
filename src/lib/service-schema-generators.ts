import { siteConfig } from './seo-config';

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceOffer {
  name: string;
  price: string;
  priceCurrency?: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  name: string;
  description: string;
}

interface ServiceReview {
  author: string;
  authorTitle: string;
  company: string;
  rating: number;
  body: string;
  date: string;
}

interface TechStackItem {
  category: string;
  items: string[];
}

interface ServicePageSchemaConfig {
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  serviceUrl: string;
  category: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: ServiceFAQ[];
  offers: ServiceOffer[];
  process: ProcessStep[];
  reviews: ServiceReview[];
  aggregateRating: { ratingValue: number; reviewCount: number };
  duration?: string;
  keywords?: string[];
  techStack?: TechStackItem[];
  features?: { title: string; description: string }[];
}

export function generateServicePageSchemas(config: ServicePageSchemaConfig) {
  const schemas: any[] = [];

  // 1. WebPage Schema with enhanced speakable + mainEntity
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.serviceUrl}#webpage`,
    name: config.serviceName,
    description: config.serviceDescription,
    url: config.serviceUrl,
    datePublished: siteConfig.business.foundingDate,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    isPartOf: { '@id': `${siteConfig.url}#website` },
    about: { '@id': `${config.serviceUrl}#service` },
    breadcrumb: { '@id': `${config.serviceUrl}#breadcrumb` },
    publisher: { '@id': `${siteConfig.url}#organization` },
    mainEntity: { '@id': `${config.serviceUrl}#service` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.service-description'],
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: config.serviceUrl,
    },
    significantLink: [
      `${siteConfig.url}/contact`,
      `${siteConfig.url}/portfolio`,
    ],
  });

  // 2. BreadcrumbList Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${config.serviceUrl}#breadcrumb`,
    itemListElement: config.breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });

  // 3. Service Schema with enhanced Offers, credentials, and knowledge
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${config.serviceUrl}#service`,
    name: config.serviceName,
    description: config.serviceDescription,
    serviceType: config.serviceType,
    category: config.category,
    url: config.serviceUrl,
    image: siteConfig.ogImage,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logo,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.contact.address.streetAddress,
        addressLocality: siteConfig.contact.address.addressLocality,
        addressRegion: siteConfig.contact.address.addressRegion,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: siteConfig.contact.address.addressCountry,
      },
    },
    areaServed: siteConfig.business.areaServed.map(a => ({
      '@type': a.type,
      name: a.name,
    })),
    serviceOutput: {
      '@type': 'Thing',
      name: `${config.category} deliverables`,
      description: `Professional ${config.category.toLowerCase()} deliverables tailored to your business needs`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.serviceName} Packages`,
      itemListElement: config.offers.map((offer, i) => ({
        '@type': 'Offer',
        position: i + 1,
        name: offer.name,
        description: offer.description,
        price: offer.price.replace(/[^0-9.]/g, '') || '0',
        priceCurrency: offer.priceCurrency || 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
        },
        eligibleRegion: {
          '@type': 'Place',
          name: 'Worldwide',
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: config.aggregateRating.ratingValue,
      reviewCount: config.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: config.reviews.map(r => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: r.author,
        jobTitle: r.authorTitle,
        worksFor: {
          '@type': 'Organization',
          name: r.company,
        },
      },
      reviewBody: r.body,
      datePublished: r.date,
      publisher: {
        '@type': 'Organization',
        name: r.company,
      },
    })),
    ...(config.duration && { estimatedDuration: config.duration }),
    ...(config.keywords && { keywords: config.keywords.join(', ') }),
    termsOfService: `${siteConfig.url}/terms-of-service`,
    providerMobility: 'dynamic',
    broker: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
    },
    hasCredential: siteConfig.expertise.certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: cert,
    })),
    knowsAbout: siteConfig.expertise.specialties,
  });

  // 4. FAQPage Schema
  if (config.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${config.serviceUrl}#faq`,
      name: `${config.serviceName} — Frequently Asked Questions`,
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
          dateCreated: new Date().toISOString().split('T')[0],
          author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        },
      })),
    });
  }

  // 5. HowTo Schema for Process
  if (config.process.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${config.serviceUrl}#process`,
      name: `How ${siteConfig.name} Delivers ${config.serviceName}`,
      description: `Our proven ${config.process.length}-step process for delivering exceptional ${config.category.toLowerCase()} services`,
      totalTime: config.duration || 'P4W',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: config.offers[0]?.price.replace(/[^0-9.]/g, '') || 'Contact for Quote',
      },
      step: config.process.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.description,
        url: `${config.serviceUrl}#step-${i + 1}`,
      })),
      tool: config.techStack?.flatMap(ts => ts.items).map(tool => ({
        '@type': 'HowToTool',
        name: tool,
      })) || [],
    });
  }

  // 6. ItemList for Features
  if (config.features && config.features.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${config.serviceUrl}#features`,
      name: `${config.serviceName} Features`,
      description: `Key features and capabilities of our ${config.category.toLowerCase()} services`,
      numberOfItems: config.features.length,
      itemListElement: config.features.map((feature, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: feature.title,
        description: feature.description,
      })),
    });
  }

  // 7. Organization reference with enhanced data
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    sameAs: siteConfig.socialProfiles,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      ratingCount: siteConfig.aggregateRating.ratingCount,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    award: siteConfig.expertise.awardsRecognition,
    knowsAbout: siteConfig.expertise.specialties,
    hasCredential: siteConfig.expertise.certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert,
    })),
    founder: {
      '@type': 'Person',
      name: siteConfig.team[0].name,
      jobTitle: siteConfig.team[0].role,
    },
  });

  // 8. SoftwareApplication Schema (for app/web dev pages - boosts rich results)
  if (config.serviceType === 'SoftwareDevelopment' || config.serviceType === 'WebDevelopment') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${config.serviceUrl}#software`,
      name: config.serviceName,
      description: config.serviceDescription,
      applicationCategory: config.serviceType === 'SoftwareDevelopment' ? 'MobileApplication' : 'WebApplication',
      operatingSystem: config.serviceType === 'SoftwareDevelopment' ? 'iOS, Android' : 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: config.offers[0]?.price.replace(/[^0-9.]/g, '') || '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: config.aggregateRating.ratingValue,
        reviewCount: config.aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Organization',
        '@id': `${siteConfig.url}#organization`,
        name: siteConfig.name,
      },
      url: config.serviceUrl,
    });
  }

  // 9. ProfessionalService Schema (local SEO boost)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${config.serviceUrl}#professional-service`,
    name: `${siteConfig.name} — ${config.serviceName}`,
    description: config.serviceDescription,
    url: config.serviceUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: siteConfig.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: config.aggregateRating.ratingValue,
      reviewCount: config.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: siteConfig.business.openingHours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: siteConfig.socialProfiles,
  });

  return schemas;
}

// Generate Industry Page Schemas
export function generateIndustryPageSchemas(config: {
  industryName: string;
  industryDescription: string;
  industryUrl: string;
  keywords: string[];
  services: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  stats?: { value: string; label: string }[];
  compliance?: string[];
}) {
  const schemas: any[] = [];

  // WebPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.industryUrl}#webpage`,
    name: `${config.industryName} Solutions — ${siteConfig.name}`,
    description: config.industryDescription,
    url: config.industryUrl,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    isPartOf: { '@id': `${siteConfig.url}#website` },
    publisher: { '@id': `${siteConfig.url}#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.industry-description'],
    },
    keywords: config.keywords.join(', '),
  });

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${config.industryUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteConfig.url}/#industries` },
      { '@type': 'ListItem', position: 3, name: config.industryName, item: config.industryUrl },
    ],
  });

  // Service Schema for industry
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${config.industryUrl}#service`,
    name: `${config.industryName} Digital Solutions`,
    description: config.industryDescription,
    serviceType: `${config.industryName} Technology Services`,
    category: config.industryName,
    url: config.industryUrl,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
    },
    areaServed: siteConfig.business.areaServed.map(a => ({
      '@type': a.type,
      name: a.name,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${config.industryName} Services`,
      itemListElement: config.services.map((service, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
    ...(config.compliance && {
      hasCredential: config.compliance.map(cert => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert,
      })),
    }),
  });

  // FAQPage
  if (config.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${config.industryUrl}#faq`,
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // ProfessionalService
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${config.industryUrl}#professional-service`,
    name: `${siteConfig.name} — ${config.industryName} Solutions`,
    description: config.industryDescription,
    url: config.industryUrl,
    telephone: siteConfig.contact.phone,
    priceRange: siteConfig.business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    sameAs: siteConfig.socialProfiles,
  });

  // Organization reference
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    sameAs: siteConfig.socialProfiles,
  });

  return schemas;
}

// Generate Blog/Article Page Schemas
export function generateBlogPageSchemas(config: {
  pageUrl: string;
  articles: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    category: string;
    url: string;
    image?: string;
  }[];
}) {
  const schemas: any[] = [];

  // Blog Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${config.pageUrl}#blog`,
    name: `${siteConfig.name} Blog`,
    description: `Expert insights on web development, mobile apps, SEO, digital marketing, and technology from ${siteConfig.name}`,
    url: config.pageUrl,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      logo: siteConfig.logo,
    },
    inLanguage: 'en-US',
    blogPost: config.articles.map(article => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      author: {
        '@type': 'Person',
        name: article.author,
        url: siteConfig.team[0]?.linkedin,
      },
      datePublished: article.datePublished,
      dateModified: article.datePublished,
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: { '@type': 'ImageObject', url: siteConfig.logo },
      },
      mainEntityOfPage: article.url,
      image: article.image || siteConfig.ogImage,
      articleSection: article.category,
    })),
  });

  // CollectionPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${config.pageUrl}#collection`,
    name: `${siteConfig.name} Blog`,
    description: 'Expert articles on technology, digital marketing, and software development',
    url: config.pageUrl,
    publisher: { '@id': `${siteConfig.url}#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: config.articles.length,
      itemListElement: config.articles.map((article, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: article.url,
        name: article.title,
      })),
    },
  });

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: config.pageUrl },
    ],
  });

  return schemas;
}

// Generate Pricing Page Schemas
export function generatePricingPageSchemas(config: {
  pageUrl: string;
  tiers: {
    name: string;
    price: string;
    description: string;
    features: string[];
  }[];
}) {
  const schemas: any[] = [];

  // WebPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.pageUrl}#webpage`,
    name: `Pricing — ${siteConfig.name}`,
    description: `Transparent pricing for ${siteConfig.name}'s digital services. Custom solutions for every budget.`,
    url: config.pageUrl,
    dateModified: new Date().toISOString().split('T')[0],
    publisher: { '@id': `${siteConfig.url}#organization` },
  });

  // OfferCatalog
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${config.pageUrl}#offers`,
    name: `${siteConfig.name} Service Packages`,
    description: 'Complete range of digital service packages for businesses of all sizes',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
    },
    numberOfItems: config.tiers.length,
    itemListElement: config.tiers.map((tier, i) => ({
      '@type': 'Offer',
      position: i + 1,
      name: tier.name,
      description: tier.description,
      price: tier.price.replace(/[^0-9.]/g, '') || '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      itemOffered: {
        '@type': 'Service',
        name: tier.name,
        description: tier.description,
        provider: { '@id': `${siteConfig.url}#organization` },
      },
    })),
  });

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: config.pageUrl },
    ],
  });

  return schemas;
}

// Generate Careers Page Schemas
export function generateCareersPageSchemas(config: {
  pageUrl: string;
  jobs: {
    title: string;
    description: string;
    department: string;
    location: string;
    type: string;
    requirements: string[];
  }[];
}) {
  const schemas: any[] = [];

  // WebPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.pageUrl}#webpage`,
    name: `Careers at ${siteConfig.name}`,
    description: `Join our team of engineers, designers, and strategists building enterprise-grade digital solutions at ${siteConfig.name}.`,
    url: config.pageUrl,
    publisher: { '@id': `${siteConfig.url}#organization` },
  });

  // JobPosting schemas
  config.jobs.forEach(job => {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'JobPosting',
      title: job.title,
      description: `${job.description} Requirements: ${job.requirements.join(', ')}`,
      datePosted: new Date().toISOString().split('T')[0],
      validThrough: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      employmentType: job.type === 'Full-Time' ? 'FULL_TIME' : 'PART_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: siteConfig.name,
        sameAs: siteConfig.url,
        logo: siteConfig.logo,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.contact.address.addressLocality,
          addressRegion: siteConfig.contact.address.addressRegion,
          addressCountry: siteConfig.contact.address.addressCountry,
        },
      },
      ...(job.location.includes('Remote') && {
        jobLocationType: 'TELECOMMUTE',
        applicantLocationRequirements: {
          '@type': 'Country',
          name: 'United States',
        },
      }),
      industry: 'Software Development & Consulting',
      occupationalCategory: job.department,
      qualifications: job.requirements.join('. '),
    });
  });

  // BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: config.pageUrl },
    ],
  });

  return schemas;
}

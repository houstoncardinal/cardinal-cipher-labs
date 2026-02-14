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
}

export function generateServicePageSchemas(config: ServicePageSchemaConfig) {
  const schemas: any[] = [];

  // 1. WebPage Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': config.serviceUrl,
    name: config.serviceName,
    description: config.serviceDescription,
    url: config.serviceUrl,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    isPartOf: { '@id': `${siteConfig.url}#website` },
    about: { '@id': `${config.serviceUrl}#service` },
    breadcrumb: { '@id': `${config.serviceUrl}#breadcrumb` },
    publisher: { '@id': `${siteConfig.url}#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.service-description'],
    },
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

  // 3. Service Schema with Offers
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${config.serviceUrl}#service`,
    name: config.serviceName,
    description: config.serviceDescription,
    serviceType: config.serviceType,
    category: config.category,
    url: config.serviceUrl,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.business.areaServed.map(a => ({
      '@type': a.type,
      name: a.name,
    })),
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
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
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
      },
      author: {
        '@type': 'Person',
        name: r.author,
        jobTitle: r.authorTitle,
      },
      reviewBody: r.body,
      datePublished: r.date,
    })),
    ...(config.duration && { estimatedDuration: config.duration }),
    termsOfService: `${siteConfig.url}/terms`,
    providerMobility: 'dynamic',
  });

  // 4. FAQPage Schema
  if (config.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${config.serviceUrl}#faq`,
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

  // 5. HowTo Schema for Process
  if (config.process.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${config.serviceUrl}#process`,
      name: `How ${siteConfig.name} Delivers ${config.serviceName}`,
      description: `Our proven process for delivering ${config.category.toLowerCase()} services`,
      totalTime: config.duration || 'P4W',
      step: config.process.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.description,
      })),
    });
  }

  // 6. Organization reference
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

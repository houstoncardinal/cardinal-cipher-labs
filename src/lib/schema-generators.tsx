// Schema.org JSON-LD Generators for Google E-E-A-T Compliance
import { siteConfig, services, faqs } from './seo-config';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 200,
      height: 200,
    },
    description: siteConfig.description,
    foundingDate: siteConfig.business.foundingDate,
    slogan: siteConfig.business.slogan,

    // E-E-A-T: Contact Information
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,

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

    // Contact Points
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer service',
        email: siteConfig.contact.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'sales',
        email: siteConfig.contact.email,
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
    ],

    // E-E-A-T: Expertise Areas
    knowsAbout: siteConfig.expertise.specialties,

    // E-E-A-T: Awards & Recognition (Authoritativeness)
    award: siteConfig.expertise.awardsRecognition,

    // Number of employees
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: siteConfig.business.numberOfEmployees,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
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

export function generateServiceSchemas() {
  return services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}#service-${index}`,
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
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
      availability: 'https://schema.org/InStock',
    },
  }));
}

export function generatePersonSchemas() {
  return siteConfig.team.map((person) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    image: `${siteConfig.url}${person.image}`,
    url: person.linkedin,

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

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

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
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author || siteConfig.team[0].name,
    },
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.url,
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
    about: {
      '@id': `${siteConfig.url}#organization`,
    },
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
  };
}

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

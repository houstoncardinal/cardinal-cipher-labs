// SEO Head Component for Meta Tags and Schema Injection
// Google E-E-A-T Compliant
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/lib/seo-config';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schemas?: any[];
  keywords?: string[];
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  schemas = [],
  keywords = [],
  noindex = false,
}: SEOProps) {
  // Prevent double brand name: only append if not already present
  const brandSuffix = ` | ${siteConfig.name}`;
  const pageTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title}${brandSuffix}`
    : `${siteConfig.name} - ${siteConfig.business.slogan}`;

  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = url || siteConfig.url;
  const pageImageAlt = `${siteConfig.name} - Web Design, App Development & SEO Agency Houston TX`;

  const defaultKeywords = [
    'web design company Houston',
    'best web design company Houston',
    'app development company Houston',
    'web developer Houston',
    'SEO company Houston',
    'web development Houston TX',
    'mobile app development Houston',
    'Houston web design agency',
    'custom website development Houston',
    'digital marketing Houston',
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={allKeywords} />

      {/* E-E-A-T: Author Attribution */}
      <meta name="author" content={author || siteConfig.name} />

      {/* Robots — full snippet allowances for rich results */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      {!noindex && (
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:publisher" content="https://www.facebook.com/cardinalconsulting" />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />
      <meta name="twitter:site" content="@cardinalconsult" />
      <meta name="twitter:creator" content="@cardinalconsult" />

      {/* Local Business & Geo Tags */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />
      <meta name="geo.position" content="29.7399;-95.4617" />
      <meta name="ICBM" content="29.7399, -95.4617" />

      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#DC2626" />
      <meta name="msapplication-TileColor" content="#DC2626" />

      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}

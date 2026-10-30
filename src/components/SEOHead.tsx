// SEO head: per-page meta tags, canonical and JSON-LD.
// Rendered into static HTML at build time by scripts/prerender.mjs.
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/lib/seo-config';
import { organizationSchema, websiteSchema, ORG_ID } from '@/lib/site-schema';

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

const LEGACY_ORIGIN = /https?:\/\/(www\.)?visitcardinal\.com/g;

/** Every URL we emit uses the one canonical origin (the live site serves visitcardinal.com; www 301s). */
export function canonicalUrl(url?: string): string {
  const raw = (url || siteConfig.url).replace(LEGACY_ORIGIN, siteConfig.url);
  const { origin, pathname } = new URL(raw);
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '';
  return `${origin}${path}`;
}

/**
 * Structured data must describe only what is visible and verifiable on the page.
 * Every page gets ONE canonical Organization (ProfessionalService) and WebSite entity,
 * injected here. Page-level schemas may still contain older inline copies of our company;
 * those are collapsed to an @id reference so Google sees a single, consistent entity.
 * Also stripped site-wide:
 * - self-published ratings/reviews of our own business or services
 * - awards, credentials, fax numbers and social profiles we have not verified
 * - "SoftwareApplication" markup on service pages (we sell services, not apps)
 * - retired HowTo markup
 * Legacy www/http URLs are rewritten to the canonical origin.
 */
const STRIPPED_KEYS = new Set(['aggregateRating', 'review', 'award', 'hasCredential', 'faxNumber', 'sameAs']);
const ORG_TYPES = new Set(['Organization', 'ProfessionalService', 'LocalBusiness', 'Corporation']);

const typesOf = (n: Record<string, unknown>) => ([] as unknown[]).concat(n['@type'] ?? []).map(String);
const isOurOrg = (n: Record<string, unknown>) =>
  typesOf(n).some((t) => ORG_TYPES.has(t)) &&
  (String(n.name ?? '').startsWith(siteConfig.name) || n.name === siteConfig.legalName || String(n['@id'] ?? '').includes('#organization') || String(n['@id'] ?? '').includes('#professional-service'));

function sanitize(node: unknown, depth = 0): unknown {
  if (Array.isArray(node)) return node.map((n) => sanitize(n, depth)).filter((n) => n !== undefined);
  if (node && typeof node === 'object') {
    const obj = node as Record<string, unknown>;
    if (isOurOrg(obj)) return depth === 0 ? undefined : { '@id': ORG_ID };
    if (depth === 0 && typesOf(obj).includes('WebSite')) return undefined; // injected once below
    if (obj['@type'] === 'SoftwareApplication' && String(obj['@id'] ?? '').includes('#software')) return undefined;
    // HowTo rich results were retired by Google in 2023; a service process isn't a how-to guide.
    if (obj['@type'] === 'HowTo') return undefined;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (STRIPPED_KEYS.has(k)) continue;
      const clean = sanitize(v, depth + 1);
      if (clean !== undefined) out[k] = clean;
    }
    return out;
  }
  if (typeof node === 'string') return node.replace(LEGACY_ORIGIN, siteConfig.url);
  return node;
}

function isStandaloneReview(schema: any) {
  const t = schema?.['@type'];
  return t === 'Review' || t === 'AggregateRating';
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
  // Brand suffix only when the result still fits in a search result (~60 characters)
  const pageTitle = title
    ? title.includes(siteConfig.name) || title.length + brandSuffix.length > 62
      ? title
      : `${title}${brandSuffix}`
    : `${siteConfig.name} — Houston Web Design & Development`;

  const pageDescription = description || siteConfig.description;
  const pageImage = (image || siteConfig.ogImage).replace(LEGACY_ORIGIN, siteConfig.url);
  const pageUrl = canonicalUrl(url);
  const pageImageAlt = `${siteConfig.name} — web design, app development and digital growth, Houston TX`;
  const cleanSchemas = [
    organizationSchema(),
    websiteSchema(),
    ...schemas.filter((s) => !isStandaloneReview(s)).map((s) => sanitize(s)).filter(Boolean),
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.slice(0, 12).join(', ')} />}
      <meta name="author" content={author || siteConfig.name} />

      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === 'article' && author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />
      <meta name="twitter:site" content="@cardinalconsult" />

      {cleanSchemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}

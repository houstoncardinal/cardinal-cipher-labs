import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowButton } from '@/components/ui/glow-button';
import { LuxuryCard } from '@/components/ui/luxury-card';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Store,
  Package,
  Wrench,
  FileText,
  BookOpen,
  Globe,
  User,
  Calendar,
  HelpCircle,
  ChefHat,
  Star,
  Video,
  Image,
  List,
  Phone,
  Info,
  Search,
  Code,
  Download,
  Copy,
  Check,
} from 'lucide-react';

const schemaTypes = [
  {
    type: 'Organization',
    icon: Building2,
    title: 'Organization',
    description: 'Company or organization information',
    color: 'green' as const,
    category: 'Business',
  },
  {
    type: 'LocalBusiness',
    icon: Store,
    title: 'Local Business',
    description: 'Physical business location details',
    color: 'blue' as const,
    category: 'Business',
  },
  {
    type: 'Product',
    icon: Package,
    title: 'Product',
    description: 'E-commerce product information',
    color: 'purple' as const,
    category: 'E-commerce',
  },
  {
    type: 'Service',
    icon: Wrench,
    title: 'Service',
    description: 'Service offering details',
    color: 'orange' as const,
    category: 'Business',
  },
  {
    type: 'Article',
    icon: FileText,
    title: 'Article',
    description: 'News or article content',
    color: 'green' as const,
    category: 'Content',
  },
  {
    type: 'BlogPosting',
    icon: BookOpen,
    title: 'Blog Post',
    description: 'Blog post metadata',
    color: 'blue' as const,
    category: 'Content',
  },
  {
    type: 'WebPage',
    icon: Globe,
    title: 'Web Page',
    description: 'General webpage information',
    color: 'purple' as const,
    category: 'Website',
  },
  {
    type: 'WebSite',
    icon: Globe,
    title: 'Website',
    description: 'Overall website structure',
    color: 'pink' as const,
    category: 'Website',
  },
  {
    type: 'Person',
    icon: User,
    title: 'Person',
    description: 'Individual person profile',
    color: 'green' as const,
    category: 'Profile',
  },
  {
    type: 'Event',
    icon: Calendar,
    title: 'Event',
    description: 'Event or happening details',
    color: 'orange' as const,
    category: 'Engagement',
  },
  {
    type: 'FAQPage',
    icon: HelpCircle,
    title: 'FAQ Page',
    description: 'Frequently asked questions',
    color: 'blue' as const,
    category: 'Content',
  },
  {
    type: 'HowTo',
    icon: List,
    title: 'How-To Guide',
    description: 'Step-by-step instructions',
    color: 'purple' as const,
    category: 'Content',
  },
  {
    type: 'Recipe',
    icon: ChefHat,
    title: 'Recipe',
    description: 'Cooking recipe schema',
    color: 'orange' as const,
    category: 'Content',
  },
  {
    type: 'Review',
    icon: Star,
    title: 'Review',
    description: 'Product or service review',
    color: 'green' as const,
    category: 'Engagement',
  },
  {
    type: 'VideoObject',
    icon: Video,
    title: 'Video',
    description: 'Video content metadata',
    color: 'red' as const,
    category: 'Media',
  },
  {
    type: 'ImageObject',
    icon: Image,
    title: 'Image',
    description: 'Image metadata',
    color: 'pink' as const,
    category: 'Media',
  },
  {
    type: 'BreadcrumbList',
    icon: List,
    title: 'Breadcrumbs',
    description: 'Site navigation breadcrumbs',
    color: 'blue' as const,
    category: 'Navigation',
  },
  {
    type: 'ContactPage',
    icon: Phone,
    title: 'Contact Page',
    description: 'Contact information page',
    color: 'green' as const,
    category: 'Website',
  },
  {
    type: 'AboutPage',
    icon: Info,
    title: 'About Page',
    description: 'About us page information',
    color: 'purple' as const,
    category: 'Website',
  },
];

const categories = ['All', 'Business', 'E-commerce', 'Content', 'Website', 'Profile', 'Engagement', 'Media', 'Navigation'];

export function AdminSEOSchemas() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSchema, setSelectedSchema] = useState<string | null>(null);
  const [generatedSchema, setGeneratedSchema] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const filteredSchemas = schemaTypes.filter(
    (schema) => selectedCategory === 'All' || schema.category === selectedCategory
  );

  const handleSchemaSelect = (type: string) => {
    setSelectedSchema(type);
    // Generate sample schema
    const sampleSchema = generateSampleSchema(type);
    setGeneratedSchema(JSON.stringify(sampleSchema, null, 2));
  };

  const generateSampleSchema = (type: string) => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
    };

    const typeSpecificData: Record<string, any> = {
      Organization: {
        name: 'Cardinal Consulting',
        url: 'https://visitcardinal.com',
        logo: 'https://visitcardinal.com/logo.png',
        description: 'Enterprise software development and consulting',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-0100',
          contactType: 'customer service',
        },
      },
      LocalBusiness: {
        '@type': 'LocalBusiness',
        name: 'Cardinal Consulting',
        image: 'https://visitcardinal.com/storefront.jpg',
        '@id': 'https://visitcardinal.com',
        url: 'https://visitcardinal.com',
        telephone: '+1-555-0100',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Main St',
          addressLocality: 'City',
          addressRegion: 'State',
          postalCode: '12345',
          addressCountry: 'US',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.7128,
          longitude: -74.006,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      },
      Product: {
        name: 'Product Name',
        image: 'https://example.com/product.jpg',
        description: 'Product description',
        sku: 'PROD-123',
        brand: {
          '@type': 'Brand',
          name: 'Brand Name',
        },
        offers: {
          '@type': 'Offer',
          url: 'https://example.com/product',
          priceCurrency: 'USD',
          price: '99.99',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/InStock',
        },
      },
      Article: {
        headline: 'Article Headline',
        image: 'https://example.com/article-image.jpg',
        author: {
          '@type': 'Person',
          name: 'Author Name',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Cardinal Consulting',
          logo: {
            '@type': 'ImageObject',
            url: 'https://example.com/logo.png',
          },
        },
        datePublished: '2025-01-01',
        dateModified: '2025-01-01',
      },
      Event: {
        name: 'Event Name',
        startDate: '2025-12-01T19:00:00-05:00',
        endDate: '2025-12-01T23:00:00-05:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: 'Venue Name',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Main St',
            addressLocality: 'City',
            addressRegion: 'State',
            postalCode: '12345',
            addressCountry: 'US',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Cardinal Consulting',
          url: 'https://visitcardinal.com',
        },
      },
      FAQPage: {
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services do you offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer comprehensive software development and consulting services.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact you?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach us via email or phone listed on our contact page.',
            },
          },
        ],
      },
    };

    return {
      ...baseSchema,
      ...(typeSpecificData[type] || {}),
    };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadSchema = () => {
    const blob = new Blob([generatedSchema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schema-${selectedSchema?.toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
            <Search size={24} className="text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">
              SEO Schema Manager
            </h1>
            <p className="text-muted-foreground">
              Generate and manage structured data markup for better SEO
            </p>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <LuxuryCard elevation={2} className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="relative"
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                  />
                )}
              </Button>
            ))}
          </div>
        </LuxuryCard>
      </motion.div>

      {/* Schema Types Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          Select Schema Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSchemas.map((schema, index) => (
              <motion.div
                key={schema.type}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <GlowButton
                  icon={schema.icon}
                  title={schema.title}
                  description={schema.description}
                  color={schema.color}
                  isActive={selectedSchema === schema.type}
                  onClick={() => handleSchemaSelect(schema.type)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Schema Preview & Code */}
      <AnimatePresence>
        {selectedSchema && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LuxuryCard elevation={4} borderStyle="metallic-gold" className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Code size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {selectedSchema} Schema
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Generated JSON-LD structured data
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <Check size={16} className="text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy Code
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadSchema}
                    className="gap-2"
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>

              {/* Code Block */}
              <div className="relative">
                <pre className="bg-secondary/50 p-6 rounded-lg overflow-x-auto border border-border/50">
                  <code className="text-sm text-foreground font-mono">
                    {generatedSchema}
                  </code>
                </pre>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(34,197,94,0.1)',
                      '0 0 40px rgba(34,197,94,0.2)',
                      '0 0 20px rgba(34,197,94,0.1)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Implementation Instructions */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Info size={16} className="text-primary" />
                  How to Implement
                </h3>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Copy the JSON-LD code above</li>
                  <li>
                    Add it to your HTML within a{' '}
                    <code className="px-2 py-1 bg-secondary rounded text-foreground">
                      &lt;script type="application/ld+json"&gt;
                    </code>{' '}
                    tag
                  </li>
                  <li>Place it in the {'<head>'} section of your webpage</li>
                  <li>
                    Validate using{' '}
                    <a
                      href="https://search.google.com/test/rich-results"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google's Rich Results Test
                    </a>
                  </li>
                </ol>
              </div>
            </LuxuryCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

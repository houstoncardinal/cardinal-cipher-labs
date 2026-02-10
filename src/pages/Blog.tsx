import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema, generateArticleSchema } from "@/lib/schema-generators";

const articles = [
  {
    slug: "cloud-migration-strategy-2025",
    title: "The Complete Cloud Migration Strategy for 2025",
    excerpt: "A comprehensive guide to planning, executing, and optimizing your enterprise cloud migration. Learn from real-world case studies and proven methodologies.",
    category: "Cloud Architecture",
    author: "Hunain Qureshi",
    date: "2025-01-28",
    readTime: "12 min read",
    image: "/portfolio/clearledger.png",
    featured: true,
  },
  {
    slug: "ai-business-automation",
    title: "How AI is Revolutionizing Business Automation in 2025",
    excerpt: "Discover how intelligent automation and machine learning are transforming operational efficiency across industries — and how your business can leverage it.",
    category: "AI & Machine Learning",
    author: "Hunain Qureshi",
    date: "2025-01-15",
    readTime: "9 min read",
    image: "/portfolio/vargas.png",
  },
  {
    slug: "hipaa-compliant-web-apps",
    title: "Building HIPAA-Compliant Web Applications: A Developer's Guide",
    excerpt: "Everything you need to know about building healthcare applications that meet HIPAA security and privacy requirements without sacrificing user experience.",
    category: "Healthcare Tech",
    author: "Hunain Qureshi",
    date: "2025-01-05",
    readTime: "15 min read",
    image: "/clients/apnclinic.png",
  },
  {
    slug: "seo-schema-markup-guide",
    title: "Advanced Schema Markup: The Definitive SEO Guide for 2025",
    excerpt: "Master JSON-LD structured data to dominate search results. Learn advanced schema techniques that most agencies don't know about.",
    category: "SEO & Analytics",
    author: "Hunain Qureshi",
    date: "2024-12-20",
    readTime: "11 min read",
    image: "/portfolio/blutouch.png",
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization: From Good to Blazing Fast",
    excerpt: "Advanced techniques for optimizing React applications including code splitting, virtualization, memoization strategies, and server-side rendering patterns.",
    category: "Web Development",
    author: "Hunain Qureshi",
    date: "2024-12-10",
    readTime: "14 min read",
    image: "/clients/hougenpros.png",
  },
  {
    slug: "digital-transformation-roi",
    title: "Measuring Digital Transformation ROI: A Framework for Leaders",
    excerpt: "How to quantify the return on investment of your digital transformation initiatives with concrete metrics, benchmarks, and real-world examples.",
    category: "Digital Strategy",
    author: "Hunain Qureshi",
    date: "2024-11-28",
    readTime: "10 min read",
    image: "/clients/houinc.png",
  },
];

export default function Blog() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  const articleSchemas = articles.map((a) =>
    generateArticleSchema({
      title: a.title,
      description: a.excerpt,
      image: `${siteConfig.url}${a.image}`,
      datePublished: a.date,
      dateModified: a.date,
      author: a.author,
      url: `${siteConfig.url}/blog/${a.slug}`,
    })
  );

  const schemas = [
    ...articleSchemas,
    generateWebPageSchema({
      name: "Blog — Cardinal Consulting",
      description: "Expert insights on enterprise software development, cloud architecture, AI, and digital transformation from the Cardinal Consulting team.",
      url: `${siteConfig.url}/blog`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog`,
      name: "Cardinal Consulting Blog",
      description: "Expert insights on enterprise software development, cloud architecture, and digital transformation.",
      url: `${siteConfig.url}/blog`,
      publisher: { "@id": `${siteConfig.url}#organization` },
      blogPost: articles.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        description: a.excerpt,
        datePublished: a.date,
        author: { "@type": "Person", name: a.author },
      })),
    },
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <SEOHead
        title="Blog & Insights"
        description="Expert insights on enterprise software development, cloud architecture, AI integration, and digital transformation strategies from Cardinal Consulting."
        url={`${siteConfig.url}/blog`}
        schemas={schemas}
        keywords={["tech blog", "software development insights", "cloud architecture blog", "AI integration guide", "digital transformation"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">← Back to Home</Link>
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Blog & Insights</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Expert Insights & Resources</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">In-depth articles on enterprise software development, cloud architecture, AI integration, and digital transformation strategies.</p>
              </motion.div>
            </div>
          </section>

          {/* Featured Article */}
          {featured && (
            <section className="pb-16">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <LuxuryCard elevation={4} borderStyle="metallic-crimson" className="overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                        <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                        <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1">Featured</span>
                      </div>
                      <div className="p-10 lg:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1"><Tag size={12} className="text-primary" />{featured.category}</span>
                          <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(featured.date)}</span>
                          <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                        </div>
                        <h2 className="font-serif text-3xl text-foreground mb-4">{featured.title}</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{featured.excerpt}</p>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-primary/10 flex items-center justify-center"><User size={14} className="text-primary" /></div>
                          <span className="text-sm text-foreground">{featured.author}</span>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 w-fit">Read Article <ArrowRight className="ml-2 w-4 h-4" /></Button>
                      </div>
                    </div>
                  </LuxuryCard>
                </motion.div>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
                <h2 className="font-serif text-3xl text-foreground">Latest Articles</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((article, i) => (
                  <motion.div key={article.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }}>
                    <LuxuryCard className="overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-secondary/80 text-foreground px-2 py-0.5 border border-border/50">{article.category}</span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(article.date)}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                        </div>
                        <h3 className="font-serif text-xl text-foreground mb-3 flex-1">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                        <span className="text-sm text-primary flex items-center gap-1 cursor-pointer hover:underline">Read More <ArrowRight size={14} /></span>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Stay Ahead of the Curve</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Get expert insights delivered to your inbox. No spam, just actionable strategies.</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" name="newsletter" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input type="email" name="email" required placeholder="you@company.com" className="flex-1 bg-background/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Tag, Search, Sparkles, TrendingUp, Globe, Code, Zap, Filter, MapPin, Star, Award, BarChart3, ArrowRight, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";
import { articles, pillars } from "@/lib/blog-data";
import { generateAllBlogAEOSchemas } from "@/lib/aeo-schemas";

const pillarIcons: Record<string, React.ElementType> = {
  "houston-web-design": Globe,
  "web-design-comparisons": BarChart3,
  "industry-web-design": MapPin,
  "design-process": Code,
  "business-roi": Award,
};

const featured = articles.find((a) => a.featured);

export default function Blog() {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesPillar = !activePillar || article.pillar === activePillar;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  const getPillarInfo = (pillarId: string) => pillars.find(p => p.id === pillarId);

  const articleSchemas = articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: { "@type": "Person", name: a.author },
    url: `${siteConfig.url}/blog/${a.slug}`,
    articleSection: a.category,
  }));

  const schemas = [
    ...articleSchemas,
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${siteConfig.url}/blog`,
      name: "Cardinal Consulting Blog — Houston Web Design Insights",
      description: "Expert insights on Houston web design, local SEO, website optimization, and digital growth strategies for Houston businesses.",
      url: `${siteConfig.url}/blog`,
      publisher: { "@id": `${siteConfig.url}#organization` },
      blogPost: articleSchemas,
    },
    ...generateAllBlogAEOSchemas(),
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <SEOHead
        title="Houston Web Design Blog | Cardinal Consulting"
        description="Expert insights on Houston web design, local SEO, website optimization, and digital growth. Learn how to build a website that ranks, converts, and drives revenue for your Houston business."
        url={`${siteConfig.url}/blog`}
        schemas={schemas}
        keywords={["houston web design blog", "web design houston tips", "houston website design guide", "houston seo blog", "houston digital marketing blog"]}
      />

      <div className="min-h-screen bg-[#FAFAFA]">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-transparent to-transparent" />
            <motion.div 
              className="absolute -left-40 top-20 w-[400px] h-[400px] bg-red-100/30 rounded-full blur-[100px]"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -right-40 bottom-20 w-[400px] h-[400px] bg-red-100/20 rounded-full blur-[100px]"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
                <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-semibold mb-4 block">Blog & Insights</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-5">
                  Houston Web Design{' '}
                  <span className="relative">
                    <span className="relative z-10">Insights</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-200/40 -z-10 rounded" />
                  </span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                  Expert insights on Houston web design, local SEO, and digital growth. Practical strategies to build a website that ranks, converts, and drives real revenue.
                </p>
                
                {/* Search */}
                <div className="relative max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-300"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Pillar Filters */}
          <section className="py-6 border-y border-gray-200 bg-white sticky top-16 z-40">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  onClick={() => setActivePillar(null)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    !activePillar 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  All Articles
                </button>
                {pillars.map((pillar) => {
                  const Icon = pillarIcons[pillar.id] || BookOpen;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activePillar === pillar.id 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {pillar.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Featured Article */}
          {featured && !activePillar && !searchQuery && (
            <section className="pb-16">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Link to={`/blog/${featured.slug}`} className="block group">
                    <LuxuryCard className="overflow-hidden">
                      <div className="p-10 lg:p-14">
                        <div className="max-w-3xl">
                          {/* Category Tag */}
                          <div className="flex items-center gap-3 mb-5">
                            <span className="text-[10px] tracking-[0.2em] uppercase bg-red-600 text-white px-3 py-1.5 font-semibold rounded-full">Featured</span>
                            {getPillarInfo(featured.pillar) && (
                              <span className="text-xs tracking-[0.15em] uppercase text-red-600 font-semibold">
                                {getPillarInfo(featured.pillar)?.name}
                              </span>
                            )}
                          </div>
                          
                          {/* Meta */}
                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                            <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(featured.date)}</span>
                            <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                            <span className="flex items-center gap-1"><User size={12} />{featured.author}</span>
                          </div>
                          
                          {/* Title */}
                          <h2 className="font-serif text-3xl lg:text-4xl text-gray-900 mb-4 group-hover:text-red-600 transition-colors leading-tight">
                            {featured.title}
                          </h2>
                          
                          {/* Excerpt */}
                          <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl">
                            {featured.excerpt}
                          </p>
                          
                          {/* Read More */}
                          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-red-600 group-hover:text-red-700 transition-colors">
                            Read Full Article
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </LuxuryCard>
                  </Link>
                </motion.div>
              </div>
            </section>
          )}

          {/* Articles Grid */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-serif text-2xl text-gray-900">
                  {activePillar ? getPillarInfo(activePillar)?.name : 'All'} Articles
                  <span className="ml-3 text-sm font-normal text-gray-500">({filteredArticles.length})</span>
                </h2>
              </div>
              
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article, i) => (
                    <motion.div 
                      key={article.slug}
                      initial={{ opacity: 0, y: 30 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }}
                      transition={{ delay: (i % 3) * 0.1 }}
                    >
                      <Link to={`/blog/${article.slug}`} className="block h-full group">
                        <LuxuryCard className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
                          {/* Top accent bar */}
                          <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400" />
                          
                          <div className="p-6 flex flex-col flex-1">
                            {/* Category & Pillar */}
                            <div className="flex items-center gap-2 mb-4">
                              {getPillarInfo(article.pillar) && (
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-600">
                                  {getPillarInfo(article.pillar)?.name}
                                </span>
                              )}
                            </div>
                            
                            {/* Date & Read time */}
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(article.date)}</span>
                              <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="font-serif text-lg text-gray-900 mb-3 flex-1 group-hover:text-red-600 transition-colors leading-snug">
                              {article.title}
                            </h3>
                            
                            {/* Excerpt */}
                            <p className="text-sm text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                              {article.excerpt}
                            </p>
                            
                            {/* Read More */}
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-red-600 group-hover:gap-2.5 transition-all">
                              Read Article
                              <ArrowRight size={12} />
                            </span>
                          </div>
                        </LuxuryCard>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(220,38,38,0.2), transparent 50%)'
              }}
            />
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Sparkles className="w-10 h-10 text-red-400 mx-auto mb-5" />
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Get Houston Web Design Insights
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-8">
                  Be the first to read our in-depth guides on Houston web design, local SEO, and digital growth strategies. No spam — unsubscribe anytime.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    required 
                    placeholder="you@company.com" 
                    className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-xl"
                  />
                  <Button className="bg-red-600 hover:bg-red-700 px-8 rounded-xl">Subscribe</Button>
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
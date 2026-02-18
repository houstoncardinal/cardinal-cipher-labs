import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag, Search, Sparkles, TrendingUp, Globe, Code, Zap, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";

// Blog pillars configuration
const pillars = [
  { id: "ai-automation", name: "AI Automation", icon: Sparkles, color: "from-violet-600 to-purple-500" },
  { id: "website-profit", name: "Website Profit", icon: TrendingUp, color: "from-emerald-600 to-teal-500" },
  { id: "seo-aeo", name: "SEO & AEO", icon: Globe, color: "from-blue-600 to-cyan-500" },
  { id: "web-development", name: "Web & App", icon: Code, color: "from-orange-600 to-amber-500" },
  { id: "ai-lead-gen", name: "AI Lead Gen", icon: Zap, color: "from-red-600 to-rose-500" },
];

// All blog articles organized by pillar
const articles = [
  // PILLAR 1: AI AUTOMATION FOR BUSINESS
  {
    slug: "ai-automation-small-business-2026",
    title: "AI Automation for Small Business: The Complete 2026 Implementation Guide",
    excerpt: "Discover how small businesses are leveraging AI automation to reduce costs, streamline operations, and compete with enterprise-level companies. Complete implementation roadmap included.",
    category: "AI Automation",
    pillar: "ai-automation",
    priority: 1,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "15 min read",
    image: "/portfolio/axiomio.png",
    featured: true,
    keywords: ["ai automation for small business", "business process automation", "ai workflow automation", "automate small business operations"],
  },
  {
    slug: "ai-automation-cost-savings",
    title: "How Much Money Can AI Automation Actually Save a Company? (Real Numbers)",
    excerpt: "Get concrete data on AI ROI. We break down real cost savings from actual business implementations across industries with detailed breakdowns.",
    category: "AI Automation",
    pillar: "ai-automation",
    priority: 2,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "12 min read",
    image: "/portfolio/houinc.png",
    keywords: ["ai automation cost savings", "ai roi calculator", "automation savings business", "ai efficiency gains"],
  },
  {
    slug: "ai-workflows-service-business-2026",
    title: "Best AI Workflows Every Service Business Should Automate in 2026",
    excerpt: "From client onboarding to follow-ups, discover the AI workflows that are saving service businesses hundreds of hours monthly. Implementation checklist included.",
    category: "AI Automation",
    pillar: "ai-automation",
    priority: 3,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "10 min read",
    image: "/portfolio/hougenpros.png",
    keywords: ["ai workflows for service businesses", "automate client onboarding", "ai crm automation", "service business automation"],
  },

  // PILLAR 2: WEBSITE PROFIT OPTIMIZATION
  {
    slug: "website-profit-leaks",
    title: "12 Hidden Website Profit Leaks That Are Costing You Clients",
    excerpt: "Is your website secretly losing you customers? We reveal the 12 most common profit leaks destroying your conversion rates—and how to fix them fast.",
    category: "Website Profit",
    pillar: "website-profit",
    priority: 1,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "11 min read",
    image: "/portfolio/allhoustonproperty.png",
    featured: false,
    keywords: ["why my website is not converting", "website conversion problems", "low conversion rate website", "website losing customers"],
  },
  {
    slug: "beautiful-websites-fail",
    title: "Why Beautiful Websites Still Fail to Generate Leads",
    excerpt: "The ugly truth about design-first websites. Learn why stunning visuals often equal zero leads—and what actually drives conversions.",
    category: "Website Profit",
    pillar: "website-profit",
    priority: 2,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "9 min read",
    image: "/portfolio/blutouch.png",
    keywords: ["why websites fail", "website design mistakes", "conversion vs design", "website not generating leads"],
  },
  {
    slug: "website-speed-revenue-impact",
    title: "Website Speed vs Revenue: The Data Every Business Owner Needs",
    excerpt: "How slow loading times directly impact your revenue. Real data and case studies showing the exact cost of every second of delay.",
    category: "Website Profit",
    pillar: "website-profit",
    priority: 3,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "8 min read",
    image: "/portfolio/hitechlogic.png",
    keywords: ["website speed impact on revenue", "slow website cost", "page speed conversion rate", "site speed seo impact"],
  },

  // PILLAR 3: MODERN SEO & AEO
  {
    slug: "seo-vs-aeo-vs-geo",
    title: "SEO vs AEO vs GEO: The Future of Search Explained",
    excerpt: "Search is evolving beyond Google. Understand the differences between SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) to stay ahead.",
    category: "SEO & AEO",
    pillar: "seo-aeo",
    priority: 1,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "13 min read",
    image: "/portfolio/svrlawfirm.png",
    keywords: ["answer engine optimization", "what is aeo", "seo in 2026", "ai search optimization"],
  },
  {
    slug: "rank-in-chatgpt-results",
    title: "How to Rank Inside ChatGPT and AI Search Results",
    excerpt: "With AI search growing rapidly, discover the strategies to get your business recommended by ChatGPT, Claude, and other AI assistants.",
    category: "SEO & AEO",
    pillar: "seo-aeo",
    priority: 2,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "11 min read",
    image: "/portfolio/vargas.png",
    keywords: ["rank in chatgpt results", "ai search ranking", "optimize for ai answers", "chatgpt seo"],
  },
  {
    slug: "schema-markup-advanced-guide",
    title: "Schema Markup That Actually Moves Rankings (Advanced Guide)",
    excerpt: "Go beyond basic schema. Learn advanced structured data strategies that can significantly boost your visibility in search results.",
    category: "SEO & AEO",
    pillar: "seo-aeo",
    priority: 3,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "14 min read",
    image: "/portfolio/unitedccr.png",
    keywords: ["advanced schema markup", "technical seo schema", "structured data seo", "schema for rankings"],
  },

  // PILLAR 4: WEB & APP DEVELOPMENT
  {
    slug: "custom-vs-template-websites",
    title: "Custom vs Template Websites: The Real Cost Breakdown",
    excerpt: "Template or custom? We break down the true costs including development time, maintenance, scalability, and long-term ROI.",
    category: "Web Development",
    pillar: "web-development",
    priority: 1,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "10 min read",
    image: "/portfolio/apnclinic.png",
    keywords: ["custom website vs template", "custom vs wordpress", "wix vs custom website", "website cost comparison"],
  },
  {
    slug: "outgrow-wix-squarespace",
    title: "When Businesses Outgrow Wix or Squarespace",
    excerpt: "Warning signs you're hitting the limits of website builders. Plus: when and how to make the jump to custom development.",
    category: "Web Development",
    pillar: "web-development",
    priority: 2,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "9 min read",
    image: "/portfolio/clearledger.png",
    keywords: ["outgrow wix", "wix limitations", "squarespace vs custom", "when to upgrade website"],
  },
  {
    slug: "nocode-vs-custom-development-2026",
    title: "No-Code vs Custom Development in 2026: What Smart Companies Choose",
    excerpt: "No-code tools have evolved. We analyze when no-code makes sense vs when custom development is the smarter investment.",
    category: "Web Development",
    pillar: "web-development",
    priority: 3,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "11 min read",
    image: "/portfolio/abqmri.png",
    keywords: ["no code vs custom development", "lovable vs custom", "bubble vs custom", "no code limitations"],
  },

  // PILLAR 5: AI LEAD GENERATION
  {
    slug: "ai-lead-generation-systems",
    title: "AI Lead Generation Systems: How Modern Businesses Fill Their Pipeline",
    excerpt: "Stop chasing leads. Discover AI-powered systems that automatically attract, qualify, and nurture prospects 24/7.",
    category: "AI Lead Gen",
    pillar: "ai-lead-gen",
    priority: 1,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "12 min read",
    image: "/portfolio/axiomio.png",
    keywords: ["ai lead generation system", "automated lead generation", "ai sales funnel", "ai marketing automation"],
  },
  {
    slug: "ai-chatbot-conversions-2026",
    title: "How AI Chatbots Are Increasing Website Conversions in 2026",
    excerpt: "AI chatbots are revolutionizing lead capture. See real conversion rate improvements and implementation strategies.",
    category: "AI Lead Gen",
    pillar: "ai-lead-gen",
    priority: 2,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "10 min read",
    image: "/portfolio/houinc.png",
    keywords: ["ai chatbot conversions", "chatbot conversion rate", "website chatbot roi", "ai chat for leads"],
  },
  {
    slug: "automated-sales-funnel",
    title: "From Click to Client: Building a Fully Automated Sales Funnel",
    excerpt: "Map out your entire customer journey from first touch to closed deal. Complete automation blueprint included.",
    category: "AI Lead Gen",
    pillar: "ai-lead-gen",
    priority: 3,
    author: "Houston Cardinal",
    date: "2026-02-17",
    readTime: "13 min read",
    image: "/portfolio/hougenpros.png",
    keywords: ["automated sales funnel", "ai funnel automation", "lead nurture automation", "conversion funnel system"],
  },
];

// Sort by priority within each pillar
const sortedArticles = [...articles].sort((a, b) => {
  if (a.priority !== b.priority) return a.priority - b.priority;
  return 0;
});

const featured = articles.find((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

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
    image: `${siteConfig.url}${a.image}`,
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
      name: "Houston Cardinal Blog",
      description: "Expert insights on AI automation, website optimization, SEO, and lead generation for modern businesses.",
      url: `${siteConfig.url}/blog`,
      publisher: { "@id": `${siteConfig.url}#organization` },
      blogPost: articleSchemas,
    },
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <SEOHead
        title="Blog | Houston Cardinal - AI Automation & Digital Growth Insights"
        description="Expert insights on AI automation, website optimization, SEO, lead generation, and digital transformation. Practical guides for modern businesses."
        url={`${siteConfig.url}/blog`}
        schemas={schemas}
        keywords={["ai automation blog", "seo guide", "website conversion optimization", "lead generation", "digital marketing"]
        }
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
                  Grow Your Business With{' '}
                  <span className="relative">
                    <span className="relative z-10">Data</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-200/40 -z-10 rounded" />
                  </span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                  Practical insights on AI automation, website optimization, SEO, and lead generation. No fluff—just strategies that drive real results.
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
                  const Icon = pillar.icon;
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
                  <LuxuryCard className="overflow-hidden group cursor-pointer">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                        <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent" />
                        <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-red-600 text-white px-3 py-1 font-semibold">Featured</span>
                        {getPillarInfo(featured.pillar) && (
                          <span className="absolute bottom-4 left-4 text-xs tracking-[0.15em] uppercase bg-white/90 text-gray-900 px-3 py-1">
                            {getPillarInfo(featured.pillar)?.name}
                          </span>
                        )}
                      </div>
                      <div className="p-10 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <span className="flex items-center gap-1"><Calendar size={12} />{formatDate(featured.date)}</span>
                          <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                        </div>
                        <h2 className="font-serif text-3xl text-gray-900 mb-4 group-hover:text-red-600 transition-colors">{featured.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                        <Button className="bg-gray-900 hover:bg-gray-800 w-fit">Read Article <ArrowRight className="ml-2 w-4 h-4" /></Button>
                      </div>
                    </div>
                  </LuxuryCard>
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
                      <LuxuryCard className="overflow-hidden h-full flex flex-col group cursor-pointer">
                        <div className="relative aspect-video overflow-hidden">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                          {getPillarInfo(article.pillar) && (
                            <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-white/95 text-gray-900 px-2 py-1 font-semibold">
                              {getPillarInfo(article.pillar)?.name}
                            </span>
                          )}
                          {article.priority === 1 && (
                            <span className="absolute top-3 right-3 text-[10px] tracking-[0.15em] uppercase bg-red-600 text-white px-2 py-1 font-semibold">Priority</span>
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(article.date)}</span>
                            <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                          </div>
                          <h3 className="font-serif text-lg text-gray-900 mb-3 group-hover:text-red-600 transition-colors flex-1">{article.title}</h3>
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{article.excerpt}</p>
                          <span className="text-sm text-red-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={14} /></span>
                        </div>
                      </LuxuryCard>
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
                <Sparkles className="w-10 h-10 text-red-500 mx-auto mb-5" />
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Get Expert Insights Weekly
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-8">
                  Join 2,000+ business leaders getting actionable strategies delivered to their inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    required 
                    placeholder="you@company.com" 
                    className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  />
                  <Button className="bg-red-600 hover:bg-red-700 px-8">Subscribe</Button>
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

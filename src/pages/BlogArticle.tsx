import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, BookOpen, Quote, Lightbulb, ListChecks, Sparkles, Globe, Code, MapPin, Award, BarChart3, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";
import { articles, pillars } from "@/lib/blog-data";
import { generateArticleAEOSchemas } from "@/lib/aeo-schemas";

const pillarIcons: Record<string, React.ElementType> = {
  "houston-web-design": Globe,
  "web-design-comparisons": BarChart3,
  "industry-web-design": MapPin,
  "design-process": Code,
  "business-roi": Award,
};

function ArticleSection({ section, index }: { section: { heading: string; body: string; highlight?: string; bullets?: string[] }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      <h2 className="font-serif text-3xl lg:text-4xl text-gray-900 leading-tight mb-6 tracking-tight">
        {section.heading}
      </h2>
      
      <p className="text-lg text-gray-600 leading-relaxed mb-8 font-[350]">
        {section.body}
      </p>

      {section.highlight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-gray-50 to-white border-l-4 border-red-500 rounded-r-2xl p-8 mb-8 shadow-sm"
        >
          <Quote className="absolute top-4 left-4 w-8 h-8 text-red-100" />
          <div className="relative pl-4">
            <p className="text-xl lg:text-2xl text-gray-800 font-serif italic leading-relaxed">
              "{section.highlight}"
            </p>
          </div>
        </motion.div>
      )}

      {section.bullets && section.bullets.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <ListChecks className="w-5 h-5 text-red-500" />
            <span className="text-sm font-semibold tracking-wider uppercase text-red-600">Key Points</span>
          </div>
          <ul className="space-y-4">
            {section.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 text-gray-600 leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-500 mt-3" />
                <span className="text-[16.5px] font-[350]">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Decorative divider */}
      {index < 0 && (
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      )}
    </motion.div>
  );
}

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const pillarInfo = pillars.find((p) => p.id === article.pillar);
  const PillarIcon = pillarIcons[article.pillar] || BookOpen;
  const relatedArticles = articles
    .filter((a) => a.pillar === article.pillar && a.slug !== article.slug)
    .slice(0, 3);

  const formatDate = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  // Generate related article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blog/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${article.slug}`,
    },
    image: `${siteConfig.url}/social-card.jpg`,
  };

  const articleSchemas = generateArticleAEOSchemas(article.slug, article.title, article.excerpt);

  return (
    <>
      <SEOHead
        title={`${article.title} | Cardinal Consulting`}
        description={article.excerpt}
        url={`${siteConfig.url}/blog/${article.slug}`}
        type="article"
        author={article.author}
        publishedTime={article.date}
        schemas={[articleSchema, ...articleSchemas]}
        keywords={article.keywords}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Top navigation bar */}
          <div className="sticky top-[108px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-14">
                <Link
                  to="/blog"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  Back to Blog
                </Link>
                {pillarInfo && (
                  <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
                    <PillarIcon className="w-4 h-4" />
                    <span>{pillarInfo.name}</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-gray-600 font-medium truncate max-w-[200px]">{article.category}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Article Hero */}
          <section className="pt-16 pb-8 lg:pt-20 lg:pb-12">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[800px] mx-auto"
              >
                {/* Category & Pillar Tag */}
                <div className="flex items-center gap-3 mb-6">
                  {pillarInfo && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-red-600 bg-red-50 px-4 py-2 rounded-full">
                      <PillarIcon className="w-3.5 h-3.5" />
                      {article.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-[1.1] tracking-tight mb-6">
                  {article.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-gray-500 leading-relaxed mb-8 font-[350]">
                  {article.excerpt}
                </p>

                {/* Meta bar */}
                <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                      {article.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-900">{article.author}</span>
                      <span className="text-xs text-gray-400">Cardinal Consulting</span>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {formatDate(article.date)}
                  </span>
                  <div className="w-px h-8 bg-gray-200" />
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {article.readTime}
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-[800px] mx-auto">
                {/* Reading progress indicator */}
                <div className="sticky top-[152px] z-20 -mx-6 lg:-mx-12 mb-12">
                  <div className="h-[2px] bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: false }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </div>

                {/* Article body */}
                <article className="prose prose-lg max-w-none">
                  {article.content.sections.map((section, index) => (
                    <ArticleSection key={index} section={section} index={index} />
                  ))}
                </article>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-16 p-10 lg:p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.4), transparent 50%), radial-gradient(circle at 70% 50%, rgba(220,38,38,0.2), transparent 50%)'
                  }} />
                  <div className="relative">
                    <Lightbulb className="w-10 h-10 text-red-400 mb-6" />
                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4 leading-tight">
                      Ready to Transform Your Houston Business?
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                      {article.content.cta}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact">
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all">
                          Get Your Free Consultation
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to="/portfolio">
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-xl">
                          View Our Portfolio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Author Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 p-8 bg-gray-50 rounded-2xl flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {article.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{article.author}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Founder & Lead Strategist at Cardinal Consulting. With 15+ years of experience in web design and digital strategy, Hunain has helped hundreds of Houston businesses build websites that drive real results.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-[800px] mx-auto"
                >
                  <div className="flex items-center gap-3 mb-10">
                    <BookOpen className="w-5 h-5 text-red-500" />
                    <h2 className="font-serif text-2xl text-gray-900">Related Articles</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((related, i) => (
                      <motion.div
                        key={related.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          to={`/blog/${related.slug}`}
                          className="group block bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200"
                        >
                          <p className="text-xs font-bold tracking-wider uppercase text-red-500 mb-3">
                            {related.category}
                          </p>
                          <h3 className="font-serif text-lg text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                            {related.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                            {related.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(related.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {related.readTime}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Newsletter */}
          <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-[600px] mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-8 h-8 text-red-500 mx-auto mb-6" />
                  <h2 className="font-serif text-3xl text-gray-900 mb-3">
                    Get Houston Web Design Insights
                  </h2>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    Join our newsletter for the latest strategies on Houston web design, local SEO, and digital growth.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="flex-1 bg-gray-50 border border-gray-200 px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-300 rounded-xl"
                    />
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-xl">
                      Subscribe
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
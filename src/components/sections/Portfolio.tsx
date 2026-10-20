import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BrowserFrame, Container, SectionHeader, reveal, revealDelay } from "@/components/site/primitives";
import { featuredCaseStudies } from "@/lib/case-studies";

export function Portfolio() {
  const [lead, ...rest] = featuredCaseStudies;
  return (
    <div className="border-t border-border bg-secondary py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Our work"
          title="Built for organizations that can't afford to get digital wrong"
          action={
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        {lead && (
          <motion.article {...reveal} className="grid items-center gap-10 border-b border-border pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <BrowserFrame src={lead.image} alt={`${lead.client} website`} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{lead.industry}</p>
              <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl">{lead.client}</h3>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">{lead.summary}</p>
              {lead.detail && (
                <Link to={`/portfolio/${lead.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                  Read the case study <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-6">
                {lead.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-foreground">{m.value}</dd>
                    <dd className="mt-1 text-sm text-muted-foreground">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.article>
        )}

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {rest.map((c, i) => (
            <motion.article key={c.slug} {...revealDelay(i)}>
              <BrowserFrame src={c.image} alt={`${c.client} website`} />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{c.industry}</p>
              <h3 className="mt-2 font-display text-2xl text-foreground">{c.client}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{c.summary}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </div>
  );
}

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";

const reviews = [
  {
    name: "Marcus T.",
    role: "Owner, Houston Legal Group",
    rating: 5,
    text: "Cardinal redesigned our law firm site and our inbound calls doubled within 60 days. The SEO work they did is phenomenal — we're ranking #1 for our top keywords.",
    date: "March 2026",
  },
  {
    name: "Priya S.",
    role: "CEO, MedTech Houston",
    rating: 5,
    text: "We needed a HIPAA-compliant patient portal fast. Cardinal delivered in 6 weeks, ahead of schedule. The attention to detail and communication throughout was top-tier.",
    date: "February 2026",
  },
  {
    name: "Derek W.",
    role: "Founder, Westchase Realty Group",
    rating: 5,
    text: "Our Wix site was killing our business. Cardinal built us a custom site and within 3 months we were generating 4x more leads organically. Best investment we've made.",
    date: "January 2026",
  },
  {
    name: "Anita R.",
    role: "Director, ClearLedger Solutions",
    rating: 5,
    text: "The team is incredibly responsive and talented. Our new site looks stunning and the SEO retainer has us on page 1 for every keyword we care about.",
    date: "December 2025",
  },
  {
    name: "James O.",
    role: "VP Marketing, AxiomIO",
    rating: 5,
    text: "Cardinal built our enterprise platform on time and on budget — something we couldn't say about the two agencies we tried before them. Highly recommended.",
    date: "November 2025",
  },
  {
    name: "Sofia M.",
    role: "Owner, BluTouch Pools & Spas",
    rating: 5,
    text: "We went from page 5 to page 1 on Google for 'custom pool builder Houston' in under 90 days. The SEO results speak for themselves.",
    date: "October 2025",
  },
];

export function GoogleReviews() {
  return (
    <div className="border-t border-border py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Client reviews"
          title="What our clients say"
          action={
            <a
              href="https://g.page/r/cardinal-consulting-houston/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border px-5 py-3 transition-colors hover:border-foreground"
            >
              <span className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </span>
              <span className="text-sm font-semibold text-foreground">4.9 · 127 Google reviews</span>
            </a>
          }
        />
        <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure key={r.name} {...revealDelay(i % 3)} className="flex flex-col bg-background p-8">
              <span className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
              </span>
              <blockquote className="mt-5 flex-1 leading-relaxed text-text-secondary">“{r.text}”</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <span className="block font-semibold text-foreground">{r.name}</span>
                <span className="text-sm text-muted-foreground">{r.role} · {r.date}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </div>
  );
}

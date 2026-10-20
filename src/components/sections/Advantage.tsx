import { motion } from "framer-motion";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";

const pillars = [
  { title: "One senior team", description: "Strategy, design, engineering, and marketing under one roof — no hand-offs between agencies, no junior bait-and-switch." },
  { title: "Speed when it matters", description: "Most websites launch in 72 hours to 2 weeks, and urgent projects can be expedited without cutting corners." },
  { title: "Security built in", description: "Encryption, hardened infrastructure, and HIPAA-ready architecture for organizations handling sensitive data." },
  { title: "Accountable to results", description: "Written scopes, clear timelines, and reporting tied to leads, revenue, and the metrics your leadership tracks." },
  { title: "Fully custom", description: "No templates. Every experience is designed around your brand, your customers, and your systems." },
  { title: "Responsive support", description: "Hear back within hours, not days, from a team that already knows your business." },
];

export function Advantage() {
  return (
    <div className="bg-ink py-24 text-ink-foreground lg:py-32">
      <Container>
        <SectionHeader
          inverted
          eyebrow="Why Cardinal"
          title="The capability of a large firm, the focus of a dedicated team"
          description="Houston businesses and national organizations choose us because we combine enterprise-grade delivery with senior attention on every engagement."
        />
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div key={p.title} {...revealDelay(i)} className="border-t border-white/15 pt-6">
              <p className="font-display text-sm font-semibold text-ink-muted">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink-foreground">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

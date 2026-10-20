import { motion } from "framer-motion";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";

const steps = [
  { title: "Free consultation", description: "We learn your business, goals, constraints, and what success looks like to your leadership." },
  { title: "Clear plan & price", description: "You receive a written scope, timeline, and investment before any work begins." },
  { title: "Design & delivery", description: "We work in short cycles with regular reviews, so you see progress and approve each step." },
  { title: "Launch & improve", description: "We launch, measure results against your goals, and keep optimizing with ongoing support." },
];

export function Process() {
  return (
    <div className="border-t border-border bg-secondary py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="How we work"
          title="From first call to launch in four clear steps"
          description="Every engagement follows the same disciplined process, so you always know what happens next. Need it fast? Many projects can be delivered in 72 hours."
        />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <motion.li key={s.title} {...revealDelay(i)} className="border-t-2 border-foreground pt-6">
              <p className="font-display text-sm font-semibold text-primary">Step {i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </div>
  );
}

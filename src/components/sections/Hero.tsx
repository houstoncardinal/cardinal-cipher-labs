import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { HeroBuildStack } from "@/components/sections/HeroBuildStack";

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "72 hrs", label: "Expedited delivery available" },
  { value: "24/7", label: "Support coverage" },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-background pt-[72px]">
      {/* Fine architectural grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <Container className="relative grid items-center gap-16 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow className="mb-8">Houston web design, app development &amp; SEO</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.02] text-foreground md:text-6xl xl:text-7xl">
            We design, build, and grow <span className="text-primary">digital businesses.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Websites, apps, brands, and marketing for mid-market and enterprise organizations — delivered by one senior team and measured by business results.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-ink px-7 font-semibold text-ink-foreground transition-colors hover:bg-primary">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:underline">
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <HeroBuildStack />
        </motion.div>
      </Container>

      <Container className="relative">
        <dl className="grid grid-cols-2 border-t border-border md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-8 ${i % 2 === 1 ? "pl-6" : ""} ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-foreground lg:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}

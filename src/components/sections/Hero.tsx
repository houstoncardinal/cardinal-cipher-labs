import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { CountUp, RevealText } from "@/components/site/motion";
import { Magnetic } from "@/components/site/canvas";
import { HeroBuildStack } from "@/components/sections/HeroBuildStack";

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "72 hrs", label: "Expedited delivery available" },
  { value: "24/7", label: "Support coverage" },
];

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden border-b border-border bg-background pt-[72px]">
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

      <Container className="relative grid items-center gap-16 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow className="mb-8">Houston web design, app development &amp; SEO</Eyebrow>
          </motion.div>
          {/* Each phrase is its own balanced block; sizes are tuned so the accent phrase always
              sits on one line (10vw on phones; fixed steps that fit the column above that). */}
          <h1 className="font-display text-[clamp(2.25rem,10vw,3rem)] leading-[1.08] text-foreground md:text-6xl lg:text-[3.375rem] xl:text-[4.25rem]">
            <span className="block">
              <RevealText trigger="mount" text="We design, build, and grow" />
            </span>
            <span className="block whitespace-nowrap text-primary">
              <RevealText trigger="mount" delay={0.25} text="digital businesses." />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Websites, apps, brands, and marketing for mid-market and enterprise organizations — delivered by one senior team and measured by business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Magnetic>
              <Link
                to="/contact"
                className="group relative inline-flex h-12 items-center gap-2 overflow-hidden bg-ink px-7 font-semibold text-ink-foreground"
              >
                <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative">Talk to our team</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link to="/portfolio" className="group inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:underline">
                See our work <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
          <HeroBuildStack />
        </motion.div>
      </Container>

      <Container className="relative">
        <dl className="grid grid-cols-2 border-t border-border md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
              className={`py-8 ${i % 2 === 1 ? "pl-6" : ""} ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold text-foreground lg:text-4xl">
                <CountUp value={s.value} />
              </dd>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </Container>
    </div>
  );
}

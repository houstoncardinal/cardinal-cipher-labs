import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { FOUNDER_PATH } from "@/lib/founder-story";

const EASE = [0.16, 1, 0.3, 1] as const;

const moments = [
  { value: "1991", label: "Born the year the web opened to the world" },
  { value: "13", label: "Age he turned pro in Counter-Strike" },
  { value: "2020", label: "Founded Cardinal Consulting in Houston" },
];

/** Homepage introduction to Hunain, linking to his full story. */
export function FounderSpotlight() {
  return (
    <section id="founder" aria-labelledby="founder-title" className="relative overflow-hidden border-t border-border bg-background py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <FounderPortrait className="mx-auto w-full max-w-sm lg:order-none lg:max-w-none" />
        <div>
          <Eyebrow className="mb-5">Meet the founder</Eyebrow>
          <h2 id="founder-title" className="font-display text-3xl leading-[1.1] text-foreground md:text-4xl lg:text-5xl">
            <RevealText text="A kid who chased fireflies, grew up online," />{" "}
            <span className="text-primary">
              <RevealText text="and never stopped building." delay={0.15} />
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            Hunain Qureshi went from sharing a closet bedroom with his brothers in New York, to playing professional Counter-Strike at 13, to hosting game servers and designing buttons in Photoshop he wished were clickable. In 2020 he founded Cardinal Consulting to build them for real.
          </motion.p>
          <dl className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {moments.map((m, i) => (
              <motion.div
                key={m.value}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
                className="bg-background p-5"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-primary">{m.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-text-secondary">{m.label}</span>
                </dd>
              </motion.div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to={FOUNDER_PATH} className="group inline-flex h-12 items-center gap-2 bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
              Read Hunain's story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline">
              Work with Hunain
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

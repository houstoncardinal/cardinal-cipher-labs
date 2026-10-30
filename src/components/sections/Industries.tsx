import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";
import { industries } from "@/lib/industries";
import { TiltCard } from "@/components/site/canvas";
import { CardinalMark } from "@/components/site/CardinalMark";

export function Industries() {
  return (
    <div className="relative isolate overflow-hidden py-16 lg:py-24">
      <CardinalMark />
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Deep expertise in regulated and high-stakes industries"
          description="We understand the compliance, security, and trust requirements that come with your sector."
        />
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div key={ind.href} {...revealDelay(i)} className="relative hover:z-10">
              <TiltCard max={6} className="h-full">
                <Link
                  to={ind.href}
                  className="group relative flex h-full flex-col overflow-hidden border-b border-r border-border bg-background p-8 transition-[background-color,box-shadow] duration-500 hover:bg-secondary hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center">
                      <span aria-hidden className="absolute inset-0 scale-50 rounded-full bg-foreground/[0.05] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                      <ind.icon className="relative h-7 w-7 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.5} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-45 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-foreground">{ind.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{ind.description}</p>
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

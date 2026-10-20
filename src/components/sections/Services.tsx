import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";
import { serviceGroups, services } from "@/lib/services-catalog";

export function Services() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="Websites, apps & marketing that bring you customers"
          description="Three connected practices under one roof, so strategy, design, engineering, and growth never get lost between vendors."
          action={
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {serviceGroups.map((g, gi) => (
            <motion.div key={g.group} {...revealDelay(gi)} className="border-t-2 border-foreground pt-6">
              <p className="font-display text-sm font-semibold text-primary">0{gi + 1}</p>
              <h3 className="mt-2 font-display text-3xl text-foreground">{g.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{g.description}</p>
              <ul className="mt-8 border-t border-border">
                {services.filter((s) => s.group === g.group).map((s) => (
                  <li key={s.slug} className="border-b border-border">
                    <Link to={s.path} className="group flex items-start justify-between gap-4 py-5">
                      <span>
                        <span className="block text-lg font-semibold text-foreground group-hover:text-primary">{s.name}</span>
                        <span className="mt-1 block text-[15px] leading-relaxed text-muted-foreground">{s.summary}</span>
                      </span>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";
import { industries } from "@/lib/industries";

export function Industries() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Deep expertise in regulated and high-stakes industries"
          description="We understand the compliance, security, and trust requirements that come with your sector."
        />
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <motion.div key={ind.href} {...revealDelay(i)}>
              <Link to={ind.href} className="group flex h-full flex-col border-b border-r border-border p-8 transition-colors hover:bg-secondary">
                <div className="flex items-start justify-between">
                  <ind.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-foreground">{ind.name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{ind.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

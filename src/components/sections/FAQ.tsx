import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowRight, Phone, Plus } from "lucide-react";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import { homeFaqs as faqs } from "@/lib/home-faqs";
import { cn } from "@/lib/utils";

const INITIAL = 6;

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="border-t border-border bg-background py-14 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.9fr] lg:gap-16">
        <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="mb-5">FAQ</Eyebrow>
          <h2 className="font-display text-3xl leading-[1.1] text-foreground md:text-4xl lg:text-5xl">
            <RevealText text="Frequently asked questions" />
          </h2>
          <p className="mt-5 text-muted-foreground">Straight answers on pricing, timelines, and how we work.</p>

          <div className="mt-8 hidden bg-ink p-7 text-ink-foreground lg:block">
            <p className="font-display text-xl">Still have a question?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">Talk to our team — you'll hear back within hours, not days.</p>
            <div className="mt-6 flex flex-col gap-3">
              <Link to="/contact" className="group inline-flex h-11 items-center justify-between bg-ink-foreground px-5 text-sm font-semibold text-ink">
                Contact our team <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href="tel:281-901-7016" className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-foreground">
                <Phone className="h-4 w-4" /> (281) 901-7016
              </a>
            </div>
          </div>
        </motion.div>

        <div>
          <AccordionPrimitive.Root type="single" collapsible defaultValue="faq-0" className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionPrimitive.Item
                key={faq.question}
                value={`faq-${i}`}
                // Extra questions are hidden, not removed; all answers also ship in the FAQ schema
                className={cn(
                  "group relative border border-border bg-secondary/50 transition-colors duration-300 data-[state=open]:bg-background data-[state=open]:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] hover:bg-background",
                  i >= INITIAL && !showAll && "hidden",
                )}
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-500 group-data-[state=open]:scale-y-100" />
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full items-start gap-4 px-5 py-5 text-left md:px-6">
                    <span className="mt-1 font-display text-xs font-semibold tabular-nums text-muted-foreground transition-colors group-data-[state=open]:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-semibold text-foreground md:text-lg">{faq.question}</span>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-border transition-all duration-300 group-hover:border-foreground/40 group-data-[state=open]:border-foreground group-data-[state=open]:bg-foreground group-data-[state=open]:text-background">
                      <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-5 pb-6 pl-[3.25rem] text-[15px] leading-relaxed text-muted-foreground md:px-6 md:pl-14">{faq.answer}</p>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>

          {faqs.length > INITIAL && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              {showAll ? "Show fewer questions" : `Show all ${faqs.length} questions`}
              <Plus className={cn("h-4 w-4 transition-transform duration-300", showAll && "rotate-45")} />
            </button>
          )}

          <p className="mt-6 text-sm text-muted-foreground lg:hidden">
            Still have a question?{" "}
            <Link to="/contact" className="font-semibold text-foreground underline underline-offset-4">
              Contact our team
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}

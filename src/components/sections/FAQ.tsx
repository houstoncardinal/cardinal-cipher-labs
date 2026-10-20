import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { faqs } from "@/lib/seo-config";

export function FAQ() {
  return (
    <div className="border-t border-border bg-secondary py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <motion.div {...reveal}>
          <Eyebrow className="mb-5">FAQ</Eyebrow>
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">Frequently asked questions</h2>
          <p className="mt-5 text-muted-foreground">
            Have a question that isn't answered here?{" "}
            <Link to="/contact" className="font-semibold text-foreground underline underline-offset-4">Contact our team</Link>.
          </p>
        </motion.div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-border">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

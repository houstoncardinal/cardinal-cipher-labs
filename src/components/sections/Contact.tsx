import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";

const details = [
  { icon: Phone, label: "Phone", value: "(281) 901-7016", href: "tel:281-901-7016" },
  { icon: Mail, label: "Email", value: "Hunain@visitcardinal.com", href: "mailto:Hunain@visitcardinal.com" },
  { icon: MapPin, label: "Headquarters", value: "2100 West Loop S Fwy, Houston, TX 77027" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9AM–6PM CST" },
];

export function Contact() {
  return (
    <div className="border-t border-border py-24 lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <motion.div {...reveal}>
          <Eyebrow className="mb-5">Contact</Eyebrow>
          <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl">Start a conversation</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell us where you want to go. We'll come back within 24 hours with next steps — no obligation.
          </p>
          <dl className="mt-10 space-y-6 border-t border-border pt-8">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <dt className="text-sm text-muted-foreground">{d.label}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {d.href ? <a href={d.href} className="hover:text-primary">{d.value}</a> : d.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div {...reveal} className="border border-border bg-background p-8 lg:p-10">
          <ContactForm formName="contact" />
        </motion.div>
      </Container>
    </div>
  );
}

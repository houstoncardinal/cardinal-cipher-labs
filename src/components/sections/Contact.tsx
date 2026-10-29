import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { GuidedContactForm } from "@/components/site/GuidedContactForm";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";

const next = [
  { title: "We review your details", text: "A real person on our team reads every request." },
  { title: "We reach out your way", text: "By email, phone, or text within 24 hours. Same business day if it's urgent." },
  { title: "You get a clear plan", text: "A free consultation, then a written scope and price before any work starts." },
];

export function Contact() {
  return (
    <div className="border-t border-border bg-secondary py-14 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
        <motion.div {...reveal} className="flex flex-col">
          <Eyebrow className="mb-4">Contact</Eyebrow>
          <h2 className="font-display text-3xl leading-[1.1] text-foreground md:text-4xl lg:text-5xl">
            <RevealText text="Start a conversation" />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Tell us where you want to go. It takes about a minute.</p>

          <ol className="mt-7 space-y-4">
            {next.map((n, i) => (
              <li key={n.title} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 font-display text-xs font-semibold text-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{n.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid gap-x-6 gap-y-3 border-t border-border pt-6 text-sm sm:grid-cols-2 lg:mt-auto">
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              <dt className="sr-only">Phone</dt>
              <dd><a href="tel:281-901-7016" className="font-medium text-foreground hover:text-primary">(281) 901-7016</a></dd>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              <dt className="sr-only">Email</dt>
              <dd><a href="mailto:Hunain@visitcardinal.com" className="font-medium text-foreground hover:text-primary">Hunain@visitcardinal.com</a></dd>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              <dt className="sr-only">Headquarters</dt>
              <dd className="text-muted-foreground">2100 West Loop S Fwy, Houston, TX 77027</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
              <dt className="sr-only">Hours</dt>
              <dd className="text-muted-foreground">Mon–Fri, 9AM–6PM CST</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div {...reveal} className="border border-border bg-background p-5 shadow-[0_40px_80px_-56px_rgba(15,23,42,0.45)] sm:p-7 lg:p-8">
          <GuidedContactForm />
        </motion.div>
      </Container>
    </div>
  );
}

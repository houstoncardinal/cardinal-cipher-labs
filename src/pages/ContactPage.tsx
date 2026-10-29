import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { services } from "@/lib/services-catalog";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/site/ContactForm";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { siteConfig } from "@/lib/seo-config";
import { generateContactPageSchema, generateBreadcrumbSchema, generateWebPageSchema, generateLocalBusinessSchema } from "@/lib/schema-generators";

const details = [
  { icon: Phone, label: "Phone", value: "(281) 901-7016", href: "tel:281-901-7016" },
  { icon: Mail, label: "Email", value: "Hunain@visitcardinal.com", href: "mailto:Hunain@visitcardinal.com" },
  { icon: MapPin, label: "Headquarters", value: "2100 West Loop S Fwy, Houston, TX 77027" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9AM–6PM CST · Weekends by appointment" },
];

const faqs = [
  { q: "How quickly can you start?", a: "Most engagements begin within 1–2 weeks of signing. For urgent needs, rapid prototyping can deliver in as little as 72 hours." },
  { q: "What happens after I reach out?", a: "We respond within 24 hours to schedule a no-obligation consultation. After that call, you receive a written scope, timeline, and investment." },
  { q: "What's a typical timeline?", a: "Websites typically take 72 hours to 2 weeks, larger platforms and apps 6–16 weeks, and complex enterprise programs 3–6 months. You'll get an exact timeline in your proposal." },
  { q: "Do you work with organizations outside Houston?", a: "Yes. We serve clients across North America, Europe, and Asia Pacific with seamless remote collaboration." },
];

export default function ContactPage() {
  const { search } = useLocation();
  const selected = services.find((s) => s.slug === new URLSearchParams(search).get("service"));
  const schemas = [
    generateContactPageSchema(),
    generateLocalBusinessSchema(),
    generateWebPageSchema({
      name: "Contact Cardinal Consulting",
      description: "Talk to Cardinal Consulting about your website, app, brand, or growth program.",
      url: `${siteConfig.url}/contact`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Contact", url: `${siteConfig.url}/contact` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Contact Us — Free Consultation | Houston Web & Digital Agency"
        description="Contact Cardinal Consulting. Call (281) 901-7016 or send a message — we respond within 24 hours. Houston-headquartered web, app, and digital growth firm."
        url={`${siteConfig.url}/contact`}
        schemas={schemas}
        keywords={["contact cardinal consulting", "free consultation", "Houston software company", "digital transformation consultation"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          <section className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Contact" }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
                <Eyebrow className="mb-6">Contact us</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                  {selected ? `Let's talk about ${selected.name.toLowerCase().startsWith("seo") ? "SEO" : selected.name}` : "Let's talk about your goals"}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                  Tell us what you need — it takes about a minute. A member of our team will respond within 24 hours.
                </p>
              </motion.div>
            </Container>
          </section>

          <section className="py-20 lg:py-24">
            <Container className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
              <motion.div {...reveal} className="border border-border p-8 lg:p-10">
                <h2 className="mb-8 font-display text-2xl text-foreground">Send us a message</h2>
                <ContactForm formName="contact-page" />
              </motion.div>

              <motion.aside {...reveal}>
                <h2 className="font-display text-2xl text-foreground">Reach us directly</h2>
                <dl className="mt-8 space-y-6 border-t border-border pt-8">
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

                <h2 className="mt-16 font-display text-2xl text-foreground">Common questions</h2>
                <Accordion type="single" collapsible className="mt-6 border-t border-border">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={faq.q} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                      <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.aside>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

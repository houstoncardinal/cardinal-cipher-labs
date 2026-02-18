import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig } from "@/lib/seo-config";
import { 
  generateOrganizationSchema, 
  generateWebPageSchema, 
  generateBreadcrumbSchema 
} from "@/lib/schema-generators";
import { FileText, DollarSign, Shield, Clock, CheckCircle, AlertTriangle, Mail, Phone, Scale, Copyright, Users, Zap } from "lucide-react";

// Renders text with **bold** markdown syntax
function RichText({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-2" />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**')
                ? <strong key={j} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function TermsOfService() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Terms of Service",
      description: "Cardinal Consulting's terms of service outline the legal agreement between clients and our digital agency for web development, app development, and consulting services.",
      url: `${siteConfig.url}/terms-of-service`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Terms of Service", url: `${siteConfig.url}/terms-of-service` },
    ]),
  ];

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
      title: "Acceptance of Terms",
      content: `By accessing and using the website of Cardinal Consulting ("we," "our," or "us"), or by engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.

These Terms constitute a legally binding agreement between you ("Client," "you," or "your") and Cardinal Consulting governing your use of our website and the provision of our digital agency services including but not limited to web development, mobile application development, SEO services, digital marketing, and consulting services.

By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our Privacy Policy.`
    },
    {
      id: "services",
      icon: Zap,
      title: "Description of Services",
      content: `Cardinal Consulting provides the following digital agency services:

**Web Development Services**
- Custom website design and development
- E-commerce solutions
- Content management system (CMS) development
- Website maintenance and support

**Mobile Application Development**
- iOS application development
- Android application development
- Cross-platform mobile solutions
- App store submission assistance

**Digital Marketing Services**
- Search Engine Optimization (SEO)
- Pay-per-click advertising management
- Social media marketing
- Content marketing strategies

**Consulting Services**
- Digital transformation consulting
- Technology strategy and planning
- Enterprise software solutions
- Technical architecture design

The specific scope of services, deliverables, and timelines will be outlined in individual Service Agreements or Statements of Work entered into between Cardinal Consulting and the Client.`
    },
    {
      id: "payment",
      icon: DollarSign,
      title: "Payment Terms",
      content: `**Payment Structure**

All services provided by Cardinal Consulting are subject to the following payment terms:

1. **Initial Deposit:** A non-refundable deposit of fifty percent (50%) of the total project fee is required to commence work on any project. This deposit is due upon signing the Service Agreement.

2. **Final Payment:** The remaining fifty percent (50%) of the project fee is due upon completion of the project and prior to the release of final deliverables, including source code, credentials, and all completed work.

3. **Non-Refundable Services:** All payments for services rendered are non-refundable. Once work has been performed on a project, the payments made are non-refundable regardless of project completion or Client satisfaction.

**Payment Schedule**

- 50% deposit due upon project commencement
- 50% final payment due upon project completion

**Special Provisions**

For clients who prefer not to proceed with the closing deposit (final 50% payment) before reviewing completed work, we offer the following arrangement:
- The closing deposit will not be billed or charged until the client confirms satisfaction with the work completed
- We will provide previews and demonstrations of the completed work
- Once the client approves the final deliverables, the closing deposit becomes due
- In such cases, we will not release final deliverables until the closing deposit is paid

**Payment Methods**

We accept the following payment methods:
- Bank wire transfer
- Business check
- Major credit cards (subject to processing fees)
- ACH transfers

**Late Payments**

Payments not received within fifteen (15) days of the due date may be subject to a late fee of 1.5% per month (18% per annum) on outstanding balances. Additionally, we reserve the right to suspend work on any project with outstanding invoices until payment is received in full.`
    },
    {
      id: "revisions",
      icon: Clock,
      title: "Revisions and Changes",
      content: `**Revision Policy**

Our standard service agreements include a specified number of revisions as outlined in each individual Statement of Work. The revision policy is designed to ensure client satisfaction while maintaining project timelines and budget.

**Revision Rounds**

- Minor revisions: Included as specified in project scope
- Major scope changes: May require additional fees and timeline adjustments
- Each revision round must be requested in writing
- Revisions requested after approval of a deliverable may be considered new work

**Change Orders**

Any work requested beyond the agreed-upon scope will be treated as a Change Order and will require:
- Additional fees based on our current hourly rates
- Extended project timeline if applicable
- Written approval from the Client before work begins

We reserve the right to decline requests that fall outside the original project scope.`
    },
    {
      id: "intellectual-property",
      icon: Copyright,
      title: "Intellectual Property",
      content: `**Ownership of Work Product**

Upon full payment of all fees due, Cardinal Consulting grants the Client ownership of the final deliverables created specifically for the Client as part of the project. This includes:

- Website files and source code
- Design assets (for custom designs)
- Mobile application code and binaries
- Documentation created specifically for the project

**Pre-Existing Materials**

All pre-existing tools, libraries, frameworks, templates, and general knowledge remains the property of Cardinal Consulting. Components, libraries, or frameworks incorporated into Client projects that have separate licensing requirements (such as open-source licenses) are governed by their respective licenses.

**Cardinal Consulting Materials**

Cardinal Consulting retains ownership of:
- All pre-existing intellectual property
- General techniques, methodologies, and processes
- Reusable components and templates
- Work product developed for other clients

**Client Materials**

The Client retains ownership of all materials provided to Cardinal Consulting for use in the project, including:
- Logos, branding, and trademarks
- Content, copy, and images
- Third-party assets and licenses

**Portfolio Rights**

Cardinal Consulting retains the right to display completed projects in our portfolio and use them for marketing purposes, unless otherwise agreed upon in writing.`
    },
    {
      id: "confidentiality",
      icon: Shield,
      title: "Confidentiality",
      content: `**Confidential Information**

Both Cardinal Consulting and the Client agree to maintain the confidentiality of all proprietary information disclosed during the course of the project. Confidential information includes:

- Business strategies and plans
- Technical specifications
- Pricing information
- Customer data and lists
- Trade secrets

**Obligations**

Each party agrees to:
- Protect confidential information using reasonable care
- Not disclose confidential information to third parties without consent
- Use confidential information only for the purposes of the project
- Return or destroy confidential information upon request

**Exceptions**

Confidentiality obligations do not apply to information that:
- Is publicly available through no fault of the receiving party
- Was already known to the receiving party prior to disclosure
- Is independently developed without use of confidential information
- Is required to be disclosed by law or court order`
    },
    {
      id: "warranties",
      icon: CheckCircle,
      title: "Warranties and Disclaimers",
      content: `**Warranties**

Cardinal Consulting warrants that:

- Services will be performed in a professional and workmanlike manner
- We have the necessary skills and expertise to perform the services
- We will use reasonable efforts to meet agreed-upon timelines

**Warranty Period**

We provide a thirty (30) day warranty period following project completion during which we will address any defects or issues arising from our work at no additional cost, provided such issues are not caused by:
- Client modifications to delivered work
- Third-party integrations or services
- Normal wear and tear
- Misuse or improper handling

**Disclaimer**

EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, CARDINAL CONSULTING MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.`
    },
    {
      id: "limitation",
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: `**Limitation of Liability**

TO THE MAXIMUM EXTENT PERMITTED BY LAW, CARDINAL CONSULTING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

- YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES
- ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES
- ANY CONTENT OBTAINED FROM OUR SERVICES
- UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT

**Maximum Liability**

IN NO EVENT SHALL CARDINAL CONSULTING'S TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES EXCEED THE AMOUNT PAID BY THE CLIENT TO CARDINAL CONSULTING DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

**Basis of the Bargain**

The parties acknowledge that these limitations reflect the allocation of risk between the parties and form an essential basis of the bargain between them.`
    },
    {
      id: "termination",
      icon: Scale,
      title: "Termination",
      content: `**Termination by Either Party**

Either party may terminate a Service Agreement at any time, with or without cause, upon providing thirty (30) days written notice to the other party.

**Termination for Cause**

Either party may terminate immediately if the other party:
- Materially breaches these Terms and fails to cure within fifteen (15) days of written notice
- Becomes insolvent or files for bankruptcy
- Ceases to conduct business

**Effects of Termination**

Upon termination:
- All pending work will stop immediately
- Client will pay for all work completed up to the termination date
- Deposit payments are non-refundable regardless of termination reason
- Cardinal Consulting will deliver completed work upon receipt of payment for all outstanding invoices
- Confidentiality obligations will survive termination

**Data Retention**

We reserve the right to delete all project files and data ninety (90) days after project completion or termination, whichever occurs first. Clients should ensure they have obtained all necessary backups prior to termination.`
    },
    {
      id: "relationship",
      icon: Users,
      title: "Independent Contractors",
      content: `Cardinal Consulting and the Client are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, franchise, or employment relationship between the parties.

Neither party has the authority to bind the other or incur obligations on behalf of the other without prior written consent.

Cardinal Consulting reserves the right to use subcontractors or assign employees to perform services, provided we remain responsible for their work and conduct.`
    },
    {
      id: "governing",
      icon: Scale,
      title: "Governing Law and Disputes",
      content: `**Governing Law**

These Terms and any disputes arising out of or related to these Terms or our services shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.

**Dispute Resolution**

The parties agree to resolve any disputes arising from these Terms through the following process:

1. **Negotiation:** The parties will first attempt to resolve any dispute through good-faith negotiations for a period of thirty (30) days.

2. **Mediation:** If negotiation fails, the parties agree to submit the dispute to mediation before a mutually agreed-upon mediator.

3. **Litigation:** If mediation is unsuccessful, any remaining disputes shall be resolved exclusively in the state or federal courts located in Houston, Texas, and each party consents to the jurisdiction of such courts.

**Arbitration Option**

Alternatively, by mutual agreement, disputes may be submitted to binding arbitration in Houston, Texas, in accordance with the rules of the American Arbitration Association.`
    },
    {
      id: "general",
      icon: FileText,
      title: "General Provisions",
      content: `**Entire Agreement**

These Terms, together with any Service Agreement or Statement of Work, constitute the entire agreement between the parties and supersede all prior or contemporaneous agreements, representations, warranties, and understandings, whether oral or written.

**Amendments**

We may modify these Terms at any time by posting the updated version on our website. Your continued use of our services after any such modifications constitutes your agreement to the modified Terms.

**Severability**

If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.

**Waiver**

Our failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.

**Notices**

All notices under these Terms must be in writing and delivered to the addresses set forth in the applicable Service Agreement.

**Assignment**

You may not assign or transfer these Terms without our prior written consent. We may assign these Terms at any time without notice.`
    },
    {
      id: "contact",
      icon: Mail,
      title: "Contact Us",
      content: `If you have any questions or concerns about these Terms of Service, please contact us at:

**Cardinal Consulting**
2100 West Loop S Fwy
Houston, TX 77027

Email: hunain@visitcardinal.com
Phone: (281) 901-7016

We will respond to your inquiry as soon as possible.`
    },
  ];

  const lastUpdated = "January 15, 2025";

  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Cardinal Consulting's terms of service outline payment terms, intellectual property rights, and the legal agreement for our web development, app development, and digital marketing services."
        url={`${siteConfig.url}/terms-of-service`}
        schemas={schemas}
        keywords={["terms of service", "terms and conditions", "payment terms", "web development contract", "digital agency terms"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Legal</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Terms of Service
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  The legal agreement governing your relationship with Cardinal Consulting and our services.
                </p>
                <p className="text-sm text-muted-foreground">
                  Last Updated: {lastUpdated}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Payment Terms Highlight */}
          <section className="py-12 bg-primary/5 border-y border-primary/10">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <h2 className="font-serif text-2xl text-foreground mb-6">Payment Terms Summary</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">50% Down</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Initial deposit required to commence work on any project.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">50% on Completion</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Final payment due upon project completion and before release of deliverables.</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Non-Refundable</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">All payments for services rendered are non-refundable.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="mb-12 pb-12 border-b border-border/50 last:border-0"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
                    </div>
                    <div className="pl-14 text-muted-foreground">
                      <RichText content={section.content} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 lg:py-24 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-serif text-2xl text-foreground mb-4">Questions About Our Terms?</h2>
                <p className="text-muted-foreground mb-8">
                  If you have any questions or concerns about our terms of service, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="mailto:hunain@visitcardinal.com" 
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    hunain@visitcardinal.com
                  </a>
                  <span className="hidden sm:inline text-border">•</span>
                  <a 
                    href="tel:281-901-7016" 
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    (281) 901-7016
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

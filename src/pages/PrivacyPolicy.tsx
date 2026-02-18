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
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, Globe, Cookie, Bell, User } from "lucide-react";

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

export default function PrivacyPolicy() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Privacy Policy",
      description: "Cardinal Consulting's privacy policy outlines how we collect, use, and protect your personal information when you use our services.",
      url: `${siteConfig.url}/privacy-policy`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Privacy Policy", url: `${siteConfig.url}/privacy-policy` },
    ]),
  ];

  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "Introduction",
      content: `At Cardinal Consulting ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.`
    },
    {
      id: "collection",
      icon: Database,
      title: "Information We Collect",
      content: `We collect information to provide better services to all our users. This includes:

**Personal Information You Provide:**
- Contact information such as name, email address, phone number, and company name when you fill out forms on our website, request a consultation, or communicate with us
- Billing information and payment details when you engage our services
- Resume or CV information when applying for employment positions
- Any other information you voluntarily provide to us

**Information We Collect Automatically:**
- Device information including IP address, browser type, operating system, and device identifiers
- Usage data including pages visited, time spent on pages, links clicked, and referring/exit URLs
- Location information based on your IP address
- Cookies and similar tracking technologies`
    },
    {
      id: "usage",
      icon: Eye,
      title: "How We Use Your Information",
      content: `We use the information we collect to:
- Provide, maintain, and improve our services
- Process transactions and send related information including purchase confirmations and invoices
- Send administrative information, such as updates, security alerts, and support messages
- Respond to your comments, questions, and provide customer service
- Communicate with you about products, services, offers, promotions, and events
- Monitor and analyze trends, usage, and activities in connection with our services
- Detect, investigate, and prevent fraudulent transactions and other illegal activities
- Personalize and improve the services and provide content or features that match user profiles or interests`
    },
    {
      id: "sharing",
      icon: Globe,
      title: "Information Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

**Service Providers:** We share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.

**Business Transfers:** If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of our assets, information may be transferred as part of that transaction.

**Legal Obligations:** We may disclose information if required to do so by law or in response to valid requests by public authorities.

**Protection of Rights:** We may disclose information to enforce our terms of service, protect our rights, privacy, safety, or property, or the rights, safety, or property of others.

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`
    },
    {
      id: "security",
      icon: Lock,
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- SSL/TLS encryption for all data transmitted between your browser and our servers
- Regular security audits and vulnerability assessments
- Access controls limiting employee access to personal information
- Secure data storage with industry-standard encryption
- Employee training on data protection and privacy

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.`
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.

**Types of Cookies We Use:**
- Essential cookies: Required for the operation of our website
- Analytics cookies: Help us understand how visitors interact with our website
- Functional cookies: Enable enhanced functionality and personalization
- Marketing cookies: Used to track visitors across websites for advertising purposes

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`
    },
    {
      id: "choices",
      icon: User,
      title: "Your Choices and Rights",
      content: `You have the following rights regarding your personal information:

**Access and Portability:** You may request access to the personal information we hold about you and receive a copy in a portable format.

**Correction:** You may request correction of inaccurate or incomplete personal information.

**Deletion:** You may request deletion of your personal information, subject to certain legal exceptions.

**Opt-Out:** You may opt-out of receiving marketing communications from us by following the unsubscribe instructions in those communications.

**Cookies:** You can manage cookie preferences through your browser settings.

To exercise any of these rights, please contact us using the information provided below.`
    },
    {
      id: "children",
      icon: Bell,
      title: "Children's Privacy",
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that we have collected personal information from a child under 13 without parental consent, we will delete that information promptly.`
    },
    {
      id: "international",
      icon: Globe,
      title: "International Data Transfers",
      content: `Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.

If you are located outside the United States and choose to provide information to us, please note that we transfer the information, including personal information, to the United States and process it there. By using our services or providing any information, you consent to such transfer and processing of information in the United States.`
    },
    {
      id: "changes",
      icon: Shield,
      title: "Changes to This Privacy Policy",
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.

You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page. Your continued use of our services after any modifications to this privacy policy will constitute your acknowledgment of such modifications and your consent to abide by the modified policy.`
    },
    {
      id: "contact",
      icon: Mail,
      title: "Contact Us",
      content: `If you have any questions or comments about this Privacy Policy, please contact us at:

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
        title="Privacy Policy"
        description="Cardinal Consulting's privacy policy explains how we collect, use, and protect your personal information when you use our web development, app development, and digital marketing services."
        url={`${siteConfig.url}/privacy-policy`}
        schemas={schemas}
        keywords={["privacy policy", "data protection", "personal information", "cookie policy", "Cardinal Consulting privacy"]}
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
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Legal</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Privacy Policy
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
                </p>
                <p className="text-sm text-muted-foreground">
                  Last Updated: {lastUpdated}
                </p>
              </motion.div>
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
                <h2 className="font-serif text-2xl text-foreground mb-4">Questions About Our Privacy Policy?</h2>
                <p className="text-muted-foreground mb-8">
                  If you have any questions or concerns about our privacy practices, we'd love to hear from you.
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

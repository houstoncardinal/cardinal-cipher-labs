import type { LucideIcon } from "lucide-react";
import { Brain, Building2, Cpu, HardHat, Scale, Stethoscope } from "lucide-react";

export interface Industry {
  name: string;
  href: string;
  icon: LucideIcon;
  blurb: string;
  description: string;
}

export const industries: Industry[] = [
  { name: "Healthcare", href: "/industry/healthcare", icon: Stethoscope, blurb: "HIPAA-ready portals & patient acquisition", description: "HIPAA-compliant patient portals, clinical workflow tools, and websites that bring in new patients." },
  { name: "Legal", href: "/industry/legal", icon: Scale, blurb: "Client intake & authority building", description: "Websites, intake systems, and secure document handling that help firms win more cases." },
  { name: "Financial Services", href: "/industry/financial", icon: Building2, blurb: "Secure, compliant digital experiences", description: "Regulation-aware platforms, dashboards, and secure client experiences for financial firms." },
  { name: "Technology", href: "/industry/technology", icon: Cpu, blurb: "SaaS platforms & product engineering", description: "SaaS products, developer platforms, and the marketing engines that grow them." },
  { name: "AI & Automation", href: "/industry/ai-automation", icon: Brain, blurb: "Applied AI & process automation", description: "Custom AI tools and automation that remove manual work from your operations." },
  { name: "Construction", href: "/industry/construction", icon: HardHat, blurb: "Lead generation & project showcases", description: "Websites and lead generation for commercial and residential builders." },
];

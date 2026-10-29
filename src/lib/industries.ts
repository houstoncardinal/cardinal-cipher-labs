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
  { name: "Healthcare", href: "/houston-medical-website-design", icon: Stethoscope, blurb: "Practice websites & patient experience", description: "Medical practice websites with clear provider pages, appointment requests, accessible design, and privacy-conscious forms." },
  { name: "Legal", href: "/houston-law-firm-website-design", icon: Scale, blurb: "Law firm websites & client intake", description: "Law firm websites with practice-area pages, attorney bios, and intake forms, built with Texas advertising rules in mind." },
  { name: "Financial Services", href: "/industry/financial", icon: Building2, blurb: "Secure, credible digital experiences", description: "Websites for accounting firms, advisors, lenders, and fintech, with content workflows built around compliance review." },
  { name: "Technology & SaaS", href: "/industry/technology", icon: Cpu, blurb: "Product marketing & engineering", description: "Marketing sites, pricing and security pages, documentation, and web applications for technology companies." },
  { name: "AI & Automation Companies", href: "/industry/ai-automation", icon: Brain, blurb: "Positioning, demos & trust", description: "Websites that explain AI products clearly, show them working, and make accurate, defensible claims." },
  { name: "Construction", href: "/industry/construction", icon: HardHat, blurb: "Project portfolios & bid requests", description: "Websites for contractors and trades with project portfolios, bid requests, and service-area pages." },
];

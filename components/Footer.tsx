"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
  Globe,
  ChevronDown,
} from "lucide-react";

const footerLinks = {
  Product: [
    { label: "AI Parser", href: "/products/ai-parser" }, 
    { label: "Lead Generation", href: "/products/lead-generation" },   
    { label: "Proposal Studio", href: "/products/proposal-studio" },  
    { label: "Client CRM", href: "/products/client-crm" },      
    { label: "Auto Follow-ups", href: "/products/autofollow-ups" },    
    { label: "Opportunity Discovery", href: "/products/opportunity-discovery" },    
    { label: "Email  Automation", href: "/products/email-automation" },    

  ],
  Compare: [
  { label: "vs Upwork", href: "/compare/upwork" },
  { label: "vs Fiverr", href: "/compare/fiverr" },
  { label: "vs Freelancer", href: "/compare/freelancer" },
  { label: "vs LinkedIn", href: "/compare/linkedin" },
  { label: "vs Apollo", href: "/compare/apollo" },
  { label: "vs HubSpot", href: "/compare/hubspot" },
  { label: "vs Hunter", href: "/compare/hunter" },
  { label: "vs Instantly", href: "/compare/instantly" },
  { label: "vs Clay", href: "/compare/clay" },
  { label: "vs Pipedrive", href: "/compare/pipedrive" },
],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    // { label: "Press Kit", href: "#" },
    // { label: "Affiliates", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    // { label: "API Reference", href: "#" },
    // { label: "Community", href: "#" },
    // { label: "Templates", href: "#" },
    // { label: "Webinars", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "Privacy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "GitHub" },
];

const legalLinks = [
  { label: "Security", href: "/security" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  // State for mobile collapsible sections
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (category: string) => {
    setOpenSection(openSection === category ? null : category);
  };

  return (
    <footer className="relative w-full bg-muted/30 border-t border-border/30">
      {/* Top CTA Banner */}
      <div className="border-b border-border/30">
        <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-2">
                Ready to Win More Clients?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Join 18,000+ freelancers who never miss a high-value lead.
              </p>
            </div>
            <Link href="/auth/app.gigthink.com/auth/login">
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl text-sm font-bold bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all hover:scale-[1.02] group shrink-0"
              >
                Join GigThink Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column with Logo Image Placeholder & TM */}
          <div className="lg:col-span-1 mb-2 lg:mb-0">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              {/* Logo Image Space */}
              <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shadow-sm  border border-primary/20">
                <Image
                  src="/giglogo.png"
                  alt="GigThink Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand Name with TM Badge */}
              <div className="relative flex items-center">
                <span className="text-xl font-black tracking-tight text-neutral-900  transition-colors">
                  GigThink
                </span>
                <span className="absolute -top-1 -right-4 text-[8px] font-extrabold tracking-widest text-black  px-1 py-0.2  select-none">
                  TM
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[240px]">
              AI-powered proposals that win clients. Built for freelancers who
              refuse to settle.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>hello@gigthink.ai</span>
            </div>
          </div>

          {/* Link Columns - Collapsible on Mobile, Grid on Desktop */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {Object.entries(footerLinks).map(([category, links], colIndex) => {
              const isOpen = openSection === category;
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: colIndex * 0.05, duration: 0.4 }}
                  className="border-b border-border/40 lg:border-none pb-3 lg:pb-0"
                >
                  {/* Mobile Accordion Header */}
                  <button
                    onClick={() => toggleSection(category)}
                    className="flex items-center justify-between w-full py-2 lg:py-0 lg:cursor-default text-left group"
                  >
                    <h4 className="text-sm font-bold text-foreground tracking-tight group-hover:text-primary lg:group-hover:text-foreground transition-colors">
                      {category}
                    </h4>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 lg:hidden ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {/* Links List: Collapsible on Mobile, Always Visible on Desktop */}
                  <div
                    className={`overflow-hidden transition-all duration-300 lg:block ${
                      isOpen
                        ? "max-h-96 opacity-100 mt-2.5"
                        : "max-h-0 opacity-0 lg:max-h-96 lg:opacity-100 lg:mt-4"
                    }`}
                  >
                    <ul className="space-y-2.5 pb-2 lg:pb-0">
                      {links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-0.5"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </Link>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { label: "", sub: "CERTIFIED" },
                { label: "", sub: "CERTIFIED" },
                { label: "", sub: "COMPLIANT" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 text-[10px] text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full border border-border/60 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                  <div className="leading-none">
                    <span className="font-bold text-foreground block">
                      {badge.label}
                    </span>
                    <span className="text-[9px]">{badge.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border/20">
        <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Â© 2026 GigThink. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
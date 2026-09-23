"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Paddle } from "@paddle/paddle-js";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Crown,
  Building2,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// ---------- EXPANDED FEATURES ----------
const STARTER_FEATURES = [
  "AI Lead Scraper – 25 leads/month",
  "Basic Smart Filtering (spam removal)",
  "1 AI Proposal Generation per day",
  "Client Pain Point Overview (summary)",
  "Single Skill Profile Setup",
  "Community Email Support (48h response)",
  "Basic Analytics Dashboard",
  "GigThink Watermark on Proposals",
];

const PRO_FEATURES = [
  "AI Lead Scraper – 500 leads/month",
  "Advanced Smart Filtering & Duplicate Removal",
  "Unlimited AI Proposals",
  "AI Pitch Writer with Context Matching",
  "Full Client Pain Point Analysis",
  "Portfolio Auto‑Matching (GitHub, Behance, etc.)",
  "Skill Intelligence Engine (100+ techs)",
  "Business Insights: Budget Score, Urgency, Competition",
  "Export Proposals to PDF / Word / Notion",
  "Priority Chat & Email Support (4h response)",
  "Custom Proposal Templates",
  "Remove GigThink Branding",
];

const AGENCY_FEATURES = [
  "Unlimited Leads (no cap)",
  "White‑Label Proposals & Client Portal",
  "Team Collaboration (up to 10 seats)",
  "Client CRM with Pipeline Management",
  "API & Webhook Access for Custom Integrations",
  "SAML SSO & Role‑Based Access Control",
  "Dedicated Account Manager",
  "Custom AI Model Fine‑Tuning",
  "Advanced Analytics & Custom Reports",
  "Automated Follow‑up Sequences",
  "Multi‑Language Proposal Generation",
  "99.9% Uptime SLA & Priority Support",
];

interface PricingPlansProps {
  isYearly: boolean;
  setIsYearly: (val: boolean) => void;
  displayPrice: number;
  yearlyPrice: number;
  handleSubscribe: (priceId: string) => void;
  loading: boolean;
  checkingAuth: boolean;
  user: any;
  paddle: Paddle | undefined;
  priceId: string;
}

export default function PricingPlans({
  isYearly,
  setIsYearly,
  displayPrice,
  yearlyPrice,
  handleSubscribe,
  loading,
  checkingAuth,
  user,
  paddle,
  priceId,
}: PricingPlansProps) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Top Bar: Guarantee Badge + Billing Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          100% Money-back Guarantee
        </div>

        {/* Monthly / Yearly Toggle Pill */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[color:var(--primary)]">
            Save 20% on Yearly
          </span>
          <div className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-muted/30 p-1 shadow-inner">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                !isYearly
                  ? "bg-white text-[color:var(--headings)] shadow-md border border-[color:var(--border)]"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                isYearly
                  ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/30"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </motion.div>

      {/* 3-COLUMN PLAN CARDS GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-3 md:gap-8 items-stretch mb-16"
      >
        {/* STARTER CARD */}
        <motion.div
          custom={0}
          className="relative flex flex-col rounded-2xl border border-[color:var(--border)] bg-card p-7 sm:p-8 shadow-sm transition-all hover:border-[color:var(--primary)]/40 hover:shadow-md"
        >
          <div className="mb-4">
            <Badge variant="secondary" className="bg-muted/60 text-[color:var(--headings)] font-semibold text-[11px]">
              STARTER
            </Badge>
            <h3 className="mt-2 text-2xl font-bold text-[color:var(--headings)]">Starter</h3>
            <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">Perfect for trying GigThink</p>
          </div>

          <div className="mt-2 mb-6">
            <span className="text-4xl font-extrabold text-[color:var(--headings)]">$0</span>
            <span className="ml-1 text-sm font-medium text-[color:var(--muted-foreground)]">/ forever</span>
          </div>

          <ul className="mb-8 space-y-3 text-xs text-[color:var(--foreground)] flex-1">
            {STARTER_FEATURES.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--primary)] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            className="w-full rounded-xl border-[color:var(--border)] bg-card py-5 text-sm font-bold text-[color:var(--foreground)] hover:bg-muted/30  hover:text-[color:var(--black)] transition-all"
            onClick={() => router.push("/dashboard")}
          >
            Get Started Free
          </Button>
        </motion.div>

        {/* PRO CARD (Highlighted Dark) */}
        <motion.div
          custom={1}
          className="relative flex flex-col rounded-2xl border-2 border-[color:var(--primary)] bg-[#0B0E14] p-7 sm:p-8 text-white shadow-2xl shadow-[color:var(--primary)]/15 md:-translate-y-2"
        >
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[#00c6ff] px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
            MOST POPULAR
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-[color:var(--primary)]" />
              <h3 className="text-2xl font-bold text-white">Pro</h3>
            </div>
            <p className="mt-1 text-xs text-gray-400">Everything you need to win clients</p>
          </div>

          <div className="mt-2 mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={isYearly ? "y" : "m"}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="text-4xl font-extrabold text-white"
              >
                ${displayPrice}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 text-sm font-medium text-gray-400">
              {isYearly ? "/mo (billed yearly)" : "/month"}
            </span>
            {isYearly && (
              <p className="mt-1 text-[11px] text-[color:var(--primary)]">
                ${(yearlyPrice * 12).toFixed(2)} billed annually
              </p>
            )}
          </div>

          <ul className="mb-8 space-y-3 text-xs text-gray-200 flex-1">
            {PRO_FEATURES.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--primary)] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* PRIMARY BUTTON = BLACK (as requested) */}
          <Button 
  className="w-full rounded-xl bg-white py-5 text-sm font-bold text-black shadow-lg border-0" 
  onClick={() => handleSubscribe(priceId)} 
  disabled={loading || checkingAuth || (!user ? false : !paddle)}
> 
  {checkingAuth ? ( 
    <span className="flex items-center gap-2"> 
      <Loader2 className="h-4 w-4 animate-spin" /> Checking... 
    </span> 
  ) : !user ? ( 
    <span className="flex items-center gap-2"> 
      Log In to Subscribe <ArrowRight className="h-4 w-4" /> 
    </span> 
  ) : loading ? ( 
    <span className="flex items-center gap-2"> 
      <Loader2 className="h-4 w-4 animate-spin" /> Opening Checkout... 
    </span> 
  ) : ( 
    "Upgrade to Pro" 
  )} 
</Button>

        </motion.div>

        {/* AGENCY CARD */}
        <motion.div
          custom={2}
          className="relative flex flex-col rounded-2xl border border-[color:var(--border)] bg-card p-7 sm:p-8 shadow-sm transition-all  hover:shadow-md"
        >
          <div className="mb-4">
            <Badge variant="secondary" className="bg-muted/60 text-[color:var(--headings)] font-semibold text-[11px]">
              ENTERPRISE
            </Badge>
            <div className="flex items-center gap-2 mt-2">
              <Building2 className="h-5 w-5 text-[color:var(--muted-foreground)]" />
              <h3 className="text-2xl font-bold text-[color:var(--headings)]">Agency</h3>
            </div>
            <p className="mt-1 text-xs text-[color:var(--muted-foreground)]">Custom scale for active teams</p>
          </div>

          <div className="mt-2 mb-6">
            <span className="text-3xl font-extrabold text-[color:var(--headings)]">Custom</span>
            <span className="ml-1 text-xs font-medium text-[color:var(--muted-foreground)]"> / team pricing</span>
          </div>

          <ul className="mb-8 space-y-3 text-xs text-[color:var(--foreground)] flex-1">
            {AGENCY_FEATURES.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[color:var(--primary)] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            className="w-full rounded-xl border-[color:var(--border)] bg-muted/20 py-5 text-sm font-bold text-[color:var(--foreground)]   hover:text-[color:var(--black)] transition-all"
            onClick={() => router.push("/contact")}
          >
            Contact Sales
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
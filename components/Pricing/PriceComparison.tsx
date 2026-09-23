"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Sparkles,
  Bot,
  FileText,
  Target,
  Download,
  Palette,
  Globe,
  Users,
  Lock,
  Headphones,
  Infinity,
  TrendingUp,
  MessageSquare,
  CreditCard,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

/* ---------- Feature Categories Data ---------- */
const featureCategories = [
  {
    category: "AI & Proposals",
    items: [
      { name: "AI Project Planning", free: true, pro: true, agency: true, icon: Bot },
      { name: "Proposal Creation", free: "1 only", pro: "Unlimited", agency: "Unlimited", icon: FileText },
      { name: "AI Pitch Writer", free: false, pro: true, agency: true, icon: Sparkles },
      { name: "Context-Aware Matching", free: false, pro: true, agency: true, icon: Target },
      { name: "Export to PDF / Word", free: false, pro: true, agency: true, icon: Download },
      { name: "Custom Branding", free: false, pro: true, agency: true, icon: Palette },
    ],
  },
  {
    category: "Leads & Feed",
    items: [
      { name: "Lead Feed Access", free: false, pro: true, agency: true, icon: TrendingUp },
      { name: "GitHub Jobs", free: false, pro: true, agency: true, icon: Globe },
      { name: "RemoteOK & Hacker News", free: false, pro: true, agency: true, icon: Globe },
      { name: "Local Client Leads", free: false, pro: true, agency: true, icon: Globe },
      { name: "Interest-Based Ranking", free: false, pro: true, agency: true, icon: Target },
      { name: "Custom Lead Integrations", free: false, pro: false, agency: true, icon: Globe },
    ],
  },
  {
    category: "Team & Scale",
    items: [
      { name: "Team Seats", free: "1 user", pro: "1 user", agency: "Unlimited", icon: Users },
      { name: "API & Webhook Access", free: false, pro: false, agency: true, icon: Lock },
      { name: "SAML SSO", free: false, pro: false, agency: true, icon: Lock },
      { name: "Dedicated Account Manager", free: false, pro: false, agency: true, icon: Headphones },
      { name: "Custom Contract & Billing", free: false, pro: false, agency: true, icon: CreditCard },
    ],
  },
  {
    category: "Support",
    items: [
      { name: "Community Support", free: true, pro: true, agency: true, icon: MessageSquare },
      { name: "Priority 24/7 Support", free: false, pro: true, agency: true, icon: Headphones },
      { name: "Slack Connect", free: false, pro: false, agency: true, icon: MessageSquare },
    ],
  },
];

/* ---------- Feature Cell Helper ---------- */
function FeatureValueCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
        <Check className="h-4 w-4 stroke-[2.5]" />
      </span>
    ) : (
      <X className="h-4 w-4 text-[color:var(--muted-foreground)]/40" />
    );
  }
  return <span className="text-xs font-semibold text-[color:var(--foreground)]">{value}</span>;
}

export default function PricingComparison() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* ===== FEATURE COMPARISON MATRIX ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-card shadow-sm"
      >
        {/* Table Header */}
        <div className="hidden grid-cols-4 border-b border-[color:var(--border)] bg-muted/40 p-5 text-xs font-bold uppercase tracking-wider text-[color:var(--headings)] md:grid">
          <div className="text-left">Feature Overview</div>
          <div className="text-center">Starter</div>
          <div className="text-center text-[color:var(--primary)]">Pro</div>
          <div className="text-center">Agency</div>
        </div>

        {featureCategories.map((cat) => (
          <div key={cat.category}>
            <div className="border-b border-[color:var(--border)] bg-muted/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[color:var(--headings)]">
              {cat.category}
            </div>

            {cat.items.map((item, itemIdx) => (
              <div
                key={item.name}
                className={`grid grid-cols-1 items-center px-6 py-4 transition-colors hover:bg-muted/10 md:grid-cols-4 md:px-5 ${
                  itemIdx !== cat.items.length - 1 ? "border-b border-[color:var(--border)]/40" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-[color:var(--primary)] shrink-0" />
                  <span className="text-xs font-semibold text-[color:var(--foreground)]">{item.name}</span>
                </div>

                <div className="mt-2 flex items-center justify-between md:mt-0 md:justify-center">
                  <span className="text-[11px] font-bold text-[color:var(--muted-foreground)] md:hidden">Starter:</span>
                  <FeatureValueCell value={item.free} />
                </div>

                <div className="mt-2 flex items-center justify-between md:mt-0 md:justify-center">
                  <span className="text-[11px] font-bold text-[color:var(--primary)] md:hidden">Pro:</span>
                  <FeatureValueCell value={item.pro} />
                </div>

                <div className="mt-2 flex items-center justify-between md:mt-0 md:justify-center">
                  <span className="text-[11px] font-bold text-[color:var(--muted-foreground)] md:hidden">Agency:</span>
                  <FeatureValueCell value={item.agency} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* ===== PRO BENEFIT CARDS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-[color:var(--headings)] sm:text-3xl">
            What you get with <span className="heading-gradient">Pro</span>
          </h2>
          <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
            A complete breakdown of core capabilities unlocked with Pro
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Infinity,
              title: "Unlimited Proposals",
              desc: "Create as many AI-powered proposals as you need. No monthly limits.",
            },
            {
              icon: Bot,
              title: "AI Project Planning",
              desc: "Describe projects in natural language and generate full technical specs.",
            },
            {
              icon: Sparkles,
              title: "AI Pitch Writer",
              desc: "Generate highly persuasive, custom pitches tailored to client requirements.",
            },
            {
              icon: TrendingUp,
              title: "Smart Lead Feed",
              desc: "Real-time aggregated jobs from GitHub, RemoteOK, HN, Upwork & local sources.",
            },
            {
              icon: Target,
              title: "Context Matching",
              desc: "AI ranks incoming leads automatically based on your skillset & past proposals.",
            },
            {
              icon: Download,
              title: "PDF & Word Export",
              desc: "Export styled proposals into polished PDF & Word documents ready to send.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="glass rounded-xl border border-[color:var(--border)] p-6 shadow-sm transition-all hover:border-[color:var(--primary)]/40 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-bold text-[color:var(--headings)]">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== FAQ SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-24 max-w-3xl"
      >
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[color:var(--headings)] sm:text-3xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I try Pro before paying?",
              a: "Yes! Start with the Free plan to explore AI planning and create your first proposal. Upgrade to Pro anytime to unlock everything.",
            },
            {
              q: "What happens if I cancel Pro?",
              a: "You can cancel anytime. You'll keep Pro access until the end of your billing period, then revert to the Free plan with your data intact.",
            },
            {
              q: "Is there a refund policy?",
              a: "Absolutely. We offer a 14-day money-back guarantee. If Pro isn't right for you, contact us for a full refund — no questions asked.",
            },
            {
              q: "Can I switch between Monthly and Yearly?",
              a: "Yes, you can switch your billing cycle at any time from your account settings. Yearly plans offer a 20% discount.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="glass rounded-xl border border-[color:var(--border)] p-6 shadow-sm"
            >
              <h3 className="text-sm font-bold text-[color:var(--headings)] flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[color:var(--primary)]" />
                {faq.q}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-[color:var(--muted-foreground)] pl-6">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== BOTTOM CTA — PROFESSIONAL BLACK BUTTON ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 relative overflow-hidden rounded-2xl bg-[#0B0E14] p-10 text-center sm:p-16 shadow-2xl"
      >
        {/* Premium Glow Effect */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--primary)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[color:var(--primary)]/10 blur-3xl" />

        <h2 className="relative z-10 text-2xl font-bold text-white sm:text-3xl">
          Ready to <span className="heading-gradient">  win more clients?</span>
        </h2>
        <p className="relative z-10 mx-auto mt-3 max-w-md text-sm text-gray-400">
          Join thousands of freelancers and agencies using GigThink to land their dream projects.
        </p>
        <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary Black Button as requested */}
          <Button
            className="rounded-xl bg-black px-8 py-5 text-sm font-bold text-white shadow-lg hover:bg-gray-900 transition-all border-0 active:scale-95"
            onClick={() => router.push("/register")}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-gray-700 bg-transparent px-8 py-5 text-sm font-bold text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
            onClick={() => router.push("/demo")}
          >
            Watch a Demo
          </Button>
        </div>
        <p className="relative z-10 mt-4 text-xs text-gray-500">
          No credit card required. 
        </p>
      </motion.div>
    </div>
  );
}
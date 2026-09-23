"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle2 } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-14 sm:pt-28 sm:pb-20">
      {/* Premium background glow (uses hero-glow utility) */}
      <div className="pointer-events-none absolute inset-0 hero-glow opacity-80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="glass mb-6 inline-flex items-center gap-1.5 border-[color:var(--primary)]/20 bg-[color:var(--primary)]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[color:var(--primary)]"
          >
            <Zap className="h-3.5 w-3.5 text-[color:var(--primary)]" />
            SIMPLE, TRANSPARENT PRICING
          </Badge>
        </motion.div>

        {/* Headline with heading-gradient on highlighted word */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-[color:var(--headings)] sm:text-5xl lg:text-6xl leading-[1.15]"
        >
          One platform.{" "}
          <span className="relative inline-block">
            <span className="heading-gradient">
              Every client.
            </span>
            {/* Animated underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4"
                stroke="var(--primary)"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-[color:var(--muted-foreground)] sm:text-lg leading-relaxed"
        >
          Start free with AI planning & one proposal. Upgrade to Pro and unlock
          unlimited proposals, smart lead feeds, and AI pitches that actually win clients.
        </motion.p>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[color:var(--muted-foreground)]"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--primary)]" />
            No credit card required
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--primary)]" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--primary)]" />
            30‑days money‑back guarantee
          </div>
        </motion.div>
      </div>
    </section>
  );
}
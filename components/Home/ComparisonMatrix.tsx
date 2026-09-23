"use client";

import React from "react";
import Link from "next/link";
import { motion ,Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X, CheckCircle2, AlertTriangle, Sparkles, Rocket,
  TrendingUp, Clock, Zap, Brain, Target, Shield, BarChart3,
  ArrowRight, Users, Crown
} from "lucide-react";

const oldWayPoints = [
  { title: "Manual Job Hunting", desc: "Hours scrolling Upwork & LinkedIn for leads" },
  { title: "Generic Proposals", desc: "Copy-paste ChatGPT templates that clients ignore" },
  { title: "No Portfolio Match", desc: "Proposals with zero proof of relevant skills" },
  { title: "45 Min Per Pitch", desc: "Research, write, edit — every single time" },
  { title: "3% Reply Rate", desc: "Lost in a sea of identical freelancer bids" },
  { title: "Zero Follow-ups", desc: "Clients ghost because you forgot to reply" },
];

const gigthinkPoints = [
  { icon: Zap, title: "Auto Lead Scraper", desc: "12,000+ fresh jobs scanned every hour" },
  { icon: Brain, title: "Vector RAG Match", desc: "AI auto-links your best portfolio pieces" },
  { icon: Target, title: "Context-Aware Pitches", desc: "Pain-point focused, not generic fluff" },
  { icon: Clock, title: "3 Second Generation", desc: "From job post to send-ready proposal" },
  { icon: TrendingUp, title: "34% Reply Rate", desc: "10x higher than average freelancer bids" },
  { icon: Shield, title: "Auto Follow-ups", desc: "Smart CRM that never lets a lead go cold" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ComparisonMatrix() {
  return (
    <section className="relative w-full bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute left-1/4 top-1/3 w-[500px] h-[500px] bg-primary/4 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-primary/3 blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 relative z-10">

        {/* ═══════ HEADER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14 lg:mb-20"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-5 inline-flex items-center shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Why Top Freelancers Switch
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
            The Difference Is{" "}
            <span className="heading-gradient">Night & Day</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See why 18,000+ freelancers ditched the old grind and joined the AI-powered future.
          </p>
        </motion.div>

        {/* ═══════ COMPARISON GRID ═══════ */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-0 items-stretch max-w-5xl mx-auto">

          {/* VS Badge — Desktop (floating center) */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/15">
              <span className="text-lg font-black heading-gradient">VS</span>
            </div>
          </motion.div>

          {/* ═══ LEFT CARD: The Old Painful Way ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 lg:pr-10"
          >
            <div className="h-full flex flex-col rounded-2xl lg:rounded-3xl border border-border/40 bg-muted/15 p-6 sm:p-8 relative overflow-hidden">
              {/* Subtle red tint */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/3 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-red-500/8 flex items-center justify-center border border-red-500/15">
                  <AlertTriangle className="w-5 h-5 text-red-500/70" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Freelancers Without GigThink</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">The daily struggle</p>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 flex-1 relative z-10"
              >
                {oldWayPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-red-500/8 flex items-center justify-center shrink-0 border border-red-500/15 group-hover:bg-red-500/15 transition-colors">
                      <X className="w-3 h-3 text-red-500/70" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/70 line-through decoration-red-500/20">
                        {point.title}
                      </h4>
                      <p className="text-xs text-muted-foreground/70 mt-0.5">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 pt-6 border-t border-border/20 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground/50">Avg. monthly income</span>
                  </div>
                  <span className="text-sm font-bold text-red-500/60">$1,200 — $2,500</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Badge — Mobile */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="lg:hidden flex justify-center -my-3 relative z-20"
          >
            <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-xl">
              <span className="text-base font-black heading-gradient">VS</span>
            </div>
          </motion.div>

          {/* ═══ RIGHT CARD: GigThink Members ═══ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 lg:pl-10"
          >
            <div className="h-full flex flex-col rounded-2xl lg:rounded-3xl border-2 border-primary/20 bg-card shadow-xl shadow-primary/5 p-6 sm:p-8 relative overflow-hidden group">
              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                    <Crown className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">GigThink Members</h3>
                    <p className="text-xs sm:text-sm text-primary font-medium">The AI-powered edge</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-[10px] px-2.5 py-0.5">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Winner
                </Badge>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4 flex-1 relative z-10"
              >
                {gigthinkPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10 group/item"
                    >
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                        <CheckCircle2 className="w-3 h-3 text-primary" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-primary/70" />
                          <h4 className="text-sm font-bold text-foreground">{point.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{point.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="mt-8 pt-6 border-t border-border/20 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Avg. monthly income</span>
                  </div>
                  <span className="text-sm font-bold text-primary">$8,000 — $15,000+</span>
                </div>

                <Link href="/pricing">
                  <Button className="w-full h-12 sm:h-14 rounded-xl text-sm sm:text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/10 transition-all hover:scale-[1.01] hover:shadow-2xl group">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Join 18,000+ Freelancers
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══════ BOTTOM TRUST STRIP ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-14 lg:mt-20"
        >
          {[
            { label: "Members Earning More", value: "18,000+" },
            { label: "Avg. Income Increase", value: "4.2x" },
            { label: "Time Saved Weekly", value: "28 hrs" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
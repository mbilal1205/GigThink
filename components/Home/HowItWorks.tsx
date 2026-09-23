"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, animate, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck,
  Globe, Database, FileText, BarChart3, ChevronLeft, ChevronRight
} from "lucide-react";

const steps = [
  {
    id: 0,
    number: "01",
    tag: "LIVE DATA INGESTION",
    title: "Autonomous Lead Scraper Engine",
    description: "GigThink scans Upwork, Fiverr, LinkedIn Jobs, and Google Local Maps in real-time. It filters low-budget spam and presents high-value verified leads before anyone else sees them.",
    icon: Globe,
    stats: [
      { label: "Scraped/Hr", value: 12000, suffix: "+" },
      { label: "Platforms", value: 8, suffix: "" },
      { label: "Spam Filtered", value: 94, suffix: "%" },
    ],
    color: "#0091ff",
    image: "/images/step1-scraper.jpeg",
  },
  {
    id: 1,
    number: "02",
    tag: "VECTOR DEEP MATCHING",
    title: "RAG Skill & Portfolio Alignment",
    description: "Our AI extracts hidden client pain points and cross-matches them with your saved tech stack, Github repos, and past project case studies. Only the most relevant opportunities surface.",
    icon: Database,
    stats: [
      { label: "Match Accuracy", value: 98, suffix: "%" },
      { label: "Portfolio Links", value: 12, suffix: "" },
      { label: "Skills Tracked", value: 50, suffix: "+" },
    ],
    color: "#00c853",
    image: "/images/step2-rag-match.jpeg",
  },
  {
    id: 2,
    number: "03",
    tag: "LLM PROPOSAL GENERATOR",
    title: "Context-Aware Pitch Generation",
    description: "Fine-tuned AI drafts bespoke, non-generic proposals in under 3 seconds. Automatically embeds relevant portfolio links, roadmap milestones, and client-specific solutions.",
    icon: FileText,
    stats: [
      { label: "Generated In", value: 2, suffix: ".1s" },
      { label: "Reply Rate", value: 34, suffix: "%" },
      { label: "Words/Proposal", value: 450, suffix: "+" },
    ],
    color: "#ff9100",
    image: "/images/step3-proposal-ai.jpeg",
  },
  {
    id: 3,
    number: "04",
    tag: "CONVERSION TRACKER",
    title: "Deal Flow & Automated Follow-ups",
    description: "Track proposal open rates, client replies, and auto-schedule follow-ups to convert cold leads into recurring monthly retainer contracts. Never let a lead go cold again.",
    icon: BarChart3,
    stats: [
      { label: "Higher Close Rate", value: 3, suffix: ".4x" },
      { label: "Follow-ups Sent", value: 850, suffix: "+" },
      { label: "Avg. Contract", value: 4200, suffix: "$" },
    ],
    color: "#7c4dff",
    image: "/images/step4-crm-analytics.jpeg",
  },
];

// Animated counter component 
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  // 🔥 FIX 1: Motion value ko register kiya
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      // 🔥 FIX 2: ease array coordinate ko tight lock kiya taake TS error na de
      const controls = animate(count, value, {
        duration: 1.5,
        ease: "easeOut" as const,
        // 🔥 FIX 3: Custom hook jhanjhat khatam, direct onUpdate callback se state update ki
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="font-extrabold text-foreground">
      {suffix === "$" 
        ? `$${displayValue.toLocaleString()}` 
        : `${displayValue.toLocaleString()}${suffix}`
      }
    </span>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const activeStepData = steps[activeStep];

  return (
    <>
      {/* overflow-x-hidden مین سیکشن پر لگایا گیا ہے تاکہ سکرین سے باہر جانے والے ایلیمنٹس پیج کو زوم یا سکرول نہ کریں */}
      <section id="how-it-works" className="relative w-full bg-background overflow-x-hidden py-16 lg:py-24">
        
        {/* Background Blob */}
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[90vw] max-w-[700px] h-[700px] bg-primary/4 blur-[150px] pointer-events-none rounded-full" />

        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 relative z-10 w-full">
            
          {/* ═══════ HEADER ═══════ */}
          <div className="text-center mb-10 lg:mb-12">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-3 inline-flex items-center shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-3">
              From Job Post to{" "}
              <span className="heading-gradient text-primary">Winning Proposal</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed px-2">
              Four powerful steps that transform raw job listings into client-winning pitches — fully automated.
            </p>
          </div>

          {/* ═══════ PROGRESS DOTS ═══════ */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-4 mb-10 lg:mb-12 bg-background/80 backdrop-blur-xl py-3 rounded-full border border-border/30 max-w-fit mx-auto px-6 shadow-sm overflow-x-auto no-scrollbar">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-4 shrink-0">
                <div
                  onClick={() => setActiveStep(i)}
                  className="cursor-pointer hover:scale-110 w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center text-[10px] sm:text-xs font-black transition-all duration-300"
                  style={{
                    backgroundColor: activeStep === i ? step.color : activeStep > i ? `${step.color}30` : "transparent",
                    borderColor: activeStep >= i ? step.color : "hsl(var(--border))",
                    color: activeStep >= i ? step.color : "hsl(var(--muted-foreground))",
                    transform: activeStep === i ? "scale(1.15)" : "scale(1)"
                  }}
                >
                  {activeStep > i ? (
                    <CheckCircle2 className="w-4 h-4 sm:w-4 sm:h-4" style={{ color: step.color }} />
                  ) : (
                    step.number
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-4 sm:w-12 h-[2px] rounded-full transition-colors duration-400"
                    style={{
                      backgroundColor: activeStep > i ? step.color : "hsl(var(--border))"
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ═══════ ACTIVE STEP CARD CONTAINER ═══════ */}
          <div className="max-w-5xl mx-auto relative min-h-[450px] flex items-center w-full bg-card/40 backdrop-blur-xl border border-border/40 rounded-3xl p-6 sm:p-10 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* ─── LEFT: IMAGE / VISUAL ─── */}
                <div className="relative w-full max-w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/10 shadow-lg w-full bg-muted">
                    <div
                      className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-90 w-full h-full"
                      style={{
                        backgroundImage: `url('${activeStepData.image || '/api/placeholder/1000/750'}')`,
                      }}
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <Badge
                        className="font-mono text-[10px] sm:text-xs px-2.5 py-1 border-0 shadow-md"
                        style={{ backgroundColor: `${activeStepData.color}20`, color: activeStepData.color }}
                      >
                        {activeStepData.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Minimal background glow */}
                  <div
                    className="absolute inset-0 -z-10 rounded-full blur-[60px] opacity-20 pointer-events-none scale-90"
                    style={{ backgroundColor: activeStepData.color }}
                  />
                </div>

                {/* ─── RIGHT: CONTENT ─── */}
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm sm:text-base shrink-0"
                      style={{ backgroundColor: `${activeStepData.color}12`, color: activeStepData.color, border: `2px solid ${activeStepData.color}25` }}
                    >
                      {activeStepData.number}
                    </div>
                    <span
                      className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase"
                      style={{ color: activeStepData.color }}
                    >
                      {activeStepData.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground leading-tight">
                    {activeStepData.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {activeStepData.description}
                  </p>

                  {/* Animated Stats */}
                  <div className="flex flex-wrap gap-6 pt-2">
                    {activeStepData.stats.map((stat, i) => (
                      <div key={i} className="text-left">
                        <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: activeStepData.color }}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Active for all members</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* ═══════ NAVIGATION CONTROLS (Prev / Next Arrows for ALL Screens) ═══════ */}
          <div className="flex items-center justify-between mt-8 max-w-[320px] mx-auto w-full bg-secondary/40 p-2 rounded-full border border-border/40 backdrop-blur-md">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="rounded-full px-5 h-10 text-xs font-semibold hover:bg-background/80 transition-all"
            >
              <ChevronLeft className="w-4 h-4 mr-1.5" />
              Prev
            </Button>
            
            <span className="text-xs font-bold text-foreground tracking-wider">
              {activeStep + 1} / {steps.length}
            </span>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="rounded-full px-5 h-10 text-xs font-semibold hover:bg-background/80 transition-all"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

        </div>
      </section>

      {/* ═══════ BOTTOM CTA SECTION ═══════ */}
      <div className="relative z-10 bg-background py-16 border-t border-border/20 w-full">
        <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 text-center w-full">
          <div className="max-w-xl mx-auto space-y-5">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>All 4 steps are active when you</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground px-2">
              Ready to Win More Clients?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground px-4">
              Join 18,000+ freelancers who never miss a high-value lead again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="h-12 sm:h-13 px-8 rounded-xl text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/10 transition-all hover:scale-[1.02] group"
                >
                  Join GigThink Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                No credit card
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
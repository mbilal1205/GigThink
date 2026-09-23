"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const featureTags = [
  { label: "Proposals", active: true },
  { label: "Lead Finder", active: false },
  { label: "AI Agents", active: false },
  { label: "Client CRM", active: false },
  { label: "Automations", active: false },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-background overflow-hidden pt-28 pb-20 lg:pt-0 lg:pb-0">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] hero-glow opacity-60 pointer-events-none" />

      <div className="container mx-auto max-w-[1450px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.25fr] gap-12 lg:gap-8 items-center">

          {/* ========================================== */}
          {/* LEFT SIDE: Content                         */}
          {/* ========================================== */}
          <motion.div
            className="flex flex-col items-start space-y-7 w-full max-w-[620px] z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants}>
              <button className="group inline-flex items-center rounded-full border border-border bg-card/85 backdrop-blur-sm px-4 py-1.5 text-sm font-medium transition-all hover:bg-secondary hover:border-primary/30 hover:shadow-sm">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                The Best AI for Freelancers
                <span className="mx-1.5 font-bold text-primary">GigThink</span>
                <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Massive Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[2.8rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.2rem] leading-[1.05] font-bold tracking-tighter text-foreground"
            >
              {/* Stop Searching. Start Winning Clients. */}
             Stop Searching.{" "}
              <span className="heading-gradient">Start Winning Clients.</span>
            </motion.h1>

            {/* Value Proposition Bullets */}
            <motion.ul
              variants={itemVariants}
              className="space-y-3.5 text-base sm:text-lg text-muted-foreground"
            >
              <li className="flex items-start gap-3">
                <Check
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <p>
                  <strong className="text-foreground font-semibold">
                    Save hours.
                  </strong>{" "}
                  Auto-parse job posts and extract pain points instantly.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <p>
                  <strong className="text-foreground font-semibold">
                    Win more jobs.
                  </strong>{" "}
                  AI generates tailored proposals with 99% relevance.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <p>
                  <strong className="text-foreground font-semibold">
                    Infinite productivity.
                  </strong>{" "}
                  Vector RAG matches your portfolio automatically.
                </p>
              </li>
            </motion.ul>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1"
            >
              <Link href="/login">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-xl text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/10 transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  Get started. It&apos;s FREE!
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="text-sm text-muted-foreground leading-snug">
                Free forever.
                <br />
                No credit card required.
              </div>
            </motion.div>

            {/* Bottom Feature Tags */}
            <motion.div variants={itemVariants} className="pt-4 w-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 mb-3">
                Get 400% more replies • Customize your workflow
              </p>
              <div className="flex flex-wrap gap-2">
                {featureTags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all hover:scale-105 cursor-default ${
                      tag.active
                        ? "bg-primary/8 text-primary border-primary/40 border-2"
                        : "border-border/60 hover:bg-secondary/80"
                    }`}
                  >
                    {tag.label}
                    {tag.active && <Check className="ml-1 w-3 h-3" />}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================== */}
          {/* RIGHT SIDE: Seamlessly Faded Video         */}
          {/* ========================================== */}
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[820px] flex items-center justify-center lg:justify-end">
            <div className="relative w-full lg:w-[135%] h-full lg:-mr-16 xl:-mr-24 z-10 select-none">

              {/* Video Container with rounded corners */}
              <div className="relative w-full h-full rounded-2xl lg:rounded-l-3xl overflow-hidden">

                {/* 🎥 VIDEO PLAYER */}
                <video
                  src="/your-app-working.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  className="w-full h-full object-cover m-0 p-0 border-none outline-none z-0 pointer-events-none select-none"
                />

                {/* ═══════════════════════════════════════════════════ */}
                {/* SEAMLESS FADE OVERLAYS — Top, Left, Bottom         */}
                {/* ═══════════════════════════════════════════════════ */}

                {/* LEFT FADE — Strongest (blends into white bg) */}
                <div className="absolute inset-y-0 left-0 w-[25%] sm:w-[30%] lg:w-[35%] bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none" />

                {/* TOP FADE — blends top edge */}
                <div className="absolute inset-x-0 top-0 h-[20%] sm:h-[18%] lg:h-[15%] bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />

                {/* BOTTOM FADE — blends bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-[20%] sm:h-[18%] lg:h-[15%] bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />

                {/* RIGHT FADE — subtle (optional, for rounded corner feel) */}
                <div className="absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-background/40 to-transparent z-20 pointer-events-none hidden lg:block" />

                {/* CORNER RADIAL FADES — for ultra-smooth corners */}
                <div className="absolute top-0 left-0 w-[30%] h-[25%] bg-gradient-to-br from-background via-background/70 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[25%] bg-gradient-to-tr from-background via-background/70 to-transparent z-20 pointer-events-none" />

                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(255,255,255,0.5)] z-10 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
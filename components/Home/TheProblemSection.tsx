"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle, Clock, Flame, ShieldAlert,
  ChevronLeft, ChevronRight, Sparkles, ArrowRight,
  TrendingDown
} from "lucide-react";

const problems = [
  {
    id: 1,
    tag: "TIME DRAIN",
    title: "The Endless Refresh Cycle",
    description: "Spending 4+ hours daily refreshing Upwork, Fiverr, and job boards just to find low-budget spam instead of high-ticket clients.",
    stat: "4.5 Hrs",
    statLabel: "Wasted Daily",
    color: "#0091ff",
    icon: Clock,
  },
  {
    id: 2,
    tag: "LOW CONVERSION",
    title: "The Generic Proposal Trap",
    description: "Copy-pasting standard templates that get ignored by clients. Zero personalization means zero replies and constant burnout.",
    stat: "3%",
    statLabel: "Reply Rate",
    color: "#ff6b35",
    icon: AlertCircle,
  },
  {
    id: 3,
    tag: "MISSED REVENUE",
    title: "Beaten by Automation",
    description: "Competitors using automated scrapers pitch clients within 30 seconds of posting. By the time you see it, the job is already taken.",
    stat: "85%",
    statLabel: "Gigs Lost First",
    color: "#7c4dff",
    icon: Flame,
  },
  {
    id: 4,
    tag: "FINANCIAL STRESS",
    title: "The Feast & Famine Loop",
    description: "Unpredictable monthly income because you rely on manual hustle rather than an autonomous pipeline of incoming retainer contracts.",
    stat: "$0",
    statLabel: "Predictable Pipeline",
    color: "#e53935",
    icon: ShieldAlert,
  },
];

export default function PainPoints() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % problems.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + problems.length) % problems.length);

  return (
    <section className="relative w-full bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-1/3 top-1/3 w-[500px] h-[500px] bg-primary/4 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 relative z-10">

        {/* ═══════ HEADER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-5 inline-flex items-center shadow-sm"
          >
            <TrendingDown className="w-3.5 h-3.5 mr-1.5" />
            The Old Way Is Broken
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
            Why Freelancing Feels Like An{" "}
            <span className="heading-gradient">Uphill Battle</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Manual scraping, zero replies, and constant competition are eating your time and profits. Here is what is holding you back.
          </p>
        </motion.div>

        {/* ═══════ MOBILE: SWIPEABLE CARDS ═══════ */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative h-[360px] sm:h-[380px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -60 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) prevCard();
                  else if (info.offset.x < -80) nextCard();
                }}
                className="absolute inset-0 bg-card/70 backdrop-blur-xl border border-border/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl cursor-grab active:cursor-grabbing overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ backgroundColor: problems[currentIndex].color }}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${problems[currentIndex].color}12`, color: problems[currentIndex].color }}
                    >
                      {problems[currentIndex].tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${problems[currentIndex].color}10`, color: problems[currentIndex].color }}
                    >
                      {React.createElement(problems[currentIndex].icon, { className: "w-5 h-5" })}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    {problems[currentIndex].title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problems[currentIndex].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/20 flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                      {problems[currentIndex].stat}
                    </div>
                    <p className="text-[11px] text-muted-foreground font-medium">
                      {problems[currentIndex].statLabel}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/50">
                    Swipe ↔
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {problems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ═══════ DESKTOP: BENTO GRID ═══════ */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group ${
                  isWide ? "col-span-2" : "col-span-1"
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />

                {/* Subtle glow on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: item.color }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${item.color}10`, color: item.color }}
                    >
                      {item.tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}10`, color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl xl:text-2xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-border/20 flex items-center justify-between relative z-10">
                  <div>
                    <div className="text-3xl font-black text-foreground tracking-tight">
                      {item.stat}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {item.statLabel}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                    style={{ backgroundColor: `${item.color}12`, color: item.color }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════ BOTTOM CTA ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-14 lg:mt-20"
        >
          <p className="text-sm text-muted-foreground mb-4">
            These problems disappear when you join GigThink.
          </p>
          <Link href="/pricing">
            <Button
              size="lg"
              className="h-12 px-8 rounded-xl text-sm font-bold bg-foreground text-background hover:bg-foreground/90 shadow-lg transition-all hover:scale-[1.02] group"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              Join GigThink — It&apos;s Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
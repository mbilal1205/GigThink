"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, Clock
} from "lucide-react";

const benefits = [
  { label: "No credit card required", icon: ShieldCheck },
  { label: "Setup in under 2 minutes", icon: Clock },
  { label: "Free proposal credits", icon: Zap },
];

export default function FinalCTA() {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background glows */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-[300px] h-[300px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-card border border-border/40 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-xl shadow-black/5"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

          {/* Floating decorative dots */}
          <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-primary/20" />
          <div className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-primary/15" />
          <div className="absolute bottom-8 left-12 w-1 h-1 rounded-full bg-primary/20" />
          <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-primary/10" />

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-6 inline-flex items-center shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Scale Your Freelance Empire
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-[1.08] mb-5"
          >
            Ready to Land Your Dream Clients on{" "}
            <span className="heading-gradient">Autopilot?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="relative z-10 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
          >
            Join 18,000+ successful freelancers using GigThink to write winning proposals, beat the competition, and close deals faster.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-13 sm:h-14 px-8 rounded-xl text-sm sm:text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/10 transition-all hover:scale-[1.02] group"
              >
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                Join GigThink Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            <Link href="#demo" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-13 sm:h-14 px-8 rounded-xl text-sm sm:text-base font-bold border-border/60 bg-background/50 hover:bg-muted/60 hover:border-primary/30 transition-all"
              >
                Try Live Demo
              </Button>
            </Link>
          </motion.div>

          {/* Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="relative z-10 mt-10 pt-8 border-t border-border/20 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-3 h-3 text-primary" />
                  </div>
                  <span>{benefit.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
// Icons imported safely avoiding conflicts
import {
  Sparkles, Search, Bell, Target, Zap, Filter, Users, ShieldCheck, 
  Globe, Database, Briefcase, Layers, Send, Cpu, Bookmark, Calendar, 
  MessageSquare, TrendingUp, Workflow, Key, CheckCircle2, Lock, Share2, 
  Sliders, DollarSign, Activity, Terminal, PieChart, Repeat, Mail, 
  ZapOff, ArrowRight, BrainCircuit, FileSignature, Radar, LineChart, 
  UserPlus, FileSpreadsheet, Webhook, Shield, Cloud, Link2, 
  HardDrive, Monitor, Smartphone, Settings, Wrench, PenTool, 
  Layout, Camera, Code, Command, Box, Maximize
} from "lucide-react";

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// 4 CENTER CORE FEATURES (Medium Size, Glowing Effects)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const heroFeatures = [
  {
    id: "brain",
    tag: "AI INTELLIGENCE",
    title: "GigThink Brain",
    description: "Deep RAG skill matching & job context comprehension.",
    icon: BrainCircuit,
    badge: "98.4% Match",
  },
  {
    id: "proposal",
    tag: "3-SEC GENERATOR",
    title: "Proposal Studio",
    description: "Bespoke pitches with auto portfolio injection.",
    icon: FileSignature,
    badge: "Generated 2.1s",
  },
  {
    id: "scraper",
    tag: "LIVE SCRAPER",
    title: "Lead Engine",
    description: "Real-time feed from Upwork, Fiverr & LinkedIn.",
    icon: Radar,
    badge: "12k+ /Hr",
  },
  {
    id: "crm",
    tag: "DEAL TRACKER",
    title: "Deal Flow CRM",
    description: "Track views, replies, and auto-schedule follow-ups.",
    icon: LineChart,
    badge: "3.4x Close Rate",
  },
];

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// DENSE SURROUNDING TOOLS (48 Total for "Bhara Bhara" Look)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
const topFeatures = [
  { name: "Live Leads", icon: Bell },
  { name: "Spam Shield", icon: ShieldCheck },
  { name: "Auto Reply", icon: Send },
  { name: "Smart Filter", icon: Filter },
  { name: "Portfolios", icon: Layers },
  { name: "Connects", icon: Zap },
  { name: "Rate Calc", icon: Target },
  { name: "Global Map", icon: Globe },
  { name: "Data Store", icon: Database },
  { name: "Saved Jobs", icon: Bookmark },
  { name: "Dev API", icon: Cpu },
  { name: "Cloud Sync", icon: Cloud },
];

const leftFeatures = [
  { name: "Contracts", icon: Briefcase },
  { name: "Roadmaps", icon: Workflow },
  { name: "Forecast", icon: TrendingUp },
  { name: "Schedule", icon: Calendar },
  { name: "Onboarding", icon: UserPlus },
  { name: "Invoices", icon: FileSpreadsheet },
  { name: "Webhooks", icon: Webhook },
  { name: "Roles (RBAC)", icon: Shield },
  { name: "Rate Guard", icon: Lock },
  { name: "API Keys", icon: Key },
  { name: "Uptime", icon: Activity },
  { name: "Terminal", icon: Terminal },
];

const rightFeatures = [
  { name: "Direct Chat", icon: MessageSquare },
  { name: "Share Links", icon: Share2 },
  { name: "Pitch Tune", icon: Sliders },
  { name: "Profits", icon: DollarSign },
  { name: "Analytics", icon: PieChart },
  { name: "Auto Renew", icon: Repeat },
  { name: "Email Sync", icon: Mail },
  { name: "Limits", icon: ZapOff },
  { name: "Verified", icon: CheckCircle2 },
  { name: "Pipeline", icon: Users },
  { name: "Deep Search", icon: Search },
  { name: "Integrations", icon: Link2 },
];

const bottomFeatures = [
  { name: "Storage", icon: HardDrive },
  { name: "Monitors", icon: Monitor },
  { name: "Mobile App", icon: Smartphone },
  { name: "Settings", icon: Settings },
  { name: "Dev Tools", icon: Wrench },
  { name: "Branding", icon: PenTool },
  { name: "Layouts", icon: Layout },
  { name: "Media", icon: Camera },
  { name: "Scripts", icon: Code },
  { name: "Shortcuts", icon: Command },
  { name: "Modules", icon: Box },
  { name: "Fullscreen", icon: Maximize },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative w-full bg-background py-16 sm:py-20 lg:py-24 overflow-hidden select-none">

      {/* Background ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-primary/3 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-primary/3 blur-[150px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 relative z-20 text-center mb-10 sm:mb-14 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 inline-flex items-center shadow-sm shadow-primary/10"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            MASSIVE ECOSYSTEM
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08]">
            Engineered for{" "}
            <span className="heading-gradient text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Unstoppable Growth
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A densely packed grid of 50+ integrated tools. Tap anywhere to begin.
          </p>
        </motion.div>
      </div>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {/* SEAMLESS FADED GRID CANVAS                                      */}
      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <div className="relative w-full overflow-hidden flex justify-center">

        {/* 4-Sided Smooth Radial Fade Mask (Top, Bottom, Left, Right) */}
        <div className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)]">

          <div className="w-full border-t border-l border-border/15">

            {/* â”€â”€â”€ TOP WALL (12 items) â”€â”€â”€ */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12">
              {topFeatures.map((item, idx) => (
                <GridTile key={`top-${idx}`} name={item.name} Icon={item.icon} />
              ))}
            </div>

            {/* â”€â”€â”€ MIDDLE SECTION: Left (12) + Center (4) + Right (12) â”€â”€â”€ */}
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Left side wall (Desktop only: 3 cols x 4 rows) */}
              <div className="hidden lg:grid lg:grid-cols-3 col-span-3">
                {leftFeatures.map((item, idx) => (
                  <GridTile key={`side-l-${idx}`} name={item.name} Icon={item.icon} />
                ))}
              </div>

              {/* CENTER 4 CORE CARDS (Spans 6 cols, styled to be "Medium") */}
              <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2">
                {heroFeatures.map((hero, i) => {
                  const IconComponent = hero.icon;
                  return (
                    <motion.div
                      key={hero.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="border-r border-b border-border/15 bg-card/10 hover:bg-card/40 transition-all duration-500 relative group overflow-hidden"
                    >
                      <Link href="/app.gigthink.com/auth/login" className="flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 gap-5 cursor-pointer min-h-[180px] sm:min-h-[190px]">
                        
                        {/* Hover Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Top: Icon + Badge */}
                        <div className="space-y-3.5 relative z-10">
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <Badge className="bg-primary/10 text-primary font-mono text-[10px] border-primary/20 px-2 py-0.5 backdrop-blur-sm">
                              {hero.badge}
                            </Badge>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-primary/80 uppercase block mb-1">
                              {hero.tag}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                              {hero.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
                              {hero.description}
                            </p>
                          </div>
                        </div>

                        {/* Bottom Action */}
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-primary/80 group-hover:text-primary group-hover:translate-x-1 transition-all relative z-10 mt-auto">
                          <span>Explore Engine</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right side wall (Desktop only: 3 cols x 4 rows) */}
              <div className="hidden lg:grid lg:grid-cols-3 col-span-3">
                {rightFeatures.map((item, idx) => (
                  <GridTile key={`side-r-${idx}`} name={item.name} Icon={item.icon} />
                ))}
              </div>

            </div>

            {/* â”€â”€â”€ BOTTOM WALL (12 items) â”€â”€â”€ */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12">
              {bottomFeatures.map((item, idx) => (
                <GridTile key={`bottom-${idx}`} name={item.name} Icon={item.icon} />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// SMALL GRID TILE (Jor Jor Kar fit honay wala)
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
function GridTile({ name, Icon }: { name: string; Icon: React.ElementType }) {
  return (
    <Link href="/app.gigthink.com/auth/login" className="block h-full">
      <div
        className="group relative p-3 sm:p-4 border-r border-b border-border/15 bg-card/5 hover:bg-card/80 hover:z-20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 flex flex-col items-center justify-center text-center gap-2 cursor-pointer h-full min-h-[90px] sm:min-h-[95px]"
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-muted/40 group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary flex items-center justify-center transition-all duration-300">
          <Icon className="w-[15px] h-[15px] sm:w-[16px] sm:h-[16px] transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground group-hover:text-foreground transition-colors tracking-tight leading-tight px-1">
          {name}
        </span>
      </div>
    </Link>
  );
}
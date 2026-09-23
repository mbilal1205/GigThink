"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  MapPin,
  Search,
  Lock,
  Briefcase,
  DollarSign,
  Clock,
  Radar,
  Star,
  Zap,
  Building2,
  Sparkles,
  ArrowRight,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const mockLeads = {
  global: [
    {
      id: 1,
      title: "Senior React/Next.js Dev for SaaS",
      company: "FinTech Nova",
      platform: "Upwork",
      budget: "$4,500 - $6,000",
      time: "2 mins ago",
      match: "98%",
      tags: ["React", "Next.js"],
    },
    {
      id: 2,
      title: "Figma to Tailwind CSS Conversion",
      company: "Creative Studio",
      platform: "LinkedIn",
      budget: "$1,200",
      time: "5 mins ago",
      match: "95%",
      tags: ["Tailwind", "Figma"],
    },
    {
      id: 3,
      title: "Fullstack E-commerce Platform",
      company: "RetailCo",
      platform: "Upwork",
      budget: "$10,000+",
      time: "12 mins ago",
      match: "89%",
      tags: ["Fullstack", "Node"],
    },
    {
      id: 4,
      title: "Fix API Routing in Next.js 14",
      company: "StartupX",
      platform: "Freelancer",
      budget: "$500",
      time: "15 mins ago",
      match: "85%",
      tags: ["API", "Next.js"],
    },
    {
      id: 5,
      title: "Mobile App UI/UX Redesign",
      company: "AppWorks",
      platform: "LinkedIn",
      budget: "$3,000",
      time: "22 mins ago",
      match: "80%",
      tags: ["UI/UX", "Mobile"],
    },
  ],
  local: [
    {
      id: 1,
      title: "Website for New Dental Clinic",
      company: "SmileCare NYC",
      platform: "Google Maps",
      budget: "$2,500",
      time: "Just now",
      match: "99%",
      tags: ["Web", "Local"],
    },
    {
      id: 2,
      title: "SEO Optimization for Real Estate",
      company: "Prime Properties",
      platform: "Yelp",
      budget: "$1,000/mo",
      time: "1 hour ago",
      match: "92%",
      tags: ["SEO", "Local"],
    },
    {
      id: 3,
      title: "Restaurant Online Ordering System",
      company: "Luigi's Pizza",
      platform: "Google Maps",
      budget: "$3,500",
      time: "3 hours ago",
      match: "88%",
      tags: ["Web", "E-com"],
    },
    {
      id: 4,
      title: "Plumbing Service Landing Page",
      company: "QuickFix Plumbers",
      platform: "Local SEO",
      budget: "$800",
      time: "5 hours ago",
      match: "85%",
      tags: ["Landing", "Local"],
    },
    {
      id: 5,
      title: "Gym Membership App",
      company: "IronFit",
      platform: "Google Maps",
      budget: "$5,000",
      time: "1 day ago",
      match: "78%",
      tags: ["App", "Fitness"],
    },
  ],
};

const scanSteps = [
  "Initializing GigThink Radar...",
  "Scanning Upwork & LinkedIn feeds...",
  "Filtering high-budget clients...",
  "Running Vector Skill Match...",
  "2,450 fresh leads found!",
];

export default function ClientDiscoveryDemo() {
  const [activeTab, setActiveTab] = useState<"global" | "local">("global");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setShowResults(false);
    setScanComplete(false);
    setScanStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scanSteps.length) {
        setScanStep(step);
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setScanComplete(true);
        setTimeout(() => setShowResults(true), 300);
      }
    }, 700);
  };

  const currentLeads = mockLeads[activeTab];

  return (
    <section
      id="discovery"
      className="relative w-full bg-background py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 relative z-10">
        {/* ═══════ HEADER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-5 inline-flex items-center shadow-sm"
          >
            <Radar className="w-3.5 h-3.5 mr-1.5" />
            Live Discovery Engine
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
            Find Your Next{" "}
            <span className="heading-gradient">High-Paying Client</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our AI radar scans Upwork, LinkedIn, and Local Maps in real-time.
            Fresh leads delivered to your inbox before anyone else sees them.
          </p>
        </motion.div>

        {/* ═══════ RADAR CONTROLS ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-2 sm:p-3 shadow-xl shadow-black/5">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Tabs */}
              <div className="flex bg-muted/50 p-1.5 rounded-xl w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveTab("global");
                    setShowResults(false);
                    setScanComplete(false);
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === "global"
                      ? "bg-background text-primary shadow-sm border border-border/50"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  Global Remote
                </button>
                <button
                  onClick={() => {
                    setActiveTab("local");
                    setShowResults(false);
                    setScanComplete(false);
                  }}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === "local"
                      ? "bg-background text-primary shadow-sm border border-border/50"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  Local Agency
                </button>
              </div>

              {/* Scan Button */}
              <Button
                onClick={handleScan}
                disabled={isScanning}
                className={`w-full sm:w-auto min-w-[200px] h-12 sm:h-13 px-8 rounded-xl text-base font-semibold transition-all duration-300 shadow-xl select-none outline-none border-none
    ${
      isScanning
        ? "bg-foreground/10 text-foreground/70 cursor-not-allowed animate-pulse shadow-none"
        : "bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.99] shadow-foreground/10 group"
    }`}
              >
                {isScanning ? (
                  /* 🔥 PURE BLACK PREMIUM RADAR LOADER */
                  <span className="flex items-center justify-center gap-2.5 tracking-wide font-medium">
                    <Radar className="w-5 h-5 text-foreground/80 animate-spin [animation-duration:1.5s]" />
                    <span>Analyzing Network...</span>
                  </span>
                ) : (
                  /* Clean text and interactive icon arrow translation mapping */
                  <span className="flex items-center justify-center gap-2 tracking-tight">
                    <span>Run Live Radar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ═══════ RESULTS AREA ═══════ */}
        <div className="relative max-w-4xl mx-auto min-h-[420px]">
          {/* Scanning Animation */}
          <AnimatePresence>
            {isScanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-10"
              >
                {/* Radar animation */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                  />
                  {/* Middle ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-3 rounded-full border border-primary/15"
                  />
                  {/* Inner ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-6 rounded-full bg-primary/10"
                  />
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Radar className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse" />
                  </div>
                  {/* Pulse dots */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [0, 1.5], opacity: [0.6, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                      className="absolute inset-0 rounded-full border border-primary/30"
                    />
                  ))}
                </div>

                {/* Scan text */}
                <motion.h3
                  key={scanStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg sm:text-xl font-bold text-foreground mb-2"
                >
                  {scanSteps[scanStep]}
                </motion.h3>

                {/* Progress bar */}
                <div className="w-48 sm:w-64 h-1.5 bg-muted rounded-full overflow-hidden mt-2">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${((scanStep + 1) / scanSteps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  Scanning{" "}
                  {activeTab === "global"
                    ? "Upwork, LinkedIn & Freelancer"
                    : "Google Maps, Yelp & Local SEO"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          <AnimatePresence>
            {!showResults && !isScanning && !scanComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="w-20 h-20 rounded-3xl bg-muted/60 flex items-center justify-center mb-5 border border-border/30">
                  <Radar className="w-8 h-8 text-muted-foreground/40" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Radar Standby
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Select your target market and hit "Run Live Radar" to discover
                  real-time active clients.
                </p>
                <div className="flex items-center gap-6 mt-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    12,000+ jobs/hr
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    &lt; 24h old only
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Spam filtered
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Leads List */}
          <AnimatePresence>
            {showResults && !isScanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-3 sm:gap-4 relative pb-40"
              >
                {/* Scan complete badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 mb-2"
                >
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20 font-bold text-xs px-3 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    2,450 fresh leads found in your area
                  </Badge>
                </motion.div>

                {currentLeads.map((lead, index) => {
                  const isBlurred = index >= 2;
                  const Icon = activeTab === "global" ? Briefcase : Building2;

                  return (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isBlurred ? 0.25 : 1, y: 0 }}
                      transition={{ delay: index * 0.12, duration: 0.4 }}
                      className={`relative bg-card border rounded-2xl p-4 sm:p-5 transition-all ${
                        isBlurred
                          ? "border-border/20 blur-[3px] select-none pointer-events-none"
                          : "border-border/40 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          {/* Top row: badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge
                              variant="secondary"
                              className="bg-primary/8 text-primary border-primary/15 text-[10px] font-bold px-2 py-0.5"
                            >
                              {lead.platform}
                            </Badge>
                            <span className="flex items-center text-[10px] sm:text-xs font-bold text-green-600 bg-green-500/8 px-2 py-0.5 rounded-full border border-green-500/15">
                              <Star className="w-3 h-3 mr-1 fill-green-600" />
                              {lead.match} Match
                            </span>
                            <span className="flex items-center text-[10px] sm:text-xs text-muted-foreground">
                              <Clock className="w-3 h-3 mr-1" />
                              {lead.time}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 truncate">
                            {lead.title}
                          </h3>

                          {/* Company + Budget */}
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Icon className="w-3.5 h-3.5" />
                              {lead.company}
                            </span>
                            <span className="flex items-center gap-1 font-semibold text-foreground">
                              <DollarSign className="w-3.5 h-3.5 text-green-500" />
                              {lead.budget}
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {lead.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action button */}
                        {!isBlurred && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex-shrink-0"
                          >
                            <Button
                              size="sm"
                              className="h-9 px-4 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                              <Zap className="w-3.5 h-3.5 mr-1.5" />
                              Auto-Pitch
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* ═══════ JOIN OVERLAY ═══════ */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center justify-end pb-4 pt-40 sm:pt-48"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 30%, transparent 100%)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                      delay: 1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="w-full max-w-sm mx-auto text-center bg-card/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/60 shadow-2xl shadow-primary/10 relative overflow-hidden"
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 ring-4 ring-primary/5 border border-primary/15">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-1 mb-5">
                      <h4 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                        2,450+ More Leads
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Your radar is on fire. Join now to unlock every lead and
                        auto-pitch them instantly.
                      </p>
                    </div>

                    {/* Mini stats */}
                    <div className="flex items-center justify-center gap-4 mb-5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-foreground">
                          $8K+
                        </span>{" "}
                        avg/mo
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-primary" />
                        <span className="font-bold text-foreground">
                          18K+
                        </span>{" "}
                        members
                      </span>
                    </div>

                    <Link href="/pricing" className="block w-full">
                      <Button className="w-full h-12 sm:h-13 rounded-xl text-sm sm:text-base font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl shadow-foreground/10 transition-all hover:scale-[1.01] hover:shadow-2xl group">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                        Join GigThink Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>

                    <div className="flex items-center justify-center gap-4 mt-4 text-[10px] sm:text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Cancel anytime
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        7-day free trial
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ═══════ BOTTOM TRUST STRIP ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14 mt-14 lg:mt-20"
        >
          {[
            { label: "Jobs Scanned Daily", value: "288K+" },
            { label: "Avg. Client Budget", value: "$4,200" },
            { label: "Leads Under 24h", value: "94%" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Sparkles, Zap, ArrowRight, CheckCircle2, FileText, Lock,
  Crown, RefreshCw, BrainCircuit, Wand2, Clock, TrendingUp,
  ShieldCheck, Loader2
} from "lucide-react";

const sampleJobs = [
  {
    label: "React E-commerce",
    text: "Looking for a senior React developer to optimize our Shopify store checkout flow. We're losing 30% of customers at checkout. Budget: $5,000. Need someone with e-commerce experience.",
  },
  {
    label: "Next.js SaaS",
    text: "Need a full-stack Next.js 14 developer to build a SaaS dashboard with real-time analytics, Stripe billing, and team collaboration features. Budget: $8,000+",
  },
  {
    label: "Mobile App",
    text: "Looking for a React Native developer to build a fitness tracking app with GPS, push notifications, and social sharing. Must have published apps on App Store.",
  },
];

export default function AIProposalDemo() {
  const [jobText, setJobText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [stats, setStats] = useState({ time: "", match: "", length: 0 });
  const outputRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleGenerate = async () => {
    if (!jobText.trim() || loading) return;

    setOutput("");
    setShowBlur(false);
    setGenerated(false);
    setLoading(true);
    setStats({ time: "", match: "", length: 0 });

    const startTime = Date.now();
    abortRef.current = new AbortController();

    try {
      // ====== REPLACE WITH ACTUAL API CALL ======
      // const res = await fetch("/api/proposal/generate", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ jobDescription: jobText }),
      //   signal: abortRef.current.signal,
      // });
      // const data = await res.json();
      // setOutput(data.proposal);
      // ==========================================

      // Demo simulation
      await new Promise((resolve) => setTimeout(resolve, 2500));
      const demoText = `Hi there!\n\nI read your job description and I am absolutely confident that I am the perfect fit for this project. I have exactly the expertise you are looking for.\n\nMy approach would involve conducting a deep dive into your current architecture, identifying bottlenecks, and implementing a highly optimized solution that guarantees maximum performance.\n\nHere is a detailed breakdown of how I plan to execute this:\n\n1. Phase 1: Research & Discovery\n2. Phase 2: Core Development\n3. Phase 3: Testing & QA\n4. Phase 4: Final Deployment\n\nI have attached my portfolio links below. Let\'s schedule a call to discuss this further!`;
      setOutput(demoText);

      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      setStats({
        time: `${elapsed}s`,
        match: `${Math.floor(95 + Math.random() * 4)}%`,
        length: demoText.length,
      });
      setGenerated(true);
      setTimeout(() => setShowBlur(true), 600);
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setOutput("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSampleClick = (text: string) => {
    setJobText(text);
    setOutput("");
    setShowBlur(false);
    setGenerated(false);
  };

  const handleReset = () => {
    setJobText("");
    setOutput("");
    setShowBlur(false);
    setGenerated(false);
    setStats({ time: "", match: "", length: 0 });
    abortRef.current?.abort();
  };

  const lines = output.split("\n").filter((l) => l.trim());
  const visibleLines = 2;

  return (
    <section id="demo" className="relative w-full bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-primary/5 blur-[150px] sm:blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 relative z-10">

        {/* ═══════ HEADER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-20"
        >
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1.5 text-xs font-semibold border-primary/25 text-primary bg-primary/5 mb-5 inline-flex items-center shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            AI Proposal Generator
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
            Craft the Perfect Pitch in{" "}
            <span className="heading-gradient">Seconds, Not Hours</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Paste any job post below. Our AI parses requirements and crafts a tailored, high-converting proposal in under 3 seconds.
          </p>
        </motion.div>

        {/* ═══════ MAIN TWO-COLUMN LAYOUT ═══════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_70px_1fr] gap-6 lg:gap-4 items-stretch max-w-6xl mx-auto">

          {/* ─── LEFT COLUMN: INPUT ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <div className="rounded-2xl lg:rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm shadow-xl shadow-black/5 p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">

              {/* Card header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Job Description</h3>
                    <p className="text-xs text-muted-foreground">Paste client requirements</p>
                  </div>
                </div>
                {jobText.length > 0 && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-[11px] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full"
                  >
                    {jobText.length} chars
                  </motion.span>
                )}
              </div>

              {/* Textarea */}
              <Textarea
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                placeholder="Paste a job post from Upwork, LinkedIn, or anywhere..."
                className="flex-1 min-h-[140px] sm:min-h-[160px] resize-none rounded-xl border-border/40 bg-background/60 text-sm leading-relaxed focus:border-primary/40 focus:ring-primary/10 transition-all"
              />

              {/* Sample chips */}
              <div className="mt-5 space-y-2.5">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Or try an example:</p>
                <div className="flex flex-wrap gap-2">
                  {sampleJobs.map((job) => (
                    <motion.button
                      key={job.label}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleSampleClick(job.text)}
                      className="text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full border border-border/50 bg-background/60 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors shadow-sm"
                    >
                      {job.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={!jobText.trim() || loading}
                className="w-full h-12 sm:h-14 mt-6 rounded-xl text-sm sm:text-base font-bold bg-foreground text-background hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-foreground/10 transition-all hover:scale-[1.01] group"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing AI Logic...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-yellow-400 transition-colors" />
                    Generate AI Proposal
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
          </motion.div>

          {/* ─── MIDDLE: DESKTOP CONNECTOR ─── */}
          <div className="hidden lg:flex flex-col items-center justify-center relative py-8">
            <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-border/50 to-transparent" />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              {loading ? (
                <motion.div
                  animate={{
                    boxShadow: [
                      "0px 0px 0px 0px rgba(0,145,255,0)",
                      "0px 0px 20px 6px rgba(0,145,255,0.25)",
                      "0px 0px 0px 0px rgba(0,145,255,0)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30"
                >
                  <BrainCircuit className="w-6 h-6 text-primary animate-pulse" />
                </motion.div>
              ) : generated ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border-2 border-green-500/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </motion.div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border/60">
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: OUTPUT ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            <div className="rounded-2xl lg:rounded-3xl border border-border/40 bg-card/40 backdrop-blur-sm shadow-xl shadow-black/5 p-5 sm:p-6 lg:p-8 flex-1 flex flex-col relative overflow-hidden">

              {/* Card header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wand2 className="w-[18px] h-[18px] text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">Generated Proposal</h3>
                    <p className="text-xs text-muted-foreground">AI-crafted pitch</p>
                  </div>
                </div>
                {generated && (
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors bg-muted/60 px-3 py-1.5 rounded-full"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Reset
                  </motion.button>
                )}
              </div>

              {/* Output area */}
              <div
                ref={outputRef}
                className="flex-1 relative rounded-xl border border-border/30 bg-background/60 p-4 sm:p-5 min-h-[200px] sm:min-h-[240px] overflow-hidden"
              >
                {/* Empty state */}
                <AnimatePresence>
                  {!generated && !loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-muted/60 flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-muted-foreground/40" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Your highly-converting AI proposal will appear here
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-1">
                        Paste a job description and hit generate
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Loading overlay */}
                <AnimatePresence>
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-5 bg-background/70 backdrop-blur-sm"
                    >
                      <div className="relative w-16 h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "100%" }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="absolute inset-y-0 left-0 w-1/2 bg-primary rounded-full"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4 text-primary animate-pulse" />
                        <p className="text-sm font-semibold text-foreground animate-pulse">
                          Analyzing requirements & writing pitch...
                        </p>
                      </div>
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Generated text */}
                <AnimatePresence>
                  {output && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm leading-[1.85] text-foreground font-medium h-full overflow-y-auto"
                    >
                      {lines.map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className={`mb-2.5 ${
                            i >= visibleLines && showBlur
                              ? "blur-[4px] opacity-40 select-none"
                              : ""
                          }`}
                        >
                          {line}
                        </motion.p>
                      ))}

                      {/* ═══════ PRO UNLOCK OVERLAY ═══════ */}
                      <AnimatePresence>
                        {showBlur && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center justify-end pb-6 sm:pb-8 pt-32 sm:pt-40"
                            style={{
                              background: "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 35%, transparent 100%)",
                            }}
                          >
                            <motion.div
                              initial={{ scale: 0.9, opacity: 0, y: 20 }}
                              animate={{ scale: 1, opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
                              className="w-full max-w-xs sm:max-w-sm mx-auto text-center space-y-4 sm:space-y-5 bg-card/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-border/50 shadow-2xl"
                            >
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto ring-4 ring-primary/5">
                                <Lock className="w-5 h-5 text-primary" />
                              </div>

                              <div>
                                <h4 className="text-base sm:text-lg font-extrabold text-foreground mb-1">
                                  Proposal Generated!
                                </h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                  Unlock the full cover letter, client strategy, and portfolio formatting.
                                </p>
                              </div>

                              <Link href="/pricing" className="block w-full">
                                <Button
                                  size="lg"
                                  className="w-full h-11 sm:h-12 rounded-xl text-xs sm:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                                >
                                  <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                                  Unlock Pro — $10/mo
                                </Button>
                              </Link>

                              <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <ShieldCheck className="w-3 h-3" />
                                  Cancel anytime
                                </span>
                                <span className="flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Unlimited
                                </span>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Stats bar */}
              <AnimatePresence>
                {generated && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 pt-4 border-t border-border/20"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span className="font-bold text-foreground">{stats.time}</span>
                      <span>generated</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      <span className="font-bold text-foreground">{stats.match}</span>
                      <span>match score</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <FileText className="w-3.5 h-3.5 text-primary" />
                      <span className="font-bold text-foreground">{stats.length}</span>
                      <span>words</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ═══════ BOTTOM TRUST BAR ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 mt-14 lg:mt-20"
        >
          {[
            { label: "Proposals Generated", value: "2.4M+" },
            { label: "Avg. Reply Rate", value: "34%" },
            { label: "Freelancers Trust Us", value: "18K+" },
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
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown, HelpCircle, MessageCircle, ArrowRight, Sparkles
} from "lucide-react";

const faqs = [
  {
    question: "How does GigThink's AI generate proposals that actually win clients?",
    answer: "GigThink analyzes the client's job posting, extracts key pain points, and matches them with your past portfolio and skills. It then crafts a hyper-personalized, persuasive proposal using proven psychological frameworks—all in under 3 seconds.",
  },
  {
    question: "Can I use GigThink for Upwork, Fiverr, and direct cold outreach?",
    answer: "Yes, absolutely! GigThink is built with multi-platform flexibility. You can generate tailored proposals for Upwork job posts, custom project briefs, LinkedIn outreach, and direct email pitches to high-paying clients.",
  },
  {
    question: "Will clients be able to tell that an AI wrote my proposal?",
    answer: "Not at all. Our custom AI models are trained on thousands of winning human-written proposals. It avoids robotic corporate jargon and outputs natural, engaging, and professional text that sounds authentically like you.",
  },
  {
    question: "How does the AI Lead Scraper find local businesses or clients?",
    answer: "Our Lead Scraper scans active digital marketplaces and local business listings based on your target niche and location filters, surfacing high-intent clients who are actively looking for the services you offer.",
  },
  {
    question: "Is there a free trial available to test out the platform?",
    answer: "Yes! You can sign up for free and test out our core proposal generation and lead-finding tools without entering any credit card details. Upgrade only when you're ready to scale your freelancing business.",
  },
  {
    question: "How do I cancel or change my subscription plan?",
    answer: "You have 100% control over your account. You can upgrade, downgrade, or cancel your subscription anytime directly from your dashboard settings with a single click—no questions asked.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-[900px] px-5 sm:px-6 lg:px-12 relative z-10">

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
            <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
            Got Questions? We Have Answers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
            Frequently Asked{" "}
            <span className="heading-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to know about GigThink, proposals, and how it helps you scale your freelancing career.
          </p>
        </motion.div>

        {/* ═══════ ACCORDION LIST ═══════ */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/25 shadow-lg shadow-primary/5"
                    : "bg-card/40 border-border/30 hover:border-border/60"
                }`}
              >
                {/* Question Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-5 sm:p-6 text-left cursor-pointer group"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors pr-4 leading-snug ${
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                        <div className="border-t border-border/20 pt-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ═══════ SUPPORT BANNER ═══════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 lg:mt-16"
        >
          <div className="rounded-2xl lg:rounded-3xl bg-card border border-border/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/15">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Still have a question?
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Can&apos;t find the answer? Our support team is here to help.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="mailto:hello@gigthink.ai"
                className="inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
              >
                Chat with Support
              </a>
              <Link href="/pricing">
                <Button className="h-10 px-5 rounded-xl text-sm font-bold bg-foreground text-background hover:bg-foreground/90 shadow-md transition-all hover:scale-[1.02] group">
                  Join Free
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Search,
  MessageCircle,
  BookOpen,
  Sparkles,
  CreditCard,
  FileText,
  Users,
  Compass,
} from "lucide-react";

// ==========================================
// Popular destinations — quick recovery paths
// ==========================================
const popularLinks = [
  {
    href: "/",
    label: "Home",
    description: "Back to the beginning",
    icon: Home,
  },
  {
    href: "/products/proposal-studio",
    label: "Proposal Studio",
    description: "AI proposals that win",
    icon: Sparkles,
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Plans & features",
    icon: CreditCard,
  },
  {
    href: "/blog",
    label: "Blog",
    description: "Guides & insights",
    icon: FileText,
  },
  {
    href: "/docs",
    label: "Docs",
    description: "Product help",
    icon: BookOpen,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Get support",
    icon: MessageCircle,
  },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8">
      {/* ── Background glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]"
      />

      {/* ── Grid pattern (subtle texture) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,145,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,145,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* ═══ BADGE ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="mb-8 inline-flex items-center gap-1.5 rounded-full border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm"
          >
            <Compass className="h-3.5 w-3.5" />
            Error 404 — Page Not Found
          </Badge>
        </motion.div>

        {/* ═══ BIG 404 ═══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="select-none"
        >
          <h1 className="heading-gradient font-heading text-[8rem] font-extrabold leading-none tracking-tighter sm:text-[12rem] lg:text-[14rem]">
            404
          </h1>
        </motion.div>

        {/* ═══ HEADING ═══ */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
        >
          Looks like this page took a{" "}
          <span className="heading-gradient">different path.</span>
        </motion.h2>

        {/* ═══ SUBTEXT ═══ */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mx-auto mt-4 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg"
        >
          The link might be broken, the page may have moved, or it never
          existed. Don&apos;t worry — you&apos;re still one click away from
          everything GigThink.
        </motion.p>

        {/* ═══ PRIMARY ACTIONS ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/">
            <Button
              size="lg"
              className="btn-gradient group h-11 w-full rounded-xl px-6 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            onClick={() => history.back()}
            className="h-11 w-full rounded-xl border-border/60 px-6 font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* ═══ DIVIDER ═══ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative my-12 flex items-center justify-center"
        >
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="absolute bg-background px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Or explore
          </span>
        </motion.div>

        {/* ═══ POPULAR LINKS GRID ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {popularLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75 + idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card/50 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-bold text-foreground">
                      {link.label}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      {link.description}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══ SUPPORT CTA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/40 bg-gradient-to-br from-card to-card/60 p-5 shadow-sm sm:flex-row sm:p-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground sm:text-base">
                  Still can&apos;t find what you need?
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                  Our support team is here to help you get back on track.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 px-5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ═══ FOOTER NOTE ═══ */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-8 text-xs text-muted-foreground/60"
        >
          Searching for something specific? Try our{" "}
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-2 hover:underline"
          >
            <Search className="h-3 w-3" />
            documentation
          </Link>{" "}
          or{" "}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-2 hover:underline"
          >
            <Users className="h-3 w-3" />
            blog
          </Link>
          .
        </motion.p>
      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  FileText,
  Mail,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* -------------------------------------------------------------------------- */
/*                                  TOC DATA                                  */
/* -------------------------------------------------------------------------- */

const sections = [
  { id: "subscription-payments", label: "Subscription Payments", icon: CreditCard },
  { id: "refunds", label: "Refunds", icon: RefreshCw },
  { id: "cancellation", label: "Subscription Cancellation", icon: CalendarClock },
  { id: "refund-requests", label: "Refund Requests", icon: FileText },
  { id: "processing", label: "Processing of Approved Refunds", icon: BadgeCheck },
  { id: "changes", label: "Changes to This Policy", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Mail },
];

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function RefundPolicyClient() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  /* Highlight active section on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="legal-theme-light dark:legal-theme-dark min-h-screen bg-background text-foreground">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background glow */}
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-16 lg:px-8">
          <Button
            
            variant="ghost"
            size="sm"
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="mr-1.5 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex flex-col gap-6">
            <Badge
              variant="outline"
              className="w-fit border-primary/25 bg-primary/5 text-primary"
            >
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
              Legal · Refund Policy
            </Badge>

            <div className="space-y-4">
              <h1 className="heading-gradient text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Refund Policy
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                This Refund Policy explains how billing, cancellations, and refunds work for
                GigThink subscriptions. Please read it carefully before subscribing to a paid
                plan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-primary" />
                Last Updated:&nbsp;
                <span className="font-medium text-foreground">September 26, 2026</span>
              </span>
              <Separator orientation="vertical" className="hidden h-4 sm:block" />
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                Applies to all paid GigThink subscriptions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MAIN GRID                                                        */}
      {/* ================================================================ */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          {/* --------------------------- SIDEBAR -------------------------- */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                On this page
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map(({ id, label, icon: Icon }) => {
                  const isActive = activeId === id;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={[
                        "group relative flex items-start gap-3 rounded-md px-3 py-2 text-sm transition-all",
                        isActive
                          ? "bg-primary/5 font-medium text-primary"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                      ].join(" ")}
                    >
                      {/* Left indicator */}
                      <span
                        className={[
                          "absolute inset-y-1 left-0 w-[3px] rounded-full transition-opacity",
                          isActive ? "bg-primary opacity-100" : "opacity-0",
                        ].join(" ")}
                      />
                      <Icon
                        className={[
                          "mt-0.5 h-4 w-4 shrink-0 transition-colors",
                          isActive ? "text-primary" : "text-muted-foreground/70 group-hover:text-foreground",
                        ].join(" ")}
                      />
                      <span className="leading-snug">{label}</span>
                    </a>
                  );
                })}
              </nav>

              <Separator className="my-6" />

              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      Need help with a payment?
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Contact our support team with your account email and payment details.
                    </p>
                    <a
                      href="/contact"
                      className="mt-2 inline-flex text-xs font-medium text-primary hover:underline"
                    >
                      Go to Contact →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* --------------------------- CONTENT -------------------------- */}
          <article className="min-w-0 space-y-14">
            {/* Intro */}
            <Section id="intro" noTitle>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="hidden rounded-xl bg-primary/10 p-3 sm:block">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      Thank you for using GigThink
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      GigThink is a subscription-based SaaS platform that provides AI-powered
                      tools and workflows for freelancers and agencies — including lead
                      discovery, lead analysis, pitches, proposals, and related
                      client-acquisition features.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      This policy explains how billing, cancellations, and refunds work for
                      GigThink subscriptions.
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* 1. Subscription Payments */}
            <Section
              id="subscription-payments"
              number="01"
              title="Subscription Payments"
              icon={CreditCard}
            >
              <p>
                GigThink offers paid subscription plans that are billed according to the
                billing cycle selected at checkout.
              </p>
              <p>
                By subscribing to a paid plan, you authorize the applicable subscription fee to
                be charged according to the payment terms presented at the time of purchase.
              </p>
            </Section>

            {/* 2. Refunds */}
            <Section id="refunds" number="02" title="Refunds" icon={RefreshCw}>
              <p>
                Because GigThink provides access to a digital SaaS service immediately after
                purchase, subscription payments are generally{" "}
                <strong className="font-semibold text-foreground">
                  non-refundable once the billing period has started
                </strong>
                .
              </p>

              <p>
                However, refund requests may be considered in certain circumstances, including:
              </p>

              <ul className="grid gap-3 sm:grid-cols-1">
                {[
                  "A duplicate or accidental charge caused by a payment processing issue.",
                  "A technical issue that resulted in payment being taken without the corresponding subscription access being provided.",
                  "Another exceptional circumstance that we determine, at our discretion, warrants a refund.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Callout variant="warning" icon={AlertCircle}>
                Submitting a refund request does{" "}
                <strong className="font-semibold">not</strong> guarantee that a refund will be
                issued.
              </Callout>
            </Section>

            {/* 3. Cancellation */}
            <Section
              id="cancellation"
              number="03"
              title="Subscription Cancellation"
              icon={CalendarClock}
            >
              <p>You may cancel your subscription at any time.</p>
              <p>
                Cancellation will stop future subscription renewals. Unless otherwise stated at
                the time of cancellation, you will generally continue to have access to the
                paid features until the end of your current billing period.
              </p>

              <Callout variant="info" icon={AlertCircle}>
                Cancelling a subscription does <strong className="font-semibold">not</strong>{" "}
                automatically create a refund for the unused portion of the current billing
                period.
              </Callout>
            </Section>

            {/* 4. Refund Requests */}
            <Section
              id="refund-requests"
              number="04"
              title="Refund Requests"
              icon={FileText}
            >
              <p>
                If you believe you have been charged incorrectly or have another legitimate
                reason for requesting a refund, please contact us with the following
                information:
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    icon: Mail,
                    title: "Account Email",
                    desc: "The email address associated with your GigThink account.",
                  },
                  {
                    icon: CalendarClock,
                    title: "Payment Date",
                    desc: "The date on which the payment was charged.",
                  },
                  {
                    icon: Receipt,
                    title: "Transaction Info",
                    desc: "The transaction or receipt information, if available.",
                  },
                  {
                    icon: FileText,
                    title: "Brief Explanation",
                    desc: "A short description of the issue you are facing.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                We will review the request and respond after evaluating the circumstances.
              </p>
            </Section>

            {/* 5. Processing */}
            <Section
              id="processing"
              number="05"
              title="Processing of Approved Refunds"
              icon={BadgeCheck}
            >
              <p>
                If a refund is approved, it will be processed through the payment method or
                payment provider used for the original transaction, where supported.
              </p>
              <p>
                The time required for the refunded amount to appear in your account may depend
                on the payment provider and financial institution.
              </p>
            </Section>

            {/* 6. Changes */}
            <Section id="changes" number="06" title="Changes to This Refund Policy" icon={Sparkles}>
              <p>
                GigThink may update this Refund Policy from time to time to reflect changes to
                our services, payment arrangements, or business practices.
              </p>
              <p>
                Any updated version will be published on this page with a revised{" "}
                <em className="text-foreground">"Last Updated"</em> date.
              </p>
            </Section>

            {/* 7. Contact */}
            <Section id="contact" number="07" title="Contact" icon={Mail}>
              <p>
                If you have questions about this Refund Policy or need assistance with a
                payment, please contact us through the contact information provided on the
                GigThink website.
              </p>

              <Card className="mt-4 overflow-hidden border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">GigThink Support</p>
                        <a
                          href="https://gigthink.com"
                          className="text-sm text-primary hover:underline"
                        >
                          gigthink.com
                        </a>
                      </div>
                    </div>

                    <Button
                      
                      className="btn-gradient text-primary-foreground shadow-sm hover:opacity-95"
                    >
                      <Link href="https://gigthink.com/contact">
                        Contact Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Section>

            {/* Footer note */}
            <div className="border-t border-border pt-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <XCircle className="h-3.5 w-3.5" />
                  This policy does not limit any rights you may have under applicable law.
                </div>
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} GigThink. All rights reserved.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SMALL SUB-COMPONENTS                          */
/* -------------------------------------------------------------------------- */

function Section({
  id,
  number,
  title,
  icon: Icon,
  children,
  noTitle = false,
}: {
  id: string;
  number?: string;
  title?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  noTitle?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {!noTitle && (
        <header className="mb-5 flex items-start gap-4">
          {number && (
            <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-primary/10 px-2 text-xs font-bold tabular-nums text-primary">
              {number}
            </span>
          )}
          <div className="flex items-center gap-2.5">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {title}
            </h2>
          </div>
        </header>
      )}
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {children}
      </div>
    </section>
  );
}

function Callout({
  variant = "info",
  icon: Icon,
  children,
}: {
  variant?: "info" | "warning" | "success";
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  const variants: Record<string, string> = {
    info: "border-l-primary bg-primary/5 text-foreground/90",
    warning: "border-l-amber-500 bg-amber-500/5 text-foreground/90",
    success: "border-l-emerald-500 bg-emerald-500/5 text-foreground/90",
  };

  const iconColor: Record<string, string> = {
    info: "text-primary",
    warning: "text-amber-500",
    success: "text-emerald-500",
  };

  return (
    <div
      className={[
        "flex items-start gap-3 rounded-lg border border-border border-l-4 px-4 py-3.5",
        variants[variant],
      ].join(" ")}
    >
      {Icon && <Icon className={["mt-0.5 h-4 w-4 shrink-0", iconColor[variant]].join(" ")} />}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
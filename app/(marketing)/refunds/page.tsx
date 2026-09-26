import type { Metadata } from "next";
import RefundPolicyClient from "@/components/legal/refund-policy-client";

export const metadata: Metadata = {
  title: "Refund Policy | GigThink",
  description:
    "Read GigThink's Refund Policy to understand subscription payments, cancellations, refund eligibility, and how to submit a refund request.",
  alternates: {
    canonical: "https://app.gigthink.com/refund-policy",
  },
  openGraph: {
    title: "Refund Policy | GigThink",
    description:
      "Understand GigThink's subscription billing, cancellation, and refund practices.",
    url: "https://app.gigthink.com/refund-policy",
    siteName: "GigThink",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  return <RefundPolicyClient />;
}
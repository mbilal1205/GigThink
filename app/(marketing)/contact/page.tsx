// app/(marketing)/contact/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contact-sections/ContactHero";
import ContactOptions from "@/components/contact-sections/ContactOptions";
import ContactFormSection from "@/components/contact-sections/ContactFormSection";
import WhatHappensNext from "@/components/contact-sections/WhatHappensNext";
import ContactFAQ from "@/components/contact-sections/ContactFAQ";
import ContactCTA from "@/components/contact-sections/ContactCTA";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Support, Sales & Partnerships",
  description:
    "Get in touch with GigThink. Reach our support team, sales, or partnerships. We usually respond within 24 hours on business days.",
  path: "/contact",
  keywords: ["contact GigThink", "GigThink support", "sales inquiry"],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
      <WhatHappensNext />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}
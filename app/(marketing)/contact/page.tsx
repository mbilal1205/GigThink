// app/(marketing)/contact/page.tsx

import ContactHero from "@/components/contact-sections/ContactHero";
import ContactOptions from "@/components/contact-sections/ContactOptions";
import ContactFormSection from "@/components/contact-sections/ContactFormSection";
import WhatHappensNext from "@/components/contact-sections/WhatHappensNext";
import ContactFAQ from "@/components/contact-sections/ContactFAQ";
import ContactCTA from "@/components/contact-sections/ContactCTA";

export const metadata = {
  title: "Contact GigThink | Get Support, Sales & Partnership Inquiries",
  description:
    "Contact GigThink for product support, sales inquiries, partnerships, or general questions. Our team is here to help you build a smarter client acquisition workflow.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <ContactOptions />
      <ContactFormSection />
      <WhatHappensNext />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}
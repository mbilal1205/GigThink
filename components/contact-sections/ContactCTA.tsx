// components/contact-sections/ContactCTA.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-headings">
          Ready to Build a Smarter Client Acquisition Workflow?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover how GigThink can help you organize opportunities, manage prospects, create
          proposals, and stay consistent with follow-ups.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  {/* btn-gradient hata kar soft black (bg-neutral-800) lagaya aur hover state freeze kar di */}
  <Button
    className="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-none"
  >
    <Link href="/">Explore GigThink</Link>
  </Button>
  
  <Button
    variant="outline"
    className="border-primary/40 text-black hover:bg-primary/5 px-8"
  >
    <Link href="#contact-form">Get in Touch</Link>
  </Button>
</div>

      </div>
    </section>
  );
}
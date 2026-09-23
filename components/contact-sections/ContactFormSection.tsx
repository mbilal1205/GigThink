"use client";

// components/contact-sections/ContactFormSection.tsx

import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactFormSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      inquiryType: formData.get("inquiryType") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left side */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-headings mb-4">Let's Talk</h2>
          <p className="text-muted-foreground mb-6">
            Tell us how we can help. Our team will review your inquiry and get back to you as soon
            as possible.
          </p>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-headings mb-3">We're Here to Help</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Whether you're exploring GigThink for the first time or already using the platform,
              we're here to help you get the most from it.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground/80">Product Support — account and product questions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground/80">Business Inquiries — sales and partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground/80">Help Center — common questions and guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-headings mb-2">Thanks for reaching out!</h3>
              <p className="text-muted-foreground">
                Your message has been received. Our team will review your inquiry and get back to
                you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Work Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                  Company / Agency
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company or agency"
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-foreground mb-1">
                  What can we help you with?
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  className="w-full h-10 rounded-md bg-background border border-border text-foreground px-3 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="">Select an option</option>
                  <option>Product Support</option>
                  <option>Sales & Pricing</option>
                  <option>Partnership</option>
                  <option>Feature Question</option>
                  <option>Account Question</option>
                  <option>General Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  rows={4}
                  required
                  className="bg-background border-border focus-visible:ring-primary resize-none"
                />
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full btn-gradient text-white font-semibold py-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message →"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
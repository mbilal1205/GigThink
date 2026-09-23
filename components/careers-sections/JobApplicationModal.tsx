"use client";

import { useState, FormEvent, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, UploadCloud, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobApplicationModalProps {
  jobTitle?: string;
  buttonText?: string;
  buttonClassName?: string;
  triggerLabel?: string;
}

export default function JobApplicationModal({
  jobTitle = "General Application",
  buttonText,
  buttonClassName,
  triggerLabel,
}: JobApplicationModalProps) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultButtonText = buttonText || "Apply Now";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("jobTitle", jobTitle);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* ⚠️ FIX: DialogTrigger as a single button, no nested Button */}
      <DialogTrigger
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "bg-primary text-primary-foreground hover:bg-primary/90",
          buttonClassName || "btn-gradient text-white font-semibold px-8"
        )}
      >
        {triggerLabel || defaultButtonText}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-card border-border text-foreground">
        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <DialogTitle className="text-2xl font-heading font-semibold text-headings mb-2">
              Application Submitted!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Thank you for your interest. Our team will review your application and get back to
              you soon.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-heading font-bold text-headings">
                Apply for {jobTitle}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Fill in your details and upload your CV. We'll review and get back to you.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-background border-border focus-visible:ring-primary"
                />
              </div>

              <div>
                <Label htmlFor="cv" className="text-sm font-medium">
                  CV / Resume (PDF, DOC)
                </Label>
                <input
                  ref={fileInputRef}
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg py-6 hover:border-primary/50 transition-colors"
                >
                  <UploadCloud className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload your CV
                  </span>
                </button>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us why you're a great fit..."
                  rows={3}
                  className="bg-background border-border focus-visible:ring-primary resize-none"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button
  type="submit"
  disabled={submitting}
  className="w-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-none disabled:opacity-50 disabled:pointer-events-none"
>
  {submitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Submitting...
    </>
  ) : (
    "Submit Application"
  )}
</Button>

            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
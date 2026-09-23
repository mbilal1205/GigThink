// app/(marketing)/careers/[slug]/page.tsx

import { notFound } from "next/navigation";
import { positions } from "@/data/careers/positions";
import { JobPosition } from "@/data/careers/types";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar } from "lucide-react";
import JobApplicationModal from "@/components/careers-sections/JobApplicationModal";

export async function generateStaticParams() {
  return positions.map((pos) => ({ slug: pos.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = positions.find((p) => p.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers at GigThink`,
    description: job.description,
  };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = positions.find((p) => p.slug === slug);
  if (!job) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Badge variant="outline" className="text-primary border-primary/30 mb-3">
            {job.department}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-headings mb-4">
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Posted {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">About the Role</h2>
            {job.aboutRole.map((para, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">What You'll Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.whatYoullDo.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">What We're Looking For</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.whatWereLookingFor.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">Nice to Have</h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.niceToHave.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-8 border-t border-border/50">
            <h2 className="text-xl font-heading font-bold text-headings mb-3">How to Apply</h2>
            <p className="text-foreground/80 mb-4">
              Tell us about yourself, your experience, and what you'd like to build with GigThink.
            </p>
            <JobApplicationModal
  jobTitle={job.title}
  buttonText="Apply for this role"
  triggerLabel="Apply for this role"
  buttonClassName="bg-neutral-900 text-white font-semibold px-6 hover:bg-neutral-800 transition-none"
/>

          </div>
        </div>
      </div>
    </main>
  );
}
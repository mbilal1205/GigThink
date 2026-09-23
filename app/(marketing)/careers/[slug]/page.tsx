// app/(marketing)/careers/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { positions } from "@/data/careers/positions";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Calendar } from "lucide-react";
import JobApplicationModal from "@/components/careers-sections/JobApplicationModal";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return positions.map((pos) => ({ slug: pos.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const job = positions.find((p) => p.slug === slug);
  if (!job) return {};

  return buildMetadata({
    title: `${job.title} — ${job.department}`,
    description: `${job.description} Location: ${job.location}. Type: ${job.type}. Apply now at GigThink.`,
    path: `/careers/${slug}`,
    keywords: [job.title, job.department, job.location, "GigThink jobs"],
    type: "article",
  });
}

export default async function JobDetailPage({ params }: Params) {
  const { slug } = await params;
  const job = positions.find((p) => p.slug === slug);
  if (!job) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Google Jobs rich snippet schema */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: new Date().toISOString(),
            employmentType: job.type,
            hiringOrganization: {
              "@type": "Organization",
              name: siteConfig.legalName,
              sameAs: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
              },
            },
            url: `${siteConfig.url}/careers/${slug}`,
          },
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Careers", url: "/careers" },
            { name: job.title, url: `/careers/${slug}` },
          ]),
        ]}
      />

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
              <Calendar className="h-4 w-4" /> Posted{" "}
              <time dateTime={new Date().toISOString()}>
                {new Date().toLocaleDateString()}
              </time>
            </span>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">
              About the Role
            </h2>
            {job.aboutRole.map((para, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">
              What You&apos;ll Do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.whatYoullDo.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">
              What We&apos;re Looking For
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.whatWereLookingFor.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-headings mb-3">
              Nice to Have
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {job.niceToHave.map((item, i) => (
                <li key={i} className="text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-8 border-t border-border/50">
            <h2 className="text-xl font-heading font-bold text-headings mb-3">
              How to Apply
            </h2>
            <p className="text-foreground/80 mb-4">
              Tell us about yourself, your experience, and what you&apos;d like to
              build with GigThink.
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
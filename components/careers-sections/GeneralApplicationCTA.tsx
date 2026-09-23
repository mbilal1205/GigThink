// components/careers-sections/GeneralApplicationCTA.tsx

import JobApplicationModal from "./JobApplicationModal";

interface GeneralApplicationCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function GeneralApplicationCTA({
  title,
  subtitle,
  buttonText,
}: GeneralApplicationCTAProps) {
  return (
    <section id="general-application" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-headings">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8">
          <JobApplicationModal
  jobTitle="General Application"
  buttonText={buttonText}
  buttonClassName="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-none"
  triggerLabel={buttonText}
/>

        </div>
      </div>
    </section>
  );
}
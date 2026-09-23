// components/careers-sections/WhatBuildingSection.tsx

interface WhatBuildingSectionProps {
  title: string;
  subtitle: string;
  workflowSteps: string[];
}

export default function WhatBuildingSection({
  title,
  subtitle,
  workflowSteps,
}: WhatBuildingSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-headings">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {workflowSteps.map((step, idx) => (
            <div key={step} className="flex items-center">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
                {step}
              </div>
              {idx < workflowSteps.length - 1 && (
                <span className="mx-2 text-muted-foreground">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
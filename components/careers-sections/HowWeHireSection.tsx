// components/careers-sections/HowWeHireSection.tsx

interface HireStep {
  title: string;
  description: string;
}

interface HowWeHireSectionProps {
  title: string;
  steps: HireStep[];
}

export default function HowWeHireSection({ title, steps }: HowWeHireSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-headings text-center mb-12">
          {title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-headings mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
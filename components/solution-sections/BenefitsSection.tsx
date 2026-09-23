import { BenefitsContent } from "@/data/solution-content/types";

interface BenefitsSectionProps {
  benefits: BenefitsContent;
}

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-8">
          {benefits.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-headings mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { CheckCircle2 } from "lucide-react";

interface BenefitsProps {
  data: {
    title: string;
    items: string[];
  };
}

export function Benefits({ data }: BenefitsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {data.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
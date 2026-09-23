import { UseCasesContent } from "@/data/solution-content/types";

interface UseCasesSectionProps {
  useCases: UseCasesContent;
}

export default function UseCasesSection({ useCases }: UseCasesSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-8">
          {useCases.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.cases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-headings mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { WorkflowContent } from "@/data/solution-content/types";

interface WorkflowSectionProps {
  workflow: WorkflowContent;
}

export default function WorkflowSection({ workflow }: WorkflowSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-12">
          {workflow.title}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">
                  {idx + 1}
                </span>
                <h3 className="font-semibold text-headings">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
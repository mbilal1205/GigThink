import { SolutionOverviewContent } from "@/data/solution-content/types";
import { CheckCircle2 } from "lucide-react";

interface SolutionOverviewProps {
  solution: SolutionOverviewContent;
}

export default function SolutionOverview({ solution }: SolutionOverviewProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-8">
          {solution.title}
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          {solution.description}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {solution.points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
            >
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/80">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
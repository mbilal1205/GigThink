import { ProblemContent } from "@/data/solution-content/types";

interface ProblemSectionProps {
  problem: ProblemContent;
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-8">
          {problem.title}
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          {problem.description}
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {problem.points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
            >
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-destructive shrink-0" />
              <span className="text-foreground/80">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
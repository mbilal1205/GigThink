import { BeforeAfterContent } from "@/data/solution-content/types";
import { XCircle, CheckCircle2 } from "lucide-react";

interface BeforeAfterSectionProps {
  beforeAfter: BeforeAfterContent;
}

export default function BeforeAfterSection({ beforeAfter }: BeforeAfterSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings text-center mb-8">
          {beforeAfter.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-destructive mb-4">Before</h3>
            <ul className="space-y-3">
              {beforeAfter.before.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-primary/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">With GigThink</h3>
            <ul className="space-y-3">
              {beforeAfter.after.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
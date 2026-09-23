import { CompetitorData } from "@/data/compare-content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function DetailedComparison({ data }: { data: CompetitorData }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings mb-8 text-center">
          Detailed Comparison
        </h2>
        <div className="grid gap-8">
          {data.detailedComparison.map((section, idx) => (
            <Card key={idx} className="border-border/60 bg-card">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-headings">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">GigThink</h4>
                  <ul className="space-y-2">
                    {section.gigthink.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground/70 mb-3">{data.name}</h4>
                  <ul className="space-y-2">
                    {section.competitor.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="inline-block w-2 h-2 mt-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
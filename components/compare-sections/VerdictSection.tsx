import { CompetitorData } from "@/data/compare-content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, AlertCircle } from "lucide-react";

export default function VerdictSection({ data }: { data: CompetitorData }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings mb-8 text-center">
          Our Verdict
        </h2>
        <Card className="border-border/60 bg-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-headings">
              Final Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <ThumbsUp className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground">GigThink is better when:</p>
                <p className="text-muted-foreground">{data.verdict.gigthinkBetter}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground">
                  {data.name} is better when:
                </p>
                <p className="text-muted-foreground">{data.verdict.competitorBetter}</p>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-lg font-medium text-headings">{data.verdict.final}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
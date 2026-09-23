import Link from "next/link";
import { CompetitorData } from "@/data/compare-content/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompareIndexCard({ data }: { data: CompetitorData }) {
  return (
    <Link href={`/compare/${data.slug}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30 bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-headings">
            GigThink vs {data.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{data.description}</p>
          <div className="mt-4 flex items-center text-sm text-primary font-medium">
            Compare now →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
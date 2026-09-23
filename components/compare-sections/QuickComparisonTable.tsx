import { CompetitorData } from "@/data/compare-content/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, Minus } from "lucide-react";

export default function QuickComparisonTable({ data }: { data: CompetitorData }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-headings mb-8 text-center">
          Quick Comparison
        </h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-1/4">Feature</TableHead>
                <TableHead className="w-1/3 text-primary">GigThink</TableHead>
                <TableHead className="w-1/3">{data.name}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.features.map((feature, idx) => (
                <TableRow key={idx} className="hover:bg-muted/30">
                  <TableCell className="font-medium text-foreground/80">
                    {feature.label}
                  </TableCell>
                  <TableCell className="text-left">
                    <span className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-1 text-primary shrink-0" />
                      <span>{feature.gigthink}</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-left">
                    <span className="flex items-start gap-2">
                      {feature.competitor.toLowerCase().includes("no") ? (
                        <X className="h-4 w-4 mt-1 text-destructive shrink-0" />
                      ) : (
                        <Minus className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                      )}
                      <span>{feature.competitor}</span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
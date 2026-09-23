import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

interface WhyGigThinkProps {
  data: {
    title: string;
    comparison: { traditional: string; gigthink: string }[];
  };
}

export function WhyGigThink({ data }: WhyGigThinkProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {data.title}
        </h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Traditional Workflow</TableHead>
                <TableHead>GigThink</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.comparison.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="flex items-center gap-2">
                    <X className="h-4 w-4 text-destructive shrink-0" />
                    {row.traditional}
                  </TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {row.gigthink}
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
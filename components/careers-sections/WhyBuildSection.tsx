// components/careers-sections/WhyBuildSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface WhyBuildPoint {
  title: string;
  description: string;
}

interface WhyBuildSectionProps {
  title: string;
  subtitle: string;
  points: WhyBuildPoint[];
}

export default function WhyBuildSection({ title, subtitle, points }: WhyBuildSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-headings">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <Card key={point.title} className="border-border/60 bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-headings">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
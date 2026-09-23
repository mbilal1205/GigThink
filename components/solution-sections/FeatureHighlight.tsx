import { FeatureSection } from "@/data/solution-content/types";
import { CheckCircle2 } from "lucide-react";

interface FeatureHighlightProps {
  feature: FeatureSection;
  index: number; // for alternating layout
}

export default function FeatureHighlight({ feature, index }: FeatureHighlightProps) {
  const isEven = index % 2 === 0;
  return (
    <section id={feature.id} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-headings mb-2">
              {feature.title}
            </h3>
            {feature.subtitle && (
              <p className="text-lg font-medium text-primary mb-3">{feature.subtitle}</p>
            )}
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                  <span className="text-sm text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Placeholder for visual, can be omitted or replaced with an image */}
          <div className="flex-1 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 border border-primary/10 min-h-[200px] flex items-center justify-center">
            <span className="text-primary/60 font-semibold">Illustration / Screenshot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface HowItWorksProps {
  data: {
    steps: { title: string; description: string }[];
  };
}

export function HowItWorks({ data }: HowItWorksProps) {
  const featuredStep = data.steps[0];
  const otherSteps = data.steps.slice(1);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary"
          >
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight heading-gradient mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our streamlined workflow
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-8">
            {/* Featured Step (Left - Large Card) */}
            <Card className="group relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/[0.03] to-transparent hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 lg:row-span-2">
              <CardContent className="p-8 md:p-10 h-full flex flex-col">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl btn-gradient shadow-lg shadow-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">01</span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <span>Start Here</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:heading-gradient transition-all duration-300">
                    {featuredStep.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                    {featuredStep.description}
                  </p>
                </div>

                {/* Visual Placeholder */}
                <div className="mt-auto pt-6">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 via-secondary/30 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#cfcfcf_1px,transparent_1px),linear-gradient(to_bottom,#cfcfcf_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 rounded-xl btn-gradient mx-auto mb-3 flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Visual Preview
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </CardContent>
            </Card>

            {/* Other Steps (Right - Stacked Cards) */}
            <div className="grid gap-6 md:gap-8">
              {otherSteps.map((step, idx) => {
                const stepNumber = idx + 2;
                return (
                  <Card
                    key={idx}
                    className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        {/* Step Number */}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <span className="text-xl font-bold text-primary">
                            {String(stepNumber).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow Indicator */}
                        <div className="hidden md:block shrink-0">
                          <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Connecting Flow Indicator (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center mt-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary/30" />
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent" />
              <span className="text-xs font-medium">Flow</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-primary/30" />
              <div className="w-2 h-2 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
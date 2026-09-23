import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, BarChart3, Clock, Users } from "lucide-react";

interface ProductShowcaseProps {
  data: {
    title: string;
    description: string;
  };
}

export function ProductShowcase({ data }: ProductShowcaseProps) {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time updates",
      position: "top-20 -left-4 md:-left-20",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption",
      position: "top-1/2 -left-4 md:-left-24 -translate-y-1/2",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "AI-powered insights",
      position: "bottom-20 -left-4 md:-left-20",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Automated logging",
      position: "top-1/3 -right-4 md:-right-24",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless workflow",
      position: "bottom-1/3 -right-4 md:-right-24",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary"
          >
            Product Showcase
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight heading-gradient mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.description}
          </p>
        </div>

        {/* Device Showcase Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Floating Feature Cards Container */}
          <div className="relative">
            {/* Laptop Mockup */}
            <div className="relative mx-auto max-w-4xl">
              {/* Laptop Frame */}
              <div className="relative group">
                {/* Laptop Screen */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl p-3 md:p-4 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="relative bg-background rounded-lg overflow-hidden aspect-[16/10]">
                    {/* Product UI Mockup */}
                    <div className="absolute inset-0 p-4 md:p-6">
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg btn-gradient" />
                          <div className="h-3 w-20 md:w-32 bg-foreground/10 rounded" />
                        </div>
                        <div className="flex gap-2">
                          <div className="h-6 w-16 md:h-8 md:w-20 bg-secondary rounded-md" />
                          <div className="h-6 w-6 md:h-8 md:w-8 rounded-md btn-gradient" />
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="glass rounded-lg p-2 md:p-4 border border-border/30"
                          >
                            <div className="h-2 w-12 md:w-16 bg-muted-foreground/20 rounded mb-1 md:mb-2" />
                            <div className="h-4 w-16 md:w-20 bg-foreground/10 rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Chart Area */}
                      <div className="glass rounded-lg p-3 md:p-4 border border-border/30 h-32 md:h-48 relative overflow-hidden">
                        <div className="h-2 w-16 md:w-24 bg-foreground/10 rounded mb-2 md:mb-4" />
                        <svg
                          className="absolute bottom-0 left-0 w-full h-3/4 opacity-60"
                          viewBox="0 0 400 150"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="showcaseChartGradient"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#0091ff" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#0091ff" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 70 T 400 40"
                            fill="none"
                            stroke="#0091ff"
                            strokeWidth="2"
                          />
                          <path
                            d="M 0 120 Q 50 80, 100 90 T 200 60 T 300 70 T 400 40 L 400 150 L 0 150 Z"
                            fill="url(#showcaseChartGradient)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative h-4 md:h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-1 bg-gray-600 rounded-b" />
                </div>

                {/* Laptop Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 blur-xl rounded-full" />
              </div>

              {/* Phone Mockup (Overlapping on Right) */}
              <div className="absolute -right-4 md:-right-12 bottom-0 md:bottom-8 w-24 md:w-32 group">
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-1.5 md:p-2 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  {/* Phone Screen */}
                  <div className="relative bg-background rounded-xl md:rounded-2xl overflow-hidden aspect-[9/19]">
                    {/* Phone UI */}
                    <div className="absolute inset-0 p-2 md:p-3">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <div className="h-1 w-8 bg-foreground/10 rounded" />
                        <div className="flex gap-1">
                          <div className="h-1 w-1 bg-foreground/20 rounded-full" />
                          <div className="h-1 w-1 bg-foreground/20 rounded-full" />
                        </div>
                      </div>

                      {/* Phone Content */}
                      <div className="space-y-2 md:space-y-3">
                        <div className="glass rounded-lg p-2 border border-border/30">
                          <div className="h-1.5 w-12 bg-foreground/10 rounded mb-1" />
                          <div className="h-3 w-16 bg-primary/20 rounded" />
                        </div>
                        <div className="glass rounded-lg p-2 border border-border/30">
                          <div className="h-1.5 w-10 bg-foreground/10 rounded mb-1" />
                          <div className="h-3 w-14 bg-foreground/10 rounded" />
                        </div>
                        <div className="glass rounded-lg p-2 border border-border/30">
                          <div className="h-1.5 w-14 bg-foreground/10 rounded mb-1" />
                          <div className="h-3 w-12 bg-primary/20 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Phone Shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/20 blur-lg rounded-full" />
              </div>
            </div>

            {/* Floating Feature Cards */}
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`absolute ${feature.position} hidden md:block z-20`}
                >
                  <Card className="glass border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group/card">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg btn-gradient flex items-center justify-center shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs md:text-sm font-semibold text-foreground truncate">
                            {feature.title}
                          </div>
                          <div className="text-xs text-muted-foreground truncate">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Mobile Feature Pills (Below devices) */}
            <div className="md:hidden mt-8 flex flex-wrap gap-2 justify-center">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="glass border-primary/20 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-foreground">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  data: {
    badge: string;
    headline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustStats?: { label: string; value: string }[];
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  const trustStats = data.trustStats || [
    { label: "Active Users", value: "50K+" },
    { label: "Companies", value: "2,500+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-20 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cfcfcf_1px,transparent_1px),linear-gradient(to_bottom,#cfcfcf_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Glow */}
      <div className="hero-glow absolute inset-0 -z-10" />

      {/* Layered Depth Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/[0.08] to-transparent blur-2xl top-20 left-20" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-xl top-40 left-40" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Content Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
          >
            {data.badge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight heading-gradient leading-[1.1] mb-6">
            {data.headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            {data.description}
          </p>

          {/* CTA Buttons */}
    <div className="flex flex-row gap-3 justify-center items-center mb-12 px-4">
  {/* Start Free Button */}
  <Button 
    size="sm" 
    className="w-auto text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium group whitespace-nowrap"
  >
    {data.primaryCta}
    <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 sm:h-4 w-3.5 sm:w-4 group-hover:translate-x-1 transition-transform" />
  </Button>

  {/* Secondary Button */}
  <Button 
    size="sm" 
    variant="outline" 
    className="w-auto text-xs sm:text-sm h-10 sm:h-11 px-4 sm:px-6 rounded-full border-neutral-200 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium whitespace-nowrap"
  >
    {data.secondaryCta}
  </Button>
</div>



          {/* Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-8 border-t border-border/50">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Tilted Product Mockup */}
        <div className="relative max-w-5xl mx-auto" style={{ perspective: "2000px" }}>
          {/* Glow behind mockup */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent blur-3xl -z-10 scale-110" />

          {/* Main Mockup Container with 3D Tilt */}
          <div
            className="relative transition-transform duration-500 ease-out hover:[transform:rotateX(3deg)]"
            style={{ transform: "rotateX(6deg)" }}
          >
            {/* Glass Card Wrapper */}
            <div className="glass rounded-2xl p-2 md:p-3 shadow-2xl shadow-primary/10 border border-border/50">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-secondary/50 rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center max-w-md mx-auto">
                    app.gigthink.com/dashboard
                  </div>
                </div>
              </div>

              {/* Product UI Mockup */}
              <div className="aspect-video bg-gradient-to-br from-background via-secondary/30 to-background rounded-lg overflow-hidden relative">
                {/* Mock Dashboard UI */}
                <div className="absolute inset-0 p-6 md:p-8">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg btn-gradient" />
                      <div className="h-4 w-32 bg-foreground/10 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-20 bg-secondary rounded-md" />
                      <div className="h-8 w-8 rounded-md btn-gradient" />
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="glass rounded-lg p-4 border border-border/30"
                      >
                        <div className="h-3 w-16 bg-muted-foreground/20 rounded mb-2" />
                        <div className="h-6 w-20 bg-foreground/10 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="glass rounded-lg p-4 border border-border/30 h-40 md:h-48 relative overflow-hidden">
                    <div className="h-3 w-24 bg-foreground/10 rounded mb-4" />
                    {/* Mock Chart Lines */}
                    <svg
                      className="absolute bottom-0 left-0 w-full h-3/4 opacity-60"
                      viewBox="0 0 400 150"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
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
                        fill="url(#chartGradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 glass rounded-xl p-3 md:p-4 shadow-xl border border-primary/20 animate-[float_3s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    Task Completed
                  </div>
                  <div className="text-xs text-muted-foreground">Just now</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 glass rounded-xl p-3 md:p-4 shadow-xl border border-primary/20 animate-[float_3.5s_ease-in-out_infinite_0.5s]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    Live Sync
                  </div>
                  <div className="text-xs text-muted-foreground">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
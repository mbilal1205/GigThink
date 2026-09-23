import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface FinalCTAProps {
  data: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
}

export function FinalCTA({ data }: FinalCTAProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* 1. Using YOUR Custom CSS Utility for a clean, brand-aligned background */}
      <div className="absolute inset-0 -z-10 hero-glow opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative mx-auto max-w-5xl">
          
          {/* 2. Flat, Shadowless, Super-rounded Container matching your --card and --border */}
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-card border border-border px-6 py-16 sm:px-16 sm:py-24 text-center shadow-none hover:border-primary/40 transition-colors duration-500 group/cta">
            
            {/* 3. Minimalist Grid Pattern (Using your exact --border color for consistency) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-40 -z-10" />

            {/* Flat Sparkle Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-8 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4" />
              <span>Get Started Today</span>
            </div>

            {/* 4. Title using YOUR exact .heading-gradient utility */}
            <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight heading-gradient mb-6 leading-tight pb-2">
              {data.headline}
            </h2>
            
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              {data.subtext}
            </p>

            {/* Button Array */}
   <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Modern SaaS Soft Black Button (Mobile Friendly Fixed-Width) */}
  <Button 
    size="sm" 
    className="w-48 sm:w-auto text-sm h-11 px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium tracking-sm group"
  >
    {data.buttonText}
    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</div>


            
          </div>
        </div>
      </div>
    </section>
  );
}
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

interface ProblemSolutionProps {
  data: {
    title: string;
    problems: string[];
    solutions: string[];
  };
}

export function ProblemSolution({ data }: ProblemSolutionProps) {
  // Pair problems with solutions
  const pairs = data.problems.map((problem, idx) => ({
    problem,
    solution: data.solutions[idx] || "",
    step: idx + 1,
  }));

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header - Kept Clean & Flat */}
        <div className="text-center mb-12 md:mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary shadow-none"
          >
            The Transformation
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            See the clear difference between struggling and succeeding.
          </p>
        </div>

        {/* Flat Comparison Grid */}
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {pairs.map((pair, idx) => (
            <div 
              key={idx} 
              // UNIFIED SHAPE: Super rounded corners, no shadows, flat borders
              className="relative flex flex-col md:flex-row items-stretch rounded-[2rem] md:rounded-[2.5rem] border border-border/40 overflow-hidden bg-background shadow-none"
            >
              
              {/* --- LEFT SIDE: THE PROBLEM (Before) --- */}
              <div className="flex-1 p-6 md:p-10 bg-secondary/30 relative flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-destructive">
                      Before
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {pair.problem}
                </p>
              </div>

              {/* --- CENTER DIVIDER & ARROW (Flat) --- */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background z-10">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Mobile center arrow */}
              <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background z-10 rotate-90">
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Desktop vertical line divider */}
              <div className="hidden md:block w-px bg-border/40" />
              
              {/* Mobile horizontal line divider */}
              <div className="md:hidden h-px w-full bg-border/40" />

              {/* --- RIGHT SIDE: THE SOLUTION (After) --- */}
              <div className="flex-1 p-6 md:p-10 bg-primary/5 relative flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                      After
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                  {pair.solution}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
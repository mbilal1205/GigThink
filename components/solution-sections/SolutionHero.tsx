import { HeroContent } from "@/data/solution-content/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SolutionHeroProps {
  hero: HeroContent;
}

export default function SolutionHero({ hero }: SolutionHeroProps) {
  return (
    <section className="relative hero-glow pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {hero.badge && (
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-white/50">
            {hero.badge}
          </Badge>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
          <span className="text-headings">{hero.title}</span>{" "}
          {hero.highlightedTitle && (
            <span className="heading-gradient">{hero.highlightedTitle}</span>
          )}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
       <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  {/* btn-gradient hata kar soft black lagaya aur hover effect remove kiya */}
  <Button size="lg" className="bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-none">
    {hero.ctaPrimary}
  </Button>
  
  {hero.ctaSecondary && (
    <Button size="lg" variant="outline" className="border-primary/40 text-black">
      {hero.ctaSecondary}
    </Button>
  )}
</div>

      </div>
    </section>
  );
}
import { CompetitorData } from "@/data/compare-content/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CompareHero({ data }: { data: CompetitorData }) {
  return (
    <section className="relative hero-glow pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-white/50">
          Compare
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
          <span className="heading-gradient">GigThink</span>
          <span className="text-headings"> vs </span>
          <span className="text-headings">{data.name}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {data.description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> 
  {/* Soft black color apply kiya aur hover effect remove karne ke liye same color hover par lagaya */}
  <Button size="lg" className="bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-none"> 
    Try GigThink Free 
  </Button> 
  
  <Button size="lg" variant="outline" className="border-primary/40 text-black"> 
    View Pricing 
  </Button> 
</div>

      </div>
    </section>
  );
}
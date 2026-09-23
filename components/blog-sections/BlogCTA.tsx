import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-headings">
          Ready to Win More Clients?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join GigThink and start building your client acquisition system today. No credit card required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
  {/* Soft black lagaya, background hover freeze kiya, lekin arrow animation ko chalne diya */}
  <Button size="lg" className="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-colors duration-0 group">
    Start Free Trial <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
  </Button>
  
  <Button size="lg" variant="outline" className="border-primary/40 text-black px-8">
    Book a Demo
  </Button>
</div>

      </div>
    </section>
  );
}
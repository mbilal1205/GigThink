// components/careers-sections/CareersHero.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CareersHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function CareersHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CareersHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-white/50">
          {badge}
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-headings">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
  {/* btn-gradient hata kar soft black lagaya aur background flicker free kiya */}
  <Button className="bg-neutral-900 text-white font-semibold px-8 hover:bg-neutral-800 transition-none">
    <Link href="#open-positions">{primaryCta}</Link>
  </Button>
  
  <Button variant="outline" className="border-primary/40 text-black px-8">
    <Link href="#general-application">{secondaryCta}</Link>
  </Button>
</div>

      </div>
    </section>
  );
}
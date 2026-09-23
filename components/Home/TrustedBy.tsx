"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const platforms = [
  { id: 1, name: "Fiverr" },
  { id: 2, name: "Upwork" },
  { id: 3, name: "Freelancer" },
  { id: 4, name: "Guru.com" },
  { id: 5, name: "Behance" },
  { id: 6, name: "Dribbble" },
  { id: 7, name: "Toptal" },
  { id: 8, name: "Contra" },
  { id: 9, name: "Wellfound" },
  { id: 10, name: "Braintrust" },
  { id: 11, name: "Layers" },
  { id: 12, name: "LinkedIn" }
];

export default function TrustedBy() {
  // Premium ultra-smooth crawling animation speed (3000ms delay)
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full py-12 bg-background border-y border-border/40 overflow-hidden select-none">
      <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        
        {/* Left Side: Professional Section Tag */}
        <div className="flex-shrink-0 z-10 bg-background pr-6 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-[1px] after:bg-border/60 hidden lg:block">
          <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground/80 uppercase whitespace-nowrap">
            Integrated With
          </p>
        </div>
        
        {/* Mobile-Friendly Centered Tag */}
        <div className="lg:hidden flex-shrink-0 mb-2">
          <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase">
            Integrated With
          </p>
        </div>

        {/* Right Side: Responsive Pure Text Marquee */}
        <div className="flex-1 w-full relative">
          
          {/* Enhanced Fading Gradients for Smooth Text In/Out Effect */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          <TooltipProvider delay={150}>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4 flex items-center">
                {platforms.map((platform) => (
                  <CarouselItem 
                    key={platform.id} 
                    // Fully responsive grid allocations (3 on mobile, 4 on small screen, 6 on desktop)
                    className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 flex items-center justify-center"
                  >
                    <Tooltip>
                      {/* Interactive block with focus cleanup */}
                      <TooltipTrigger className="group flex items-center justify-center h-12 w-full cursor-pointer bg-transparent border-none outline-none focus:outline-none">
                        
                        {/* 
                          🔥 PURE TEXT PROFESSIONAL BRANDING:
                          - Default: Minimal gray opacity (text-muted-foreground/60)
                          - Hover: High contrast text pop (group-hover:text-foreground)
                          - Scale transition: Fine micro-interaction (hover:scale-105)
                        */}
                        <span className="text-sm sm:text-base font-medium tracking-tight text-muted-foreground/50 transition-all duration-300 group-hover:text-foreground group-hover:scale-105">
                          {platform.name}
                        </span>

                      </TooltipTrigger>
                      <TooltipContent side="top" className="font-medium text-[11px] rounded-md px-2.5 py-1 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border border-neutral-800 shadow-md">
                        <p>Sync with {platform.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
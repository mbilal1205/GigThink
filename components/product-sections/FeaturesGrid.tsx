"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ScanSearch,
  BrainCircuit,
  Gauge,
  FileText,
  Clock,
  ShieldCheck,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ScanSearch,
  BrainCircuit,
  Gauge,
  FileText,
  Clock,
  ShieldCheck,
};

interface FeaturesGridProps {
  data: {
    title: string;
    description?: string;
    items: { icon: string; title: string; description: string }[];
  };
}

export function FeaturesGrid({ data }: FeaturesGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile Swipe Handler
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeIndex < data.items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Depth Glows */}
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 lg:mb-20">
          <Badge
            variant="secondary"
            className="mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium border border-primary/20 bg-primary/5 text-primary"
          >
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-3 md:mb-4">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              {data.description}
            </p>
          )}
        </div>

        {/* --- MOBILE VIEW: Interactive Stacked Overlay Cards --- */}
        <div className="block sm:hidden relative w-full h-[360px] max-w-xs mx-auto">
          <AnimatePresence initial={false}>
            {data.items.map((item, idx) => {
              if (idx < activeIndex) return null; // Passed cards hide ho jayengi

              const Icon = iconMap[item.icon] || FileText;
              const isFront = idx === activeIndex;
              const stackOffset = idx - activeIndex; // Stack depth

              return (
                <motion.div
                  key={idx}
                  className="absolute top-0 left-0 w-full h-full touch-pan-y"
                  style={{ zIndex: data.items.length - idx }}
                  animate={{
                    scale: 1 - stackOffset * 0.05,
                    y: stackOffset * 12,
                    opacity: stackOffset > 2 ? 0 : 1 - stackOffset * 0.2,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                >
                  <Card className="h-full group relative overflow-hidden rounded-2xl glass border-border/50 shadow-xl bg-background/95 backdrop-blur-md">
                    <CardContent className="p-6 flex flex-col justify-between h-full relative z-10">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-primary pt-4 border-t border-border/40">
                        <span>Learn more</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Dynamic Dots / Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6 sm:hidden">
          {data.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* --- DESKTOP VIEW: Standard Responsive Grid --- */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {data.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || FileText;

            return (
              <Card
                key={idx}
                className="group relative overflow-hidden rounded-2xl glass border-border/50 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(0,145,255,0.15)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,145,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <CardContent className="p-6 lg:p-8 relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
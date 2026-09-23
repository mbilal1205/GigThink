"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface UseCaseProps {
  data: {
    title: string;
    description: string;
    flow: string[];
  };
}

export function UseCase({ data }: UseCaseProps) {
  const [activeStep, setActiveStep] = useState(0);
  const DURATION = 4000; // Har step 4 seconds ke liye active rahega

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.flow.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [data.flow.length]);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Flat Background Ambience (No Shadows) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section - Clean & Flat */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary shadow-none"
          >
            Use Case Pipeline
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            {data.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
            {data.description}
          </p>
        </div>

        {/* Unified Auto-Animating Flat Panel */}
        <div className="max-w-5xl mx-auto">
          <div className="border border-border/40 bg-background/40 backdrop-blur-md rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-none overflow-hidden">
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between relative">
              {data.flow.map((step, idx) => {
                const isPast = idx < activeStep;
                const isActive = idx === activeStep;
                
                return (
                  <div 
                    key={idx} 
                    className="relative flex-1 flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-6 group"
                    onClick={() => setActiveStep(idx)} // Manual trigger
                  >
                    {/* --- NODE & LINES WRAPPER --- */}
                    <div className="relative flex-shrink-0 flex items-center justify-center cursor-pointer z-10">
                      
                      {/* Desktop Connection Line (Horizontal) */}
                      {idx < data.flow.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 left-[50%] w-full h-[2px] bg-border/50 -translate-y-1/2 z-0 overflow-hidden">
                          <motion.div
                            className="h-full bg-primary origin-left"
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: isPast ? "100%" : isActive ? "100%" : "0%" 
                            }}
                            transition={{ 
                              duration: isActive ? DURATION / 1000 : 0.3, 
                              ease: isActive ? "linear" : "easeInOut" 
                            }}
                          />
                        </div>
                      )}

                      {/* Mobile Connection Line (Vertical) */}
                      {idx < data.flow.length - 1 && (
                        <div className="md:hidden absolute top-[100%] left-1/2 w-[2px] h-[calc(100%+2rem)] bg-border/50 -translate-x-1/2 z-0 overflow-hidden">
                          <motion.div
                            className="w-full bg-primary origin-top"
                            initial={{ height: "0%" }}
                            animate={{ 
                              height: isPast ? "100%" : isActive ? "100%" : "0%" 
                            }}
                            transition={{ 
                              duration: isActive ? DURATION / 1000 : 0.3, 
                              ease: isActive ? "linear" : "easeInOut" 
                            }}
                          />
                        </div>
                      )}

                      {/* The Node (Circle) - Zero Shadows */}
                      <motion.div
                        className={`relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 shadow-none
                          ${isActive 
                              ? "bg-primary text-primary-foreground scale-110 border-2 border-primary" 
                              : isPast 
                                ? "bg-primary/10 border-2 border-primary text-primary" 
                                : "bg-background border-2 border-border/50 text-muted-foreground group-hover:border-primary/40"
                          }`}
                      >
                        {idx + 1}
                      </motion.div>
                    </div>

                    {/* --- TEXT CONTENT --- */}
                    <div className="flex-1 md:text-center mt-1.5 md:mt-2 md:px-4 cursor-pointer">
                      <p className={`text-base md:text-lg font-medium leading-relaxed transition-all duration-300
                        ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}
                      `}>
                        {step}
                      </p>
                    </div>
                    
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
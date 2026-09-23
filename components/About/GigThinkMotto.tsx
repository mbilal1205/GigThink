"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CalendarDay {
  dayNum: string;
  dayName: string;
}

export default function GigThinkMotto() {
  const days: CalendarDay[] = [
    { dayNum: "10", dayName: "Mon" },
    { dayNum: "11", dayName: "Tue" },
    { dayNum: "12", dayName: "Wed" },
    { dayNum: "13", dayName: "Thurs" },
    { dayNum: "14", dayName: "Fri" },
    { dayNum: "15", dayName: "Sat" },
    { dayNum: "16", dayName: "Sun" },
  ];

  // Infinite auto-cycling state for continuous highlighting from left to right
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % days.length);
    }, 1800); // Shifting every 1.8 seconds infinitely
    return () => clearInterval(interval);
  }, [days.length]);

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-28 lg:py-36 flex flex-col items-center justify-center font-sans antialiased">
      
      {/* Background Brand Glow Effect */}
      <div className="absolute inset-0 hero-glow pointer-events-none opacity-50" />

      {/* 🌟 MOTTO HEADER CONTAINER */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        {/* Kicker Tag */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-primary"
        >
          BUILT FOR FREELANCERS & AGENCIES
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[color:var(--headings)] leading-tight"
        >
          Win back 8+ hours, <span className="heading-gradient">every single week.</span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-muted-foreground font-normal leading-relaxed text-justify sm:text-center"
        >
          Stop wasting hours searching scattered lead boards and writing manual proposals. Let GigThink's unified AI platform automate your workflow so you can close high-paying client deals instantly.
        </motion.p>
      </div>

      {/* 📅 EMBEDDED SIDE-BLENDED CALENDAR STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mt-12 sm:mt-16 w-full max-w-4xl px-4 flex justify-center"
      >
        {/* Side Blending Mask Container (Dissolves edges smoothly into the background) */}
        <div 
          className="w-full overflow-x-auto sm:overflow-visible py-4 px-2 no-scrollbar"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)",
          }}
        >
          <div className="grid grid-cols-7 gap-2 sm:gap-4 w-full min-w-[500px] sm:min-w-0">
            {days.map((item, index) => {
              const isHighlighted = index === activeIndex;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`relative flex flex-col items-center justify-center py-5 sm:py-7 px-1 sm:px-3 rounded-2xl transition-all duration-500 ${
                    isHighlighted
                      ? "bg-primary/10 text-primary border border-primary/30 scale-105 z-30"
                      : "bg-transparent text-muted-foreground/70 hover:text-foreground"
                  }`}
                >
                  {/* Day Number */}
                  <span
                    className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight transition-colors duration-300 ${
                      isHighlighted ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.dayNum}
                  </span>

                  {/* Day Label */}
                  <span
                    className={`mt-1 sm:mt-2 text-[10px] sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isHighlighted ? "text-primary font-extrabold" : "text-muted-foreground/60"
                    }`}
                  >
                    {item.dayName}
                  </span>

                  {/* Active Glow Dot */}
                  {isHighlighted && (
                    <motion.span
                      layoutId="activeGlowDot"
                      className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
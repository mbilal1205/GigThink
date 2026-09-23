"use client";

import React from "react";
import { motion } from "framer-motion";

interface CoreValue {
  title: string;
  tag: string;
  isHeading?: boolean;
}

export default function GigThinkCoreValues() {
  const values: CoreValue[] = [
    {
      title: "Eliminate manual busywork, focus entirely on building.",
      tag: "#AUTOMATE",
    },
    {
      title: "Challenge the norms, push proposal limits with AI.",
      tag: "#GREATNESS",
    },
    {
      title: "Embrace hard engineering, build robust agency solutions.",
      tag: "#RESILIENCY",
    },
    {
      title: "Drive instant deal urgency for high-value clients.",
      tag: "#URGENCY",
    },
    {
      title: "Grow 1% smarter every single day.",
      tag: "#GROWTHMINDSET",
    },
    // Center Heading Card (Spans 2 columns on large screens)
    {
      title: "Our core values",
      tag: "GIGTHINK DNA",
      isHeading: true,
    },
    {
      title: "Be fun to collaborate and scale with.",
      tag: "#FUN",
    },
    {
      title: "Be obsessive in the product and code details.",
      tag: "#PRECISION",
    },
    {
      title: "Stay hungry for high-converting opportunities.",
      tag: "#STAYHUNGRY",
    },
    {
      title: "Deliver the absolute best client acquisition experience.",
      tag: "#EXPERIENCE",
    },
    {
      title: "Say what you mean, ship what you promise.",
      tag: "#INTEGRITY",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-28 lg:py-36 flex flex-col items-center justify-center font-sans antialiased">
      
      {/* Background Brand Glow Effect */}
      <div className="absolute inset-0 hero-glow pointer-events-none opacity-40" />

      {/* 🌟 SECTION HEADER CONTAINER */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center mb-12 sm:mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-primary"
        >
          WHAT DRIVES US
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-[color:var(--headings)]"
        >
          Principles behind <span className="heading-gradient">GigThink.</span>
        </motion.h2>
      </div>

      {/* 🧩 EMBEDDED GRID CONTAINER WITH SIDE BLENDING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-7xl px-4 flex justify-center"
      >
        {/* Side Blending Mask */}
        <div 
          className="w-full overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border/70 rounded-3xl bg-card/30 backdrop-blur-xl overflow-hidden shadow-2xl">
            {values.map((item, index) => {
              if (item.isHeading) {
                // Special Center Core Values Heading Card (spanning 2 columns)
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-1 sm:col-span-2 lg:col-span-2 p-8 sm:p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 via-card to-accent/20 border border-primary/30 relative overflow-hidden group"
                  >
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="relative z-10 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight heading-gradient">
                      Our core values
                    </h3>
                    <span className="relative z-10 mt-3 text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-primary">
                      {item.tag}
                    </span>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "rgba(0, 145, 255, 0.04)" }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 flex flex-col justify-between border-b border-r border-border/60 last:border-r-0 relative group min-h-[180px] sm:min-h-[210px]"
                >
                  {/* Value Statement */}
                  <p className="text-base sm:text-lg font-bold tracking-tight text-[color:var(--headings)] group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </p>

                  {/* Value Tag */}
                  <span className="mt-6 text-xs font-mono font-bold tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">
                    {item.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GigThinkMotto from "./GigThinkMotto";

interface GigThinkMissionProps {
  /** Subheading below the media */
  subheading?: string;
  /** Body paragraph text */
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
  /** Image shown blended into the background */
  mediaSrc?: string;
  /** Optional video instead of image — takes priority over mediaSrc when provided */
  videoSrc?: string;
  /** Alt text for the image */
  mediaAlt?: string;
  /** Extra information or components to add below the paragraph */
  children?: React.ReactNode;
}

export default function GigThinkMission({
  subheading = "Empowering Professionals to Win More Clients with AI.",
  paragraph1 = "GigThink was created with one clear mission: eliminate the repetitive work that slows down freelancers, agencies, and technical professionals. Every day, talented people lose valuable hours searching multiple platforms, filtering irrelevant opportunities, researching clients, and writing proposals from scratch. We believe their expertise should be invested in building exceptional solutions—not chasing the next project.",
  paragraph2 = "Our platform combines real-time lead intelligence, advanced AI analysis, and intelligent proposal generation into one seamless workflow. GigThink continuously discovers high-quality opportunities, understands the client's actual business challenges, matches them with your expertise, and generates personalized, high-converting proposals in minutes. Instead of managing disconnected tools, users experience one unified AI-powered workspace built for growth.",
  paragraph3 = "Beyond automation, GigThink is designed to become a strategic business partner. It helps professionals identify better opportunities, prioritize high-value clients, optimize proposal quality, and make smarter business decisions through data-driven insights. Every recommendation is built to increase efficiency, improve conversion rates, and create a more predictable client acquisition process.",
  paragraph4 = "Our long-term vision is to redefine how freelance businesses grow in the AI era. We envision a future where discovering opportunities, understanding client needs, creating winning proposals, and scaling revenue happen through intelligent automation. GigThink exists to give every freelancer, agency, and software team the competitive advantage needed to grow faster, work smarter, and focus on what truly matters—delivering outstanding results for their clients.",
  mediaSrc = "/images/mission-mountain.png",
  videoSrc = "/videos/hero-smoke-bg.mp4",
  mediaAlt = "GigThink mission",
  children,
}: GigThinkMissionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-24 lg:py-32 flex flex-col items-center justify-center">
      
      {/* 🏔️ TOP VISUAL STACK: FLOATING SMOKE MEDIA */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-4">
        
        {/* CENTER SMOKE MEDIA CONTAINER */}
        <div className="relative z-10 w-full max-w-4xl h-[280px] sm:h-[420px] md:h-[500px] lg:h-[560px] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full flex items-center justify-center"
            style={{
              /* Feathered Elliptical Mask */
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 75% at 50% 50%, #000 25%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.15) 80%, transparent 95%)",
              maskImage:
                "radial-gradient(ellipse 85% 75% at 50% 50%, #000 25%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.15) 80%, transparent 95%)",
            }}
          >
            {videoSrc ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-center scale-[0.85] sm:scale-100"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={mediaSrc}
                alt={mediaAlt}
                fill
                className="object-contain object-center scale-[0.85] sm:scale-100"
                priority
              />
            )}
          </motion.div>

          {/* Double Layer Linear Soft Edge Shields */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-background via-background/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-28 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background via-background/60 to-transparent" />
        </div>

      </div>

      {/* 📝 BOTTOM SECTION: SUBHEADING, PARAGRAPH & EXTRA INFO */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 text-center -mt-2 sm:-mt-6 lg:-mt-10">
        
        {/* Sub-heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
        >
          {subheading}
        </motion.h2>

        {/* Paragraphs with text-justify */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground font-normal text-justify"
        >
          {paragraph1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground font-normal text-justify"
        >
          {paragraph2}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground font-normal text-justify"
        >
          {paragraph3}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground font-normal text-justify"
        >
          {paragraph4}
        </motion.p>
        
        {/* Extra info container */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
      
     <GigThinkMotto/>

    </section>
  );
}
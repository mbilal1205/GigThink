'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// 20 top freelance & expert network brands
const TRUSTED_BRANDS = [
  'Upwork Enterprise',
  'Toptal',
  'Turing.com',
  'Fiverr Pro',
  'Gigster',
  'Malt',
  'Freelancer.com',
  'PeoplePerHour',
  'Guru',
  '99designs',
  'Catalant',
  'Business Talent Group',
  'GLG',
  'Guidepoint',
  'Third Bridge',
  'AlphaSights',
  'Expert360',
  'Maven',
  'Kolabtree',
  'Contra',
];

export default function HeroSection() {
  const videoUrl = '/your-app-working.mp4';

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative w-full h-screen max-h-[100dvh] bg-background text-foreground overflow-hidden flex flex-col justify-between items-center pt-2 pb-2 px-3 sm:px-6 lg:px-8 font-sans select-none  md:top-0 top-15">
        {/* ───── TOP CONTENT ───── */}
        <div className="text-center max-w-4xl mx-auto z-10 flex flex-col items-center justify-center pt-10">
          <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.25em] text-[color:var(--primary)] uppercase mb-1">
            Maximize Collective Intelligence
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-1 sm:mb-2 leading-[1.1]">
            We are <span className="heading-gradient">GigThink.</span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-[color:var(--muted-foreground)] mb-2 sm:mb-3 max-w-xl mx-auto leading-relaxed font-normal px-2">
            The convergence of expert networks, AI, and on‑demand professional expertise.
          </p>

          {/* Primary Button */}
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-black text-white rounded-xl px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-800 active:scale-[0.98] absolute md:top-53 top-45">
              <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform duration-200" />
              <span>Learn more about us</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[850px] p-0 bg-black border border-gray-800 shadow-2xl rounded-2xl overflow-hidden">
              <DialogHeader className="sr-only">
                <DialogTitle>GigThink Overview Video</DialogTitle>
              </DialogHeader>
              <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-2xl border-0"
                  src={videoUrl}
                  title="GigThink Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* ───── CENTER IMAGE (FULLY UPSCALED & BADA SIZE) ───── */}
        <div
          className="relative w-full max-w-[1600px] mx-auto z-0 flex justify-center items-center my-auto px-2 bottom-30 md:bottom-0"
          onContextMenu={handleContextMenu}
        >
          {/* Enhanced Background Glow */}
          <div
            className="absolute inset-0 max-w-5xl mx-auto blur-[100px] sm:blur-[150px] pointer-events-none -z-10 rounded-full"
            style={{
              background:
                'radial-gradient(circle at center, rgba(0, 145, 255, 0.38) 0%, rgba(207, 207, 207, 0.15) 55%, transparent 85%)',
            }}
          />

          {/* Masked Image Container (Height & Scale Upscaled) */}
          <div
            className="relative w-full h-[45vh] sm:h-[55vh] md:h-[62vh] max-w-[1600px] mx-auto overflow-hidden flex items-center justify-center"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 70%, transparent 98%)',
              maskImage:
                'radial-gradient(ellipse at center, black 70%, transparent 98%)',
            }}
          >
            {/* Anti-save protection layer */}
            <div className="absolute inset-0 z-30 cursor-default" />
            
            <Image
              src="/images/gigthink-about.png"
              alt="GigThink Architecture Nodes"
              fill
              draggable={false}
              className="object-contain pointer-events-none select-none scale-[1.25] sm:scale-[1.35] md:scale-[1.25] transition-transform duration-700"
              priority
            />
          </div>

          {/* Edge Smoky Fades */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background opacity-60 sm:opacity-40 z-10" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background opacity-60 sm:opacity-40 z-10" />
        </div>

        {/* ───── BOTTOM TRUSTED BY (Infinite Marquee) ───── */}
        <div className="w-full max-w-6xl mx-auto text-center border-t border-[color:var(--border)] pt-2 pb-1 z-10 relative md:bottom-20 bottom-70">
          <p className="text-[10px] sm:text-xs font-semibold text-[color:var(--muted-foreground)] tracking-[0.2em] uppercase mb-1.5 sm:mb-2 md:hidden ">
            Trusted by top expert networks & talent ecosystems
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
              {TRUSTED_BRANDS.map((brand, i) => (
                <span
                  key={`a-${i}`}
                  className="text-xs sm:text-sm md:text-base font-bold text-emerald-600 mx-4 sm:mx-6 md:mx-8 opacity-65 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {brand}
                </span>
              ))}
              {TRUSTED_BRANDS.map((brand, i) => (
                <span
                  key={`b-${i}`}
                  className="text-xs sm:text-sm md:text-base font-bold text-emerald-600 mx-4 sm:mx-6 md:mx-8 opacity-65 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
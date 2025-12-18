"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui";
import { NexgeglLogo } from "./Logo";
import { LogoCore } from "./VisualComponents";
import { HERO_TAG_KEYS } from "../../constants/hero-tages";
import { Dictionary } from "../dictionaries/types";

export default function Hero({
  lang,
  dict,
}: {
  lang: "en" | "ar";
  dict: Dictionary;
}) {
  const [offset, setOffset] = useState(0);

  // --- Scroll Listener ---
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setOffset(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-[-10%] w-[120%] h-[120%] bg-navy-950 transition-transform duration-75 ease-linear will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(4deg) scale(1.05) translateY(${
              offset * 0.15
            }px)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2000&auto=format&fit=crop"
            alt="Saudi Flag"
            className="absolute inset-0 w-full h-full object-cover opacity-90 saturate-125 brightness-90"
          />

          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2560&auto=format&fit=crop"
            alt="Tech Network"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen saturate-150"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/60 to-navy-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>

        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-hero-glow z-0 pointer-events-none animate-pulse opacity-60"
        style={{ animationDuration: "8s" }}
      />

      {/* Watermark Logo */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.06] pointer-events-none select-none transition-transform duration-75 ease-linear will-change-transform"
        style={{ transform: `translateY(${offset * 0.08}px) translateX(25%)` }}
      >
        <NexgeglLogo iconOnly className="w-[800px] h-[800px]" />
      </div>

      {/* Scanning Beam */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-overlay transition-transform duration-75 ease-linear"
        style={{ transform: `translateY(${offset * 0.25}px)` }}
      >
        <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-gold-500/10 to-transparent skew-x-12 animate-scan-beam" />
      </div>

      {/* Floating Particles */}
      <div
        className="absolute inset-0 z-0 pointer-events-none duration-75 ease-linear"
        style={{ transform: `translateY(${-offset * 0.1}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-500/40 rounded-full blur-[2px] animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-gold-500/20 rounded-full blur-[1px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute bottom-10 left-10 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
      </div>

      {/* Main Grid */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center transition-transform duration-75 ease-linear will-change-transform"
        style={{ transform: `translateY(${-offset * 0.05}px)` }}
      >
        {/* Left Column */}
        <div className="text-start order-2 lg:order-1">
          {/* Branding */}
          <div className="mb-6 opacity-0 animate-fade-in-up flex items-center gap-3">
            <div className="w-12 h-[1px] bg-gold-500" />
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-md">
              {dict.hero.branding}
            </span>
          </div>

          {/* Titles */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-2xl">
            <span className="opacity-0 animate-fade-in-up delay-100 block">
              {dict.hero.title.line1}
            </span>
            <span className="text-gradient-gold delay-200 block">
              {dict.hero.title.highlight}
            </span>
            <span className="opacity-0 animate-fade-in-up delay-300 block mt-2 text-2xl md:text-3xl text-gray-200 font-light">
              {dict.hero.title.line2}
            </span>
          </h1>

          {/* Description */}
          <div className="opacity-0 animate-fade-in-up delay-500 space-y-4 mb-10">
            <p className="text-lg text-gray-100 max-w-xl leading-relaxed font-semibold drop-shadow-lg">
              {dict.hero.description.main}
            </p>

            <p className="text-sm text-gray-300 max-w-lg leading-relaxed font-semibold">
              {dict.hero.description.sub}
            </p>
          </div>

          {/* Protocol Tags */}
          <div className="flex flex-wrap gap-4 mb-10 opacity-0 animate-fade-in-up delay-500">
            <span className="px-4 py-2 bg-red-950/60 border border-red-500/50 rounded text-red-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              {dict.hero.protocols.kill}
            </span>

            <span className="px-4 py-2 bg-blue-950/60 border border-blue-500/50 rounded text-blue-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              {dict.hero.protocols.fix}
            </span>

            <span className="px-4 py-2 bg-green-950/60 border border-green-500/50 rounded text-green-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {dict.hero.protocols.scale}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up delay-700">
            <Button
              variant="primary"
              className="w-full sm:w-auto flex items-center gap-2 group relative overflow-hidden shadow-[0_0_20px_rgba(181,156,92,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {dict.hero.buttons.enter}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto hover:bg-gold-500/10 bg-navy-950/50 border-gold-500/50 text-gold-300 backdrop-blur-md"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {dict.hero.buttons.experience}
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex order-1 lg:order-2 justify-center lg:justify-end animate-fade-in-up delay-300 relative overflow-visible">
          <div className="relative will-change-transform">
            <LogoCore />
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {HERO_TAG_KEYS.map((key, i) => {
              const positions = [
                "top-0 left-10",
                "top-20 right-0",
                "bottom-20 left-0",
                "bottom-0 right-10",
                "top-1/2 -right-10",
              ];

              return (
                <div
                  key={key}
                  className={`absolute ${positions[i]} hidden md:block`}
                >
                  <div
                    className="animate-float will-change-transform"
                    style={{
                      animationDelay: `${i * 1.5}s`,
                      animationDuration: "5s",
                    }}
                  >
                    <span
                      className="
                        text-[10px] font-mono text-gold-300
                        bg-navy-900/80 border border-gold-500/40
                        px-3 py-1 rounded backdrop-blur-md shadow-lg
                      "
                    >
                      {dict.hero.tags[key]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/5  flex-col items-center gap-2 opacity-70 animate-bounce-slow">
        <span className="text-[10px] text-gray-300 uppercase tracking-widest">
          {dict.hero.scroll}
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold-500 to-transparent" />
      </div>
    </div>
  );
}

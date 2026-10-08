"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#060e0a]">
      {/* High-Tech Background Image with Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      
      {/* Gradient & Dark Vignette Overlays for Maximum Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#06140d]/75 to-[#050c08]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/30 via-black/60 to-black/90 pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtitle location */}
        <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-400 mb-4 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-950/50">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>from Nairobi, Kenya.</span>
        </div>

        {/* Pill Badge */}
        <div className="block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
            Technology Solutions Built For Growing Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] font-display max-w-4xl mx-auto mb-6 drop-shadow-md">
          WE BUILD TECHNOLOGY THAT{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-200">
            MOVES YOUR BUSINESS FORWARD.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal mb-10 drop-shadow">
          From professional websites to custom business systems,{" "}
          <strong className="text-white font-semibold">PICNIC TECHNOLOGIES</strong> creates digital
          solutions designed around the way your business works.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/contact?type=project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-700/40 hover:shadow-emerald-600/60 hover:-translate-y-0.5 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base transition-all duration-200 border border-white/20 hover:border-white/40 hover:-translate-y-0.5 shadow-lg"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>

        {/* Metric Callouts */}
        <div className="pt-8 border-t border-emerald-500/20 grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-white block drop-shadow">
              50+
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-emerald-400 uppercase font-mono mt-1">
              PROJECTS DELIVERED
            </p>
          </div>
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-white block drop-shadow">
              2024
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-emerald-400 uppercase font-mono mt-1">
              FOUNDED
            </p>
          </div>
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-white block drop-shadow">
              Nairobi
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-emerald-400 uppercase font-mono mt-1">
              BASED IN KENYA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



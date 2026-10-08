"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Sparkles, MapPin } from "lucide-react";
import TechVisual from "./TechVisual";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-white dark:bg-[#090e17] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtitle location in green like the screenshot */}
        <div className="text-center lg:text-left mb-3">
          <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#15803d] dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-[#15803d] dark:bg-emerald-400 animate-pulse"></span>
            from Nairobi, Kenya.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs sm:text-sm font-semibold">
              <span>Technology Solutions Built For Growing Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[1.08] font-display">
              WE BUILD TECHNOLOGY THAT{" "}
              <span className="text-[#15803d] dark:text-emerald-400">
                MOVES YOUR BUSINESS FORWARD.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              From professional websites to custom business systems,{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">PICNIC TECHNOLOGIES</strong> creates digital
              solutions designed around the way your business works.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/contact?type=project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base transition-all duration-200 shadow-md shadow-green-800/20 hover:shadow-lg group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-base transition-all duration-200 border border-slate-200 dark:border-slate-700"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Metric Callout exact style from reference screenshot */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white block">
                  50+
                </span>
                <p className="text-[11px] font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
                  PROJECTS DELIVERED
                </p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white block">
                  2024
                </span>
                <p className="text-[11px] font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
                  FOUNDED
                </p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-900 dark:text-white block">
                  Nairobi
                </span>
                <p className="text-[11px] font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
                  BASED IN KENYA
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Modern Technology Visual */}
          <div className="lg:col-span-5 w-full">
            <TechVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

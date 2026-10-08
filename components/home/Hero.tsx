"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-[#090e17] transition-colors overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subtitle location in green */}
        <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#15803d] dark:text-emerald-400 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] dark:bg-emerald-400 animate-pulse"></span>
          from Nairobi, Kenya.
        </div>

        {/* Pill Badge */}
        <div className="block mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs sm:text-sm font-semibold">
            Technology Solutions Built For Growing Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[1.08] font-display max-w-4xl mx-auto mb-6">
          WE BUILD TECHNOLOGY THAT{" "}
          <span className="text-[#15803d] dark:text-emerald-400">
            MOVES YOUR BUSINESS FORWARD.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal mb-8">
          From professional websites to custom business systems,{" "}
          <strong className="text-slate-900 dark:text-white font-semibold">PICNIC TECHNOLOGIES</strong> creates digital
          solutions designed around the way your business works.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact?type=project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base transition-all duration-200 shadow-md shadow-green-800/20 hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-base transition-all duration-200 border border-slate-200 dark:border-slate-700"
          >
            <span>Explore Our Work</span>
          </Link>
        </div>

        {/* Metric Callouts */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white block">
              50+
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
              PROJECTS DELIVERED
            </p>
          </div>
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white block">
              2024
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
              FOUNDED
            </p>
          </div>
          <div>
            <span className="text-3xl sm:text-5xl font-black font-display text-slate-900 dark:text-white block">
              Nairobi
            </span>
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-[#6366f1] dark:text-indigo-400 uppercase font-mono mt-1">
              BASED IN KENYA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


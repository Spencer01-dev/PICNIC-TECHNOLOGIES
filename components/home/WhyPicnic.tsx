"use client";

import React from "react";
import { 
  Puzzle, 
  Zap, 
  Target, 
  Headphones, 
  Check 
} from "lucide-react";

export default function WhyPicnic() {
  const advantages = [
    {
      title: "Custom-Built",
      tagline: "Tailored to Your Exact Workflow",
      description:
        "We don't believe every business should use the same generic solution. We construct software tailored to your specific operations, workflows, and growth targets.",
      icon: Puzzle,
      highlight: "Zero Cookie-Cutter Templates",
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      cardBorder: "border-[#bbf7d0] dark:border-emerald-900/60",
      titleColor: "text-[#15803d] dark:text-emerald-400",
      iconColor: "bg-emerald-100 text-[#15803d]",
    },
    {
      title: "Modern",
      tagline: "High-Performance Tech Stack",
      description:
        "We use modern technologies (Next.js, FastAPI, Supabase, Cloudflare Edge) to create fast, responsive, and scalable systems built for high reliability.",
      icon: Zap,
      highlight: "Speed, Security & Scale",
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      cardBorder: "border-[#bfdbfe] dark:border-blue-900/60",
      titleColor: "text-[#1e40af] dark:text-blue-400",
      iconColor: "bg-blue-100 text-[#1e40af]",
    },
    {
      title: "Business-Focused",
      tagline: "ROI & Operational Value First",
      description:
        "We focus on solving actual business problems—not simply writing code. Every line of engineering serves to automate tasks, eliminate revenue leakage, or drive sales.",
      icon: Target,
      highlight: "Pragmatic Business Results",
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      cardBorder: "border-[#fed7aa] dark:border-amber-900/60",
      titleColor: "text-[#9a3412] dark:text-amber-400",
      iconColor: "bg-amber-100 text-[#9a3412]",
    },
    {
      title: "Long-Term Support",
      tagline: "Your Ongoing Technology Partner",
      description:
        "We can continue supporting and improving your system after launch. We handle security updates, server monitoring, backups, and feature enhancements.",
      icon: Headphones,
      highlight: "Continuous Post-Launch Care",
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      cardBorder: "border-[#bbf7d0] dark:border-emerald-900/60",
      titleColor: "text-[#15803d] dark:text-emerald-400",
      iconColor: "bg-emerald-100 text-[#15803d]",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070b15] relative transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase mb-3 font-bold">
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Technology built around{" "}
            <span className="text-[#15803d] dark:text-emerald-400">
              your business.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-4">
            Why discerning companies choose PICNIC TECHNOLOGIES as their digital engineering partner.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`p-6 sm:p-7 rounded-3xl ${adv.cardBg} border ${adv.cardBorder} flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${adv.iconColor} flex items-center justify-center font-bold`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                  </div>

                  <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 font-bold ${adv.titleColor}`}>
                    {adv.highlight}
                  </span>

                  <h3 className={`text-xl font-black font-display mb-1 ${adv.titleColor}`}>
                    {adv.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-3">
                    {adv.tagline}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/10 flex items-center gap-2 text-[#15803d] dark:text-emerald-400 text-xs font-mono font-bold">
                  <Check className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

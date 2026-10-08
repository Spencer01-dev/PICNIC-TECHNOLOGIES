"use client";

import React from "react";
import { 
  Search, 
  Map, 
  Palette, 
  Code, 
  CheckCircle, 
  Rocket,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      summary: "We understand your business, goals and requirements.",
      details: "In-depth consultation to map existing business bottlenecks, user personas, and target outcomes.",
      icon: Search,
    },
    {
      num: "02",
      name: "Plan",
      summary: "We define the features, technology and project scope.",
      details: "Detailed architecture design, tech stack selection, milestone schedule, and fixed deliverables.",
      icon: Map,
    },
    {
      num: "03",
      name: "Design",
      summary: "We create the interface and user experience.",
      details: "High-fidelity modern UI prototypes and frictionless user flows aligned with your brand positioning.",
      icon: Palette,
    },
    {
      num: "04",
      name: "Build",
      summary: "Our developers turn the design into a functional system.",
      details: "Clean, robust engineering with Next.js, API integrations, automated tests, and secure data layers.",
      icon: Code,
    },
    {
      num: "05",
      name: "Test",
      summary: "We test functionality, responsiveness and security.",
      details: "Thorough multi-device quality assurance, stress testing, speed optimization, and penetration checks.",
      icon: CheckCircle,
    },
    {
      num: "06",
      name: "Launch",
      summary: "Your solution goes live and we provide ongoing support.",
      details: "Seamless production deployment, staff onboarding, server monitoring, and continuous iteration.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#060911] transition-colors border-t border-slate-200 dark:border-slate-800" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase mb-3 font-bold">
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            How We Turn Ideas Into{" "}
            <span className="text-[#15803d] dark:text-emerald-400">
              Live Systems
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-4">
            A disciplined six-stage development framework ensuring predictability, high code quality, and on-time delivery.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#0a101f] border border-slate-200 dark:border-slate-800 hover:border-[#15803d] dark:hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-[#15803d] dark:text-emerald-400">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2 group-hover:text-[#15803d] dark:group-hover:text-emerald-400 transition-colors">
                    {step.name}
                  </h3>

                  <p className="text-slate-800 dark:text-slate-200 text-sm font-semibold mb-3">
                    {step.summary}
                  </p>

                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {step.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PHASE {step.num}</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-bold">→ Next Stage</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#15803d] dark:bg-[#0d1628] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-green-900/10">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Ready to begin Stage 01 (Discover)?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 dark:text-slate-300">
              Schedule a discovery session to scope your requirements and receive a detailed project roadmap.
            </p>
          </div>
          <Link
            href="/contact?type=quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#15803d] hover:bg-emerald-50 font-bold text-sm shrink-0 shadow-md"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

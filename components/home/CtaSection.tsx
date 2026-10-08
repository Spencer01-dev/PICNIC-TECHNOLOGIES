"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, Zap } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#04060c] transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white dark:bg-[#0d1527] border border-slate-200 dark:border-emerald-500/30 p-8 sm:p-14 lg:p-16 text-center shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
          {/* Pill Accent */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase mb-6 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse"></span>
            <span>Now Accepting Q2/Q3 Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-display max-w-3xl mx-auto leading-tight">
            Have a project in mind?{" "}
            <span className="text-[#15803d] dark:text-emerald-400">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            From modern websites to complex business platforms and telecom management, PICNIC TECHNOLOGIES delivers robust systems built around your operational needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact?type=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-extrabold text-base transition-all duration-200 shadow-lg shadow-green-800/20 hover:shadow-xl"
            >
              <span>Get a Detailed Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="https://wa.me/254706656544?text=Hello%20PICNIC%20TECHNOLOGIES%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base transition-all duration-200 border border-slate-200 dark:border-slate-800"
            >
              <MessageSquare className="w-5 h-5 text-[#15803d] dark:text-emerald-400" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>

          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-slate-100 dark:border-slate-800 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
              <Clock className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Fast 24hr Proposal Turnaround</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Milestone-Based Escrow Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
              <Zap className="w-4 h-4 text-[#15803d] shrink-0" />
              <span>Clean Code & Direct Source Handover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

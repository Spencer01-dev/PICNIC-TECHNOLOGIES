import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — PICNIC TECHNOLOGIES",
  description: "Terms and conditions governing technology services, deliverables, milestones, and warranties provided by PICNIC TECHNOLOGIES.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#15803d] dark:text-emerald-400 font-bold hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <span className="text-xs font-mono text-[#15803d] dark:text-emerald-400 uppercase tracking-widest block font-bold">
              COMMERCIAL TERMS
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Effective Date: March 2026 • PICNIC TECHNOLOGIES
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">1. Engagement & Project Scope</h2>
              <p>
                All software engineering, website development, ISP platforms, mobile apps, and integration contracts undertaken by PICNIC TECHNOLOGIES operate on agreed Statements of Work (SOW) outlining defined milestones, deliverables, tech stacks, and delivery timelines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">2. Intellectual Property & Source Code Ownership</h2>
              <p>
                Upon final payment of the contracted project amount, the client receives full ownership rights to custom source code, schemas, and assets created specifically for their bespoke implementation.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">3. Milestone Payments & Escrow</h2>
              <p>
                Projects are structured around milestone installments (Discovery, Prototype Approval, Development Phase, and Final Launch Handover). Work advances upon confirmation of preceding milestone fulfillment.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">4. Warranty & Support</h2>
              <p>
                PICNIC TECHNOLOGIES provides a standard 30-day post-launch warranty covering bug fixes and defect resolution within the original agreed scope.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

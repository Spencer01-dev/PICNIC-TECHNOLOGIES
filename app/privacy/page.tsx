import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — PICNIC TECHNOLOGIES",
  description: "PICNIC TECHNOLOGIES privacy policy regarding client data, NDA protections, and security.",
};

export default function PrivacyPage() {
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
              LEGAL & DATA PROTECTION
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Effective Date: March 2026 • PICNIC TECHNOLOGIES
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">1. Information We Collect</h2>
              <p>
                When you interact with PICNIC TECHNOLOGIES via our website, inquiry forms, direct messaging, or service contracts, we collect information required to evaluate, scope, and fulfill technology engineering services. This includes contact details and project specifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">2. Confidentiality & Code Security</h2>
              <p>
                We maintain strict non-disclosure obligations. We never sell, rent, or trade client commercial secrets, proprietary source code, or subscriber data to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">3. Contacting Our Compliance Desk</h2>
              <p className="font-mono text-[#15803d] dark:text-emerald-400 font-bold">
                picnictechnologies2@gmail.com • Subject: Data Privacy Inquiry
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CtaButton from "@/components/ui/CtaButton";

interface ProjectItem {
  id: string;
  name: string;
  category: "all" | "saas" | "telecom" | "erp" | "commerce";
  badge: string;
  summary: string;
  solution: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "saas" | "telecom" | "erp" | "commerce">("all");

  const portfolio: ProjectItem[] = [
    {
      id: "careflow-healthcare",
      name: "CareFlow Healthcare Operating System",
      category: "erp",
      badge: "Healthcare Platform & EMR",
      summary: "Enterprise-grade cloud healthcare operating system managing patient EMR, doctor queues, laboratory diagnostics, pharmacy inventory, and insurance billing.",
      solution: "Centralizes hospital operations onto an encrypted, role-secured platform. Coordinates patient intake, vitals triage, doctor SOAP notes, electronic prescriptions, lab test workflows, and split insurance/M-Pesa billing.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "EMR Engine", "Audit Logs", "Data Protection Compliant"],
      features: [
        "Electronic Medical Records (EMR) with strict patient confidentiality",
        "Pharmacy batch inventory tracking with expiry warning alerts",
        "Lab test results publishing & direct patient SMS notification",
        "Split cash and health insurance invoicing reconciler",
      ],
      metrics: [
        { label: "Daily Consultations", value: "1,200+" },
        { label: "Wait Time Cut", value: "45%" },
        { label: "Inventory Accuracy", value: "99.8%" },
      ],
      liveUrl: "https://careflow-five-theta.vercel.app/",
    },
    {
      id: "smartpay-payroll",
      name: "SmartPay Global - Payroll & Workforce SaaS",
      category: "saas",
      badge: "Fintech & Payroll SaaS",
      summary: "Modern cloud payroll and workforce SaaS platform automating multi-tier salary calculations, statutory deductions (PAYE, NSSF, SHIF/NHIF), and employee self-service.",
      solution: "Engineered automated Kenyan statutory tax calculations, instant batch payroll runs, digital payslip generation, and real-time M-Pesa B2C and bank salary disbursements.",
      tech: ["React", "FastAPI / Node.js", "PostgreSQL", "M-Pesa B2C", "Tax Compliance Engine"],
      features: [
        "1-click bulk salary disbursement via M-Pesa B2C and bank API rails",
        "Automated statutory deductions (PAYE, NSSF, SHIF) with exportable filing sheets",
        "Employee self-service portal for payslips, leave requests, and P9 forms",
        "Department cost-center reporting and multi-branch payroll reconciliation",
      ],
      metrics: [
        { label: "Payroll Processing", value: "<15s" },
        { label: "Disbursement SLA", value: "99.9%" },
        { label: "Tax Compliance", value: "100%" },
      ],
      liveUrl: "https://smartpay-ke.vercel.app/",
    },
    {
      id: "vera-beauty-parlour",
      name: "Vera Glow Parlour & Luxury Salon App",
      category: "commerce",
      badge: "Salon Booking & E-Commerce",
      summary: "Nairobi's premier luxury beauty parlour, hair salon, spa booking platform, and authentic cosmetic shop with online appointment scheduling.",
      solution: "Delivers an elegant, high-converting digital storefront combining real-time stylist calendar scheduling, treatment catalogs, mobile checkout, and cosmetic product sales.",
      tech: ["React", "Vite", "Tailwind CSS", "M-Pesa Express", "Appointment Engine"],
      features: [
        "Live stylist booking calendar with real-time time-slot availability",
        "Integrated cosmetic boutique with cart, checkout, and inventory sync",
        "Automated SMS & WhatsApp appointment confirmation and reminders",
        "Customer loyalty profiles with treatment histories and preferred stylists",
      ],
      metrics: [
        { label: "Booking Speed", value: "<45s" },
        { label: "Online Conversion", value: "+38%" },
        { label: "Repeat Client Rate", value: "85%" },
      ],
      liveUrl: "https://vera-beauty-parlour-app.vercel.app/",
    },
    {
      id: "dev-nesh-portfolio",
      name: "Dev Nesh | Lead Architect Portfolio",
      category: "saas",
      badge: "Engineering Showcase",
      summary: "The interactive technical portfolio and engineering platform for Oscar Munene (Dev Nesh), Founder and Lead Software Architect at PICNIC TECHNOLOGIES.",
      solution: "Engineered high-performance web platform featuring live production system showcases, FastAPI/React architecture demos, responsive interactive UI, and direct consultation booking.",
      tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "Fullstack Architecture", "Vercel Edge"],
      features: [
        "Interactive engineering showcase highlighting fullstack & telecom systems",
        "Detailed architecture breakdowns for FastAPI, MikroTik, and M-Pesa projects",
        "Ultra-lightweight responsive UI optimized for sub-second page loads",
        "Direct architectural consultation and engineering intake booking",
      ],
      metrics: [
        { label: "Lighthouse Performance", value: "99/100" },
        { label: "Page Load Latency", value: "<300ms" },
        { label: "Engineering Reach", value: "Global" },
      ],
      liveUrl: "https://my-portfolio-plum-seven-0she01n1vt.vercel.app/",
    },
    {
      id: "my-net-isp",
      name: "My Net ISP",
      category: "telecom",
      badge: "Telecom & ISP Operations",
      summary: "An ISP management platform designed to help internet service providers manage customers, packages, payments, complaints, employees and network operations.",
      solution: "Bridges MikroTik RouterOS API directly with Safaricom M-Pesa Daraja automation. Automatically provisions PPPoE accounts, disconnects expired subscriptions, and dispatches field maintenance tickets.",
      tech: ["Next.js", "FastAPI", "Supabase", "M-Pesa Daraja", "MikroTik", "AI"],
      features: [
        "Direct MikroTik RouterOS PPPoE & Hotspot automated provisioning",
        "M-Pesa automated billing & instant reconnect upon payment",
        "Field staff dispatch, ticket tracking & customer portal",
        "AI-assisted network outage alerts & bulk client SMS broadcasts",
      ],
      metrics: [
        { label: "Subscribers Active", value: "12,000+" },
        { label: "Billing Automation", value: "100%" },
        { label: "MikroTik Sync Latency", value: "180ms" },
      ],
      liveUrl: "https://isp-my-net-vkvs.vercel.app/",
    },
    {
      id: "alpha-analysis-tool",
      name: "AlphaDollars & Analysis Scanner Tool",
      category: "saas",
      badge: "Trading Bot & Analytics SaaS",
      summary: "A high-fidelity trading bot platform, advanced digit pro scanner, and real-time market telemetry system modeled for modern algorithmic traders.",
      solution: "Engineered real-time market digit scanning algorithms, instant signal generation, automated trader onboarding with multi-channel checkout (M-Pesa, PayPal, Binance Crypto), and WhatsApp alert webhooks.",
      tech: ["Next.js", "TypeScript", "WebSocket Feeds", "M-Pesa API", "Crypto/Binance", "PayPal", "Tailwind CSS"],
      features: [
        "High-speed market digit pro scanner with real-time volatility tracking",
        "Multi-channel instant payment processing (M-Pesa, PayPal, Binance Pay)",
        "Automated trader onboarding with WhatsApp credential dispatch",
        "Real-time trading signal telemetry and risk management parameters",
      ],
      metrics: [
        { label: "Active Traders", value: "100+" },
        { label: "Scan Execution", value: "<80ms" },
        { label: "Signal Reliability", value: "99.4%" },
      ],
      liveUrl: "https://alpha-analysis-tool.vercel.app/",
    },
    {
      id: "socialpulse-smm",
      name: "SocialPulse SMM",
      category: "saas",
      badge: "SaaS Reseller Platform",
      summary: "A social media marketing reseller platform designed to allow customers and resellers to purchase social media services through an automated platform.",
      solution: "Engineered high-throughput asynchronous order queueing with FastAPI and Next.js. Integrates 15+ external API provider routing with real-time balance checks, automated fallback, and instant webhook fulfillment.",
      tech: ["Next.js", "FastAPI", "PostgreSQL/Supabase", "API Integration", "Payments"],
      features: [
        "Automated API Provider routing with intelligent failover",
        "Reseller wallet balance & instant deposit processing",
        "Tiered discount rates for high-volume accounts",
        "Real-time order telemetry & webhook notifications",
      ],
      metrics: [
        { label: "Orders Fulfilled", value: "250,000+" },
        { label: "Execution Speed", value: "<1.2s" },
        { label: "Platform Uptime", value: "99.98%" },
      ],
      liveUrl: "https://socialpulsesmm.com",
    },
  ];

  const filteredProjects = filter === "all" 
    ? portfolio 
    : portfolio.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      {/* Backwards-compatibility anchor for mediflow-clinic */}
      <div id="mediflow-clinic" className="sr-only" aria-hidden="true" />

      {/* Header */}
      <PageHeader
        badge="Portfolio & Case Studies"
        title="Engineered Systems In"
        titleAccent="Active Production"
        subtitle="Explore live digital platforms, telecom operations suites, and custom enterprise software architected by PICNIC TECHNOLOGIES."
      >
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8">
          {[
            { id: "all", label: "All Systems" },
            { id: "telecom", label: "Telecom & ISP" },
            { id: "saas", label: "SaaS Platforms" },
            { id: "erp", label: "Enterprise & Institutional ERPs" },
            { id: "commerce", label: "E-Commerce" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === btn.id
                  ? "bg-[#15803d] text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </PageHeader>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            id={proj.id}
            className="scroll-mt-28 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-300 font-bold">
                    {proj.badge}
                  </span>
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-[#15803d] dark:text-emerald-300 font-bold border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>LIVE SYSTEM DEMO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      STATUS: OPERATIONAL
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
                  {proj.name}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {proj.summary}
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-[#15803d] dark:text-emerald-400 uppercase tracking-wider block font-bold">
                    Architectural Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {proj.solution}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-500 uppercase block font-bold">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proj.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-500 uppercase block mb-2 font-bold">
                    Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-green-800/20 group hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  <CtaButton
                    href={`/contact?service=${encodeURIComponent(proj.name)}`}
                    variant={proj.liveUrl ? "outline" : "primary"}
                  >
                    Request Custom Solution Like This
                  </CtaButton>
                </div>
              </div>

              {/* Right Metrics Box */}
              <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm">
                <span className="text-xs font-mono text-[#15803d] dark:text-emerald-400 uppercase tracking-widest block font-bold">
                  Verified Production Metrics
                </span>
                <div className="space-y-3">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <span className="text-2xl font-black font-mono text-[#15803d] dark:text-emerald-400 block">
                        {m.value}
                      </span>
                      <span className="text-xs font-mono text-slate-500 uppercase font-bold">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {proj.liveUrl && (
                  <div className="pt-1">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-[#15803d] dark:text-emerald-300 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors group"
                    >
                      <span className="truncate">{proj.liveUrl.replace("https://", "").replace(/\/$/, "")}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                    <span>Dedicated SLA Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                    <span>Real-time Telemetry Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

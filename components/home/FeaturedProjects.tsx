"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Wifi, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  Code2,
  TrendingUp,
  X 
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  detailedScope: string;
  tech: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  uiType: "isp" | "smm" | "careflow" | "smartpay" | "vera" | "portfolio" | "alpha";
  liveUrl?: string;
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "careflow-healthcare",
      name: "CareFlow Healthcare OS",
      badge: "Healthcare Platform & EMR",
      headline: "The Complete Healthcare Operating System For Modern Hospitals",
      description:
        "An enterprise cloud-native healthcare platform managing patient EMR, clinical queues, laboratory diagnostics, pharmacy inventory, and insurance billing.",
      detailedScope:
        "Engineered with Next.js, role-secured architecture, and real-time clinical workflows. Coordinates digital patient registration, vitals triage, doctor SOAP consultation notes, lab diagnostics dispatch, pharmacy batch inventory, and split cash/insurance claim reconciliation.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "EMR Engine", "Audit Logs"],
      features: [
        "Electronic Medical Records (EMR) with strict patient confidentiality",
        "Laboratory diagnostics, sample tracking & direct results sync",
        "Pharmacy batch inventory with automated expiry and stockout alerts",
        "Split insurance and M-Pesa automated billing reconciliation",
      ],
      metrics: [
        { label: "Hospitals Served", value: "200+" },
        { label: "Patient Records", value: "2M+" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
      uiType: "careflow",
      liveUrl: "https://careflow-five-theta.vercel.app/",
    },
    {
      id: "smartpay-payroll",
      name: "SmartPay Global",
      badge: "Fintech & Payroll SaaS",
      headline: "Modern Payroll & Workforce SaaS Infrastructure",
      description:
        "A cloud payroll and workforce SaaS platform automating statutory tax calculations, batch salary disbursements, and employee self-service.",
      detailedScope:
        "Built for businesses across East Africa and beyond. Automates Kenyan statutory deductions (PAYE, NSSF, SHIF/NHIF), provides 1-click batch salary disbursement via M-Pesa B2C and bank APIs, generates digital payslips, and synchronizes multi-department cost centers.",
      tech: ["React", "FastAPI / Node.js", "PostgreSQL", "M-Pesa B2C", "Tax Compliance"],
      features: [
        "Automated Kenyan statutory tax deduction calculation (PAYE, NSSF, SHIF)",
        "1-click bulk salary disbursement via M-Pesa B2C and banking rails",
        "Employee self-service portal for payslips, P9 forms, and leave requests",
        "Multi-branch department cost-center accounting and audit logging",
      ],
      metrics: [
        { label: "Batch Speed", value: "<15s" },
        { label: "Disbursement SLA", value: "99.9%" },
        { label: "Tax Compliance", value: "100%" },
      ],
      uiType: "smartpay",
      liveUrl: "https://smartpay-ke.vercel.app/",
    },
    {
      id: "vera-beauty-parlour",
      name: "Vera Glow Parlour",
      badge: "Salon Booking & E-Commerce",
      headline: "Luxury Salon Scheduling & Cosmetics Commerce Platform",
      description:
        "Nairobi's premier luxury beauty parlour, hair salon, spa booking platform, and authentic cosmetic shop with online appointment scheduling.",
      detailedScope:
        "Combines an elegant aesthetic experience with robust booking logic. Integrates real-time stylist availability calendars, treatment catalog selections, instant M-Pesa payments, automated SMS appointment reminders, and cosmetic retail boutique checkout.",
      tech: ["React", "Vite", "Tailwind CSS", "M-Pesa Express", "Booking Engine"],
      features: [
        "Live stylist booking calendar with real-time time-slot reservation",
        "Integrated cosmetic boutique with cart, checkout, and inventory sync",
        "Automated SMS & WhatsApp appointment confirmation and reminders",
        "Customer loyalty profiles with treatment histories and preferred stylists",
      ],
      metrics: [
        { label: "Booking Speed", value: "<45s" },
        { label: "Online Conversion", value: "+38%" },
        { label: "Repeat Client Rate", value: "85%" },
      ],
      uiType: "vera",
      liveUrl: "https://vera-beauty-parlour-app.vercel.app/",
    },
    {
      id: "dev-nesh-portfolio",
      name: "Dev Nesh Lead Architect Showcase",
      badge: "Engineering Showcase",
      headline: "Fullstack Architecture & Systems Showcase",
      description:
        "The professional engineering portfolio and interactive systems showcase for Oscar Munene (Dev Nesh), Founder and Lead Software Architect at PICNIC TECHNOLOGIES.",
      detailedScope:
        "High-performance showcase featuring live production system demos, FastAPI asynchronous backends, MikroTik router network automations, M-Pesa billing integrations, and direct technical consultation booking.",
      tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "Fullstack Architecture"],
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
      uiType: "portfolio",
      liveUrl: "https://my-portfolio-plum-seven-0she01n1vt.vercel.app/",
    },
    {
      id: "my-net-isp",
      name: "My Net ISP",
      badge: "Telecom & ISP Management",
      headline: "Comprehensive Internet Service Provider Operations Platform",
      description:
        "An ISP management platform designed to help internet service providers manage customers, packages, payments, complaints, employees and network operations.",
      detailedScope:
        "Full-cycle telecom software bridging MikroTik core routers directly with Safaricom M-Pesa automated reconciliation. Includes bandwidth rate limiting, PPPoE/Hotspot user provisioning, field technician dispatch, and AI customer support ticket triage.",
      tech: ["Next.js", "FastAPI", "Supabase", "M-Pesa", "MikroTik", "AI"],
      features: [
        "Direct MikroTik RouterOS API integration for automatic disconnect/reconnect",
        "M-Pesa Paybill / STK push automated instant package activation",
        "Field technician ticket routing & GPS coverage zones",
        "AI-assisted network outage detection & client SMS broadcasts",
      ],
      metrics: [
        { label: "Active Subscribers", value: "12,000+" },
        { label: "Billing Automation", value: "100%" },
        { label: "Payment Reconcile", value: "Instant" },
      ],
      uiType: "isp",
      liveUrl: "https://isp-my-net-vkvs.vercel.app/",
    },
    {
      id: "alpha-analysis-tool",
      name: "AlphaDollars & Analysis Scanner Tool",
      badge: "Trading Bot & Analytics SaaS",
      headline: "High-Fidelity Trading Bot Platform & Digit Pro Scanner",
      description:
        "A professional trading bot platform, advanced digit pro scanner, and real-time market telemetry system modeled for modern algorithmic traders.",
      detailedScope:
        "Engineered with Next.js, real-time market digit scanning algorithms, sub-80ms signal generation, multi-channel payment integration (M-Pesa, PayPal, Binance Pay), and instant WhatsApp trade alert webhooks.",
      tech: ["Next.js", "TypeScript", "WebSocket Feeds", "M-Pesa API", "Crypto/Binance", "PayPal"],
      features: [
        "High-speed market digit pro scanner with real-time volatility tracking",
        "Multi-rail instant checkout (M-Pesa, PayPal, Binance Pay)",
        "Automated trader onboarding with WhatsApp credential dispatch",
        "Live trading signal telemetry & risk management parameters",
      ],
      metrics: [
        { label: "Active Traders", value: "100+" },
        { label: "Scan Execution", value: "<80ms" },
        { label: "Signal Reliability", value: "99.4%" },
      ],
      uiType: "alpha",
      liveUrl: "https://alpha-analysis-tool.vercel.app/",
    },
    {
      id: "socialpulse-smm",
      name: "SocialPulse SMM",
      badge: "SaaS Reseller Platform",
      headline: "High-Volume Automated Reseller Infrastructure",
      description:
        "A social media marketing reseller platform designed to allow customers and resellers to purchase social media services through an automated platform.",
      detailedScope:
        "Engineered with Next.js, asynchronous FastAPI worker queues, and Supabase PostgreSQL. Integrated multi-provider automated API order routing, wallet balance top-ups, instant webhook fulfillment, and tiered reseller margins.",
      tech: ["Next.js", "FastAPI", "PostgreSQL/Supabase", "API Integration", "Payments"],
      features: [
        "Automated API Provider routing with automatic failover",
        "Reseller wallet balance & instant deposit processing",
        "Multi-tier pricing markup engine for high volume accounts",
        "Live order telemetry & automated refund on partial delivery",
      ],
      metrics: [
        { label: "Orders Processed", value: "250K+" },
        { label: "Avg Execution Time", value: "<1.2s" },
        { label: "Uptime", value: "99.98%" },
      ],
      uiType: "smm",
      liveUrl: "https://socialpulsesmm.com",
    },
  ];

  const renderMockup = (type: string) => {
    switch (type) {
      case "careflow":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                <Activity className="w-4 h-4" /> CAREFLOW HOSPITAL OS
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                99.99% UPTIME SLA
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">PATIENTS TODAY</span>
                <span className="text-emerald-400 font-bold">247 Admitted</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">BED OCCUPANCY</span>
                <span className="text-cyan-400 font-bold">84% Capacity</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>[EMR-481] Sarah M. • Cardiology</span>
                <span className="text-emerald-400 font-semibold">Stable</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>[LAB-109] Blood Panel • Automated Sync</span>
                <span className="text-cyan-400 font-semibold">Verified</span>
              </div>
            </div>
          </div>
        );
      case "smartpay":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4" /> SMARTPAY BATCH PAYROLL
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                M-PESA B2C READY
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">SALARIES PROCESSED</span>
                <span className="text-emerald-400 font-bold">KES 4.8M Disbursed</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">STATUTORY TAXES</span>
                <span className="text-cyan-400 font-bold">PAYE/NSSF 100% Sync</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>Engineering Team (18 Staff)</span>
                <span className="text-emerald-400 font-semibold">Instant Payslip</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Operations & Support (34 Staff)</span>
                <span className="text-emerald-400 font-semibold">Disbursed (12s)</span>
              </div>
            </div>
          </div>
        );
      case "vera":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-4 h-4" /> VERA GLOW PARLOUR
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                LIVE BOOKINGS & SHOP
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">STYLIST SESSIONS</span>
                <span className="text-amber-400 font-bold">42 Booked Today</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">BOUTIQUE SALES</span>
                <span className="text-emerald-400 font-bold">M-Pesa 1-Click</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>Luxury Spa & Facial Package</span>
                <span className="text-emerald-400 font-semibold">Confirmed</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Hair Artistry & Treatment #81</span>
                <span className="text-cyan-400 font-semibold">In Progress</span>
              </div>
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-indigo-400 flex items-center gap-1.5 font-bold">
                <Code2 className="w-4 h-4" /> DEV NESH ARCHITECTURE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                SCORE 99/100
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">CORE STACK</span>
                <span className="text-emerald-400 font-bold">FastAPI + React</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">LATENCY</span>
                <span className="text-cyan-400 font-bold">&lt; 300ms Global</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>Telecom & ISP Network Routing</span>
                <span className="text-emerald-400 font-semibold">MikroTik API</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>Daraja B2C / STK Push Billing</span>
                <span className="text-emerald-400 font-semibold">Automated</span>
              </div>
            </div>
          </div>
        );
      case "alpha":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-cyan-400 flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-4 h-4" /> ALPHADOLLARS SCANNER
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                DIGIT PRO LIVE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">SCAN LATENCY</span>
                <span className="text-emerald-400 font-bold">&lt; 80ms Telemetry</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">ACTIVE TRADERS</span>
                <span className="text-cyan-400 font-bold">100+ Live Nodes</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>Multi-Rail: M-Pesa • PayPal • Binance</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>WhatsApp Signal Webhook Delivery</span>
                <span className="text-emerald-400 font-semibold">Instant</span>
              </div>
            </div>
          </div>
        );
      case "isp":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-[#22c55e] flex items-center gap-1.5 font-bold">
                <Wifi className="w-4 h-4" /> MIKROTIK NOC LIVE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                ROUTER PPPoE SYNCED
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">THROUGHPUT</span>
                <span className="text-emerald-400 font-bold">2.4 Gbps / 10 Gbps</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">M-PESA DARAJA</span>
                <span className="text-cyan-400 font-bold">Auto-Reconciled</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>[ACCT-9021] John K. - 20 Mbps Plan</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>[ACCT-9022] Peak Heights Ltd - 50 Mbps</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
          </div>
        );
      case "smm":
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-indigo-400 flex items-center gap-1.5 font-bold">
                <Activity className="w-4 h-4" /> ORDER DISPATCH QUEUE
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                FASTAPI ASYNC
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">API SUPPLIERS</span>
                <span className="text-slate-200 font-bold">14 Active Nodes</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">WALLET BALANCE</span>
                <span className="text-emerald-400 font-bold">$18,450.00 Float</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>ORD #48291 • Verified Provider A</span>
                <span className="text-emerald-400 font-semibold">Completed (0.8s)</span>
              </div>
              <div className="text-slate-400 flex justify-between">
                <span>ORD #48292 • Reseller Webhook</span>
                <span className="text-cyan-400 font-semibold">In Progress</span>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-amber-400 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4" /> INSTITUTION PORTAL
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                FEES & GRADES SYNC
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">FEE RECOVERY</span>
                <span className="text-emerald-400 font-bold">98.4% Term 1</span>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">SMS DISPATCH</span>
                <span className="text-cyan-400 font-bold">Sent to 820 Parents</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-slate-950 border border-slate-800 space-y-1 text-[10px]">
              <div className="text-slate-400 flex justify-between">
                <span>Form 4 CBC Assessment Upload</span>
                <span className="text-emerald-400 font-semibold">Compiled</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-[#090e17] transition-colors" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase font-bold">
              <span>Proven Production Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Featured Case Studies & Work
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              We engineer mission-critical systems deployed in real-world business environments with measurable operational efficiency.
            </p>
          </div>

          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-[#15803d] dark:text-emerald-400 font-bold text-sm transition-all border border-slate-200 dark:border-slate-700"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={proj.id}
                className="rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                  {/* Info Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
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
                          <span>LIVE DEMO AVAILABLE</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-slate-500">
                          PRODUCTION ACTIVE
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
                      {proj.name}
                    </h3>
                    <p className="text-[#15803d] dark:text-emerald-400 font-semibold text-sm sm:text-base font-display">
                      {proj.headline}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                      {proj.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology tags */}
                    <div className="pt-2">
                      <span className="text-xs font-mono text-slate-500 uppercase block mb-2 font-bold">
                        STACK & ARCHITECTURE:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-green-800/20 group hover:shadow-lg hover:-translate-y-0.5"
                        >
                          <span>Visit Live Site</span>
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                          proj.liveUrl
                            ? "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700"
                            : "bg-[#15803d] hover:bg-[#166534] text-white shadow-md shadow-green-800/20"
                        }`}
                      >
                        <span>View Project Breakdown</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <Link
                        href={`/projects#${proj.id}`}
                        className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-[#15803d] dark:hover:text-emerald-400 transition-colors uppercase font-bold"
                      >
                        Technical Specs →
                      </Link>
                    </div>
                  </div>

                  {/* Visual Preview Frame */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="p-3 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
                      {renderMockup(proj.uiType)}

                      {/* Performance Metrics strip */}
                      <div className="grid grid-cols-3 gap-2 mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center font-mono">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx}>
                            <span className="text-sm font-bold text-[#15803d] dark:text-emerald-400 block">
                              {m.value}
                            </span>
                            <span className="text-[10px] text-slate-500 block uppercase font-bold">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for In-depth Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-[#15803d] dark:text-emerald-300 font-bold">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                  {selectedProject.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {selectedProject.headline}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#15803d] dark:text-emerald-400 block uppercase font-bold">
                  System Architecture & Implementation
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.detailedScope}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block uppercase font-bold">
                  Key System Deliverables
                </span>
                <div className="space-y-2">
                  {selectedProject.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block uppercase font-bold">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-emerald-500/20 text-slate-800 dark:text-emerald-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm transition-colors shadow-md"
                  >
                    <span>Open Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedProject.name)}`}
                  onClick={() => setSelectedProject(null)}
                  className={`w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-colors ${
                    selectedProject.liveUrl
                      ? "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                      : "bg-[#15803d] hover:bg-[#166534] text-white shadow-md"
                  }`}
                >
                  <span>Build A System Like This</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-black text-sm border border-slate-200 dark:border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Wifi, 
  ShoppingBag, 
  GraduationCap, 
  HeartPulse, 
  Layers3, 
  Users, 
  LayoutDashboard, 
  Smartphone, 
  Cpu, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function WhatWeBuild() {
  const categories = [
    {
      id: "isp",
      name: "ISP Management Platforms",
      icon: Wifi,
      summary: "End-to-end subscriber, bandwidth, MikroTik router sync, and M-Pesa automated billing.",
      modules: ["MikroTik API Radius / PPPoE", "Automated M-Pesa Hotspot & Monthly Billing", "Customer Ticket Management", "Staff Dispatch & NOC Metrics"],
      badge: "Flagship Specialty",
    },
    {
      id: "business",
      name: "Business Management Systems",
      icon: Building2,
      summary: "Custom Enterprise ERPs unifying inventory, staff, POS, accounting, and sales operations.",
      modules: ["Multi-location Stock Control", "Invoicing & Automated Tax Reports", "Employee Time & Payroll", "Supplier Ledger & Purchase Orders"],
      badge: "High Demand",
    },
    {
      id: "ecommerce",
      name: "E-Commerce Platforms",
      icon: ShoppingBag,
      summary: "High-volume online retail, multi-vendor marketplaces, and direct payment checkout funnels.",
      modules: ["Cart & Instant Payment Gateway", "Automated Delivery Integrations", "Merchant Stores & Commissions", "Flash Sales & Promotions Engine"],
      badge: "Scalable",
    },
    {
      id: "school",
      name: "School Management Systems",
      icon: GraduationCap,
      summary: "Academic institutions digitized: student fees, grading, exams, parent SMS & attendance.",
      modules: ["Fee Collection & Receipt Automation", "Exam Gradebook & Report Cards", "Parent SMS Alert Dispatcher", "Teacher Timetables & Class Logs"],
      badge: "Education",
    },
    {
      id: "hospital",
      name: "Hospital & Clinic Systems",
      icon: HeartPulse,
      summary: "Clinical workflows, patient records (EMR), doctor appointments, pharmacy & billing.",
      modules: ["Patient EMR & Medical History", "Pharmacy Inventory & Dispensing", "Laboratory Diagnostic Reports", "Insurance & Cash Invoicing"],
      badge: "Healthcare",
    },
    {
      id: "saas",
      name: "SaaS Platforms",
      icon: Layers3,
      summary: "Multi-tenant cloud applications with subscription tiers, team workspaces, and recurring billing.",
      modules: ["Multi-tenant Database Partitioning", "Stripe & M-Pesa Recurring Subscriptions", "Team Seat Management", "API Access & Webhooks"],
      badge: "Cloud Scale",
    },
    {
      id: "portal",
      name: "Customer & Client Portals",
      icon: Users,
      summary: "Self-service client spaces for submitting requests, tracking orders, and viewing statements.",
      modules: ["Secure Passwordless Auth / 2FA", "Live Ticket & Order Telemetry", "Document Repository & Downloads", "Interactive Chat / Messaging"],
      badge: "Self-Service",
    },
    {
      id: "dashboard",
      name: "Administrative Dashboards",
      icon: LayoutDashboard,
      summary: "Executive command centers with real-time analytics, drill-down metrics, and audit logs.",
      modules: ["Live KPI Data Streaming", "Custom Export (PDF, CSV, Excel)", "Granular Role Permissions", "Security Audit & Activity Logs"],
      badge: "Analytics",
    },
    {
      id: "mobile",
      name: "Mobile Applications",
      icon: Smartphone,
      summary: "High-performance iOS and Android client applications with native speed and offline capabilities.",
      modules: ["Native Device Hardware Sync", "Push Notification Channels", "Smooth Gesture Experiences", "Offline-first Local Cache"],
      badge: "Mobile Native",
    },
    {
      id: "ai",
      name: "AI-Powered Systems",
      icon: Cpu,
      summary: "Machine intelligence embedded into workflows: auto-categorization, customer bots, and forecasts.",
      modules: ["WhatsApp Conversational AI Agents", "Automated Invoice OCR Extraction", "Predictive Inventory Restock Alerts", "Natural Language Analytics"],
      badge: "Intelligent Tech",
    },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = categories[selectedIdx];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#060a14] border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase mb-3 font-bold">
            <span>Enterprise Architecture Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            From simple websites to{" "}
            <span className="text-[#15803d] dark:text-emerald-400">
              complete digital platforms.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-4">
            We architect end-to-end operational software that runs businesses seamlessly. Explore the 10 core system categories we engineer for clients.
          </p>
        </div>

        {/* Interactive Layout: Left selector / Right active showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Categories Grid Selector (10 items) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between ${
                    isSelected
                      ? "bg-white dark:bg-slate-800 border-[#15803d] dark:border-emerald-500 shadow-md scale-[1.01]"
                      : "bg-white/80 dark:bg-[#0b1120]/70 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#15803d] text-white"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold block text-slate-900 dark:text-white leading-snug">
                        {cat.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 block">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-1.5 h-6 rounded-full bg-[#15803d]"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Category Detail Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-[#15803d] dark:text-emerald-400">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#15803d] dark:text-emerald-400 block font-bold">
                    Category Blueprint
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                    {current.name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold">
                {current.badge}
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {current.summary}
            </p>

            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-bold">
                Standard Included Capabilities:
              </span>
              <div className="space-y-2">
                {current.modules.map((mod, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/solutions#${current.id}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <span>Explore {current.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?type=quote"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700"
              >
                <span>Request Custom Scope</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

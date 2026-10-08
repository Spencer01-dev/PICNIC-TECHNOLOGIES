import React from "react";
import type { Metadata } from "next";
import { 
  Wifi, 
  GraduationCap, 
  Building2, 
  HeartPulse, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Industry Solutions — Built for ISPs, Schools, Enterprises & Healthcare",
  description: "Specialized enterprise platforms engineered by PICNIC TECHNOLOGIES for Internet Service Providers (ISPs), Educational Institutions, Enterprises/SMEs, and Healthcare Providers.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: "isp-management",
      title: "For Internet Service Providers (ISPs)",
      tagline: "Total Telecom, Bandwidth & M-Pesa Subscriber Billing Infrastructure",
      description:
        "Running an ISP requires orchestrating MikroTik network routers, bandwidth rate limiting, customer payments, technician field work, and billing reminders. Our ISP platform automates the entire operations lifecycle.",
      icon: Wifi,
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      border: "border-[#bbf7d0] dark:border-emerald-900/60",
      accent: "text-[#15803d] dark:text-emerald-400",
      features: [
        { name: "Customer Management", desc: "Subscriber records, geolocation coordinates, installation dates, and active contract terms." },
        { name: "Package Management", desc: "Custom bandwidth tiers (e.g. 10Mbps, 20Mbps, Night Owl specials) with automated QoS shaping." },
        { name: "Automated Payments", desc: "Seamless M-Pesa Paybill / STK push. System reconnects internet within 3 seconds of payment." },
        { name: "Complaint & Ticket Desk", desc: "Customer portal for logging connection dropouts with automated escalation to technicians." },
        { name: "Employee Dispatch", desc: "Assign field engineers to new installations and fiber cuts with real-time GPS check-ins." },
        { name: "MikroTik Network Integration", desc: "Direct RouterOS API integration for automatic PPPoE, Hotspot, and Static IP provisioning." },
        { name: "Executive Dashboards", desc: "Live bandwidth throughput graphs, churn analytics, revenue leakage alerts, and monthly run-rates." },
      ],
      idealFor: "Fiber-to-the-Home (FTTH), Wireless ISPs (WISP), and Hotspot operators.",
    },
    {
      id: "school-management",
      title: "For Schools & Academic Institutions",
      tagline: "End-to-End Academic, Fee Collection & Parent Communication Platform",
      description:
        "Schools lose countless administrative hours manually tracking fee arrears, calculating report cards, and reconciling bank receipts. Our School Management System transforms paper chaos into automated digital precision.",
      icon: GraduationCap,
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      border: "border-[#bfdbfe] dark:border-blue-900/60",
      accent: "text-[#1e40af] dark:text-blue-400",
      features: [
        { name: "Student Management", desc: "Complete digital pupil profiles from admission to graduation with medical and disciplinary records." },
        { name: "Fee Invoicing & Arrears", desc: "Automated M-Pesa receipts tied directly to student admission numbers with live balance calculation." },
        { name: "Examinations & Grading", desc: "Automated CBC assessment calculation, ranking, and 1-click printable PDF report cards." },
        { name: "Teacher Portals", desc: "Lesson plans, daily attendance registers, and continuous assessment tests (CATs) entry." },
        { name: "Parent Communication", desc: "Instant SMS broadcasts for emergency closures, fee balance reminders, and term announcements." },
        { name: "Institutional Reports", desc: "Comprehensive financial reconciliations, enrollment demographics, and academic trend audits." },
      ],
      idealFor: "Primary schools, secondary academies, international institutions, and colleges.",
    },
    {
      id: "business-management",
      title: "For Businesses & Commercial Enterprises",
      tagline: "Unified ERP: CRM, Stock Inventory, POS, Payroll & Executive Intelligence",
      description:
        "Modern businesses cannot afford siloed spreadsheets. We construct unified enterprise systems that synchronize inventory across warehouses, capture sales leads, manage staff, and calculate tax obligations in real time.",
      icon: Building2,
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      border: "border-[#bbf7d0] dark:border-emerald-900/60",
      accent: "text-[#15803d] dark:text-emerald-400",
      features: [
        { name: "CRM & Lead Pipeline", desc: "Track prospect interactions from initial inquiry through negotiation and final contract signing." },
        { name: "Multi-Store Inventory", desc: "Live barcode scanning, batch tracking, transfer orders between branches, and reorder alerts." },
        { name: "Point of Sale (POS) & Sales", desc: "High-speed cashier checkout with instant receipt printing and automated ledger deductions." },
        { name: "Employee & Payroll", desc: "Biometric clock-in sync, leave management, automated payslip generation with PAYE/NSSF deductions." },
        { name: "Payments & Invoicing", desc: "Multi-currency invoicing with payment links, bank reconciliation, and automated overdue nudges." },
        { name: "Comprehensive Dashboards", desc: "Gross margins, fast-moving items, sales representative performance, and profit & loss statements." },
      ],
      idealFor: "Wholesalers, distributors, retail chains, logistics providers, and professional service firms.",
    },
    {
      id: "hospital-management",
      title: "For Hospitals, Clinics & Healthcare Centers",
      tagline: "Integrated Clinical EMR, Doctor Scheduling, Pharmacy & Insurance Billing",
      description:
        "Healthcare delivery demands rapid access to patient medical histories, zero prescription errors, and watertight billing reconciliation with insurance providers and cash desks.",
      icon: HeartPulse,
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      border: "border-[#fed7aa] dark:border-amber-900/60",
      accent: "text-[#9a3412] dark:text-amber-400",
      features: [
        { name: "Patient Management", desc: "Digital registration, triage vital signs recording, queue management, and patient confidentiality." },
        { name: "Doctor Appointments", desc: "Online specialist booking, doctor calendar sync, and automated SMS appointment reminders." },
        { name: "Electronic Records (EMR)", desc: "Doctor consultation clinical notes, lab test attachments, diagnosis history, and allergy warnings." },
        { name: "Pharmacy & Dispensary", desc: "Digital prescription processing, batch expiration alerts, and stock reconciliation." },
        { name: "Split Billing & Claims", desc: "Direct insurance pre-authorization claims tracking, co-pay handling, and cash/M-Pesa invoicing." },
        { name: "Clinical & Financial Reports", desc: "Morbidity indices, daily department revenues, bed occupancy rates, and clinician audits." },
      ],
      idealFor: "Specialist clinics, maternity hospitals, dental centers, diagnostics labs, and general hospitals.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      {/* Header */}
      <PageHeader
        badge="Enterprise Business Vertical Solutions"
        title="Industry Solutions Built For"
        titleAccent="Operational Scale"
        subtitle="We don&apos;t just sell code. We deliver purpose-engineered business systems that solve operational bottlenecks in specific industries."
      />

      {/* Solutions Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {solutions.map((sol, index) => {
          const Icon = sol.icon;
          return (
            <div
              key={sol.id}
              id={sol.id}
              className={`scroll-mt-28 rounded-3xl ${sol.cardBg} border ${sol.border} p-8 sm:p-12 shadow-sm transition-all`}
            >
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#15803d] dark:text-emerald-400 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className={`text-xs font-mono uppercase tracking-widest block font-bold ${sol.accent}`}>
                        SYSTEM VERTICAL 0{index + 1}
                      </span>
                      <h2 className={`text-2xl sm:text-3xl font-black font-display ${sol.accent}`}>
                        {sol.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {sol.id === "isp-management" && (
                      <a
                        href="https://isp-my-net-vkvs.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-sm font-bold shadow-md shadow-green-800/20 transition-all duration-200 group"
                      >
                        <span>Live Demo: My Net ISP</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {sol.id === "hospital-management" && (
                      <a
                        href="https://careflow-five-theta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-sm font-bold shadow-md shadow-green-800/20 transition-all duration-200 group"
                      >
                        <span>Live Demo: CareFlow</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {sol.id === "business-management" && (
                      <a
                        href="https://smartpay-ke.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white text-sm font-bold shadow-md shadow-green-800/20 transition-all duration-200 group"
                      >
                        <span>Live Demo: SmartPay</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    <CtaButton
                      href={`/contact?service=${encodeURIComponent(sol.title)}`}
                      variant={sol.id === "hospital-management" || sol.id === "business-management" || sol.id === "isp-management" ? "outline" : "primary"}
                    >
                      Request Solution Proposal
                    </CtaButton>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <p className={`text-base font-bold font-display ${sol.accent}`}>
                      {sol.tagline}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1 text-xs shadow-xs">
                      <span className="font-mono text-slate-500 uppercase block font-bold">Ideal For:</span>
                      <p className="text-slate-800 dark:text-slate-200 font-semibold">{sol.idealFor}</p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1 shadow-xs"
                      >
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />
                          {feat.name}
                        </h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Solution Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="rounded-3xl bg-slate-50 dark:bg-[#0d1628] border border-slate-200 dark:border-slate-800 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
              Have an industry with custom requirements?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl">
              We design and construct tailored architectures for specialized sectors including SACCOs, supply chains, microfinances, and logistics fleets.
            </p>
          </div>
          <CtaButton href="/contact?type=custom-solution" className="px-8 py-4 shrink-0">
            Discuss Custom Architecture
          </CtaButton>
        </div>
      </section>
    </div>
  );
}

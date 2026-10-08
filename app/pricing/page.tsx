"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  UserCheck,
  Briefcase,
  Home,
  Megaphone,
  ShoppingCart,
  Gauge,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

/* ───── Types ───── */
interface PricingTier {
  name: string;
  price: string;
  badge?: "Popular" | "Most Popular";
}

interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  category: "websites" | "platforms";
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  startingPrice?: string;
  tiers?: PricingTier[];
  features: string[];
  primaryButtonText: "Request Custom Quote" | "Request Quote" | "Order Now";
  hasCallButton?: boolean;
}

/* ───── Data matching reference images ───── */
const packages: PricingPackage[] = [
  {
    id: "custom-website-development",
    name: "Custom Website Development",
    subtitle: "Starting from KES",
    startingPrice: "13,000",
    category: "websites",
    icon: Code2,
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    features: [
      "Custom UI/UX for your brand",
      "Scalable architecture & API-ready",
      "SEO-ready & performant",
    ],
    primaryButtonText: "Request Custom Quote",
    hasCallButton: true,
  },
  {
    id: "portfolio-websites",
    name: "Portfolio Websites",
    subtitle: "Great for creatives & professionals",
    category: "websites",
    icon: UserCheck,
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    tiers: [
      { name: "Basic", price: "KES 12,000" },
      { name: "Standard", price: "KES 18,000", badge: "Popular" },
      { name: "Premium", price: "KES 25,000" },
    ],
    features: [
      "Fast turnaround & SEO-ready",
      "Case studies & contact forms",
      "Easy portfolio updates",
    ],
    primaryButtonText: "Order Now",
  },
  {
    id: "business-company-websites",
    name: "Business & Company Websites",
    subtitle: "Starter / Professional / Enterprise",
    category: "websites",
    icon: Briefcase,
    iconColor: "text-[#15803d] dark:text-emerald-400",
    iconBg: "bg-green-50 dark:bg-emerald-950/40",
    tiers: [
      { name: "Starter", price: "KES 20,000" },
      { name: "Professional", price: "KES 35,000", badge: "Most Popular" },
      { name: "Enterprise", price: "KES 60,000" },
    ],
    features: [
      "Company-grade design & lead capture",
      "Payment & CRM integrations",
      "Training and SLA options",
    ],
    primaryButtonText: "Request Quote",
  },
  {
    id: "real-estate-websites",
    name: "Real Estate Websites",
    subtitle: "Starting from KES",
    startingPrice: "17,000",
    category: "websites",
    icon: Home,
    iconColor: "text-amber-700 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    features: [
      "Property listings & filters",
      "Admin panel & inquiry forms",
      "Map integration & lead capture",
    ],
    primaryButtonText: "Request Quote",
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    subtitle: "Conversion-focused",
    category: "websites",
    icon: Megaphone,
    iconColor: "text-orange-500 dark:text-orange-400",
    iconBg: "bg-orange-50 dark:bg-orange-950/40",
    tiers: [
      { name: "Basic", price: "KES 15,000" },
      { name: "Conversion-Optimized", price: "KES 25,000" },
    ],
    features: [
      "High-conversion copy & layout",
      "Fast load & analytics",
      "A/B testing ready",
    ],
    primaryButtonText: "Order Now",
  },
  {
    id: "ecommerce-websites",
    name: "E-commerce Websites",
    subtitle: "Starter / Advanced / Custom",
    category: "platforms",
    icon: ShoppingCart,
    iconColor: "text-rose-600 dark:text-rose-400",
    iconBg: "bg-rose-50 dark:bg-rose-950/40",
    tiers: [
      { name: "Starter Store", price: "KES 40,000" },
      { name: "Advanced Store", price: "KES 70,000" },
      { name: "Custom Store", price: "KES 100,000+" },
    ],
    features: [
      "Product management, payments & shipping",
      "Catalog & order management",
      "Performance & security for sales at scale",
    ],
    primaryButtonText: "Request Quote",
  },
  {
    id: "admin-dashboards-web-systems",
    name: "Admin Dashboards & Web Systems",
    subtitle: "Starting from KES",
    startingPrice: "60,000",
    category: "platforms",
    icon: Gauge,
    iconColor: "text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    features: [
      "Role-based access & analytics",
      "Custom reports & integrations",
      "API-first architecture",
    ],
    primaryButtonText: "Request Quote",
  },
];

/* ───── Filter Type ───── */
type FilterCategory = "all" | "websites" | "platforms";

export default function PricingPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "All Packages", value: "all" },
    { label: "Websites", value: "websites" },
    { label: "Platforms & Systems", value: "platforms" },
  ];

  const filtered =
    activeFilter === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === activeFilter);

  const faqs = [
    {
      q: "Do prices include domain and hosting setup?",
      a: "Yes! All packages include complete deployment and setup on your preferred hosting provider (such as Vercel, Cloudflare, or VPS). We guide you through DNS and domain configuration at no additional charge.",
    },
    {
      q: "Can I pay in installments?",
      a: "Yes, we support flexible milestone payments — typically 50% upfront to initiate architecture and design, and 50% upon successful testing and launch. We accept M-Pesa, bank transfer, and card payments.",
    },
    {
      q: "How long does each project take to deliver?",
      a: "Landing pages and portfolios typically take 3 to 7 working days. Business websites take 1 to 2 weeks. Advanced e-commerce stores and custom web platforms take 2 to 4 weeks depending on integrations.",
    },
    {
      q: "Are the websites mobile-friendly and SEO optimized?",
      a: "Every project is built mobile-first, ensuring high performance (under 2 seconds load time) and clean semantic markup with metadata and OpenGraph tags ready for Google search indexing.",
    },
    {
      q: "What if I need custom features not listed in the tiers?",
      a: "We frequently build bespoke web applications, ISP billing software, school management portals, and API integrations. Contact us for a customized scope and quote tailored to your exact roadmap.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-[#090e17]">
      {/* Hero Header */}
      <PageHeader
        badge="Transparent Pricing"
        title="Clear pricing for"
        titleAccent="every project."
        subtitle="Categorized packages and transparent rates for growing businesses. Pick a package or request a custom quote tailored to your specifications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/60 shadow-inner">
            {filters.map((f) => {
              const active = activeFilter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-white dark:bg-slate-900 text-[#15803d] dark:text-emerald-400 shadow-sm font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filtered.map((pkg) => {
            const Icon = pkg.icon;

            const whatsappMessage = encodeURIComponent(
              `Hello PICNIC TECHNOLOGIES, I'm interested in the "${pkg.name}" package. I'd like to get more information.`
            );
            const contactHref = `/contact?service=${encodeURIComponent(pkg.name)}`;

            return (
              <div
                key={pkg.id}
                className="group relative bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Section */}
                <div>
                  {/* Header: Icon & Titles */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pkg.iconBg} ${pkg.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-6 pt-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    {/* Starting Price variant */}
                    {pkg.startingPrice ? (
                      <div className="py-2">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Starting from
                        </div>
                        <div className="text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
                          KES {pkg.startingPrice}
                        </div>
                      </div>
                    ) : null}

                    {/* Tiered Categorized Pricing variant */}
                    {pkg.tiers ? (
                      <div className="space-y-3">
                        {pkg.tiers.map((tier) => (
                          <div
                            key={tier.name}
                            className="flex items-baseline justify-between text-sm"
                          >
                            <span className="font-medium text-slate-700 dark:text-slate-300">
                              {tier.name}
                            </span>
                            <div className="flex flex-col items-end">
                              <span className="font-bold text-slate-900 dark:text-white">
                                {tier.price}
                              </span>
                              {tier.badge === "Popular" && (
                                <span className="mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-400 text-slate-950 uppercase tracking-wide">
                                  Popular
                                </span>
                              )}
                              {tier.badge === "Most Popular" && (
                                <span className="mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#15803d] text-white uppercase tracking-wide">
                                  Most Popular
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-[#15803d] dark:text-emerald-400 font-bold shrink-0 mt-0.5">
                          •
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (matching green pill buttons in images) */}
                <div className="space-y-2 pt-2">
                  <Link
                    href={contactHref}
                    className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-medium py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {pkg.primaryButtonText}
                  </Link>

                  <a
                    href={`https://wa.me/254706656544?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-medium py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  {pkg.hasCallButton && (
                    <a
                      href="tel:+254706656544"
                      className="w-full bg-[#15803d] hover:bg-[#166534] text-white font-medium py-2.5 px-4 rounded-xl text-center text-sm shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project CTA Banner */}
        <div className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-950 via-[#0a1a12] to-slate-950 border border-emerald-800/40 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need a custom software architecture?</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white mb-3">
              Have a tailored enterprise or multi-system project?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              For large-scale management systems, ISP billing engines, school
              management suites, mobile applications, or high-volume eCommerce,
              we engineer custom platforms aligned with your business objectives.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=quote"
                className="px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-slate-950 font-bold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/30"
              >
                <span>Request Custom Specification</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/254706656544?text=Hello%20PICNIC%20TECHNOLOGIES%2C%20I%20have%20a%20custom%20project%20and%20would%20like%20a%20detailed%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with an Engineer</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#15803d] dark:text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Pricing & Engagement Details
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#15803d] dark:text-emerald-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

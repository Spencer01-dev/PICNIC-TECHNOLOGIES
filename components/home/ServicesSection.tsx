"use client";

import React from "react";
import Link from "next/link";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  ShoppingCart, 
  Bot, 
  CloudLightning,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      icon: Globe,
      description:
        "Professional, responsive websites for businesses, organizations and personal brands.",
      tags: ["Next.js", "React", "SEO", "Responsive UI", "High Speed"],
      features: [
        "Modern corporate & marketing websites",
        "Lightning fast Next.js architecture",
        "Search Engine Optimization (SEO) built-in",
      ],
      // Mint Theme from Screenshot
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      cardBorder: "border-[#bbf7d0] dark:border-emerald-900/60",
      titleColor: "text-[#15803d] dark:text-emerald-400",
      accentBar: "bg-[#15803d]",
      iconBg: "bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400",
    },
    {
      id: "custom-software",
      title: "Custom Software",
      icon: Cpu,
      description:
        "Business management systems designed around your specific operations.",
      tags: ["FastAPI", "Node.js", "PostgreSQL", "Enterprise Logic"],
      features: [
        "Tailored business operations & ERPs",
        "Role-based access & automated workflows",
        "Integrated databases & live telemetry",
      ],
      // Blue Theme from Screenshot
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      cardBorder: "border-[#bfdbfe] dark:border-blue-900/60",
      titleColor: "text-[#1e40af] dark:text-blue-400",
      accentBar: "bg-[#1e40af]",
      iconBg: "bg-blue-100 dark:bg-blue-950 text-[#1e40af] dark:text-blue-400",
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      icon: Smartphone,
      description:
        "Mobile applications that bring your services closer to your customers.",
      tags: ["React Native", "Flutter", "iOS & Android", "Offline Sync"],
      features: [
        "Cross-platform iOS and Android builds",
        "Push notifications & seamless onboarding",
        "M-Pesa & mobile payment integrations",
      ],
      // Peach Theme from Screenshot
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      cardBorder: "border-[#fed7aa] dark:border-amber-900/60",
      titleColor: "text-[#9a3412] dark:text-amber-400",
      accentBar: "bg-[#ea580c]",
      iconBg: "bg-amber-100 dark:bg-amber-950 text-[#9a3412] dark:text-amber-400",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      icon: ShoppingCart,
      description:
        "Online stores and digital marketplaces that help businesses sell online.",
      tags: ["Marketplaces", "Payment Gateways", "Inventory", "Orders"],
      features: [
        "Automated checkout & inventory tracking",
        "Seamless M-Pesa, Card & Bank processing",
        "Customer portal & order tracking",
      ],
      // Mint Theme
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      cardBorder: "border-[#bbf7d0] dark:border-emerald-900/60",
      titleColor: "text-[#15803d] dark:text-emerald-400",
      accentBar: "bg-[#15803d]",
      iconBg: "bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      icon: Bot,
      description:
        "AI-powered features and automation to reduce repetitive work and improve productivity.",
      tags: ["LLM Agents", "Document AI", "Workflows", "Bots"],
      features: [
        "AI customer support & WhatsApp bots",
        "Automated document processing & reporting",
        "Workflow triggers reducing manual labor",
      ],
      // Blue Theme
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      cardBorder: "border-[#bfdbfe] dark:border-blue-900/60",
      titleColor: "text-[#1e40af] dark:text-blue-400",
      accentBar: "bg-[#1e40af]",
      iconBg: "bg-blue-100 dark:bg-blue-950 text-[#1e40af] dark:text-blue-400",
    },
    {
      id: "hosting-support",
      title: "Hosting & Support",
      icon: CloudLightning,
      description:
        "Deployment, maintenance, updates, security and technical support.",
      tags: ["AWS", "Vercel", "Cloudflare", "24/7 Monitoring", "Backups"],
      features: [
        "Zero-downtime deployment & CDN edge caching",
        "Proactive security updates & patch management",
        "Dedicated technical retainer & response team",
      ],
      // Peach Theme
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      cardBorder: "border-[#fed7aa] dark:border-amber-900/60",
      titleColor: "text-[#9a3412] dark:text-amber-400",
      accentBar: "bg-[#ea580c]",
      iconBg: "bg-amber-100 dark:bg-amber-950 text-[#9a3412] dark:text-amber-400",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#090e17] transition-colors" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase font-bold">
              <span>Engineering Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Technology Solutions For Modern Businesses
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
              We design and construct reliable, scalable digital solutions that streamline your operations and unlock compounding business value.
            </p>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#15803d] dark:text-emerald-400 font-bold text-sm transition-all group border border-slate-200 dark:border-slate-700"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6 Cards Grid with reference pastel styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl ${service.cardBg} border ${service.cardBorder} p-7 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200 overflow-hidden`}
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-xs`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-2xl font-black mb-3 font-display ${service.titleColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature bullet points */}
                  <ul className="space-y-2.5 mb-6 border-t border-black/5 dark:border-white/10 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.titleColor}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Bar & Link */}
                <div className="pt-4 border-t border-black/5 dark:border-white/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/70 dark:bg-black/30 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wider uppercase ${service.titleColor} group/link`}
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-link-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Color accent bar at bottom from screenshot style */}
                  <div className={`h-1.5 w-16 rounded-full ${service.accentBar} mt-2`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

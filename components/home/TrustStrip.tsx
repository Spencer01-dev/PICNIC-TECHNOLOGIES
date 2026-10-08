"use client";

import React from "react";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Bot, 
  Layers, 
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function TrustStrip() {
  const capabilities = [
    {
      title: "WEB DEVELOPMENT",
      description: "Fast modern websites & portals",
      icon: Globe,
      href: "/services#web-development",
    },
    {
      title: "CUSTOM SOFTWARE",
      description: "Business & operational systems",
      icon: Cpu,
      href: "/services#custom-software",
    },
    {
      title: "MOBILE APPLICATIONS",
      description: "iOS & Android mobile apps",
      icon: Smartphone,
      href: "/services#mobile-apps",
    },
    {
      title: "AI & AUTOMATION",
      description: "Intelligent workflows & data bots",
      icon: Bot,
      href: "/services#ai-automation",
    },
    {
      title: "DIGITAL SOLUTIONS",
      description: "End-to-end cloud platforms",
      icon: Layers,
      href: "/services#hosting-support",
    },
  ];

  return (
    <section className="relative z-20 py-4 bg-white dark:bg-[#090e17] transition-colors border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0f1728] border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200/60 dark:border-slate-800 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#15803d]"></span>
              Core Pillars of Engineering
            </span>
            <span className="text-[11px] font-mono text-[#15803d] dark:text-emerald-400 font-bold">
              END-TO-END CAPABILITY
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="group p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#15803d] dark:hover:border-emerald-500 transition-all duration-150 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400 flex items-center justify-center group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#15803d] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#15803d] dark:group-hover:text-emerald-400 transition-colors tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {cap.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

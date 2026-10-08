import React from "react";
import type { Metadata } from "next";
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  Users, 
  Code2,
  ExternalLink
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "About Us — We Turn Ideas Into Digital Solutions",
  description: "Learn about PICNIC TECHNOLOGIES, our mission, vision, values, engineering philosophy, and leadership driving business technology across Africa and beyond.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Innovation",
      desc: "We continuously adopt the best modern frameworks, automation paradigms, and cloud tooling to deliver forward-thinking competitive systems.",
      icon: Lightbulb,
    },
    {
      title: "Reliability",
      desc: "Systems we build are resilient, secure, and available 24/7. We design with zero single-points-of-failure and rapid recovery in mind.",
      icon: ShieldCheck,
    },
    {
      title: "Integrity",
      desc: "Transparent estimates, honest technical advice, and complete code ownership handover. We don't lock clients into proprietary dead-ends.",
      icon: Award,
    },
    {
      title: "Customer Focus",
      desc: "We listen to how your staff and customers actually operate. Technology must simplify your real-world workflow, not complicate it.",
      icon: Users,
    },
    {
      title: "Continuous Improvement",
      desc: "Software isn't static. We iterate, monitor telemetry, benchmark performance, and update platforms long after initial deployment.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      {/* Hero Header */}
      <PageHeader
        badge="Corporate Profile"
        title="We turn ideas into"
        titleAccent="digital solutions."
        subtitle="PICNIC TECHNOLOGIES is a technology engineering firm delivering modern websites, custom software, digital platforms, and automated business systems that help companies operate, connect, and scale."
      />

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#f0fdf4] dark:bg-[#0c1815] border border-[#bbf7d0] dark:border-emerald-900/60 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#15803d] dark:text-emerald-400 uppercase tracking-widest block mb-2 font-bold">
              Our Core Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15803d] dark:text-white font-display mb-4">
              Our Mission
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              To make reliable and innovative technology accessible to businesses and organizations looking to grow in a digital world.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#eff6ff] dark:bg-[#0c1626] border border-[#bfdbfe] dark:border-blue-900/60 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-[#1e40af] dark:text-blue-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#1e40af] dark:text-blue-400 uppercase tracking-widest block mb-2 font-bold">
              Long-Term Horizon
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e40af] dark:text-white font-display mb-4">
              Our Vision
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              To become a trusted technology partner for businesses across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionBadge>Guiding Principles</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-3">
            These five tenets govern how we write code, communicate with clients, and support systems after deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 hover:border-[#15803d] dark:hover:border-emerald-500 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#15803d] dark:text-emerald-400 mb-5 group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2 group-hover:text-[#15803d] dark:group-hover:text-emerald-400 transition-colors">
                  {val.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership Profile: Founder & Developer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-slate-50 dark:bg-[#0c1324] border border-slate-200 dark:border-emerald-500/30 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-300 text-xs font-mono font-bold">
                <Code2 className="w-3.5 h-3.5" />
                <span>Founder & Lead Software Architect — Oscar Munene (Dev Nesh)</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
                Engineering With Direct Accountability
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                At PICNIC TECHNOLOGIES, you don&apos;t talk to disconnected middle managers who pass notes down an assembly line. When you work with us, you collaborate directly with seasoned software architects who understand system design, security, database performance, and real business economics.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Led by <strong className="text-slate-900 dark:text-white">Oscar Munene (Dev Nesh)</strong>, our engineering ethos centers on building high-throughput FastAPI backends, scalable Next.js & React frontends, MikroTik router network automations, and resilient enterprise software.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://my-portfolio-plum-seven-0she01n1vt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-green-800/20 group hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Explore Dev Nesh Portfolio</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <CtaButton href="/contact" variant="outline">
                  Discuss Your Project Directly
                </CtaButton>
                <CtaButton
                  href="https://wa.me/254706656544"
                  variant="outline"
                  external
                  showArrow={false}
                >
                  Chat on WhatsApp
                </CtaButton>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-3 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-[#15803d] dark:text-emerald-400 font-bold">TECH DNA</span>
                <span className="text-slate-400 text-[10px]">PRODUCTION-TESTED</span>
              </div>
              <div className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                <div className="flex justify-between">
                  <span>Frontends:</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-semibold">Next.js 15, React, Tailwind</span>
                </div>
                <div className="flex justify-between">
                  <span>Backends:</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-semibold">FastAPI, Python, Node.js</span>
                </div>
                <div className="flex justify-between">
                  <span>Databases:</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-semibold">Supabase, PostgreSQL, Redis</span>
                </div>
                <div className="flex justify-between">
                  <span>Integrations:</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-semibold">MikroTik, M-Pesa Daraja</span>
                </div>
                <div className="flex justify-between">
                  <span>Hosting:</span>
                  <span className="text-[#15803d] dark:text-emerald-400 font-semibold">Cloudflare Edge, AWS, Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  ShoppingCart, 
  Bot, 
  CloudLightning,
  CheckCircle2,
  HelpCircle
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import CtaButton from "@/components/ui/CtaButton";

export const metadata: Metadata = {
  title: "Services — Web, Software, Mobile, AI & Enterprise Solutions",
  description: "Explore the comprehensive technology engineering services offered by PICNIC TECHNOLOGIES: Next.js websites, custom ERPs, mobile apps, e-commerce, AI automation, and high-uptime hosting.",
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "web-development",
      title: "Web Development",
      icon: Globe,
      summary: "Professional, responsive websites for businesses, organizations and personal brands.",
      description:
        "We build high-converting, lightning-fast digital storefronts and corporate websites. Utilizing Next.js and modern server-rendered architectures, our websites achieve sub-second load times, superior SEO rankings, and seamless responsiveness across all screen sizes.",
      deliverables: [
        "Modern corporate & brand identity websites",
        "Search engine optimization (SEO) & semantic schema",
        "Lightning-fast Core Web Vitals performance score",
        "Interactive client contact funnels & inquiry capture",
        "Mobile-first, fully responsive design",
        "Content management system (CMS) or direct edit controls",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel / Cloudflare"],
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      border: "border-[#bbf7d0] dark:border-emerald-900/60",
      accent: "text-[#15803d] dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400",
    },
    {
      id: "custom-software",
      title: "Custom Software & ERPs",
      icon: Cpu,
      summary: "Business management systems designed around your specific operations.",
      description:
        "Off-the-shelf software often forces you to compromise on your real business workflow. We architect custom operational platforms: inventory management, automated employee payroll, role-based workflows, and centralized reporting dashboards tailored to your exact organizational structure.",
      deliverables: [
        "Custom Business Management Systems (BMS / ERP)",
        "Role-based authentication & fine-grained permission levels",
        "Automated accounting, invoicing & tax calculation",
        "Interactive reporting dashboards & analytics exports",
        "Real-time database synchronisation & audit logs",
        "Custom API integrations with third-party software",
      ],
      techStack: ["FastAPI", "Python", "Node.js", "PostgreSQL", "Supabase", "Redis"],
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      border: "border-[#bfdbfe] dark:border-blue-900/60",
      accent: "text-[#1e40af] dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-950 text-[#1e40af] dark:text-blue-400",
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      icon: Smartphone,
      summary: "Mobile applications that bring your services closer to your customers.",
      description:
        "Extend your reach to your customer's pocket. We create intuitive, fluid mobile applications for iOS and Android with push notification infrastructure, offline-first local storage, and instant mobile payment processing.",
      deliverables: [
        "Cross-platform iOS and Android applications",
        "Instant M-Pesa STK Push & card checkout",
        "Push notification campaigns & user engagement analytics",
        "Offline data caching & biometric authentication",
        "App Store & Google Play Store release management",
      ],
      techStack: ["React Native", "Flutter", "TypeScript", "Firebase"],
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      border: "border-[#fed7aa] dark:border-amber-900/60",
      accent: "text-[#9a3412] dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-950 text-[#9a3412] dark:text-amber-400",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Platforms",
      icon: ShoppingCart,
      summary: "Online stores and digital marketplaces that help businesses sell online.",
      description:
        "Turn visitors into paying customers. We engineer robust digital storefronts, multi-vendor marketplaces, and automated order fulfillment platforms with instant local payments (M-Pesa Paybill & Till) alongside global credit cards.",
      deliverables: [
        "Multi-currency & localized payment gateways (M-Pesa, Cards, Bank)",
        "Real-time inventory deduction & low-stock alerts",
        "Customer order tracking & dispatch notifications",
        "Discount codes, coupon engines & abandoned cart recovery",
        "Merchant administrative portals & sales telemetry",
      ],
      techStack: ["Next.js", "Stripe", "M-Pesa Daraja", "PostgreSQL", "Tailwind CSS"],
      cardBg: "bg-[#f0fdf4] dark:bg-[#0c1815]",
      border: "border-[#bbf7d0] dark:border-emerald-900/60",
      accent: "text-[#15803d] dark:text-emerald-400",
      iconBg: "bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      icon: Bot,
      summary: "AI-powered features and automation to reduce repetitive work and improve productivity.",
      description:
        "Empower your staff to focus on high-value business development. We implement automated intelligent workflows, WhatsApp customer service bots, document OCR processing, and predictive operational insights.",
      deliverables: [
        "24/7 AI-driven customer service bots on WhatsApp & Web",
        "Automated PDF document data extraction & parsing",
        "Automated recurring notification & client communication triggers",
        "Custom LLM fine-tuning on company internal knowledge bases",
        "Workflow integration with Zapier, webhooks & backend APIs",
      ],
      techStack: ["OpenAI / Claude APIs", "FastAPI", "LangChain", "WhatsApp Cloud API", "Python"],
      cardBg: "bg-[#eff6ff] dark:bg-[#0c1626]",
      border: "border-[#bfdbfe] dark:border-blue-900/60",
      accent: "text-[#1e40af] dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-950 text-[#1e40af] dark:text-blue-400",
    },
    {
      id: "hosting-support",
      title: "Hosting & Technical Support",
      icon: CloudLightning,
      summary: "Deployment, maintenance, updates, security and technical support.",
      description:
        "Deploy with total confidence. We handle server infrastructure, security patching, distributed denial-of-service (DDoS) mitigation, database backups, and guarantee ongoing technical peace of mind.",
      deliverables: [
        "Cloud deployment on Vercel, Cloudflare, AWS, or DigitalOcean",
        "Automated daily/hourly encrypted database backups",
        "24/7 uptime monitoring and incident response",
        "Security audits, SSL certificate renewal, and speed optimization",
        "Dedicated monthly technical support & maintenance retainer",
      ],
      techStack: ["Cloudflare", "AWS", "Vercel", "Docker", "Linux Ubuntu"],
      cardBg: "bg-[#fff7ed] dark:bg-[#1a130f]",
      border: "border-[#fed7aa] dark:border-amber-900/60",
      accent: "text-[#9a3412] dark:text-amber-400",
      iconBg: "bg-amber-100 dark:bg-amber-950 text-[#9a3412] dark:text-amber-400",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      {/* Header */}
      <PageHeader
        badge="Core Engineering Services"
        title="Comprehensive Digital"
        titleAccent="Solutions"
        subtitle="Every service is built with uncompromising technical precision, clear milestones, and focus on concrete business revenue."
      />

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceDetails.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 rounded-3xl ${service.cardBg} border ${service.border} p-8 sm:p-12 shadow-sm transition-all`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center font-bold`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-widest block font-bold ${service.accent}`}>
                    SERVICE 0{idx + 1}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-black font-display ${service.accent}`}>
                    {service.title}
                  </h2>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono text-slate-500 uppercase block mb-2 font-bold">
                      Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <CtaButton href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      Request Quote for {service.title}
                    </CtaButton>
                  </div>
                </div>

                {/* Right Deliverables Checklist */}
                <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4 shadow-xs">
                  <h3 className={`text-sm font-mono uppercase tracking-wider font-bold flex items-center gap-2 ${service.accent}`}>
                    <CheckCircle2 className="w-4 h-4" />
                    What We Deliver
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#15803d] shrink-0 mt-1.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionBadge>Client Questions</SectionBadge>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white font-display mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
              Do I own the source code after completion?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes, 100%. Upon project completion and final payment, you receive complete access and ownership of all repositories, databases, and deployment keys.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
              How long does an average custom project take?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Corporate websites typically take 1 to 2 weeks. Custom business systems or ISP platforms range between 3 to 6 weeks, delivered in sprint milestones.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
              Can you integrate local Kenyan payment systems like M-Pesa?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Absolutely. We specialize in M-Pesa Daraja STK Push, C2B Paybill, B2C automated disbursements, and instant webhook reconciliation.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#15803d] shrink-0" />
              Do you provide post-launch maintenance?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes, we provide flexible monthly retainers covering server management, zero-downtime backups, security updates, and new feature implementations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  Linkedin,
  Instagram,
  Twitter
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    budgetRange: "KES 20,000 - KES 50,000",
    preferredContact: "WhatsApp",
    projectDescription: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const svc = params.get("service") || "";
      if (svc) {
        setFormData((prev) => ({ ...prev, service: svc }));
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please contact us via WhatsApp directly.");
    }
  };

  const launchWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello PICNIC TECHNOLOGIES! My name is ${formData.fullName || "a client"}${
        formData.businessName ? ` from ${formData.businessName}` : ""
      }. I'm interested in ${formData.service || "a project"}. Scope: ${
        formData.projectDescription || "Discuss project roadmap"
      }. Budget: ${formData.budgetRange}`
    );
    window.open(`https://wa.me/254706656544?text=${msg}`, "_blank");
  };

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#090e17] transition-colors">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase font-bold">
            <span>Project Intake & Discovery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
            Have a project in mind?{" "}
            <span className="text-[#15803d] dark:text-emerald-400">
              Let&apos;s build it.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Tell us about your business goals. We&apos;ll schedule a discovery call, define your system architecture, and provide a comprehensive proposal.
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Contact Info Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Container */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg relative">
            {status === "success" ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#15803d] dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Project Request Received!
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#15803d] dark:text-emerald-400 font-bold">{formData.fullName}</span>. Our lead engineering team has logged your specifications and will respond within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={launchWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp Instantly</span>
                  </button>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white text-sm border border-slate-200 dark:border-slate-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                      Full Name <span className="text-[#15803d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                    />
                  </div>

                  {/* Business / Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                      Business / Organization
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Apex Networks Ltd"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                      Email Address <span className="text-[#15803d]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                      Phone Number <span className="text-[#15803d]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                      Service Category <span className="text-[#15803d]">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                    >
                      <option value="">Select a Service...</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software">Custom Software / ERP</option>
                      <option value="Mobile App">Mobile Applications (iOS/Android)</option>
                      <option value="E-Commerce">E-Commerce Platforms</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="ISP Management">ISP Management System (MikroTik/M-Pesa)</option>
                      <option value="System Integration">System Integration & APIs</option>
                      <option value="Hosting & Maintenance">Hosting & Technical Maintenance</option>
                      <option value="Other">Other Specific Requirement</option>
                    </select>
                  </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                      >
                        <option value="KES 12,000 - KES 25,000">KES 12,000 - KES 25,000 (Portfolio / Personal Site)</option>
                        <option value="KES 20,000 - KES 50,000">KES 20,000 - KES 50,000 (Business Website / Company Portal)</option>
                        <option value="KES 40,000 - KES 90,000">KES 40,000 - KES 90,000 (E-Commerce Store / Booking System)</option>
                        <option value="KES 90,000 - KES 180,000">KES 90,000 - KES 180,000 (Custom ERP / ISP Platform)</option>
                        <option value="KES 200,000+">KES 200,000+ (Large Enterprise / Mobile App / Multi-System)</option>
                      </select>
                    </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                    Preferred Contact Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["WhatsApp", "Phone Call", "Email"].map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          formData.preferredContact === method
                            ? "bg-emerald-50 dark:bg-emerald-950 border-[#15803d] text-[#15803d] dark:text-emerald-400"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase font-bold">
                    Project Description <span className="text-[#15803d]">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    required
                    rows={4}
                    placeholder="Describe what you want to build, existing systems, key features, and your target timeline..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#15803d] transition-colors text-sm"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base transition-all duration-200 shadow-md shadow-green-800/20 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending Specifications...</span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#15803d]" />
                    Strict Confidentiality
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#15803d]" />
                    24h Response SLA
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-50 dark:bg-[#0e1628] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                Direct Engineering Desk
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Need to talk right away? Reach out directly to our technical lead via WhatsApp, phone, or email.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/254706656544?text=Hello%20PICNIC%20TECHNOLOGIES%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#f0fdf4] dark:bg-emerald-950/40 border border-[#bbf7d0] dark:border-emerald-800 text-[#15803d] dark:text-emerald-300 hover:bg-emerald-100/60 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#15803d] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider block font-bold text-[#15803d] dark:text-emerald-400">
                      FASTEST RESPONSE
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      WhatsApp Business Chat
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:picnictechnologies2@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#15803d] transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#15803d] flex items-center justify-center group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                      PROPOSALS & INVOICES
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      picnictechnologies2@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+254706656544"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#15803d] transition-all group shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#15803d] flex items-center justify-center group-hover:bg-[#15803d] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                      DIRECT CALL LINE
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      +254 706 656 544
                    </span>
                  </div>
                </a>
              </div>

              {/* Geographic Reach */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase block font-bold">
                  Location & Reach:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span>Headquartered in Nairobi, Kenya. We service clients across East Africa, pan-African markets, and remote international companies.</span>
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-500 uppercase block mb-3 font-bold">
                  Follow Our Engineering:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/254706656544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#15803d] hover:border-[#15803d] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/company/picnic-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#15803d] hover:border-[#15803d] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/picnictechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#15803d] hover:border-[#15803d] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com/picnictech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#15803d] hover:border-[#15803d] transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

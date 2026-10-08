"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = "254706656544";
  const defaultMessage = encodeURIComponent(
    "Hello PICNIC TECHNOLOGIES! I am interested in building a project with you (Web, Software, App, AI, or Platform). Can we discuss?"
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-start flex-col font-sans">
      {/* Tooltip bubble styled exactly like the screenshot */}
      {showTooltip && (
        <div className="mb-2 p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl shadow-xl max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-1 mb-1">
            <span className="font-bold text-[#15803d] dark:text-emerald-400 flex items-center gap-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-[#15803d] dark:bg-emerald-400 animate-ping"></span>
              We&apos;re online
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-0.5 rounded"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-tight">
            Talk to us — how can we help?
          </p>
        </div>
      )}

      {/* Pill Button styled like the screenshot: `● Chat with us 💬` */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-[#15803d] transition-all duration-200"
        aria-label="Chat with PICNIC TECHNOLOGIES on WhatsApp"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] dark:bg-emerald-400 shrink-0"></span>
        <span className="text-xs sm:text-sm font-bold tracking-tight">Chat with us</span>
        <MessageSquare className="w-4 h-4 text-[#15803d] dark:text-emerald-400 shrink-0" />
      </a>
    </div>
  );
}

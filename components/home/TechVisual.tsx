"use client";

import React, { useState, useEffect } from "react";
import { 
  Server, 
  Database, 
  Cpu, 
  Zap, 
  CheckCircle2,
  Terminal
} from "lucide-react";

export default function TechVisual() {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    requests: 2841,
    latency: 18,
    uptime: 99.98,
    activeSockets: 142,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedMetrics((prev) => ({
        requests: prev.requests + Math.floor(Math.random() * 5) + 1,
        latency: Math.floor(16 + Math.random() * 6),
        uptime: 99.98,
        activeSockets: 140 + Math.floor(Math.random() * 8),
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      name: "Core Cloud Engine",
      role: "Next.js 15 & High-Perf Edge API",
      status: "OPTIMAL",
      tech: "Node.js / Edge",
      icon: Server,
    },
    {
      name: "Data & Storage Hub",
      role: "Supabase / PostgreSQL Scaled DB",
      status: "SYNCED",
      tech: "Real-time Relational",
      icon: Database,
    },
    {
      name: "AI & Automation Pipe",
      role: "Intelligent Workflows & LLM Models",
      status: "ACTIVE",
      tech: "Vector Inference",
      icon: Cpu,
    },
    {
      name: "Integration Gateway",
      role: "M-Pesa / Banking / MikroTik Routers",
      status: "CONNECTED",
      tech: "Encrypted Webhooks",
      icon: Zap,
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Frame */}
      <div className="relative rounded-2xl bg-white dark:bg-[#0e1626] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/50 transition-colors">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2 font-medium">picnic-system-core.v3</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#15803d] dark:bg-emerald-400 animate-ping"></span>
            <span>LIVE 99.9%</span>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Latency</span>
            <span className="text-sm font-bold font-mono text-[#15803d] dark:text-emerald-400">{simulatedMetrics.latency}ms</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Requests/min</span>
            <span className="text-sm font-bold font-mono text-indigo-600 dark:text-cyan-400">{simulatedMetrics.requests.toLocaleString()}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Uptime</span>
            <span className="text-sm font-bold font-mono text-[#15803d] dark:text-emerald-400">{simulatedMetrics.uptime}%</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block">Sockets</span>
            <span className="text-sm font-bold font-mono text-slate-800 dark:text-slate-200">{simulatedMetrics.activeSockets} live</span>
          </div>
        </div>

        {/* Interactive Architecture Cluster */}
        <div className="space-y-2 mb-4">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode === index;
            return (
              <div
                key={node.name}
                onClick={() => setActiveNode(index)}
                className={`p-3 rounded-xl border cursor-pointer transition-all duration-150 flex items-center justify-between ${
                  isSelected
                    ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-[#15803d] dark:border-emerald-500 shadow-sm"
                    : "bg-white dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#15803d] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {node.name}
                      {isSelected && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#15803d]/15 text-[#15803d] dark:text-emerald-400 font-mono font-semibold">
                          Active
                        </span>
                      )}
                    </h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{node.role}</p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-mono text-[#15803d] dark:text-emerald-400 flex items-center gap-1 justify-end font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    {node.status}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">{node.tech}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Terminal Console Footer */}
        <div className="p-2.5 rounded-xl bg-slate-900 text-slate-300 font-mono text-[11px] flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-emerald-400 truncate">$ picnic.deploy --target=production</span>
          </div>
          <span className="text-[10px] text-slate-400 uppercase shrink-0 font-semibold">READY</span>
        </div>
      </div>
    </div>
  );
}

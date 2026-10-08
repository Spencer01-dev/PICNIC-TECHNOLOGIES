import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  /** Override the default emerald color scheme */
  className?: string;
}

/**
 * Reusable pill badge used as a section label / eyebrow text.
 * Replaces the repeated inline-flex pill pattern used across all pages.
 */
export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={
        className ??
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[#15803d] dark:text-emerald-400 text-xs font-mono uppercase font-bold"
      }
    >
      <span>{children}</span>
    </div>
  );
}

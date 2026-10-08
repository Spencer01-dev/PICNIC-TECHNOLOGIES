import React from "react";
import SectionBadge from "./SectionBadge";

interface PageHeaderProps {
  /** Text for the pill badge (e.g. "Corporate Profile") */
  badge: string;
  /** Primary heading — plain text portion */
  title: string;
  /** Accent-colored portion of the heading */
  titleAccent: string;
  /** Subtitle paragraph text */
  subtitle: string;
  /** Optional extra content below the subtitle (e.g. filter pills) */
  children?: React.ReactNode;
}

/**
 * Shared page hero header used on about, services, projects, solutions, and contact pages.
 * Eliminates the duplicated header block that was copy-pasted on every page.
 */
export default function PageHeader({
  badge,
  title,
  titleAccent,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-3xl space-y-4">
        <SectionBadge>{badge}</SectionBadge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
          {title}{" "}
          <span className="text-[#15803d] dark:text-emerald-400">
            {titleAccent}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
}

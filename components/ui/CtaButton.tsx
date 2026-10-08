import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaVariant = "primary" | "secondary" | "outline";

interface CtaButtonProps {
  /** Link destination — uses Next.js Link */
  href: string;
  /** Button label text */
  children: React.ReactNode;
  /** Visual variant */
  variant?: CtaVariant;
  /** Show trailing arrow icon (default: true for primary) */
  showArrow?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Additional className overrides */
  className?: string;
  /** Open in new tab */
  external?: boolean;
  /** onClick handler (e.g. for closing modals) */
  onClick?: () => void;
}

const variantClasses: Record<CtaVariant, string> = {
  primary:
    "bg-[#15803d] hover:bg-[#166534] text-white font-bold shadow-md shadow-green-800/20",
  secondary:
    "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700",
  outline:
    "bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-800",
};

/**
 * Reusable CTA button that replaces the repeated green/secondary action
 * button pattern used across 10+ locations in the codebase.
 */
export default function CtaButton({
  href,
  children,
  variant = "primary",
  showArrow,
  fullWidth = false,
  className = "",
  external = false,
  onClick,
}: CtaButtonProps) {
  const shouldShowArrow = showArrow ?? variant === "primary";

  const classes = [
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm transition-all duration-200",
    variantClasses[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        <span>{children}</span>
        {shouldShowArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      <span>{children}</span>
      {shouldShowArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}

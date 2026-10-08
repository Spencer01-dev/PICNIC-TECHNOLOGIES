import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Transparent Web Development & Software Pricing",
  description:
    "Clear, upfront pricing for website development, e-commerce platforms, and admin dashboards. Portfolio sites from KES 12,000, business websites from KES 20,000, real estate from KES 17,000, and e-commerce stores from KES 40,000.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picnictechnologies.com"),
  title: {
    default: "PICNIC TECHNOLOGIES — Technology Solutions Built For Growing Businesses",
    template: "%s | PICNIC TECHNOLOGIES",
  },
  description:
    "PICNIC TECHNOLOGIES provides modern websites, custom software, ISP management platforms, mobile apps, e-commerce, and AI automation that help businesses operate, connect, and grow.",
  keywords: [
    "Web development company Kenya",
    "Software development company Kenya",
    "Website design Kenya",
    "Custom software development Kenya",
    "ISP management platform Kenya",
    "Business management systems Kenya",
    "E-commerce development Kenya",
    "Mobile app development Kenya",
    "AI solutions Kenya",
  ],
  authors: [{ name: "PICNIC TECHNOLOGIES" }],
  creator: "PICNIC TECHNOLOGIES",
  publisher: "PICNIC TECHNOLOGIES",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://picnictechnologies.com",
    siteName: "PICNIC TECHNOLOGIES",
    title: "PICNIC TECHNOLOGIES — We Build Technology That Moves Your Business Forward",
    description:
      "Technology solutions built for businesses that want to grow. Modern websites, custom software, ISP platforms, mobile apps, and AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PICNIC TECHNOLOGIES",
    description:
      "Technology solutions built for businesses that want to grow. Modern websites, custom software, and digital platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PICNIC TECHNOLOGIES",
    "url": "https://picnictechnologies.com",
    "description": "PICNIC TECHNOLOGIES provides modern websites, custom software, digital platforms, and technology solutions that help businesses operate, connect, and grow.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-[#090e17] dark:text-slate-100 antialiased flex flex-col justify-between selection:bg-emerald-500/25 selection:text-emerald-700 dark:selection:text-emerald-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

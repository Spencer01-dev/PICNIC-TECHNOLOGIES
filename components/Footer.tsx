import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Linkedin, 
  Twitter,
  Instagram
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 relative overflow-hidden pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#15803d] text-white font-bold font-display shadow-md">
                <span className="text-xl tracking-tighter">P</span>
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white">
                  PICNIC <span className="text-[#22c55e] font-light">TECHNOLOGIES</span>
                </span>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-mono">
                  ENGINEERED FOR GROWTH
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              PICNIC TECHNOLOGIES provides modern websites, custom software, digital platforms, and technology solutions that help businesses operate, connect, and grow.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                <span>SYSTEM STATUS: ALL PLATFORMS OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Nairobi, Kenya • Serving East Africa & Global Clients</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#22c55e]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services#web-development" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>Web Development</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services#custom-software" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>Custom Software</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-apps" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>Mobile Applications</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>E-Commerce Platforms</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services#ai-automation" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>AI & Automation</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/services#hosting-support" className="hover:text-[#22c55e] transition-colors flex items-center justify-between group">
                  <span>Hosting & Support</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#22c55e] transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#22c55e]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-[#22c55e] transition-colors">
                  About PICNIC
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#22c55e] transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#22c55e] transition-colors">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#22c55e] transition-colors">
                  Get a Quote / Contact
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#22c55e] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/solutions#isp-management" className="text-slate-400 hover:text-[#22c55e] text-xs">
                  • ISP Platform Suite
                </Link>
              </li>
              <li>
                <Link href="/solutions#school-management" className="text-slate-400 hover:text-[#22c55e] text-xs">
                  • School Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#22c55e]">
              Connect Directly
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:picnictechnologies2@gmail.com" 
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#22c55e] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>picnictechnologies2@gmail.com</span>
              </a>
              <a 
                href="tel:+254706656544" 
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#22c55e] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>+254 706 656 544</span>
              </a>
              <a 
                href="https://wa.me/254706656544?text=Hello%20PICNIC%20TECHNOLOGIES%2C%20I%20would%20like%20to%20discuss%20a%20project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#22c55e] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#22c55e] shrink-0" />
                <span>WhatsApp Business Line</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2 font-mono">OFFICIAL CHANNELS</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/254706656544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/company/picnic-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/picnictechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/picnictech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 PICNIC TECHNOLOGIES. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-[#22c55e] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { Mail, ExternalLink, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-tight mb-8">
              Let&apos;s build
              <br />
              something
              <br />
              worth building.
            </h2>
            <div className="flex items-center gap-2 text-[#666] text-xs font-sans font-light tracking-[0.15em] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span>Currently available</span>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-5">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="group inline-flex items-center gap-3 text-white hover:text-[#999] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="font-sans font-light text-sm tracking-wide">
                {SITE_CONFIG.email}
              </span>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white hover:text-[#999] transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-sans font-light text-sm tracking-wide">
                LinkedIn
              </span>
            </a>
            <div className="inline-flex items-center gap-3 text-[#666]">
              <MapPin className="w-4 h-4" />
              <span className="font-sans font-light text-sm tracking-wide">
                {SITE_CONFIG.location}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-sm text-[#666] tracking-widest">
            Pablo Rodriguez — Senior Product Designer
          </p>
          <p className="font-sans font-light text-[#666] text-xs tracking-wide">
            &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

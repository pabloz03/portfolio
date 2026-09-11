"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { X, Menu } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 transition-all duration-500 ${
          scrolled || menuOpen
            ? "py-4 bg-white/95 backdrop-blur-sm border-b border-black/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl text-black tracking-widest hover:opacity-60 transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Pablo Rodriguez
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-sans font-light text-[#666] hover:text-black transition-colors duration-200 tracking-[0.15em] uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="hidden md:block text-xs font-sans px-5 py-2.5 bg-black text-white tracking-widest uppercase hover:bg-[#333] transition-colors duration-200"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-0 border-t border-[#e0e0e0]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-6 border-b border-[#e0e0e0] font-display text-4xl text-black tracking-widest hover:opacity-50 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                onClick={() => setMenuOpen(false)}
                className="py-6 border-b border-[#e0e0e0] font-display text-4xl text-black tracking-widest hover:opacity-50 transition-opacity"
              >
                Contact
              </a>
            </nav>

            <div className="mt-auto pb-12">
              <p className="font-sans font-light text-xs text-[#999] tracking-widest uppercase">
                Guatemala City, Guatemala
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

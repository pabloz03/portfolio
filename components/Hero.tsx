"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideInUp, fadeIn } from "@/lib/animations";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none grain-overlay"
        aria-hidden="true"
      />

      {/* Background geometric accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#f5f5f5] clip-corner" />
        <motion.div
          className="absolute bottom-0 left-0 w-px h-[60%] bg-black/10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "bottom" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-24 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Status */}
          <motion.div variants={fadeIn} className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-sans font-light text-[#666] tracking-[0.2em] uppercase">
              Available for Senior Design Roles
            </span>
          </motion.div>

          {/* Label */}
          <motion.p
            variants={slideInUp}
            className="text-xs font-sans font-light text-[#999] tracking-[0.3em] uppercase mb-6"
          >
            Pablo Rodriguez · Senior Product Designer · Guatemala City
          </motion.p>

          {/* Headline — Bebas Neue, massive */}
          <motion.h1
            variants={slideInUp}
            className="font-display text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[9vw] text-black leading-[0.92] tracking-tight mb-8 md:mb-10"
          >
            I design
            <br />
            <span className="text-[#e0e0e0]">products</span>
            <br />
            that move
            <br />
            metrics.
          </motion.h1>

          {/* Subhead — DM Sans light */}
          <motion.p
            variants={slideInUp}
            className="text-sm md:text-base lg:text-lg font-sans font-light text-[#666] max-w-md leading-relaxed mb-10 md:mb-12 tracking-wide"
          >
            10+ years turning ambiguous problems into measurable outcomes.
            Fintech, B2B SaaS, 0→1 products.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={slideInUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-black text-white font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-[#333] transition-all duration-300"
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 border border-black text-black font-sans font-light text-xs tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-20 bg-gradient-to-b from-black/30 to-transparent"
          />
          <span className="text-[10px] font-sans font-light text-[#999] tracking-[0.3em] uppercase -rotate-90 translate-y-10">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

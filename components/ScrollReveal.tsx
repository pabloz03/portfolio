"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { slideInUp, fadeIn, scaleIn } from "@/lib/animations";

const variantMap: Record<string, Variants> = { slideInUp, fadeIn, scaleIn };

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: "slideInUp" | "fadeIn" | "scaleIn";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "slideInUp",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variantMap[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

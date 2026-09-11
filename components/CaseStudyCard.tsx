"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/portfolioData";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delay: index * 0.1,
      }}
    >
      <Link href={`/case-study/${caseStudy.slug}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#f5f5f5] aspect-[4/3] mb-5">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            unoptimized={
              caseStudy.heroImage.endsWith(".gif") ||
              caseStudy.heroImage.endsWith(".avif")
            }
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
          <div className="absolute bottom-5 right-5 w-9 h-9 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
            <ArrowUpRight className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-sans font-light text-[#999] tracking-[0.15em] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-3xl text-black leading-tight group-hover:opacity-60 transition-opacity">
            {caseStudy.title}
          </h3>
          <span className="font-display text-2xl text-[#333] whitespace-nowrap">
            {caseStudy.hook.metric}
          </span>
        </div>

        <p className="font-sans font-light text-[#666] text-sm leading-relaxed">
          {caseStudy.subtitle}
        </p>

        {/* Hover line */}
        <div className="mt-5 h-px bg-[#e0e0e0] relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-0 bg-black group-hover:w-full transition-all duration-500 ease-out" />
        </div>
      </Link>
    </motion.div>
  );
}

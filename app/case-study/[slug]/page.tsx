import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/portfolioData";
import { AnimatedMetrics } from "@/components/AnimatedMetrics";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Pablo Rodriguez`,
    description: cs.hook.statement,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextCS = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-black">
        {/* Generic hero background — grid + grain + index number */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Fine grid */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id={`grid-${cs.slug}`} width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.4" opacity="0.08"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${cs.slug})`} />
          </svg>

          {/* Large faint index number */}
          <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 pointer-events-none select-none">
            <span className="font-display leading-none text-white" style={{ fontSize: "22vw", opacity: 0.04 }}>
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Vertical accent lines */}
          <div className="absolute top-0 left-0 w-px h-full bg-white/[0.05]" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-white/[0.04]" />

          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-[0.06] grain-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-16 w-full">
          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#999] px-3 py-1 rounded-full border border-[#999]/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-3">
                {cs.title}
              </h1>
              <p className="font-sans text-[#666] text-lg">{cs.subtitle}</p>
            </div>
            <div className="text-right">
              <span className="font-display text-5xl md:text-6xl text-[#999] block">
                {cs.hook.metric}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOOK STATEMENT ───────────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-xl md:text-2xl text-black leading-relaxed max-w-3xl">
            {cs.hook.statement}
          </p>
        </div>
      </section>

      {/* ── OVERVIEW STRIP ───────────────────────────────────────────── */}
      <section className="py-12 px-6 md:px-12 lg:px-24 border-b border-[#f5f5f5]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-sans text-xs tracking-[0.15em] text-[#666] uppercase mb-2">
              Role
            </p>
            <p className="font-sans text-sm text-black leading-relaxed">
              {cs.role}
            </p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] text-[#666] uppercase mb-2">
              Timeline
            </p>
            <p className="font-sans text-sm text-black">{cs.timeline}</p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] text-[#666] uppercase mb-2">
              Year
            </p>
            <p className="font-sans text-sm text-black">{cs.year}</p>
          </div>
          <div>
            <p className="font-sans text-xs tracking-[0.15em] text-[#666] uppercase mb-2">
              Team
            </p>
            <ul className="space-y-1">
              {cs.team.map((member) => (
                <li key={member} className="font-sans text-sm text-black">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SPACE ────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-6">
              The Problem
            </p>
            <h2 className="font-display text-4xl text-black leading-tight mb-8">
              Why this mattered.
            </h2>
            <p className="font-sans text-[#666] leading-relaxed mb-6">
              {cs.problem.context}
            </p>
            <p className="font-sans text-black leading-relaxed font-medium">
              {cs.problem.insight}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-[#f5f5f5] rounded-2xl p-10">
              <p className="font-sans text-xs tracking-[0.2em] text-[#666] uppercase mb-4">
                Starting Baseline
              </p>
              <p className="font-display text-2xl md:text-3xl text-black leading-snug">
                {cs.problem.baseline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DISCOVERY ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Discovery
            </p>
            <h2 className="font-display text-4xl text-black leading-tight mb-6">
              What the research revealed.
            </h2>
            <p className="font-sans text-[#666] max-w-2xl leading-relaxed">
              {cs.discovery.research}
            </p>
          </ScrollReveal>

          <div className="space-y-8 mt-12">
            {cs.discovery.keyInsights.map((insight, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-8 items-start border-b border-black/10 pb-8">
                  <span className="font-display text-5xl text-[#999] leading-none flex-shrink-0 w-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-black text-lg leading-relaxed pt-2">
                    {insight}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ARCHITECTURE ────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Solution
            </p>
            <h2 className="font-display text-4xl text-black leading-tight mb-6">
              The architecture.
            </h2>
            <p className="font-sans text-[#666] max-w-2xl leading-relaxed">
              {cs.solution.approach}
            </p>
          </ScrollReveal>

          <div className="mt-12 relative">
            {cs.solution.architecture.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-8 items-start mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-sans text-sm font-medium">
                      {i + 1}
                    </div>
                    {i < cs.solution.architecture.length - 1 && (
                      <div className="w-px h-12 bg-[#f5f5f5] mt-2" />
                    )}
                  </div>
                  <p className="font-sans text-black leading-relaxed pt-2.5">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN ITERATIONS ────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Design Process
            </p>
            <h2 className="font-display text-4xl text-white leading-tight mb-4">
              {cs.design.direction}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {cs.design.iterations.map((iter, i) => {
              const isFinal =
                iter.title.toLowerCase().includes("final") ||
                iter.title.toLowerCase().includes("v3") ||
                (i === cs.design.iterations.length - 1 &&
                  cs.design.iterations.length > 1);
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div
                    className={`rounded-2xl p-8 h-full ${
                      isFinal
                        ? "bg-[#999]/10 border border-[#999]/30"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className={`font-display text-lg ${
                          isFinal ? "text-[#999]" : "text-white"
                        }`}
                      >
                        {iter.title}
                      </h3>
                      {isFinal && (
                        <span className="text-xs font-sans text-[#999] border border-[#999]/40 px-2 py-1 rounded-full">
                          Final
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-[#666] text-sm leading-relaxed">
                      {iter.rationale}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTATION ───────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Specifications
            </p>
            <p className="font-sans text-black leading-relaxed">
              {cs.implementation.specs}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Constraints &amp; Solutions
            </p>
            <p className="font-sans text-[#666] leading-relaxed">
              {cs.implementation.constraints}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
              Outcomes
            </p>
            <h2 className="font-display text-4xl text-black leading-tight mb-6">
              What moved.
            </h2>
          </ScrollReveal>

          <AnimatedMetrics metrics={cs.outcomes.metrics} />

          <ScrollReveal delay={0.3} className="mt-12">
            <div className="bg-white rounded-2xl p-10 border border-[#f5f5f5]">
              <p className="font-sans text-xs tracking-[0.2em] text-[#999] uppercase mb-4">
                Impact
              </p>
              <p className="font-display text-2xl text-black leading-relaxed">
                {cs.outcomes.impact}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.2em] text-[#666] uppercase mb-8">
              Next Project
            </p>
            <Link
              href={`/case-study/${nextCS.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-t-2 border-black/10 pt-10 hover:border-[#999] transition-colors duration-300"
            >
              <div>
                <h3 className="font-display text-4xl md:text-5xl text-black group-hover:text-[#999] transition-colors duration-300 leading-tight">
                  {nextCS.title}
                </h3>
                <p className="font-sans text-[#666] mt-2">
                  {nextCS.subtitle}
                </p>
              </div>
              <div className="w-14 h-14 rounded-full border border-black/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#999] group-hover:border-[#999] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

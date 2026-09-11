import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — Pablo Rodriguez",
  description: SITE_CONFIG.bio,
};

const skills = [
  { name: "UX Research", desc: "User interviews, usability testing, surveys, behavioral analytics" },
  { name: "Systems Design", desc: "Design systems, component libraries, token architecture" },
  { name: "Prototyping", desc: "High-fidelity Figma prototypes, interactive flows, micro-interactions" },
  { name: "Data Visualization", desc: "Dashboard design, chart composition, insight-first layouts" },
  { name: "Stakeholder Management", desc: "C-suite presentations, cross-functional alignment, design reviews" },
  { name: "Accessibility", desc: "WCAG 2.1 AA compliance, inclusive design, screen reader testing" },
];

const experience = [
  {
    year: "2022 – Present",
    title: "Senior Product Designer",
    company: "Independent / Freelance",
    desc: "Leading design for fintech, B2B SaaS, and 0→1 products. Clients across 3 continents.",
  },
  {
    year: "2019 – 2022",
    title: "Product Designer",
    company: "Health & Wellness Tech",
    desc: "Led redesign of enterprise healthcare platform. Established first design system, reducing QA burden by 60%.",
  },
  {
    year: "2016 – 2019",
    title: "UX Designer",
    company: "FinTech Startup",
    desc: "0→1 mobile banking product. Took from concept to 50K+ active users.",
  },
  {
    year: "2014 – 2016",
    title: "UI/UX Designer",
    company: "Digital Agency",
    desc: "Delivered 20+ client projects across e-commerce, media, and hospitality.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white pt-32">
      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-4">
            <p className="font-sans font-light text-[10px] tracking-[0.3em] text-[#999] uppercase">
              About
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="mb-16">
            <h1 className="font-display text-6xl md:text-8xl text-black leading-[1.0] tracking-tight max-w-4xl">
              Designing at the intersection of clarity and precision.
            </h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="font-sans font-light text-[#666] leading-relaxed mb-6 text-sm">
                {SITE_CONFIG.bio}
              </p>
              <p className="font-sans font-light text-[#666] leading-relaxed mb-6 text-sm">
                I believe great design is invisible. When it works, users don&apos;t
                think about the interface — they think about what they&apos;re
                accomplishing. That&apos;s the standard I hold my work to.
              </p>
              <p className="font-sans font-light text-[#666] leading-relaxed text-sm">
                Based in Guatemala City, working with teams globally — from early-stage
                startups finding product-market fit to enterprise teams scaling complex
                systems. The common thread: ambiguity in, clarity out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-0 border border-[#e0e0e0] mb-8">
                {[
                  { value: "10+", label: "Years" },
                  { value: "30+", label: "Products" },
                  { value: "5", label: "Industries" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`p-8 text-center ${i < 2 ? "border-r border-[#e0e0e0]" : ""}`}
                  >
                    <span className="font-display text-5xl text-black block mb-1">
                      {stat.value}
                    </span>
                    <span className="font-sans font-light text-[10px] text-[#999] tracking-[0.2em] uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border border-[#e0e0e0] p-6">
                <p className="font-sans font-light text-[10px] tracking-[0.2em] text-[#999] uppercase mb-3">
                  Currently
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="font-sans font-light text-sm text-black">
                    Available for senior design roles
                  </p>
                </div>
                <p className="font-sans font-light text-xs text-[#999] mt-1">
                  {SITE_CONFIG.location}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="font-sans font-light text-[10px] tracking-[0.3em] text-[#999] uppercase mb-6">
              Expertise
            </p>
            <h2 className="font-display text-6xl md:text-7xl text-black leading-tight">
              What I bring.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e0e0e0]">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.08}>
                <div className="bg-white p-8 h-full">
                  <h3 className="font-display text-2xl text-black mb-3">
                    {skill.name}
                  </h3>
                  <p className="font-sans font-light text-sm text-[#666] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="font-sans font-light text-[10px] tracking-[0.3em] text-[#999] uppercase mb-6">
              Experience
            </p>
            <h2 className="font-display text-6xl md:text-7xl text-black leading-tight">
              10+ years of practice.
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 border-b border-[#e0e0e0]">
                  <div>
                    <p className="font-sans font-light text-xs text-[#999] tracking-wide">
                      {exp.year}
                    </p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-2xl text-black mb-1">
                      {exp.title}
                    </h3>
                    <p className="font-sans font-light text-xs text-[#999] mb-3 tracking-wide">
                      {exp.company}
                    </p>
                    <p className="font-sans font-light text-sm text-[#666] leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

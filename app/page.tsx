import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { caseStudies } from "@/lib/portfolioData";
import { SITE_CONFIG } from "@/lib/constants";

const processSteps = [
  {
    number: "01",
    title: "Research",
    description:
      "Deep user interviews, competitive audits, and behavioral data. I don't guess — I investigate.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Information architecture, flow mapping, and system design before a single pixel is pushed.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Pixel-perfect specs, dev-ready handoffs, and measurable outcomes tied to business KPIs.",
  },
];

const skills = [
  "UX Research",
  "Systems Design",
  "Prototyping",
  "Data Visualization",
  "Stakeholder Management",
  "Accessibility (WCAG)",
  "0→1 Products",
  "Design Systems",
];

export default function Home() {
  const featured = caseStudies.filter((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);
  const ordered = [...featured, ...rest];

  return (
    <main>
      <Hero />

      {/* ── WORK ─────────────────────────────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] font-sans font-light text-[#999] tracking-[0.3em] uppercase mb-6">
              Selected Work
            </p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black leading-tight">
              Six projects.
              <br />
              <span className="text-[#ccc]">Measurable results.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {ordered.map((cs, i) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section id="process" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="text-[10px] font-sans font-light text-[#999] tracking-[0.3em] uppercase mb-6">
              How I Work
            </p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black leading-tight">
              Process,
              <br />
              not magic.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className={`pt-10 pb-10 ${i < processSteps.length - 1 ? "border-b md:border-b-0 border-[#e0e0e0]" : ""} ${i < 2 ? "md:border-r md:border-[#e0e0e0] md:pr-10" : ""} ${i > 0 ? "md:pl-10" : ""}`}>
                  <span className="font-display text-7xl text-[#e0e0e0] block mb-6">
                    {step.number}
                  </span>
                  <h3 className="font-display text-3xl text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-[#666] leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal>
              <p className="text-[10px] font-sans font-light text-[#999] tracking-[0.3em] uppercase mb-6">
                About
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-black leading-tight mb-8">
                Clarity is a design decision.
              </h2>
              <p className="font-sans font-light text-[#666] leading-relaxed mb-6 text-sm">
                {SITE_CONFIG.bio}
              </p>
              <p className="font-sans font-light text-[#666] leading-relaxed mb-10 text-sm">
                I&apos;ve led design for products across fintech, healthcare, and
                real estate tech — always anchored in user research and shipped
                with precise developer handoffs. My work reduces ambiguity,
                builds trust, and moves metrics.
              </p>

              <div className="flex items-center gap-8 border-t border-[#e0e0e0] pt-8">
                <div>
                  <span className="font-display text-5xl text-black block">10+</span>
                  <span className="font-sans font-light text-[10px] text-[#999] tracking-[0.2em] uppercase">Years</span>
                </div>
                <div className="w-px h-12 bg-[#e0e0e0]" />
                <div>
                  <span className="font-display text-5xl text-black block">30+</span>
                  <span className="font-sans font-light text-[10px] text-[#999] tracking-[0.2em] uppercase">Products</span>
                </div>
                <div className="w-px h-12 bg-[#e0e0e0]" />
                <div>
                  <span className="font-display text-5xl text-black block">5</span>
                  <span className="font-sans font-light text-[10px] text-[#999] tracking-[0.2em] uppercase">Industries</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-light text-[10px] tracking-[0.25em] text-[#999] uppercase mb-5 border-b border-[#e0e0e0] pb-3">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans font-light text-xs text-black px-3 py-1.5 border border-[#e0e0e0] hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans font-light text-[10px] tracking-[0.25em] text-[#999] uppercase mb-5 border-b border-[#e0e0e0] pb-3">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {["Figma", "FigJam", "Framer", "Notion", "Miro", "Loom", "Linear"].map((tool) => (
                      <span key={tool} className="font-sans font-light text-sm text-[#999]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

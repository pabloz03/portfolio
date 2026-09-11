export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  hook: { metric: string; statement: string };
  tags: string[];
  heroImage: string;
  year: string;
  role: string;
  timeline: string;
  team: string[];
  problem: { context: string; insight: string; baseline: string };
  discovery: { research: string; keyInsights: string[] };
  solution: { approach: string; architecture: string[] };
  design: { direction: string; iterations: { title: string; rationale: string }[] };
  implementation: { specs: string; constraints: string };
  outcomes: {
    metrics: { label: string; before: string; after: string; delta: string }[];
    impact: string;
  };
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "safeguard-pay",
    slug: "safeguard-pay",
    title: "Safeguard Pay",
    subtitle: "From Buried Feature to Standalone Platform",
    hook: { metric: "+35% Leads", statement: "Transformed a payment protection service buried 4 clicks deep into a standalone platform — increasing conversions by 175% and cutting bounce rate in half in 16 weeks." },
    tags: ["Product Strategy", "UX Research", "Information Architecture", "Conversion Optimization"],
    heroImage: "/images/cases/gif-1.gif",
    year: "2024",
    role: "Lead Product Designer & UX Strategist",
    timeline: "16 weeks — Discovery to Launch",
    team: ["2 Developers", "1 Product Manager", "1 Copywriter", "3 Stakeholders"],
    problem: {
      context: "Safeguard Pay had an 89% renewal rate — a product that worked — buried within a cluttered corporate site competing with 12 other services. A 2.1% conversion rate sat against a 5–7% industry average. The product wasn't the problem.",
      insight: "73% of users couldn't locate the service in under 4 clicks. 45% of support tickets were simply people asking how to sign up. The product worked. The access path was broken.",
      baseline: "2.1% conversion rate · 68% bounce rate · 45% of support tickets from lost users",
    },
    discovery: {
      research: "5 stakeholder interviews, 8 user interviews (customers + prospects), 2 months of Analytics + Hotjar analysis, competitive analysis of 5 payment protection platforms",
      keyInsights: [
        "Most common prospect feedback: \"I didn't know this existed\" — discoverability was the failure mode, not the product",
        "Users needed 3–4 minutes just to grasp the value proposition — clarity was broken before trust could form",
        "Mobile users had 2× higher bounce rates — 58% of traffic was mobile with zero mobile optimization",
        "Competitors with dedicated standalone sites showed 3× better conversion — the fix was structural, not cosmetic",
      ],
    },
    solution: {
      approach: "Dedicated standalone platform built on three pillars: Clarity (60% content reduction, single CTA per section), Trust (security certifications, testimonials, transparent pricing), Frictionless Conversion (12 form fields to 5, inline validation, progress indicators).",
      architecture: [
        "Dedicated domain — all corporate distractions removed, single product focus",
        "Benefit-led hero — value proposition readable in under 10 seconds",
        "Progressive trust — security proof then social proof before any commitment ask",
        "Streamlined form — 12 fields to 5, inline validation, guest checkout",
        "Mobile-first — 58% of traffic was mobile; desktop scaled from mobile constraints",
      ],
    },
    design: {
      direction: "High trust, low friction. Clean visual hierarchy with generous whitespace so the value proposition could breathe.",
      iterations: [
        { title: "V1: Feature-led layout", rationale: "Listed every feature prominently. Rejected — mirrored the corporate site information overload. Didn't build trust." },
        { title: "V2: Benefit-led hero", rationale: "Led with outcomes, not features. Improved but CTA placement came too late — users dropped before converting." },
        { title: "V3: Progressive trust + CTA density (Final)", rationale: "Staggered trust signals at each scroll depth with CTAs at every milestone. A/B tested hero — winning variant: +23% click-through. Shipped." },
      ],
    },
    implementation: {
      specs: "5 usability testing rounds with 15 participants. Card sorting with 12 users. Navigation depth reduced from 4 levels to 2. WCAG 2.1 AA throughout.",
      constraints: "Legacy backend required specific form field structure. Solved by abstracting the UI layer — front-end fields mapped to backend via a translation layer invisible to users.",
    },
    outcomes: {
      metrics: [
        { label: "Conversion Rate", before: "2.1%", after: "5.8%", delta: "↑175%" },
        { label: "Bounce Rate", before: "68%", after: "33%", delta: "↓52%" },
        { label: "Qualified Leads", before: "Baseline", after: "+35%", delta: "↑35%" },
        { label: "Task Completion", before: "Baseline", after: "+40%", delta: "↑40%" },
        { label: "Support Tickets", before: "Baseline", after: "-20%", delta: "↓20%" },
        { label: "Time on Page", before: "Baseline", after: "+45%", delta: "↑45%" },
      ],
      impact: "Safeguard Pay became the company's fastest-growing revenue stream. Sales cycles shortened — prospects arrived already informed.",
    },
    featured: true,
  },
  {
    id: "aurora",
    slug: "aurora",
    title: "Aurora Design System",
    subtitle: "Design System Built and Maintained for Banrural — Powering Banking Platforms Across 5 Business Areas",
    hook: { metric: "5 Business Areas", statement: "Founded Aurora from zero in 2025 — no design system existed at Banrural before this initiative. 150+ components on a semantic token architecture now power 5 business areas, from personal banking to external vendor work." },
    tags: ["Design Systems", "Component Architecture", "Cross-team Adoption"],
    heroImage: "/images/case-aurora.svg",
    year: "2025 – Present",
    role: "Design Systems Founder & Lead",
    timeline: "Ongoing — founded 2025 from zero, actively maintained",
    team: ["Personal Banking (Web/Mobile)", "Digital Channels", "Internal Products", "Marketing", "External Vendors"],
    problem: {
      context: "When I joined Banrural, no design system existed — nothing to inherit, no token library, no prior art. Every area, from personal banking to marketing, was shipping its own buttons, forms, and color usage independently. Aurora started as my own initiative, not a mandate.",
      insight: "A style guide wasn't going to fix it, and there was nothing to standardize yet — infrastructure had to be built from the ground up. The only way to earn adoption across 5 different areas was to prove the system's value in one area first, then expand.",
      baseline: "0 shared components before 2025 · 5 business areas each building UI independently · no token source of truth",
    },
    discovery: {
      research: "Audited existing UI patterns across all 5 business areas — Personal Banking (web/mobile), Digital Channels, Internal Products, Marketing, and work delivered by External Vendors — since no prior system existed to reference.",
      keyInsights: [
        "The same core components were being rebuilt independently in every area, with small inconsistencies compounding over time",
        "Engineering teams needed tokens they could consume directly in code — a component library was only as effective as its distance from the codebase",
        "A system without a clear owner would drift back to inconsistency within a few release cycles — adoption required ongoing maintenance, not a one-time handoff",
      ],
    },
    solution: {
      approach: "A semantic token architecture underneath a centrally owned component library, built from zero and proven area by area — now consumed, not forked, across all 5 business areas, versioned and maintained as product infrastructure rather than a static style guide.",
      architecture: [
        "Personal Banking (Web/Mobile) — Aurora's largest surface; web and mobile personal banking now share one component and token base instead of parallel UI implementations",
        "Digital Channels — every digital channel draws from the same source of truth, so a token or component update ships everywhere at once instead of channel by channel",
        "Internal Products — internal tools now inherit the same visual and interaction standards as customer-facing products, closing the gap between employee and customer experience",
        "Marketing — campaigns and landing experiences are built on approved, on-brand components instead of recreated UI for every launch",
        "External Vendors — external vendors and agencies build against Aurora's documented components and tokens, so third-party work ships on-brand without a rebrand pass after delivery",
      ],
    },
    design: {
      direction: "Consistency-at-scale, built from nothing. Every component decision optimized for the area that inherits it months from now, not just the one shipping this sprint.",
      iterations: [
        { title: "V1: Shared Figma library only", rationale: "Component definitions lived in design files first. Rejected — teams kept hand-building in code, and drift crept back in within weeks." },
        { title: "V2: Token-first, code-owned system (Final)", rationale: "Moved the source of truth into code-consumable tokens, with Figma as the documentation layer rather than the source. Drift stopped because there was nothing left to reinterpret. Shipped and maintained since." },
      ],
    },
    implementation: {
      specs: "150+ components documented and versioned on a semantic token architecture — color, spacing, typography, and elevation mapped to intent. Built from zero starting 2025, with no prior design system to build on. Adopted across all 5 business areas.",
      constraints: "Personal Banking, Digital Channels, Internal Products, Marketing, and External Vendors each ran on a different release cadence and risk tolerance for UI change. Solved with opt-in versioning — teams upgraded on their own schedule instead of a mandated cutover, which is what made adoption stick instead of stalling.",
    },
    outcomes: {
      metrics: [
        { label: "Business Areas Adopted", before: "0", after: "5", delta: "↑5" },
        { label: "Component Library", before: "None", after: "150+ Components", delta: "Built & Owned" },
        { label: "Token Architecture", before: "Ad hoc, per team", after: "Semantic, centralized", delta: "Systematized" },
      ],
      impact: "What started as an individual initiative in 2025, with nothing to build on, is now the default starting point for new features across all 5 business areas — including third-party vendor work — instead of every team re-deciding foundational UI choices on its own.",
    },
    featured: true,
  },
  {
    id: "guro-box",
    slug: "guro-box",
    title: "GURO Box",
    subtitle: "CrossFit Management Ecosystem — Athlete App, Admin Dashboard & Landing Page",
    hook: { metric: "-70% Admin Time", statement: "Designed three interconnected products for a CrossFit gym in 8 weeks — half the typical timeline — using AI-enhanced workflows. Coaches reclaimed 10+ hours weekly. Member churn dropped 23%." },
    tags: ["0→1 Product", "Mobile App Design", "Admin Dashboard", "AI-Enhanced Workflow"],
    heroImage: "/images/case-guro.png",
    year: "2024",
    role: "Lead Product Designer, UX Researcher, AI Workflow Specialist",
    timeline: "8 weeks — Discovery to Launch",
    team: ["2 Developers", "1 CrossFit Coach (SME)", "1 Gym Owner"],
    problem: {
      context: "GURO Box ran on paper sign-in sheets, WhatsApp groups for WOD announcements, and Excel spreadsheets. Coaches spent 2+ hours daily on administration. Athletes had zero visibility into their own progress.",
      insight: "Members absent for 2 weeks showed 100% churn risk within one month — but no system existed to detect or intervene. 91% of athletes wanted tomorrow's WOD visible by 8 PM. Both were solvable with the right architecture.",
      baseline: "2+ hrs daily admin per coach · 0% digital workout logging · no churn early-warning system",
    },
    discovery: {
      research: "12 athlete interviews, 6 in-gym observation sessions, 45-member survey, 4 coach interviews, owner workshop, competitive analysis of WODIFY, SugarWOD, and Beyond the Whiteboard",
      keyInsights: [
        "\"I want to see my progress, but I don't want to track every detail\" — athletes wanted automatic PR detection, not manual logging",
        "91% of athletes wanted tomorrow's WOD visible by 8 PM — scheduling visibility was the single most requested feature",
        "\"I need to manage the gym from my phone while coaching\" — coaches required mobile-first admin, not desktop-only tools",
        "AI synthesis: 12 interview transcripts analyzed in 2 hours instead of 12 — revealed the 2-week churn signal",
      ],
    },
    solution: {
      approach: "Three interconnected products sharing one design system: athlete web app for progress and WODs, mobile-first admin dashboard for gym management, conversion-optimized landing page.",
      architecture: [
        "Athlete web app — daily WODs, one-tap logging, automatic PR detection, community leaderboard",
        "Admin dashboard — mobile-first member management, workout publishing, at-risk member alerts (2-week flag)",
        "\"Tonight's Preview\" — WOD scheduled publishing, surfaced automatically at 8 PM daily",
        "Landing page — AI-tested 20+ headline variations, winning CTA drove 15 new members in month one",
      ],
    },
    design: {
      direction: "Context-appropriate contrast: dark for the athlete app (high-energy), light for admin (8-hour coach workday), bold for the landing page.",
      iterations: [
        { title: "V1: Unified dark experience", rationale: "Applied dark aesthetic across all three products. Rejected — dark admin was too fatiguing for full workdays. Context beats consistency." },
        { title: "V2: Dual-mode athlete dark / admin light (Final)", rationale: "Each product matched its usage context. Shipped." },
      ],
    },
    implementation: {
      specs: "AI saved 25+ hours: interview synthesis (2 hrs vs. 12), 20+ landing page A/B headline variants (+34% conversion), microcopy generation. 35+ wireframes, 5 usability testing sessions.",
      constraints: "Leaderboard real-time updates conflicted with smooth UX on slow gym WiFi. Solved with optimistic UI — display assumed success, reconciled with server in background.",
    },
    outcomes: {
      metrics: [
        { label: "Coach Admin Time", before: "2+ hrs/day", after: "35 min/day", delta: "↓70%" },
        { label: "Workout Logging Rate", before: "0%", after: "78%", delta: "↑78pp" },
        { label: "Member Churn", before: "Baseline", after: "-23%", delta: "↓23%" },
        { label: "Class Attendance", before: "Baseline", after: "+12%", delta: "↑12%" },
        { label: "Landing Conversion", before: "Baseline", after: "+34%", delta: "↑34%" },
        { label: "Delivery Timeline", before: "16 wks (estimate)", after: "8 wks (actual)", delta: "↓50%" },
      ],
      impact: "\"I can finally coach instead of doing admin work.\" — Head Coach. 15 new members attributed to the landing page in month one.",
    },
    featured: true,
  },
  {
    id: "eyefly-analytics",
    slug: "eyefly-analytics",
    title: "Eyefly Analytics",
    subtitle: "Real Estate Intelligence Dashboard — Zero to Launch",
    hook: { metric: "-85% Report Time", statement: "Designed a B2B analytics dashboard turning 47 raw data points into actionable sales intelligence — cutting weekly reporting from 6+ hours to under 1 hour and lifting lead conversion 40%." },
    tags: ["0→1 Product", "Data Visualization", "B2B SaaS", "Real Estate Tech"],
    heroImage: "/images/cases/eyefly-analytics/hero.png",
    year: "2023",
    role: "Lead Product Designer, UX Researcher, Data Visualization Specialist",
    timeline: "12 weeks — Discovery to MVP Launch",
    team: ["1 Product Manager", "2 Frontend Engineers", "1 Backend Engineer", "1 Data Analyst"],
    problem: {
      context: "Eyefly's virtual tour platform gave buyers immersive 3D property experiences — but developers had zero visibility into which units attracted interest or which floor plans drove intent. Multiple enterprise clients threatened churn without analytics.",
      insight: "Users who favorited units converted at 8× the rate of casual browsers — this signal existed in the data but was invisible to sales teams. Sales directors spent Sundays doing 6+ hours of manual reporting.",
      baseline: "6+ hrs weekly manual reporting · 0% data-driven lead targeting · multiple enterprise accounts at churn risk",
    },
    discovery: {
      research: "8 developer interviews across 3 market segments, 5 sales team workflow sessions, 3 executive interviews, 2 sales presentation observations, 6 competitive analyses, data audit of 47 available data points",
      keyInsights: [
        "\"I need to know which units to push before my Monday meeting\" — the Sunday deadline drove the entire information architecture",
        "Users who favorited units converted at 8× the rate of casual browsers — favorites became the primary dashboard signal",
        "Developments with 5+ towers required filtering to prevent overload — progressive disclosure was non-negotiable",
        "\"I need insights, not just data. Tell me what to do.\" — recommendation-first layout, not data dump",
      ],
    },
    solution: {
      approach: "Three-level progressive disclosure: glanceable overview (KPIs with trend indicators), filterable analysis (tower-level breakdowns), actionable detail (unit-level availability matrix with visual status encoding).",
      architecture: [
        "Level 1 — Glanceable KPIs: visits, favorites, leads, unique users, avg session duration with trend deltas",
        "Level 2 — Tower filtering: pill navigation for 5+ building developments, persistent across all sections",
        "Level 3 — Unit matrix: floor-by-floor grid, bold = available / light = sold, instant visual scan",
        "Insight-first: dashboard leads with the recommendation, data supports beneath",
      ],
    },
    design: {
      direction: "Data-dense but scannable. Information hierarchy driven by decision urgency — what do you need to know by Sunday evening?",
      iterations: [
        { title: "V1: Data table", rationale: "All 47 data points in tabular format. Rejected — users felt overwhelmed, not informed." },
        { title: "V2: Chart-heavy dashboard", rationale: "Better for trends but buried actionable priorities. Sales directors couldn't identify which units to push without digging." },
        { title: "V3: Insight-first layout (Final)", rationale: "Led with the unit priority recommendation, supported by data beneath. Key metrics identifiable within 5 seconds in testing. Shipped." },
      ],
    },
    implementation: {
      specs: "24 reusable dashboard components. Color-blind accessible palette. 5 usability testing sessions targeting 90%+ task completion. Real production data in prototypes surfaced scaling issues before build.",
      constraints: "Real-time data requirements conflicted with static architecture. Solved with 60-second polling — fast enough to feel live, light enough not to overload the backend at peak Monday usage.",
    },
    outcomes: {
      metrics: [
        { label: "Weekly Reporting Time", before: "6+ hrs", after: "Under 1 hr", delta: "↓85%" },
        { label: "Lead Conversion Rate", before: "Baseline", after: "+40%", delta: "↑40%" },
        { label: "User Satisfaction (SUS)", before: "68 (benchmark)", after: "94", delta: "+26 pts" },
        { label: "Enterprise Retention", before: "At-risk", after: "100%", delta: "0 churn" },
        { label: "Daily Active Usage", before: "0%", after: "78%", delta: "↑78pp" },
        { label: "New Enterprise Deals", before: "Pipeline", after: "3 closed", delta: "Analytics cited" },
      ],
      impact: "\"The favorites metric alone helped us close 15% more deals.\" Analytics became Eyefly's primary enterprise upsell lever — zero client churn post-launch.",
    },
    featured: true,
  },
  {
    id: "workplace-well",
    slug: "workplace-well",
    title: "WorkplaceWell",
    subtitle: "Mental Wellness & Team Engagement for Remote Teams",
    hook: { metric: "78% More Connected", statement: "Designed a remote wellness platform helping 78% of users feel more connected and 60% report reduced stress — by embedding 2-minute activities into existing workflows instead of building another standalone app." },
    tags: ["UX Research", "Product Design", "Mental Wellness", "Remote Work"],
    heroImage: "/images/case-5.jpg",
    year: "2023",
    role: "Product Designer",
    timeline: "10 weeks",
    team: ["1 Product Manager", "2 Engineers", "1 Clinical Psychologist (consultant)"],
    problem: {
      context: "Remote employees face compounding problems: team disconnection despite frequent meetings, elevated stress from always-on culture, and a market full of wellness tools that require new habits. 78% felt disconnected; 60% reported burnout-level stress.",
      insight: "Standalone wellness apps showed near-zero adoption in testing — users wouldn't form new habits of switching context. The insight: embed into existing workflows rather than demand new ones.",
      baseline: "78% of remote employees felt disconnected · 60% elevated stress · standalone apps near-zero adoption in testing",
    },
    discovery: {
      research: "15 qualitative user interviews across multiple industries, 300+ survey responses, competitive analysis of Calm, Headspace for Work, Teams, Donut (Slack), Culture Amp",
      keyInsights: [
        "Users prioritized 2–5 minute activities embedded in existing workflows — not standalone apps requiring new habits",
        "Team activities showed 3× higher adoption than individual wellness features — social accountability drove engagement",
        "Market gap: no existing tool combined individual mental health support with team bonding mechanics",
        "Privacy controls were prerequisite — users would not engage mood tracking without anonymity options",
      ],
    },
    solution: {
      approach: "Workflow-integrated platform: 2-minute activities surfaced inside Slack and Teams, team bonding challenges, and anonymous mood tracking with aggregate manager views — no new app required.",
      architecture: [
        "Daily pulse check — 30-second team ritual surfaced directly in Slack/Teams",
        "2-minute exercises — breathing, focus, movement — at the friction threshold users would cross",
        "Team challenges — collaborative, non-competitive weekly activities",
        "Anonymous mood board — individual privacy preserved, managers see aggregate trends only",
        "Resource library — therapist-curated content on-demand, never pushed",
      ],
    },
    design: {
      direction: "Warm, human, non-clinical. Approachable — not corporate, not medical. Sage palette, soft typography, zero jargon.",
      iterations: [
        { title: "V1: Standalone app", rationale: "Dedicated mobile app. Near-zero adoption in testing — users wouldn't switch context to a new tool. Discarded entirely." },
        { title: "V2: Workflow integration — Slack Block Kit (Final)", rationale: "Built as Slack components + web app. Met users where they already were. Adoption 3× higher in testing. Shipped." },
      ],
    },
    implementation: {
      specs: "Slack Block Kit components for in-workflow delivery. Responsive web app for detailed views. Google Calendar, Teams, and Slack integrations. 2-minute activity as a hard product constraint.",
      constraints: "Slack API rate limits created tension with desired notification frequency. Solved by designing a user cadence preference system — converted engineering constraint into user empowerment.",
    },
    outcomes: {
      metrics: [
        { label: "Users Feeling Connected", before: "22%", after: "78%", delta: "↑56pp" },
        { label: "Stress Reduction Reported", before: "Baseline", after: "60%", delta: "60% reported ↓" },
        { label: "Daily Engagement", before: "Baseline", after: "+35%", delta: "↑35%" },
        { label: "Adoption vs. Standalone", before: "Near-zero", after: "3× higher", delta: "↑3×" },
      ],
      impact: "Piloted across 3 companies with 200+ remote employees. Platform later acquired by an HR-tech company.",
    },
    featured: false,
  },
  {
    id: "multimega",
    slug: "multimega",
    title: "MultiMega CRM",
    subtitle: "Custom Order Management That Eliminated Phone-Based Tracking",
    hook: { metric: "+80% Productivity", statement: "Designed and built a custom CRM for MultiMega Servicios — centralizing order tracking, cutting phone inquiries 30%, and boosting team productivity 80% through real-time client self-service." },
    tags: ["CRM Design", "Order Management", "UX Strategy", "Productivity Tools", "Web Development"],
    heroImage: "/images/case-2.jpg",
    year: "2023",
    role: "UX Designer & Front-End Developer",
    timeline: "12 weeks",
    team: ["2 Developers", "Administrators", "Stakeholders"],
    problem: {
      context: "MultiMega Servicios managed orders through phone calls, scattered spreadsheets, and fragmented communication. No centralized system meant no real-time visibility — staff spent hours chasing status updates instead of processing orders.",
      insight: "The volume of status-request calls wasn't a client behavior problem — it was an information availability problem. Give clients self-serve visibility and the calls stop.",
      baseline: "Order status required phone inquiry · fragmented data across teams · no real-time tracking",
    },
    discovery: {
      research: "Stakeholder interviews across sales, operations, and admin teams; analysis of existing workflows; benchmarking against comparable CRM systems",
      keyInsights: [
        "Clients preferred self-service tracking — they weren't demanding phone support, they had no alternative",
        "Staff needed centralized order data with notes, scheduling, and image uploads — multiple disconnected tools were creating errors",
        "Real-time status visibility would eliminate most inbound inquiries without any process change on the client side",
      ],
    },
    solution: {
      approach: "Centralized CRM with real-time order tracking, client self-service portal, integrated communication, and events/notes system — all aligned to MultiMega's brand identity.",
      architecture: [
        "Order dashboard — centralized real-time status for all active orders",
        "Client self-service portal — order status without a phone call",
        "Notes + image upload per order — full context in one place",
        "Event scheduling — team coordination without external tools",
        "Audit trail — accountability for all order actions",
      ],
    },
    design: {
      direction: "Functional clarity. Every screen had a single job — do that job with zero ambiguity.",
      iterations: [
        { title: "Phase 1: Wireframes & stakeholder validation", rationale: "Defined user flows before any visual design. Prototypes validated with stakeholders — prevented late-stage misalignment." },
        { title: "Phase 2: UI refinement", rationale: "Iterated through usability testing with administrators — the power users — not just executives." },
      ],
    },
    implementation: {
      specs: "Led UX design, wireframing, prototyping, and front-end development. Responsive across desktop and tablet. Brand-aligned component library.",
      constraints: "Existing backend data structure was rigid and couldn't be modified. Designed the UI to make legacy data feel modern without any backend refactor.",
    },
    outcomes: {
      metrics: [
        { label: "Team Productivity", before: "Baseline", after: "+80%", delta: "↑80%" },
        { label: "Phone Inquiries", before: "Baseline", after: "-30%", delta: "↓30%" },
        { label: "Client Satisfaction", before: "Baseline", after: "+100%", delta: "↑100%" },
        { label: "Order Processing Time", before: "Baseline", after: "-40%", delta: "↓40%" },
      ],
      impact: "Eliminated the primary driver of support volume. Staff shifted from reactive inquiry handling to proactive order management.",
    },
    featured: false,
  },
  {
    id: "nova-crm",
    slug: "nova-crm",
    title: "NovaHome CRM",
    subtitle: "Order Tracking & Client Communication Platform Redesign",
    hook: { metric: "+65% Satisfaction", statement: "Redesigned NovaHome's order management — giving clients self-service tracking and staff centralized workflows — lifting satisfaction 65% and cutting manual inquiries 30% from day one." },
    tags: ["CRM Design", "Order Tracking", "UX Strategy", "Productivity Tools", "Front-End Dev"],
    heroImage: "/images/case-3.jpg",
    year: "2022",
    role: "UX/UI Designer & Front-End Developer",
    timeline: "10 weeks",
    team: ["2 Developers", "Sales Teams", "Stakeholders"],
    problem: {
      context: "NovaHome's order management ran on outdated systems and phone inquiries. Clients had no real-time visibility. Staff spent significant time answering status questions rather than processing orders. Fragmented data caused compounding errors.",
      insight: "Clients didn't want to call — they had no choice. Given a self-service alternative, they would use it immediately. The staff didn't need a better phone process; they needed the phone to stop ringing.",
      baseline: "No real-time order visibility for clients · manual inquiries consuming staff capacity · fragmented order data",
    },
    discovery: {
      research: "Stakeholder interviews to identify pain points, existing workflow analysis, competitive CRM review for client portal best practices",
      keyInsights: [
        "Clients preferred self-service tracking — they were calling because there was no other option",
        "Staff needed centralized order data with streamlined workflows — multiple disconnected systems were the root cause of errors",
        "Competitor CRMs with client portals showed dramatically lower support volume — the pattern was proven, just not applied here",
      ],
    },
    solution: {
      approach: "Client-facing self-service portal combined with a staff-side centralized order management system — both aligned to NovaHome's brand, built for zero learning curve.",
      architecture: [
        "Client portal — real-time order status without a phone call",
        "Staff dashboard — centralized order data, notes, task scheduling",
        "Integrated client updates — no switching to email or phone",
        "Brand-aligned UI — felt like NovaHome, not a generic SaaS tool",
      ],
    },
    design: {
      direction: "Clarity first. Usable by clients with varying technical comfort — zero learning curve required.",
      iterations: [
        { title: "Phase 1: Wireframes & prototype validation", rationale: "Platform structure and flows defined before any visual design. Validated with stakeholders and sales teams to eliminate assumptions early." },
        { title: "Phase 2: UI refinement", rationale: "Iterated based on feedback from actual users — sales teams and administrators — not just executive sign-off." },
      ],
    },
    implementation: {
      specs: "Led UX design and front-end development end-to-end. Responsive for desktop and tablet. NovaHome brand component library. Integrated with existing backend without modification.",
      constraints: "Backend couldn't be modified — all UX improvements had to work within the existing data structure. Front-end layer abstracted legacy complexity from both clients and staff.",
    },
    outcomes: {
      metrics: [
        { label: "Client Satisfaction", before: "Baseline", after: "+65%", delta: "↑65%" },
        { label: "Manual Inquiries", before: "Baseline", after: "-30%", delta: "↓30%" },
        { label: "Task Management Efficiency", before: "Baseline", after: "+25%", delta: "↑25%" },
      ],
      impact: "Clients adopted the self-service portal immediately — inquiry volume dropped in the first week. Staff shifted capacity from reactive support to proactive order management.",
    },
    featured: false,
  },
];

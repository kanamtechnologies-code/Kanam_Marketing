/**
 * Kanam Academy Foundations Standards Alignment — source for /one-pager/standards.
 * Keep in sync with academy curriculum docs (docs/curriculum/*).
 *
 * Primary accreditation framework remains CSTA 2017 (Levels 2 & 3A).
 * Forward map: 2026 CSTA PK–12 Standards (published summer 2026).
 */

export const STANDARDS_PACKET = {
  title: "Kanam Academy Foundations Standards Alignment",
  version: "2.0",
  revised: "July 2026",
  audience: "Grades 6–12 (ages ~11–18)",
  purpose:
    "Adoption and accreditation packet for schools, districts, after-school programs, and Scout partners. Summarizes how Kanam learning tracks align to recognized national frameworks.",
  disclaimer:
    "Prepared by Kanam Academy for curriculum alignment conversations. This packet is not a formal CSTA, ISTE, Jump$tart, or Common Core endorsement or review.",
} as const;

export const STANDARDS_FRAMEWORKS = [
  {
    name: "CSTA K–12 Computer Science Standards",
    edition: "Revised 2017",
    role: "Primary alignment for CS / tech tracks — Levels 2 (grades 6–8) and 3A (grades 9–10).",
  },
  {
    name: "CSTA PK–12 Computer Science Standards",
    edition: "2026 (published)",
    role: "Forward-compatibility map to the five foundational concepts so adoption stays current as states transition.",
  },
  {
    name: "K–12 Computer Science Framework",
    edition: "2016",
    role: "Concepts & practices that underpin CSTA.",
  },
  {
    name: "ISTE Standards for Students",
    edition: "2024 (v4.02)",
    role: "Digital citizenship, knowledge construction, computational thinking, and creative communication.",
  },
  {
    name: "Common Core State Standards — Mathematics",
    edition: "Statistics & Probability / S-ID",
    role: "Cross-curricular alignment for the Data Analyst track.",
  },
  {
    name: "National Standards for Personal Financial Education",
    edition: "Jump$tart / CEE 2021",
    role: "Primary alignment for Financial Literacy.",
  },
  {
    name: "NIST NICE (awareness themes)",
    edition: "Identify / Protect / Detect",
    role: "Defensive cybersecurity literacy — recognition and response, not exploitation.",
  },
] as const;

/** Corrected CSTA level bands (fixes older packet that mislabeled 3A as grades 6–8). */
export const CSTA_LEVEL_BANDS = [
  {
    level: "Level 2",
    grades: "Grades 6–8",
    how: "Core path for every lesson — plain-language explainers, guided practice, auto-checks.",
  },
  {
    level: "Level 3A",
    grades: "Grades 9–10",
    how: "From-scratch challenges, capstones, and extension prompts reach early high-school depth.",
  },
] as const;

export const PATH_COVERAGE = [
  {
    path: "Python & AI Foundations",
    focus: "Algorithms & Programming (primary); Impacts woven via AI ethics",
    frameworks: "CSTA 2017 AP + IC · ISTE Computational Thinker",
  },
  {
    path: "Data Analyst Track",
    focus: "Data & Analysis (primary); Common Core stats/probability",
    frameworks: "CSTA 2017 DA + IC · CCSS 6–8.SP / S-ID · ISTE Knowledge Constructor",
  },
  {
    path: "AI Literacy",
    focus: "Impacts of Computing; data & AI literacy bridges",
    frameworks: "CSTA IC/DA bridges · ISTE Digital Citizen + Knowledge Constructor",
  },
  {
    path: "Digital Literacy",
    focus: "Digital citizenship, information judgment, privacy, collaboration",
    frameworks: "ISTE Students 2024 · CSTA Impacts of Computing",
  },
  {
    path: "Cybersecurity",
    focus: "Defensive literacy & safe computing habits",
    frameworks: "NIST NICE awareness · CSTA Systems/Networks + Impacts (awareness depth)",
  },
  {
    path: "Financial Literacy",
    focus: "Personal finance decision-making across Jump$tart Topics I–VI",
    frameworks: "Jump$tart / CEE 2021 (grades 8–12 outcomes)",
  },
] as const;

/** Component → CSTA 2017 mapping for Python & AI Foundations (primary foundations track). */
export const PYTHON_FOUNDATIONS_MAP = [
  {
    component: "Variables, input/output, data types",
    codes: "2-AP-11",
    note: "Clearly named variables; types & operations",
  },
  {
    component: "Conditionals & decision logic",
    codes: "2-AP-12",
    note: "Control structures incl. compound conditionals",
  },
  {
    component: "Loops & automation",
    codes: "2-AP-12",
    note: "Nested loops and repeated processes",
  },
  {
    component: "Lists, dicts & organizing data",
    codes: "2-AP-11 · 3A-AP-14",
    note: "Level 2 fundamentals; Level 3A list generalization",
  },
  {
    component: "Functions & parameters",
    codes: "2-AP-14 · 3A-AP-17",
    note: "Procedures with parameters; modular decomposition",
  },
  {
    component: "Decomposition & program design",
    codes: "2-AP-10 · 2-AP-13 · 3A-AP-15",
    note: "Algorithms, breaking problems into parts, justifying control choices",
  },
  {
    component: "Testing, debugging & refinement",
    codes: "2-AP-17 · 3A-AP-16",
    note: "Systematic tests; iterative computational artifacts",
  },
  {
    component: "Documentation & design decisions",
    codes: "2-AP-19 · 3A-AP-23",
    note: "Document programs and design choices",
  },
  {
    component: "Capstone + AI ethics moments",
    codes: "3A-AP-13 · 2-IC-20 · 2-IC-21 · 3A-IC-25",
    note: "Personal-interest prototype; bias, tradeoffs, responsible AI use",
  },
] as const;

export const DATA_TRACK_HIGHLIGHTS = [
  {
    component: "Collect, transform & query data",
    codes: "2-DA-07 · 2-DA-08 · 3A-DA-10",
  },
  {
    component: "Create & interpret visualizations",
    codes: "3A-DA-11 · 3A-DA-12 · CCSS 6.SP.B.4 · 8.SP.A.1",
  },
  {
    component: "Refine analysis & tell the story",
    codes: "2-DA-09 · CCSS 7.SP.B · HS S-ID.B.6",
  },
  {
    component: "Data ethics & privacy",
    codes: "3A-IC-29 · 3A-IC-30 · 2-IC-21",
  },
] as const;

/** 2026 CSTA foundational concepts — conceptual forward map (not a 1:1 code rematch). */
export const CSTA_2026_FORWARD = [
  {
    concept: "Algorithms & Design",
    kanam: "Python & AI Foundations sequencing, patterns, design before code; AI Literacy “how machines decide.”",
  },
  {
    concept: "Programming",
    kanam: "Python & AI Foundations: read, write, modify, and debug real Python in the browser.",
  },
  {
    concept: "Data & Analysis",
    kanam: "Data Analyst track (primary); AI Literacy data/representation bridges.",
  },
  {
    concept: "Systems & Security",
    kanam: "Cybersecurity + Digital Literacy (accounts, privacy, scams) at awareness depth; not a full systems course.",
  },
  {
    concept: "Computing & Society",
    kanam: "AI Literacy, ethics moments across tracks, careers, digital citizenship, and societal impact.",
  },
] as const;

export const COVERAGE_SUMMARY = [
  {
    area: "Algorithms & Programming",
    level2: "Comprehensive",
    level3a: "Strong",
  },
  {
    area: "Data & Analysis",
    level2: "Comprehensive",
    level3a: "Strong",
  },
  {
    area: "Impacts of Computing",
    level2: "Strong (woven)",
    level3a: "Good (woven)",
  },
  {
    area: "Computing Systems",
    level2: "Light",
    level3a: "Light",
  },
  {
    area: "Networks & the Internet",
    level2: "Light / awareness",
    level3a: "Light / awareness",
  },
] as const;

export const ISTE_HIGHLIGHTS = [
  {
    code: "1.2 Digital Citizen",
    where: "Digital Literacy, AI Literacy, Cybersecurity, ethics moments",
  },
  {
    code: "1.3 Knowledge Constructor",
    where: "Data Analyst, AI Literacy, Digital Literacy (search & judgment)",
  },
  {
    code: "1.5 Computational Thinker",
    where: "Python & AI Foundations, Data Analyst, AI Literacy",
  },
  {
    code: "1.6 Creative Communicator",
    where: "Data visualizations, capstones, digital content creation",
  },
] as const;

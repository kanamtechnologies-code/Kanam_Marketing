/**
 * Starting guidance for outreach quotes.
 * Calibrated against common 2025–2026 comps:
 * - Family self-paced apps (e.g. Tynker-style): ~$15–30/mo
 * - 1:1 kids coding tutoring: ~$60–100/hr typical; $40–150 full range
 * - After-school STEM: ~$100–280/mo depending on frequency
 * - School CS platforms (e.g. CodeHS-style section/site): ~$1.6k–2.6k/section, ~$4k–10.5k/site
 * - Scout STEM workshops: often $20–50 one-day; multi-week paths priced higher
 */

export const PRICING = {
  family: {
    title: "Families & individual learners",
    price: "$24–34/mo",
    alt: "or $179–229 per learning path",
    detail:
      "Platform access only — structured paths, XP, and progress adults can see. Above typical self-paced coding apps because lessons are guided, checked, and standards-aligned. Live 1:1 tutoring is optional and priced separately.",
  },
  program: {
    title: "After-school & weekend programs",
    price: "$20–30/learner/mo",
    alt: "or $149–249/learner per path · min ~6–8 learners",
    detail:
      "Class codes, roster, and assignments for cohorts. Priced under many weekly STEM enrichment programs when you run it with your own staff. Add Kanam live instruction separately if needed.",
  },
  scout: {
    title: "Boy Scout & Girl Scout troops",
    price: "$129–179/learner",
    alt: "per learning path · or troop pack $900–1,600 (8–12 learners)",
    detail:
      "Multi-week structured path (not a one-day badge workshop). Flexible for troop nights. Coach notes so adult leaders can support without being CS experts.",
  },
  classroom: {
    title: "School / classroom",
    price: "$1,600–2,600",
    alt: "per class cohort · 1 path · up to ~30 seats",
    detail:
      "One instructor class for one learning path (~8-week designed pace, flexible schedule). Comparable to common CS platform section licenses. Includes dashboard, class codes, assignments, roster progress, and standards packet.",
  },
  site: {
    title: "School site license",
    price: "$4,500–8,500",
    alt: "per site · multi-class cohort",
    detail:
      "Multiple instructors and classes across paths in one cohort. Volume / district quotes available. Typical site licenses in this category often land in a similar band.",
  },
} as const;

/** Live human instruction — always sold separately from platform access. */
export const LIVE_ADD_ONS = {
  oneToOne: {
    title: "1:1 live tutoring",
    price: "$70–110/session",
    alt: "45–60 min · trial $49 · 4-pack $279–399 · 8-pack $499–749",
    detail:
      "Private live instruction for families and individual learners. Market rate for experienced kids/teen coding tutors is often ~$60–100/hr — this sits in that band. Never bundled into the monthly platform fee.",
  },
  groupLive: {
    title: "Small-group live instruction",
    price: "+$60–120/learner",
    alt: "per path · or $25–45/seat per group session",
    detail:
      "Live cohort teaching on top of the platform (not 1:1). Best when a program wants a Kanam instructor for weekly sessions.",
  },
} as const;

export const PILOT_PRICING = [
  {
    title: "Family pilot",
    price: "$79",
    detail: "One learning path (platform) — or first month at $15. Tutoring optional.",
  },
  {
    title: "Troop / after-school pilot",
    price: "$600–1,200",
    detail: "8–15 learners · one path · one cohort",
  },
  {
    title: "School class pilot",
    price: "$500–1,000",
    detail: "1 class · 1 cohort · credited toward a full cohort license if you convert",
  },
] as const;

export const PRICING_INCLUDES = [
  "Five learning paths · 76 interactive lessons",
  "Flexible schedule (designed for ~8 weeks at ~2 sessions/week)",
  "Chromebook & mobile ready · no special software install",
  "Instructor tools: class codes, roster, assignments, XP",
  "Standards-aligned curriculum documentation available",
  "Guided demo lesson — try before you commit",
] as const;

export const PRICING_OPTIONS = [
  {
    title: "Sibling / 2nd learner",
    detail: "25% off platform access for each additional learner in the same household.",
  },
  {
    title: "Volume (programs)",
    detail: "10–19 learners: standard. 20–39: ~10% off. 40+: custom quote.",
  },
  {
    title: "Pay monthly or per path",
    detail: "Monthly for ongoing access; per-path for a clear cohort finish line.",
  },
  {
    title: "Tutoring trial",
    detail: "Single 1:1 intro session at $49 before buying a pack.",
  },
  {
    title: "Pilot credit",
    detail: "Paid pilots can credit toward a full cohort or site license if you convert within 60 days.",
  },
] as const;

export const PRICING_CONTEXT = [
  {
    title: "Platform vs live",
    detail:
      "Platform = software + curriculum. Live 1:1 / small-group = human teaching time. Always quote them separately.",
  },
  {
    title: "What “cohort” means",
    detail:
      "A cohort is one learning path for a defined group (~8-week designed pace). Schedule can flex faster or slower.",
  },
  {
    title: "How this compares",
    detail:
      "Self-paced coding apps often run ~$15–30/mo. Weekly STEM enrichment can run ~$100–280/mo. School CS section licenses often ~$1.6k–2.6k; site licenses often ~$4k–10k. 1:1 coding tutors often ~$60–100/hr.",
  },
  {
    title: "Not included",
    detail:
      "Devices, internet, in-person venue fees, or third-party badge/council fees (for Scout programs) unless agreed in writing.",
  },
] as const;

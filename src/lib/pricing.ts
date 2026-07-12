/**
 * Family & partner pricing — keep in sync with /one-pager/pricing.
 * Family: $30/mo subscription, or $100–200 per async learning track.
 */

export const PRICING = {
  family: {
    title: "Families & individual learners",
    price: "$30/mo",
    alt: "or $100–200 per learning track",
    detail:
      "Platform access — structured paths, XP, and progress adults can see. Pay monthly for ongoing access, or pay per track for a clear finish line. Live 1:1 tutoring is optional and priced separately.",
  },
  program: {
    title: "After-school & weekend programs",
    price: "Custom quote",
    alt: "based on learner count & schedule",
    detail:
      "Class codes, roster, and assignments for cohorts. Add Kanam live instruction if needed. Contact us for a quote.",
  },
  scout: {
    title: "Boy Scout & Girl Scout troops",
    price: "Custom quote",
    alt: "troop packs available",
    detail:
      "Multi-week structured path with optional Kanam live instruction. Flexible for troop nights. Leaders see progress without needing to teach CS themselves.",
  },
  classroom: {
    title: "School / classroom",
    price: "Custom quote",
    alt: "per class cohort",
    detail:
      "One class for one learning path — dashboard, class codes, assignments, roster progress, and standards packet. Contact us for pricing.",
  },
  site: {
    title: "School site license",
    price: "Custom quote",
    alt: "multi-class · volume available",
    detail:
      "Multiple instructors and classes across paths. District quotes available on request.",
  },
} as const;

/** Live human instruction — always sold separately from platform access. */
export const LIVE_ADD_ONS = {
  oneToOne: {
    title: "1:1 live tutoring",
    price: "$70–110/session",
    duration: "45–60 min",
    trial: "$49",
    packs: [
      { label: "4-pack", price: "$279–399" },
      { label: "8-pack", price: "$499–749" },
    ],
    alt: "45–60 min · trial $49 · 4-pack $279–399 · 8-pack $499–749",
    detail:
      "Private live instruction for families and individual learners. Never bundled into the monthly subscription or per-track fee.",
  },
  groupLive: {
    title: "Small-group live instruction",
    price: "Custom quote",
    alt: "for programs & schools",
    detail:
      "Live cohort teaching on top of the platform. Best when a program wants a Kanam instructor for weekly sessions.",
  },
} as const;

export const PRICING_INCLUDES = [
  "Five learning paths · 76 interactive lessons",
  "Flexible schedule (designed for ~8 weeks at ~2 sessions/week)",
  "Chromebook & mobile ready · no special software install",
  "Program tools: class codes, roster, assignments, XP",
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
    detail: "Program and school pricing quoted by learner count and delivery model.",
  },
  {
    title: "Pay monthly or per track",
    detail: "Monthly ($30) for ongoing access; per-track ($100–200) for a clear finish line.",
  },
  {
    title: "Tutoring trial",
    detail: `Single 1:1 intro session at ${LIVE_ADD_ONS.oneToOne.trial} before buying a pack.`,
  },
] as const;

export const PRICING_CONTEXT = [
  {
    title: "Platform vs live",
    detail:
      "Subscription or per-track = software + curriculum. Live 1:1 = human teaching time. Always priced separately.",
  },
  {
    title: "What a track is",
    detail:
      "A learning track (path) is one structured curriculum — designed for about eight weeks at two sessions per week, with flexible pacing.",
  },
  {
    title: "Not included",
    detail:
      "Devices, internet, in-person venue fees, or third-party badge/council fees (for Scout programs) unless agreed in writing.",
  },
] as const;

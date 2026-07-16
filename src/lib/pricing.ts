/**
 * Family & partner pricing — keep in sync with /one-pager/pricing and Stripe catalog.
 * Self-serve: $30/mo subscription, per-track prices below, and 1:1 tutoring.
 * Schools / programs / Scouts: custom quote.
 *
 * Each learning track = 16 sessions over 8 weeks (2 sessions/week). Pacing can flex.
 */

/** Designed length of one full learning track. */
export const TRACK_PROGRAM = {
  sessions: 16,
  weeks: 8,
  sessionsPerWeek: 2,
  label: "16 sessions over 8 weeks",
  shortLabel: "16 sessions · 8 weeks",
  detail:
    "One full track is designed as 16 sessions over 8 weeks (about 2 sessions per week). Families and programs can go faster or slower.",
} as const;

export const PRICING = {
  family: {
    title: "Families & individual learners",
    price: "$30/mo",
    alt: "or buy one full track (16 sessions) from $100",
    detail:
      "Platform access — six structured paths, XP, and progress adults can see. Pay monthly for ongoing access to all tracks, or buy one full track (16 sessions over 8 weeks) for a clear finish line. Live 1:1 tutoring is optional and priced separately.",
  },
  program: {
    title: "After-school & weekend programs",
    price: "Custom quote",
    alt: "based on learner count & schedule",
    detail:
      "Class codes, roster, and assignments for cohorts. Add Kanam live instruction if needed — taught by industry professionals. Contact us for a quote.",
  },
  scout: {
    title: "Boy Scout & Girl Scout troops",
    price: "Custom quote",
    alt: "troop pricing available",
    detail:
      "Multi-week structured path with optional Kanam live instruction. Flexible for troop nights. Leaders see progress without needing to teach CS themselves.",
  },
  classroom: {
    title: "School / classroom",
    price: "Custom quote",
    alt: "per class cohort",
    detail:
      "One class for one learning path — dashboard, class codes, assignments, roster progress, and CSTA standards packet. Contact us for pricing.",
  },
  site: {
    title: "School site license",
    price: "Custom quote",
    alt: "multi-class · volume available",
    detail:
      "Multiple instructors and classes across paths. District quotes available on request.",
  },
} as const;

/** Per-path self-serve prices (one-time unlock). */
export const TRACK_PRICES = [
  {
    slug: "financial-literacy",
    name: "Financial Literacy",
    price: 100,
    priceLabel: "$100",
  },
  {
    slug: "digital-literacy",
    name: "Digital Literacy",
    price: 100,
    priceLabel: "$100",
  },
  {
    slug: "ai-literacy",
    name: "AI Literacy",
    price: 149,
    priceLabel: "$149",
  },
  {
    slug: "ai-python",
    name: "AI + Python Starter Pack",
    price: 169,
    priceLabel: "$169",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    price: 200,
    priceLabel: "$200",
  },
  {
    slug: "data-analyst",
    name: "Data Analyst Track",
    price: 200,
    priceLabel: "$200",
  },
] as const;

export const TRACK_PRICE_RANGE_LABEL = "$100–$200";

/** One-line value frame for track pricing surfaces. */
export const TRACK_VALUE_BLURB = `Each track is a full program: ${TRACK_PROGRAM.label} (flexible pacing). Prices below are for the complete track — not a single session.`;

/** Live human instruction — always sold separately from platform access. */
export const LIVE_ADD_ONS = {
  oneToOne: {
    title: "1:1 live tutoring",
    price: "$90/session",
    sessionPrice: 90,
    sessionPriceLabel: "$90",
    duration: "45–60 min",
    trial: "$49",
    trialPrice: 49,
    bundles: [
      {
        label: "4-session bundle",
        sessions: 4,
        price: "$325",
        priceAmount: 325,
        note: "Save $35 vs single sessions",
      },
      {
        label: "8-session bundle",
        sessions: 8,
        price: "$650",
        priceAmount: 650,
        note: "Save $70 vs single sessions",
      },
      {
        label: "16-session bundle",
        sessions: 16,
        price: "$1,250",
        priceAmount: 1250,
        note: "Full track · save $190 vs single sessions",
      },
    ],
    alt: "45–60 min · trial $49 · regular $90 · 4 sessions $325 · 8 sessions $650 · 16 sessions $1,250",
    detail:
      "Private live sessions with industry professionals who bring years of real-world experience. The 16-session bundle matches one full track. Never bundled into the monthly subscription or per-track fee.",
  },
  groupLive: {
    title: "Small-group live instruction",
    price: "Custom quote",
    alt: "for programs & schools",
    detail:
      "Live cohort teaching by Kanam instructors — industry professionals with years of experience — on top of the platform.",
  },
} as const;

export const PRICING_INCLUDES = [
  "Six learning paths · 92 interactive lessons",
  `Each track = ${TRACK_PROGRAM.label} (flexible pacing · grades 6–12)`,
  "Instructors who are industry professionals with years of experience",
  "Chromebook & mobile ready · no special software install",
  "Program tools: class codes, roster, assignments, XP",
  "Built to align with CSTA K–12 CS Standards · curriculum packet available",
  "Guided demo at learn.kanamacademy.com — try before you commit",
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
    detail: `Monthly ($30) for all tracks; or buy one full track (${TRACK_PROGRAM.shortLabel}, ${TRACK_PRICE_RANGE_LABEL}).`,
  },
  {
    title: "Tutoring trial",
    detail: `Single 1:1 intro session at ${LIVE_ADD_ONS.oneToOne.trial} before buying more sessions. Live sessions are separate from the 16-session track curriculum.`,
  },
] as const;

export const PRICING_CONTEXT = [
  {
    title: "Platform vs live",
    detail:
      "Subscription or per-track = software + full curriculum. Live 1:1 = human teaching time with industry professionals. Always priced separately.",
  },
  {
    title: "What a track is",
    detail: TRACK_PROGRAM.detail,
  },
  {
    title: "Track price vs live sessions",
    detail: `A track price (${TRACK_PRICE_RANGE_LABEL}) covers the full ${TRACK_PROGRAM.sessions}-session curriculum on the platform. Live 1:1 tutoring is ${LIVE_ADD_ONS.oneToOne.sessionPriceLabel}/session if you want an instructor alongside that work.`,
  },
  {
    title: "Not included",
    detail:
      "Devices, internet, in-person venue fees, or third-party badge/council fees (for Scout programs) unless agreed in writing.",
  },
] as const;

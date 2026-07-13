import {
  DEVICE_READY_SHORT,
  LESSONS_COUNT_LABEL,
  PACING_SHORT,
  PATHS_COUNT_LABEL,
} from "@/lib/learning-paths";
import { LIVE_ADD_ONS, PRICING } from "@/lib/pricing";

export type PartnerAudienceSlug = "schools" | "programs" | "scouts";

export type ContactRole = "family" | "teacher" | "school" | "partner" | "other";

export type PartnerAudience = {
  slug: PartnerAudienceSlug;
  href: `/educators/${PartnerAudienceSlug}`;
  eyebrow: string;
  title: string;
  shortTitle: string;
  tileBody: string;
  image: string;
  imageAlt: string;
  metaDescription: string;
  heroHeadline: string;
  heroAccent: string;
  heroBody: string;
  contactRole: ContactRole;
  contactHelpTopic: string;
  highlights: string[];
  fitFor: string[];
  howItWorks: { title: string; body: string }[];
  pricingCards: { title: string; price: string; alt: string; detail: string }[];
};

export const PARTNER_AUDIENCES: PartnerAudience[] = [
  {
    slug: "schools",
    href: "/educators/schools",
    eyebrow: "Schools & classrooms",
    title: "School admins & decision-makers",
    shortTitle: "Schools",
    tileBody:
      "Add live tech instruction to your calendar — online or on-site where available. Standards-aligned paths and progress visibility for adoption conversations.",
    image: "/images/product/leaders-school-admin.png",
    imageAlt: "School administrator reviewing learner progress on a roster dashboard",
    metaDescription:
      "Bring Kanam live instruction to your school or classroom — online or in person where available. Standards packet, progress visibility, and pricing guidance.",
    heroHeadline: "Live tech instruction",
    heroAccent: "for your school calendar",
    heroBody:
      "Kanam instructors teach the sessions. Your team hosts the learners, schedule, and space — with roster progress and standards docs for adoption conversations.",
    contactRole: "school",
    contactHelpTopic: "Live instruction for our school",
    highlights: [
      `Five learning paths · ${LESSONS_COUNT_LABEL} interactive lessons`,
      `Flexible schedule · ${PACING_SHORT}`,
      "Live instruction online — or in person where available",
      `Standards packet for adoption · ${DEVICE_READY_SHORT}`,
      "Roster view: lessons completed, XP, and last activity",
    ],
    fitFor: [
      "Class periods and advisory blocks",
      "CTE / elective tech courses",
      "Multi-class rollouts with progress visibility",
      "Admins evaluating standards fit",
    ],
    howItWorks: [
      {
        title: "Map a cohort",
        body: "Pick a learning path and a schedule that fits your periods — designed for about eight weeks at two sessions per week, with room to flex.",
      },
      {
        title: "We teach live",
        body: "Kanam instructors lead online — or on-site where available. Learners practice in the real lesson canvas with auto-checks and capstones.",
      },
      {
        title: "You see progress",
        body: "Admins and teachers get roster visibility so adoption conversations stay grounded in completion and mastery — not click-through.",
      },
    ],
    pricingCards: [
      {
        title: PRICING.classroom.title,
        price: PRICING.classroom.price,
        alt: PRICING.classroom.alt,
        detail: PRICING.classroom.detail,
      },
      {
        title: PRICING.site.title,
        price: PRICING.site.price,
        alt: PRICING.site.alt,
        detail: PRICING.site.detail,
      },
      {
        title: LIVE_ADD_ONS.groupLive.title,
        price: LIVE_ADD_ONS.groupLive.price,
        alt: LIVE_ADD_ONS.groupLive.alt,
        detail: LIVE_ADD_ONS.groupLive.detail,
      },
    ],
  },
  {
    slug: "programs",
    href: "/educators/programs",
    eyebrow: "Programs",
    title: "After-school & weekend programs",
    shortTitle: "Programs",
    tileBody:
      "Kanam instructors teach the sessions. Your staff hosts the space and schedule — without needing to be the CS expert in the room.",
    image: "/images/product/leaders-afterschool-live.png",
    imageAlt: "Kanam instructor teaching teens in an after-school program",
    metaDescription:
      "Run Kanam as an after-school or weekend cohort. Your staff hosts; Kanam teaches live. Pricing guidance, one-pager, and a form to request information.",
    heroHeadline: "After-school & weekend",
    heroAccent: "cohorts, taught by Kanam",
    heroBody:
      "Your program brings the block, the room, and the learners. We bring live instructors and a structured platform — so staff don’t need to be the CS expert.",
    contactRole: "partner",
    contactHelpTopic: "An after-school or weekend program",
    highlights: [
      "Live Kanam instruction — your staff hosts the space",
      `${PATHS_COUNT_LABEL} paths · ${LESSONS_COUNT_LABEL} lessons · ${PACING_SHORT}`,
      "Class codes, roster, and assignments for cohorts",
      "Online sessions — or in person where available",
      DEVICE_READY_SHORT,
    ],
    fitFor: [
      "After-school enrichment blocks",
      "Weekend STEM / tech cohorts",
      "Community programs without a dedicated CS teacher",
      "Partners who want teaching handled end-to-end",
    ],
    howItWorks: [
      {
        title: "Pick your block",
        body: "Choose paths and a weekly cadence that matches your after-school or weekend schedule.",
      },
      {
        title: "Host the space",
        body: "Your team coordinates attendance and the room. Kanam instructors teach live online — or in person where available.",
      },
      {
        title: "Track the roster",
        body: "See who’s completing lessons and who’s falling behind — without becoming the coding instructor yourself.",
      },
    ],
    pricingCards: [
      {
        title: PRICING.program.title,
        price: PRICING.program.price,
        alt: PRICING.program.alt,
        detail: PRICING.program.detail,
      },
      {
        title: LIVE_ADD_ONS.groupLive.title,
        price: LIVE_ADD_ONS.groupLive.price,
        alt: LIVE_ADD_ONS.groupLive.alt,
        detail: LIVE_ADD_ONS.groupLive.detail,
      },
    ],
  },
  {
    slug: "scouts",
    href: "/educators/scouts",
    eyebrow: "Youth leaders",
    title: "Scout troops & youth leaders",
    shortTitle: "Scout troops",
    tileBody:
      "Troop night, weekend cohort, or youth group — learners get live Kanam instruction while leaders see who’s moving on the roster.",
    image: "/images/product/leaders-youth-live.png",
    imageAlt: "Kanam instructor teaching teens in a youth program setting",
    metaDescription:
      "Bring Kanam live instruction to Boy Scout and Girl Scout troops or youth groups. Troop-night friendly pacing, pricing guidance, and a form to request information.",
    heroHeadline: "Troop nights &",
    heroAccent: "youth cohorts, taught live",
    heroBody:
      "Leaders bring the troop and the schedule. Kanam brings live tech instruction and a roster adults can see — without asking volunteers to teach CS.",
    contactRole: "partner",
    contactHelpTopic: "A Scout troop or youth group",
    highlights: [
      "Built for troop nights, weekend cohorts, and youth groups",
      "Live Kanam instruction — online or in person where available",
      `${PATHS_COUNT_LABEL} paths · ${LESSONS_COUNT_LABEL} lessons · flexible schedule`,
      "Leaders see progress without teaching the tech",
      DEVICE_READY_SHORT,
    ],
    fitFor: [
      "Boy Scout and Girl Scout troops",
      "Youth groups running multi-week tech cohorts",
      "Leaders who want structure without becoming CS instructors",
      "Troops that need progress visibility for parents and adults",
    ],
    howItWorks: [
      {
        title: "Fit your troop night",
        body: "Choose a path and a pacing that works for weekly meetings — flexible around the designed ~8-week cadence.",
      },
      {
        title: "We teach the tech",
        body: "Kanam instructors lead live sessions. Learners practice in the lesson canvas with checks and a real capstone.",
      },
      {
        title: "Leaders stay informed",
        body: "Roster progress shows who’s moving — so adults can support without teaching Python or cybersecurity themselves.",
      },
    ],
    pricingCards: [
      {
        title: PRICING.scout.title,
        price: PRICING.scout.price,
        alt: PRICING.scout.alt,
        detail: PRICING.scout.detail,
      },
      {
        title: LIVE_ADD_ONS.groupLive.title,
        price: LIVE_ADD_ONS.groupLive.price,
        alt: LIVE_ADD_ONS.groupLive.alt,
        detail: LIVE_ADD_ONS.groupLive.detail,
      },
    ],
  },
];

export function getPartnerAudience(slug: string): PartnerAudience | undefined {
  return PARTNER_AUDIENCES.find((a) => a.slug === slug);
}

/**
 * Deep-links into the learning app billing storefront (Stripe checkout).
 * Keep query keys in sync with learn.kanamacademy.com `/billing` BillingClient.
 */

const appBase = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://learn.kanamacademy.com"
).replace(/\/$/, "");

export type TutoringSku =
  | "trial"
  | "session"
  | "bundle4"
  | "bundle8"
  | "bundle16";

export type BillingLinkOptions = {
  /** Scroll/highlight a track row */
  track?: string;
  /** subscription | track | tutoring */
  plan?: "subscription" | "track" | "tutoring";
  /** Scroll/highlight a tutoring SKU card */
  tutoring?: TutoringSku;
  /** Explicit section id: plans | subscription | tracks | tutoring */
  section?: "plans" | "subscription" | "tracks" | "tutoring";
};

export function billingUrl(options: BillingLinkOptions = {}): string {
  const params = new URLSearchParams();
  if (options.plan) params.set("plan", options.plan);
  if (options.track) params.set("track", options.track);
  if (options.tutoring) params.set("tutoring", options.tutoring);
  if (options.section) params.set("section", options.section);
  const qs = params.toString();
  return qs ? `${appBase}/billing?${qs}` : `${appBase}/billing`;
}

export const billingLinks = {
  storefront: () => billingUrl(),
  subscription: () => billingUrl({ plan: "subscription" }),
  tracks: () => billingUrl({ plan: "track", section: "tracks" }),
  track: (slug: string) => billingUrl({ plan: "track", track: slug }),
  tutoring: () => billingUrl({ plan: "tutoring" }),
  tutoringTrial: () => billingUrl({ plan: "tutoring", tutoring: "trial" }),
  tutoringSession: () => billingUrl({ plan: "tutoring", tutoring: "session" }),
  tutoringSku: (sku: TutoringSku) => billingUrl({ plan: "tutoring", tutoring: sku }),
} as const;

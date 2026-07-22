/**
 * Purchase deep-links into the learning app.
 * Buy CTAs go to /checkout (sign-in if needed → Stripe).
 * /billing remains an in-app account storefront for signed-in users.
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

export type CheckoutLinkOptions = {
  kind: "subscription" | "track" | "tutoring";
  trackSlug?: string;
  tutoringSku?: TutoringSku;
};

/** Direct purchase: learn app signs in if needed, then opens Stripe Checkout. */
export function checkoutUrl(options: CheckoutLinkOptions): string {
  const params = new URLSearchParams();
  params.set("kind", options.kind);
  if (options.trackSlug) params.set("trackSlug", options.trackSlug);
  if (options.tutoringSku) params.set("tutoringSku", options.tutoringSku);
  return `${appBase}/checkout?${params.toString()}`;
}

/** @deprecated Prefer checkoutUrl for Buy CTAs. Kept for account/storefront links. */
export type BillingLinkOptions = {
  track?: string;
  plan?: "subscription" | "track" | "tutoring";
  tutoring?: TutoringSku;
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
  /** Account storefront (signed-in users managing purchases). */
  storefront: () => billingUrl(),
  subscription: () => checkoutUrl({ kind: "subscription" }),
  /** Stay on marketing pricing — pick a specific track Buy button. */
  tracks: () => "/pricing#tracks",
  track: (slug: string) => checkoutUrl({ kind: "track", trackSlug: slug }),
  tutoring: () => checkoutUrl({ kind: "tutoring", tutoringSku: "session" }),
  tutoringTrial: () => checkoutUrl({ kind: "tutoring", tutoringSku: "trial" }),
  tutoringSession: () => checkoutUrl({ kind: "tutoring", tutoringSku: "session" }),
  tutoringSku: (sku: TutoringSku) => checkoutUrl({ kind: "tutoring", tutoringSku: sku }),
} as const;

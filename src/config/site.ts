/**
 * Single source of truth for business facts.
 * Every value here comes from the current site (allfresh512.com) or was
 * confirmed by the owner. Do not add anything that has not been verified.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://allfresh512.com"
).replace(/\/$/, "");

export const business = {
  name: "All Fresh Cleaning Services",
  shortName: "All Fresh",
  tagline: "Cleaning done right, we go above and beyond for our clients.",
  phoneDisplay: "(512) 740-5481",
  phoneE164: "+15127405481",
  email: "allfresh512@gmail.com",
  address: {
    street: "1601 E Slaughter Ln",
    city: "Austin",
    region: "TX",
    postalCode: "78747",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/allfresh512",
    instagram: "https://www.instagram.com/allfresh512/",
  },
  googleReviewsUrl: "https://g.page/r/CZ0HQnGDHZL3EB0/review",
} as const;

/** External online quote form (BrillaPro). Opens in a new tab. */
export const quoteUrl =
  "https://brillapro.net/FreeQuoteRequest?company_id=69e990e860cea253b27ea758";

export const telHref = `tel:${business.phoneE164}`;
export const smsHref = `sms:${business.phoneE164}`;

export const serviceAreas = [
  "Austin",
  "Lakeway",
  "Bee Cave",
  "Westlake",
  "Pflugerville",
  "Georgetown",
  "Round Rock",
  "Cedar Park",
  "Leander",
  "Kyle",
  "Buda",
] as const;

export type ServiceArea = (typeof serviceAreas)[number];

/** "A, B, and C" (American English serial comma). */
export const joinList = (items: readonly string[]) =>
  items.length < 3
    ? items.join(" and ")
    : `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;

/** "Lakeway, Bee Cave, ..., and Buda": every area except Austin itself. */
export const nearbyAreasText = joinList(
  serviceAreas.filter((a) => a !== "Austin"),
);

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
] as const;

/** Set NEXT_PUBLIC_SITE_INDEXABLE=true only for the production deployment. */
export const isIndexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

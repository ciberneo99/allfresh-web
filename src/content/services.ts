/**
 * Service copy. "Included" lists are copied from the current website and are
 * only attached to the service they were published for. Services without a
 * published task list say so honestly and point to the estimate.
 */

import type { PhotoKey } from "@/content/photos";

export type Service = {
  slug: string;
  name: string;
  /** Short label used in cards. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  included?: { heading: string; items: string[]; note?: string };
  /** Shows the Standard Clean checklist, with this intro, on the service page. */
  standardClean?: { heading: string; text: string };
  /** Optional photo shown on the service page. */
  photo?: PhotoKey;
  /** Landscape photo for the service card on the home page. */
  cardPhoto: PhotoKey;
  tellUs: string[];
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    photo: "mop",
    cardPhoto: "vacuumRoom",
    name: "Residential Cleaning",
    summary: "Cleaning for your home, room by room.",
    metaTitle: "Residential Cleaning in Austin, TX",
    metaDescription:
      "Residential cleaning in Austin, Round Rock, Cedar Park, Lakeway and nearby cities. See what is included, then call or text for an estimate.",
    h1: "Residential cleaning in Austin and nearby",
    intro:
      "A clean home without the weekend of scrubbing. We clean the rooms you live in, from floors and baseboards to mirrors and bathrooms, and we always try to fit your schedule.",
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "Call or text us at (512) 740-5481, or use the Get a Quote Now button to fill out our online quote form. We will give you an estimate for your cleaning and coordinate a time that works for you.",
          "Pricing is upfront, there are no contracts, and eco-friendly options are available.",
        ],
      },
    ],
    included: {
      heading: "What's included in Residential Cleaning",
      items: [
        "Floors and stairs: sweeping, mopping, dry mop and/or vacuum",
        "Interior windows, sills and frames",
        "Blinds dusted (on request)",
        "Doors and frames",
        "Baseboards",
        "Vents",
        "Switch plates",
        "Ceiling fan blades",
        "Lamps, hanging lights and light fixtures",
        "Cobwebs removed",
        "Mirrors and frames",
        "Furniture dusted, knick-knacks and pictures dusted",
        "Beds (leave clean sheets if you want them changed)",
        "All wastebaskets emptied",
        "Fresh fragrance spray",
        "Bathrooms: toilets inside and outside, tubs and showers, tile ledges, mirrors, frames and fixtures, sinks and faucets; countertops, cabinet doors and vanity items are dusted",
      ],
    },
    tellUs: [
      "The size of your home and the number of bathrooms",
      "Whether this is a one-time visit or something recurring",
      "Any rooms or areas that need extra attention",
    ],
  },
  {
    slug: "commercial-cleaning",
    photo: "office",
    cardPhoto: "office",
    name: "Commercial Cleaning",
    summary: "Cleaning for offices, banks and other business spaces.",
    metaTitle: "Office and Commercial Cleaning in Austin, TX",
    metaDescription:
      "Office, bank and commercial cleaning for Austin-area businesses. Call or text All Fresh Cleaning Services to discuss your space and get an estimate.",
    h1: "Office and commercial cleaning in Austin",
    intro:
      "A clean workplace makes a good first impression on clients and a better day for your team. We clean offices, banks and more. Tell us about your space and we will put together an estimate.",
    sections: [
      {
        heading: "Every space is different",
        paragraphs: [
          "Offices, banks and other business spaces all have different needs, so we start with a conversation instead of a fixed package. Call or text (512) 740-5481 and we will talk through what your space needs and how often.",
          "We offer flexible scheduling with no contracts, and we give you upfront pricing before any work starts.",
        ],
      },
    ],
    included: {
      heading: "What's included in Commercial Cleaning",
      items: [
        "Vacuuming and mopping floors",
        "Taking out the trash",
        "Cleaning the break room",
        "Cleaning restrooms",
        "Cleaning desks",
        "Mopping or vacuuming common areas",
      ],
      note: "The exact tasks depend on your space. Tell us what you need and we will tailor the cleaning to it.",
    },
    tellUs: [
      "The type of business and the approximate size of the space",
      "How often you would like it cleaned",
      "Any hours when the space is empty and easiest to clean",
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    photo: "vacuum",
    cardPhoto: "cabinets",
    name: "Move In / Move Out Cleaning",
    summary: "A thorough clean for the place you leave or arrive at.",
    metaTitle: "Move-In and Move-Out Cleaning in Austin, TX",
    metaDescription:
      "Move-in and move-out cleaning in the Austin area, including inside closets, cabinets, the oven and the refrigerator. Call or text for an estimate.",
    h1: "Move-in and move-out cleaning",
    intro:
      "Moving is busy enough. We clean the empty home so you can hand over the keys, or walk into your new place, with one thing already done.",
    sections: [
      {
        heading: "Beyond a regular clean",
        paragraphs: [
          "Move-in and move-out cleaning includes the inside of closets and cabinets, and a thorough clean inside the oven and refrigerator.",
          "Call or text (512) 740-5481 with your moving dates and we will coordinate the timing with you.",
        ],
      },
    ],
    included: {
      heading: "What's included in Move In / Move Out Cleaning",
      items: [
        "Floors and stairs: sweeping, mopping, dry mop and/or vacuum",
        "Interior windows, sills and frames",
        "Blinds dusted (on request)",
        "Doors and frames",
        "Baseboards",
        "Vents",
        "Switch plates",
        "Ceiling fan blades",
        "Lamps, hanging lights and light fixtures",
        "Cobwebs removed",
        "Mirrors and frames",
        "Inside closets and cabinets",
        "Fresh fragrance spray",
        "Bathrooms",
        "Kitchen: the oven and refrigerator are thoroughly cleaned inside",
      ],
    },
    tellUs: [
      "Your move-out or move-in date",
      "Whether the home will be empty when we arrive",
      "The size of the home and the number of bathrooms",
    ],
  },
  {
    slug: "one-time-cleaning",
    photo: "bathroom",
    cardPhoto: "kitchenGloves",
    name: "One-time Cleaning",
    summary: "A single visit with no commitment.",
    metaTitle: "One-time Cleaning in Austin, TX",
    metaDescription:
      "One-time cleaning in Austin and nearby cities with no contracts. Call or text All Fresh Cleaning Services for an estimate.",
    h1: "One-time cleaning with no contract",
    intro:
      "Hosting guests, catching up after a busy stretch, or just curious how we work? A one-time cleaning gives you a fresh start without signing up for anything.",
    sections: [
      {
        heading: "No contracts",
        paragraphs: [
          "Our scheduling is flexible and we do not require contracts. You get an estimate up front, and if you like the result you can talk to us about regular visits later.",
          "Call or text (512) 740-5481 to ask for an estimate and check availability.",
        ],
      },
    ],
    standardClean: {
      heading: "What a one-time cleaning covers",
      text:
        "A one-time cleaning is very close to our Standard Clean, adjusted to what you want. Tell us which rooms and tasks matter most and we will tailor the visit.",
    },
    tellUs: [
      "What the visit is for, such as an event, a busy season or a first clean",
      "The size of your home and the number of bathrooms",
      "Any areas you would like us to focus on",
    ],
  },
  {
    slug: "regular-cleaning",
    photo: "dusting",
    cardPhoto: "sideTable",
    name: "Regular Cleaning",
    summary: "Recurring visits that keep things fresh.",
    metaTitle: "Regular Cleaning in Austin, TX",
    metaDescription:
      "Regular recurring cleaning in the Austin area with flexible scheduling and no contracts. Call or text All Fresh Cleaning Services for an estimate.",
    h1: "Regular cleaning that fits your schedule",
    intro:
      "Keeping a home or space clean is easier when it lives on the calendar. Regular cleaning means we come back on a rhythm that works for you.",
    sections: [
      {
        heading: "A plan built around you",
        paragraphs: [
          "We offer flexible scheduling with no contracts, so you can book a cleaning or customize a plan to suit your household or business.",
          "Call or text (512) 740-5481 and tell us how often you would like us to come. We will give you an estimate and coordinate the schedule.",
        ],
      },
    ],
    standardClean: {
      heading: "What a regular cleaning covers",
      text:
        "Regular visits follow our Standard Clean checklist and are customized to your household or business. Tell us what you would like done each time and we will build the plan around it.",
    },
    tellUs: [
      "How often you would like cleanings to happen",
      "The size of the space and the number of bathrooms",
      "Preferred days or times of day",
    ],
  },
  {
    slug: "housekeeping",
    photo: "kitchen",
    cardPhoto: "bedroom",
    name: "Housekeeping",
    summary: "Ongoing help keeping your home in order.",
    metaTitle: "Housekeeping Services in Austin, TX",
    metaDescription:
      "Housekeeping services in the Austin area from All Fresh Cleaning Services. Call or text (512) 740-5481 to discuss what you need.",
    h1: "Housekeeping services in Austin",
    intro:
      "Housekeeping is about steady, dependable help around the home. Tell us what you need and we will talk through how we can support you.",
    sections: [
      {
        heading: "Start with a conversation",
        paragraphs: [
          "Every household looks after things differently, so we begin by listening. Call or text (512) 740-5481 or request a quote online, and we will discuss what you need and give you an estimate.",
          "You can expect trusted, reliable professionals and upfront pricing with no surprises.",
        ],
      },
    ],
    standardClean: {
      heading: "What housekeeping covers",
      text:
        "Housekeeping is almost the same as a Standard Clean, and it depends on what you want. We will agree on the tasks with you and adjust them as your needs change.",
    },
    tellUs: [
      "What kind of help you are looking for around the home",
      "How often you would like us to come",
      "The size of your home",
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

import { nearbyAreasText } from "@/config/site";

/** FAQ answers use only facts published on allfresh512.com or confirmed by the owner. */
export const faqs = [
  {
    q: "How do I get an estimate?",
    a: "Call or text (512) 740-5481, or use the Get a Quote Now button to fill out our online quote form. We will give you an estimate for your cleaning.",
  },
  {
    q: "Is requesting a quote the same as booking?",
    a: "No. A quote request is not a confirmed booking. We will get back to you to talk through the details and coordinate a time.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. We offer flexible scheduling with no contracts, and we always try to accommodate your schedule.",
  },
  {
    q: "Will the price change after the estimate?",
    a: "We aim for upfront pricing with no surprises. We will talk through your estimate with you before the work.",
  },
  {
    q: "Which areas do you serve?",
    a: `We serve Austin, Texas and the surrounding areas, including ${nearbyAreasText}.`,
  },
  {
    q: "What does your satisfaction guarantee cover?",
    a: "If we missed an area, contact us within 24 hours and we will re-clean it as soon as possible. If we cannot return right away, we schedule a later appointment and do not charge you for that return cleaning.",
  },
  {
    q: "Do you offer eco-friendly options?",
    a: "Yes, eco-friendly options are available. Mention it when you ask for your estimate.",
  },
  {
    q: "What does a residential cleaning include?",
    a: "It covers floors, windows and sills, baseboards, mirrors, dusting, bathrooms and more. See the full list on the Residential Cleaning page.",
  },
] as const;

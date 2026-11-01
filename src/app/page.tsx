import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChecklistTabs } from "@/components/ChecklistTabs";
import { FeatureIcon } from "@/components/Illustrations";
import { Reviews } from "@/components/Reviews";
import {
  ButtonLink,
  CheckList,
  CtaButtons,
  Pill,
  Section,
} from "@/components/ui";
import {
  business,
  nearbyAreasText,
  quoteUrl,
  serviceAreas,
  telHref,
} from "@/config/site";
import { areaHref, areaSlug } from "@/content/areas";
import { faqs } from "@/content/faq";
import { photos } from "@/content/photos";
import { getService, services } from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: `${business.name} | Cleaning Services in Austin, TX` },
  description:
    "Residential, commercial and move-in/move-out cleaning in Austin, Round Rock, Cedar Park, Lakeway and nearby cities. Call or text (512) 740-5481 for an estimate.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    title: "Contact us",
    text: `Text or call ${business.phoneDisplay}, or request a quote online.`,
  },
  {
    title: "Get your estimate",
    text: "We give you an estimate for your cleaning, with upfront pricing.",
  },
  {
    title: "Coordinate the service",
    text: "We always try to accommodate your schedule, with no contracts.",
  },
];

const facts: { value: string; label: string; href?: string }[] = [
  { value: String(services.length), label: "cleaning services" },
  { value: String(serviceAreas.length), label: "cities served" },
  { value: "0", label: "contracts required" },
  { value: "100%", label: "satisfaction guaranteed", href: "/satisfaction-guarantee" },
];

type Feature = {
  icon: "shield" | "calendar" | "tag" | "leaf" | "star" | "clock";
  title: string;
  text: string;
  href?: string;
};

const features: Feature[] = [
  {
    icon: "shield",
    title: "Trusted & experienced professionals",
    text: "Consistently reliable and completely trustworthy.",
  },
  {
    icon: "calendar",
    title: "Flexible scheduling",
    text: "We always try to accommodate your schedule. No contracts.",
  },
  {
    icon: "tag",
    title: "Upfront pricing",
    text: "You get an estimate first, with no surprises.",
  },
  {
    icon: "leaf",
    title: "Eco-friendly options",
    text: "Eco-friendly options are available. Just ask.",
  },
  {
    icon: "star",
    title: "100% satisfaction guaranteed",
    text: "Tell us within 24 hours and we will re-clean any area we missed.",
    href: "/satisfaction-guarantee",
  },
  {
    icon: "clock",
    title: "Easy to reach",
    text: `Text or call ${business.phoneDisplay} for an estimate.`,
  },
];

export default function HomePage() {
  const residential = getService("residential-cleaning")!;
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-2 sm:px-5" aria-labelledby="hero-h">
        <div className="relative mx-auto max-w-[80rem] overflow-hidden rounded-[1.75rem] bg-brand-soft text-navy sm:rounded-[2rem]">
          <span aria-hidden="true" className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-brand/20" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-brand/15" />
          <div className="relative mx-auto grid max-w-site items-center gap-10 px-5 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
            <div>
              <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
                Austin, Texas &amp; nearby cities
              </span>
              <h1 id="hero-h" className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
                Residential and commercial cleaning in Austin
              </h1>
              <p className="mt-5 max-w-xl text-lg">
                {business.tagline} We clean homes and businesses in Austin and
                nearby cities, including {nearbyAreasText}.
              </p>
              <div className="mt-8">
                <CtaButtons variant="brand" />
              </div>
              <ul className="mt-8 flex flex-wrap gap-2.5 text-sm font-medium">
                {["No contracts", "Upfront pricing", "Eco-friendly options available"].map(
                  (t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5"
                    >
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] border-4 border-white shadow-xl lg:max-w-none">
              <Image
                src={photos.kitchen.src}
                alt={photos.kitchen.alt}
                width={photos.kitchen.width}
                height={photos.kitchen.height}
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 100vw"
                className="block h-[28rem] w-full object-cover object-[50%_30%] sm:h-[34rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section labelledBy="about-h">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <Pill>About us</Pill>
            <h2 id="about-h" className="mt-4 text-3xl sm:text-4xl">
              Cleaning done right, for every client
            </h2>
          </div>
          <p className="max-w-xl lg:justify-self-end">
            All Fresh Cleaning Services cleans homes and businesses across
            Austin, Texas and nearby cities. We go above and beyond for our
            clients, from a single visit to recurring service.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 pb-6 sm:grid-cols-3 sm:gap-5 sm:pb-10">
          {[
            { photo: photos.dusting, cls: "" },
            { photo: photos.bathroom, cls: "sm:translate-y-8" },
            { photo: photos.vacuum, cls: "hidden sm:block" },
          ].map(({ photo, cls }) => (
            <div
              key={photo.src}
              className={`aspect-[3/4] overflow-hidden rounded-[1.5rem] ${cls}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1152px) 360px, (min-width: 640px) 30vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dd className="font-heading text-4xl font-bold text-brand-dark sm:text-5xl">
                {f.value}
              </dd>
              <dt className="mt-1 text-sm">
                {f.href ? (
                  <Link href={f.href} className="underline underline-offset-4">
                    {f.label}
                    <span className="sr-only">: see the terms</span>
                  </Link>
                ) : (
                  f.label
                )}
              </dt>
            </div>
          ))}
        </dl>
      </Section>

      {/* Why choose us */}
      <Section tone="tint" labelledBy="why-h">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Pill>Why choose us</Pill>
            <h2 id="why-h" className="mt-4 text-3xl sm:text-4xl">
              What you can expect from us
            </h2>
            <p className="mt-3 max-w-sm">
              Here is what you can count on every time you work with All Fresh.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark">
                  <FeatureIcon name={f.icon} />
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm">
                    {f.text}
                    {f.href && (
                      <>
                        {" "}
                        <Link
                          href={f.href}
                          className="font-medium text-brand-dark underline underline-offset-4"
                        >
                          See the terms
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Services */}
      <Section tone="plain" labelledBy="services-h">
        <div className="text-center">
          <Pill>Services</Pill>
          <h2 id="services-h" className="mt-4 text-3xl sm:text-4xl">
            Our cleaning services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl">
            From a single visit to recurring service, pick what fits and we
            will tailor the estimate to your space.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={photos[s.cardPhoto].src}
                  alt={photos[s.cardPhoto].alt}
                  width={photos[s.cardPhoto].width}
                  height={photos[s.cardPhoto].height}
                  sizes="(min-width: 1152px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="block aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl group-hover:text-brand-dark">{s.name}</h3>
                  <p className="mt-2 text-sm">{s.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-dark underline underline-offset-4">
                    Learn more<span className="sr-only"> about {s.name}</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-h">
        <Pill>How it works</Pill>
        <h2 id="how-h" className="mt-4 text-3xl sm:text-4xl">
          Three simple steps
        </h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[1.5rem] bg-brand/10 p-6">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-semibold text-navy"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ButtonLink href={quoteUrl} variant="secondary">
            Get a Quote Now<span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>
        </div>
      </Section>

      {/* Reviews */}
      <Reviews />

      {/* Cleaning levels */}
      <Section tone="tint" labelledBy="compare-h">
        <Pill>What&apos;s included</Pill>
        <h2 id="compare-h" className="mt-4 scroll-mt-28 text-3xl sm:text-4xl">
          What each cleaning level covers
        </h2>
        <p className="mb-8 mt-3 max-w-2xl">
          Choose a room to see what is included in a Standard Clean, a Deep
          Clean and a Move In / Out clean. Text or call us if you have
          questions.
        </p>
        <ChecklistTabs />
      </Section>

      {/* Residential list */}
      <Section labelledBy="included-h">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Pill>Residential</Pill>
            <h2 id="included-h" className="mt-4 text-3xl sm:text-4xl">
              What&apos;s included in a residential cleaning
            </h2>
            <p className="mt-3">
              Move-in and move-out cleaning has its own list, including the
              inside of the oven and refrigerator.
            </p>
            <p className="mt-4">
              <Link
                href="/services/move-in-move-out-cleaning"
                className="font-medium text-brand-dark underline underline-offset-4"
              >
                See move-in / move-out cleaning
              </Link>
            </p>
            <div className="mt-8 aspect-[4/5] max-w-sm overflow-hidden rounded-[1.5rem]">
              <Image
                src={photos.mop.src}
                alt={photos.mop.alt}
                width={photos.mop.width}
                height={photos.mop.height}
                sizes="(min-width: 1024px) 384px, 90vw"
                className="h-full w-full object-cover object-[50%_35%]"
              />
            </div>
          </div>
          <CheckList items={residential.included!.items} />
        </div>
      </Section>

      {/* Areas */}
      <Section tone="tint" labelledBy="areas-h">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Pill>Areas served</Pill>
            <h2 id="areas-h" className="mt-4 text-3xl sm:text-4xl">
              Where we work
            </h2>
            <p className="mt-3 max-w-md">
              Serving all of Austin, Texas and the surrounding areas.
            </p>
            <p className="mt-5">
              <Link
                href="/service-areas"
                className="font-medium text-brand-dark underline underline-offset-4"
              >
                View service areas
              </Link>
            </p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {serviceAreas.map((a) => (
              <li key={a}>
                <Link
                  href={areaHref(areaSlug(a))}
                  className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-brand/20"
                >
                  <span className="text-brand-dark">
                    <FeatureIcon name="pin" size={16} />
                  </span>
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-h">
        <Pill>FAQ</Pill>
        <h2 id="faq-h" className="mt-4 text-3xl sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl className="mt-8 grid gap-5 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-[1.5rem] bg-brand/10 p-6">
              <dt className="font-semibold text-navy">{f.q}</dt>
              <dd className="mt-2 text-sm">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Final CTA */}
      <Section tone="navy">
        <h2 className="text-3xl !text-white sm:text-4xl">
          Ready for a fresh start?
        </h2>
        <p className="mt-3 max-w-2xl text-white/90">
          Text or call{" "}
          <a className="font-medium underline" href={telHref}>
            {business.phoneDisplay}
          </a>{" "}
          for an estimate and to ask about availability.
        </p>
        <div className="mt-8">
          <CtaButtons variant="dark" />
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FeatureIcon } from "@/components/Illustrations";
import { CtaButtons, PageHero, Pill, Section } from "@/components/ui";
import { serviceAreas } from "@/config/site";
import { areaCardImage, areaHref, areaSlug, getArea } from "@/content/areas";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Service Areas: Austin, Round Rock, Cedar Park and More",
  description:
    "All Fresh Cleaning Services cleans homes and businesses in Austin, Round Rock, Cedar Park, Lakeway, Kyle, Buda and more nearby Texas cities. Pick your city to see local info.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const cities = serviceAreas.map((name) => getArea(areaSlug(name))!);

  return (
    <>
      <PageHero>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-dark">
          <FeatureIcon name="pin" size={16} />
          Austin, Texas &amp; nearby cities
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl">
          Cleaning services across Austin and nearby cities
        </h1>
        <p className="mt-4 max-w-2xl text-lg">
          Serving all of Austin, Texas and the surrounding areas. Pick your
          city to see what to do around town and the services available there.
        </p>
      </PageHero>

      <Section labelledBy="areas-h">
        <Pill>Areas served</Pill>
        <h2 id="areas-h" className="mt-4 text-3xl sm:text-4xl">
          Where we work
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((a) => (
            <li key={a.slug}>
              <Link
                href={areaHref(a.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <Image
                    src={areaCardImage(a.slug)}
                    alt=""
                    width={640}
                    height={427}
                    sizes="(min-width: 1152px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="block aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow">
                    <span className="text-brand-dark">
                      <FeatureIcon name="pin" size={14} />
                    </span>
                    Texas
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl group-hover:text-brand-dark">{a.name}</h3>
                  <p className="mt-1 flex-1 text-sm">{a.facts[1] ?? a.facts[0]}</p>
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-navy px-4 py-1.5 text-sm font-medium text-white transition-colors group-hover:bg-brand-dark">
                    Explore {a.name}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl">
          Not sure whether we cover your neighborhood? Call or text us and we
          will let you know.
        </p>
      </Section>

      <Section tone="tint" labelledBy="what-h">
        <Pill>Services</Pill>
        <h2 id="what-h" className="mt-4 text-3xl sm:text-4xl">
          What we offer in every area
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="font-medium text-brand-dark underline underline-offset-4"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <CtaButtons size="sm" />
        </div>
      </Section>
    </>
  );
}

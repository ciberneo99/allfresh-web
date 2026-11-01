import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons, Section, PageHero } from "@/components/ui";
import { nearbyAreasText } from "@/config/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Cleaning Services in Austin, TX",
  description:
    "Residential, commercial, move-in/move-out, one-time, regular and housekeeping services from All Fresh Cleaning Services in the Austin area.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero>
          <h1 className="text-4xl sm:text-5xl">Cleaning services in Austin</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Six ways we can help, for homes and businesses in Austin and nearby
            cities, including {nearbyAreasText}.
          </p>
        </PageHero>

      <Section labelledBy="list-h">
        <h2 id="list-h" className="sr-only">
          All services
        </h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug} className="rounded-[1.5rem] border border-line p-6">
              <h3 className="text-2xl">
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-brand-dark"
                >
                  {s.name}
                </Link>
              </h3>
              <p className="mt-2">{s.intro}</p>
              <p className="mt-4">
                <Link
                  href={`/services/${s.slug}`}
                  className="font-medium text-brand-dark underline underline-offset-4"
                >
                  Learn more<span className="sr-only"> about {s.name}</span>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="tint">
        <h2 className="text-3xl">Not sure which service you need?</h2>
        <p className="mt-3 max-w-2xl">
          Call, text or request a quote online and we will help you work out the right
          fit and give you an estimate.
        </p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </Section>
    </>
  );
}

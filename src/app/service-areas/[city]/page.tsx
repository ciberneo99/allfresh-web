import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureIcon } from "@/components/Illustrations";
import { CtaButtons, PageHero, Pill, Section } from "@/components/ui";
import { JsonLd } from "@/lib/jsonld";
import {
  SITE_URL,
  business,
  joinList,
  quoteUrl,
  smsHref,
  telHref,
} from "@/config/site";
import { areaHref, areaImage, areas, getArea } from "@/content/areas";
import { services } from "@/content/services";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = getArea(city);
  if (!area) return {};
  return {
    title: area.titleTag,
    description: area.description,
    alternates: { canonical: areaHref(area.slug) },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: business.name,
      title: area.titleTag,
      description: area.description,
      images: [{ url: areaImage(area.slug), width: 1200, height: 800, alt: area.photoAlt }],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const area = getArea(city);
  if (!area) notFound();

  const url = `${SITE_URL}${areaHref(area.slug)}`;
  const others = areas.filter((a) => a.slug !== area.slug);
  const officialName = area.slug === "westlake" ? "West Lake Hills" : area.name;

  const faqs = [
    ...(area.extraFaqs ?? []),
    {
      q: `Do you clean in ${area.name}, Texas?`,
      a: `Yes. ${area.name} is one of the areas we serve, along with Austin and the other cities on our service areas page.`,
    },
    {
      q: `Which services can I book in ${area.name}?`,
      a: `All six of our services: ${joinList(services.map((s) => s.name.toLowerCase()))}.`,
    },
    {
      q: `How do I get an estimate in ${area.name}?`,
      a: "Text or call (512) 740-5481, or use the Get a Quote Now button to fill out our online quote form. A quote request is not a confirmed booking: we will follow up to coordinate the details.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Service areas", item: `${SITE_URL}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
      },
      {
        "@type": "Service",
        name: `Cleaning services in ${area.name}, Texas`,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: {
          "@type": "City",
          name: officialName,
          ...(officialName !== area.name ? { alternateName: area.name } : {}),
          containedInPlace: { "@type": "State", name: "Texas" },
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <PageHero>
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex flex-wrap gap-2">
                <li>
                  <Link href="/service-areas" className="underline underline-offset-4">
                    Service areas
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{area.name}</li>
              </ol>
            </nav>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              Cleaning services in {area.name}, Texas
            </h1>
            <p className="mt-4 max-w-xl text-lg">{area.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium">
              {area.facts.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5"
                >
                  <span className="text-brand-dark">
                    <FeatureIcon name="pin" size={16} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CtaButtons variant="brand" size="sm" />
            </div>
          </div>

          <figure>
            <div className="overflow-hidden rounded-[1.75rem] border-4 border-white shadow-xl">
              <Image
                src={areaImage(area.slug)}
                alt={area.photoAlt}
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="block aspect-[3/2] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs leading-relaxed">
              {area.photoCaption}. Photo: {area.credit.author} /{" "}
              <a
                href={area.credit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Wikimedia Commons<span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              /{" "}
              <a
                href={area.credit.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                {area.credit.license}<span className="sr-only"> (opens in a new tab)</span>
              </a>
              . Cropped and resized.
            </figcaption>
          </figure>
        </div>
      </PageHero>

      <Section labelledBy="things-h">
        <Pill>Explore {area.name}</Pill>
        <h2 id="things-h" className="mt-4 text-3xl sm:text-4xl">
          Things to do in {area.name}
        </h2>
        <p className="mt-3 max-w-2xl">
          A few local favorites. Details and dates change, so check the
          official listings before you go.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {area.things.map((t) => (
            <li key={t.title} className="rounded-[1.5rem] bg-brand/10 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-dark">
                <FeatureIcon name="pin" />
              </span>
              <h3 className="mt-4 font-sans text-lg font-semibold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm">{t.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl rounded-[1.5rem] border-2 border-brand bg-brand-soft p-5 text-navy">
          {area.local}
        </p>
      </Section>

      <Section tone="tint" labelledBy="services-h">
        <Pill>Our services</Pill>
        <h2 id="services-h" className="mt-4 text-3xl sm:text-4xl">
          Our cleaning services in {area.name}
        </h2>
        <p className="mt-3 max-w-2xl">
          Every service we offer is available in {area.name}. Choose one to see
          what it includes.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-sans text-lg font-semibold text-navy group-hover:text-brand-dark">
                  {s.name} in {area.name}
                </h3>
                <p className="mt-2 flex-1 text-sm">{s.summary}</p>
                <span className="mt-4 text-sm font-semibold text-brand-dark underline underline-offset-4">
                  See what it includes
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          Not sure which service you need?{" "}
          <a className="font-medium underline" href={smsHref}>
            Text
          </a>{" "}
          or{" "}
          <a className="font-medium underline" href={telHref}>
            call {business.phoneDisplay}
          </a>
          , or{" "}
          <a
            className="font-medium underline"
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            request a quote online<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </Section>

      <Section labelledBy="faq-h">
        <Pill>FAQ</Pill>
        <h2 id="faq-h" className="mt-4 text-3xl sm:text-4xl">
          Cleaning in {area.name}: questions
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

      <Section tone="plain" labelledBy="nearby-h">
        <h2 id="nearby-h" className="text-2xl sm:text-3xl">
          We also serve
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {others.map((a) => (
            <li key={a.slug}>
              <Link
                href={areaHref(a.slug)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm hover:bg-brand/20"
              >
                <span className="text-brand-dark">
                  <FeatureIcon name="pin" size={16} />
                </span>
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link
            href="/service-areas"
            className="font-medium text-brand-dark underline underline-offset-4"
          >
            See all service areas
          </Link>
        </p>
      </Section>
    </>
  );
}

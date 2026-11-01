import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StandardCleanSummary } from "@/components/StandardCleanSummary";
import { CheckList, CtaButtons, Section, PageHero } from "@/components/ui";
import { JsonLd } from "@/lib/jsonld";
import { SITE_URL, business, joinList, serviceAreas } from "@/config/site";
import { photos } from "@/content/photos";
import { getService, services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: serviceAreas.map((name) => ({ "@type": "City", name })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero>
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/services" className="underline underline-offset-4">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <h1 className="mt-4 text-4xl sm:text-5xl">{service.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg">{service.intro}</p>
          <div className="mt-8">
            <CtaButtons variant="brand" />
          </div>
        </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            {service.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-3xl">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-3 max-w-prose">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            {service.included && (
              <div>
                <h2 className="text-3xl">{service.included.heading}</h2>
                <div className="mt-5">
                  <CheckList items={service.included.items} />
                </div>
                {service.included.note && (
                  <p className="mt-5 max-w-prose">{service.included.note}</p>
                )}
              </div>
            )}
            {service.standardClean && (
              <div>
                <h2 className="text-3xl">{service.standardClean.heading}</h2>
                <p className="mt-3 max-w-prose">{service.standardClean.text}</p>
                <div className="mt-5">
                  <StandardCleanSummary slug={service.slug} />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {service.photo && (
              <div
                className={`overflow-hidden rounded-[1.5rem] ${
                  photos[service.photo].width > photos[service.photo].height
                    ? "aspect-[3/2]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photos[service.photo].src}
                  alt={photos[service.photo].alt}
                  width={photos[service.photo].width}
                  height={photos[service.photo].height}
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="h-full w-full object-cover object-[50%_35%]"
                />
              </div>
            )}
          <aside className="h-fit rounded-[1.5rem] bg-surface p-6">
            <h2 className="text-2xl">What to tell us</h2>
            <p className="mt-2 text-sm">
              These details help us give you an accurate estimate:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {service.tellUs.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm">
              Call or text{" "}
              <a
                className="font-medium text-brand-dark underline"
                href={`tel:${business.phoneE164}`}
              >
                {business.phoneDisplay}
              </a>
              .
            </p>
          </aside>
          </div>
        </div>
      </Section>

      <Section tone="tint" labelledBy="other-h">
        <h2 id="other-h" className="text-3xl">
          Other services
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="inline-block rounded-full border border-brand-dark bg-white px-4 py-2 text-sm font-medium text-brand-dark hover:bg-brand-dark hover:text-white"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          We serve {joinList(serviceAreas)}.{" "}
          <Link
            href="/service-areas"
            className="font-medium text-brand-dark underline underline-offset-4"
          >
            See service areas
          </Link>
        </p>
      </Section>
    </>
  );
}

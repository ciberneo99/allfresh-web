import type { Metadata } from "next";
import { ButtonLink, Section, PageHero } from "@/components/ui";
import { business, quoteUrl, smsHref, telHref } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact and Free Quote",
  description:
    "Text or call (512) 740-5481, or request a quote online from All Fresh Cleaning Services. Get an estimate and check availability in the Austin area.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    title: "Text us",
    text: "Our preferred way to reach us. Send a message with what you need and we will get back to you.",
    detail: business.phoneDisplay,
  },
  {
    title: "Get a quote online",
    text: "Fill out our online quote form with your details and what you need cleaned. A quote request is not a confirmed booking: we will follow up to coordinate the details.",
  },
  {
    title: "Call us",
    text: "Prefer to talk it through? Call and we will give you an estimate and talk about availability.",
    detail: business.phoneDisplay,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero>
          <h1 className="text-4xl sm:text-5xl">Contact us for a quote</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Text us, request a quote online or call. We will give you an
            estimate and talk through availability.
          </p>
        </PageHero>

      <Section labelledBy="ways-h">
        <h2 id="ways-h" className="sr-only">
          Ways to reach us
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col rounded-[1.5rem] bg-navy p-6 text-white">
            <h3 className="text-2xl !text-white">{cards[0].title}</h3>
            <p className="mt-2 flex-1 text-white/90">{cards[0].text}</p>
            <p className="mt-4 text-xl font-semibold">{cards[0].detail}</p>
            <div className="mt-4">
              <ButtonLink href={smsHref} variant="secondary" className="w-full">
                Text Us
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col rounded-[1.5rem] bg-brand-soft p-6 text-navy ring-2 ring-inset ring-brand">
            <h3 className="text-2xl">{cards[1].title}</h3>
            <p className="mt-2 flex-1">{cards[1].text}</p>
            <div className="mt-4">
              <ButtonLink href={quoteUrl} className="w-full">
                Get a Quote Now
                <span className="sr-only"> (opens in a new tab)</span>
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col rounded-[1.5rem] border-2 border-brand bg-brand/10 p-6 text-navy">
            <h3 className="text-2xl">{cards[2].title}</h3>
            <p className="mt-2 flex-1">{cards[2].text}</p>
            <p className="mt-4 text-xl font-semibold">{cards[2].detail}</p>
            <div className="mt-4">
              <ButtonLink href={telHref} variant="outline" className="w-full">
                Call Now
              </ButtonLink>
            </div>
          </div>
        </div>

        <dl className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-navy">Email</dt>
            <dd>
              <a className="underline" href={`mailto:${business.email}`}>
                {business.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-navy">Address</dt>
            <dd>
              <address className="not-italic">
                {business.address.street}, {business.address.city},{" "}
                {business.address.region} {business.address.postalCode}
              </address>
            </dd>
          </div>
        </dl>
      </Section>
    </>
  );
}

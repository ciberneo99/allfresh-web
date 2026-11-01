import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons, PageHero, Pill, Section } from "@/components/ui";
import { business } from "@/config/site";

export const metadata: Metadata = {
  title: "Satisfaction Guarantee",
  description:
    "If we missed an area, tell us within 24 hours and we will re-clean it as soon as possible, at no charge. See how the All Fresh Cleaning Services guarantee works.",
  alternates: { canonical: "/satisfaction-guarantee" },
};

const steps = [
  {
    title: "Tell us within 24 hours",
    text: `Text or call ${business.phoneDisplay} within 24 hours of your cleaning and tell us which area needs attention.`,
  },
  {
    title: "We come back to fix it",
    text: "We re-clean the area that was missed as soon as possible.",
  },
  {
    title: "If we cannot return right away",
    text: "We schedule another appointment for a later date, and you are not charged for that return cleaning.",
  },
];

export default function GuaranteePage() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl sm:text-5xl">Our satisfaction guarantee</h1>
        <p className="mt-4 max-w-2xl text-lg">
          We want every cleaning done right. If we missed something, we will
          make it right.
        </p>
      </PageHero>

      <Section labelledBy="how-h">
        <Pill>How it works</Pill>
        <h2 id="how-h" className="mt-4 text-3xl sm:text-4xl">
          Three steps to make it right
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
      </Section>

      <Section tone="tint" labelledBy="terms-h">
        <Pill>The details</Pill>
        <h2 id="terms-h" className="mt-4 text-3xl sm:text-4xl">
          What to know
        </h2>
        <ul className="mt-6 max-w-prose list-disc space-y-3 pl-5">
          <li>
            The guarantee applies when you contact us within 24 hours of the
            cleaning.
          </li>
          <li>
            It covers the areas and tasks included in your cleaning. If
            something in those areas was missed, we come back and clean it
            again.
          </li>
          <li>
            We aim to return as soon as possible. If our schedule does not
            allow it, we set a later appointment and do not charge you for
            that return cleaning.
          </li>
        </ul>
        <p className="mt-6 max-w-prose">
          Questions about the guarantee? Text or call us and we will explain.
          See also our{" "}
          <Link href="/terms" className="font-medium text-brand-dark underline underline-offset-4">
            terms of use
          </Link>
          .
        </p>
        <div className="mt-6">
          <CtaButtons size="sm" />
        </div>
      </Section>
    </>
  );
}

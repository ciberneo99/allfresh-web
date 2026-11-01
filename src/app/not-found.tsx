import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Section } from "@/components/ui";
import { mainNav, quoteUrl, smsHref, telHref, business } from "@/config/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section>
      <h1 className="text-4xl sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 max-w-xl text-lg">
        The page may have moved. Try one of these, or call us at{" "}
        <a className="font-medium underline" href={telHref}>
          {business.phoneDisplay}
        </a>
        .
      </p>
      <ul className="mt-6 flex flex-wrap gap-4">
        {mainNav.map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              className="font-medium text-brand-dark underline underline-offset-4"
            >
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={smsHref}>Text Us</ButtonLink>
        <ButtonLink href={quoteUrl} variant="secondary">
          Get a Quote Now<span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { business } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the All Fresh Cleaning Services website: quote requests, the satisfaction guarantee, third-party links and more.",
  alternates: { canonical: "/terms" },
};

const linkCls = "font-medium text-brand-dark underline underline-offset-4";

export default function TermsPage() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl sm:text-5xl">Terms of use</h1>
        <p className="mt-4 text-lg">Last updated: October 29, 2026</p>
      </PageHero>

      <Section>
        <div className="max-w-prose space-y-8">
          <p>
            These terms apply when you use the {business.name} website. By
            using it, you agree to them. If you do not agree, please do not
            use the site.
          </p>

          <div>
            <h2 className="text-2xl">Estimates and quote requests</h2>
            <p className="mt-2">
              Asking for a quote, by text, phone or our online quote form, does
              not create a confirmed booking. We will follow up with you to go
              over the details. Services, prices and schedules are confirmed
              with you directly before the work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Satisfaction guarantee</h2>
            <p className="mt-2">
              Our guarantee and how to use it are described on the{" "}
              <Link href="/satisfaction-guarantee" className={linkCls}>
                satisfaction guarantee page
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Website information</h2>
            <p className="mt-2">
              The information on this site is general and may change. We try to
              keep it accurate, but service areas, availability and what a
              particular cleaning includes are confirmed with you when we give
              your estimate. Images on this site are illustrative and do not
              necessarily show our team or a specific job.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Third-party links and forms</h2>
            <p className="mt-2">
              This site links to other services, including Google, Facebook,
              Instagram and the BrillaPro quote form. Those services have their
              own terms and privacy practices, and we are not responsible for
              them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Ownership</h2>
            <p className="mt-2">
              The {business.name} name, logo and the text of this site belong
              to us. Please do not copy them without our permission. City
              photos come from Wikimedia Commons under the licenses credited
              on each page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Limits of liability</h2>
            <p className="mt-2">
              The website is provided &ldquo;as is.&rdquo; To the extent the
              law allows, we are not liable for losses that result from using
              the website or relying on its general information. Nothing in
              these terms limits rights you have under the law or under our
              satisfaction guarantee.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of the State of Texas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Changes</h2>
            <p className="mt-2">
              We may update these terms. The date at the top shows when they
              last changed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Contact</h2>
            <p className="mt-2">
              Questions? Call or text {business.phoneDisplay} or email{" "}
              <a className={linkCls} href={`mailto:${business.email}`}>
                {business.email}
              </a>
              . See also our{" "}
              <Link href="/privacy" className={linkCls}>
                privacy notice
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

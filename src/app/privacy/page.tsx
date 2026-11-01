import type { Metadata } from "next";
import { Section, PageHero } from "@/components/ui";
import { business } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Notice (Draft)",
  description: "How the All Fresh Cleaning Services website handles your information.",
  alternates: { canonical: "/privacy" },
  // A draft must not be indexed until the owner approves it.
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero>
          <h1 className="text-4xl sm:text-5xl">Privacy notice</h1>
        </PageHero>

      <Section>
        <div className="max-w-prose space-y-6">
          <p
            role="note"
            className="rounded-control border-2 border-dashed border-ink p-4 text-sm"
          >
            <strong>Draft.</strong> This notice describes how the site works
            today and has not been legally reviewed. It is not final.
          </p>

          <div>
            <h2 className="text-2xl">What this website collects</h2>
            <p className="mt-2">
              This website does not have its own forms and does not collect
              your name, phone number or email address. If you text, call or
              email us, we receive the information you choose to share and
              use it only to respond, give you an estimate and coordinate a
              cleaning. We do not sell your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Online quote form (BrillaPro)</h2>
            <p className="mt-2">
              The &quot;Get a Quote Now&quot; button opens an online quote form
              hosted by BrillaPro (brillapro.net), a third party. What you
              enter there is sent to our customer management system and is
              handled by that service under its own privacy practices. Please
              do not include sensitive information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Cookies and tracking</h2>
            <p className="mt-2">
              This site does not use advertising or analytics trackers. Fonts
              are served from this site, not from a third party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Links to other sites</h2>
            <p className="mt-2">
              Links to Google Reviews, Facebook and Instagram open those
              services, which have their own privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">Contact</h2>
            <p className="mt-2">
              Questions? Call or text {business.phoneDisplay} or email{" "}
              <a className="underline" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

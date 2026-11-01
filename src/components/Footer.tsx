import Image from "next/image";
import Link from "next/link";
import {
  business,
  mainNav,
  serviceAreas,
  smsHref,
  telHref,
} from "@/config/site";
import { areaHref, areaSlug } from "@/content/areas";
import { services } from "@/content/services";

const linkCls = "underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="mt-auto px-3 pb-3 pt-2 sm:px-5 sm:pb-5">
      <div className="on-dark mx-auto max-w-[80rem] overflow-hidden rounded-[1.75rem] bg-navy text-white sm:rounded-[2rem]">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-control bg-white p-2">
            <Image
              src="/images/allfresh-logo.jpg"
              alt={business.name}
              width={164}
              height={80}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/85">
            {business.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold !text-white">
            Services
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkCls}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold !text-white">
            Areas served
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceAreas.map((a) => (
              <li key={a}>
                <Link href={areaHref(areaSlug(a))} className={linkCls}>
                  {a}, TX
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.slice(2).map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkCls}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-base font-semibold !text-white">
            Contact
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Call:{" "}
              <a href={telHref} className={linkCls}>
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              Text:{" "}
              <a href={smsHref} className={linkCls}>
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className={linkCls}>
                {business.email}
              </a>
            </li>
            <li>
              <address className="not-italic">
                {business.address.street}
                <br />
                {business.address.city}, {business.address.region}{" "}
                {business.address.postalCode}
              </address>
            </li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li>
              <a
                href={business.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                Google Reviews<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                Facebook<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                Instagram<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-5 text-xs text-white/80 sm:flex-row sm:justify-between sm:px-10">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <Link href="/satisfaction-guarantee" className={linkCls}>
                Satisfaction guarantee
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkCls}>
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={linkCls}>
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}

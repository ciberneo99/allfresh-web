import Link from "next/link";
import type { ReactNode } from "react";
import { quoteUrl, smsHref, telHref } from "@/config/site";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineLight"
  | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors";
const sizes = {
  md: "min-h-12 px-7 py-3 text-base",
  sm: "min-h-10 px-5 py-2 text-sm",
} as const;
type Size = keyof typeof sizes;

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-brand-dark",
  secondary: "bg-brand text-navy hover:bg-brand-alt",
  outline:
    "border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
  outlineLight:
    "border-2 border-white bg-transparent text-white hover:bg-white hover:text-navy",
  white: "bg-white text-navy hover:bg-mist",
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md") =>
  `${base} ${sizes[size]} ${variants[variant]}`;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}) {
  const cls = `${buttonClass(variant, size)} ${className}`;
  // tel:/sms: and external URLs use plain anchors; internal routes use Link.
  if (/^(tel|sms|mailto|https?):/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/**
 * The three standard calls to action. Text Us is the primary contact method,
 * so it leads and gets the strongest style.
 * - light: on white / light panels
 * - dark: on navy panels
 * - brand: on the soft-turquoise hero panels (same buttons as light)
 */
export function CtaButtons({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark" | "brand";
  size?: Size;
}) {
  const textV: Variant = variant === "dark" ? "secondary" : "primary";
  const quoteV: Variant =
    variant === "dark" ? "outlineLight" : "secondary";
  const callV: Variant = variant === "dark" ? "outlineLight" : "outline";
  return (
    <div
      className={
        size === "sm"
          ? "flex flex-wrap gap-2.5"
          : "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      }
    >
      <ButtonLink href={smsHref} size={size} variant={textV}>
        Text Us
      </ButtonLink>
      <ButtonLink href={quoteUrl} size={size} variant={quoteV}>
        Get a Quote Now<span className="sr-only"> (opens in a new tab)</span>
      </ButtonLink>
      <ButtonLink href={telHref} size={size} variant={callV}>
        Call Now
      </ButtonLink>
    </div>
  );
}

const tones = {
  /** Transparent: sits directly on the light-gray page background. */
  plain: "",
  white: "bg-white",
  tint: "bg-brand/10",
  navy: "bg-navy text-white on-dark",
  brand: "bg-brand-soft",
} as const;
export type Tone = keyof typeof tones;

/** A big rounded panel inset from the page edges. */
export function Section({
  id,
  tone = "white",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="px-3 py-2 sm:px-5">
      <div
        className={`mx-auto max-w-[80rem] rounded-[1.75rem] sm:rounded-[2rem] ${tones[tone]} ${
          tone === "plain" ? "py-10" : "px-5 py-12 sm:px-10 sm:py-14"
        } ${className}`}
      >
        <div className="mx-auto w-full max-w-site">{children}</div>
      </div>
    </section>
  );
}

/** Turquoise intro panel used at the top of every inner page. */
export function PageHero({ children }: { children: ReactNode }) {
  return (
    <section className="px-3 pt-2 sm:px-5">
      <div className="relative mx-auto max-w-[80rem] overflow-hidden rounded-[1.75rem] bg-brand-soft px-5 py-12 text-navy sm:rounded-[2rem] sm:px-10 sm:py-14">
        <span aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-brand/25" />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-40 h-56 w-56 rounded-full bg-brand/15" />
        <div className="relative mx-auto max-w-site">{children}</div>
      </div>
    </section>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full bg-brand/25 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-navy ${className}`}
    >
      {children}
    </span>
  );
}

export function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 h-5 w-5 shrink-0 text-brand-dark"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business, mainNav, quoteUrl, smsHref, telHref } from "@/config/site";
import { buttonClass } from "@/components/ui";

export function Header() {
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so navigating
  // closes it without a setState-in-effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Escape closes the menu and returns focus to the toggle; Tab stays inside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenedAt(null);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = [
        buttonRef.current,
        ...menuRef.current.querySelectorAll<HTMLElement>("a[href]"),
      ].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <div className="relative mx-auto max-w-[80rem]">
        <div className="flex items-center justify-between gap-4 rounded-full bg-uniform py-2 pl-2.5 pr-2.5 shadow-md ring-1 ring-white/10">
          <Link href="/" aria-label={`${business.name} home`} className="shrink-0 pl-3">
            <Image
              src="/images/allfresh-logo-transparent.png"
              alt={business.name}
              width={1039}
              height={590}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium text-white hover:bg-white/10 ${
                  isActive(item.href) ? "bg-white/20" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={smsHref}
              className="hidden min-h-11 items-center justify-center rounded-full bg-white px-5 py-2 text-base font-medium text-uniform transition-colors hover:bg-brand-soft lg:inline-flex"
            >
              Text Us
            </a>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-medium text-navy transition-colors hover:bg-brand-alt sm:inline-flex"
            >
              Get a Quote Now<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <button
              ref={buttonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-navy md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpenedAt(open ? null : pathname)}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          ref={menuRef}
          hidden={!open}
          className="absolute inset-x-0 top-full mt-2 rounded-3xl bg-uniform p-4 shadow-xl ring-1 ring-white/10 md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block rounded-2xl px-3 py-3 text-lg font-medium text-white aria-[current=page]:bg-white/15"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-3">
              <a href={smsHref} className={buttonClass("primary")}>
                Text Us
              </a>
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("secondary")}
              >
                Get a Quote Now<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={telHref} className={buttonClass("outline")}>
                Call Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

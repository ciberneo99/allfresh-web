import Link from "next/link";
import { Check } from "@/components/ui";
import { checklist } from "@/content/checklist";

/**
 * Full Standard Clean checklist, built from the same data as the comparison
 * table on the home page. Collapsed by default so service pages stay focused.
 */
export function StandardCleanSummary({ slug }: { slug: string }) {
  const addOns = [
    ...new Set(
      checklist.flatMap((a) =>
        a.rows.filter((r) => r.marks[0] === "addon").map((r) => r.task),
      ),
    ),
  ];

  return (
    <details className="group rounded-[1.5rem] bg-brand/10 p-5 open:pb-6">
      <summary className="cursor-pointer list-none text-lg font-semibold text-navy marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-4">
          See the full Standard Clean checklist
          <span
            aria-hidden="true"
            className="text-2xl leading-none text-brand-dark group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {checklist.map((area) => {
          const items = area.rows
            .filter((r) => r.marks[0] === "yes")
            .map((r) => r.task);
          const id = `std-${slug}-${area.area.replace(/\s+/g, "-").toLowerCase()}`;
          return (
            <section key={area.area} aria-labelledby={id}>
              <h3 id={id} className="font-sans text-base font-semibold text-navy">
                {area.area}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {items.map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <p className="mt-5 text-sm">
        Available as add-ons: {addOns.join(", ")}.{" "}
        <Link
          href="/#compare-h"
          className="font-medium text-brand-dark underline underline-offset-4"
        >
          Compare with Deep Clean and Move In / Out
        </Link>
      </p>
    </details>
  );
}

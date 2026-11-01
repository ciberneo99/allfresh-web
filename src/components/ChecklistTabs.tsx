"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  checklist,
  checklistColumns,
  type Mark,
} from "@/content/checklist";

function MarkCell({ mark }: { mark: Mark }) {
  switch (mark) {
    case "yes":
      return (
        <span className="inline-flex items-center justify-center text-brand-dark">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5l4 4 8-9" />
          </svg>
          <span className="sr-only">Included</span>
        </span>
      );
    case "no":
      return (
        <span className="inline-flex items-center justify-center text-danger">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
          <span className="sr-only">Not included</span>
        </span>
      );
    case "addon":
      return (
        <span className="inline-block whitespace-nowrap rounded-full border border-navy px-2 py-0.5 text-xs font-semibold text-navy">
          Add-on
        </span>
      );
    default:
      return (
        <span className="text-ink">
          <span aria-hidden="true">&mdash;</span>
          <span className="sr-only">Not listed</span>
        </span>
      );
  }
}

export function ChecklistTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent) => {
    const last = checklist.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <ul className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Legend">
        <li className="flex items-center gap-2"><MarkCell mark="yes" /> Included</li>
        <li className="flex items-center gap-2"><MarkCell mark="no" /> Not included</li>
        <li className="flex items-center gap-2"><MarkCell mark="addon" /> Available as an add-on</li>
        <li className="flex items-center gap-2"><MarkCell mark="none" /> Not listed</li>
      </ul>

      <div role="tablist" aria-label="Room" className="flex flex-wrap gap-2" onKeyDown={onKeyDown}>
        {checklist.map((t, i) => (
          <button
            key={t.area}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 rounded-control px-5 py-2 text-sm font-medium transition-colors ${
              active === i
                ? "bg-brand text-navy ring-2 ring-inset ring-navy"
                : "bg-brand/15 text-navy ring-1 ring-inset ring-brand hover:bg-brand/30"
            }`}
          >
            {t.area}
          </button>
        ))}
      </div>

      {checklist.map((t, i) => (
        <div
          key={t.area}
          id={`panel-${i}`}
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
          hidden={active !== i}
          className="mt-4"
        >
          <div className="relative overflow-x-auto rounded-[1.5rem] border-2 border-brand bg-white">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <caption className="sr-only">
                {t.area}: what each cleaning level includes
              </caption>
              <thead>
                <tr className="border-b-2 border-brand bg-brand-soft text-navy">
                  <th scope="col" className="px-4 py-3 font-semibold">
                    <span className="sr-only">Task</span>
                  </th>
                  {checklistColumns.map((c) => (
                    <th key={c} scope="col" className="px-3 py-3 text-center font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r) => (
                  <tr key={r.task} className="border-t border-brand/30 even:bg-brand/10">
                    <th scope="row" className="px-4 py-2.5 font-normal text-ink">
                      {r.task}
                    </th>
                    {r.marks.map((m, ci) => (
                      <td key={ci} className="px-3 py-2.5 text-center">
                        <MarkCell mark={m} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

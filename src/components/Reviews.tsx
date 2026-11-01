import { ButtonLink, Pill, Section } from "@/components/ui";
import { business } from "@/config/site";
import { reviews } from "@/content/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className="flex gap-0.5 text-brand-dark">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill={n <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        >
          <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Customer reviews. Cards appear only for real reviews added to
 * src/content/reviews.ts; with an empty list it shows just the Google link.
 * No review structured data (JSON-LD) is added on purpose: Google does not
 * show rich results for reviews a business publishes about itself.
 */
export function Reviews() {
  const hasReviews = reviews.length > 0;
  return (
    <Section tone="plain" labelledBy="reviews-h">
      <div className="text-center">
        <Pill>Reviews</Pill>
        <h2 id="reviews-h" className="mt-4 text-3xl sm:text-4xl">
          What customers say
        </h2>
        <p className="mx-auto mt-3 max-w-xl">
          {hasReviews
            ? "Words from our customers, taken from our Google reviews."
            : "Read what our customers have written about us, or leave your own review, on Google."}
        </p>
      </div>

      {hasReviews && (
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li key={`${r.name}-${r.date ?? r.text.slice(0, 20)}`}>
              <figure className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                {r.rating && <Stars rating={r.rating} />}
                <blockquote className={`flex-1 text-[0.95rem] ${r.rating ? "mt-4" : ""}`}>
                  <p>&ldquo;{r.text}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                  <span className="font-semibold text-navy">{r.name}</span>
                  {(r.date || r.service) && (
                    <span className="block text-ink">
                      {[r.service, r.date].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-3 text-center">
        <ButtonLink href={business.googleReviewsUrl} variant="outline" size="sm">
          {hasReviews ? "Read all reviews on Google" : "Google Reviews"}
          <span className="sr-only"> (opens in a new tab)</span>
        </ButtonLink>
      </div>
    </Section>
  );
}

# Adding Google reviews to the site

Reviews live in `src/content/reviews.ts` and appear on the home page, between "How it works" and "What each cleaning level covers". The list starts empty on purpose: with no entries the site shows only the "Google Reviews" button.

## How to add one
1. Open your Google Business Profile reviews.
2. Copy the review text exactly as written. Do not edit, shorten or "improve" it.
3. Add an entry to the `reviews` array:

```ts
{ name: "First L.", rating: 5, date: "March 2026", text: "…exact text…" },
```

`rating`, `date` and `service` are optional. Use `service` only if the review itself says what was cleaned.

## Rules
- Only real reviews. Never write, edit, merge or invent one. Fake or altered reviews can get the Google profile penalized and can break consumer-protection rules.
- Keep the reviewer's name as it shows on Google (first name and last initial is fine).
- Three to six reviews is enough; keep the longest or most specific ones.
- No review structured data (JSON-LD) is added on purpose. Google does not show star rich results for reviews a business publishes about itself, and marking them up can cause problems.
- Refresh them every few months so the section does not look stale.

## Live widgets (not used)
Third-party widgets that sync Google reviews automatically need an external script, which this site avoids (see `docs/SECURITY.md`). If you want one later, the CSP in `next.config.ts` has to be loosened for that provider.

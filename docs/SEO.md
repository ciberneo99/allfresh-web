# Local SEO notes

## What exists
- A page for each of the 11 service cities at `/service-areas/<city>` (austin, lakeway, bee-cave, westlake, pflugerville, georgetown, round-rock, cedar-park, leander, kyle, buda). All come from one template, `src/app/service-areas/[city]/page.tsx`, fed by `src/content/areas.ts`.
- Each page has its own title, description, H1, canonical, Open Graph image, breadcrumb and `Service` JSON-LD, is in the sitemap, and is linked from the Service Areas page, the home page and the footer.
- Each page has: a landmark hero photo with credit, "Things to do in <city>", a short local note, "Our cleaning services in <city>" (links to the six service pages), a city FAQ and links to the other cities.
- Westlake means West Lake Hills (Travis County, ZIP 78746) and its page says so, to avoid confusion with the Westlake near Fort Worth.

## Content rules (keep these when editing)
- Facts come from Wikipedia, city pages or allfresh512.com. No claims about jobs done, customers, reviews, years in business or prices.
- Event dates change; the pages tell readers to check official listings. Re-check events (for example the Pie in the Sky balloon festival in Kyle was discontinued in 2024, so it is not listed) once or twice a year.
- The FAQ is visible text only, with no FAQPage markup.

## How this stays clear of Google's spam policies
- Google's "doorway pages" policy targets many near-identical pages made only to rank for place names. These pages are different: each has its own local content, photo and facts, and each city is a place the business really serves.
- The shared parts (services list, estimate steps, FAQ pattern) are short; the unique part is the larger share of each page.
- Quality bar for adding or editing a city: at least 3 verified local things to do, one real photo of a landmark in or next to the city, and no copied text between cities.
- No keyword stuffing, hidden text, fake reviews or fake addresses. The only business address is the real one in Austin; no office is implied in any other city.
- Structured data matches visible content.

## Photos
- All city photos are from Wikimedia Commons (CC0, CC BY 2.0/3.0/4.0, CC BY-SA 4.0) and each page shows author, license and a link to the source. See `docs/PHOTO-CREDITS.md`.
- Replace any of them with your own photos of these places when you have them; keep the credit only if the Commons photo remains.

## Off-site steps (cannot be done from this repo)
1. Google Business Profile: list all service areas and keep name, phone and address identical to the website.
2. Google Search Console: add the production domain, submit `/sitemap.xml`, and request indexing of the city pages after launch.
3. Add real before/after photos and genuine reviews when you have them.

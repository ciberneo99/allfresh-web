# All Fresh Cleaning Services website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Fully static pages. Quotes are collected by an external BrillaPro form (see `quoteUrl` in `src/config/site.ts`); this site has no backend of its own.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values you have
npm run dev                  # http://localhost:3000
```

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`, `npm start`.

## Where to edit things

| What | File |
|---|---|
| Business name, phone, email, address, social links, service areas, nav, quote form link | `src/config/site.ts` |
| Service pages (copy and "what's included" lists) | `src/content/services.ts` |
| FAQ | `src/content/faq.ts` |
| Colors, fonts, radii, spacing tokens | `src/app/globals.css` (`@theme`) |
| Security headers / CSP / redirects | `next.config.ts` |
| Hero artwork (SVG placeholder) | `src/components/HeroIllustration.tsx` |

## Environment variables

See `.env.example`.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical URLs, sitemap, JSON-LD (`https://allfresh512.com`) |
| `NEXT_PUBLIC_SITE_INDEXABLE` | production only | `true` only on production; otherwise `noindex` + `robots.txt` disallow |

No secrets are required: this site has no server-side integrations.

## Deploying

Any Node host that runs Next.js (Vercel, etc.). Set the variables above as server environment variables on the host, never in Git. Do **not** point DNS or remove the current WordPress site until you approve.

### Going live checklist
1. Set `NEXT_PUBLIC_SITE_INDEXABLE=true` (this removes `noindex`, the `X-Robots-Tag` header and the robots disallow).
2. Click "Get a Quote Now" and submit a real test quote to confirm it reaches your CRM.
3. Confirm the legacy redirects (see `docs/REDIRECTS.md`) after DNS cutover.
4. Replace the placeholder hero with real photos, approve the privacy notice (remove "Draft", `noindex`, add to sitemap).
5. Submit `https://allfresh512.com/sitemap.xml` in Google Search Console.

See also `docs/SECURITY.md` and `docs/REDIRECTS.md`.

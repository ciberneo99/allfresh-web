# Security notes

Implemented
- No secrets are used. `.env*` is git-ignored (`.env.example` is tracked and has only public settings).
- Headers on every route (`next.config.ts`): CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY` (plus CSP `frame-ancestors 'none'`), `Cross-Origin-Opener-Policy`, HSTS (`max-age=31536000`, production only, no `includeSubDomains`/`preload`), `poweredByHeader` off.
- CSP: same-origin only for everything; no third-party scripts, frames, fonts or images. Because pages are static, scripts need `'unsafe-inline'` (Next's inline bootstrap). A stricter nonce-based CSP requires dynamic rendering of every page (see Next.js docs, "Content Security Policy"); consider it if that trade-off is acceptable.
- No backend, forms or API routes: nothing is submitted to this site. Quotes go to the external BrillaPro form (opened in a new tab with `noopener noreferrer`); its security is that provider’s responsibility.
- No analytics, trackers or third-party embeds. Fonts are self-hosted by `next/font`.
- `npm audit`: 0 known vulnerabilities at the time of the last run (re-run before launch).

Depends on production configuration
- HTTPS and HSTS only apply on a real HTTPS deployment.
- HSTS `includeSubDomains`/`preload` are off on purpose; enable only after verifying every subdomain serves HTTPS.

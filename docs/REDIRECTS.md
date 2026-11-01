# Redirect map

Only URLs verified on the current WordPress site (home page links and canonical structure) are mapped. All are permanent (HTTP 308) and defined in `next.config.ts`.

| Old URL | New URL |
|---|---|
| `/index.php` (and `/index.php/`) | `/` |
| `/index.php/areas-served` (and trailing slash) | `/service-areas` |
| `/index.php/contact` (and trailing slash) | `/contact` |

Notes
- Next.js removes a trailing slash first, so URLs ending in `/` take two permanent hops (slash removed, then the target).
- WordPress extras (`/author/...`, `/feed`, `/comments/feed`, `/xmlrpc.php`) are intentionally **not** redirected to the home page; they have no equivalent and will return 404.
- The old site had no per-service pages, so there is nothing to map for them.
- Not verified: other indexed URLs could exist (Search Console would show them). Check the old site's "Pages" report and add any missing mapping before DNS cutover.
- The old home page is `https://allfresh512.com/`, which stays the same.

import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

/**
 * Static CSP. Pages are statically rendered, so a per-request nonce is not
 * available; Next.js' inline bootstrap scripts therefore need 'unsafe-inline'
 * for scripts. Everything else is locked to this origin: no third-party
 * scripts, frames, fonts or images are allowed. If you later move to dynamic
 * rendering, switch to a nonce-based policy (see docs/SECURITY.md).
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // HSTS without includeSubDomains/preload: those affect every subdomain and
  // should only be enabled after verifying them (see docs/SECURITY.md).
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000",
        },
      ]),
  // Keep staging / preview deployments out of search engines.
  ...(indexable ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Tailwind v4 wiring from the project scaffold.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Verified legacy URLs from the WordPress site -> new equivalents.
  // See docs/REDIRECTS.md.
  async redirects() {
    return [
      // Next.js strips the trailing slash first, so legacy URLs that end in "/"
      // take two permanent hops (slash removed, then the redirect below).
      { source: "/index.php/areas-served", destination: "/service-areas", permanent: true },
      { source: "/index.php/contact", destination: "/contact", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

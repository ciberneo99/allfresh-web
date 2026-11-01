import type { MetadataRoute } from "next";
import { SITE_URL, isIndexable } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    // Staging / preview: block everything.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

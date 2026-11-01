import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { areaHref, areas } from "@/content/areas";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  // /privacy is intentionally omitted until the draft is approved.
  const paths = [
    "/",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/service-areas",
    ...areas.map((a) => areaHref(a.slug)),
    "/contact",
    "/satisfaction-guarantee",
    "/terms",
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.7,
  }));
}

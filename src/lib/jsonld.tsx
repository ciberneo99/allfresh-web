import { SITE_URL, business, serviceAreas } from "@/config/site";
import { services } from "@/content/services";

/** LocalBusiness data built only from verified facts. No ratings, hours or prices. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: SITE_URL,
    telephone: business.phoneE164,
    email: business.email,
    image: `${SITE_URL}/images/allfresh-logo.jpg`,
    logo: `${SITE_URL}/images/allfresh-logo.jpg`,
    slogan: business.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: serviceAreas.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Texas" },
    })),
    sameAs: [business.social.facebook, business.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

/** Renders JSON-LD. `<` is escaped so data can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

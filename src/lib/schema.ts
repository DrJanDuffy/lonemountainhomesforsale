import { siteContact } from "@/lib/site-contact";

const agentId = `${siteContact.siteUrl}/#agent`;

/**
 * Default OG / Twitter / agent schema image. Must resolve in production (same file as gallery index).
 * Rich Results Test: confirm https://www.lonemountainhomesforsale.com/assets/photo_001.jpg returns 200.
 */
export const defaultOgImagePath = "/assets/photo_001.jpg";

export function websiteJsonLd(): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: `${siteContact.siteName} | Lone Mountain Las Vegas 89129`,
    url: base,
    description:
      "Homes for sale, open houses, and neighborhood context focused on Lone Mountain and ZIP 89129 in northwest Las Vegas.",
    publisher: { "@id": `${base}/#agent` },
    inLanguage: "en-US",
    about: {
      "@type": "Place",
      name: "Lone Mountain, Las Vegas, NV 89129",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89129",
        addressCountry: "US",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function realEstateAgentJsonLd(): Record<string, unknown> {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": agentId,
    name: siteContact.businessName,
    url: siteContact.siteUrl,
    telephone: siteContact.phoneE164,
    email: siteContact.email,
    image: `${base}${defaultOgImagePath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContact.streetAddress,
      addressLocality: siteContact.addressLocality,
      addressRegion: siteContact.addressRegion,
      postalCode: siteContact.postalCode,
      addressCountry: siteContact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteContact.geo.latitude,
      longitude: siteContact.geo.longitude,
    },
    areaServed: [
      { "@type": "Place", name: siteContact.primaryArea },
      { "@type": "City", name: "Las Vegas" },
    ],
    worksFor: {
      "@type": "Organization",
      name: siteContact.legalBrokerage,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Nevada real estate license",
      value: siteContact.license,
    },
    openingHoursSpecification: siteContact.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

type FaqItem = { question: string; answer: string };

export function faqPageJsonLd(items: FaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

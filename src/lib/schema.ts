import { siteContact } from "@/lib/site-contact";

const agentId = `${siteContact.siteUrl}/#agent`;

export function realEstateAgentJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": agentId,
    name: siteContact.businessName,
    url: siteContact.siteUrl,
    telephone: siteContact.phoneE164,
    email: siteContact.email,
    image: `${siteContact.siteUrl}/assets/photo_001.jpg`,
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

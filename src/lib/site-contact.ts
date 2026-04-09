/**
 * Single source of truth for NAP and entity fields.
 * Align visible copy and JSON-LD with Google Business Profile.
 * Phone and office address match Dr. Jan Duffy’s published contact page (heyberkshire.com) as of 2026.
 * Site email is the branded inbox for this domain.
 * primaryArea uses ZIP 89129 (Lone Mountain market); postalCode is the office ZIP 89134 (GBP pin).
 */
export const siteContact = {
  siteName: "Lone Mountain Homes",
  businessName: "Dr. Jan Duffy",
  legalBrokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  siteUrl: "https://www.lonemountainhomesforsale.com",
  primaryArea: "Lone Mountain & Northwest Las Vegas, NV 89129",
  phoneDisplay: "(702) 500-1942",
  phoneE164: "+17025001942",
  email: "ChanceSells@LoneMountainHomesForSale.com",
  streetAddress: "9406 W Lake Mead Blvd, Suite 100",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89134",
  addressCountry: "US",
  /** Rough geo for schema (office); adjust if GBP pin differs */
  geo: {
    latitude: 36.1962,
    longitude: -115.2869,
  },
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "16:00" },
  ],
  googleMapsPlaceUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV+89134",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
  /** Use your GBP “review” link when available; maps place search opens the knowledge panel. */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV+89134",
  /** Google My Maps embed — update `mid` when the map is replaced */
  openHousesMapEmbedSrc:
    "https://www.google.com/maps/d/u/0/embed?mid=12gQ1w5bzxrQ41HSGCdEJWFfhMtSkBwI&ehbc=2E312F",
} as const;

export const realScoutDefaults = {
  /** Override with NEXT_PUBLIC_REALSCOUT_AGENT_ID in production if different */
  agentEncodedId: process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID ?? "QWdlbnQtMjI1MDUw",
  scriptSrc: "https://em.realscout.com/widgets/realscout-web-components.umd.js",
} as const;

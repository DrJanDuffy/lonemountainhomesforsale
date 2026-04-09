import type { Metadata } from "next";
import { siteContact } from "@/lib/site-contact";

/**
 * Set `GOOGLE_SITE_VERIFICATION` in Vercel (or `.env.local`) to the content value
 * Google Search Console shows for the HTML tag method (not the full tag).
 */
export function rootMetadata(): Metadata {
  const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: new URL(siteContact.siteUrl),
    robots: { index: true, follow: true },
    title: {
      default: `${siteContact.siteName} | ${siteContact.primaryArea}`,
      template: `%s | ${siteContact.siteName}`,
    },
    description: `Homes for sale near Lone Mountain, Las Vegas 89129. ${siteContact.businessName}, ${siteContact.legalBrokerage}. Call ${siteContact.phoneDisplay}.`,
    ...(googleSiteVerification
      ? { verification: { google: googleSiteVerification } }
      : {}),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteContact.siteUrl,
      siteName: siteContact.siteName,
      title: `${siteContact.siteName} | ${siteContact.primaryArea}`,
      description: `Search Lone Mountain and northwest Las Vegas real estate with ${siteContact.businessName}.`,
    },
  };
}

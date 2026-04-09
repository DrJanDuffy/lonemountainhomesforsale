import type { Metadata } from "next";
import Link from "next/link";
import { OpenHousesLegend } from "@/components/sections/open-houses-legend";
import { OpenHousesMapEmbed } from "@/components/sections/open-houses-map-embed";
import { getOpenHousesMapViewerUrl, siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Open Houses Near Lone Mountain & ZIP 89129 | Las Vegas NW",
  description: `Weekend open houses around Lone Mountain, Las Vegas 89129, Skye Canyon, and Centennial Hills—map, legend, and private tours with ${siteContact.businessName}. Call ${siteContact.phoneDisplay}.`,
  alternates: { canonical: "/open-houses" },
};

export default function OpenHousesPage() {
  const viewerUrl = getOpenHousesMapViewerUrl();

  return (
    <main id="main-content" className="flex-1">
      <section className="border-b border-stone-200 bg-stone-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Open houses near Lone Mountain (89129) and northwest Las Vegas
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-stone-700">
            Pin drops cover the Lone Mountain core, pockets toward{" "}
            <Link
              href="/neighborhoods/lone-mountain"
              className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            >
              ZIP 89129
            </Link>
            , and nearby northwest corridors buyers often compare (Skye Canyon, Centennial Hills). Tap a
            pin for times and notes—then confirm with {siteContact.businessName} before you drive.
          </p>
          <p className="mt-3 max-w-3xl text-stone-700">
            Need a private slot instead? Call{" "}
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="font-medium text-amber-800 underline decoration-amber-700/30 underline-offset-2 hover:text-amber-700"
            >
              {siteContact.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${siteContact.email}`}
              className="font-medium text-amber-800 underline decoration-amber-700/30 underline-offset-2 hover:text-amber-700"
            >
              {siteContact.email}
            </a>
            .
          </p>

          <div className="mt-8 space-y-6">
            <OpenHousesLegend />

            <div className="rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-stone-800 shadow-sm">
              <strong className="text-stone-900">About the map:</strong> Google’s embedded My Map keeps
              its layer legend tucked away—you can’t force it open in the box below. Use the{" "}
              <strong>legend on this page</strong> (above) for what each color means, or{" "}
              <a
                href={viewerUrl}
                className="font-semibold text-amber-900 underline decoration-amber-800/40 underline-offset-2 hover:text-amber-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                open the full map on Google
              </a>{" "}
              for their native legend and tools.
            </div>

            <div className="min-w-0">
              <OpenHousesMapEmbed />
              <p className="mt-3 text-sm text-stone-600">
                <a
                  href={viewerUrl}
                  className="font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open full map on Google
                </a>{" "}
                <span className="text-stone-600">(recommended if you need Google’s layer list)</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search Lone Mountain MLS listings
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Contact {siteContact.businessName}
            </Link>
          </div>

          <p className="mt-6 text-xs text-stone-500">
            Map hosted on Google My Maps; dates and homes subject to change—confirm with{" "}
            {siteContact.businessName} before you go. MLS details may differ; verify material facts with
            your agent.
          </p>
        </div>
      </section>
    </main>
  );
}

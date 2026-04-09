import { OpenHousesLegend } from "@/components/sections/open-houses-legend";
import { OpenHousesMapEmbed } from "@/components/sections/open-houses-map-embed";
import { getOpenHousesMapViewerUrl } from "@/lib/site-contact";

/**
 * Legend + Google embed notice + My Maps iframe + viewer link (used on home and /open-houses).
 */
export function OpenHousesMapBlock() {
  const viewerUrl = getOpenHousesMapViewerUrl();

  return (
    <div className="space-y-6">
      <OpenHousesLegend />

      <div className="rounded-lg border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-stone-800 shadow-sm">
        <strong className="text-stone-900">About the map:</strong> Google’s embedded My Map keeps its layer
        legend tucked away—you can’t force it open in the box below. Use the{" "}
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
  );
}

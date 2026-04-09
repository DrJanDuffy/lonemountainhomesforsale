import {
  openHousesLegendItems,
  type OpenHousesLegendAccent,
} from "@/lib/open-houses-legend";

const accentDot: Record<OpenHousesLegendAccent, string> = {
  amber: "bg-amber-600",
  stone: "bg-stone-500",
  emerald: "bg-emerald-600",
  sky: "bg-sky-600",
};

type OpenHousesLegendProps = {
  className?: string;
};

export function OpenHousesLegend({ className }: OpenHousesLegendProps) {
  return (
    <aside
      className={`rounded-lg border border-stone-200 bg-white p-5 shadow-sm ${className ?? ""}`}
      aria-labelledby="open-houses-legend-heading"
    >
      <h3
        id="open-houses-legend-heading"
        className="text-sm font-semibold uppercase tracking-wide text-stone-500"
      >
        Map legend
      </h3>
      <p className="mt-1 text-sm text-stone-600">How to read the open house map</p>
      <ul className="mt-4 space-y-4" role="list">
        {openHousesLegendItems.map((item) => (
          <li key={item.title} className="flex gap-3">
            <span
              className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.accent ? accentDot[item.accent] : "bg-stone-400"}`}
              aria-hidden
            />
            <div>
              <p className="font-medium text-stone-900">{item.title}</p>
              {item.description ? (
                <p className="mt-1 text-sm text-stone-600">{item.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

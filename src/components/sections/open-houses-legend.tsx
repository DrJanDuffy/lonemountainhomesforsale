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
      className={`rounded-xl border-2 border-amber-200 bg-white p-5 shadow-md ring-1 ring-amber-900/10 sm:p-6 ${className ?? ""}`}
      aria-labelledby="open-houses-legend-heading"
    >
      <h3
        id="open-houses-legend-heading"
        className="text-base font-bold uppercase tracking-wide text-amber-900"
      >
        Open house map legend
      </h3>
      <p className="mt-2 text-sm font-medium text-stone-700">
        Read this first—layer colors below match the pins on the map (edit in{" "}
        <code className="rounded bg-stone-100 px-1 text-xs text-stone-800">src/lib/open-houses-legend.ts</code>{" "}
        to match your Google My Map).
      </p>
      <ul className="mt-5 space-y-4" role="list">
        {openHousesLegendItems.map((item) => (
          <li key={item.title} className="flex gap-3 border-b border-stone-100 pb-4 last:border-0 last:pb-0">
            <span
              className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ring-2 ring-white ring-offset-1 ring-offset-stone-100 ${item.accent ? accentDot[item.accent] : "bg-stone-400"}`}
              aria-hidden
            />
            <div>
              <p className="font-semibold text-stone-900">{item.title}</p>
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

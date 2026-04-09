/**
 * On-page legend for the open houses My Map (Google’s embed cannot show legend open by default).
 * Edit titles/descriptions to match your My Map layer names.
 */
export type OpenHousesLegendAccent = "amber" | "stone" | "emerald" | "sky";

export type OpenHousesLegendItem = {
  title: string;
  description?: string;
  accent?: OpenHousesLegendAccent;
};

export const openHousesLegendItems: readonly OpenHousesLegendItem[] = [
  {
    title: "This weekend",
    description: "Open houses scheduled for the upcoming Saturday–Sunday window.",
    accent: "amber",
  },
  {
    title: "By appointment",
    description: "Shown on the map by request—call or email to confirm a time.",
    accent: "stone",
  },
  {
    title: "Broker / industry preview",
    description: "Agent-focused events; confirm before attending.",
    accent: "emerald",
  },
];

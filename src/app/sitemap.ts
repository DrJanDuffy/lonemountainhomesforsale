import type { MetadataRoute } from "next";
import { siteContact } from "@/lib/site-contact";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
};

const entries: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/area-photography", changeFrequency: "monthly", priority: 0.65 },
  { path: "/contact", changeFrequency: "weekly", priority: 0.7 },
  { path: "/search", changeFrequency: "daily", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

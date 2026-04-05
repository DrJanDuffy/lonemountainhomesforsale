import type { MetadataRoute } from "next";
import { siteContact } from "@/lib/site-contact";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteContact.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return ["", "/contact", "/search"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: path === "/search" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { SITE_BUILD_DATE, SITE_URL } from "@/content/site";

/** Emitted as a static sitemap.xml at build time by `output: "export"`. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(SITE_BUILD_DATE),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

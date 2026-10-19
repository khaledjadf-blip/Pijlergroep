import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { nl: site.url, ar: `${site.url}/ar` },
      },
    },
    {
      url: `${site.url}/ar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: { nl: site.url, ar: `${site.url}/ar` },
      },
    },
    {
      url: `${site.url}/privacyverklaring`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

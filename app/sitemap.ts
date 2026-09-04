import type { MetadataRoute } from "next";

const siteUrl = "https://luxecc.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
import type { MetadataRoute } from "next";

const siteUrl = "https://luxecc.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,

    host: siteUrl,
  };
}
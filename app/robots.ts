import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nationalmodelhighschool.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/nmhs-admin"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

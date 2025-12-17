import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"], // Larang Google masuk Admin panel
    },
    sitemap: "https://a76labs.vercel.app/sitemap.xml", // Link ke sitemap langkah 3
  };
}
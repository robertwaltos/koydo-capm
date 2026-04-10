import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://capm.koydo.app/sitemap.xml",
    host: "https://capm.koydo.app",
  };
}

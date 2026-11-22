import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://santiago-ortega-portafolio.vercel.app/sitemap.xml",
  };
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://picnictechnologies.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/projects",
    "/solutions",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : 0.8,
  }));
}

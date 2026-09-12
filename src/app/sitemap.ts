import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/about",
    "/contact",
    "/privacy",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: site.url + path }));
}

import { SITE_URL } from "@/lib/seo";

const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/founders", priority: 0.7, changeFrequency: "monthly" },
  { path: "/academics", priority: 0.9, changeFrequency: "monthly" },
  { path: "/admissions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" },
  { path: "/annual-report", priority: 0.6, changeFrequency: "yearly" },
  { path: "/stories", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/donate", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

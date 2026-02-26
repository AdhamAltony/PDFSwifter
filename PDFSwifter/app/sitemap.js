import { blogPosts } from "@/data/blogPosts";
import utilityTools from "@/features/utilities/constants/tools";
import { getAllowedToolKeys } from "@/lib/utilities/tools-policy";

const DEFAULT_SITE_URL = "https://pdfswifter.com";

const normalizeSiteUrl = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
};

const parseDate = (value) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date : new Date();
};

const toSitemapEntry = (baseUrl, route, changeFrequency, priority, lastModified = new Date()) => ({
  url: `${baseUrl}${route}`,
  lastModified,
  changeFrequency,
  priority,
});

export const revalidate = 3600;

export default async function sitemap() {
  const baseUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL);
  const now = new Date();

  const staticRoutes = [
    toSitemapEntry(baseUrl, "/", "daily", 1.0, now),
    toSitemapEntry(baseUrl, "/utilities", "daily", 0.95, now),
    toSitemapEntry(baseUrl, "/tools", "weekly", 0.8, now),
    toSitemapEntry(baseUrl, "/pricing", "weekly", 0.9, now),
    toSitemapEntry(baseUrl, "/premium", "weekly", 0.8, now),
    toSitemapEntry(baseUrl, "/blog", "weekly", 0.8, now),
    toSitemapEntry(baseUrl, "/help", "weekly", 0.7, now),
    toSitemapEntry(baseUrl, "/about", "monthly", 0.6, now),
    toSitemapEntry(baseUrl, "/contact", "monthly", 0.6, now),
    toSitemapEntry(baseUrl, "/security", "monthly", 0.5, now),
    toSitemapEntry(baseUrl, "/privacy", "yearly", 0.3, now),
    toSitemapEntry(baseUrl, "/terms", "yearly", 0.3, now),
  ];

  const supportedToolKeys = new Set(
    utilityTools
      .map((tool) => tool?.key)
      .filter(Boolean)
  );
  const allowedToolKeys = await getAllowedToolKeys();
  const enabledToolKeys = allowedToolKeys.filter((key) => supportedToolKeys.has(key));

  const utilityEntries = enabledToolKeys.map((key) =>
    toSitemapEntry(baseUrl, `/utilities/${key}`, "daily", 0.9, now)
  );
  const toolsEntries = enabledToolKeys.map((key) =>
    toSitemapEntry(baseUrl, `/tools/${key}`, "weekly", 0.7, now)
  );

  const blogEntries = (Array.isArray(blogPosts) ? blogPosts : [])
    .filter((post) => post?.slug)
    .map((post) =>
      toSitemapEntry(
        baseUrl,
        `/blog/${post.slug}`,
        "monthly",
        0.7,
        parseDate(post.updatedAt || post.publishedAt || post.date)
      )
    );

  return [...staticRoutes, ...utilityEntries, ...toolsEntries, ...blogEntries];
}

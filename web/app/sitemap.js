import { PAGES, privacyPage } from "@/content";
import { ARTICLES } from "@/content/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const paths = ["", ...Object.keys(PAGES), privacyPage.path, "blog", ...ARTICLES.map((a) => `blog/${a.slug}`)];
  return paths.map((p) => ({ url: p ? `${SITE_URL}/${p}` : SITE_URL }));
}

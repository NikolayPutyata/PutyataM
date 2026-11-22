import { PAGES, privacyPage } from "@/content";
import { ARTICLES } from "@/content/blog";
import { EN_PAGES, enPrivacyPage } from "@/content/en";
import { EN_ARTICLES } from "@/content/en/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const paths = ["", ...Object.keys(PAGES), privacyPage.path, "blog", ...ARTICLES.map((a) => `blog/${a.slug}`), "en", ...Object.keys(EN_PAGES), enPrivacyPage.path, "en/blog", ...EN_ARTICLES.map((a) => `en/blog/${a.slug}`)];
  return paths.map((p) => ({ url: p ? `${SITE_URL}/${p}` : SITE_URL }));
}

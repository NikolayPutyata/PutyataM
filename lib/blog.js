// Статті блогу для мови сторінки.
import { ARTICLES, ARTICLE_BY_SLUG } from "@/content/blog";
import { EN_ARTICLES, EN_ARTICLE_BY_SLUG } from "@/content/en/blog";

export function blogFor(locale = "uk") {
  return locale === "en"
    ? { articles: EN_ARTICLES, bySlug: EN_ARTICLE_BY_SLUG, base: "/en/blog" }
    : { articles: ARTICLES, bySlug: ARTICLE_BY_SLUG, base: "/blog" };
}

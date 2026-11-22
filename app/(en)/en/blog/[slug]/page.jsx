import { notFound } from "next/navigation";
import ArticleView from "@/components/ArticleView";
import { EN_ARTICLES, EN_ARTICLE_BY_SLUG } from "@/content/en/blog";
import { pageMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return EN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = EN_ARTICLE_BY_SLUG[slug];
  if (!a) return {};
  const meta = pageMeta({ title: a.metaTitle, description: a.description, path: `en/blog/${a.slug}` });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: a.date } };
}

export default async function ArticlePageEn({ params }) {
  const { slug } = await params;
  const a = EN_ARTICLE_BY_SLUG[slug];
  if (!a) notFound();
  return <ArticleView a={a} locale="en" />;
}

import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { EN_PAGES } from "@/content/en/pages";
import { pageMeta } from "@/lib/seo";

// English pages are built from web/content/en/pages.js.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(EN_PAGES).map((path) => ({ slug: path.replace(/^en\//, "").split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = EN_PAGES[`en/${slug.join("/")}`];
  if (!page) return {};
  return pageMeta({ title: page.meta.title, description: page.meta.description, path: page.path });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = EN_PAGES[`en/${slug.join("/")}`];
  if (!page) notFound();
  return <ServicePage page={page} />;
}

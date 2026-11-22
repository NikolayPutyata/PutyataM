import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { PAGES } from "@/content";

// Усі сторінки послуг збираються з реєстру web/content/index.js.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = PAGES[slug.join("/")];
  if (!page) return {};
  return {
    title: { absolute: page.meta.title },
    description: page.meta.description,
    alternates: { canonical: `/${page.path}` },
    openGraph: { title: page.meta.title, description: page.meta.description, url: `/${page.path}` },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = PAGES[slug.join("/")];
  if (!page) notFound();
  return <ServicePage page={page} />;
}

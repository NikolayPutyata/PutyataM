import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard, { formatDate } from "@/components/ArticleCard";
import LeadSection from "@/components/LeadSection";
import JsonLd from "@/components/JsonLd";
import { ARTICLES, ARTICLE_BY_SLUG } from "@/content/blog";
import { pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return {};
  const meta = pageMeta({ title: a.metaTitle, description: a.description, path: `blog/${a.slug}` });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: a.date } };
}

function Section({ s }) {
  return (
    <section className="space-y-4">
      {s.h2 && <h2 className="pt-4 font-display text-[1.35rem] leading-tight font-semibold sm:text-[1.6rem]">{s.h2}</h2>}
      {s.p?.map((t) => <p key={t.slice(0, 40)}>{t}</p>)}
      {s.list && (
        <ul className="space-y-2">
          {s.list.map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-sm bg-amber" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      )}
      {s.steps && (
        <ol className="space-y-5">
          {s.steps.map((st, i) => (
            <li key={st.t} className="border-l-2 border-graphite pl-5">
              <p className="font-display text-sm font-bold text-amber-ink tabular-nums">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-bold">{st.t}</p>
              <p className="mt-1 text-muted">{st.d}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) notFound();
  const related = (a.related || []).map((s) => ARTICLE_BY_SLUG[s]).filter(Boolean);
  return (
    <>
      <section className="bg-graphite text-on-dark">
        <div className="container-site pt-7 pb-10 sm:pt-12">
          <Breadcrumbs items={[{ name: "Блог", href: "/blog" }, { name: a.title, href: `/blog/${a.slug}` }]} />
          <p className="eyebrow mt-5 text-amber">{a.topic}</p>
          <h1 className="mt-4 max-w-4xl text-[1.7rem] leading-[1.15] font-bold sm:text-[2.4rem]">{a.title}</h1>
          <p className="mt-4 max-w-[62ch] text-on-dark-muted">{a.excerpt}</p>
          <p className="mt-4 text-sm text-on-dark-muted"><time dateTime={a.date}>{formatDate(a.date)}</time> · Weksar</p>
        </div>
      </section>

      <div className="container-site grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="max-w-[68ch] space-y-6 text-[1.05rem] leading-relaxed">
          {a.sections.map((s, i) => <Section key={i} s={s} />)}
          <p className="border-t border-line pt-6 text-sm text-muted">Стаття має інформаційний характер і не є юридичною консультацією. Законодавство змінюється — перед дією уточніть деталі для вашої ситуації.</p>
        </article>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-[var(--radius-card)] bg-graphite p-6 text-on-dark">
            <p className="eyebrow text-amber">Послуга</p>
            <p className="mt-2 font-display text-lg font-semibold">{a.service.name}</p>
            {a.service.price && <p className="mt-2 text-sm font-bold text-amber">{a.service.price}</p>}
            <p className="mt-3 text-sm text-on-dark-muted">Зробимо за вас — від консультації до результату.</p>
            <div className="mt-5 flex flex-col gap-2">
              <Link href={a.service.href} className="btn-primary">Докладніше</Link>
              <a href="#zaiavka" className="btn-ghost-dark">Отримати консультацію</a>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line py-14">
          <div className="container-site">
            <h2 className="font-display text-xl font-semibold">Читайте також</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {related.map((r) => <li key={r.slug}><ArticleCard a={r} /></li>)}
            </ul>
          </div>
        </section>
      )}

      <LeadSection cta={`Стаття: ${a.title}`} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          dateModified: a.updated || a.date,
          inLanguage: "uk",
          image: `${SITE_URL}/og.png`,
          mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
          author: { "@type": "Organization", name: "Weksar", url: SITE_URL },
          publisher: { "@type": "Organization", name: "Weksar", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
        }}
      />
    </>
  );
}

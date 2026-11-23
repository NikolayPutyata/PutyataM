import Link from "@/components/SiteLink";
import { t } from "@/lib/i18n";

export const formatDate = (d, locale = "uk") => new Date(d).toLocaleDateString(t(locale).blog.dateLocale, { day: "numeric", month: "long", year: "numeric" });

export default function ArticleCard({ a, locale = "uk" }) {
  const base = locale === "en" ? "/en/blog" : "/blog";
  return (
    <Link href={`${base}/${a.slug}`} className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line p-6 transition-shadow hover:shadow-[0_10px_30px_-12px_rgba(20,22,26,0.25)]">
      <span className="eyebrow text-amber-ink">{a.topic}</span>
      <span className="mt-3 font-display text-lg leading-snug font-semibold">{a.title}</span>
      <span className="mt-3 flex-1 text-muted">{a.excerpt}</span>
      <span className="mt-5 flex items-center justify-between text-sm text-muted">
        <time dateTime={a.date}>{formatDate(a.date, locale)}</time>
        <span aria-hidden className="text-ink transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

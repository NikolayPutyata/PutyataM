import Breadcrumbs from "./Breadcrumbs";
import NeedsData from "./NeedsData";

// Текстова сторінка (політика, оферта): заголовок + розділи. «[[…]]» у тексті стає плашкою NeedsData.
function Rich({ text }) {
  const parts = text.split(/\[\[ПОТРЕБУЄ ДАНИХ: (.*?)\]\]/);
  return parts.map((p, i) => (i % 2 ? <NeedsData key={i}>{p}</NeedsData> : <span key={i}>{p}</span>));
}

export default function DocPage({ page }) {
  return (
    <>
      <section className="bg-graphite text-on-dark">
        <div className="container-site pt-7 pb-10 sm:pt-12">
          <Breadcrumbs items={page.breadcrumbs} />
          <h1 className="mt-5 text-[1.85rem] leading-[1.12] font-bold sm:text-[2.6rem]">{page.title}</h1>
          {page.updated && <p className="mt-3 text-sm text-on-dark-muted">Редакція від <Rich text={page.updated} /></p>}
        </div>
      </section>
      <article className="container-site max-w-3xl space-y-10 py-14">
        {page.intro && <p className="text-[1.05rem]"><Rich text={page.intro} /></p>}
        {page.sections.map((s) => (
          <section key={s.title}>
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            {s.paragraphs?.map((p) => <p key={p.slice(0, 50)} className="mt-3"><Rich text={p} /></p>)}
            {s.list && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                {s.list.map((x) => <li key={x}><Rich text={x} /></li>)}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}

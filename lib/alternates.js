// Пари сторінок uk ↔ en (для hreflang і перемикача мов). Шлях без початкового «/».
const PAIRS = [
  ["", "en"],
  ["reiestratsiia-tov", "en/company-registration-ukraine"],
  ["likvidatsiia-tov", "en/llc-liquidation-ukraine"],
  ["tendernyi-suprovid", "en/tender-support-ukraine"],
  ["litsenzii", "en/business-licenses-ukraine"],
  ["tsiny", "en/prices"],
  ["kontakty", "en/contacts"],
  ["polityka-konfidentsiinosti", "en/privacy-policy"],
];

const UK_TO_EN = Object.fromEntries(PAIRS);
const EN_TO_UK = Object.fromEntries(PAIRS.map(([uk, en]) => [en, uk]));

export const localeOf = (path) => (path === "en" || path.startsWith("en/") ? "en" : "uk");

// Відповідна сторінка іншою мовою (або null)
export function counterpart(path) {
  const p = path.replace(/^\/|\/$/g, "");
  if (localeOf(p) === "en") return p in EN_TO_UK ? EN_TO_UK[p] : null;
  return p in UK_TO_EN ? UK_TO_EN[p] : null;
}

// { uk: "/…", en: "/en/…" } для пари або null
export function languagePair(path) {
  const p = path.replace(/^\/|\/$/g, "");
  const other = counterpart(p);
  if (other === null) return null;
  const [ukPath, enPath] = localeOf(p) === "en" ? [other, p] : [p, other];
  return { uk: `/${ukPath}`, en: `/${enPath}` };
}

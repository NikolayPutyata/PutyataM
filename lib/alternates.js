// Пари сторінок uk ↔ en (для hreflang і перемикача мов). Шлях без початкового «/».
import { EN_ARTICLES } from "@/content/en/blog";

const PAIRS = [
  ["", "en"],
  ["reiestratsiia-tov", "en/company-registration-ukraine"],
  ["likvidatsiia-tov", "en/llc-liquidation-ukraine"],
  ["tendernyi-suprovid", "en/tender-support-ukraine"],
  ["litsenzii", "en/business-licenses-ukraine"],
  ["tsiny", "en/prices"],
  ["kontakty", "en/contacts"],
  ["polityka-konfidentsiinosti", "en/privacy-policy"],
  ["pro-nas", "en/about"],
  // Реєстрація і ліквідація
  ["reiestratsiia-fop", "en/sole-proprietor-registration-ukraine"],
  ["likvidatsiia-tov/alternatyvna", "en/llc-liquidation-ukraine/change-of-owner"],
  ["likvidatsiia-tov/z-borhamy", "en/llc-liquidation-ukraine/with-debts-bankruptcy"],
  ["reorhanizatsiia-tov", "en/llc-reorganization-ukraine"],
  ["zakryttia-fop", "en/close-sole-proprietorship-ukraine"],
  // Тендери і ліцензії
  ["tendernyi-suprovid/pidhotovka-tendernoi-propozytsii", "en/tender-support-ukraine/bid-preparation"],
  ["tendernyi-suprovid/dlia-zamovnykiv", "en/tender-support-ukraine/for-contracting-authorities"],
  ["litsenzii/alkohol", "en/business-licenses-ukraine/alcohol"],
  ["litsenzii/tiutiun", "en/business-licenses-ukraine/tobacco"],
  ["litsenzii/budivelna", "en/business-licenses-ukraine/construction"],
  // Зміни
  ["zminy-tov", "en/llc-changes-ukraine"],
  ["zminy-tov/zmina-dyrektora", "en/llc-changes-ukraine/change-of-director"],
  ["zminy-tov/zmina-uchasnykiv", "en/llc-changes-ukraine/change-of-shareholders"],
  ["zminy-tov/yurydychna-adresa", "en/llc-changes-ukraine/registered-address"],
  ["zminy-tov/kved", "en/llc-changes-ukraine/activity-codes"],
  ["zminy-tov/statut", "en/llc-changes-ukraine/charter"],
  ["zminy-tov/statutnyi-kapital", "en/llc-changes-ukraine/share-capital"],
  ["zminy-fop", "en/sole-proprietor-changes-ukraine"],
  // Бухгалтерія
  ["bukhhalteriia", "en/accounting-services-ukraine"],
  ["bukhhalteriia/fop", "en/accounting-services-ukraine/sole-proprietor"],
  ["bukhhalteriia/tov", "en/accounting-services-ukraine/llc"],
  ["bukhhalteriia/zvitnist", "en/accounting-services-ukraine/tax-reporting"],
  ["bukhhalteriia/kik", "en/accounting-services-ukraine/cfc-reporting"],
  ["bukhhalteriia/rro-prro", "en/accounting-services-ukraine/cash-registers"],
  ["bukhhalteriia/audyt-fop", "en/accounting-services-ukraine/sole-proprietor-audit"],
  // Інші послуги
  ["reiestratsiia-torhovelnoi-marky", "en/trademark-registration-ukraine"],
  ["reiestratsiia-potuzhnostei", "en/food-facility-registration-ukraine"],
  ["dohovory", "en/contracts"],
  ["konsultatsiia-yurysta", "en/legal-consultation"],
  ["advokat-u-sudi", "en/litigation-attorney-kyiv"],
  ["konsultatsiia-advokata", "en/attorney-consultation"],
  ["notarialne-zasvidchennia-dokumentiv", "en/notarization-kyiv"],
  ["notarialni-reiestratsiini-dii", "en/notary-registration-services"],
  ["pereklad-dokumentiv", "en/certified-translation-kyiv"],
  ["posluhy-perekladacha", "en/interpreter-kyiv"],
  ["hrant-vlasna-sprava", "en/business-grants-ukraine"],
  ["hrant-dlia-veteraniv", "en/veteran-business-grants-ukraine"],
  ["inozemtsiam", "en/services-for-foreigners"],
  ["inozemtsiam/rnokpp", "en/services-for-foreigners/tax-number"],
  ["inozemtsiam/posvidka", "en/services-for-foreigners/temporary-residence-permit"],
  ["inozemtsiam/dozvil-na-pratsevlashtuvannia", "en/services-for-foreigners/work-permit"],
  // Блог: статті — за полем uk в content/en/blog.js
  ["blog", "en/blog"],
  ...EN_ARTICLES.map((a) => [`blog/${a.uk}`, `en/blog/${a.slug}`]),
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

// Плейсхолдер для даних, яких ще немає (правило 4 у CLAUDE.md).
// Поза продакшном — помітна плашка [[ПОТРЕБУЄ ДАНИХ: …]]; на продакшні — нейтральне «уточнюється».
import { IS_PRODUCTION as isProduction } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function NeedsData({ children, locale = "uk" }) {
  if (isProduction) return <span className="text-muted">{t(locale).needsData}</span>;
  return <span className="needs-data">[[ПОТРЕБУЄ ДАНИХ: {children}]]</span>;
}

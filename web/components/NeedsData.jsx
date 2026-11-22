// Плейсхолдер для даних, яких ще немає (правило 4 у CLAUDE.md).
// Поза продакшном — помітна плашка [[ПОТРЕБУЄ ДАНИХ: …]]; на продакшні — нейтральне «уточнюється».
const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export default function NeedsData({ children }) {
  if (isProduction) return <span className="text-muted">уточнюється</span>;
  return <span className="needs-data">[[ПОТРЕБУЄ ДАНИХ: {children}]]</span>;
}

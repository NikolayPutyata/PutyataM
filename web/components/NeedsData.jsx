// Плейсхолдер для даних, яких ще немає (правило 4 у CLAUDE.md). На продакшні таких бути не повинно.
export default function NeedsData({ children }) {
  return <span className="needs-data">[[ПОТРЕБУЄ ДАНИХ: {children}]]</span>;
}

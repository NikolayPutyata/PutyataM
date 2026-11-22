import SiteShell, { baseMetadata, viewport as shellViewport } from "@/components/SiteShell";

export const metadata = {
  ...baseMetadata("uk"),
  title: "Weksar — реєстрація і ліквідація ТОВ, тендери, ліцензії",
  description: "Реєстрація ТОВ і ФОП, ліквідація ТОВ від 20 000 грн, тендерний супровід у Prozorro, ліцензії. Понад 10 років досвіду.",
};

export const viewport = shellViewport;

export default function UkLayout({ children }) {
  return <SiteShell locale="uk">{children}</SiteShell>;
}

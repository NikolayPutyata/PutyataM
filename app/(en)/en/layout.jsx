import SiteShell, { baseMetadata, viewport as shellViewport } from "@/components/SiteShell";

export const metadata = {
  ...baseMetadata("en"),
  title: "Weksar — company registration, liquidation and tenders in Ukraine",
  description: "Company registration, tender support, licenses and accounting across Ukraine; LLC changes and liquidation in Kyiv. 10+ years of experience.",
};

export const viewport = shellViewport;

export default function EnLayout({ children }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}

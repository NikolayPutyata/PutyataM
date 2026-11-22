import "./globals.css";
import { fontVariables } from "./fonts";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import Tracking from "@/components/Tracking";
import { SITE_URL } from "@/lib/site";

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Weksar — ліквідація ТОВ і юридичні послуги в Києві",
  description:
    "Ліквідація і зміни ТОВ, ліцензії, реєстрація бізнесу, бухгалтерія, адвокат і переклади. Київ і область, понад 10 років досвіду. Ціни на сайті.",
  // Поки сайт не на продакшні — закритий від індексації (ROADMAP, Фаза 5).
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { type: "website", locale: "uk_UA", siteName: "Weksar" },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: "#14161a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={fontVariables}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-graphite">
          До вмісту
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <Tracking />
      </body>
    </html>
  );
}

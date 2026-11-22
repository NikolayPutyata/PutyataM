import "./globals.css";
import { fontVariables } from "./fonts";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import Tracking from "@/components/Tracking";
import Gtm from "@/components/Gtm";
import { IS_PRODUCTION as isProduction, SITE_URL } from "@/lib/site";


export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Weksar — ліквідація ТОВ і юридичні послуги в Києві",
  description:
    "Ліквідація і зміни ТОВ, ліцензії, реєстрація бізнесу, бухгалтерія, адвокат і переклади. Київ і область, понад 10 років досвіду. Ціни на сайті.",
  // Тестова збірка (NEXT_PUBLIC_SITE_ENV=staging) — закрита від індексації.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { type: "website", locale: "uk_UA", siteName: "Weksar", images: [{ url: "/og.png", width: 1200, height: 630 }] },
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
        <Gtm />
      </body>
    </html>
  );
}

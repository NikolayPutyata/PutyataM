import "../app/globals.css";
import { fontVariables } from "../app/fonts";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import Tracking from "./Tracking";
import Gtm from "./Gtm";
import { t } from "@/lib/i18n";
import { IS_PRODUCTION, SITE_URL } from "@/lib/site";

// Спільний кореневий шаблон для обох мов: <html lang>, шапка, футер, аналітика.
export const baseMetadata = (locale) => ({
  metadataBase: new URL(SITE_URL),
  // Тестова збірка (NEXT_PUBLIC_SITE_ENV=staging) — закрита від індексації.
  robots: IS_PRODUCTION ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { type: "website", locale: locale === "en" ? "en_US" : "uk_UA", siteName: "Weksar", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  formatDetection: { telephone: false },
});

export const viewport = { themeColor: "#14161a" };

export default function SiteShell({ locale, children }) {
  const d = t(locale);
  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-amber focus:px-4 focus:py-2 focus:text-graphite">
          {d.skip}
        </a>
        <TopBar />
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <Tracking />
        <Gtm />
      </body>
    </html>
  );
}

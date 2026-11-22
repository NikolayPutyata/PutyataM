// Метадані сторінки: title, description, canonical, hreflang, Open Graph і Twitter з фірмовою картинкою.
// Next.js не зливає openGraph сторінки з батьківським, тому кожна сторінка отримує повний набір.
import { languagePair, localeOf } from "./alternates";

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "Weksar" };

export function pageMeta({ title, description, path = "" }) {
  const url = path ? `/${path}` : "/";
  const locale = localeOf(path);
  const pair = languagePair(path);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      ...(pair && { languages: { uk: pair.uk, en: pair.en, "x-default": pair.uk } }),
    },
    openGraph: { type: "website", locale: locale === "en" ? "en_US" : "uk_UA", siteName: "Weksar", title, description, url, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

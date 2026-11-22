// Метадані сторінки: title, description, canonical, Open Graph і Twitter з фірмовою картинкою.
// Next.js не зливає openGraph сторінки з батьківським, тому кожна сторінка отримує повний набір.
const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: "Weksar — реєстрація і ліквідація бізнесу, тендери та ліцензії" };

export function pageMeta({ title, description, path = "" }) {
  const url = path ? `/${path}` : "/";
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "uk_UA", siteName: "Weksar", title, description, url, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

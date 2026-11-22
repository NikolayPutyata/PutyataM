import { IS_PRODUCTION, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// За замовчуванням індексація дозволена; у тестовій збірці (staging) — заборонена.
export default function robots() {
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}

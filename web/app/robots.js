import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// На продакшні — індексація дозволена; на staging/прототипі — заборонена.
export default function robots() {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}

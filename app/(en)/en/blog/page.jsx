import BlogIndex from "@/components/BlogIndex";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Weksar Blog: LLC Liquidation, Tenders, Registration",
  description: "Practical articles on LLC liquidation and changes, Prozorro tenders, company registration and licenses in Ukraine.",
  path: "en/blog",
});

export default function BlogPageEn() {
  return <BlogIndex locale="en" />;
}

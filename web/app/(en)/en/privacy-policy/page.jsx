import DocPage from "@/components/DocPage";
import { enPrivacyPage } from "@/content/en/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: enPrivacyPage.meta.title, description: enPrivacyPage.meta.description, path: enPrivacyPage.path });

export default function PrivacyPolicyEn() {
  return <DocPage page={enPrivacyPage} />;
}

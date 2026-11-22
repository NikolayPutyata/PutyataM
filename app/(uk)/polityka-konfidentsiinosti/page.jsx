import DocPage from "@/components/DocPage";
import { privacyPage } from "@/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: privacyPage.meta.title, description: privacyPage.meta.description, path: privacyPage.path });

export default function PrivacyPage() {
  return <DocPage page={privacyPage} />;
}

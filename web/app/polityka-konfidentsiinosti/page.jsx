import DocPage from "@/components/DocPage";
import { privacyPage } from "@/content";

export const metadata = {
  title: { absolute: privacyPage.meta.title },
  description: privacyPage.meta.description,
  alternates: { canonical: `/${privacyPage.path}` },
};

export default function PrivacyPage() {
  return <DocPage page={privacyPage} />;
}

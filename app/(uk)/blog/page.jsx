import BlogIndex from "@/components/BlogIndex";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Блог Weksar: ліквідація ТОВ, тендери, реєстрація",
  description: "Практичні статті про ліквідацію і зміни ТОВ, тендери в Prozorro, реєстрацію бізнесу, ліцензії, гранти і бухгалтерію.",
  path: "blog",
});

export default function BlogPage() {
  return <BlogIndex locale="uk" />;
}

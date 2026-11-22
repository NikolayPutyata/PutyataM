import Link from "next/link";
import { t } from "@/lib/i18n";

// Ідея логотипа напряму C: WEKSAR шрифтом Unbounded, «W» бурштином.
export default function Logo({ className = "", locale = "uk" }) {
  const d = t(locale);
  return (
    <Link href={d.home} aria-label={d.logoLabel} className={`font-display text-[1.05rem] font-bold tracking-[0.02em] text-on-dark ${className}`}>
      <span className="text-amber">W</span>EKSAR
    </Link>
  );
}

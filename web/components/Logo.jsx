import Link from "next/link";

// Ідея логотипа напряму C: WEKSAR шрифтом Unbounded, «W» бурштином.
export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="Weksar — на головну" className={`font-display text-[1.05rem] font-bold tracking-[0.02em] text-on-dark ${className}`}>
      <span className="text-amber">W</span>EKSAR
    </Link>
  );
}

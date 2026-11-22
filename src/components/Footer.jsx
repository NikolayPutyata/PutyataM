import { Link } from "react-router-dom";
import { MESSENGERS, PHONE_DISPLAY, PHONE_TEL } from "../lib/contacts";

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/m_putyata", icon: "/in.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@mykola.putyata", icon: "/tok.png" },
];

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-6 md:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm mb-10">
          {/* Лінки на розділи */}
          <nav
            aria-label="Розділи сайту"
            className="flex flex-col gap-4 justify-start md:flex-row md:flex-wrap md:gap-x-10 md:items-center text-gray-300"
          >
            <Link to="/services/registration" className="hover:text-white transition">
              Юридичні послуги
            </Link>
            <Link to="/accounting/fop" className="hover:text-white transition">
              Бухгалтерія
            </Link>
            <Link to="/notary/certification" className="hover:text-white transition">
              Нотаріус
            </Link>
            <Link to="/grants/business" className="hover:text-white transition">
              Гранти
            </Link>
            <Link to="/contacts" className="hover:text-white transition">
              Контакти
            </Link>
            <Link to="/politics" className="hover:text-white transition">
              Політика конфіденційності
            </Link>
          </nav>

          {/* Контакти і соцмережі */}
          <div className="flex flex-col gap-4">
            <a href={PHONE_TEL} className="text-lg font-semibold hover:underline whitespace-nowrap">
              {PHONE_DISPLAY}
            </a>
            <div className="flex gap-5 text-gray-300">
              {[...MESSENGERS, ...SOCIALS].map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <img src={s.icon} alt="" width={30} height={30} className="hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} WEKSAR. Всі права захищено.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

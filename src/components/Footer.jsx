import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-6 md:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm mb-10">
          {/* Лінки на розділи */}
          <div>
            <nav className="flex flex-col gap-4 justify-start md:flex-row md:justify-center md:gap-12 md:items-center text-gray-300">
              <a href="/services/registration" className="hover:text-white transition">
                Юридичні послуги
              </a>
              <a href="/accounting/fop" className="hover:text-white transition">
                Бухгалтерія
              </a>
              <a href="/notary/certification" className="hover:text-white transition">
                Нотаріус
              </a>
              <a href="/grants/business" className="hover:text-white transition">
                Гранти
              </a>
              <Link to="/public"  className="hover:text-white transition">
              Публічна оферта
            </Link>
            <Link to="/politics"  className="hover:text-white transition">
              Політика конфіденційності
            </Link>
              
            </nav>
          </div>

          {/* Соцмережі */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 text-gray-300">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="/in.png"
                  alt=""
                  width={30}
                  className="hover:scale-110 transition"
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="/tok.png"
                  alt=""
                  width={30}
                  className="hover:scale-110 transition"
                />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/fb.png"
                  alt=""
                  width={30}
                  className="hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} WEKSAR. Всі права захищено.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

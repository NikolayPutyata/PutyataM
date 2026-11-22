import { Link } from "react-router-dom";
import { MESSENGERS, PHONE_DISPLAY, PHONE_TEL } from "../lib/contacts";

// Тонка смуга над шапкою: телефон, месенджери, контакти — на всіх екранах.
function TopBar() {
  return (
    <div className="bg-neutral-900 text-white text-sm">
      <div className="mx-3 md:mx-10 px-1 md:px-2 py-1.5 flex items-center justify-between gap-3">
        <a href={PHONE_TEL} className="font-medium tracking-wide hover:underline whitespace-nowrap">
          {PHONE_DISPLAY}
        </a>
        <div className="flex items-center gap-3">
          {MESSENGERS.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Написати в ${m.name}`}
              className="hover:opacity-80"
            >
              <img src={m.icon} alt="" width={22} height={22} />
            </a>
          ))}
          <Link to="/contacts" className="hidden sm:inline ml-2 uppercase tracking-wider text-xs hover:underline">
            Контакти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

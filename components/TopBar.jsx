import { CONTACTS } from "@/lib/site";
import LangSwitch from "./LangSwitch";

export default function TopBar() {
  return (
    <div className="border-b border-graphite-line bg-graphite text-[0.8rem] text-on-dark">
      <div className="container-site flex items-center justify-between gap-4 py-2">
        <a href={CONTACTS.phoneHref} className="font-semibold tracking-wide hover:text-amber">
          {CONTACTS.phoneDisplay}
        </a>
        <ul className="flex items-center gap-4 text-on-dark-muted">
          {CONTACTS.messengers.map((m) => (
            <li key={m.name} className={m.name === "WhatsApp" ? "hidden sm:block" : ""}>
              <a href={m.href} target="_blank" rel="noreferrer" className="hover:text-amber">
                {m.name}
              </a>
            </li>
          ))}
          <li className="border-l border-graphite-line pl-4"><LangSwitch /></li>
        </ul>
      </div>
    </div>
  );
}

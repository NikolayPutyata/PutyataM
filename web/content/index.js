// Реєстр сторінок, що збираються з даних. Ключ = адреса без «/».
import { liquidationPages } from "./liquidation";
import { tenderPages } from "./tenders";
import { otherPages } from "./pages";

const all = { ...liquidationPages, ...tenderPages, ...otherPages };

export const PAGES = Object.fromEntries(Object.entries(all).map(([path, p]) => [path, { ...p, path }]));
export { privacyPage } from "./pages";

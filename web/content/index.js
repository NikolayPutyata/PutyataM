// Реєстр сторінок, що збираються з даних. Ключ = адреса без «/».
import { liquidationPages } from "./liquidation";
import { tenderPages } from "./tenders";
import { otherPages } from "./pages";
import { registrationPages } from "./registration";
import { licensePages } from "./licenses";

const all = { ...registrationPages, ...liquidationPages, ...tenderPages, ...licensePages, ...otherPages };

export const PAGES = Object.fromEntries(Object.entries(all).map(([path, p]) => [path, { ...p, path }]));
export { privacyPage } from "./pages";

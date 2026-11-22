// Реєстр сторінок, що збираються з даних. Ключ = адреса без «/».
import { liquidationPages } from "./liquidation";
import { tenderPages } from "./tenders";
import { otherPages } from "./pages";
import { registrationPages } from "./registration";
import { licensePages } from "./licenses";
import { changesPages } from "./changes";
import { accountingPages } from "./accounting";
import { servicePages } from "./services";
import { companyPages } from "./company";

const all = { ...registrationPages, ...liquidationPages, ...tenderPages, ...licensePages, ...changesPages, ...accountingPages, ...servicePages, ...companyPages, ...otherPages };

export const PAGES = Object.fromEntries(Object.entries(all).map(([path, p]) => [path, { ...p, path }]));
export { privacyPage } from "./pages";

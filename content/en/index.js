// Registry of English pages. Key = path without leading "/".
import { enCorePages } from "./pages";
import { enLiquidationPages } from "./liquidation";
import { enTenderLicensePages } from "./tenders-licenses";
import { enChangesAccountingPages } from "./changes-accounting";
import { enServicePages } from "./services";

const all = { ...enCorePages, ...enLiquidationPages, ...enTenderLicensePages, ...enChangesAccountingPages, ...enServicePages };

export const EN_PAGES = Object.fromEntries(Object.entries(all).map(([path, p]) => [path, { ...p, path, locale: "en" }]));
export { enPrivacyPage } from "./pages";

// Після `next build`: збирає out/.htaccess із шаблону і карти редиректів.
// Для старої адреси, чия нова сторінка вже є в out/, — 301; якщо ще немає — тимчасовий 302 на головну.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out = path.join(root, "out");
const map = JSON.parse(fs.readFileSync(path.join(root, "redirects.json"), "utf8"));
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

let permanent = 0;
let temporary = 0;
const rules = Object.entries(map)
  .filter(([from]) => !from.startsWith("_"))
  .map(([from, to]) => {
    const exists = to === "" || fs.existsSync(path.join(out, `${to}.html`));
    if (exists) permanent++;
    else temporary++;
    const target = exists ? `https://weksar.com/${to}` : "https://weksar.com/";
    const code = exists ? 301 : 302;
    return `  RewriteRule ^${esc(from)}/?$ ${target} [R=${code},L]${exists ? "" : `   # тимчасово: /${to} ще не готова`}`;
  });

const template = fs.readFileSync(path.join(root, "htaccess.template"), "utf8");
fs.writeFileSync(path.join(out, ".htaccess"), template.replace("# {{REDIRECTS}}", rules.join("\n")));
console.log(`.htaccess: ${permanent} постійних (301) і ${temporary} тимчасових (302) редиректів`);

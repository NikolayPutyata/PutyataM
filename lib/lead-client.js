// Клієнтська логіка заявок: атрибуція (UTM), події для GTM/GA4, відправка, запасний канал.
import { CONTACTS, LEAD_ENDPOINT } from "./site";
import { t } from "./i18n";

const ATTR_KEY = "weksar_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const ENDPOINT = LEAD_ENDPOINT;

export function pushEvent(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v.slice(0, 100);
    });
    if (!Object.keys(utm).length && sessionStorage.getItem(ATTR_KEY)) return;
    let referrer = "";
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.hostname !== window.location.hostname) referrer = ref.hostname;
    } catch {
      /* некоректний referrer */
    }
    sessionStorage.setItem(ATTR_KEY, JSON.stringify({ utm, referrer, landing: window.location.pathname }));
  } catch {
    /* sessionStorage недоступний */
  }
}

function attribution() {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY)) || {};
  } catch {
    return {};
  }
}

// Заявка йде на сервер окремими полями — сервер перевіряє їх і сам оформлює повідомлення в Telegram.
export async function sendLead({ name, phone, message, cta }) {
  if (!ENDPOINT) throw new Error("NEXT_PUBLIC_LEAD_ENDPOINT не задано");
  const a = attribution();
  const path = window.location.pathname;
  const payload = {
    name,
    phone,
    message,
    cta,
    consent: true,
    page: path,
    lang: path === "/en" || path.startsWith("/en/") ? "en" : "uk",
    landing: a.landing || "",
    referrer: a.referrer || "",
    utm: a.utm || {},
  };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } finally {
    clearTimeout(timer);
  }
  pushEvent("generate_lead", { form_page: path });
}

export function whatsappFallbackHref({ name, phone, message, cta }, locale = "uk") {
  const f = t(locale).form;
  const lines = [f.waGreeting, `${f.waName}: ${name}`, `${f.waPhone}: ${phone}`];
  const h1 = document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim();
  if (!["/", "/en"].includes(window.location.pathname) && h1) lines.push(`${f.waService}: ${h1}`);
  if (cta) lines.push(`${f.waButton}: ${cta}`);
  if (message) lines.push(`${f.waQuestion}: ${message}`);
  return `https://wa.me/${CONTACTS.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function trackContactClicks() {
  const onClick = (e) => {
    const a = e.target.closest?.("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const page = { link_page: window.location.pathname };
    if (href.startsWith("tel:")) pushEvent("click_phone", page);
    else if (href.startsWith("mailto:")) pushEvent("click_email", page);
    else if (/t\.me\/|wa\.me\/|^viber:/.test(href)) {
      const messenger = href.includes("t.me/") ? "telegram" : href.includes("wa.me/") ? "whatsapp" : "viber";
      pushEvent("click_messenger", { messenger, ...page });
    }
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}

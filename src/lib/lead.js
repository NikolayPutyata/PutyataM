// Атрибуція заявок (звідки прийшов відвідувач), відкриття модальної форми
// і події для GTM/GA4. Персональні дані в dataLayer не передаються.

const ATTR_KEY = "weksar_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

export function pushEvent(event, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// Викликається один раз при завантаженні сайту. Зберігає UTM-мітки і
// сторінку входу на час сесії, щоб передати їх разом із заявкою.
export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v.slice(0, 100);
    });
    const hasUtm = Object.keys(utm).length > 0;
    if (!hasUtm && sessionStorage.getItem(ATTR_KEY)) return;
    let referrer = "";
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.hostname !== window.location.hostname) referrer = ref.hostname;
    } catch {
      /* некоректний referrer — ігноруємо */
    }
    sessionStorage.setItem(
      ATTR_KEY,
      JSON.stringify({ utm, referrer, landing: window.location.pathname })
    );
  } catch {
    /* sessionStorage недоступний (приватний режим тощо) — працюємо без атрибуції */
  }
}

export function getAttribution() {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY)) || null;
  } catch {
    return null;
  }
}

// Відкриває модальну форму заявки і запамʼятовує, яку кнопку натиснули.
export function openLeadForm(e) {
  const dialog = document.getElementById("my_modal_2");
  if (!dialog) return;
  dialog.dataset.cta = e?.currentTarget?.textContent?.trim() || "";
  dialog.showModal();
}

// Кліки по телефону, месенджерах і email → події для GA4.
export function trackContactClicks() {
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        pushEvent("click_phone", { link_page: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        pushEvent("click_email", { link_page: window.location.pathname });
      } else if (/t\.me\/|wa\.me\/|^viber:/.test(href)) {
        const messenger = href.includes("t.me/") ? "telegram" : href.includes("wa.me/") ? "whatsapp" : "viber";
        pushEvent("click_messenger", { messenger, link_page: window.location.pathname });
      }
    },
    true
  );
}

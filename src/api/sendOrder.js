import axios from "axios";
import { getAttribution, pushEvent } from "../lib/lead";

const api = axios.create({
  baseURL: "https://unium-server-q8g7u.ondigitalocean.app",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

function pageLabel() {
  const path = window.location.pathname;
  if (path === "/") return "Головна (/)";
  const h1 = document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim();
  return h1 ? `${h1} (${path})` : path;
}

function sourceLabel() {
  const a = getAttribution();
  if (!a) return "";
  const parts = Object.entries(a.utm || {}).map(([k, v]) => `${k.replace("utm_", "")}: ${v}`);
  if (a.referrer) parts.push(`перехід з: ${a.referrer}`);
  if (a.landing) parts.push(`вхід на: ${a.landing}`);
  return parts.join("; ");
}

// Текст заявки для відправки вручну через месенджер, якщо сервер недоступний.
export function messengerFallbackText({ name, phone, message, cta }) {
  const lines = ["Добрий день! Заявка з сайту weksar.com", `Ім'я: ${name}`, `Телефон: ${phone}`];
  const h1 = document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim();
  if (window.location.pathname !== "/" && h1) lines.push(`Послуга: ${h1}`);
  if (cta) lines.push(`Кнопка: ${cta}`);
  if (message) lines.push(`Питання: ${message}`);
  return lines.join("\n");
}

export const sendOrder = async ({ name, phone, message, cta }) => {
  const lines = [`${name}`, `${phone}`];
  if (message) lines.push(message);
  lines.push("");
  lines.push(`Сторінка: ${pageLabel()}`);
  if (cta) lines.push(`Кнопка: ${cta}`);
  const source = sourceLabel();
  if (source) lines.push(`Джерело: ${source}`);

  const { data } = await api.post("/telegram/send", {
    text: lines.join("\n"),
  });

  // Подія для GTM/GA4: заявка успішно відправлена (без персональних даних).
  pushEvent("generate_lead", { form_page: window.location.pathname });

  return data;
};

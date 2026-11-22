import axios from "axios";

const api = axios.create({
  baseURL: "https://unium-server-q8g7u.ondigitalocean.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendOrder = async ({ name, phone, message }) => {
  let text = `${name}\n${phone}`;

  if (message) {
    text += `\n${message}`;
  }

  const { data } = await api.post("/telegram/send", {
    text,
  });

  // Подія для GTM/GA4: заявка успішно відправлена (без персональних даних).
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    form_page: window.location.pathname,
  });

  return data;

};

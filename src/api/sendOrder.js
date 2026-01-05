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

  return data;

};

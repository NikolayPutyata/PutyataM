import axios from "axios";

const api = axios.create({
  baseURL: "http://your-server-url",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendOrder = async ({ name, phone }) => {
  const text = `${name}\n${phone}`;

  const { data } = await api.post("/telegram/send", {
    text,
  });

  return data;
};

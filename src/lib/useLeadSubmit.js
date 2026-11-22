import { useState } from "react";
import * as Yup from "yup";
import { sendOrder } from "../api/sendOrder";

// Телефон: 10–15 цифр, дозволені +, пробіли, дефіси, дужки
// (підходить і для українських, і для іноземних номерів).
export const phoneSchema = Yup.string()
  .trim()
  .required("Вкажіть номер телефону")
  .test("phone", "Перевірте номер, напр. 096 123 45 67", (v) => {
    if (!v || !/^[+\d\s\-()]+$/.test(v)) return false;
    const digits = v.replace(/\D/g, "").length;
    return digits >= 10 && digits <= 15;
  });

export const nameSchema = Yup.string().trim().min(2, "Мінімум 2 символи").required("Вкажіть ім’я");

export const consentSchema = Yup.boolean().oneOf([true], "Потрібна згода на обробку даних");

// status: idle | success | error
export function useLeadSubmit() {
  const [status, setStatus] = useState("idle");

  const submit = async (values, { resetForm }, cta) => {
    // Honeypot: це поле не бачать люди, його заповнюють лише боти.
    if (values.website) {
      resetForm();
      setStatus("success");
      return;
    }
    try {
      await sendOrder({
        name: values.name.trim(),
        phone: values.phone.trim(),
        message: values.message?.trim(),
        cta,
      });
      resetForm();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return { status, setStatus, submit };
}

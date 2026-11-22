"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { CONTACTS } from "@/lib/site";
import { sendLead, whatsappFallbackHref } from "@/lib/lead-client";
import { t } from "@/lib/i18n";

function validate(v, f) {
  const e = {};
  if (v.name.trim().length < 2) e.name = f.errName;
  const digits = v.phone.replace(/\D/g, "").length;
  if (!/^[+\d\s\-()]+$/.test(v.phone.trim()) || digits < 10 || digits > 15) e.phone = f.errPhone;
  if (!v.agreed) e.agreed = f.errConsent;
  return e;
}

// Форма заявки. dark — варіант для темного фону.
export default function LeadForm({ cta = "", dark = false, withMessage = true, locale = "uk" }) {
  const f = t(locale).form;
  const id = useId();
  const [values, setValues] = useState({ name: "", phone: "", message: "", agreed: false, website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [fallback, setFallback] = useState("");

  const set = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
    if (status === "error" || status === "success") setStatus("idle");
  };

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values, f);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (values.website) return setStatus("success"); // honeypot
    const lead = { name: values.name.trim(), phone: values.phone.trim(), message: values.message.trim(), cta };
    setStatus("sending");
    try {
      await sendLead(lead);
      setValues({ name: "", phone: "", message: "", agreed: false, website: "" });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setFallback(whatsappFallbackHref(lead, locale));
      setStatus("error");
    }
  }

  const field = `w-full rounded-[var(--radius-btn)] border px-4 py-3 text-base outline-none transition-colors ${
    dark ? "border-graphite-line bg-graphite-2 text-on-dark placeholder:text-on-dark-muted focus:border-amber" : "border-line bg-paper text-ink focus:border-graphite"
  }`;
  const label = `mb-1.5 block text-sm font-semibold ${dark ? "text-on-dark" : "text-ink"}`;
  const err = `mt-1.5 text-sm ${dark ? "text-[#ff9b93]" : "text-[#c62828]"}`;

  if (status === "success") {
    return (
      <div role="status" className={`rounded-[var(--radius-card)] p-6 ${dark ? "bg-graphite-2 text-on-dark" : "bg-mist"}`}>
        <p className="font-display text-lg font-semibold">{f.okTitle}</p>
        <p className={`mt-2 ${dark ? "text-on-dark-muted" : "text-muted"}`}>{f.okText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
        </label>
      </div>
      <div>
        <label htmlFor={`${id}-name`} className={label}>{f.name}</label>
        <input id={`${id}-name`} name="name" autoComplete="name" className={field} value={values.name} onChange={set("name")} aria-invalid={!!errors.name} />
        {errors.name && <p className={err}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>{f.phone}</label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="096 123 45 67" className={field} value={values.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />
        {errors.phone && <p className={err}>{errors.phone}</p>}
      </div>
      {withMessage && (
        <div>
          <label htmlFor={`${id}-msg`} className={label}>{f.message} <span className="font-normal opacity-70">{f.optional}</span></label>
          <textarea id={`${id}-msg`} name="message" rows={3} className={`${field} resize-none`} value={values.message} onChange={set("message")} />
        </div>
      )}
      <div>
        <label htmlFor={`${id}-agreed`} className={`flex items-start gap-3 text-xs leading-relaxed ${dark ? "text-on-dark-muted" : "text-muted"}`}>
          <input id={`${id}-agreed`} type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--color-amber)]" checked={values.agreed} onChange={set("agreed")} />
          <span>
            {f.consentBefore}{" "}
            <Link href={f.privacyHref} className="underline">{f.consentLink}</Link>.
          </span>
        </label>
        {errors.agreed && <p className={err}>{errors.agreed}</p>}
      </div>
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3.5 disabled:opacity-60 sm:w-auto">
        {status === "sending" ? f.sending : f.submit}
      </button>
      {status === "error" && (
        <div role="alert" className={`rounded-[var(--radius-card)] border p-4 text-sm ${dark ? "border-graphite-line bg-graphite-2 text-on-dark" : "border-[#f3c6c7] bg-[#fdf1f1] text-ink"}`}>
          <p className="font-bold">{f.failTitle}</p>
          <a href={fallback} target="_blank" rel="noreferrer" className="btn mt-3 bg-[#1f8f4e] py-2 text-white hover:bg-[#1a7a43]">
            {f.failWhatsapp}
          </a>
          <p className="mt-2">
            {f.failCall} <a href={CONTACTS.phoneHref} className="font-bold underline">{CONTACTS.phoneDisplay}</a>
          </p>
        </div>
      )}
    </form>
  );
}

import { MESSENGERS, PHONE_DISPLAY, PHONE_TEL } from "../lib/contacts";

// Повідомлення після відправки форми: успіх або помилка з запасними контактами.
function LeadStatus({ status, fallbackText = "" }) {
  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-4 text-green-900">
        <p className="font-semibold">Дякуємо! Заявку отримано.</p>
        <p className="text-sm mt-1">Ми звʼяжемося з вами найближчим часом.</p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-900">
        <p className="font-semibold">Не вдалося надіслати заявку.</p>
        {fallbackText && (
          <a
            href={`https://wa.me/380961987961?text=${encodeURIComponent(fallbackText)}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm mt-3 text-white"
          >
            Надіслати цю заявку у WhatsApp
          </a>
        )}
        <p className="text-sm mt-2">
          Спробуйте ще раз або звʼяжіться з нами напряму:{" "}
          <a href={PHONE_TEL} className="underline font-medium whitespace-nowrap">
            {PHONE_DISPLAY}
          </a>
          {MESSENGERS.map((m) => (
            <span key={m.name}>
              {", "}
              <a href={m.href} className="underline font-medium" target="_blank" rel="noreferrer">
                {m.name}
              </a>
            </span>
          ))}
        </p>
      </div>
    );
  }
  return null;
}

export default LeadStatus;

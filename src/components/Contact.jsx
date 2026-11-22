import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LeadStatus from "./LeadStatus";
import { MESSENGERS } from "../lib/contacts";
import { consentSchema, nameSchema, phoneSchema, useLeadSubmit } from "../lib/useLeadSubmit";

const validationSchema = Yup.object({
  name: nameSchema,
  phone: phoneSchema,
  message: Yup.string().max(2000, "Не більше 2000 символів"),
  agreed: consentSchema,
});

const initialValues = { name: "", phone: "", message: "", agreed: false, website: "" };

function MessengerIcons({ className = "" }) {
  return (
    <div className={`flex justify-center items-center gap-6 ${className}`}>
      {MESSENGERS.map((m) => (
        <a key={m.name} href={m.href} target="_blank" rel="noreferrer" aria-label={`Написати в ${m.name}`}>
          <img src={m.icon} alt={m.name} width={48} height={48} className="hover:scale-110 transition" />
        </a>
      ))}
    </div>
  );
}

const inputClass = (invalid) =>
  `w-full rounded-md px-4 py-2 border ${
    invalid ? "border-red-500" : "border-gray-300"
  } focus:outline-none focus:ring-1 focus:ring-gray-400`;

function FieldError({ id, touched, error }) {
  if (!touched || !error) return null;
  return (
    <p id={id} className="text-sm text-red-600 mt-1">
      {error}
    </p>
  );
}

function Contact() {
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    phone: `${uid}-phone`,
    message: `${uid}-message`,
    agreed: `${uid}-agreed`,
  };
  const { status, setStatus, submit, fallbackText } = useLeadSubmit();

  return (
    <section id="contact" className="py-18 md:28 px-6 border-t border-gray-200 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Залишити заявку</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, helpers) => submit(values, helpers)}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="flex flex-col gap-4 text-left" noValidate onChange={() => status !== "idle" && setStatus("idle")}>
                {/* Honeypot: приховане від людей поле-пастка для ботів */}
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label>
                    Website
                    <Field name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <label htmlFor={ids.name} className="block text-sm font-medium mb-1">
                    Ім’я
                  </label>
                  <Field
                    id={ids.name}
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    aria-describedby={`${ids.name}-err`}
                    className={inputClass(touched.name && errors.name)}
                  />
                  <FieldError id={`${ids.name}-err`} touched={touched.name} error={errors.name} />
                </div>

                <div>
                  <label htmlFor={ids.phone} className="block text-sm font-medium mb-1">
                    Телефон
                  </label>
                  <Field
                    id={ids.phone}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="096 123 45 67"
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    aria-describedby={`${ids.phone}-err`}
                    className={inputClass(touched.phone && errors.phone)}
                  />
                  <FieldError id={`${ids.phone}-err`} touched={touched.phone} error={errors.phone} />
                </div>

                <div>
                  <label htmlFor={ids.message} className="block text-sm font-medium mb-1">
                    Ваше запитання
                  </label>
                  <Field
                    id={ids.message}
                    name="message"
                    as="textarea"
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  />
                  <FieldError id={`${ids.message}-err`} touched={touched.message} error={errors.message} />
                </div>

                <div>
                  <label htmlFor={ids.agreed} className="flex items-start gap-3 cursor-pointer">
                    <Field
                      id={ids.agreed}
                      name="agreed"
                      type="checkbox"
                      className="checkbox checkbox-xs mt-1"
                      aria-describedby={`${ids.agreed}-err`}
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      Даю згоду на обробку персональних даних відповідно до{" "}
                      <a href="/politics" className="underline font-medium hover:text-gray-900">
                        Політики конфіденційності
                      </a>
                      .
                    </span>
                  </label>
                  <FieldError id={`${ids.agreed}-err`} touched={touched.agreed} error={errors.agreed} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold disabled:opacity-60"
                >
                  {isSubmitting ? "Надсилаємо…" : "Надіслати"}
                </button>

                <LeadStatus status={status} fallbackText={fallbackText} />

                <MessengerIcons className="md:hidden mt-6" />
              </Form>
            )}
          </Formik>
        </div>

        {/* Правий блок з фоном */}
        <div
          className="hidden md:flex flex-col justify-between bg-cover bg-center relative rounded-xl text-center text-white overflow-hidden"
          style={{ backgroundImage: "url('/form1.jpg')" }}
        >
          <div className="absolute inset-0 bg-neutral-800/50"></div>

          <div className="relative z-10 p-10 flex flex-col h-full w-full justify-between">
            <div>
              <h3 className="text-4xl font-bold mb-6 leading-snug">ЗАЛИШАЙ ЗАЯВКУ</h3>
              <p className="text-xl text-gray-100">Консультація в межах замовленої послуги — безкоштовна</p>
            </div>

            <div>
              <p className="text-2xl text-gray-200 font-medium">ДЕЛЕГУЙ РУТИННУ РОБОТУ — ПРОФЕСІОНАЛАМ!</p>
            </div>

            <MessengerIcons className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

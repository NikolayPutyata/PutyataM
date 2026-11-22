import { useEffect, useId, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LeadStatus from "./LeadStatus";
import { consentSchema, nameSchema, phoneSchema, useLeadSubmit } from "../lib/useLeadSubmit";

const validationSchema = Yup.object({
  name: nameSchema,
  phone: phoneSchema,
  agreed: consentSchema,
});

const initialValues = { name: "", phone: "", agreed: false, website: "" };

const inputClass = (invalid) =>
  `w-full rounded-xl border px-4 py-3 text-base transition focus:outline-none focus:ring-2 ${
    invalid ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-gray-200"
  }`;

// Модальна форма заявки (відкривається кнопками на сторінках послуг через openLeadForm).
const FormForFeedback = () => {
  const uid = useId();
  const rootRef = useRef(null);
  const { status, setStatus, submit } = useLeadSubmit();

  // Коли модальне вікно закривають — повертаємо форму до початкового стану.
  useEffect(() => {
    const dialog = rootRef.current?.closest("dialog");
    if (!dialog) return;
    const onClose = () => setStatus("idle");
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [setStatus]);

  const getCta = () => rootRef.current?.closest("dialog")?.dataset.cta || "";

  return (
    <div ref={rootRef} className="flex flex-col md:flex-row">
      {/* LEFT IMAGE */}
      <div className="relative h-48 md:h-auto md:w-6/12">
        <img src="/suprovid.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 hidden md:flex flex-col justify-end p-8 text-white">
          <h3 className="text-2xl font-semibold">Потрібна консультація?</h3>
          <p className="mt-2 text-sm text-white/80">Залиште заявку — ми звʼяжемось з вами найближчим часом</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex w-full flex-col justify-center p-8 md:p-10 md:w-7/12 bg-white">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">Залишити заявку</h2>

        {status === "success" ? (
          <div className="space-y-4">
            <LeadStatus status="success" />
            <form method="dialog">
              <button className="btn btn-neutral w-full">Закрити</button>
            </form>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, helpers) => submit(values, helpers, getCta())}
          >
            {({ isSubmitting, touched, errors, values }) => (
              <Form className="space-y-3 bg-white" noValidate>
                {/* Honeypot: приховане від людей поле-пастка для ботів */}
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label>
                    Website
                    <Field name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div>
                  <Field
                    name="name"
                    placeholder="Ваше ім'я"
                    aria-label="Ваше ім'я"
                    autoComplete="name"
                    aria-invalid={Boolean(touched.name && errors.name)}
                    className={inputClass(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Field
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="096 123 45 67"
                    aria-label="Телефон"
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    className={inputClass(touched.phone && errors.phone)}
                  />
                  {touched.phone && errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div className="mt-4 max-w-md">
                  <label htmlFor={`${uid}-agreed`} className="flex items-start gap-3 cursor-pointer">
                    <Field id={`${uid}-agreed`} name="agreed" type="checkbox" className="checkbox checkbox-xs mt-1" />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      Даю згоду на обробку персональних даних відповідно до{" "}
                      <a href="/politics" className="underline font-medium hover:text-gray-900">
                        Політики конфіденційності
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!values.agreed || isSubmitting}
                  className="btn btn-neutral w-full py-5 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 mt-4"
                >
                  {isSubmitting ? "Надсилаємо…" : "Надіслати заявку"}
                </button>

                <LeadStatus status={status} />
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default FormForFeedback;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendOrder } from "../api/sendOrder";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Мінімум 2 символи")
    .required(),
  phone: Yup.string()
    .matches(/^\+?[0-9\s\-()]{10,}$/)
    .required(),
});

const FormForFeedback = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
              {/* LEFT IMAGE */}
              <div className="relative h-48 md:h-auto md:w-6/12">
                <img
                  src="/suprovid.jpg"
                  alt="feedback"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
    
                {/* Текст поверх картинки (desktop) */}
                <div className="absolute inset-0 hidden md:flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-semibold">
                    Потрібна консультація?
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Залиште заявку — ми звʼяжемось з вами найближчим часом
                  </p>
                </div>
              </div>
    
              {/* RIGHT FORM */}
              <div className="flex w-full flex-col justify-center p-8 md:p-10 md:w-7/12">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                  Залишити заявку
                </h2>
    
                <Formik
                  initialValues={{ name: "", phone: "" }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { resetForm }) => {
                  try {
                    await sendOrder(values);

                   resetForm();
                  document.getElementById("my_modal_2")?.close();
                   } catch (error) {
                     console.error(error);
                           }
  }}
                >
                  {({ isSubmitting, touched, errors }) => (
                    <Form className="space-y-3">
                      {/* Ім'я */}
                      <div>
                        <Field
                          name="name"
                          placeholder="Ваше ім'я"
                          className={`w-full rounded-xl border px-4 py-3 text-base transition focus:outline-none focus:ring-2
                            ${
                              touched.name && errors.name
                                ? "border-red-400 focus:ring-red-200"
                                : "border-gray-300 focus:ring-gray-200"
                            }`}
                        />
                        
                      </div>
    
                      {/* Телефон */}
                      <div>
                        <Field
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          placeholder="099 000 00 00"
                          className={`w-full rounded-xl border px-4 py-3 text-base transition focus:outline-none focus:ring-2
                            ${
                              touched.phone && errors.phone
                                ? "border-red-400 focus:ring-red-200"
                                : "border-gray-300 focus:ring-gray-200"
                            }`}
                        />
                        
                      </div>
                      <div className="mt-4 max-w-md">
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      required
      className="checkbox checkbox-xs mt-1"
      checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
    />

    <span className="text-xs text-gray-500 leading-relaxed">
      Даю згоду на обробку персональних даних відповідно до{" "}
      <a
        href="/politics"
        rel="noopener noreferrer"
        className="underline font-medium hover:text-gray-900"
      >
        Політики конфіденційності
      </a>{" "}
      та погоджуюсь з умовами{" "}
      <a
        href="/public"
        rel="noopener noreferrer"
        className="underline font-medium hover:text-gray-900"
      >
        Публічної оферти
      </a>
      .
    </span>
  </label>
</div>



    
                      {/* Кнопка */}
                      <button
                        type="submit"
                        disabled={!agreed || isSubmitting}
                        className={`btn btn-neutral mt-2 w-full ${!agreed || isSubmitting ? "bg-gray-500 text-gray-300 cursor-not-allowed" : ""} py-5 font-semibold text-white transition
                          disabled:cursor-not-allowed disabled:opacity-60 mt-4`}
                      >
                        Надіслати заявку
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
        </div>
  );
};

export default FormForFeedback;

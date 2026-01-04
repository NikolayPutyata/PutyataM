import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendOrder } from "../api/sendOrder";

function Contact() {
  const initialValues = {
    name: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Введіть ім’я"),
    phone: Yup.string().required("Введіть телефон"),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
  try {
    await sendOrder(values);
    resetForm();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section
      id="contact"
      className="py-18 md:28 px-6 border-t border-gray-200 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-8 md:p-12">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      Залишити заявку
    </h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 text-left">
        <div>
          <Field name="name">
            {({ field, meta }) => (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ім’я
                </label>
                <input
                  {...field}
                  type="text"
                  className={`w-full rounded-md px-4 py-2 border ${
                    meta.touched && meta.error
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-gray-400`}
                />
              </div>
            )}
          </Field>
        </div>

        <div>
          <Field name="phone">
            {({ field, meta }) => (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Телефон
                </label>
                <input
                  {...field}
                  type="tel"
                  className={`w-full rounded-md px-4 py-2 border ${
                    meta.touched && meta.error
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-gray-400`}
                />
              </div>
            )}
          </Field>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Ваше запитання
          </label>
          <Field
            name="message"
            as="textarea"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="btn btn-neutral w-full md:w-auto px-8 py-3 text-lg font-semibold"
        >
          Надіслати
        </button>

        {/* Иконки под формой */}
        <div className="md:hidden mt-6 flex justify-center items-center gap-6">
          <a href="#">
            <img
              src="/tg.png"
              alt="Telegram"
              width={48}
              height={48}
              className="hover:scale-110 transition"
            />
          </a>
          <a href="#">
            <img
              src="/wa.png"
              alt="WhatsApp"
              width={48}
              height={48}
              className="hover:scale-110 transition"
            />
          </a>
          <a href="#">
            <img
              src="/viber.png"
              alt="Viber"
              width={48}
              height={48}
              className="hover:scale-110 transition"
            />
          </a>
        </div>
      </Form>
    </Formik>
  </div>

        {/* Правий блок з логотипом */}
        <div
          className="hidden md:flex flex-col justify-between bg-cover bg-center relative rounded-xl text-center text-white overflow-hidden"
          style={{ backgroundImage: "url('/form1.jpg')" }} // змінити на свій шлях
        >
          {/* затемнення поверх фону */}
          <div className="absolute inset-0 bg-neutral-800/50"></div>

          <div className="relative z-10 p-10 flex flex-col h-full w-full justify-between">
            <div>
              <h3 className="text-4xl font-bold mb-6 leading-snug">
                ЗАЛИШАЙ ЗАЯВКУ НА <br />
                БЕЗКОШТОВНУ КОНСУЛЬТАЦІЮ
              </h3>
            </div>

            <div>
              <p className="text-2xl text-gray-200 font-medium">
                ДЕЛЕГУЙ РУТИННУ РОБОТУ — ПРОФЕСІОНАЛАМ!
              </p>
            </div>

            <div className="mt-10 flex justify-center items-center gap-6">
              <a href="https://t.me/unium_lawyer">
                <img
                  src="/tg.png"
                  alt="Telegram"
                  width={48}
                  height={48}
                  className="hover:scale-110 transition"
                />
              </a>
              <a href="https://wa.me/380961987961">
                <img
                  src="/wa.png"
                  alt="WhatsApp"
                  width={48}
                  height={48}
                  className="hover:scale-110 transition"
                />
              </a>
              <a href="https://viber.me/380961987961">
                <img
                  src="/viber.png"
                  alt="Viber"
                  width={48}
                  height={48}
                  className="hover:scale-110 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

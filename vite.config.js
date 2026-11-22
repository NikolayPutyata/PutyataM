import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Google Tag Manager вставляється в index.html лише тоді, коли у .env.local
// (або у змінних середовища під час збірки) задано VITE_GTM_ID=GTM-XXXXXXX.
// Без ID збірка така сама, як і раніше.
function gtm(id) {
  return {
    name: "inject-gtm",
    transformIndexHtml() {
      if (!id) return [];
      if (!/^GTM-[A-Z0-9]+$/.test(id)) {
        throw new Error(`VITE_GTM_ID має формат GTM-XXXXXXX, отримано: ${id}`);
      }
      return [
        {
          tag: "script",
          injectTo: "head-prepend",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`,
        },
        {
          tag: "noscript",
          injectTo: "body-prepend",
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ];
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), tailwindcss(), gtm(env.VITE_GTM_ID?.trim())],
  };
});

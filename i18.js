// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "./public/locales/en/common.json";
import commonAr from "./public/locales/ar/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: commonEn,
      // require('../greenrawabi/app/locales/en.json'),
    },
    ar: {
      translation: commonAr,
      //  require('../greenrawabi/app/locales/ar.json'),
    },
  },
});

export default i18n;

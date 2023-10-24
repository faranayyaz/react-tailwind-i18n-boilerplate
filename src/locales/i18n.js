import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en", // Default language
  debug: true, // Enable debugging in development
  interpolation: {
    escapeValue: false, // React already escapes values by default
  },
  resources: {
    en: {
      translation: require("./en/translation.json"),
    },
    ar: {
      translation: require("./ar/translation.json"),
    },
  },
});

export default i18n;

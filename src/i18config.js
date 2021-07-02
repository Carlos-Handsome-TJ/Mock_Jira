import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: "%PUBLIC_URL%/locales/cn-zh.json"
    },
    zh: {
        translation: "%PUBLIC_URL%/locales/en-us.json"
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "zh",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
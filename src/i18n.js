import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// @ts-ignore
import zh_CN from "./assets/locales/zh-CN.json"
import en_US from "../src/assets/locales/en-US.json"

const resources = {
    en: en_US,
    zh: zh_CN
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: ["zh_CN", "en_US"],
        lng: "zh",
        // ns: ["login", "register", "change_lang"],
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;
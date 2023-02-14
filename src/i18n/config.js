import i18next from "i18next";
import {initReactI18next} from "react-i18next"

i18next.use(initReactI18next).init({
    fallbackLng : 'en',
    debug: true,


    resources:{
        en:{
            translation: require('./locales/en/translation.json')
        },

        uz:{
            translation: require('./locales/uz/translation.json')
        }
    }
});

export default i18next;
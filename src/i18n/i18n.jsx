import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import VI from '../utils/locales/vi/vi.json'
import PAGEVI from '../utils/locales/vi/page.json'
import EN from '../utils/locales/en/en.json'
import PAGEEN from '../utils/locales/en/page.json'


export const locales = {
    en: 'English',
    vi: 'Tiếng Việt'
}

const resources = {
    en: {
        header: EN,
        page: PAGEEN
    },
    vi: {
        header: VI,
        page: PAGEVI
    }
}

const defaultNS = 'header'

i18n.use(initReactI18next).init({
    resources,
    lng: 'vi',
    ns: ['header', 'page'],
    defaultNS,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {languages} from '@constants';

const en = require('./localization/en.json');

const defaultLanguage = languages.EN;

export default i18n.use(initReactI18next).init({
  resources: {
    [languages.EN]: {translation: en},
  },
  lng: defaultLanguage,
  fallbackLng: languages.EN,
  react: {
    nsMode: 'default',
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  nsSeparator: false,
  keySeparator: false,
  debug: true, // DISABLE EIF NO NEED LOGS
});

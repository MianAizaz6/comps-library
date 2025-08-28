import translationsDE from '~/i18n/translations-de.json';
import translationsEN from '~/i18n/translations-en.json';

export interface Languages {
  name: string;
  code: string;
  flagCode: string;
}

export const languages: Languages[] = [
  {
    name: 'Deutsch',
    code: 'de',
    flagCode: 'de',
  },
  {
    name: 'English',
    code: 'en',
    flagCode: 'gb',
  },
];

interface Translations {
  [key: Languages['code']]: {
    [key: string]: string;
  };
}

const ui: Translations = {
  de: translationsDE,
  en: translationsEN,
};

export const showDefaultLang = false;
export const defaultLanguage = languages[0];

export function getLangFromUrl(url: URL): Languages {
  const [, lang] = url.pathname.split('/');
  const language = languages.find((l) => l.code === lang);
  return language ? language : defaultLanguage;
}

export function getLanguageData(lang: string) {
  return languages.find((l) => l.code === lang) ?? defaultLanguage;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[(typeof defaultLanguage)['code']]) {
    if (key === '') {
      return '';
    } else if (ui[lang][key] === undefined) {
      console.log(`Translation not found for key: ${key}`);
      return ui[defaultLanguage['code']][key] || key;
    }
    return ui[lang][key] || ui[defaultLanguage['code']][key];
  };
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLanguage.code ? path : `/${l}${path}`;
  };
}

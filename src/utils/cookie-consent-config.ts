import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import { getPermalink } from '~/utils/permalinks';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {},
  },
  language: {
    default: 'de',
    autoDetect: 'browser',
    translations: {
      de: {
        consentModal: {
          title: 'Hallo 👋',
          description:
            'Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          showPreferencesBtn: 'Einstellungen verwalten',
          footer: `<a href="${getPermalink('/datenschutz')}">Datenschutz-Bestimmungen</a>`,
        },
        preferencesModal: {
          title: 'Einwilligungspräferenzzentrum',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Alle ablehnen',
          savePreferencesBtn: 'Einstellungen speichern',
          closeIconLabel: 'Modal schließen',
          serviceCounterLabel: 'Dienst|Dienste',
          sections: [
            {
              title: 'Verwendung von Cookies',
              description:
                'Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.',
            },
            {
              title: 'Unbedingt erforderliche Cookies <span class="pm__badge">Immer aktiviert</span>',
              description:
                'Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen festgelegt, die einer Anforderung von Diensten gleichkommen, wie beispielsweise das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen. Sie können Ihren Browser so einstellen, dass er Sie über diese Cookies informiert oder sie blockiert, aber einige Teile der Website funktionieren dann nicht.',
              linkedCategory: 'notwendig',
            },
            {
              title: 'Funktionalitäts-Cookies',
              description:
                'Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern, deren Dienste wir unseren Seiten hinzugefügt haben, festgelegt werden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht einwandfrei.',
              linkedCategory: 'funktionalität',
            },
            {
              title: 'Analyse-Cookies',
              description:
                'Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten und am wenigsten beliebt sind und wie sich Besucher auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym. Wenn Sie diese Cookies nicht zulassen, wissen wir nicht, wann Sie unsere Website besucht haben, und können deren Leistung nicht überwachen.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Mehr Informationen',
              description:
                'Für jede Anfrage in Bezug auf meine Richtlinien zu Cookies und Ihre Auswahlmöglichkeiten, bitte <a class="cc__link" href="mailto:info@pa-it-solutions.de">kontaktieren Sie uns</a>.',
            },
          ],
        },
      },
    },
  },
};

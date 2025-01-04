import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { locales } from "qsconfig";

console.log("Boot file: i18n");

// Retrieve supported languages
let i18n;
const messages = {};
locales.supported.forEach((locale) => {
  messages[locale.isocode] = locale.translations;
});

// Create i18n instance
if (locales.multiLanguage) {
  i18n = createI18n({
    locale: locales.default.isocode,
    globalInjection: true,
    messages,
    fallbackLocale: "en",
    silentTranslationWarn: true,
  });
}

export default boot(({ app }) => {
  console.log("Executing boot file: i18n");

  if (locales.multiLanguage) {
    // Set i18n instance on app
    app.use(i18n);
  } else {
    // Placeholder for non-multilanguage apps
    app.config.globalProperties.$t = (key) => {
      return key;
    };
  }
});

export { i18n };

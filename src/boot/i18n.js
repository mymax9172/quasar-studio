import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { defaultLanguage, supportedLanguages } from "src/i18n";

let i18n;
if (defaultLanguage != null) {
  i18n = createI18n({
    locale: defaultLanguage,
    globalInjection: true,
    messages: supportedLanguages,
    fallbackLocale: "en",
    silentTranslationWarn: true,
  });
}

export default boot(({ app }) => {
  if (defaultLanguage != null) {
    // Set i18n instance on app
    app.use(i18n);
  } else {
    app.config.globalProperties.$t = (key) => {
      return key;
    };
  }
});

export { i18n };

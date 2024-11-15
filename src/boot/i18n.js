import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { languages } from "src/i18n";
import { application } from "app/framework/config/application.mjs";

const i18n = createI18n({
  locale: application.languages.default,
  globalInjection: true,
  messages: languages,
  fallbackLocale: "en",
  silentTranslationWarn: true,
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});

export { i18n };

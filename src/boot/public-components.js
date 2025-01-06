import { boot } from "quasar/wrappers";

import QsNavigation from "src/components/public/qs-navigation.vue";

import { QuasarStudio } from "quasarstudio";

export default boot(({ app }) => {
  app.component("qs-navigation", QsNavigation);

  app.component("qs-header", QuasarStudio.UI.QsHeader);
  app.component("qs-footer", QuasarStudio.UI.QsFooter);
  app.component("qs-panel", QuasarStudio.UI.QsPanel);
  app.component("qs-version", QuasarStudio.UI.QsVersion);
  app.component("qs-btn-back", QuasarStudio.UI.QsBtnBack);
  app.component("qs-btn-home", QuasarStudio.UI.QsBtnHome);
  app.component("qs-btn-panel", QuasarStudio.UI.QsBtnPanel);
  app.component("qs-lang-switcher", QuasarStudio.UI.QsLangSwitcher);
});

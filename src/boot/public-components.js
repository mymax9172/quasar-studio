import { boot } from "quasar/wrappers";

import QsNavigation from "src/components/public/qs-navigation.vue";

import { QuasarStudio } from "quasarstudio";

export default boot(({ app }) => {
  app.component("qs-navigation", QsNavigation);

  app.component("qs-header", QuasarStudio.UI.Layout.QsHeader);
  app.component("qs-footer", QuasarStudio.UI.Layout.QsFooter);
  app.component("qs-panel", QuasarStudio.UI.Layout.QsPanel);
  app.component("qs-version", QuasarStudio.UI.QsVersion);
  app.component("qs-btn-back", QuasarStudio.UI.QsBtnBack);
  app.component("qs-btn-home", QuasarStudio.UI.QsBtnHome);
  app.component("qs-lang-switcher", QuasarStudio.UI.QsLangSwitcher);
});

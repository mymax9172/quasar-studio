import { boot } from "quasar/wrappers";
import QsNavigation from "src/components/public/qs-navigation.vue";
import { QuasarStudio } from "quasarstudio";

console.log("Boot file: public-components");

export default boot(({ app }) => {
  console.log("Executing boot file: public-components");

  app.component("qs-navigation", QsNavigation);

  // app.component("qs-header", QuasarStudio.UI.Components.QsHeader);
  // app.component("qs-footer", QuasarStudio.UI.Components.QsFooter);
  // app.component("qs-panel", QuasarStudio.UI.Components.QsPanel);
  // app.component("qs-version", QuasarStudio.UI.Components.QsVersion);
  // app.component("qs-btn-back", QuasarStudio.UI.Components.QsBtnBack);
  // app.component("qs-btn-home", QuasarStudio.UI.Components.QsBtnHome);
  // app.component("qs-btn-panel", QuasarStudio.UI.Components.QsBtnPanel);
  // app.component("qs-lang-switcher", QuasarStudio.UI.Components.QsLangSwitcher);

  Object.keys(QuasarStudio.UI.Components).forEach((key) => {
    app.component(key, QuasarStudio.UI.Components[key]);
  });
});

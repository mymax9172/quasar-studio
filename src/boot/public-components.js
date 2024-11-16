import { boot } from "quasar/wrappers";
import QsBtnBack from "src/components/public/qs-btn-back.vue";
import QsBtnHome from "src/components/public/qs-btn-home.vue";
import QsLangSwitcher from "src/components/public/qs-lang-switcher.vue";
import QsNavigation from "src/components/public/qs-navigation.vue";
import QsTitle from "src/components/public/qs-title.vue";
import QsVersion from "src/components/public/qs-version.vue";

export default boot(({ app }) => {
  app.component("qs-btn-back", QsBtnBack);
  app.component("qs-btn-home", QsBtnHome);
  app.component("qs-lang-switcher", QsLangSwitcher);
  app.component("qs-navigation", QsNavigation);
  app.component("qs-title", QsTitle);
  app.component("qs-version", QsVersion);
});

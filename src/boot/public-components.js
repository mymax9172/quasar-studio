import { boot } from "quasar/wrappers";
import { QuasarStudio } from "quasarstudio";

console.log("Boot file: public-components");

export default boot(({ app }) => {
  console.log("Executing boot file: public-components");

  // Load all component as public components
  Object.keys(QuasarStudio.UI.Components).forEach((key) => {
    app.component(key, QuasarStudio.UI.Components[key]);
  });
});

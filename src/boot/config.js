import { boot } from "quasar/wrappers";
import { Configuration } from "src/framework/configuration";
import { useSettingsStore } from "src/stores/settings";

console.log("Boot file: config");

// Load default configuration
let configuration = new Configuration();

export default boot(async ({ app, redirect }) => {
  console.log("Executing boot file: config");

  // Check configuration is valid
  if (configuration == null) return;
  configuration.setup(useSettingsStore());

  // Check current settings
  const settings = useSettingsStore();

  if (settings.theme) {
    try {
      configuration.themeManager.setCurrentTheme(settings.theme);
    } catch (error) {
      settings.theme = configuration.themeManager.current;
    }
  } else settings.theme = configuration.themeManager.current;

  // Locale handling
  if (settings.locale) {
    try {
      configuration.localeManager.setCurrentLocale(settings.locale);
    } catch (error) {
      settings.locale = configuration.localeManager.current;
    }
  } else settings.locale = configuration.localeManager.current;

  // Store settings in VueJS
  app.config.globalProperties.$configuration = configuration;
});

export { configuration };

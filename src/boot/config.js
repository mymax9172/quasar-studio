import { boot } from "quasar/wrappers";
import { Configuration } from "src/framework/configuration";
import { useSettingsStore } from "src/stores/settings";

console.log("Boot file: config");

// Check if a proper configuration exists
let configuration;
try {
  // Load default configuration
  configuration = new Configuration();
  await configuration.initialize();
} catch (error) {}

export default boot(({ app, redirect }) => {
  console.log("Executing boot file: config");
  // Check configuration is valid
  if (configuration == null) return;

  // Check current settings
  const settings = useSettingsStore();

  if (settings.theme) {
    try {
      configuration.themeManager.setCurrentTheme(settings.theme);
    } catch (error) {
      settings.theme = configuration.themeManager.current;
    }
  } else settings.theme = configuration.themeManager.current;

  if (settings.language) {
    try {
      configuration.languageManager.setCurrentLanguage(settings.language);
    } catch (error) {
      settings.language = configuration.languageManager.current;
    }
  } else settings.language = configuration.languageManager.current;

  app.config.globalProperties.$configuration = configuration;
});

export { configuration };

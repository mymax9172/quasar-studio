import { boot } from "quasar/wrappers";
import { Configuration } from "src/framework/configuration";
import { useSettingsStore } from "src/stores/settings";

// Load default configuration
const configuration = new Configuration();
await configuration.initialize();

export default boot(({ app }) => {
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

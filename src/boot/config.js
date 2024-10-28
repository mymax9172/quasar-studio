import { boot } from "quasar/wrappers";
import { Configuration } from "src/config/configuration";
import { useSettingsStore } from "src/stores/settings";

// Load default configuration
const configuration = new Configuration();
await configuration.initialize();

export default boot(({ app }) => {
  // Check current settings
  const settings = useSettingsStore();

  if (settings.theme)
    configuration.themeManager.setCurrentTheme(settings.theme);
  else settings.theme = configuration.themeManager.current;

  if (settings.language)
    configuration.languageManager.setCurrentLanguage(settings.language);
  else settings.language = configuration.languageManager.current;

  app.config.globalProperties.$configuration = configuration;
});

export { configuration };

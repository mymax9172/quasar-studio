import { application } from "app/framework/config/application";
import { i18n } from "src/boot/i18n";
import { useSettingsStore } from "src/stores/settings";

export class LanguageManager {
  default;
  supportedLanguages;
  current;

  constructor() {
    this.default = application.languages.default || "en-US";
    this.supportedLanguages = application.languages.supported || ["en-US"];
    this.current = this.default;
  }

  getLanguageName(isocode) {
    const names = new Intl.DisplayNames([this.current], { type: "language" });
    return names.of(isocode);
  }

  setCurrentLanguage(isocode) {
    if (this.supportedLanguages.includes(isocode)) {
      this.current = isocode;
      i18n.global.locale = isocode;
      const settingsStore = useSettingsStore();
      settingsStore.language = isocode;
    } else throw new Error("Couldn't set language " + isocode + " as current");
  }
}

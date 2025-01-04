import { languages } from "qsconfig";
import { i18n } from "src/boot/i18n";
import { useSettingsStore } from "src/stores/settings";

export class LanguageManager {
  multiLanguage;
  default;
  supportedLanguages;
  current;

  constructor() {
    this.multiLanguage = languages.multiLanguage || false;
    this.default = languages.default;
    if (this.multiLanguage) {
      this.supportedLanguages = languages.supported;
    }
    this.current = this.default.isocode;
  }

  getLanguageName(isocode) {
    const names = new Intl.DisplayNames([this.current], { type: "language" });
    return names.of(isocode);
  }

  setCurrentLanguage(isocode) {
    if (!this.multiLanguage) return;

    const language = this.supportedLanguages.find((e) => e.isocode === isocode);

    if (language) {
      this.current = language.isocode;
      i18n.global.locale = isocode;
      const settingsStore = useSettingsStore();
      settingsStore.language = isocode;
    } else throw new Error("Couldn't set language " + isocode + " as current");
  }

  translate(key) {
    return key;
  }
}

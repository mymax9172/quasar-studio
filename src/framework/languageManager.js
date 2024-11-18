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
    if (this.multiLanguage) {
      this.supportedLanguages = [];
      const languageContext = require.context("qsconfig/languages/", true, /\.mjs$/i);

      languageContext.keys().forEach((e) => {
        const isocode = e.split("/").pop().split(".")[0];
        this.supportedLanguages.push(isocode);
      });

      this.default = languages.default || this.supportedLanguages[0];
      this.current = this.default;
    }
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

  translate(key) {
    return key;
  }
}

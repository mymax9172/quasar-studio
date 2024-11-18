import { languages } from "qsconfig";

let supportedLanguages;
let defaultLanguage;

if (languages.multiLanguage) {
  supportedLanguages = {};
  const languageContext = require.context("qsconfig/languages/", true, /\.mjs$/i);

  languageContext.keys().forEach(async (e) => {
    const isocode = e.split("/").pop().split(".")[0];
    const file = await import("qsconfig/languages/" + isocode + ".mjs");
    supportedLanguages[isocode] = file.language;
  });
  defaultLanguage = languages.default || supportedLanguages[0];
} else {
  defaultLanguage = null;
  supportedLanguages = {};
}

export { defaultLanguage, supportedLanguages };

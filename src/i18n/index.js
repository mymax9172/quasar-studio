import { application } from "app/framework/config/application";

const languages = {};

for (let i = 0; i < application.languages.supported.length; i++) {
  const lang = application.languages.supported[i];
  const file = await import("framework/languages/" + lang + ".mjs");
  languages[lang] = file.language;
}

export { languages };

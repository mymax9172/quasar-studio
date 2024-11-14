import { application } from "app/framework/config/application.mjs";
import { Theme } from "./theme";

export class ThemeManager {
  default;
  themes;
  current;

  constructor() {
    this.default = "";
    this.current = "";
    this.themes = [];
  }

  async initialize() {
    if (!application.themes || Object.keys(application.themes).length === 0)
      return;

    for (let i = 0; i < application.themes.templates.length; i++) {
      const name = application.themes.templates[i];

      const definition = await import("framework/themes/" + name + ".mjs");
      const theme = new Theme(name, definition.default);
      this.themes.push(theme);
    }

    if (
      application.themes.default &&
      this.themes.find((e) => e.name === application.themes.default)
    ) {
      this.default = application.themes.default;
    } else if (this.themes.length > 0) this.default = this.themes[0].name;
    this.current = this.default;
  }

  getCurrentTheme() {
    if (this.current.length > 0)
      return this.themes.find((e) => e.name === this.current);
    else return null;
  }

  setCurrentTheme(name) {
    if (this.themes.find((e) => e.name === name)) this.current = name;
    else throw new Error("Couldn't set theme " + name + " as current");
  }
}

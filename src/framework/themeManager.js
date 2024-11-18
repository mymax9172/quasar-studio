import { themes } from "qsconfig";
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
    if (!themes || themes.default == null) return;

    this.themes = [];
    const themeContext = require.context("qsconfig/themes/", true, /\.mjs$/i);

    themeContext.keys().forEach(async (e) => {
      const name = e.split("/").pop().split(".")[0];

      const definition = await import("qsconfig/themes/" + name + ".mjs");
      const theme = new Theme(name, definition.default);
      this.themes.push(theme);
    });

    this.default = themes.default || this.themes[0].name;

    this.current = this.default;
  }

  getCurrentTheme() {
    if (this.current.length > 0) return this.themes.find((e) => e.name === this.current);
    else return null;
  }

  setCurrentTheme(name) {
    if (this.themes.find((e) => e.name === name)) this.current = name;
    else throw new Error("Couldn't set theme " + name + " as current");
  }
}

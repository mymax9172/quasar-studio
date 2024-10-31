import { themes } from "app/framework/config/themes";
import { Theme } from "./theme";

export class ThemeManager {
  default;
  themes;
  current;

  constructor() {
    this.default = "";
    this.themes = [];

    const themeNames = Object.keys(themes.templates);
    themeNames.forEach((name) => {
      const definition = themes.templates[name];
      const theme = new Theme(name, definition);
      this.themes.push(theme);
    });

    if (themes.default && this.themes.find((e) => e.name === themes.default)) {
      this.default = themes.default;
    } else this.default = this.themes[0].name;

    this.current = this.default;
  }

  getCurrentTheme() {
    return this.themes.find((e) => e.name === this.current);
  }

  setCurrentTheme(name) {
    if (this.themes.find((e) => e.name === name)) this.current = name;
    else throw new Error("Couldn't set theme " + name + " as current");
  }
}

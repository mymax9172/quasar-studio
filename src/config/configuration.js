import { Application } from "./application";
import { LanguageManager } from "./languageManager";
import { LayoutManager } from "./layoutManager";
import { Navigation } from "./navigation";
import { ThemeManager } from "./themeManager";
import { iconLibrary } from "app/framework/config/icon-library";

export class Configuration {
  application;
  layoutManager;
  themeManager;
  iconLibrary;
  navigation;
  languageManager;

  constructor() {
    this.application = new Application();
    this.layoutManager = new LayoutManager();
    this.themeManager = new ThemeManager();
    this.iconLibrary = iconLibrary;
    this.navigation = new Navigation();
    this.languageManager = new LanguageManager();
  }
}

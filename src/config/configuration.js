import { Application } from "./application";
import { LanguageManager } from "./languageManager";
import { LayoutManager } from "./layoutManager";
import { Navigation } from "./navigation";
import { ThemeManager } from "./themeManager";
import { iconLibrary } from "app/framework/config/icon-library.mjs";
import { StoryboardManager } from "./storyboardManager";
import { RouteManager } from "./routeManager";

export class Configuration {
  application;
  layoutManager;
  themeManager;
  iconLibrary;
  navigation;
  languageManager;
  storyboardManager;
  routeManager;

  constructor() {
    this.application = new Application();
    this.layoutManager = new LayoutManager();
    this.themeManager = new ThemeManager();
    this.iconLibrary = iconLibrary;
    this.navigation = new Navigation();
    this.languageManager = new LanguageManager();
    this.storyboardManager = new StoryboardManager();
    this.routeManager = new RouteManager();
  }

  async initialize() {
    await this.layoutManager.initialize();
    await this.storyboardManager.initialize();
    await this.routeManager.initialize(this);
  }
}

import { Application } from "./application";
import { LanguageManager } from "./intl/languageManager";
import { LayoutManager } from "./ui/layout/layoutManager";
import { Navigation } from "./ui/navigation/navigation";
import { ThemeManager } from "./ui/theme/themeManager";
import { StoryboardManager } from "./storyboard/storyboardManager";
import { RouteManager } from "./routing/routeManager";
import { IconLibrary } from "./ui/iconLibrary";
import { Architecture, architecture } from "./architecture/architecture";

export class Configuration {
  application;
  layoutManager;
  themeManager;
  iconLibrary;
  navigation;
  languageManager;
  storyboardManager;
  routeManager;
  architecture;

  constructor() {
    this.application = new Application();
    this.architecture = new Architecture();

    this.iconLibrary = new IconLibrary();
    this.layoutManager = new LayoutManager();
    this.themeManager = new ThemeManager();
    this.navigation = new Navigation();

    this.languageManager = new LanguageManager();
    this.storyboardManager = new StoryboardManager();
    this.routeManager = new RouteManager();
  }

  async initialize() {
    await this.layoutManager.initialize();
    await this.themeManager.initialize();
    await this.storyboardManager.initialize();
    await this.routeManager.initialize(this);
  }
}

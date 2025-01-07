import { Application } from "./application";
import { Navigation } from "./ui/navigation/navigation";
import { StoryboardManager } from "./storyboard/storyboardManager";
import { RouteManager } from "./routing/routeManager";
import { Architecture, architecture } from "./architecture/architecture";

import { QuasarStudio } from "quasarstudio";
import { locales, layouts, themes, icons } from "qsconfig";

import { i18n } from "src/boot/i18n";

const LocaleManager = QuasarStudio.Intl.LocaleManager;
const LayoutManager = QuasarStudio.UI.LayoutManager;
const ThemeManager = QuasarStudio.UI.ThemeManager;
const IconLibrary = QuasarStudio.UI.IconLibrary;

export class Configuration {
  application;
  layoutManager;
  themeManager;
  iconLibrary;
  navigation;
  localeManager;
  storyboardManager;
  routeManager;
  architecture;

  settings;

  constructor() {
    this.application = new Application();
    this.architecture = new Architecture();

    this.iconLibrary = new IconLibrary(icons);

    this.localeManager = new LocaleManager(locales, i18n);
    this.layoutManager = new LayoutManager(layouts);
    this.themeManager = new ThemeManager(themes);

    this.navigation = new Navigation();

    this.storyboardManager = new StoryboardManager();
    this.routeManager = new RouteManager();
  }

  async initialize() {
    await this.storyboardManager.initialize();
    await this.routeManager.initialize(this);
  }

  setup(settings) {
    this.settings = settings;
    this.localeManager.addListener("change", this.onChangeLocale.bind(this));
    this.themeManager.addListener("change", this.onChangeTheme.bind(this));
  }

  onChangeLocale(sender, args) {
    this.settings.setLocale(args.isocode);
  }

  onChangeTheme(sender, args) {
    this.settings.setTheme(args.name);
  }
}

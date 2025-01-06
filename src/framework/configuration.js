import { Application } from "./application";
//import { LayoutManager } from "./ui/layout/layoutManager";
import { Navigation } from "./ui/navigation/navigation";
import { ThemeManager } from "./ui/theme/themeManager";
import { StoryboardManager } from "./storyboard/storyboardManager";
import { RouteManager } from "./routing/routeManager";
import { IconLibrary } from "./ui/iconLibrary";
import { Architecture, architecture } from "./architecture/architecture";

import { QuasarStudio } from "quasarstudio";
import { locales, layouts } from "qsconfig";

import { i18n } from "src/boot/i18n";

const LocaleManager = QuasarStudio.Framework.Locales.LocaleManager;
const LayoutManager = QuasarStudio.Framework.Layouts.LayoutManager;

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

    this.iconLibrary = new IconLibrary();

    this.layoutManager = new LayoutManager(layouts);

    this.themeManager = new ThemeManager();
    this.navigation = new Navigation();

    this.localeManager = new LocaleManager(locales, i18n);

    this.storyboardManager = new StoryboardManager();
    this.routeManager = new RouteManager();
  }

  async initialize() {
    await this.themeManager.initialize();
    await this.storyboardManager.initialize();
    await this.routeManager.initialize(this);
  }

  setup(settings) {
    this.settings = settings;
    this.localeManager.addListener("change", this.onChangeLocale.bind(this));
  }

  onChangeLocale(sender, args) {
    this.settings.setLocale(args.isocode);
  }
}

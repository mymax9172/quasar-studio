//import { Architecture, architecture } from "./architecture/architecture";

import { QuasarStudio } from "quasarstudio";
import { locales, layouts, themes, icons, navigation, storyboard, application } from "qsconfig";

import { i18n } from "src/boot/i18n";

const LocaleManager = QuasarStudio.Intl.LocaleManager;
const LayoutManager = QuasarStudio.UI.LayoutManager;
const ThemeManager = QuasarStudio.UI.ThemeManager;
const IconLibrary = QuasarStudio.UI.IconLibrary;
const NavigationManager = QuasarStudio.UI.NavigationManager;
const StoryboardManager = QuasarStudio.UI.StoryboardManager;
const Application = QuasarStudio.Architecture.Application;

export class Configuration {
  application;
  layoutManager;
  themeManager;
  iconLibrary;
  navigationManager;
  localeManager;
  storyboardManager;
  routeManager;
  architecture;

  settings;

  constructor() {
    this.application = new Application(application);
    //this.architecture = new Architecture();

    this.iconLibrary = new IconLibrary(icons);
    this.localeManager = new LocaleManager(locales, i18n);
    this.layoutManager = new LayoutManager(layouts);
    this.themeManager = new ThemeManager(themes);
    this.navigationManager = new NavigationManager(navigation);
    this.storyboardManager = new StoryboardManager(storyboard);
  }

  async initialize() {
    //await this.routeManager.initialize(this);
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

//import { Architecture, architecture } from "./architecture/architecture";

import { QuasarStudio } from "quasarstudio";
import { locales, layouts, themes, icons, navigation, storyboard, application, architecture } from "qsconfig";

import { i18n } from "src/boot/i18n";

const Application = QuasarStudio.Architecture.Application;
const Architecture = QuasarStudio.Architecture.Architecture;
const LocaleManager = QuasarStudio.Intl.LocaleManager;
const LayoutManager = QuasarStudio.UI.LayoutManager;
const ThemeManager = QuasarStudio.UI.ThemeManager;
const IconLibrary = QuasarStudio.UI.IconLibrary;
const NavigationManager = QuasarStudio.UI.NavigationManager;
const StoryboardManager = QuasarStudio.UI.StoryboardManager;

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
    // Architecure
    this.architecture = new Architecture(architecture);
    this.application = new Application(application);

    // Intl
    this.localeManager = new LocaleManager(locales, i18n);

    // UI
    this.iconLibrary = new IconLibrary(icons);
    this.layoutManager = new LayoutManager(layouts);
    this.themeManager = new ThemeManager(themes);
    this.navigationManager = new NavigationManager(navigation);
    this.storyboardManager = new StoryboardManager(storyboard);
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

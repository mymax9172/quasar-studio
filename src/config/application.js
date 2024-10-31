import { application } from "app/framework/config/application";
import { Quasar } from "quasar";

export class Application {
  name;
  title;
  credits;
  version;
  languages;
  entitlements;

  constructor() {
    this.name = application.name || "Quasar Studio";
    this.title = application.title || "Quasar Application";
    this.credits = {
      owner: application.credits?.owner || "",
      copyright: application.credits?.copyright || "MIT",
    };
    this.version = {
      number: application.version?.number || "0.0.1",
      build: application.version?.build || 1,
      quasar: Quasar.version,
    };
    this.languages = {
      default: application.languages?.default || "en-US",
      supported: application.languages?.supported || ["en-US"],
    };
    this.entitlements = application.entitlements || [];
  }
}

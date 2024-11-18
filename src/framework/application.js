import { application } from "qsconfig";
import { Quasar } from "quasar";

export class Application {
  name;
  title;
  credits;
  version;
  languages;
  entitlements;

  constructor() {
    this.name = application.name || "Quasar Studio Application";
    this.title = application.title || "Quasar Application";
    this.credits = {
      owner: application.credits?.owner || "",
      copyright: application.credits?.copyright || "MIT",
    };
    this.version = {
      number: application.versioning.version.number || "0.1",
      build: application.versioning.version.build || 1,
      quasar: Quasar.version,
    };
    this.languages = {
      default: application.languages?.default || "en-US",
      supported: application.languages?.supported || ["en-US"],
    };
    this.entitlements = application.entitlements || [];
  }
}

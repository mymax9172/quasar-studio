import { application, version } from "qsconfig";

export class Application {
  name;
  title;
  credits;
  versioning;

  constructor() {
    this.name = application.name || "Quasar Studio Application";
    this.title = application.title || "Quasar Application";
    this.credits = {
      owner: application.credits?.owner || "",
      copyright: application.credits?.copyright || "MIT",
    };
    this.versioning = application.versioning || "manual";
    this.version = version;
  }
}

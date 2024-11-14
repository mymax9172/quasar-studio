import { application } from "app/framework/config/application.mjs";
import { StoryboardPage } from "./storyboardPage";

export class StoryboardManager {
  home;
  pages;
  current;

  constructor() {
    this.home = "";
    this.pages = [];
    this.current = null;
  }

  async initialize() {
    for (let i = 0; i < application.storyboard.pages.length; i++) {
      const page = application.storyboard.pages[i];

      const definition = (await import("framework/storyboard/" + page + ".js"))
        .default;
      const storyboardPage = new StoryboardPage(definition);
      this.pages.push(storyboardPage);

      if (page === application.storyboard.home) this.home = storyboardPage;
    }
  }
}

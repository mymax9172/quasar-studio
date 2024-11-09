import { storyboard } from "app/framework/config/storyboard.mjs";
import { StoryboardPage } from "./storyboardPage";

export class StoryboardManager {
  home;
  pages;

  constructor() {
    this.home = "";
    this.pages = [];
  }

  async initialize() {
    for (let i = 0; i < storyboard.pages.length; i++) {
      const page = storyboard.pages[i];

      const pageFile = (page.path ? page.path + "/" : "") + page.name + ".js";
      const definition = (await import("framework/storyboard/" + pageFile))
        .default;
      const storyboardPage = new StoryboardPage(page.name, definition);
      this.pages.push(storyboardPage);
    }
  }
}

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
    // Read the storyboard
    const { storyboard } = await import("qsconfig/src/storyboard/index");

    // Get the home
    this.home = new StoryboardPage(storyboard.home);
    this.pages.push(this.home);

    // Get all other pages
    for (let i = 0; i < storyboard.pages.length; i++) {
      const pageDefinition = storyboard.pages[i];
      const storyboardPage = new StoryboardPage(pageDefinition);
      this.pages.push(storyboardPage);
    }
  }
}

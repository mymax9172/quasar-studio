import { storyboard } from "qsconfig";
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
    const storyboardContext = require.context("qsconfig/framework/storyboard/", true, /\.mjs$/i);

    const keys = storyboardContext.keys();
    for (let i = 0; i < keys.length; i++) {
      const name = keys[i].split("/").pop().split(".")[0];

      const definition = (await import("qsconfig/framework/storyboard/" + name + ".mjs")).default;

      const storyboardPage = new StoryboardPage(definition);
      this.pages.push(storyboardPage);

      if (name === storyboard.home) this.home = storyboardPage;
    }
  }
}

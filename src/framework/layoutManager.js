import { layouts } from "qsconfig";
import { Layout } from "./layout";

import { Screen } from "quasar";

export class LayoutManager {
  layouts;
  default;

  constructor() {
    this.layouts = [];
    this.default = "";
  }

  async initialize() {
    const devices = ["desktop", "tablet", "mobile"];

    this.layouts = [];
    const layoutContext = require.context("qsconfig/layouts/", true, /\.mjs$/i);

    layoutContext.keys().forEach(async (e) => {
      const name = e.split("/").pop().split(".")[0];

      let deviceName = "desktop";
      if (name.includes("-")) {
        const device = name.split("-")[1];
        if (devices.includes(device)) deviceName = device;
      }

      let layoutName;
      layoutName = name.split("-")[0];

      const definition = await import("qsconfig/layouts/" + name + ".mjs");
      const layout = new Layout(layoutName, deviceName, definition.default);
      this.layouts.push(layout);
    });

    this.default = layouts.default || this.layouts[0].name;
  }

  getLayout(name, device) {
    let layout;

    if (!device) device = this.currentDevice;

    if (name) {
      layout = this.layouts.find((e) => e.name === name && e.device === device);

      if (!layout) layout = this.layouts.find((e) => e.name === name && e.device === "desktop");
    }

    if (!layout && name != this.default) {
      layout = this.layouts.find((e) => e.name === this.default && e.device === device);

      if (!layout) layout = this.layouts.find((e) => e.name === this.default && e.device === "desktop");
    }

    return layout;
  }

  get currentDevice() {
    if (Screen.lt.md) return "mobile";
    else if (Screen.lt.lg) return "tablet";
    else return "desktop";
  }
}

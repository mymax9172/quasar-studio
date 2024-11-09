import { application } from "app/framework/config/application.mjs";
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

    for (let i = 0; i < application.layouts.templates.length; i++) {
      const name = application.layouts.templates[i];

      let deviceName = "desktop";
      if (name.includes("-")) {
        const device = name.split("-")[1];
        if (devices.includes(device)) deviceName = device;
      }

      let layoutName;
      layoutName = name.split("-")[0];

      const definition = await import("framework/layouts/" + name + ".js");
      const layout = new Layout(layoutName, deviceName, definition.default);
      this.layouts.push(layout);
    }
    if (
      application.layouts.default &&
      this.layouts.find((e) => e.name === application.layouts.default)
    ) {
      this.default = application.layouts.default;
    } else {
      this.default = this.layouts[0].name;
    }
  }

  getLayout(name, device) {
    let layout;

    if (!device) device = this.currentDevice;

    if (name) {
      layout = this.layouts.find((e) => e.name === name && e.device === device);

      if (!layout)
        layout = this.layouts.find(
          (e) => e.name === name && e.device === "desktop"
        );
    }

    if (!layout && name != this.default) {
      layout = this.layouts.find(
        (e) => e.name === this.default && e.device === device
      );

      if (!layout)
        layout = this.layouts.find(
          (e) => e.name === this.default && e.device === "desktop"
        );
    }

    return layout;
  }

  get currentDevice() {
    if (Screen.lt.md) return "mobile";
    else if (Screen.lt.lg) return "tablet";
    else return "desktop";
  }
}

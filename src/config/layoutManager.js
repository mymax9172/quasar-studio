import { layouts } from "framework/config/layouts";
import { Layout } from "./layout";
import { Screen } from "quasar";

export class LayoutManager {
  layouts;
  default;

  constructor() {
    this.layouts = [];
    this.default = "";

    const devices = ["desktop", "tablet", "mobile"];

    const layoutNames = Object.keys(layouts.templates);
    layoutNames.forEach((name) => {
      let layoutName;
      let deviceName = "desktop";
      if (name.includes("-")) {
        const device = name.split("-")[1];
        if (devices.includes(device)) deviceName = device;
      }
      layoutName = name.split("-")[0];

      const layout = new Layout(
        layoutName,
        deviceName,
        layouts.templates[name]
      );

      this.layouts.push(layout);
    });

    if (
      layouts.default &&
      this.layouts.find((e) => e.name === layouts.default)
    ) {
      this.default = layouts.default;
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

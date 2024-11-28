export class LayoutManager {
  layouts;
  defaults;

  constructor() {
    this.layouts = [];
    this.defaults = [];
  }

  async initialize() {
    this.layouts = [];

    const def = (await import("qsconfig/layouts")).layouts;
    def.layouts.forEach(async (layoutDefinition) => {
      const layout = new Layout(layoutDefinition);
      this.layouts.push(layout);
    });

    this.defaults = def.defaults || this.layouts[0];
  }

  getLayout(name, device) {
    let layout;

    if (!device) device = this.currentDevice;

    if (name) {
      layout = this.layouts.find((e) => e.name === name && e.devices.include(device));
      if (!layout) layout = this.layouts.find((e) => e.name === name && e.devices.includes("desktop"));
    }

    if (!layout) {
      layout = this.defaults.find((e) => e.devices.includes(device));
      if (!layout) layout = this.defaults[0];
    }

    return layout;
  }

  get currentDevice() {
    if (Screen.lt.md) return "mobile";
    else if (Screen.lt.lg) return "tablet";
    else return "desktop";
  }
}

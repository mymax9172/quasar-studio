import { icons } from "qsconfig/framework/config/icons.mjs";

export class IconLibrary {
  icons;

  constructor() {
    this.icons = [];

    const keys = Object.keys(icons);
    keys.forEach((key) => {
      const value = icons[key];

      const iconDef = {
        key: key,
        name: null,
        size: "xs",
      };

      if (typeof value === "string") {
        iconDef.name = value;
      } else {
        iconDef.name = value.name;
        iconDef.size = value.size;
      }
      this.icons.push(iconDef);
    });
  }

  get(key) {
    return this.icons.find((e) => e.key === key);
  }

  getIconName(key) {
    const iconDef = this.icons.find((e) => e.key === key);
    return iconDef?.name;
  }

  getIconSize(key) {
    const iconDef = this.icons.find((e) => e.key === key);
    return iconDef?.size;
  }
}

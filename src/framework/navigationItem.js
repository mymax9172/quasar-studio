import { configuration } from "src/boot/config";

export class NavigationItem {
  name;
  title;
  caption;
  icon;
  items;
  to;
  style;
  separator;

  constructor(definition) {
    this.separator = definition == null;
    if (this.separator) return;

    this.name = definition.name;
    this.title = definition.title;
    this.caption = definition.caption;
    this.icon = definition.icon;
    this.to = definition.to;
    this.style = {
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
      iconcolor: definition.style?.iconcolor,
    };
    this.items = [];

    if (definition.items) {
      this.items = [];
      definition.items.forEach((item) => {
        const childItem = new NavigationItem(item);
        this.items.push(childItem);
      });
    }
  }

  getURL() {
    if (!this.to) return null;
    else {
      if (typeof this.to === "string") {
        const routeManager = configuration.routeManager;
        const url = routeManager.findURL(this.to);
        return url;
      }
    }
    return null;
  }
}

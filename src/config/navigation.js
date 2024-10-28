import { navigation } from "framework/config/navigation";
import { NavigationItem } from "./navigation.item";

export class Navigation {
  position;
  items;

  constructor() {
    this.position = navigation.position || "panel";
    this.items = [];

    if (navigation.items) {
      navigation.items.forEach((item) => {
        const childItem = new NavigationItem(item);
        this.items.push(childItem);
      });
    }
  }
}

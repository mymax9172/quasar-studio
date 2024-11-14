import { itemManager } from "./itemManager";

export class LayoutFooter {
  left;
  middle;
  right;
  style;

  constructor(definition) {
    if (definition.left) {
      this.left = {};
      if (definition.left.items) this.loadItems(this.left, definition.left.items);
    }

    if (definition.middle) {
      this.middle = {};
      if (definition.middle.items) this.loadItems(this.middle, definition.middle.items);
    }

    if (definition.right) {
      this.right = {};
      if (definition.right.items) this.loadItems(this.right, definition.right.items);
    }

    this.style = {
      shadow: definition.style?.shadow || false,
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
    };
  }

  loadItems(slot, items) {
    slot.items = [];
    items.forEach((item) => {
      if (typeof item === "string") {
        slot.items.push(itemManager.getItem(item));
      } else if (typeof item === "function") {
        slot.items.push(item);
      }
    });
  }
}

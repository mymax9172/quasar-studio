import { ItemManager } from "./itemManager";

export class LayoutBar {
  left;
  middle;
  right;
  style;
  side;

  constructor(side, definition) {
    this.side = side;

    const itemManager = new ItemManager();

    if (definition.left) {
      this.left = {};
      if (definition.left.items) {
        this.left.items = [];
        itemManager.loadItems(this.left.items, definition.left.items);
      }
    }

    if (definition.middle) {
      this.middle = {};
      if (definition.middle.items) {
        this.middle.items = [];
        itemManager.loadItems(this.middle.items, definition.middle.items);
      }
    }

    if (definition.right) {
      this.right = {};
      if (definition.right.items) {
        this.right.items = [];
        itemManager.loadItems(this.right.items, definition.right.items);
      }
    }

    this.style = {
      shadow: definition.style?.shadow || false,
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
    };
  }
}

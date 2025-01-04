import { ItemManager } from "../itemManager";

export class LayoutPanel {
  top;
  middle;
  bottom;
  style;
  side;

  constructor(side, definition) {
    this.side = side;

    const itemManager = new ItemManager();

    if (definition.top) {
      this.top = {};
      if (definition.top.items) {
        this.top.items = [];
        itemManager.loadItems(this.top.items, definition.top.items);
      }
    }

    if (definition.middle) {
      this.middle = {};
      if (definition.middle.items) {
        this.middle.items = [];
        itemManager.loadItems(this.middle.items, definition.middle.items);
      }
    }

    if (definition.bottom) {
      this.bottom = {};
      if (definition.bottom.items) {
        this.bottom.items = [];
        itemManager.loadItems(this.bottom, definition.bottom.items);
      }
    }

    this.style = {
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
      width: definition.style?.width || 300,
      mini: definition.style?.mini,
    };
  }
}

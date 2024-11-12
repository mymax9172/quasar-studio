export class LayoutPanel {
  side;
  noTopSlot;
  noMiddleSlot;
  noBottomSlot;
  mini;
  width;
  style;
  slots;

  constructor(side, definition) {
    this.side = side;
    this.noTopSlot = definition.noTopSlot || false;
    this.noMiddleSlot = definition.noMiddleSlot || false;
    this.noBottomSlot = definition.noBottomSlot || false;

    this.width = definition.width || 300;

    this.mini = {
      enabled: definition.mini?.enabled || false,
      width: definition.mini?.width || 90,
    };

    this.style = {
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
    };

    this.slots = {
      left: definition.slots?.top,
      middle: definition.slots?.middle,
      right: definition.slots?.bottom,
    };
  }
}

export class LayoutFooter {
  noLeftSlot;
  noMiddleSlot;
  noRightSlot;
  showVersion;
  style;
  slots;

  constructor(definition) {
    this.noLeftSlot = definition.noLeftSlot || false;
    this.noMiddleSlot = definition.noMiddleSlot || false;
    this.noRightSlot = definition.noRightSlot || false;

    this.showVersion = definition.showVersion || false;

    this.style = {
      shadow: definition.style?.shadow || false,
      backcolor: definition.style?.backcolor,
      textcolor: definition.style?.textcolor,
    };

    this.slots = {
      left: definition.slots?.left,
      middle: definition.slots?.middle,
      right: definition.slots?.right,
    };
  }
}

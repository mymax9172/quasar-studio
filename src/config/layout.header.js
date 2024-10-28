export class LayoutHeader {
  noLeftSlot;
  noMiddleSlot;
  noRightSlot;
  showHomeIcon;
  showBackIcon;
  showVersion;
  showLanguageSwitcher;
  style;
  slots;

  constructor(definition) {
    this.noLeftSlot = definition.noLeftSlot || false;
    this.noMiddleSlot = definition.noMiddleSlot || false;
    this.noRightSlot = definition.noRightSlot || false;

    this.showHomeIcon = definition.showHomeIcon || false;
    this.showBackIcon = definition.showBackIcon || false;
    this.showVersion = definition.showVersion || false;
    this.showLanguageSwitcher = definition.showLanguageSwitcher || false;

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

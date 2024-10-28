export class Theme {
  name;
  dark;
  header;
  footer;
  leftPanel;
  rightPanel;
  navigation;

  constructor(name, definition) {
    this.name = name;
    this.dark = definition.dark || false;

    this.header = {};
    this.header.backcolor = definition.header?.backcolor || "primary";
    this.header.textcolor = definition.header?.textcolor || "white";

    this.footer = {};
    this.footer.backcolor = definition.footer?.backcolor || "primary";
    this.footer.textcolor = definition.footer?.textcolor || "white";

    this.leftPanel = {};
    this.leftPanel.backcolor = definition.leftPanel?.backcolor || "white";
    this.leftPanel.textcolor = definition.leftPanel?.textcolor || "primary";

    this.rightPanel = {};
    this.rightPanel.backcolor = definition.rightPanel?.backcolor || "white";
    this.rightPanel.textcolor = definition.rightPanel?.textcolor || "primary";

    this.navigation = {};
    this.navigation.backcolor = definition.navigation?.backcolor || "white";
    this.navigation.textcolor = definition.navigation?.textcolor || "primary";
    this.navigation.iconcolor = definition.navigation?.iconcolor || "primary";
  }
}

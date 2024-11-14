export class Theme {
  name;
  dark;
  global;
  layout;
  navigation;

  constructor(name, definition) {
    this.name = name;
    this.dark = definition.dark || false;

    // Global theme
    this.global = definition.global;

    // Layout theme
    this.layout = {
      header: {},
      footer: {},
      leftPanel: {},
      rightPanel: {},
    };
    this.layout.header.backcolor = definition.layout?.header?.backcolor;
    this.layout.header.textcolor = definition.layout?.header?.textcolor;
    this.layout.footer.backcolor = definition.layout?.footer?.backcolor;
    this.layout.footer.textcolor = definition.layout?.footer?.textcolor;
    this.layout.leftPanel.backcolor = definition.layout?.leftPanel?.backcolor;
    this.layout.leftPanel.textcolor = definition.layout?.leftPanel?.textcolor;
    this.layout.rightPanel.backcolor = definition.layout?.rightPanel?.backcolor;
    this.layout.rightPanel.textcolor = definition.layout?.rightPanel?.textcolor;

    // Navigation theme
    this.navigation = {};
    this.navigation.backcolor = definition.navigation?.backcolor;
    this.navigation.textcolor = definition.navigation?.textcolor;
    this.navigation.iconcolor = definition.navigation?.iconcolor;
  }
}

import { LayoutFooter } from "./layout.footer";
import { LayoutHeader } from "./layout.header";
import { LayoutPanel } from "./layout.panel";

export class Layout {
  name;
  device;
  header;
  leftPanel;
  rightPanel;
  footer;

  constructor(name, device, definition) {
    this.name = name;
    this.device = device;
    if (definition.header) this.header = new LayoutHeader(definition.header);
    if (definition.footer) this.footer = new LayoutFooter(definition.footer);
    if (definition.leftPanel)
      this.leftPanel = new LayoutPanel("left", definition.leftPanel);
    if (definition.rightPanel)
      this.rightPanel = new LayoutPanel("right", definition.rightPanel);
  }
}

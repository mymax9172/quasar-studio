import { LayoutPanel } from "./layout.panel";
import { LayoutBar } from "./layout.bar";

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

    if (definition.header) this.header = new LayoutBar("top", definition.header);
    if (definition.footer) this.footer = new LayoutBar("bottom", definition.footer);
    if (definition.leftPanel) this.leftPanel = new LayoutPanel("left", definition.leftPanel);
    if (definition.rightPanel) this.rightPanel = new LayoutPanel("right", definition.rightPanel);

    // Navigation
    
  }
}

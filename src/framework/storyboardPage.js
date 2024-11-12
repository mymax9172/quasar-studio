export class StoryboardPage {
  name;
  type;
  layout;
  template;
  page;

  constructor(name, definition) {
    this.name = name;
    this.type = definition.type || "custom";
    this.template = definition.template || null;
    this.layout = definition.layout;
    this.page = definition.page;
  }
}

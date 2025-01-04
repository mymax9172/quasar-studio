export class StoryboardPage {
  name;
  title;
  type;
  layout;
  template;
  definition;

  constructor(definition) {
    this.name = definition.name;
    this.title = definition.title;
    this.type = definition.type || "custom";
    this.template = definition.template || null;
    this.layout = definition.layout;
    this.definition = definition.definition;
  }
}

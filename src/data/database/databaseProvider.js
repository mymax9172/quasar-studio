export class DatabaseProvider {
  server;
  name;
  types;

  constructor(name, server) {
    this.name = name;
    this.server = server;
  }

  register(type, serviceProvider) {
    this.types[type] = serviceProvider;
  }

  async getInfo() {}
}

export class ServerProvider {
  config;

  constructor(config) {
    this.config = config;
  }

  async isUp() {}

  async getInfo() {}
  async getDatabaseList() {}
  async exists(name) {}

  async create(name) {}
  async delete(name) {}

  async use(name) {}
}

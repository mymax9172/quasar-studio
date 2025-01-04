export class CollectionProvider {
  type;

  constructor(type) {
    this.type = type;
  }

  async get(id) {}
  async getAll() {}

  async save(entity) {}
  async saveAll(entities) {}

  async find(where, sortBy) {}
  async findOne(where) {}

  async delete(id) {}
}

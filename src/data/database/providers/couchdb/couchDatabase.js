import { DatabaseProvider } from "../../databaseProvider";

export class CouchDBDatabaseProvider extends DatabaseProvider {
  pouchDb;

  constructor(name, server, pouchDb) {
    super(name, server);
    this.pouchDb = pouchDb;
  }

  async getInfo() {
    return await this.pouchDb.info();
  }

  generate(doc) {
    if (!doc.type) throw new Error("Document does not have any type");
    const namespaceName = doc.type.split("/")[0];
    const typeName = doc.type.split("/")[1];

    const entity = this.namespaces[namespaceName].createEntity(typeName);
    entity.import(doc);
    return entity;
  }
}

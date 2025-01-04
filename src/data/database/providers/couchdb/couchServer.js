import PouchDB from "pouchdb";
import PouchdbFind from "pouchdb-find";
import { ServerProvider } from "../../serverProvider.js";
import { CouchDBDatabaseProvider } from "./couchDatabase.js";

export class CouchDBServerProvider extends ServerProvider {
  static {
    PouchDB.plugin(PouchdbFind);
  }

  constructor(config) {
    super(config);
    this.config.token = "Basic " + btoa(this.config.username + ":" + this.config.password);
  }

  async fetchRequest(path, method = "GET", body) {
    const response = await fetch(this.config.url + ":" + this.config.port + path, {
      method: method,
      mode: "cors",
      headers: {
        Accept: "application/json",
        Authorization: this.config.token,
      },
      body: body,
    });
    return await response.json();
  }

  async isUp() {
    try {
      const response = await this.fetchRequest("/_up");
      return response.status === "ok";
    } catch (error) {
      return false;
    }
  }

  async getInfo() {
    return await this.fetchRequest("/");
  }

  async getDatabaseList() {
    return await this.fetchRequest("/_all_dbs");
  }

  async exists(name) {
    const list = await this.getDatabaseList();
    return list.includes(name);
  }

  async create(name) {
    // Naming rules for CouchDB
    let rule = "^[a-z][a-z0-9_$()+/-]*$";
    const regEx = new RegExp(rule);
    if (regEx.test(name)) {
      try {
        // Check if database name is already used
        if (await this.exists(name)) throw new Error("A database with this name already exists");

        // Create the CouchDB database
        const response = await this.fetchRequest("/" + name, "PUT");

        if (response.ok) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "Failed creation",
          };
        }
      } catch (error) {
        return { ok: false, error: error };
      }
    } else {
      return {
        ok: false,
        error: "Naming exception",
      };
    }
  }

  async delete(name) {
    return await this.fetchRequest("/" + name, "DELETE");
  }

  async use(name) {
    // Connect to the database
    const pouchDb = new PouchDB(this.config.url + ":" + this.config.port + "/" + name, {
      auth: {
        username: this.config.username,
        password: this.config.password,
      },
      skip_setup: true,
    });

    return new CouchDBDatabaseProvider(name, this, pouchDb);
  }
}

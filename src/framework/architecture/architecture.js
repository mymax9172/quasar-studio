import { architecture } from "qsconfig";
import { DataSource } from "./dataSource";

const providers = {
  couchdb: {
    server: () => import("src/data/database/providers/couchdb/couchServer"),
  },
};

export class Architecture {
  tenancy;
  datasources;

  constructor() {
    this.tenancy = architecture.tenancy;
    this.datasources = [];

    // Datasources
    if (architecture.datasources) {
      architecture.datasources.forEach((ds) => {
        const dataSource = new DataSource(ds.name, ds.type, ds.provider, ds.config, ds.critical);

        // Check provider
        if (typeof dataSource.provider === "string") {
          const provider = providers[dataSource.provider];
          if (!provider) throw new Error("Provider " + dataSource.provider + " does not exist");
          else dataSource.provider = provider;
        }

        this.datasources.push(dataSource);
      });
    }
  }
}

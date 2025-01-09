import { boot } from "quasar/wrappers";
import { configuration } from "./config";

console.log("Boot file: datasource");

export default boot(async ({ app, urlPath, redirect }) => {
  console.log("Executing boot file: datasource");

  // error_datasourcenotfound

  // Check if datasources are reachable
  for (let i = 0; i < configuration.architecture.datasources.length; i++) {
    const datasource = configuration.architecture.datasources[i];

    // Do not bootstrap non critical datasources
    if (!datasource.startup) continue;

    if (datasource.type === "database") {
      // Retrieve server
      const server = new (await datasource.provider.server()).CouchDBServerProvider(datasource.config);

      // Check if server is up
      if (!(await server?.isUp())) {
        console.log("Server for " + datasource.name + " is not available", urlPath);
        if (!urlPath.startsWith("/#/error")) {
          redirect({ path: "/error_datasourcenotfound" });
          return;
        }
      } else console.log("Server for " + datasource.name + " is available");
    }
  }
});

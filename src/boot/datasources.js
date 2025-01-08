import { boot } from "quasar/wrappers";
import { configuration } from "./config";
import { useSettingsStore } from "src/stores/settings";

console.log("Boot file: datasource");

//console.log(configuration);

// Check if datasources are reachable
// for (let i = 0; i < configuration.architecture.datasources.length; i++) {
//   const datasource = configuration.architecture.datasources[i];

//   // Do not bootstrap non critical datasources
//   if (!datasource.critical) continue;

//   if (datasource.type === "database") {
//     const server = new (await datasource.provider.server()).CouchDBServerProvider(datasource.config);
//     if (!(await server?.isUp())) console.log("Server for " + datasource.name + " is not available");
//     else console.log("Server for " + datasource.name + " is available");
//   }
// }

export default boot(({ app }) => {
  console.log("Executing boot file: datasource");
});

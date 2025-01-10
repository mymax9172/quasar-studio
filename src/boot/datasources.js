import { boot } from "quasar/wrappers";
import { configuration } from "./config";

console.log("Boot file: datasource");

export default boot(async ({ app, urlPath, redirect }) => {
  console.log("Executing boot file: datasource");

  const datasources = {};

  /**
   * Default check server function
   * @param {Datasource} datasource Datasource
   * @param {ServerProvider} server Server provider
   * @returns
   */
  async function defaultCheckServer(datasource, server) {
    if (!(await server?.isUp())) {
      console.error(`Server for ${datasource.name} is not available`);
      return false;
    } else {
      console.log(`Server for ${datasource.name} is available`);
      return true;
    }
  }

  /**
   * Default check dataset function
   * @param {Datasource} datasource Datasource
   * @param {ServerProvider} server Server provider
   * @returns
   */
  async function defaultCheckDataset(datasource, server) {
    if (!server.existDataset(datasource.dataset)) {
      console.error(`Dataset for ${datasource.name} is not available`);
      return false;
    } else {
      console.log(`Dataset for ${datasource.name} is available`);
      return true;
    }
  }

  // Loop all datasources
  for (let i = 0; i < configuration.architecture.datasources.length; i++) {
    const datasource = configuration.architecture.datasources[i];

    // Retrieve server
    const server = new datasource.provider.server(datasource.config);

    // Check if server is available
    let checkServerFunction = defaultCheckServer;
    if (datasource.checkServer) checkServerFunction = datasource.checkServer;
    if (!(await checkServerFunction(datasource, server))) {
      if (!urlPath.startsWith("/#/error")) {
        redirect({ path: "/error_datasourcenotfound" });
        return;
      }
    }

    // Check if dataset exists
    let checkDatasetFunction = defaultCheckDataset;
    if (datasource.checkDataset) checkDatasetFunction = datasource.checkDataset;
    if (!(await checkDatasetFunction(datasource, server))) {
      if (!urlPath.startsWith("/#/error")) {
        redirect({ path: "/error_datasourcenotfound" });
        return;
      }
    }

    // Retrieve dataset
    const dataset = await server.useDataset(datasource.name, datasource.entityFactory);
    datasources[datasource.name] = dataset;
  }

  // Store settings in VueJS
  app.config.globalProperties.$datasources = datasources;
});

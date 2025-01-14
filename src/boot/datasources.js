import { boot } from "quasar/wrappers";
import { configuration } from "./config";

console.log("Boot file: datasources");

export default boot(async ({ app, urlPath, redirect }) => {
  console.log("Executing boot file: datasources");

  if (urlPath.startsWith("/#/error")) return;

  // Connect all datasources adn update configuration obejct
  try {
    await configuration.architecture.dataStrategy.connect();
  } catch (error) {
    //redirect({ path: "/error_datasourcenotfound" });
    console.log("REDIRECT ERROR", error);
  }
});

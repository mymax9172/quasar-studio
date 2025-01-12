import { route } from "quasar/wrappers";
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { configuration } from "src/boot/config";
import VueRouteMiddleware from "vue-route-middleware";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

const rs = configuration.storyboardManager.getVueJSRoutes(configuration);
const routeList = rs.concat(routes);

import titleMiddleware from "./middlewares/title.middleware";

const middlewares = {
  title: titleMiddleware,
};

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER ? createMemoryHistory : process.env.VUE_ROUTER_MODE === "history" ? createWebHistory : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: routeList,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE),
  });

  // Navigation guards
  Router.beforeEach(VueRouteMiddleware(middlewares));

  //console.log("** Defined routes", Router.options.routes);
  return Router;
});

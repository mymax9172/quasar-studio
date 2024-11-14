import { Route } from "./route";

export class RouteManager {
  routes;

  constructor() {
    this.home = "";
    this.routes = [];
  }

  async initialize(configuration) {
    configuration.storyboardManager.pages.forEach((storyboardPage) => {
      const route = new Route();
      route.page = storyboardPage;
      route.layout =
        storyboardPage.layout || configuration.layoutManager.default;
      route.type = storyboardPage.type;
      switch (storyboardPage.type) {
        case "custom":
          if (configuration.storyboardManager.home === storyboardPage) {
            route.url = "/";
          } else {
            route.url =
              storyboardPage.definition.url ||
              "/" + storyboardPage.name.toLowerCase();
          }

          break;

        default:
          break;
      }

      this.routes.push(route);
    });
  }

  getRoutes() {
    const routes = [];

    this.routes.forEach((route) => {
      let item = {
        path: route.url,
        component: () => import("layouts/layout-template.vue"),
        meta: {
          page: route.page,
        },
        children: [
          { path: "", component: () => import("src/pages/page-template.vue") },
        ],
      };
      if (route.layout) item.meta.layout = route.layout;

      routes.push(item);
    });

    return routes;
  }

  findURL(pageName) {
    const route = this.routes.find((e) => {
      return e.page.name === pageName;
    });
    return route?.url;
  }
}

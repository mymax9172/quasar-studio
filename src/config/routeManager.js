import { storyboard } from "app/framework/config/storyboard.mjs";
import { Route } from "./route";

export class RouteManager {
  home;
  routes;

  constructor() {
    this.home = "";
    this.routes = [];
  }

  async initialize(configuration) {
    for (let i = 0; i < storyboard.pages.length; i++) {
      const page = storyboard.pages[i];
      const storyboardPage = configuration.storyboardManager.pages.find(
        (e) => e.name === page.name
      );

      const route = new Route();
      route.page = storyboardPage.page;
      route.layout = storyboardPage.layout;
      switch (storyboardPage.type) {
        case "custom":
          route.url = page.url;

          break;

        default:
          break;
      }

      this.routes.push(route);
    }
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
}

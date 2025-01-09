const routes = [
  {
    path: "/error_datasourcenotfound",
    component: () => import("pages/ErrorDatasourceNotFound.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

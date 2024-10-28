const routes = [
  {
    path: "/",
    component: () => import("layouts/layout-template.vue"),
    children: [{ path: "", component: () => import("src/pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

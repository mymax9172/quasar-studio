export const itemManager = {
  getItem(value) {
    switch (value) {
      case "qs-btn-home":
        return () => import("src/components/items/qs-btn-home.vue");
      case "qs-btn-back":
        return () => import("src/components/items/qs-btn-back.vue");
      case "qs-lang-switcher":
        return () => import("src/components/items/qs-lang-switcher.vue");
      case "qs-title":
        return () => import("src/components/items/qs-title.vue");
      case "qs-version":
        return () => import("src/components/items/qs-version.vue");
      default:
        return null;
    }
  },
};

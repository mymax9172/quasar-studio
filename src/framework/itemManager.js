export class ItemManager {
  getComponent(value) {
    switch (value) {
      case "qs-btn-home":
        return () => import("src/components/public/qs-btn-home.vue");
      case "qs-btn-back":
        return () => import("src/components/public/qs-btn-back.vue");
      case "qs-lang-switcher":
        return () => import("src/components/public/qs-lang-switcher.vue");
      case "qs-title":
        return () => import("src/components/public/qs-title.vue");
      case "qs-version":
        return () => import("src/components/public/qs-version.vue");
      case "qs-navigation":
        return () => import("src/components/public/qs-navigation.vue");
      default:
        return () => import("qsconfig/src/components/" + value + ".vue");
    }
  }

  loadItems(container, items) {
    items.forEach((item) => {
      const slotItem = {
        component: null,
        visible: true,
        props: null,
      };

      if (typeof item != "object") {
        slotItem.component = this.getComponent(item);
      } else {
        slotItem.component = this.getComponent(item.component);
        slotItem.visible = item.visible || true;
        slotItem.props = item.props || null;
      }

      if (slotItem.component) container.push(slotItem);
    });
  }
}

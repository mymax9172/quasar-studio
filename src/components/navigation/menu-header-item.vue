<template>
  <template v-if="menu">
    <template v-if="isSeparator">
      <q-separator />
    </template>

    <template v-else>
      <template v-if="!hasChildren">
        <q-route-tab
          clickable
          :name="menu.name"
          :label="$t(menu.title)"
          :icon="menu.icon"
          v-close-popup
        >
          <q-icon class="q-pl-md" />
          <q-tooltip v-if="menu.caption">{{ $t(menu.caption) }}</q-tooltip>
        </q-route-tab>
      </template>

      <template v-else>
        <q-tab :name="menu.name" :label="menu.title" :icon="menu.icon">
          <q-icon v-if="level > 0" class="q-pl-md" :name="subMenuIcon" />
          <q-menu dense :anchor="level === 0 ? 'bottom left' : 'top end'">
            <menu-header-item
              v-for="item in menu.items"
              :key="item.title"
              :menu="item"
              :level="indentation + 1"
              ref="menus"
            />
          </q-menu>
          <q-tooltip v-if="menu.caption">{{ menu.caption }}</q-tooltip>
        </q-tab>
      </template>
    </template>
  </template>
</template>

<script>
import { chain } from "src/helpers/chain";

export default {
  // Name of the component
  name: "MenuHeaderItem",

  // Properties
  props: {
    menu: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    group: String,
  },

  // Data
  data() {
    return {
      expanded: false, // true if menu is expanded
      indentation: this.level || 0, // level of indentation for sub menus
      icons: this.$configuration.iconLibrary,
    };
  },

  // Setup the component
  created() {},

  // Computed properties
  computed: {
    isSeparator() {
      return this.menu.separator;
    },

    // Return if this menu has sub menu items
    hasChildren() {
      return (
        this.menu &&
        this.menu.hasOwnProperty("items") &&
        this.menu.items.length > 0
      );
    },

    // Return if the menu has an icon
    hasIcon() {
      return (
        this.menu && this.menu.hasOwnProperty("icon") && this.menu.icon != null
      );
    },

    subMenuIcon() {
      if (this.level === 0) return;
      else return "keyboard_arrow_right";
    },

    // Return if the menu has a caption
    hasCaption() {
      return (
        this.menu &&
        this.menu.hasOwnProperty("caption") &&
        this.menu.caption != null
      );
    },

    menuClass() {
      const theme = this.$configuration.themeManager.getCurrentTheme();

      // Background
      const bg =
        "bg-" +
        chain("white", theme?.navigation.backcolor, this.menu.style?.backcolor);

      // Textcolor
      const text =
        "text-" +
        chain(
          "primary",
          theme?.navigation.textcolor,
          this.menu.style?.textcolor
        );

      console.log(bg);
      return bg + " " + text;
    },

    colorIcon() {
      const theme = this.$configuration.themeManager.getCurrentTheme();

      return chain(
        "primary",
        theme?.navigation.iconcolor,
        this.menu.style?.iconcolor
      );
    },
  },

  // Watched properties
  watch: {},

  // Methods
  methods: {
    // Expand all menu items
    expand() {
      this.expanded = true;
      if (this.$refs.menus) this.$refs.menus.forEach((menu) => menu.expand());
    },

    // Collapse all menu item
    collapse() {
      this.expanded = false;
      if (this.$refs.menus) this.$refs.menus.forEach((menu) => menu.collapse());
    },
  },
};
</script>

<style></style>

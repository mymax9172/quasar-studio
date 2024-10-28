<template>
  <template v-if="menu">
    <template v-if="isSeparator">
      <q-separator />
    </template>
    <template v-else>
      <template v-if="!hasChildren">
        <q-item clickable :to="menu.to" :class="menuClass">
          <q-item-section v-if="menu.icon" avatar>
            <q-icon :name="icons[menu.icon]" size="xs" :color="colorIcon" />
          </q-item-section>
          <q-item-section>
            <q-item-label> {{ $t(menu.title) }}</q-item-label>
            <q-item-label caption v-if="menu.caption">
              {{ $t(menu.caption) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <template v-else>
        <q-expansion-item
          v-model="expanded"
          :to="menu.to"
          :group="group"
          :class="menuClass"
        >
          <template v-slot:header>
            <q-item-section v-if="hasIcon" avatar>
              <q-icon :name="icons[menu.icon]" size="xs" :color="colorIcon" />
            </q-item-section>
            <q-item-section :class="menuClass">
              <q-item-label>
                <b>{{ menu.title }}</b>
              </q-item-label>
              <q-item-label caption v-if="hasCaption">
                <b>{{ menu.caption }}</b>
              </q-item-label>
            </q-item-section>
          </template>

          <div class="q-pl-sm">
            <q-list dense>
              <menu-item
                v-for="item in menu.items"
                :key="item.title"
                :menu="item"
                :level="indentation + 1"
                ref="menus"
              />
            </q-list>
          </div>
        </q-expansion-item>
      </template>
    </template>
  </template>
</template>

<script>
import { chain } from "src/helpers/chain";

export default {
  // Name of the component
  name: "MenuItem",

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

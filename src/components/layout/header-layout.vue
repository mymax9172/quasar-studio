<template>
  <q-header
    v-if="layout.header"
    :elevated="layout.header.style.shadow"
    :class="headerClass"
  >
    <!-- Main toolbar -->
    <q-toolbar>
      <div class="row items-center no-wrap" style="width: 100%">
        <!-- Left slot -->
        <div class="col-3 q-pr-md">
          <q-btn
            v-if="layout.leftPanel"
            class="q-mr-md"
            flat
            dense
            rounded
            :icon="icons.bars"
            size="sm"
            @click="$emit('click', '$-left-panel')"
          />
          <q-btn
            v-if="layout.header.showHomeIcon"
            class="q-mr-sm"
            flat
            dense
            rounded
            :icon="icons.home"
            size="sm"
          />
          <q-btn
            v-if="layout.header.showBackIcon"
            class="q-pr-sm"
            flat
            dense
            rounded
            :icon="icons.back"
            size="sm"
          />

          <slot
            v-if="!layout.header.noLeftSlot"
            name="left"
            :header="layout.header"
          >
          </slot>
        </div>

        <!-- Middle slot -->
        <div class="col q-px-md flex flex-center">
          <slot
            v-if="!layout.header.noMiddleSlot"
            name="middle"
            :header="layout.header"
          >
            <span class="text-bold text-h6">{{ title }}</span>
          </slot>
        </div>

        <!-- Right slot -->
        <div class="col-3 q-ml-md flex justify-end items-center">
          <div class="q-px-sm">
            <slot
              v-if="!layout.header.noRightSlot"
              name="right"
              :header="layout.header"
            >
            </slot>
          </div>

          <div v-if="layout.header.showVersion">
            {{ $t("version") }} {{ version }}
          </div>

          <div v-if="layout.header.showLanguageSwitcher">
            <qs-language-switcher />
          </div>

          <q-btn
            v-if="layout.rightPanel"
            class="q-ml-md"
            flat
            dense
            rounded
            :icon="icons.bars"
            size="sm"
            @click="$emit('click', '$-right-panel')"
          />
        </div>
      </div>
    </q-toolbar>

    <!-- Navigation toolbar -->
    <q-toolbar inset v-if="showNavigation">
      <q-tabs dense inline-label no-caps>
        <menu-header-item
          v-for="item in menuItems"
          :key="item.title"
          :menu="item"
        />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
import { chain } from "src/helpers/chain";
import MenuHeaderItem from "../navigation/menu-header-item.vue";
import QsLanguageSwitcher from "../language/qs-language-switcher.vue";

export default {
  name: "HeaderLayout",

  emits: ["click"],

  components: { MenuHeaderItem, QsLanguageSwitcher },

  props: {
    layout: Object,
  },

  data() {
    return {
      icons: this.$configuration.iconLibrary,
    };
  },

  computed: {
    title() {
      return chain(
        this.$configuration.application.title,
        this.layout.header.title
      );
    },

    version() {
      return this.$configuration.application.version.number;
    },

    headerClass() {
      const theme = this.$configuration.themeManager.getCurrentTheme();

      // Background
      const bg =
        "bg-" +
        chain(
          "primary",
          theme?.header?.backcolor,
          this.layout.header?.style?.backcolor
        );

      // Textcolor
      const text =
        "text-" +
        chain(
          "white",
          theme?.header?.textcolor,
          this.layout.header?.style?.textcolor
        );

      return bg + " " + text;
    },

    showNavigation() {
      return this.$configuration.navigation.position === "header";
    },

    menuItems() {
      return this.$configuration.navigation.items;
    },
  },
};
</script>

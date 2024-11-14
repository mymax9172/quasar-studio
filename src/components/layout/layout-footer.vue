<template>
  <q-footer v-if="layout.footer" :elevated="layout.footer.style.shadow" class="qstudio-layout-footer">
    <!-- Main toolbar -->
    <q-toolbar>
      <div class="row items-center no-wrap" style="width: 100%">
        <!-- Left slot -->
        <div class="col-3 q-pr-md">
          <!-- <q-btn v-if="layout.leftPanel" class="q-mr-md" flat dense rounded :icon="icons['qs-bars']" size="sm" @click="$emit('click', '$-left-panel')" /> -->

          <template v-if="layout.footer.left.items">
            <component :is="getComponent(item)" v-for="item in layout.footer.left.items" :key="item" />
          </template>
        </div>

        <!-- Middle slot -->
        <div class="col q-px-md flex flex-center">
          <template v-if="layout.footer.middle.items">
            <component :is="getComponent(item)" v-for="item in layout.footer.middle.items" :key="item" />
          </template>
        </div>

        <!-- Right slot -->
        <div class="col-3 q-ml-md flex justify-end items-center">
          <template v-if="layout.footer.right.items">
            <component :is="getComponent(item)" v-for="item in layout.footer.right.items" :key="item" />
          </template>

          <!-- <q-btn v-if="layout.rightPanel" class="q-ml-md" flat dense rounded :icon="icons['qs-bars']" size="sm" @click="$emit('click', '$-right-panel')" /> -->
        </div>
      </div>
    </q-toolbar>

    <!-- Navigation toolbar -->
    <!-- <q-toolbar inset v-if="showNavigation">
      <q-tabs dense inline-label no-caps>
        <menu-header-item v-for="item in menuItems" :key="item.title" :menu="item" />
      </q-tabs>
    </q-toolbar> -->
  </q-footer>
</template>

<script>
// import MenuHeaderItem from "../navigation/menu-header-item.vue";
import MetaMixin from "src/mixins/meta-mixin.vue";
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "LayoutFooter",

  emits: ["click"],

  //components: { MenuHeaderItem, QsLanguageSwitcher },

  props: {
    layout: Object,
  },

  mixins: [MetaMixin],

  data() {
    return {
      icons: this.$configuration.iconLibrary,
    };
  },

  computed: {
    showNavigation() {
      return this.$configuration.navigation.position === "header";
    },

    menuItems() {
      return this.$configuration.navigation.items;
    },
  },

  methods: {
    getComponent(fn) {
      return markRaw(defineAsyncComponent(fn));
    },
  },
};
</script>

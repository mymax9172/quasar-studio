<template>
  <q-footer v-if="layout.footer" :elevated="layout.footer.style.shadow" class="qstudio-layout-footer">
    <!-- Main toolbar -->
    <q-toolbar>
      <div class="row items-center no-wrap" style="width: 100%">
        <!-- Left slot -->
        <div class="col-3 q-pr-md">
          <!-- <q-btn v-if="layout.leftPanel" class="q-mr-md" flat dense rounded :icon="icons['qs-bars']" size="sm" @click="$emit('click', '$-left-panel')" /> -->
          <slot-handler :slot-items="layout.footer.left.items" />
        </div>

        <!-- Middle slot -->
        <div class="col q-px-md flex flex-center">
          <slot-handler :slot-items="layout.footer.middle.items" />
        </div>

        <!-- Right slot -->
        <div class="col-3 q-ml-md flex justify-end items-center">
          <slot-handler :slot-items="layout.footer.right.items" />
          <!-- <q-btn v-if="layout.rightPanel" class="q-ml-md" flat dense rounded :icon="icons['qs-bars']" size="sm" @click="$emit('click', '$-right-panel')" /> -->
        </div>
      </div>
    </q-toolbar>

    <!-- Navigation toolbar -->
    <q-toolbar inset v-if="showNavigation">
      <q-space />
      <qs-navigation v-if="showNavigation" horizontal />
      <q-space />
    </q-toolbar>
  </q-footer>
</template>

<script>
import MetaMixin from "src/mixins/meta-mixin.vue";
import QsNavigation from "../public/qs-navigation.vue";
import SlotHandler from "../helpers/slotHandler.vue";

import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "LayoutFooter",

  emits: ["click"],

  components: {
    SlotHandler,
    QsNavigation,
  },

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
      return this.$configuration.navigation.position === "footer";
    },

    menuItems() {
      return this.$configuration.navigation.items;
    },
  },

  methods: {
    getComponent(slotItem) {
      return markRaw(defineAsyncComponent(slotItem.component));
    },
  },
};
</script>

<template>
  <q-header v-if="layout.header" :elevated="layout.header.style.shadow" class="qstudio-layout-header">
    <!-- Main toolbar -->
    <q-toolbar>
      <div class="row items-center no-wrap" style="width: 100%">
        <!-- Left slot -->
        <div class="col-3 q-pr-md">
          <q-btn v-if="layout.leftPanel" class="q-mr-md" flat dense rounded :icon="panelIcon.name" size="sm" @click="$emit('click', '$-left-panel')" />
          <slot-handler :slot-items="layout.header.left.items" />
        </div>

        <!-- Middle slot -->
        <div class="col q-px-md flex flex-center">
          <slot-handler :slot-items="layout.header.middle.items" />
        </div>

        <!-- Right slot -->
        <div class="col-3 q-ml-md flex justify-end items-center">
          <slot-handler :slot-items="layout.header.right.items" />
          <q-btn v-if="layout.rightPanel" class="q-ml-md" flat dense rounded :icon="panelIcon.name" size="sm" @click="$emit('click', '$-right-panel')" />
        </div>
      </div>
    </q-toolbar>

    <!-- Navigation toolbar -->
    <q-toolbar inset v-if="showNavigation">
      <q-space />
      <qs-navigation v-if="showNavigation" horizontal />
      <q-space />
    </q-toolbar>
  </q-header>
</template>

<script>
import SlotHandler from "../helpers/slotHandler.vue";
import QsNavigation from "../public/qs-navigation.vue";
import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "LayoutHeader",

  emits: ["click"],

  components: { SlotHandler, QsNavigation },

  props: {
    layout: Object,
  },

  mixins: [MetaMixin],

  computed: {
    showNavigation() {
      return this.$configuration.navigation.position === "header";
    },

    panelIcon() {
      return this.$configuration.iconLibrary.get("qs-panel");
    },
  },
};
</script>

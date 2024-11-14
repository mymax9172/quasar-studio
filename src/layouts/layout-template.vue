<template>
  <q-layout v-if="layout" view="hHh lpR fFf">
    <!-- Header -->
    <layout-header :layout="layout" @click="onClick" />

    <!-- Left Panel -->
    <panel-layout v-if="layout.leftPanel" :layout="layout" side="left" v-model="leftPanelVisible">
      <!-- Top slot -->
      <template v-if="layout.leftPanel?.slots.top" v-slot:top="props">
        <component :is="getComponent(layout.leftPanel.slots.top)" :props="props" />
      </template>

      <!-- Middle slot -->
      <template v-if="layout.leftPanel?.slots.middle" v-slot:middle="props">
        <component :is="getComponent(layout.leftPanel.slots.middle)" :props="props" />
      </template>

      <!-- Bottom slot -->
      <template v-if="layout.leftPanel?.slots.bottom" v-slot:bottom="props">
        <component :is="getComponent(layout.leftPanel.slots.bottom)" :props="props" />
      </template>
    </panel-layout>

    <!-- Right Panel -->
    <panel-layout v-if="layout.rightPanel" :layout="layout" side="right" v-model="rightPanelVisible">
      <!-- Top slot -->
      <template v-if="layout.rightPanel?.slots.top" v-slot:top="props">
        <component :is="getComponent(layout.rightPanel.slots.top)" :props="props" />
      </template>

      <!-- Middle slot -->
      <template v-if="layout.rightPanel?.slots.middle" v-slot:middle="props">
        <component :is="getComponent(layout.rightPanel.slots.middle)" :props="props" />
      </template>

      <!-- Bottom slot -->
      <template v-if="layout.rightPanel?.slots.bottom" v-slot:bottom="props">
        <component :is="getComponent(layout.rightPanel.slots.bottom)" :props="props" />
      </template>
    </panel-layout>

    <!-- Footer -->
    <layout-footer :layout="layout" @click="onClick" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LayoutHeader from "src/components/layout/layout-header.vue";
import LayoutFooter from "src/components/layout/layout-footer.vue";

// import FooterLayout from "src/components/layout/footer-layout.vue";
import PanelLayout from "src/components/layout/panel-layout.vue";
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "LayoutTemplate",

  components: {
    LayoutHeader,
    LayoutFooter,
    // FooterLayout,
    PanelLayout,
  },

  data() {
    return {
      layout: null,
      leftPanelVisible: false,
      rightPanelVisible: false,
    };
  },

  created() {
    // Retrieve the current layout to be use (search in the route meta if any specific layout)
    this.layout = this.$configuration.layoutManager.getLayout(this.$route.meta.layout);
  },

  methods: {
    getComponent(fn) {
      return markRaw(defineAsyncComponent(fn));
    },

    onClick(name, ...args) {
      switch (name) {
        case "$-left-panel":
          this.leftPanelVisible = !this.leftPanelVisible;
          break;

        case "$-right-panel":
          this.rightPanelVisible = !this.rightPanelVisible;
          break;

        default:
          break;
      }
    },
  },
};
</script>

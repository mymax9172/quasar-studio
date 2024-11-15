<template>
  <q-layout v-if="layout" view="hHh lpR fFf">
    <!-- Header -->
    <layout-header :layout="layout" @click="onClick" />

    <!-- Left Panel -->
    <layout-panel v-if="layout.leftPanel" :layout="layout" side="left" v-model="leftPanelVisible" />

    <!-- Right Panel -->
    <layout-panel v-if="layout.rightPanel" :layout="layout" side="right" v-model="rightPanelVisible" />

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
import LayoutPanel from "src/components/layout/layout-panel.vue";
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "LayoutTemplate",

  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutPanel,
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

<template>
  <q-layout v-if="layout" view="hHh lpR fFf">
    <!-- Header -->
    <header-layout :layout="layout" @click="onHeaderClick">
      <!-- Left slot -->
      <template v-if="layout.header?.slots?.left" v-slot:left="props">
        <component
          :is="getComponent(layout.header.slots.left)"
          :props="props"
        />
      </template>

      <!-- Middle slot -->
      <template v-if="layout.header?.slots?.middle" v-slot:middle="props">
        <component
          :is="getComponent(layout.header.slots.middle)"
          :props="props"
        />
      </template>

      <!-- Right slot -->
      <template v-if="layout.header?.slots?.right" v-slot:right="props">
        <component
          :is="getComponent(layout.header.slots.right)"
          :props="props"
        />
      </template>
    </header-layout>

    <!-- Left Panel -->
    <panel-layout
      v-if="layout.leftPanel"
      :layout="layout"
      side="left"
      v-model="leftPanelVisible"
    >
      <!-- Top slot -->
      <template v-if="layout.leftPanel?.slots.top" v-slot:top="props">
        <component
          :is="getComponent(layout.leftPanel.slots.top)"
          :props="props"
        />
      </template>

      <!-- Middle slot -->
      <template v-if="layout.leftPanel?.slots.middle" v-slot:middle="props">
        <component
          :is="getComponent(layout.leftPanel.slots.middle)"
          :props="props"
        />
      </template>

      <!-- Bottom slot -->
      <template v-if="layout.leftPanel?.slots.bottom" v-slot:bottom="props">
        <component
          :is="getComponent(layout.leftPanel.slots.bottom)"
          :props="props"
        />
      </template>
    </panel-layout>

    <!-- Right Panel -->
    <panel-layout
      v-if="layout.rightPanel"
      :layout="layout"
      side="right"
      v-model="rightPanelVisible"
    >
      <!-- Top slot -->
      <template v-if="layout.rightPanel?.slots.top" v-slot:top="props">
        <component
          :is="getComponent(layout.rightPanel.slots.top)"
          :props="props"
        />
      </template>

      <!-- Middle slot -->
      <template v-if="layout.rightPanel?.slots.middle" v-slot:middle="props">
        <component
          :is="getComponent(layout.rightPanel.slots.middle)"
          :props="props"
        />
      </template>

      <!-- Bottom slot -->
      <template v-if="layout.rightPanel?.slots.bottom" v-slot:bottom="props">
        <component
          :is="getComponent(layout.rightPanel.slots.bottom)"
          :props="props"
        />
      </template>
    </panel-layout>

    <!-- Footer -->
    <footer-layout :layout="layout">
      <!-- Left slot -->
      <template v-if="layout.footer?.slots?.left" v-slot:left="props">
        <component
          :is="getComponent(layout.footer.slots.left)"
          :props="props"
        />
      </template>

      <!-- Center slot -->
      <template v-if="layout.footer?.slots?.middle" v-slot:middle="props">
        <component
          :is="getComponent(layout.footer.slots.middle)"
          :props="props"
        />
      </template>

      <!-- Right slot -->
      <template v-if="layout.footer?.slots?.right" v-slot:right="props">
        <component
          :is="getComponent(layout.footer.slots.right)"
          :props="props"
        />
      </template>
    </footer-layout>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderLayout from "src/components/layout/header-layout.vue";
import FooterLayout from "src/components/layout/footer-layout.vue";
import PanelLayout from "src/components/layout/panel-layout.vue";
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "LayoutTemplate",

  components: {
    HeaderLayout,
    FooterLayout,
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
    this.layout = this.$configuration.layoutManager.getLayout(
      this.$route.meta.layout
    );
  },

  methods: {
    getComponent(fn) {
      return markRaw(defineAsyncComponent(fn));
    },

    onHeaderClick(name, ...args) {
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

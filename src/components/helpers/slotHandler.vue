<template>
  <template v-if="slotItems && slotItems.length > 0">
    <component :is="getComponent(slotItem)" v-bind="slotItem.props" v-for="slotItem in slotItems" :key="slotItem" />
  </template>
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";

export default {
  name: "SlotHandler",

  props: {
    slotItems: Array,
  },

  methods: {
    getComponent(slotItem) {
      if (typeof slotItem === "object") {
        if (typeof slotItem.component === "string") {
          return slotItem.component;
        } else {
          return markRaw(defineAsyncComponent(slotItem.component));
        }
      } else {
        if (typeof slotItem === "string") {
          return slotItem;
        } else {
          return markRaw(defineAsyncComponent(slotItem));
        }
      }
    },
  },
};
</script>

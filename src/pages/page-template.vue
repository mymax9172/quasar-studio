<template>
  <q-page :class="$route.meta.page.definition.class">
    <component :is="getComponent()" />
  </q-page>
</template>

<script>
import { defineAsyncComponent, markRaw } from "vue";
import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "TemplatePage",

  mixins: [MetaMixin],

  created() {},

  data() {
    return {};
  },

  methods: {
    getComponent() {
      const component = this.storyboardPage.definition.component;

      if (!component) return null;

      if (typeof component === "string") {
        let fn = () => import("qsconfig/src/pages/" + this.storyboardPage.definition.component + ".vue");
        return markRaw(defineAsyncComponent(fn));
      } else return markRaw(defineAsyncComponent(component));

      //return markRaw(defineAsyncComponent(this.storyboardPage.definition.component));
    },
  },
};
</script>

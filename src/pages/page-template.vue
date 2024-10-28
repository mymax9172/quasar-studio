<template>
  <q-page :class="$route.meta.page.class">
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
      return markRaw(defineAsyncComponent(this.$route.meta.page.component));
    },
  },
};
</script>

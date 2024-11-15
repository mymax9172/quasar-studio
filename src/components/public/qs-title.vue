<template>
  <span class="text-bold text-h6">{{ title }}</span>
</template>

<script>
import { chain } from "src/helpers/chain";
import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "QsTitle",
  mixins: [MetaMixin],

  computed: {
    title() {
      return chain(this.$configuration.application.title, this.storyboardPage.title);
    },
  },
};
</script>

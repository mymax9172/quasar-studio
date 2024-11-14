<template>
  <span>{{ $t("qs-version") }} {{ version }}</span>
</template>

<script>
import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "QsVersion",
  mixins: [MetaMixin],

  computed: {
    version() {
      return this.$configuration.application.version.number;
    },
  },
};
</script>

<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <div>{{ name }}</div>
  </q-page>
</template>

<script>
import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "IndexPage",
  mixins: [MetaMixin],

  created() {},
  data() {
    return {
      name: this.$configuration.layoutManager.currentDevice,
    };
  },
};
</script>

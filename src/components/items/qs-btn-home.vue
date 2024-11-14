<template>
  <q-btn class="q-mr-sm" flat dense rounded :icon="icons['qs-home']" size="sm" />
</template>

<script>
export default {
  name: "QsBtnHome",

  data() {
    return {
      icons: this.$configuration.iconLibrary,
    };
  },
};
</script>

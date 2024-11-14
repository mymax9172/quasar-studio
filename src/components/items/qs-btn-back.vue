<template>
  <q-btn class="q-mr-sm" flat dense rounded :icon="icons['qs-back']" size="sm" />
</template>

<script>
export default {
  name: "QsBtnBack",

  data() {
    return {
      icons: this.$configuration.iconLibrary,
    };
  },
};
</script>

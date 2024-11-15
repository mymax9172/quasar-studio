<template>
  <q-btn class="q-mr-sm" flat dense rounded :icon="homeIcon.name" size="sm" to="/" />
</template>

<script>
export default {
  name: "QsBtnHome",

  computed: {
    homeIcon() {
      return this.$configuration.iconLibrary.get("qs-home");
    },
  },
};
</script>

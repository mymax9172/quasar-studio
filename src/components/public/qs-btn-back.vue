<template>
  <q-btn class="q-mr-sm" flat dense rounded :icon="backIcon.name" size="sm" @click="$router.go(-1)" />
</template>

<script>
export default {
  name: "QsBtnBack",

  computed: {
    backIcon() {
      return this.$configuration.iconLibrary.get("qs-back");
    },
  },
};
</script>

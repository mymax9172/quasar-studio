<template>
  <template v-if="menu && menu.items.length === 0">
    <q-tabs>
      <q-route-tab no-caps clickable :name="menu.name" :label="$t(menu.title)" :to="menu.getURL()" v-close-popup>
        <q-tooltip v-if="menu.caption">{{ $t(menu.caption) }}</q-tooltip>
      </q-route-tab>
    </q-tabs>
  </template>
</template>

<script>
export default {
  name: "MenuHeaderItem",

  props: {
    menu: {
      type: Object,
      required: true,
    },
  },

  // Data
  data() {
    return {
      icons: this.$configuration.iconLibrary,
    };
  },
};
</script>

<style></style>

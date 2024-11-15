<template>
  <template v-if="horizontal">
    <q-tabs dense inline-label no-caps>
      <menu-header-item v-for="item in menuItems" :key="item.title" :menu="item" />
    </q-tabs>
  </template>
  <template v-else>
    <menu-item v-for="item in menuItems" :key="item.title" :menu="item" />
  </template>
</template>

<script>
import MenuItem from "src/components/navigation/menu-item.vue";
import MenuHeaderItem from "../navigation/menu-header-item.vue";

export default {
  name: "QsNavigation",

  props: {
    horizontal: Boolean,
  },

  components: { MenuItem, MenuHeaderItem },

  data() {
    return {};
  },

  computed: {
    menuItems() {
      return this.$configuration.navigation.items;
    },
  },
};
</script>

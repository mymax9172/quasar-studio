<template>
  <q-drawer
    v-model="visible"
    show-if-above
    :side="side"
    bordered
    :class="panelClass"
    :mini="panel.mini.enabled && miniState"
    :mini-width="panel.mini.width"
    :width="panel.width"
    @mouseenter="miniState = false"
    @mouseleave="miniState = true"
  >
    <div class="column q-gutter-sm" style="height: 100%">
      <!-- Top slot -->
      <div
        v-if="!panel.noTopSlot && $slots.top"
        class="col-2 q-ma-md flex flex-center"
      >
        <slot name="top" :panel="panel"></slot>
      </div>

      <!-- Middle slot -->
      <div class="col q-ma-md">
        <slot v-if="!panel.noMiddleSlot" name="middle" :panel="panel">
          <!-- Navigation menu -->
          <q-list v-if="showNavigation">
            <menu-item
              v-for="item in menuItems"
              :key="item.title"
              :menu="item"
            />
          </q-list>
        </slot>
      </div>

      <!-- Bottom slot -->
      <div
        v-if="!panel.noBottomSlot && $slots.bottom"
        class="col-2 q-ma-md flex items-end justify-center"
      >
        <slot name="bottom" :panel="panel"> </slot>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { chain } from "src/helpers/chain";
import MenuItem from "../navigation/menu-item.vue";

export default {
  name: "PanelLayout",

  emits: ["click", "update:modelValue"],

  components: {
    //EssentialLink,
    MenuItem,
  },

  props: {
    layout: Object,
    side: String,
    modelValue: Boolean,
  },

  data() {
    return {
      miniState: false,
    };
  },

  computed: {
    panel() {
      if (this.side === "left") return this.layout.leftPanel;
      else return this.layout.rightPanel;
    },

    showNavigation() {
      return this.$configuration.navigation.position === "panel";
    },

    menuItems() {
      return this.$configuration.navigation.items;
    },

    visible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },

    panelClass() {
      const theme = this.$configuration.themeManager.getCurrentTheme();

      // Background
      const bg =
        "bg-" +
        chain(
          "white",
          theme ? theme[this.side + "Panel"].backcolor : null,
          this.layout[this.side + "Panel"]?.style?.backcolor
        );

      // Textcolor
      const text =
        "text-" +
        chain(
          "primary",
          theme ? theme[this.side + "Panel"].textcolor : null,
          this.layout[this.side + "Panel"]?.style?.textcolor
        );

      return bg + " " + text;
    },
  },
};
</script>

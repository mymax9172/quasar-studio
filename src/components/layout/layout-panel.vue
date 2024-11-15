<template>
  <!--  Drawer -->
  <q-drawer
    v-model="visible"
    show-if-above
    :side="side"
    bordered
    :class="panelClass"
    :mini="panelLayout.style.mini && miniState"
    :mini-width="panelLayout.mini?.width"
    :width="panelLayout.style.width"
    @mouseenter="miniState = false"
    @mouseleave="miniState = true"
  >
    <div class="column q-gutter-sm" style="height: 100%">
      <!-- Top slot -->
      <div v-if="panelLayout.top" class="col-2 q-ma-md flex flex-center">
        <slot-handler :slot-items="panelLayout.top.items" />
      </div>

      <!-- Middle slot -->
      <div class="q-ma-md">
        <qs-navigation v-if="showNavigation" />
        <slot-handler :slot-items="panelLayout.middle.items" />
      </div>

      <!-- Bottom slot -->
      <div v-if="panelLayout.bottom" class="col-2 q-ma-md flex items-end justify-center">
        <slot-handler :slot-items="panelLayout.bottom.items" />
      </div>
    </div>
  </q-drawer>
</template>

<script>
import SlotHandler from "../helpers/slotHandler.vue";
import QsNavigation from "../public/qs-navigation.vue";

import MetaMixin from "src/mixins/meta-mixin.vue";

export default {
  name: "LayoutPanel",

  emits: ["click", "update:modelValue"],

  mixins: [MetaMixin],

  components: {
    SlotHandler,
    QsNavigation,
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
    panelLayout() {
      if (this.side === "left") return this.layout.leftPanel;
      else return this.layout.rightPanel;
    },

    showNavigation() {
      return this.$configuration.navigation.position === this.side;
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
      if (this.side === "left") return "qstudio-layout-leftpanel";
      else return "qstudio-layout-rightpanel";
    },
  },
};
</script>

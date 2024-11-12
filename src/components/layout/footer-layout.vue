<template>
  <q-footer
    v-if="layout.footer"
    :elevated="layout.footer.style?.shadow"
    :class="footerClass"
  >
    <!-- Main toolbar -->
    <q-toolbar>
      <div class="row items-center no-wrap" style="width: 100vw">
        <!-- Left slot -->
        <div class="col-3 q-pr-md">
          <slot
            v-if="!layout.footer.noLeftSlot"
            name="left"
            :footer="layout.footer"
          >
          </slot>
        </div>

        <!-- Center slot -->
        <div class="col q-px-md flex flex-center">
          <slot name="center" :footer="layout.footer"> </slot>
        </div>

        <!-- Right slot -->
        <div class="col-3 q-pl-md flex justify-end">
          <slot
            v-if="!layout.footer.noRightSlot"
            name="right"
            :footer="layout.footer"
          >
            <div v-if="layout.footer.showVersion">
              {{ $t("qs-version") }} {{ version }}
            </div>
          </slot>
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { chain } from "src/helpers/chain";

export default {
  name: "FooterLayout",

  emits: ["click"],

  props: {
    layout: Object,
  },

  computed: {
    version() {
      return this.$configuration.application.version.number;
    },

    footerClass() {
      const theme = this.$configuration.themeManager.getCurrentTheme();

      // Background
      const bg =
        "bg-" +
        chain(
          "primary",
          theme?.footer?.backcolor,
          this.layout.footer?.style?.backcolor
        );

      // Textcolor
      const text =
        "text-" +
        chain(
          "white",
          theme?.footer?.textcolor,
          this.layout.footer?.style?.textcolor
        );

      return bg + " " + text;
    },
  },
};
</script>

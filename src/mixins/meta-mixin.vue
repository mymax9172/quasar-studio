<script>
import { createMetaMixin } from "quasar";
import { configuration } from "src/boot/config";

const metaData = {
  // Set Document title
  title: configuration.application.title,
};

export default {
  mixins: [createMetaMixin(metaData)],

  computed: {
    storyboardPage() {
      return this.$route.meta.page;
    },
  },

  created() {
    metaData.title =
      this.storyboardPage.title +
      " - " +
      (configuration.application.title || configuration.application.name);
  },
};
</script>

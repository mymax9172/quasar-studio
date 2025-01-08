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

  watch: {
    storyboardPage() {
      console.log("page changed", this.storyboardPage);
      metaData.title = this.storyboardPage.title + " - " + (configuration.application.title || configuration.application.name);

      //this.$router.go(0);
    },
  },

  created() {
    metaData.title = this.storyboardPage.title + " - " + (configuration.application.title || configuration.application.name);
  },
};
</script>

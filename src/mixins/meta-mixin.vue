<script>
import { createMetaMixin } from "quasar";
import { configuration } from "src/boot/config";

const metaData = {
  // Set Document title
  title: configuration.application.name,
};

export default {
  mixins: [createMetaMixin(metaData)],
};
</script>

import { configuration } from "src/boot/config.js";

export default async (to, from, next) => {
  configuration.storyboardManager.setCurrent(to.meta.page);
  next();
};

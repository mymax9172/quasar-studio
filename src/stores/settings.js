import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    theme: "",
    locale: "",
    title: "",
  }),

  persist: true,

  actions: {
    /**
     * Set the locale and refresh the page
     * @param {String} locale Isocode
     */
    setLocale(locale) {
      if (locale != this.locale) {
        this.locale = locale;
        this.router.go(0);
      }
    },

    /**
     * Set current theme and refresh page
     * @param {String} theme Theme name
     */
    setTheme(theme) {
      if (theme != this.theme) {
        this.theme = theme;
        this.router.go(0);
      }
    },

    setTitle(title) {
      console.log("changing title");
      this.title = title;
    },
  },
});

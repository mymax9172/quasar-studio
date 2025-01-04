import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    theme: "",
    locale: "",
  }),

  persist: true,

  actions: {
    // Set the locale and refresh the page
    setLocale(locale) {
      if (locale != this.locale) {
        this.locale = locale;
        this.router.go(0);
      }
    },
  },
});

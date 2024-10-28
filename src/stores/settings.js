import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    theme: "",
    language: "",
  }),

  persist: true,
});

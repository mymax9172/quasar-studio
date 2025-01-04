<template>
  <q-btn flat round v-if="active">
    <q-avatar size="md">
      <span :class="currentCountryClass"></span>
    </q-avatar>
    <q-menu>
      <q-list dense>
        <q-item v-close-popup clickable v-for="lang in languages" :key="lang" @click="changeLanguage(lang)">
          <q-item-section side>
            <span :class="'fi fi-' + getCountryCode(lang)"></span>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ getLanguageName(lang) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";
</style>

<script>
export default {
  name: "QsLangSwitcher",

  computed: {
    active() {
      return this.$configuration.languageManager.multiLanguage;
    },

    currentCountryClass() {
      if (!this.$configuration.languageManager.multiLanguage) return;

      const isocode = this.$i18n.locale;
      const countrycode = isocode.split("-")[1].toLowerCase();
      return "fi fi-" + countrycode;
    },

    languages() {
      return this.$configuration.languageManager.supportedLanguages;
    },
  },

  methods: {
    getLanguageName(language) {
      return this.$configuration.languageManager.getLanguageName(language.isocode);
    },

    getCountryCode(language) {
      const countrycode = language.isocode.split("-")[1].toLowerCase();
      return countrycode;
    },

    changeLanguage(language) {
      this.$i18n.locale = language.isocode;
      this.$configuration.languageManager.setCurrentLanguage(language.isocode);
    },
  },
};
</script>

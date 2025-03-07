// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
  .prepend()
  .override("nuxt/typescript", {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  });

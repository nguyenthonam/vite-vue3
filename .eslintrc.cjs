/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "no-redeclare": "off",
    "no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-redeclare": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "import/no-duplicates": "off",
    "vue/one-component-per-file": "off",
    "no-undef": "off",
    "vue/no-parsing-error": "off",
    "import/no-unresolved": "off",
    "unicorn/no-unsafe-regex": "off",
    "vue/no-v-model-argument": "off",
    "vue/no-multiple-template-root": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/named": "off",
    "import/no-unused-modules": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};

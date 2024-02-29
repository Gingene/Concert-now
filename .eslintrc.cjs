/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'standard', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['e', 'ctx', 'context', 'state', 'config', 'item'],
      },
    ],
  },
};

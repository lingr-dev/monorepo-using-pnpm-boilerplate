import process from 'node:process';
import globals from 'globals';
import js from '@eslint/js';

import pluginVue from 'eslint-plugin-vue';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// parsers
import vueParser from 'vue-eslint-parser';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-use-before-define': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      semi: 2,
    },
  },
  pluginPrettierRecommended,
];

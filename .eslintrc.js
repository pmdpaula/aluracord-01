module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-prettier',
    'simple-import-sort',
  ],
  settings: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    // 'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/extensions': ['error', 'never', { pattern: { '.svg': 'always' } }],

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'import/prefer-default-export': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // 'implicit-arrow-linebreak': ['error', 'below'],

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // space-before-function-paren: off,
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // 'comma-dangle': 'off',
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    indent: 'off',
    // '@typescript-eslint/indent': ['error', 2], // 2 spaces === 1 tab
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-no-bind': [
      'error',
      { allowFunctions: true, ignoreDOMComponents: true },
    ],
  },
};

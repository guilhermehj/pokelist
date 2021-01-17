module.exports = {
  extends: ['plugin:prettier/recommended', 'airbnb-base'],

  plugins: ['prettier', 'eslint-plugin-import-helpers'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: ['react^', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};

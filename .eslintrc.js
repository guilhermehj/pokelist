module.exports = {
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier', 'eslint-plugin-import-helpers'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', '/^@/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: {order: 'asc', ignoreCase: true},
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
};

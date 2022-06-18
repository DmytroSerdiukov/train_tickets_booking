module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    indent: 'off',
    'no-trailing-space': 'off',
    'no-unused-vars': 'off',
    'import/newline-after-import': 'off',
    'padded-block': 'off',
    'no-trailing-spaces': 'off',
    'keyword-spacing': 'off',
    'no-undef': 'off',
    'padded-blocks': 'off',
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],
    ...require('eslint-config-prettier').rules,
    ...require('eslint-config-prettier/@typescript-eslint').rules,
  },
};

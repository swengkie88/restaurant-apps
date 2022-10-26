module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    'codeceptjs/codeceptjs': true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'no-new': 'off',
    'class-method-use-this': 'off',
    'consistent-return': 'off',
  },
};

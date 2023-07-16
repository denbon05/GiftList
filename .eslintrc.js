module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/extensions': 'off',
    'no-console': 'off',
  },
};

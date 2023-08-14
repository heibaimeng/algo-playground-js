module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prefer-const': 'off',
    'no-return-assign': 'off',
    'no-use-before-define': ['error', { functions: false }],
  },
};

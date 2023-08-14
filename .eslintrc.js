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
    'no-bitwise': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-console': 'off',
  },
};

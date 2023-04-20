module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:jest-formatting/strict',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {sourceType: 'module'},
  plugins: ['@typescript-eslint', 'testing-library', 'jest-formatting'],
  ignorePatterns: [
    'node_modules/',
    'coverage/',
    'android/',
    'ios/',
    'vendor/',
    '.jest/',
  ],
};

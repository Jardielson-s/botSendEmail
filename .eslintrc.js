module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "plugin:@typescipt-eslint/recommended",
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {}
}
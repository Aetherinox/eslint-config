module.exports = {
  env: {
    es6: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  rules: {
    strict: "error",
  },
};

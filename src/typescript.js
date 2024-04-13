module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "tsdoc/syntax": "warn",
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        ignores: ["modules"],
      },
    ],
    "node/no-missing-import": [
      "error",
      {
        tryExtensions: [".js", ".ts", ".d.ts"],
      },
    ],
  },
};

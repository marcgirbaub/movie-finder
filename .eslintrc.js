module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/naming-convention": ["off"],
      },
    },

    {
      files: ["src/app/services/movies/movies.service.ts"],
      rules: { "guard-for-in": "off" },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "new-cap": [
      "error",
      {
        capIsNewExceptions: [
          "NgModule",
          "Component",
          "Injectable",
          "Inject",
          "Input",
        ],
      },
    ],
  },
};

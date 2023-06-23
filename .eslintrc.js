module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "jest", "prettier"],
  extends: [
    "next/core-web-vitals",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
    "prefer-promise-reject-errors": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "class-methods-use-this": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
      },
    ],
  },
  ignorePatterns: ["**/build/**"],
};

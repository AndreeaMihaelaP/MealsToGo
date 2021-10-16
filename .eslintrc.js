module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/parser": "babel-eslint",
    "import/resolver": "eslint-import-resolver-babel-module:",
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-undef": "off",
    "react/jsx-key": "warn",
  },
};

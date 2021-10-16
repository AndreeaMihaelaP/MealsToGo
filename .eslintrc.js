module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
  ],
  settings: {
    "import/parser": "babel-eslint",
    "import/resolver": "eslint-import-resolver-babel-module:",
    "react-native/style-sheet-object-names": ["EStyleSheet"],
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    "no-undef": "off",
    "react-native/no-raw-text": "off",
    "react-native/no-inline-styles": 1,
  },
};

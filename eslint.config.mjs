import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: reactPlugin,
      js,
    },
    extends: [
      "js/recommended",
      "plugin:react/recommended"
    ],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect", // auto-detect your React version
      },
    },
    rules: {
      // Customize rules here
      "react/prop-types": "off", // example common override if you don't use prop-types
    },
  },
]);

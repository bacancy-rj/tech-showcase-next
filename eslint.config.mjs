import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    root: true,
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
      "eslint:recommended",
      "prettier",
      "plugin:jest/recommended"
    ],
    plugins: ["jest"],
    rules: {
      "tailwindcss/classnames-order": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    }
  }),
];

export default eslintConfig;

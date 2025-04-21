import js from "@eslint/js";
import globals from "globals";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintPrettier from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";
import tsEslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tsEslint.config({
  ignores: ["dist", "node_modules"],
  extends: [js.configs.recommended, ...tsEslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  settings: {
    react: {
      version: "detect",
    },
  },
  languageOptions: {
    globals: { ...globals.browser, ...globals.node, ...globals.es2021 },
  },
  plugins: {
    react: eslintReact,
    import: eslintImport,
    "react-hooks": eslintReactHooks,
    "react-refresh": eslintReactRefresh,
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    ...eslintPrettier.rules,
    ...eslintReactHooks.configs.recommended.rules,
    ...eslintReact.configs.recommended.rules,
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          [
            "^(api|routes|pages|stores|components|assets|shared|design-system|src|models)(/.*|$)",
          ],
          ["^\\u0000"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "@/no-restricted-imports": [
      "error",
      {
        patterns: [".*"],
      },
    ],
  },
});

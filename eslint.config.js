/** @type {import('eslint').Linter.Config[]} */
// eslint.config.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // Add Prettier last to override ESLint formatting rules
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["import", "unused-imports", "@typescript-eslint"],
  rules: {
    // Basic Rules
    "no-console": "error", // Block console.log
    "no-debugger": "error", // Block debugger

    // Import Ordering
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/first": "error", // Ensure imports are at the top

    // Unused Imports/Vars
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",

    // TypeScript-Specific
    "@typescript-eslint/consistent-type-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {}, // Resolve TypeScript paths
    },
  },
};
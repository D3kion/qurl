// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: ["dist/**", ".next/**"],
  extends: ["@qurl/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
};

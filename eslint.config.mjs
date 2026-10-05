import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Wealth OS historical/archive page snapshots:
    "app/accounts/*.backup.tsx",
    "app/accounts/*.before-management.tsx",
    "app/accounts/*.management-backup.tsx",
    "app/accounts/*.pre-management.tsx",
    "app/thrift/*.pre-add.tsx",
    "app/thrift/*.pre-management-ui.tsx",
    "app/thrift/*.pre-management.tsx",
  ]),
]);

export default eslintConfig;
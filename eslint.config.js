import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        extends: [
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "no-unused-vars": "off", // Disable JS version
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^[A-Z_]"
                }
            ]
        }
    }
]);
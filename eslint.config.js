import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
<<<<<<< HEAD
=======
import tseslint from 'typescript-eslint'
>>>>>>> 6075cf3b8bd892a9ac9a8f6b33458eada61bf131
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
<<<<<<< HEAD
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
=======
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
>>>>>>> 6075cf3b8bd892a9ac9a8f6b33458eada61bf131
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
<<<<<<< HEAD
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
=======
>>>>>>> 6075cf3b8bd892a9ac9a8f6b33458eada61bf131
    },
  },
])

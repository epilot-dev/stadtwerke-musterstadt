import type { Linter } from 'eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';

const config: Linter.Config[] = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser as Linter.Parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        HTMLElement: 'readonly',
        SVGSVGElement: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint as unknown as Record<string, unknown>,
      react: react as unknown as Record<string, unknown>,
      'react-hooks': reactHooks as unknown as Record<string, unknown>,
      prettier: prettier as unknown as Record<string, unknown>,
    },
    rules: {
      ...tseslint.configs.recommended?.rules,
      ...react.configs.recommended?.rules,
      ...reactHooks.configs.recommended?.rules,
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '*.config.js', '*.config.mjs'],
  },
];

export default config;

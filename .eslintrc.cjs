module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:eslint-plugin-import/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '~api/**',
            group: 'internal',
          },
          {
            pattern: '~lib/**',
            group: 'internal',
          },
          {
            pattern: '~services/**',
            group: 'internal',
          },
          {
            pattern: '~utils/**',
            group: 'internal',
          },
          {
            pattern: '~constants/**',
            group: 'internal',
          },
          {
            pattern: '~store/**',
            group: 'internal',
          },
          {
            pattern: '~models/**',
            group: 'internal',
          },
          {
            pattern: '~providers/**',
            group: 'internal',
          },
          {
            pattern: '~pages/**',
            group: 'internal',
          },
          {
            pattern: '~components/**',
            group: 'internal',
          },
          {
            pattern: '~assets/**',
            group: 'internal',
          },
          {
            pattern: '../**',
            group: 'internal',
          },
          {
            pattern: './**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./vite.config.ts'],
      },
    ],
  },
  overrides: [
    // typescript
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      extends: [
        'plugin:eslint-plugin-import/typescript',
        'eslint-config-airbnb-typescript',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['tsconfig.json'],
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/indent': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/msw/**',
              '**/react-query/utils.tsx',
              '**/react-router/utils.ts',
            ],
          },
        ],
      },
    },
    // tests
    {
      files: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      rules: {
        'testing-library/no-debugging-utils': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

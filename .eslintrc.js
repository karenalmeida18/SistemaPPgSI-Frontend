module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'max-len': ['off', {
      code: 100,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
    'no-console': 'warn',

    'no-param-reassign': ['error', {
      ignorePropertyModificationsFor: ['state'],
    }],
    'no-unused-vars': ['error', {
      args: 'none',
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      tsx: 'never',
    }],
    'one-var': 'off',
    'import/prefer-default-export': 'off',
    'one-var-declaration-per-line': 'off',
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

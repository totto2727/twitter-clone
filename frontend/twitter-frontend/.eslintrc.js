const path = require('path')

module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['jest', "import"],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        config: path.join(__dirname, './webpack.config.js'),
        alwaysTryTypes: true
      },
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}

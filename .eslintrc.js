module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest-dom'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off'],
    'import/prefer-default-export': 'off'
  }
};

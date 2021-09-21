/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true
    },

    tsconfigRootDir: __dirname,
    project: 'tsconfig.json'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    quotes: [2, 'single'],
    'max-len': ['warn', { code: 240 }],
    'keyword-spacing': ['error', { before: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'comma-dangle': ['error', 'only-multiline'],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'constructor-super': 'error',
    'no-duplicate-imports': 'error',
    'space-before-blocks': 'error',
    'spaced-comment': ['error', 'always'],
    'no-useless-escape': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['self'] }]
  }
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       moduleDirectory: ['node_modules', 'src/'],
  //       extensions: ['.js', '.ts']
  //     }
  //   }
  // }
};

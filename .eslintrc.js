module.exports = {
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],

  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],

  'parser': '@typescript-eslint/parser',

  'env': {
    'browser': true,
    'node': true
  },

  'rules': {
    'prettier/prettier': [
      'error', {
        'singleQuote': true,
        'semi': false
      }
    ]
  }
}

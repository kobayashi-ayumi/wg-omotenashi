module.exports = {
  'plugins': [
    'stylelint-scss'
  ],

  'extends': [
    './node_modules/prettier-stylelint/config.js',
    'stylelint-config-standard',
    'stylelint-config-rational-order'
  ],

  'ignoreFiles': [
    '**/node_modules/**'
  ],

  'rules': {
    // SCSS必須設定
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}

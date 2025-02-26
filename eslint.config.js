const neo = require('neostandard');

module.exports = [
  ...neo({
    semi: true
  }),
  {
    rules: {
      '@stylistic/comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],
      '@stylistic/space-before-function-paren': 'off'
    }
  }
];

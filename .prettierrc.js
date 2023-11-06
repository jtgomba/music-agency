/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxSingleQuote: false,
  arrowParens: 'always',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    locales: ['ar', 'ar'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
};

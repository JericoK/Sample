const path = require('path');

module.exports = {
  webpack: {
    alias: {
      _assets: path.resolve(__dirname, 'src/assets/'),
      _components: path.resolve(__dirname, 'src/components/'),
      _constants: path.resolve(__dirname, 'src/constants/'),
      '_core-ui': path.resolve(__dirname, 'src/core-ui/'),
      _helpers: path.resolve(__dirname, 'src/helpers/'),
      _hooks: path.resolve(__dirname, 'src/hooks/'),
      _pages: path.resolve(__dirname, 'src/pages/'),
      _redux: path.resolve(__dirname, 'src/redux/'),
      _routes: path.resolve(__dirname, 'src/routes/'),
      _services: path.resolve(__dirname, 'src/services/'),
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};

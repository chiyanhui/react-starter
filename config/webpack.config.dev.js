const merge = require('webpack-merge');

const baseConfig = require('./webpack.config');

process.env.BABEL_ENV = 'development';
const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
}

module.exports = merge(baseConfig, devConfig);

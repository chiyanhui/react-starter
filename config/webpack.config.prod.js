const merge = require('webpack-merge');

const baseConfig = require('./webpack.config');
const copyPublic = require('../util/copyPublic');

process.env.BABEL_ENV = 'production';
const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].bundle.js',
  },
}

module.exports = copyPublic().then(() => merge(baseConfig, devConfig));

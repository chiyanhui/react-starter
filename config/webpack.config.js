const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.BABEL_ENV = 'production';
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, use: ['babel-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: './public',
    port: 8000,
    hot: true,
    open: true,
  },
};

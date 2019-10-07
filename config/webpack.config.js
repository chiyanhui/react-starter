const path = require('path');

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
  ],
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    open: true,
  },
};

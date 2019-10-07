const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: paths.appDist,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react-app'],
          },
        },
      ] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.appHtml,
    }),
  ],
  devServer: {
    contentBase: paths.appPublic,
    port: 8000,
    hot: true,
    open: true,
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: paths.appDist,
  },
  resolve: {
    alias: {
      '@': paths.appSrc,
    },
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
      { test: /\.(png|jpe?g|gif|svg)$/, use: ['file-loader'] },
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

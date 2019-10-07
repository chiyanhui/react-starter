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
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': paths.appSrc,
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.(js|jsx)$/, use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react-app'],
              },
            },
          ] },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/media/[name].[hash:8].[ext]',
            }
          },
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            }
          },
        ],
      },
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

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpackConfigFactory = require('../../../webpack.base')

module.exports = (env) => {
  const isProMode = !!(env.prod || env.production)
  const styleLoader = isProMode ? MiniCssExtractPlugin.loader : 'style-loader'
  const config = {
    mode: isProMode ? 'production' : 'development',
    context: path.resolve(__dirname, '..'),
    entry: {
      index: ['./src/index.tsx']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '..dist/')
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          exclude: /\.module\.styl$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader'
            },
            'stylus-loader'
          ]
        },
        {
          test: /\.module\.styl$/,
          use: [
            styleLoader,
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                namedExport: true,
                camelCase: true,
                sourceMap: !isProMode,
                modules: true,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:6]'
              }
            },
            'stylus-loader?resolve url'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|cur|woff|woff2|eot|ttf|svg)$/,
          use: [{
            loader: 'url-loader?limit=100000',
            options: {
              outputPath: 'assets/images'
            }
          }]
        },
        {
          test: /\.css$/,
          use: [styleLoader, 'css-loader']
        }
      ]
    },
    plugins: [
      new webpack.WatchIgnorePlugin([/styl\.d\.ts$/]),
    ]
  }

  if (isProMode) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash:10].css',
      })
    )
  }

  return webpackConfigFactory(env, config)
}

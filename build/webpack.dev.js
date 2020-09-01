const path = require('path')
const { merge } = require('webpack-merge')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

function resolve (pathStr) {
  return path.resolve(__dirname, '..', pathStr)
}

const commonConfig = require('./webpack.common')
const tsconfigPath = resolve('tsconfig.json')

module.exports = (env, config) => {
  const baseConfig = {
    mode: 'development',
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configFile: tsconfigPath
        }
      }),
      new ForkTsCheckerNotifierWebpackPlugin({ skipSuccessful: true }),
    ]
  }

  const result = merge(commonConfig, baseConfig, config)
  return result
}

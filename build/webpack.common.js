const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

function resolve (pathStr) {
  return path.resolve(__dirname, '..', pathStr)
}

const tsconfigPath = resolve('tsconfig.json')
const tslintPath = resolve('tslint.json')
const babelConfig = require(resolve('babel.config'))

const rootNodeModules = resolve('node_modules')

const tsLoaderOption = {
  configFile: tsconfigPath,
  transpileOnly: true,
  experimentalWatchApi: true,
  logLevel: 'warn'
}

const tslintOption = {
  configFile: tslintPath
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.styl', '.js', '.jsx'],
    modules: [ rootNodeModules, 'node_modules' ],
    plugins: [ new TsconfigPathsPlugin({ configFile: tsconfigPath }) ],
  },
  resolveLoader: { modules: [rootNodeModules] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader?cacheDirectory', options: babelConfig },
          { loader: 'ts-loader', options: tsLoaderOption },
        ]
      },
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader?cacheDirectory', options: babelConfig }
        ]
      }
    ]
  },
  performance: { hints: false }
}

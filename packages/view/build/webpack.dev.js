const webpack = require('webpack')
const webpackConfig = require('./webpack.config')({ dev: true })
const WebpackDevServer = require('webpack-dev-server')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

console.log('[DevServer] starting...')

webpackConfig.mode = 'development'
webpackConfig.devtool = 'cheap-module-eval-source-map'
webpackConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html')
  })
)

const port = 9999
const compiler = webpack(webpackConfig)
const options = {
  disableHostCheck: true,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../dist/'),
  publicPath: webpackConfig.output.publicPath,
  overlay: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
}

const server = new WebpackDevServer(compiler, options)
server.listen(port, '0.0.0.0', () => {
  console.log('[DevServer] started success...')
  console.log(`[DevServer] http://localhost:${port}`)
})

module.exports = function (env, config) {
  let webpackConfigFactory
  const prodMode = !!(env.prod || env.production)
  if (prodMode) {
    webpackConfigFactory = require('./build/webpack.prod')
  } else {
    webpackConfigFactory = require('./build/webpack.dev')
  }
  return webpackConfigFactory(env, config)
}

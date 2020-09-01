module.exports = {
  compact: false,
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            '> 1%',
            'android >= 4.4',
            'iOS >= 11.0',
            'chrome >= 37',
            'ie >= 10',
            'last 2 and_qq versions',
            'last 2 and_uc versions',
            'Firefox ESR'
          ]
        },
        corejs: '2',
        modules: false,
        loose: true,
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { strict: false }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-async-to-generator'],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-transform-runtime']
  ]
}
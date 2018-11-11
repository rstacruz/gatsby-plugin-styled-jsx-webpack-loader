exports.onCreateWebpackConfig = (
  { actions, loaders, getConfig },
  pluginOptions = {}
) => {
  const config = getConfig()

  const oneOfs = config.module.rules.filter(rule => rule.oneOf)
  const loader = require('styled-jsx/webpack').loader

  const extension = pluginOptions.extension || 'css'

  if (oneOfs && oneOfs[0]) {
    oneOfs[0].oneOf = [
      {
        test: new RegExp(`\\.${extension}$`) /* /\.css$/ */,
        resourceQuery: /resolve/,
        use: [loaders.js(), { loader, options: { type: 'resolve' } }]
      },
      {
        test: new RegExp(`\\.${extension}$`) /* /\.css$/ */,
        resourceQuery: /global/,
        use: [loaders.js(), { loader, options: { type: 'global' } }]
      },
      {
        test: new RegExp(`\\.${extension}$`) /* /\.css$/ */,
        resourceQuery: /scoped/,
        use: [loaders.js(), { loader, options: { type: 'scoped' } }]
      },
      {
        test: new RegExp(`\\.resolve\\.${extension}$`) /* /\.css$/ */,
        use: [loaders.js(), { loader, options: { type: 'resolve' } }]
      },
      {
        test: new RegExp(`\\.global\\.${extension}$`) /* /\.css$/ */,
        use: [loaders.js(), { loader, options: { type: 'global' } }]
      },
      {
        test: new RegExp(`\\.scoped\\.${extension}$`) /* /\.css$/ */,
        use: [loaders.js(), { loader, options: { type: 'scoped' } }]
      },
      ...oneOfs[0].oneOf
    ]
  }

  actions.replaceWebpackConfig(config)
}

const CracoAlias = require('craco-alias')
module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: process.env.REACT_APP_BASEURL,
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
}

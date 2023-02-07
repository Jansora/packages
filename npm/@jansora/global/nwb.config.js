module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      // Change config as you wish

      // You MUST return the edited config object
      return config
    },
    extra: {
      module: {
        rules: [{
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        },
          {
            test: /\.less$/i,
            use: [
              // compiles Less to CSS
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // compiles Less to CSS
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          }
        ]

      }

    }
  }
}

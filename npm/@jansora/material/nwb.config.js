module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  devServer: {
    // https: true,
    // enabled: true,
    // path: '/api',
    proxy: {
      '/api': {
        target: 'https://www.jansora.com/',
        secure: false,
      }
    },
  },
  webpack: {
    config(config) {
      // Change config as you wish

      // You MUST return the edited config object
      return config
    },
    rules: {
      babel: {
        test: /\.jsx?/
      }
    },
    extra: {
      resolve: {
        extensions: ['.js', 'DefaultApp.js', '.jsx'],
      },
      module: {
        rules: [
          {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        },
          {
            test: /\.less$/i,
            use: [
              // compiles Less to CSS
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
                options: {
                  modifyVars: {  // 在less-loader@6 modifyVars 配置被移到 lessOptions 中
                    'arcoblue-6': '#f85959',
                  },
                  javascriptEnabled: true
                }
              }


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
        ],


      }

    }
  }
}

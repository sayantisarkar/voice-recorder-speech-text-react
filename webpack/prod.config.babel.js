import webpack              from 'webpack'
import path                 from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin    from 'html-webpack-plugin'
import CopyWebpackPlugin    from 'copy-webpack-plugin'
import { appConfig }        from '../src/configs/config-main'

module.exports = {
  mode: 'production',

  output: {
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: '@import "config-styles";',
              includePaths: [
                path.join(__dirname, '..', '/src/configs')
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __DEVELOPMENT__: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ])
  ]
}

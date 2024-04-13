const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map', // mode为development时，devtool默认为eval
  entry: './src/index_esModule.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build') // 必须是绝对路径
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack plugins'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}

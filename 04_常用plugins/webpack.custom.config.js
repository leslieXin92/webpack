const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopeWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build') // 必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配资源
        use: [ // 从后往前执行
          'style-loader',  // { loader: 'style-loader' } 简写形式
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 // 为了处理文件import导致引入的文件未被调用下边的loader, 下边有几个loader就写几
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack plugins',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    }),
    new CopeWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: [
              '**/index.html',
              '**/.DS_Store',
              '**/test.txt'
            ]
          }
        }
      ]
    })
  ]
}

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { basename } = require('path');


let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
console.log(mode + ' mode');


module.exports = {
  mode: mode,
  entry: {
    main: './src/assets/js/main.js',
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/fonts/[hash][ext][query]',
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '*'],
    modules: [path.resolve(__dirname, "js"), "node_modules"],
    alias: {
      'jquery': 'jquery/src/jquery',
      'jquery-ui': 'jquery-ui/ui',
      '@': path.resolve(__dirname, '../../../'),
      '@libs': path.resolve(__dirname, 'src/assets/libs/'),
      '@Ui': path.resolve(__dirname, 'src/assets/libs/Ui-Kit/'),
    },
  },
  stats: {
    children: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HTMLWebpackPlugin({
      template: './src/index.pug',
    }),
    new CopyWebpackPlugin({
      patterns: [

        {
          from: path.resolve(__dirname, 'src/assets/libs/Ui-Kit/cards/room-cards/img'),
          to: path.resolve(__dirname, 'dist/images/rooms')
        },
        {
          from: path.resolve(__dirname, 'src/assets/libs/Ui-Kit/form-elements/rewievs/img'),
          to: path.resolve(__dirname, 'dist/images/avatar')
        }, {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: path.resolve(__dirname, 'dist/images')
        }, {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
  ],
  module: {
    rules: [{
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['postcss-preset-env',
                  {
                    // Options
                  },
                ],
              ],
            },
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)&/i,
      type: 'asset/resource',
      exclude: /fonts/,
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
      type: 'asset/resource',
      exclude: /images/,
    },
    {
      test: /\.pug/,
      loader: 'pug-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.m?js&/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ],
  },
};
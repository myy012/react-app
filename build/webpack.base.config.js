const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const utils = require('./utils');
const config = require('./config');

module.exports = {
    entry: {
        'todoList': './src/toDoList/index.js'
    },
    output: {
        path: utils.resolve('dist'),
        filename: utils.assetsPath('js/[name].[hash:6].js'),
        chunkFilename: utils.assetsPath('js/[name].[hash:6].js'),
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common',
                    minChunks: 2,
                },
                deps: {
                    chunks: 'all',
                    name: 'deps',
                    test:  /[\\/]node_modules[\\/]/,
                }
            }
        }
    },
    resolve: {
        modules: [
            "node_modules",
            utils.resolve('src')
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    module: {
        rules: [
            ...utils.styleLoaders(),
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 8192,
                    name: utils.assetsPath('img/[name].[ext]'),
                    publicPath: config.dev.assetsPublicPath
                }
            }
        ]
    },
    plugins: [
    ]
}

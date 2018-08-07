process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./config');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new HTMLWebpackPlugin({
            template: config.build.index,
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            jsPath: './static/js/',
            title: 'todoList'
        }),
        new webpack.DefinePlugin({
            'process.env': config.build.env
        }),
        new UglifyJsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new FaviconsWebpackPlugin({
            logo: './logo.png',
            prefix: 'favicon-',
            emitStats: false,
            inject: true,
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
              }
        }),
    ]
});

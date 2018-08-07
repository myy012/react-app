process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config');
const utils = require('./utils');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            title: 'homepage',
            template: config.build.index,
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
});
